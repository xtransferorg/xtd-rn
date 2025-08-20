import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FileViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const imageList = [
    {
      uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    },
  ];

  return (
    <ScrollView>
      <Space>
        <Card title="基础图片预览">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              支持多张图片预览，点击图片可以进入全屏预览模式
            </Text>
            <FileViewer type="image" horizontal sources={imageList} />
          </View>
        </Card>

        <Card title="垂直排列图片">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>图片可以垂直排列显示</Text>
            <FileViewer type="image" horizontal={false} sources={imageList} />
          </View>
        </Card>

        <Card title="自定义缩略图大小">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              可以自定义缩略图的大小和间距
            </Text>
            <View style={styles.thumbnailRow}>
              <Space>
                <FileViewer type="image" sources={imageList.slice(0, 1)} />
                <Text style={styles.fileLabel}>108px</Text>
              </Space>
              <Space>
                <FileViewer
                  type="image"
                  sources={imageList.slice(0, 1)}
                  size={130}
                />
                <Text style={styles.fileLabel}>130px</Text>
              </Space>
              <Space>
                <FileViewer
                  type="image"
                  sources={imageList.slice(0, 1)}
                  size={150}
                />
                <Text style={styles.fileLabel}>150px</Text>
              </Space>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
