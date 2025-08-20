/**
 * title: 实际应用场景
 * desc: 在实际项目中的常见使用场景。
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Divider, Space, Card } from '@xrnjs/ui';
import { styles } from './style';

const PracticalExamples: React.FC = () => {
  return (
    <Space>
      <Card style={styles.container}>
        <Text style={styles.title}>文章内容分割</Text>
        <Text style={styles.articleTitle}>第一章 开始</Text>
        <Text style={styles.content}>
          这是第一章的内容，介绍了基本概念和使用方法。
          在这里我们可以看到分割线的基本用法。
        </Text>
        <Divider contentPosition="center">* * *</Divider>
        <Text style={styles.articleTitle}>第二章 进阶</Text>
        <Text style={styles.content}>
          这是第二章的内容，深入探讨了高级特性和最佳实践。
          分割线帮助我们清晰地区分不同的章节。
        </Text>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>导航菜单</Text>
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>首页</Text>
          <View style={styles.menuDivider}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.menuItem}>产品</Text>
          <View style={styles.menuDivider}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.menuItem}>服务</Text>
          <View style={styles.menuDivider}>
            <Divider direction="vertical" />
          </View>
          <Text style={styles.menuItem}>关于</Text>
        </View>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>表单分组</Text>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>基本信息</Text>
          <Text style={styles.formItem}>姓名: 张三</Text>
          <Text style={styles.formItem}>年龄: 25</Text>
        </View>
        <Divider />
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>联系方式</Text>
          <Text style={styles.formItem}>电话: 138****8888</Text>
          <Text style={styles.formItem}>邮箱: zhangsan@example.com</Text>
        </View>
        <Divider />
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>地址信息</Text>
          <Text style={styles.formItem}>省份: 北京市</Text>
          <Text style={styles.formItem}>详细地址: 朝阳区xxx街道</Text>
        </View>
      </Card>

      <Card style={styles.container}>
        <Text style={styles.title}>底部提示</Text>
        <Text style={styles.content}>
          这里是主要内容区域，包含了应用的核心功能和信息。
          用户可以在这里进行各种操作和浏览。
        </Text>
        <Divider contentPosition="center" dashed>
          我们是有底线的
        </Divider>
      </Card>
    </Space>
  );
};

export default PracticalExamples;
