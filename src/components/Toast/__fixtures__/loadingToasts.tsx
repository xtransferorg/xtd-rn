import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 加载提示示例
 */
const LoadingToasts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef<any>();

  const startControlledLoading = () => {
    setIsLoading(true);
    loadingRef.current = Toast.loading({
      message: '正在加载数据...',
      duration: 0,
      forbidPress: true,
      closeOnPress: true, // 添加备选关闭方式
    });

    // 模拟3秒后完成
    setTimeout(() => {
      setIsLoading(false);
      loadingRef.current?.close();
      Toast.success('数据加载完成');
    }, 3000);
  };

  const startCountdownLoading = () => {
    let count = 5;
    const buildMessage = () => `倒计时 ${count} 秒...`;

    const loadingInstance = Toast.loading({
      message: buildMessage(),
      duration: 0,
      forbidPress: true,
      closeOnPress: true, // 添加备选关闭方式
    });

    const countdown = () => {
      if (count > 0) {
        loadingInstance.setMessage(buildMessage());
        count -= 1;
        setTimeout(countdown, 1000);
      } else {
        loadingInstance.close();
        Toast.success('倒计时完成');
      }
    };

    countdown();
  };

  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>基础加载</Text>
        <Text style={styles.exampleDescription}>基本的加载提示</Text>
        <Space>
          <Button
            onPress={() =>
              Toast.loading({
                message: '加载中...',
                duration: 2000,
              })
            }
          >
            2秒加载提示
          </Button>

          <Button
            onPress={() =>
              Toast.loading({
                message: '正在处理数据，请稍候...',
                duration: 3000,
                forbidPress: true,
              })
            }
          >
            禁止背景点击
          </Button>

          <Button
            onPress={() =>
              Toast.loading({
                message: '加载中...（点我关闭）',
                closeOnPress: true,
                duration: 0,
              })
            }
          >
            不自动消失
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>受控加载</Text>
        <Text style={styles.exampleDescription}>
          通过状态控制加载的显示和隐藏
        </Text>
        <Space>
          <Button onPress={startControlledLoading} disabled={isLoading}>
            {isLoading ? '加载中...' : '开始受控加载'}
          </Button>

          <Button
            onPress={() => {
              if (loadingRef.current) {
                loadingRef.current.close();
                setIsLoading(false);
              }
            }}
            disabled={!isLoading}
          >
            手动停止加载
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>动态内容</Text>
        <Text style={styles.exampleDescription}>动态更新加载提示的内容</Text>
        <Space>
          <Button onPress={startCountdownLoading}>倒计时加载</Button>

          <Button
            onPress={() => {
              let progress = 0;
              const buildMessage = () => `上传进度 ${progress}%`;

              const loadingInstance = Toast.loading({
                message: buildMessage(),
                duration: 0,
                forbidPress: true,
                closeOnPress: true, // 添加备选关闭方式
              });

              const updateProgress = () => {
                if (progress < 100) {
                  progress += 10;
                  loadingInstance.setMessage(buildMessage());
                  setTimeout(updateProgress, 200);
                } else {
                  loadingInstance.close();
                  Toast.success('上传完成');
                }
              };

              updateProgress();
            }}
          >
            进度加载
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default LoadingToasts;
