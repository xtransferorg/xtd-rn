import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { Card, Options, Toast } from '@xrnjs/ui';
import styles from './style';

const vCenter: StyleProp<ViewStyle> = {};
const iconProps = { size: 32 };

const CustomIconSizeExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={[styles.title]}>带图标自定义大小</Text>
      <Options
        defaultValue={'1'}
        columns={2}
        showIcon
        style={{ paddingHorizontal: 0 }}
        fullColumn
        iconProps={iconProps}
        optionStyle={vCenter}
        options={[
          {
            label: '标题内容正常',
            description: '描述正常',
            value: '1',
          },
          {
            label: '标题内容过长情况----标题内容过长情况',
            description: '描述正常',
            value: '2',
          },
          {
            label: '标题内容正常',
            description: '描述内容过长情况描述内容过长情况',
            value: '3',
          },
          {
            label: '标题内容过长情况----标题内容过长情况',
            description: '描述内容过长情况描述内容过长情况',
            value: '4',
          },
          {
            label: '标题内容过长情况----标题内容过长情况',
            description: '描述内容过长情况描述内容过长情况',
            value: '5',
          },
          {
            label: '只有标题--标题内容过长情况----标题内容过长情况',
            value: '6',
          },
          {
            description: '只有描述--描述内容过长情况描述内容过长情况',
            value: '7',
          },
        ]}
        onDisabledPress={(opt) => {
          console.log('opt=', opt.label);
          Toast({
            position: 'middle',
            message: `${opt.label} 不可操作提示`,
            forbidPress: true,
          });
        }}
      />
    </Card>
  );
};

export default CustomIconSizeExample;
