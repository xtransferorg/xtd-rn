import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup, Toast } from '@xrnjs/ui';
import styles from './style';
import { IconXStar1 } from '../../../icons/index';

const WithPrefixExample = () => {
  const [valuePrefix, setValuePrefix] = useState<number[]>([]);
  const normalColor = '#181721';
  const activeColor = '#F56A00';
  const disabledColor = '#B3B2C2';
  const optionsPrefix = [
    {
      value: 2,
      label: 'Processing',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(2) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 3,
      label: 'Pending',
      prefix: <IconXStar1 size={20} fillColor={disabledColor} />,
      disabled: true,
    },
    {
      value: 4,
      label: 'Sent',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(4) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 5,
      label: 'Bounced',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(5) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 6,
      label: 'Failed',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(6) ? activeColor : normalColor}
        />
      ),
    },
  ];

  return (
    <Card>
      <Text style={styles.textWrapper}>前缀配置-新增</Text>
      <OptionGroup
        options={optionsPrefix}
        value={valuePrefix}
        multiple
        onChange={(v) => {
          setValuePrefix(v);
        }}
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

export default WithPrefixExample;
