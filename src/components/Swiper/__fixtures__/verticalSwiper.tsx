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

const VerticalSwiper = () => {
  return (
    <View>
      <Card>
        <Text style={styles.title}>垂直轮播 - 左侧指示器</Text>
        <Text style={styles.description}>垂直方向轮播，指示器在左侧</Text>
        <View style={styles.wrapper}>
          <Swiper
            vertical
            loop
            autoplay={3000}
            showCounter
            placement="left"
            style={styles.height}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`vertical-left-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>垂直轮播 - 右侧指示器</Text>
        <Text style={styles.description}>垂直方向轮播，指示器在右侧</Text>
        <View style={styles.wrapper}>
          <Swiper
            vertical
            loop
            autoplay={3000}
            showCounter
            placement="right"
            style={styles.height}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`vertical-right-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>垂直轮播 - 无指示器</Text>
        <Text style={styles.description}>垂直方向轮播，隐藏指示器</Text>
        <View style={styles.wrapper}>
          <Swiper
            vertical
            loop
            autoplay={3000}
            showCounter
            indicator={false}
            style={styles.height}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Swiper.Item key={`vertical-no-indicator-${index}`}>
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

export default VerticalSwiper;
