import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, OptionGroup } from '@xrnjs/ui';
import styles from './style';

const options3 = new Array(100).fill(0).map((_, index) => ({
  value: index + 1,
  label: `最新上架标签${index + 1}`,
}));

const MultipleSelectWithExpandExample = () => {
  const [value3, setValue3] = useState<number[]>([]);

  return (
    <Card>
      <Text style={styles.textWrapper}>等距：多选，带展开</Text>
      <OptionGroup
        accessibilityLabel={'等距：多选，带展开'}
        options={options3}
        value={value3}
        onChange={(v) => {
          setValue3(v as number[]);
        }}
        panelMaxHeight={200}
        scrollable
        scrollableWrap
        multiple
        operate
        wrap={false}
      />
    </Card>
  );
};

export default MultipleSelectWithExpandExample;
