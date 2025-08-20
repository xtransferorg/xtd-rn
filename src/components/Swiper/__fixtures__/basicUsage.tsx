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

const BasicUsage = () => {
  return (
    <View>
      <Card>
        <Text style={styles.title}>基础轮播</Text>
        <Text style={styles.description}>最简单的轮播用法</Text>
        <View style={styles.wrapper}>
          <Swiper>
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`basic-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>自动播放</Text>
        <Text style={styles.description}>开启自动播放功能</Text>
        <View style={styles.wrapper}>
          <Swiper autoplay={3000} loop>
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`autoplay-${index}`}>
                <Image source={logo} />
                <Text style={styles.pageText}>第{index + 1}页</Text>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>显示计数器</Text>
        <Text style={styles.description}>显示当前页数和总页数</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} showCounter>
            {Array.from({ length: 5 }).map((_, index) => (
              <Swiper.Item key={`counter-${index}`}>
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

export default BasicUsage;
