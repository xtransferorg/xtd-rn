import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import { Uploader } from '@xrnjs/ui';
import styles from './style';

const CustomStyleDemo = () => {
  const items1 = [
    {
      title: '基本信息',
      content: '这是一个自定义样式的描述列表',
    },
    {
      title: '状态',
      content: '正常',
    },
  ];

  const items2 = [
    {
      title: '文件上传',
      content: (
        <View style={styles.uploaderContainer}>
          <Uploader
            title="图片上传"
            attachmentType="image"
            maxCount={3}
            useContainerWidth
            onChange={(files: any) => {
              console.log('基础上传文件变化:', files);
            }}
          />
        </View>
      ),
    },
    {
      title: '备注',
      content: '支持自定义 React 组件作为内容',
    },
  ];

  const customStyles = StyleSheet.create({
    customTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1890ff',
    },
    customItemTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#52c41a',
    },
    customItemContent: {
      fontSize: 15,
      color: '#fa541c',
      fontStyle: 'italic',
    },
  });

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>自定义样式</Text>
      <Text style={styles.groupDescription}>
        自定义标题、条目标题和内容的样式，以及支持 React 组件作为内容
      </Text>

      <View style={styles.spacing}>
        <Descriptions
          title="自定义样式示例"
          items={items1}
          titleStyle={customStyles.customTitle}
          itemTitleStyle={customStyles.customItemTitle}
          itemContentStyle={customStyles.customItemContent}
        />
      </View>

      <View style={styles.spacing}>
        <Descriptions title="自定义组件内容" items={items2} />
      </View>
    </Card>
  );
};

export default CustomStyleDemo;
