import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import SizeDemo from './size';
import StatusDemo from './status';
import AmountDemo from './amount';
import TextAreaDemo from './textarea';
import ClearableDemo from './clearable';
import SuffixDemo from './suffix';
import CodeDemo from './code';
import UnitDemo from './unit';
import ErrorDemo from './error';
import TextAreaAdvancedDemo from './textarea-advanced';
import PickerDemo from './picker';
import styles from './style';

const InputDemoEntry = () => (
  <ScrollView keyboardShouldPersistTaps="handled">
    <Space style={styles.wrapper} direction="vertical">
      <SizeDemo />
      <StatusDemo />
      <AmountDemo />
      <TextAreaDemo />
      <ClearableDemo />
      <SuffixDemo />
      <CodeDemo />
      <UnitDemo />
      <ErrorDemo />
      <TextAreaAdvancedDemo />
      <PickerDemo />
    </Space>
  </ScrollView>
);

export default InputDemoEntry;
