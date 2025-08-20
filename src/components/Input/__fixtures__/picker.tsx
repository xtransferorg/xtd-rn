import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Field, Input, Picker, PickerOption } from '@xrnjs/ui';
import { IconXLowersmall1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}));

const PickerDemo = () => {
  const [pickerValue, setPickerValue] = useState<PickerOption>();
  return (
    <Card>
      <Field label="贸易国家/地区" requiredMark>
        <Input
          // @ts-ignore
          value={pickerValue?.label || undefined}
          placeholder="请输入订单编号"
          readOnly
          suffix={<IconXLowersmall1 size={16} />}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            Picker({
              ...(pickerValue && { defaultValue: [pickerValue?.value] }),
              title: '标题',
              columns: columns1,
            }).then((data) => {
              if (data.action === 'confirm') {
                setPickerValue(data.columns[0]);
              }
            });
          }}
        >
          <View style={styles.inputPicker} />
        </TouchableWithoutFeedback>
      </Field>
    </Card>
  );
};

export default PickerDemo;
