import React, { useRef, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Swiper, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import type { SwiperInstance } from '../interface';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 200,
  height: 200,
};

const AdvancedFeatures = () => {
  const swiperRef = useRef<SwiperInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSwipeNext = () => {
    swiperRef.current?.swipeNext();
  };

  const handleSwipePrev = () => {
    swiperRef.current?.swipePrev();
  };

  const handleSwipeTo = (index: number) => {
    swiperRef.current?.swipeTo(index);
  };

  const handleTogglePause = () => {
    if (isPaused) {
      swiperRef.current?.resume();
    } else {
      swiperRef.current?.pause();
    }
    setIsPaused(!isPaused);
  };

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View>
      <Card>
        <Text style={styles.title}>手动控制轮播</Text>
        <Text style={styles.description}>通过 ref 手动控制轮播行为</Text>
        <View style={styles.wrapper}>
          <Swiper
            ref={swiperRef}
            loop
            autoplay={3000}
            showCounter
            onChange={handleChange}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Swiper.Item key={`manual-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>

        <View style={styles.controlButtons}>
          <Button size={Size.small} onPress={handleSwipePrev}>
            上一页
          </Button>
          <Button size={Size.small} onPress={handleSwipeNext}>
            下一页
          </Button>
          <Button size={Size.small} onPress={handleTogglePause}>
            {isPaused ? '继续' : '暂停'}
          </Button>
        </View>

        <View style={styles.controlButtons}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              key={`goto-${index}`}
              size={Size.small}
              onPress={() => handleSwipeTo(index)}
              style={currentIndex === index ? styles.activeButton : undefined}
            >
              {index + 1}
            </Button>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>禁用手势滑动</Text>
        <Text style={styles.description}>禁用手势滑动，只能自动轮播</Text>
        <View style={styles.wrapper}>
          <Swiper touchable={false} autoplay={4000} loop showCounter>
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`no-touch-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>后台继续播放</Text>
        <Text style={styles.description}>App 切换到后台时继续自动播放</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={2000} loopBackground showCounter>
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`background-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>自定义尺寸</Text>
        <Text style={styles.description}>自定义轮播图的宽度和高度</Text>
        <View style={styles.wrapper}>
          <Swiper width={300} height={200} loop autoplay={3000} showCounter>
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`custom-size-${index}`}>
                <Image source={logo} style={styles.customImage} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>
    </View>
  );
};

export default AdvancedFeatures;
