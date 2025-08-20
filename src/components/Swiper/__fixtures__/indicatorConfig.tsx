import React from 'react';
import { View, Image, Text } from 'react-native';
import { Swiper } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 200,
  height: 200,
};

const IndicatorConfig = () => {
  // 自定义指示器
  const customIndicator = (total: number, current: number) => (
    <View style={styles.customIndicator}>
      <Text style={styles.customIndicatorText}>
        {current + 1} - {total}
      </Text>
    </View>
  );

  return (
    <View>
      <Card>
        <Text style={styles.title}>指示器位置 - 顶部</Text>
        <Text style={styles.description}>指示器位于轮播图顶部</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} placement="top" swiperType="inner">
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`top-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>指示器位置 - 底部</Text>
        <Text style={styles.description}>指示器位于轮播图底部（默认）</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} placement="bottom" swiperType="inner">
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`bottom-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>外部布局指示器</Text>
        <Text style={styles.description}>指示器位于轮播图容器外部</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} placement="bottom" swiperType="outer">
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`outer-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>自定义指示器</Text>
        <Text style={styles.description}>使用自定义指示器样式</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} indicator={customIndicator}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Swiper.Item key={`custom-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>自定义指示器样式</Text>
        <Text style={styles.description}>自定义默认指示器的样式</Text>
        <View style={styles.wrapper}>
          <Swiper
            loop
            autoplay={3000}
            indicatorStyle={styles.customIndicatorStyle}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`styled-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>
    </View>
  );
};

export default IndicatorConfig;
