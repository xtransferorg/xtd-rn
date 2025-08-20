import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Skeleton, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [autoLoading, setAutoLoading] = useState(true);

  // 模拟自动加载
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoLoading((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Card title="条件渲染">
        <Text style={styles.description}>
          根据loading状态条件渲染内容或骨架屏
        </Text>
        <View style={styles.demoContainer}>
          <Skeleton
            loading={loading1}
            avatar
            paragraph={{ rows: 3, widths: [100, 80, 60] }}
          >
            <View style={styles.actualContent}>
              <View style={styles.avatarPlaceholder} />
              <View style={styles.textContent}>
                <Text style={styles.contentTitle}>实际内容标题</Text>
                <Text style={styles.contentDescription}>
                  这是实际的内容描述，当loading为false时显示。
                  骨架屏为用户提供了良好的加载体验。
                </Text>
              </View>
            </View>
          </Skeleton>
        </View>
        <Button
          size={Size.small}
          onPress={() => setLoading1(!loading1)}
          style={styles.toggleButton}
        >
          {loading1 ? '加载完成' : '开始加载'}
        </Button>
      </Card>

      <Card title="嵌套骨架屏">
        <Text style={styles.description}>在复杂布局中使用多个骨架屏组件</Text>
        <View style={styles.nestedContainer}>
          <View style={styles.nestedHeader}>
            <Skeleton
              loading={loading2}
              avatar={{ size: 40 }}
              title={{ width: 40 }}
              paragraph={false}
            >
              <View style={styles.headerContent}>
                <View style={styles.smallAvatar} />
                <Text style={styles.headerTitle}>用户名</Text>
              </View>
            </Skeleton>
          </View>

          <View style={styles.nestedBody}>
            <Skeleton
              loading={loading2}
              title={{ width: 60 }}
              paragraph={{ rows: 4, widths: [100, 85, 90, 70] }}
            >
              <View style={styles.bodyContent}>
                <Text style={styles.bodyTitle}>文章标题</Text>
                <Text style={styles.bodyText}>
                  这是文章的正文内容，包含了详细的信息描述。
                  当数据加载完成后，骨架屏会被实际内容替换。
                </Text>
              </View>
            </Skeleton>
          </View>
        </View>
        <Button
          size={Size.small}
          onPress={() => setLoading2(!loading2)}
          style={styles.toggleButton}
        >
          {loading2 ? '加载内容' : '显示骨架屏'}
        </Button>
      </Card>

      <Card title="自动切换演示">
        <Text style={styles.description}>自动在骨架屏和内容之间切换</Text>
        <View style={styles.demoContainer}>
          <Skeleton
            loading={autoLoading}
            avatar={{ size: 50 }}
            title={{ width: 70 }}
            paragraph={{ rows: 3, widths: [90, 80, 60] }}
          >
            <View style={styles.autoContent}>
              <View style={styles.autoAvatar} />
              <View style={styles.autoText}>
                <Text style={styles.autoTitle}>动态内容</Text>
                <Text style={styles.autoDescription}>
                  这个示例每3秒自动切换一次，展示骨架屏的动态效果。
                </Text>
              </View>
            </View>
          </Skeleton>
        </View>
        <Text style={styles.autoStatus}>
          当前状态: {autoLoading ? '加载中' : '已加载'}
        </Text>
      </Card>

      <Card title="组合使用">
        <Text style={styles.description}>多个骨架屏组件的组合使用</Text>
        <View style={styles.combinationContainer}>
          <View style={styles.combinationItem}>
            <Text style={styles.combinationLabel}>头部信息</Text>
            <Skeleton
              loading={loading3}
              avatar={{ size: 35 }}
              title={{ width: 50 }}
              paragraph={false}
            />
          </View>

          <View style={styles.combinationItem}>
            <Text style={styles.combinationLabel}>主要内容</Text>
            <Skeleton
              loading={loading3}
              title={{ width: 80 }}
              paragraph={{ rows: 3, widths: [100, 90, 70] }}
            />
          </View>

          <View style={styles.combinationItem}>
            <Text style={styles.combinationLabel}>附加信息</Text>
            <Skeleton
              loading={loading3}
              title={false}
              paragraph={{ rows: 2, widths: [60, 40] }}
            />
          </View>
        </View>
        <Button
          size={Size.small}
          onPress={() => setLoading3(!loading3)}
          style={styles.toggleButton}
        >
          {loading3 ? '全部加载' : '重新加载'}
        </Button>
      </Card>

      <Card title="性能优化">
        <Text style={styles.description}>大量骨架屏的性能优化示例</Text>
        <View style={styles.performanceContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <View key={index} style={styles.performanceItem}>
              <Skeleton
                loading={true}
                active={index % 2 === 0} // 交替显示动画
                avatar={{ size: 30 }}
                title={{ width: 60 }}
                paragraph={{ rows: 2, widths: [80, 50] }}
              />
            </View>
          ))}
        </View>
        <Text style={styles.performanceNote}>
          注意：大量骨架屏时可以考虑关闭部分动画以提升性能
        </Text>
      </Card>
    </View>
  );
};

export default AdvancedFeatures;
