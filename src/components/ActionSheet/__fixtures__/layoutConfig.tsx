import React from 'react';
import { Text } from 'react-native';
import { ActionSheet, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LayoutConfig = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>布局配置</Text>

        <Space>
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '长列表示例',
                description: '默认顶部边距是屏幕高度的15%',
                actions: new Array(20).fill(0).map((_, i) => `选项 ${i + 1}`),
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('长列表 -> 选项:', item, index);
                },
                onClose: () => console.log('长列表 -> 关闭'),
              });
            }}
          >
            长列表滚动
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '自定义顶部边距',
                description: '设置顶部边距为100px',
                safeAreaInsetTop: 100,
                actions: new Array(15).fill(0).map((_, i) => `选项 ${i + 1}`),
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('自定义边距 -> 选项:', item, index);
                },
                onClose: () => console.log('自定义边距 -> 关闭'),
              });
            }}
          >
            自定义顶部边距
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '无圆角样式',
                description: '设置 round 为 false',
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                round: false,
                onSelect: (item, index) => {
                  console.log('无圆角 -> 选项:', item, index);
                },
                onClose: () => console.log('无圆角 -> 关闭'),
              });
            }}
          >
            无圆角样式
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '点击遮罩关闭',
                description: '启用点击遮罩层关闭功能',
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                closeOnPressOverlay: true,
                onSelect: (item, index) => {
                  console.log('点击遮罩关闭 -> 选项:', item, index);
                },
                onClose: () => console.log('点击遮罩关闭 -> 关闭'),
              });
            }}
          >
            点击遮罩关闭
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '延迟渲染',
                description: '设置 lazyRender 为 false',
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                lazyRender: false,
                onSelect: (item, index) => {
                  console.log('延迟渲染 -> 选项:', item, index);
                },
                onClose: () => console.log('延迟渲染 -> 关闭'),
              });
            }}
          >
            禁用延迟渲染
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default LayoutConfig;
