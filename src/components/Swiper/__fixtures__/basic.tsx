import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Space, Swiper } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 200,
  height: 200,
};

const SwiperScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <Text>水平轮播，自动播放，内部布局，顶部标识</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              swiperType="inner"
              placement="top"
              initialSwipe={0}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`inner-top-${index}`}>
                    <Image source={logo} />
                    <Text style={{ textAlign: 'center' }}>第{index + 1}页</Text>
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>水平轮播，自动播放, 内部布局，底部标识</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              swiperType="inner"
              placement="bottom"
            >
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <Swiper.Item key={`inner-bottom-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>垂直轮播，自动播放, 内部布局，左边标识</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              vertical
              swiperType="inner"
              placement="left"
              style={styles.height}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`inner-left-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>垂直轮播，自动播放, 内部布局，右边标识</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              vertical
              swiperType="inner"
              placement="right"
              style={styles.height}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`inner-right-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>水平轮播，自动播放，外部布局，轮播点位于底部</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              swiperType="outer"
              placement="top"
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`outer-top-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>水平轮播，自动播放, 外部布局，轮播点位于底部</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              swiperType="outer"
              placement="bottom"
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`outer-bottom-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>垂直轮播，自动播放, 外部布局，轮播点位于右部</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              vertical
              swiperType="outer"
              placement="left"
              style={styles.height}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`outer-left-${index}`}>
                    <Image source={logo} />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>

        <Card>
          <Text>垂直轮播，自动播放, 外部布局，轮播点位于右部</Text>
          <View style={styles.wrapper}>
            <Swiper
              loop
              autoplay={3000}
              showCounter
              vertical
              swiperType="outer"
              placement="right"
              style={styles.height}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <Swiper.Item key={`outer-right-${index}`}>
                    <Image source={logo} />
                    <Text style={{ textAlign: 'center' }}>第{index + 1}页</Text>
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default SwiperScreen;
