import React, { useState } from 'react';
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import { Space, Button, Mask } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const ComplexUsage: React.FC = () => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [imageVisible, setImageVisible] = useState<boolean>(false);
  const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const showLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="复杂内容">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setDialogVisible(true)}>对话框样式</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setImageVisible(true)}>图片预览</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showLoading}>加载提示</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setFormVisible(true)}>表单内容</Button>
            </View>
          </Space>
        </Card>
      </Space>

      {/* 对话框样式 */}
      <Mask
        visible={dialogVisible}
        onBackdropPress={() => setDialogVisible(false)}
      >
        <View style={styles.complexContent}>
          <View style={styles.complexHeader}>
            <Text style={styles.complexHeaderText}>确认操作</Text>
          </View>
          <View style={styles.complexBody}>
            <Text style={styles.complexBodyText}>
              您确定要执行此操作吗？此操作不可撤销，请谨慎考虑。
            </Text>
            <Text style={styles.complexBodyText}>
              点击确认继续，或点击取消返回。
            </Text>
          </View>
          <View style={styles.complexFooter}>
            <Button
              onPress={() => setDialogVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>取消</Text>
            </Button>
            <Button
              onPress={() => setDialogVisible(false)}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmButtonText}>确认</Text>
            </Button>
          </View>
        </View>
      </Mask>

      {/* 图片预览 */}
      <Mask
        visible={imageVisible}
        onBackdropPress={() => setImageVisible(false)}
      >
        <View style={styles.centerContent}>
          <Image
            source={{
              uri: 'https://picsum.photos/200/200?random=1',
            }}
            style={styles.imageContent}
            resizeMode="cover"
          />
        </View>
      </Mask>

      {/* 加载提示 */}
      <Mask visible={loadingVisible} backdropOpacity={0.7}>
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color="#2196F3" />
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      </Mask>

      {/* 表单内容 */}
      <Mask visible={formVisible} onBackdropPress={() => setFormVisible(false)}>
        <View style={styles.complexContent}>
          <View style={styles.complexHeader}>
            <Text style={styles.complexHeaderText}>用户信息</Text>
          </View>
          <View style={styles.complexBody}>
            <Text style={styles.complexBodyText}>姓名：张三</Text>
            <Text style={styles.complexBodyText}>
              邮箱：zhangsan@example.com
            </Text>
            <Text style={styles.complexBodyText}>电话：138-0000-0000</Text>
            <Text style={styles.complexBodyText}>
              地址：北京市朝阳区某某街道
            </Text>
          </View>
          <View style={styles.complexFooter}>
            <Button
              onPress={() => setFormVisible(false)}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmButtonText}>关闭</Text>
            </Button>
          </View>
        </View>
      </Mask>
    </ScrollView>
  );
};

export default ComplexUsage;
