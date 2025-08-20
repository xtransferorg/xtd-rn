import React from 'react';
import { View, Image, Text } from 'react-native';
import { Swiper } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const productImages = [
  {
    uri: 'https://static.xtransfer.com/boss/static/42fb15a7adc94ec38c5a427b138b881a_ab98f89ec68b94bc.webp',
    title: '产品图 1',
  },
  {
    uri: 'https://static.xtransfer.com/boss/static/42fb15a7adc94ec38c5a427b138b881a_ab98f89ec68b94bc.webp',
    title: '产品图 2',
  },
  {
    uri: 'https://static.xtransfer.com/boss/static/42fb15a7adc94ec38c5a427b138b881a_ab98f89ec68b94bc.webp',
    title: '产品图 3',
  },
  {
    uri: 'https://static.xtransfer.com/boss/static/42fb15a7adc94ec38c5a427b138b881a_ab98f89ec68b94bc.webp',
    title: '产品图 4',
  },
];

const newsItems = [
  { title: '重要新闻 1', content: '这是一条重要的新闻内容...' },
  { title: '重要新闻 2', content: '这是另一条重要的新闻内容...' },
  { title: '重要新闻 3', content: '这是第三条重要的新闻内容...' },
];

const PracticalScenarios = () => {
  return (
    <View>
      <Card>
        <Text style={styles.title}>产品图片展示</Text>
        <Text style={styles.description}>商品详情页的图片轮播</Text>
        <View style={styles.wrapper}>
          <Swiper showCounter height={250}>
            {productImages.map((item, index) => (
              <Swiper.Item key={`product-${index}`}>
                <View style={styles.productItem}>
                  <Image source={item} style={styles.productImage} />
                  <Text style={styles.productTitle}>{item.title}</Text>
                </View>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>新闻卡片轮播</Text>
        <Text style={styles.description}>垂直方向的新闻卡片轮播</Text>
        <View style={styles.wrapper}>
          <Swiper
            vertical
            loop
            autoplay={5000}
            showCounter
            height={150}
            placement="right"
          >
            {newsItems.map((item, index) => (
              <Swiper.Item key={`news-${index}`}>
                <View style={styles.newsItem}>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsContent}>{item.content}</Text>
                </View>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>引导页轮播</Text>
        <Text style={styles.description}>App 引导页面轮播</Text>
        <View style={styles.wrapper}>
          <Swiper
            showCounter
            key="2"
            height={300}
            swiperType="outer"
            placement="bottom"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Swiper.Item key={`guide-${index}`}>
                <View style={styles.guideItem}>
                  <Image
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.guideImage}
                  />
                  <Text style={styles.guideTitle}>引导页 {index + 1}</Text>
                  <Text style={styles.guideDescription}>
                    这是第 {index + 1} 个引导页面的描述内容
                  </Text>
                </View>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>卡片式内容轮播</Text>
        <Text style={styles.description}>卡片式内容的轮播展示</Text>
        <View style={styles.wrapper}>
          <Swiper loop autoplay={3000} key={1} showCounter height={200}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Swiper.Item key={`card-${index}`}>
                <View style={styles.cardItem}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>卡片标题 {index + 1}</Text>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardContent}>
                      这是卡片 {index + 1} 的内容描述，展示了卡片式轮播的效果。
                    </Text>
                  </View>
                </View>
              </Swiper.Item>
            ))}
          </Swiper>
        </View>
      </Card>
    </View>
  );
};

export default PracticalScenarios;
