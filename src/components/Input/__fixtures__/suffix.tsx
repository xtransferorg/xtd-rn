import React from 'react';
import { View } from 'react-native';
import { Field, Input } from '@xrnjs/ui';
import { IconXRightsmall1, IconMARobot1 } from '../../../icons/index';
import Card from '_global/Card';

const SuffixDemo = () => (
  <Card>
    <Field label="商品数量" requiredMark>
      <Input placeholder="提示语提示语" />
    </Field>
    <Field label="商品单位" requiredMark style={{ flex: 1 }}>
      <Input
        placeholder="自定义提示语样式"
        placeholderStyle={{ color: '#f579' }}
        suffix={
          <View style={{ paddingLeft: 0 }}>
            <IconXRightsmall1 size={16} />
          </View>
        }
      />
    </Field>
    <Field label="订单编号" requiredMark layout="horizontal" message="提示语">
      <Input placeholder="请输入订单编号" />
    </Field>
    <Field
      label="普通提现账户"
      requiredMark
      message="ICBC-HK(6666)"
      icon={
        <IconMARobot1 size={24} fillColor="#ccc" style={{ marginRight: 10 }} />
      }
    >
      <Input placeholder="请输入订单编号" />
    </Field>
    <Field label="无边框" requiredMark>
      <Input placeholder="请输入订单编号" borderNone />
    </Field>
  </Card>
);

export default SuffixDemo;
