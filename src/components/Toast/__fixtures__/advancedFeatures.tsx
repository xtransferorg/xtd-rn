import React, { useState } from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

/**
 * 高级功能示例
 */
const AdvancedFeatures = () => {
  const [defaultConfig, setDefaultConfig] = useState(false);

  const setCustomDefaults = () => {
    Toast.setDefaultOptions({
      duration: 5000,
      position: 'top',
      overlay: true,
    });
    setDefaultConfig(true);
  };

  const resetDefaults = () => {
    Toast.resetDefaultOptions('text');
    setDefaultConfig(false);
  };

  const simulateNetworkRequest = () => {
    // 模拟网络请求流程
    const loadingInstance = Toast.loading({
      message: '正在连接服务器...',
      duration: 0,
      forbidPress: true,
    });

    setTimeout(() => {
      loadingInstance.setMessage('正在验证用户信息...');
    }, 1000);

    setTimeout(() => {
      loadingInstance.setMessage('正在获取数据...');
    }, 2000);

    setTimeout(() => {
      loadingInstance.close();
      Toast.success('数据获取成功');
    }, 3000);
  };

  const simulateFileUpload = () => {
    let progress = 0;
    const loadingInstance = Toast.loading({
      message: `上传进度: ${progress}%`,
      duration: 0,
      forbidPress: true,
    });

    const updateProgress = () => {
      if (progress < 100) {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        loadingInstance.setMessage(`上传进度: ${Math.floor(progress)}%`);
        setTimeout(updateProgress, 300);
      } else {
        loadingInstance.close();
        Toast.success('文件上传完成');
      }
    };

    updateProgress();
  };

  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>全局配置</Text>
        <Text style={styles.exampleDescription}>设置和重置全局默认配置</Text>
        <Space>
          <Button onPress={setCustomDefaults} disabled={defaultConfig}>
            设置自定义默认配置
          </Button>

          <Button
            onPress={() => Toast('测试默认配置效果')}
            disabled={!defaultConfig}
          >
            测试默认配置
          </Button>

          <Button onPress={resetDefaults} disabled={!defaultConfig}>
            重置默认配置
          </Button>
        </Space>
        <Text style={styles.configStatus}>
          当前配置状态: {defaultConfig ? '自定义配置' : '默认配置'}
        </Text>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>特定类型配置</Text>
        <Text style={styles.exampleDescription}>
          为特定类型的 Toast 设置默认配置
        </Text>
        <Space>
          <Button
            onPress={() => {
              Toast.setDefaultOptions('loading', {
                forbidPress: true,
                overlay: true,
                position: 'middle',
              });
              Toast.loading('加载中...');
            }}
          >
            设置 Loading 默认配置
          </Button>

          <Button
            onPress={() => {
              Toast.setDefaultOptions('success', {
                position: 'top',
                duration: 1000,
              });
              Toast.success('操作成功');
            }}
          >
            设置 Success 默认配置
          </Button>

          <Button
            onPress={() => {
              Toast.resetDefaultOptions('loading');
              Toast.resetDefaultOptions('success');
            }}
          >
            重置类型配置
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>复杂业务场景</Text>
        <Text style={styles.exampleDescription}>
          模拟真实业务场景的 Toast 使用
        </Text>
        <Space>
          <Button onPress={simulateNetworkRequest}>模拟网络请求流程</Button>

          <Button onPress={simulateFileUpload}>模拟文件上传进度</Button>

          <Button
            onPress={() => {
              // 模拟表单提交
              Toast.loading('正在提交表单...');

              setTimeout(() => {
                const isSuccess = Math.random() > 0.3;
                if (isSuccess) {
                  Toast.success('表单提交成功');
                } else {
                  Toast.fail('提交失败，请检查网络连接');
                }
              }, 2000);
            }}
          >
            模拟表单提交
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>队列管理</Text>
        <Text style={styles.exampleDescription}>管理多个 Toast 的显示队列</Text>
        <Space>
          <Button
            onPress={() => {
              // 快速创建多个 Toast
              Toast.success('第一个提示');
              setTimeout(() => Toast.warn('第二个提示'), 500);
              setTimeout(() => Toast.fail('第三个提示'), 1000);
              setTimeout(() => Toast('第四个提示'), 1500);
            }}
          >
            快速创建多个 Toast
          </Button>

          <Button
            onPress={() => {
              // 创建不同位置的 Toast
              Toast({
                message: '顶部消息（点击关闭）',
                position: 'top',
                duration: 0,
                closeOnPress: true,
              });
              Toast({
                message: '中部消息（点击关闭）',
                position: 'middle',
                duration: 0,
                closeOnPress: true,
              });
              Toast({
                message: '底部消息（点击关闭）',
                position: 'bottom',
                duration: 0,
                closeOnPress: true,
              });
            }}
          >
            不同位置的 Toast
          </Button>

          <Button onPress={() => Toast.removeAll()}>清除所有 Toast</Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>实例控制</Text>
        <Text style={styles.exampleDescription}>精确控制单个 Toast 实例</Text>
        <Space>
          <Button
            onPress={() => {
              const instance = Toast.loading({
                message: '可控制的任务',
                duration: 0,
                closeOnPress: true, // 添加备选关闭方式
              });

              let step = 1;
              const steps = [
                '初始化中...',
                '连接服务器...',
                '验证权限...',
                '加载数据...',
                '处理完成',
              ];

              const nextStep = () => {
                if (step < steps.length) {
                  instance.setMessage(steps[step] as string);
                  step++;
                  setTimeout(nextStep, 1000);
                } else {
                  instance.close();
                  Toast.success('所有步骤完成');
                }
              };

              setTimeout(nextStep, 1000);
            }}
          >
            分步骤任务
          </Button>

          <Button
            onPress={() => {
              const instances = [];

              // 创建多个可控制的实例
              instances.push(
                Toast.loading({
                  message: '任务1',
                  duration: 0,
                  closeOnPress: true, // 添加备选关闭方式
                })
              );
              instances.push(
                Toast.loading({
                  message: '任务2',
                  duration: 0,
                  closeOnPress: true, // 添加备选关闭方式
                })
              );
              instances.push(
                Toast.loading({
                  message: '任务3',
                  duration: 0,
                  closeOnPress: true, // 添加备选关闭方式
                })
              );

              // 随机关闭实例
              instances.forEach((instance, index) => {
                setTimeout(() => {
                  instance.close();
                  Toast.success(`任务${index + 1}完成`);
                }, (index + 1) * 1500);
              });
            }}
          >
            批量任务管理
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
