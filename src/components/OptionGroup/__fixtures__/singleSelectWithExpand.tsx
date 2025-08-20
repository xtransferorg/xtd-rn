import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup, Toast } from '@xrnjs/ui';
import styles from './style';

const options2 = new Array(10).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项签${index + 1}`,
  disabled: index % 2 === 0,
}));

const SingleSelectWithExpandExample = () => {
  const [value2, setValue2] = useState<number[]>([]);

  return (
    <Card>
      <Text style={styles.textWrapper}>等距：单选，带展开</Text>
      <OptionGroup
        options={options2}
        value={value2}
        onChange={(v) => {
          setValue2(v as number[]);
        }}
        scrollable
        operate
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

export default SingleSelectWithExpandExample;
