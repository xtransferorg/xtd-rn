import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 140,
  height: 140,
};

const WithImageExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={[styles.title, { paddingHorizontal: 0 }]}>图片</Text>
      <Options
        defaultValue={'1'}
        columns={2}
        showIcon
        style={{ paddingHorizontal: 0 }}
        imageStyle={styles.imagePicStyle}
        fullColumn
        options={[
          {
            imageSource: logo,
            value: '1',
            style: styles.imageStyle,
          },
          {
            imageSource: logo,
            value: '2',
            style: styles.imageStyle,
          },
          {
            imageSource: logo,
            value: '3',
            style: styles.imageStyle,
            disabled: true,
          },
        ]}
      />
    </Card>
  );
};

export default WithImageExample;
