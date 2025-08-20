import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup, Toast } from '@xrnjs/ui';
import styles from './style';

// 换行问题造数据 iPhone11重现
const options4 = [
  {
    value: 1,
    label: 'All12345678901234567890qwertyuuioop',
  },
  {
    value: 2,
    label: 'Processing',
  },
  {
    value: 3,
    label: 'Pending',
  },
  {
    value: 4,
    label: 'Sent',
  },
  {
    value: 5,
    label: 'Bounced',
  },
  {
    value: 6,
    label: 'Failed',
    disabled: true,
  },
];

const LongTextHandlingExample = () => {
  const [value5, setValue5] = useState<number>();

  return (
    <Card>
      <Text style={styles.textWrapper}>
        等距：单选 (换行问题验证，iPhone11重现)
      </Text>
      <OptionGroup
        accessibilityLabel={'换行问题验证'}
        options={options4}
        deselect={false}
        value={value5}
        onChange={(v) => setValue5(v)}
        scrollable
        onDisabledPress={(v) =>
          Toast({
            position: 'middle',
            message: `${v.label} 不可操作提示`,
            forbidPress: true,
          })
        }
      />
    </Card>
  );
};

export default LongTextHandlingExample;
