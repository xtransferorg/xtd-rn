import React from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 状态提示示例
 */
const StatusToasts = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>成功提示</Text>
        <Text style={styles.exampleDescription}>用于操作成功的反馈</Text>
        <Space>
          <Button onPress={() => Toast.success('操作成功')}>
            基础成功提示
          </Button>

          <Button onPress={() => Toast.success('数据保存成功，系统已自动备份')}>
            详细成功提示
          </Button>

          <Button
            onPress={() =>
              Toast.success({
                message: '文件上传成功',
                position: 'top',
                duration: 3000,
              })
            }
          >
            自定义成功提示
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>失败提示</Text>
        <Text style={styles.exampleDescription}>用于操作失败的反馈</Text>
        <Space>
          <Button onPress={() => Toast.fail('操作失败')}>基础失败提示</Button>

          <Button
            onPress={() => Toast.fail('网络连接失败，请检查网络设置后重试')}
          >
            详细失败提示
          </Button>

          <Button
            onPress={() =>
              Toast.fail({
                message: '登录失败，用户名或密码错误',
                position: 'bottom',
                duration: 4000,
              })
            }
          >
            自定义失败提示
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>警告提示</Text>
        <Text style={styles.exampleDescription}>用于警告信息的反馈</Text>
        <Space>
          <Button onPress={() => Toast.warn('请注意')}>基础警告提示</Button>

          <Button
            onPress={() => Toast.warn('当前网络不稳定，建议在WiFi环境下操作')}
          >
            详细警告提示
          </Button>

          <Button
            onPress={() =>
              Toast.warn({
                message: '存储空间不足，请清理后重试',
                position: 'top',
                duration: 5000,
              })
            }
          >
            自定义警告提示
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>组合状态提示</Text>
        <Text style={styles.exampleDescription}>
          模拟实际业务场景的状态提示
        </Text>
        <Space>
          <Button
            onPress={() => {
              Toast.loading('正在保存...');
              setTimeout(() => {
                Toast.success('保存成功');
              }, 2000);
            }}
          >
            保存操作（加载→成功）
          </Button>

          <Button
            onPress={() => {
              Toast.loading('正在上传...');
              setTimeout(() => {
                Toast.fail('上传失败，请重试');
              }, 2000);
            }}
          >
            上传操作（加载→失败）
          </Button>

          <Button
            onPress={() => {
              Toast.loading('正在处理...');
              setTimeout(() => {
                Toast.warn('处理完成，但存在异常数据');
              }, 2000);
            }}
          >
            处理操作（加载→警告）
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default StatusToasts;
