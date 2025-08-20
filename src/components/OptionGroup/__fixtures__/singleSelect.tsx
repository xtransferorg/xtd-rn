import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup } from '@xrnjs/ui';
import styles from './style';

const options = new Array(9).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}));

const SingleSelectExample = () => {
  const [value1, setValue1] = useState<number>();

  return (
    <Card>
      <Text style={styles.textWrapper}>等距：单选</Text>
      <OptionGroup
        options={options}
        value={value1}
        onChange={(v) => {
          setValue1(v as number);
        }}
        scrollable
      />
    </Card>
  );
};

export default SingleSelectExample;
