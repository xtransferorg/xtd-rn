/* eslint-disable react-native/no-inline-styles */
/**
 * Container for ScrollView/FlatList, providing custom pull-to-refresh Header support
 */

import React, { Component } from 'react';
import {
  View,
  ViewStyle,
  Animated,
  PanResponder,
  PanResponderInstance,
  GestureResponderEvent,
  PanResponderGestureState,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
  Dimensions,
} from 'react-native';
import { Props } from './interface';
import LottieView from 'lottie-react-native';
import { isFunction } from 'lodash';

const DEFAULT_HEADER_HEIGHT = 80;

interface State {
  // 容器顶部的偏移距离
  containerTop: Animated.Value;
  fadeAnim: Animated.Value;
  scrollEnabled: boolean;
  loadingText: string;
  refreshing: boolean;
}

const styles = {
  con: {
    flex: 1,
    // Android上，不设置这个背景色，貌似会触发  onPanResponderTerminate ！！！
    // backgroundColor: 'transparent',
  } as ViewStyle,
  pullingIcon: {
    width: 50,
    height: 50,
  },
  pullingText: {
    color: '#666666',
    fontSize: 11,
  },
};

class PullToRefresh extends Component<Props, State> {
  static defaultProps = {
    style: styles.con,
    refreshing: false,
    topPullThreshold: 2,
    headerHeight: DEFAULT_HEADER_HEIGHT,
  };

  // 当前容器移动的距离
  containerTranslateY = 0;

  // 内部scroll容器顶部滚动的距离
  innerScrollTop = 0;

  // 容器上的 PanResponder
  _panResponder: PanResponderInstance;

  // inner scroll ref
  scrollRef: any = null;

  outerRef: any = null;

  animationRef = React.createRef<LottieView>();

  constructor(props: Props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      // 容器偏离顶部的距离
      containerTop: new Animated.Value(0),
      // 是否允许内部scrollview滚动
      scrollEnabled: false,
      loadingText: '',
      refreshing: false,
    };

    this.state.containerTop.addListener(this.containerTopChange);

