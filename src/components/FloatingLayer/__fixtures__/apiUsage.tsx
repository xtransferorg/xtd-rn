import React from 'react';
import { Button, FloatingLayer, Space } from '@xrnjs/ui';
import { View, Text, Alert } from 'react-native';
import styles from './style';
import Card from '_global/Card';

const ApiUsageScreen = () => {
  const showBasicLayer = () => {
    const { close } = FloatingLayer.open({
      title: 'API 调用浮层',
      children: (
        <View style={styles.apiContainer}>
          <Text style={styles.apiText}>这是通过 API 调用的浮层</Text>
          <Text style={styles.apiDesc}>
            使用 FloatingLayer.open() 方法可以快速创建浮层
          </Text>
          <Button
            onPress={() => {
              close();
              Alert.alert('提示', '浮层已关闭');
            }}
          >
            关闭浮层
          </Button>
        </View>
      ),
      showCancelButton: true,
      onCancel: () => close(),
    });
  };

  const showConfirmLayer = () => {
    const { close } = FloatingLayer.open({
      title: '确认操作',
      description: '请确认是否要执行此操作？',
      children: (
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmText}>
            这是一个确认对话框，点击确认或取消按钮来关闭
          </Text>
        </View>
      ),
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '确认',
      onCancel: () => {
        close();
        Alert.alert('提示', '操作已取消');
      },
      onConfirm: () => {
        close();
        Alert.alert('提示', '操作已确认');
      },
    });
  };

  const showListLayer = () => {
    const options = ['选项一', '选项二', '选项三', '选项四'];

    const { close } = FloatingLayer.open({
      title: '选择选项',
      children: (
        <View style={styles.listContainer}>
          {options.map((option, index) => (
            <Button
              key={index}
              style={styles.listItem}
              onPress={() => {
                close();
                Alert.alert('选择结果', `您选择了：${option}`);
              }}
            >
              {option}
            </Button>
          ))}
        </View>
      ),
      showCancelButton: true,
      onCancel: () => close(),
    });
  };

  const showCustomContentLayer = () => {
    const { close } = FloatingLayer.open({
      title: '自定义内容',
      description: '展示各种内容类型',
      children: (
        <View style={styles.customContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>📊 数据统计</Text>
            <Text style={styles.infoValue}>总计：1,234</Text>
            <Text style={styles.infoValue}>今日：56</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>⚠️ 注意事项</Text>
            <Text style={styles.infoDesc}>
              • 由于使用 Portal 实现，不建议在 API 调用中使用复杂的输入组件
            </Text>
            <Text style={styles.infoDesc}>
              • 适合展示信息、简单交互和确认对话框
            </Text>
          </View>

          <Button onPress={() => close()}>我知道了</Button>
        </View>
      ),
      showCancelButton: true,
      onCancel: () => close(),
    });
  };

  const showMultipleLayer = () => {
    // 第一个浮层
    const { close: close1 } = FloatingLayer.open({
      title: '第一个浮层',
      children: (
        <View style={styles.multiContainer}>
          <Text style={styles.multiText}>这是第一个浮层</Text>
          <Button
            onPress={() => {
              // 第二个浮层
              const { close: close2 } = FloatingLayer.open({
                title: '第二个浮层',
                children: (
                  <View style={styles.multiContainer}>
                    <Text style={styles.multiText}>这是第二个浮层</Text>
                    <Space>
                      <Button onPress={() => close2()}>关闭当前浮层</Button>
                      <Button
                        onPress={() => {
                          FloatingLayer.closeAll();
                          Alert.alert('提示', '所有浮层已关闭');
                        }}
                      >
                        关闭所有浮层
                      </Button>
                    </Space>
                  </View>
                ),
                showCancelButton: true,
                onCancel: () => close2(),
              });
            }}
          >
            打开第二个浮层
          </Button>
        </View>
      ),
      showCancelButton: true,
      onCancel: () => close1(),
    });
  };

  return (
    <Space>
      <Card title="基础 API 调用">
        <Space>
          <Button onPress={showBasicLayer}>FloatingLayer.open()</Button>
          <Text style={styles.description}>
            使用 FloatingLayer.open() 快速创建浮层
          </Text>
        </Space>
      </Card>

      <Card title="确认对话框">
        <Space>
          <Button onPress={showConfirmLayer}>显示确认对话框</Button>
          <Text style={styles.description}>带确认和取消按钮的对话框</Text>
        </Space>
      </Card>

      <Card title="选项列表">
        <Space>
          <Button onPress={showListLayer}>显示选项列表</Button>
          <Text style={styles.description}>展示可选择的选项列表</Text>
        </Space>
      </Card>

      <Card title="自定义内容">
        <Space>
          <Button onPress={showCustomContentLayer}>显示自定义内容</Button>
          <Text style={styles.description}>展示复杂的自定义内容和注意事项</Text>
        </Space>
      </Card>

      <Card title="多层浮层管理">
        <Space>
          <Button onPress={showMultipleLayer}>多层浮层示例</Button>
          <Text style={styles.description}>演示多个浮层的管理和关闭</Text>
        </Space>
      </Card>
    </Space>
  );
};

export default ApiUsageScreen;
