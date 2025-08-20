import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavBar, Input, Button, Fill, Size, Space } from '@xrnjs/ui';
import {
  IconXOpeneyes1,
  IconXSettings1,
  IconMAMore1,
  IconMASearch1,
} from '../../../icons/index';
import styles from './style';

const right = [
  { icon: IconXOpeneyes1, onPress: () => {}, label: '显示' },
  { icon: IconXSettings1, onPress: () => {}, label: '设置' },
];

const CustomContent: FC = () => {
  return (
    <Space>
      <NavBar translucent onBack={() => {}} right={right}>
        <Input size="small" />
      </NavBar>

      <NavBar
        translucent
        onBack={() => {}}
        right={
          <Button
            fill={Fill.solid}
            size={Size.mini}
            onPress={() => {
              console.log('新建转账记录');
            }}
          >
            新建
          </Button>
        }
        title="标题文案"
        description="副标题文案"
      />

      <NavBar
        translucent
        onBack={() => {}}
        right={
          <>
            <TouchableOpacity>
              <IconMAMore1 size={16} />
            </TouchableOpacity>
            <View style={styles.iconSpace} />
            <TouchableOpacity>
              <IconMASearch1 />
            </TouchableOpacity>
          </>
        }
      >
        标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案
      </NavBar>

      <NavBar
        translucent
        backArrow={
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.backText}>返回</Text>
          </TouchableOpacity>
        }
      >
        <>
          <Text style={styles.title}>标题文案</Text>
          <Text style={styles.description}>副标题文案副标题文案</Text>
        </>
      </NavBar>
    </Space>
  );
};

export default CustomContent;