    // this.onStartShouldSetResponder = this.onStartShouldSetResponder.bind(this);
    this.onMoveShouldSetResponder = this.onMoveShouldSetResponder.bind(this);
    this.onPanResponderMove = this.onPanResponderMove.bind(this);
    this.onPanResponderRelease = this.onPanResponderRelease.bind(this);
    this.onPanResponderTerminate = this.onPanResponderTerminate.bind(this);
    this.onResponderTerminationRequest =
      this.onResponderTerminationRequest.bind(this);

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.onMoveShouldSetResponder,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
      onPanResponderTerminationRequest: this.onResponderTerminationRequest,
      onPanResponderTerminate: this.onPanResponderTerminate,
      onShouldBlockNativeResponder: () => {
        return true;
      },
    });
  }

  updateInnerScrollRef = (ref: any) => {
    this.scrollRef = ref;
    if (this.outerRef) {
      this.outerRef.current = ref;
    }
  };

  onMoveShouldSetResponder(_: any, gestureState: PanResponderGestureState) {
    if (this.props.refreshing) {
      // 正在刷新中，不接受再次下拉
      return false;
    }
    return !this.state.scrollEnabled && gestureState.dy !== 0;
  }

  onPanResponderMove(
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) {
    const { headerHeight = DEFAULT_HEADER_HEIGHT } = this.props;
    if (gestureState.dy >= 0) {
      // 判断是否达到了触发刷新的条件
      const threshold = this.props.refreshTriggerHeight || headerHeight;
      const distance = gestureState.dy * 0.5;
      this.state.containerTop.setValue(distance);
      this.state.fadeAnim.setValue(distance / threshold);

      if (gestureState.dy > threshold) {
        this.setState({ loadingText: this.props.locale.release });
      } else {
        this.setState({ loadingText: this.props.locale.pullToRefresh });
      }
    } else {
      this.state.containerTop.setValue(0);
      if (this.scrollRef) {
        if (typeof this.scrollRef.scrollToOffset === 'function') {
          // inner is FlatList
          this.scrollRef.scrollToOffset({
            offset: -gestureState.dy,
            animated: true,
          });
        } else if (typeof this.scrollRef.scrollTo === 'function') {
          // inner is ScrollView
          this.scrollRef.scrollTo({
            y: -gestureState.dy,
            animated: true,
          });
        }
      }
    }
  }

  sleep = (delay: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, delay);
    });
  };

  handleRefresh = async () => {
    this.beginLoadingAnimation();
    const { onRefresh, completeDelay } = this.props;
    this.setState({
      loadingText: this.props.locale.refreshing,
      refreshing: true,
    });
    await Promise.resolve(onRefresh && onRefresh());
    this.setState({
      loadingText: this.props.locale.finish,
      refreshing: false,
    });
    await this.sleep(completeDelay || 500);
    this.finishLoadingAnimation();
    this.setState({ loadingText: '' });
  };

  onPanResponderRelease = () => {
    const { headerHeight = DEFAULT_HEADER_HEIGHT } = this.props;
    // 判断是否达到了触发刷新的条件
    const threshold = this.props.refreshTriggerHeight || headerHeight;
    if (this.containerTranslateY >= threshold) {
      // 触发刷新
      this.handleRefresh();
    } else {
      // 没到刷新的位置，回退到顶部
      this._resetContainerPosition();
      this.setState({ loadingText: this.props.locale.pullToRefresh });
    }
    this.checkScroll();
  };

  onResponderTerminationRequest(): boolean {
    return false;
  }

  onPanResponderTerminate() {
    this._resetContainerPosition();
    this.checkScroll();
  }

  _resetContainerPosition() {
    Animated.timing(this.state.containerTop, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  // 下拉容器的过程中，动态传递下拉的距离给 header 组件，直接调用方法，不走本组件的 setState，避免卡顿
  containerTopChange = ({ value }: { value: number }) => {
    this.containerTranslateY = value;
  };

  innerScrollCallback = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.innerScrollTop = event.nativeEvent.contentOffset.y;
    if (isFunction(this.props.children?.props?.onScroll)) {
      this.props.children?.props?.onScroll(event);
    }
    this.checkScroll();
  };

  checkScroll = () => {
    if (this.isInnerScrollTop()) {
      if (this.state.scrollEnabled) {
        this.setState({
          scrollEnabled: false,
        });
      }
    } else {
      if (!this.state.scrollEnabled) {
        this.setState({
          scrollEnabled: true,
        });
      }
    }
  };

  isInnerScrollTop() {
    return this.innerScrollTop <= (this.props.topPullThreshold || 0);
  }

  beginLoadingAnimation() {
    const { headerHeight = DEFAULT_HEADER_HEIGHT, refreshingHoldHeight } =
      this.props;
    // 从 未加载 变化到 加载中
    const holdHeight = refreshingHoldHeight || headerHeight;

    Animated.parallel([
      Animated.timing(this.state.containerTop, {
        toValue: holdHeight,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    this.animationRef.current?.play();
  }

  finishLoadingAnimation() {
    // 从 加载中 变化到 未加载
    Animated.timing(this.state.containerTop, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    this.animationRef.current?.reset();
  }

  componentWillUnmount() {
    this.state.containerTop.removeAllListeners();
  }

  renderHeader() {
    const { headerHeight = DEFAULT_HEADER_HEIGHT, refreshTriggerHeight } =
      this.props;
    const percent = Animated.divide(
      this.state.containerTop,
      refreshTriggerHeight || headerHeight
    );

    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: Dimensions.get('window').width,
            top: -headerHeight,
            transform: [{ translateY: this.state.containerTop }],
            justifyContent: 'center',
            alignItems: 'center',
            height: headerHeight,
          },
          styles.con,
          {
            opacity: percent,
          },
        ]}
      >
        {this.props.HeaderComponent ? (
          this.props.HeaderComponent
        ) : (
          <Animated.View
            style={{
              transform: [
                {
                  scale: Animated.diffClamp(this.state.fadeAnim, 0.2, 1),
                },
              ],
            }}
          >
            <LottieView
              ref={this.animationRef}
              style={styles.pullingIcon}
              source={require('./PullingLoadingAnimation.json')}
              autoPlay={false}
              loop
            />

            <Text style={styles.pullingText}>{this.state.loadingText}</Text>
          </Animated.View>
        )}
      </Animated.View>
    );
  }

  render() {
    this.outerRef = (this.props.children as any)?.ref;
    const child = React.cloneElement(this.props.children, {
      onScroll: this.innerScrollCallback,
      bounces: false,
      alwaysBounceVertical: false,
      scrollEnabled: this.state.scrollEnabled,
      ref: this.updateInnerScrollRef,
    });

    return (
      <View style={[this.props.style, {}]} {...this._panResponder.panHandlers}>
        <Animated.View
          style={[
            { flex: 1, transform: [{ translateY: this.state.containerTop }] },
          ]}
        >
          {child}
        </Animated.View>
        {this.renderHeader()}
      </View>
    );
  }
}

export default PullToRefresh;
