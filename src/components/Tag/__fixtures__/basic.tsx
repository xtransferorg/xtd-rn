import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tag, TagFunc, TagType, Space } from '@xrnjs/ui';

import styles from './style';
import {
  IconMACamera2,
  IconMASearch1,
  IconXHighquality1,
} from '../../../icons/index';
import Card from '_global/Card';

const TagScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card style={styles.wrapper}>
          <Text>状态标签</Text>
          <View style={styles.statusTagList}>
            {Tag.processing({
              children:
                '流程中 信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长',
              style: styles.statusTag,
            })}
            {Tag.interrupt({ children: '流程中断', style: styles.statusTag })}
            {Tag.terminate({ children: '流程终止', style: styles.statusTag })}
            {Tag.error({ children: '流程失败', style: styles.statusTag })}
            {Tag.success({ children: '流程成功', style: styles.statusTag })}
          </View>
        </Card>

        <Card style={styles.wrapper}>
          <Text>常规无图标签</Text>

          <View style={styles.tagList}>
            <Tag tagFunc={TagFunc.strengthen} style={styles.tag}>
              强调标签
              信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长
            </Tag>

            <Tag style={styles.tag}>普通标签</Tag>
            <Tag tagFunc={TagFunc.weaken} style={styles.tag}>
              弱化标签
            </Tag>
            <Tag tagFunc={TagFunc.translucent} style={styles.tag}>
              半透明标签
            </Tag>
            <Tag tagType={TagType.outline} style={styles.tag}>
              普通标签
            </Tag>
            <Tag
              tagType={TagType.outline}
              tagFunc={TagFunc.weaken}
              style={styles.tag}
            >
              弱化标签
            </Tag>
          </View>
        </Card>
        <Card style={styles.wrapper}>
          <Text>尺寸</Text>
          <View style={styles.closableWrapper}>
            <Tag tagFunc={TagFunc.weaken} style={styles.tag} size="l">
              大标签
            </Tag>
            <Tag tagFunc={TagFunc.weaken} style={styles.tag} size="m">
              中标签（默认）
            </Tag>

            <Tag tagFunc={TagFunc.weaken} style={styles.tag} size="s">
              小标签
            </Tag>
          </View>
        </Card>

        <Card style={styles.wrapper}>
          <Text>常规有图标签</Text>

          <Space direction="horizontal" wrap>
            <Tag
              tagFunc={TagFunc.weaken}
              icon={<IconXHighquality1 size={10} />}
            >
              普通标签
              信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长
            </Tag>
            <Tag
              tagFunc={TagFunc.strengthen}
              icon={<IconMACamera2 size={10} fillColor="white" />}
            >
              强调标签
            </Tag>
            <Tag icon={<IconMASearch1 size={10} fillColor="#FF7A00" />}>
              普通标签
            </Tag>
            <Tag
              tagFunc={TagFunc.translucent}
              icon={<IconMACamera2 size={10} fillColor="white" />}
            >
              半透明标签
            </Tag>
          </Space>
        </Card>

        <Card style={styles.wrapper}>
          <Text>可编辑标签</Text>
          <View style={styles.closableWrapper}>
            {Array.from({ length: 6 }).map((__, index) => {
              return (
                <Tag
                  closable
                  key={`${index}`}
                  style={styles.closableTag}
                >{`可编辑标签${index}`}</Tag>
              );
            })}
            <Tag closable key={'cus'} style={styles.closableTag}>
              可编辑标签
              信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长信息过长
            </Tag>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default TagScreen;
