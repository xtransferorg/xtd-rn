import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space } from '@xrnjs/ui';
import {
  IconBPDelete1,
  IconXRadiodisable1,
  IconBPEdit1,
  IconXScancode1,
  IconHPAadd1,
} from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const MenuUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const iconActions = [
    {
      text: '新建菜单',
      icon: <IconHPAadd1 size={16} />,
    },
    {
      text: '扫描',
      icon: <IconXScancode1 size={16} />,
    },
    {
      text: '禁用状态',
      icon: <IconXRadiodisable1 size={16} />,
      disabled: true,
    },
    {
      text: '分割线示例',
      icon: <IconBPEdit1 size={16} />,
      divider: true,
    },
    {
      text: '删除',
      icon: <IconBPDelete1 size={16} />,
      color: '#ff4d4f',
    },
  ];

  const textOnlyActions = [
    { text: '复制' },
    { text: '粘贴' },
    { text: '禁用选项', disabled: true },
    { text: '分割线上方', divider: true },
    { text: '删除', color: '#ff4d4f' },
  ];

  return (
    <Card title="菜单用法">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持带图标的菜单、纯文字菜单、禁用状态、分割线等
        </Text>
        <Space>
          <Popover
            actions={iconActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>带图标菜单</Button>
          </Popover>

          <Popover
            actions={textOnlyActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>纯文字菜单</Button>
          </Popover>

          <Popover
            mode="light"
            actions={iconActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>浅色主题菜单</Button>
          </Popover>

          <Popover
            actions={[{ text: '单个选项' }]}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>单个选项</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default MenuUsage;
