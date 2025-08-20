import React from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 基础用法示例
 */
const BasicUsage = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>文字提示</Text>
        <Text style={styles.exampleDescription}>最简单的文字提示</Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '这是一条简单的提示信息',
              })
            }
          >
            基础文字提示
          </Button>

          <Button
            onPress={() =>
              Toast({
                message:
                  '这是一条很长的提示信息，用于测试文字自动换行的效果，当文字超过一定长度时会自动换行显示',
              })
            }
          >
            长文字提示（自动换行）
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '第一行内容\n第二行内容\n第三行内容',
              })
            }
          >
            多行文字提示（手动换行）
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>提示位置</Text>
        <Text style={styles.exampleDescription}>
          支持顶部、中部、底部三种位置
        </Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '顶部提示信息',
                position: 'top',
              })
            }
          >
            顶部提示
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '中部提示信息',
                position: 'middle',
              })
            }
          >
            中部提示（默认）
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '底部提示信息',
                position: 'bottom',
              })
            }
          >
            底部提示
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>显示时长</Text>
        <Text style={styles.exampleDescription}>自定义提示显示的时长</Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                message: '1秒后消失',
                duration: 1000,
              })
            }
          >
            1秒后消失
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '5秒后消失',
                duration: 5000,
              })
            }
          >
            5秒后消失
          </Button>

          <Button
            onPress={() =>
              Toast({
                message: '不会自动消失，需要手动关（点我关闭）',
                closeOnPress: true,
                duration: 0,
              })
            }
          >
            不自动消失
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
