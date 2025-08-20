import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Skeleton, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const PresetPages = () => {
  const [showList, setShowList] = useState(true);
  const [showDetail, setShowDetail] = useState(true);

  return (
    <View style={styles.container}>
      <Card title="列表页面骨架屏">
        <Text style={styles.description}>适用于列表页面的预设骨架屏布局</Text>
        <View style={styles.presetContainer}>
          {showList ? (
            <Skeleton type={Skeleton.PageType.List} />
          ) : (
            <View style={styles.contentPlaceholder}>
              <Text style={styles.contentText}>这里是列表页面的实际内容</Text>
              <Text style={styles.contentSubText}>
                包含多个列表项，每个项目都有标题和描述信息
              </Text>
            </View>
          )}
        </View>
        <Button
          size={Size.small}
          onPress={() => setShowList(!showList)}
          style={styles.toggleButton}
        >
          {showList ? '显示列表内容' : '显示列表骨架屏'}
        </Button>
      </Card>

      <Card title="详情页面骨架屏">
        <Text style={styles.description}>适用于详情页面的预设骨架屏布局</Text>
        <View style={styles.presetContainer}>
          {showDetail ? (
            <Skeleton type={Skeleton.PageType.Detail} />
          ) : (
            <View style={styles.contentPlaceholder}>
              <Text style={styles.contentText}>这里是详情页面的实际内容</Text>
              <Text style={styles.contentSubText}>
                包含标题、详细描述和其他相关信息
              </Text>
            </View>
          )}
        </View>
        <Button
          size={Size.small}
          onPress={() => setShowDetail(!showDetail)}
          style={styles.toggleButton}
        >
          {showDetail ? '显示详情内容' : '显示详情骨架屏'}
        </Button>
      </Card>

      <Card title="自定义页面骨架屏">
        <Text style={styles.description}>使用自定义配置创建页面骨架屏</Text>
        <View style={styles.presetContainer}>
          <Skeleton type={Skeleton.PageType.Custom} loading={true} />
        </View>
      </Card>

      <Card title="页面类型对比">
        <Text style={styles.description}>不同页面类型的骨架屏对比</Text>
        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonItem}>
            <Text style={styles.comparisonLabel}>列表页面</Text>
            <View style={styles.comparisonSkeleton}>
              <Skeleton type={Skeleton.PageType.List} />
            </View>
          </View>
          <View style={styles.comparisonItem}>
            <Text style={styles.comparisonLabel}>详情页面</Text>
            <View style={styles.comparisonSkeleton}>
              <Skeleton type={Skeleton.PageType.Detail} />
            </View>
          </View>
        </View>
      </Card>

      <Card title="实际应用场景">
        <Text style={styles.description}>模拟真实应用中的使用场景</Text>
        <View style={styles.scenarioContainer}>
          <Text style={styles.scenarioTitle}>新闻列表加载</Text>
          <View style={styles.newsListSkeleton}>
            <Skeleton
              loading={true}
              avatar={{ size: 60, shape: 'square' }}
              title={{ width: 80 }}
              paragraph={{
                rows: 2,
                widths: [100, 70],
              }}
            />
          </View>

          <Text style={styles.scenarioTitle}>用户信息卡片</Text>
          <View style={styles.userCardSkeleton}>
            <Skeleton
              loading={true}
              avatar={{ size: 50, shape: 'circle' }}
              title={{ width: 50 }}
              paragraph={{
                rows: 3,
                widths: [80, 60, 40],
              }}
            />
          </View>

          <Text style={styles.scenarioTitle}>商品详情</Text>
          <View style={styles.productDetailSkeleton}>
            <Skeleton
              loading={true}
              title={{ width: 70 }}
              paragraph={{
                rows: 5,
                widths: [100, 90, 85, 95, 60],
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default PresetPages;
