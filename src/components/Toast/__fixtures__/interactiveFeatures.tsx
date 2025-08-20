import React from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 交互功能示例
 */
const InteractiveFeatures = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>点击交互</Text>
        <Text style={styles.exampleDescription}>
          支持点击提示内容或遮罩层关闭
        </Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '点击此提示可以关闭',
                duration: 0,
                closeOnPress: true,
                position: 'middle',
              })
            }
          >
            点击提示关闭
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '点击遮罩层可以关闭',
                duration: 0,
                overlay: true,
                closeOnPressOverlay: true,
                position: 'bottom',
              })
            }
          >
            点击遮罩关闭
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '点击提示或遮罩都可以关闭',
                duration: 0,
                overlay: true,
                closeOnPress: true,
                closeOnPressOverlay: true,
                position: 'top',
              })
            }
          >
            点击任意位置关闭
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>背景控制</Text>
        <Text style={styles.exampleDescription}>控制背景遮罩和点击行为</Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '显示背景遮罩',
                overlay: true,
                duration: 3000,
              })
            }
          >
            显示遮罩层
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '禁止背景点击',
                forbidPress: true,
                duration: 3000,
              })
            }
          >
            禁止背景点击
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '遮罩层 + 禁止背景点击',
                overlay: true,
                forbidPress: true,
                duration: 3000,
              })
            }
          >
            遮罩 + 禁止点击
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>事件回调</Text>
        <Text style={styles.exampleDescription}>
          提示显示和隐藏时的事件回调
        </Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '查看控制台输出',
                duration: 2000,
                onOpen: () => console.log('Toast 开始显示'),
                onOpened: () => console.log('Toast 显示完成'),
                onClose: () => console.log('Toast 开始关闭'),
                onClosed: () => console.log('Toast 关闭完成'),
              })
            }
          >
            生命周期回调
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '点击遮罩触发回调',
                duration: 0,
                overlay: true,
                closeOnPressOverlay: true,
                onPressOverlay: () => {
                  console.log('点击了遮罩层');
                  Toast.success('遮罩层被点击');
                },
              })
            }
          >
            遮罩点击回调
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>实例管理</Text>
        <Text style={styles.exampleDescription}>管理多个 Toast 实例</Text>
        <Space>
          <Button
            onPress={() => {
              // 创建多个不同位置的 Toast
              Toast({
                message: '顶部提示（点击关闭）',
                position: 'top',
                duration: 0,
                closeOnPress: true,
              });
              Toast({
                message: '中部提示（点击关闭）',
                position: 'middle',
                duration: 0,
                closeOnPress: true,
              });
              Toast({
                message: '底部提示（点击关闭）',
                position: 'bottom',
                duration: 0,
                closeOnPress: true,
              });
            }}
          >
            创建多个 Toast
          </Button>

          <Button
            onPress={() => {
              const instance = Toast.loading({
                message: '可控制的加载',
                duration: 0,
                closeOnPress: true, // 添加点击关闭功能作为备选
              });

              setTimeout(() => {
                instance.setMessage('更新消息内容');
              }, 1000);

              setTimeout(() => {
                instance.close();
                Toast.success('操作完成');
              }, 3000);
            }}
          >
            实例控制示例
          </Button>

          <Button onPress={() => Toast.removeAll()}>清除所有 Toast</Button>
        </Space>
      </Card>
    </Space>
  );
};

export default InteractiveFeatures;
