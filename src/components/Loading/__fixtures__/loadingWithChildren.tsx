import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LoadingWithChildren = () => {
  const [contentLoading, setContentLoading] = useState(true);
  const [listLoading, setListLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleContentToggle = () => {
    setContentLoading(!contentLoading);
  };

  const handleListLoad = () => {
    setListLoading(true);
    setTimeout(() => {
      setListLoading(false);
    }, 2000);
  };

  const handleImageLoad = () => {
    setImageLoading(true);
    setTimeout(() => {
      setImageLoading(false);
    }, 3000);
  };

  const handleFormSubmit = () => {
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
    }, 2500);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="内容加载状态">
          <View style={styles.wrapper}>
            <Loading
              loading={contentLoading}
              name="loading-xt"
              loadingType="circle"
              size="middle"
            >
              <View style={styles.contentContainer}>
                <Text style={styles.contentTitle}>文章标题</Text>
                <Text style={styles.contentText}>
                  这是一段示例文本内容，用于展示当 loading 为 true 时，
                  子元素会被半透明遮罩覆盖，同时显示加载动画。 当 loading 为
                  false 时，内容正常显示。
                </Text>
                <Text style={styles.contentMeta}>发布时间：2024-01-15</Text>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleContentToggle}
              style={styles.toggleButton}
            >
              <Text style={styles.buttonText}>
                {contentLoading ? '显示内容' : '隐藏内容'}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="列表加载">
          <View style={styles.wrapper}>
            <Loading
              loading={listLoading}
              name="loading-xt"
              loadingType="dot"
              size="small"
            >
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>列表项 1</Text>
                  <Text style={styles.listDesc}>这是第一个列表项的描述</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>列表项 2</Text>
                  <Text style={styles.listDesc}>这是第二个列表项的描述</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>列表项 3</Text>
                  <Text style={styles.listDesc}>这是第三个列表项的描述</Text>
                </View>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleListLoad}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>刷新列表</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="图片加载">
          <View style={styles.wrapper}>
            <Loading
              loading={imageLoading}
              name="loading-xt"
              loadingType="goldCoin"
              size="large"
            >
              <View style={styles.imageContainer}>
                <View style={styles.imagePlaceholder}>
                  <Text style={styles.imageText}>图片内容区域</Text>
                  <Text style={styles.imageSubText}>
                    模拟图片加载完成后的显示效果
                  </Text>
                </View>
                <Text style={styles.imageCaption}>图片说明文字</Text>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleImageLoad}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>加载图片</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="表单提交">
          <View style={styles.wrapper}>
            <Loading
              loading={formLoading}
              name="loading-xt"
              loadingType="circle"
              size="middle"
            >
              <View style={styles.formContainer}>
                <View style={styles.formField}>
                  <Text style={styles.fieldLabel}>用户名</Text>
                  <View style={styles.fieldInput}>
                    <Text style={styles.inputText}>示例用户名</Text>
                  </View>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.fieldLabel}>邮箱</Text>
                  <View style={styles.fieldInput}>
                    <Text style={styles.inputText}>example@email.com</Text>
                  </View>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.fieldLabel}>备注</Text>
                  <View style={[styles.fieldInput, { height: 60 }]}>
                    <Text style={styles.inputText}>这是一段备注信息</Text>
                  </View>
                </View>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleFormSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>提交表单</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="透明加载">
          <View style={styles.wrapper}>
            <Loading loading={true} name="transparent">
              <View style={styles.transparentContainer}>
                <Text style={styles.transparentTitle}>透明加载模式</Text>
                <Text style={styles.transparentText}>
                  {`当 name 设置为 'transparent' 时，不显示加载动画，`}
                  但仍然可以通过 loading 属性控制子元素的显示状态。
                </Text>
              </View>
            </Loading>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default LoadingWithChildren;
