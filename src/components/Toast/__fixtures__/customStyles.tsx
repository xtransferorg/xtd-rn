import React from 'react';
import { Text } from 'react-native';
import { Toast, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconCALike1, IconMASuccess1, IconXStar1 } from '../../../icons/index';

/**
 * 自定义样式示例
 */
const CustomStyles = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>自定义图标</Text>
        <Text style={styles.exampleDescription}>
          使用自定义图标替换默认图标
        </Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '自定义成功图标',
                icon: <IconMASuccess1 size={44} fillColor="#52c41a" />,
                duration: 3000,
              })
            }
          >
            自定义成功图标
          </Button>

          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '收藏成功',
                icon: <IconXStar1 size={44} fillColor="#faad14" />,
                duration: 3000,
              })
            }
          >
            收藏图标
          </Button>

          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '点赞成功',
                icon: <IconCALike1 size={44} fillColor="#ff4d4f" />,
                duration: 3000,
              })
            }
          >
            点赞图标
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>不同位置的自定义图标</Text>
        <Text style={styles.exampleDescription}>在不同位置显示自定义图标</Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '顶部自定义图标提示',
                icon: <IconXStar1 size={44} fillColor="#1890ff" />,
                position: 'top',
                duration: 3000,
              })
            }
          >
            顶部自定义图标
          </Button>

          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '底部自定义图标提示',
                icon: <IconCALike1 size={44} fillColor="#722ed1" />,
                position: 'bottom',
                duration: 3000,
              })
            }
          >
            底部自定义图标
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>长文本自定义图标</Text>
        <Text style={styles.exampleDescription}>
          自定义图标配合长文本的显示效果
        </Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message:
                  '这是一个很长的提示信息，用于测试自定义图标与长文本的配合显示效果，文本会自动换行',
                icon: <IconMASuccess1 size={44} fillColor="#52c41a" />,
                duration: 4000,
              })
            }
          >
            长文本 + 自定义图标
          </Button>

          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '多行文本\n第二行内容\n第三行内容',
                icon: <IconXStar1 size={44} fillColor="#faad14" />,
                duration: 4000,
              })
            }
          >
            多行文本 + 自定义图标
          </Button>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>自定义图标交互</Text>
        <Text style={styles.exampleDescription}>自定义图标配合交互功能</Text>
        <Space>
          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '点击可关闭的自定义图标提示',
                icon: <IconCALike1 size={44} fillColor="#ff4d4f" />,
                duration: 0,
                closeOnPress: true,
              })
            }
          >
            可点击关闭
          </Button>

          <Button
            onPress={() =>
              Toast({
                type: 'icon',
                message: '带遮罩的自定义图标提示',
                icon: <IconXStar1 size={44} fillColor="#1890ff" />,
                overlay: true,
                closeOnPressOverlay: true,
                duration: 0,
              })
            }
          >
            带遮罩层
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default CustomStyles;
