import React from 'react';
import { Text } from 'react-native';
import { Checkbox, Space, Toast } from '@xrnjs/ui';
import { IconMANotice1, IconMANotice2 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';
import CustomerIcon from './CustomerIcon';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v?.label || v} 不可操作提示`,
    forbidPress: true,
  });

const CustomIcon: React.FC = () => {
  const [customValue, setCustomValue] = React.useState(false);

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>自定义图标</Text>
      <Space>
        <Checkbox
          label="自定义复选框图标"
          value={customValue}
          onChange={setCustomValue}
          renderIcon={(props) => <CustomerIcon {...props} />}
        />
        <Checkbox
          label="自定义复选框(禁用)"
          disabled
          renderIcon={(props) => <CustomerIcon {...props} />}
          onDisabledPress={() => onDisabledPress('自定义复选框(禁用)')}
        />
        <Checkbox
          label="自定义复选框(默认选中且禁用)"
          defaultValue
          disabled
          renderIcon={(props) => <CustomerIcon {...props} />}
          onDisabledPress={() =>
            onDisabledPress('自定义复选框(默认选中且禁用)')
          }
        />
        <Checkbox
          label="简单图标切换"
          renderIcon={({ active }) =>
            active ? <IconMANotice2 size={20} /> : <IconMANotice1 size={20} />
          }
        />
        <Checkbox
          label="带颜色的自定义图标"
          renderIcon={({ active }) =>
            active ? (
              <IconMANotice2 size={20} color="#52c41a" />
            ) : (
              <IconMANotice1 size={20} color="#d9d9d9" />
            )
          }
        />
      </Space>
    </Card>
  );
};

export default CustomIcon;
