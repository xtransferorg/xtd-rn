import React from 'react';
import { Text } from 'react-native';
import { Tag, TagFunc, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import {
  IconCALike1,
  IconMACamera2,
  IconMASearch1,
  IconXHighquality1,
  IconXStar1,
} from '../../../icons/index';

/**
 * 带图标的标签示例
 */
const IconTags = () => {
  return (
    <Space>
      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>基础图标标签</Text>
        <Text style={styles.exampleDescription}>标签前添加图标</Text>
        <Space direction="horizontal" wrap>
          <Tag icon={<IconXHighquality1 size={12} />}>高质量</Tag>
          <Tag icon={<IconMACamera2 size={12} />}>相机</Tag>
          <Tag icon={<IconMASearch1 size={12} />}>搜索</Tag>
          <Tag icon={<IconXStar1 size={12} />}>收藏</Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>不同功能的图标标签</Text>
        <Text style={styles.exampleDescription}>
          结合不同功能样式的图标标签
        </Text>
        <Space direction="horizontal" wrap>
          <Tag
            tagFunc={TagFunc.strengthen}
            icon={<IconMACamera2 size={12} fillColor="white" />}
          >
            强调标签
          </Tag>
          <Tag
            tagFunc={TagFunc.translucent}
            icon={<IconXStar1 size={12} fillColor="white" />}
          >
            半透明标签
          </Tag>
        </Space>
      </Card>

      <Card style={styles.exampleCard}>
        <Text style={styles.exampleTitle}>不同尺寸的图标标签</Text>
        <Text style={styles.exampleDescription}>图标标签的尺寸适配</Text>
        <Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>大尺寸：</Text>
            <Tag size="l" icon={<IconXStar1 size={14} />}>
              收藏
            </Tag>
            <Tag size="l" icon={<IconCALike1 size={14} />}>
              喜欢
            </Tag>
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>中尺寸：</Text>
            <Tag size="m" icon={<IconXStar1 size={12} />}>
              收藏
            </Tag>
            <Tag size="m" icon={<IconCALike1 size={12} />}>
              喜欢
            </Tag>
          </Space>
          <Space direction="horizontal" wrap>
            <Text style={styles.sizeLabel}>小尺寸：</Text>
            <Tag size="s" icon={<IconXStar1 size={10} />}>
              收藏
            </Tag>
            <Tag size="s" icon={<IconCALike1 size={10} />}>
              喜欢
            </Tag>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default IconTags;
