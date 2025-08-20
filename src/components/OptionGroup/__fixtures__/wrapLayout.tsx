import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup } from '@xrnjs/ui';
import styles from './style';

const options = new Array(9).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}));

const WrapLayoutExample = () => {
  const [value4, setValue4] = useState<number>();

  return (
    <Card>
      <Text style={styles.textWrapper}>等距：换行</Text>
      <OptionGroup
        options={options}
        value={value4}
        onChange={(v) => {
          setValue4(v as number);
        }}
        optionStyle={styles.optionStyle}
        isPanel
        numberOfSingleLines={4}
      />
    </Card>
  );
};

export default WrapLayoutExample;
