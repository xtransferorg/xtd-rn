import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Stepper, Field } from '@xrnjs/ui';
import { IconMARetreat1, IconMAForward1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

export const Card1: React.FC<{ label: string; children: React.ReactNode }> = ({
  children,
  label,
}) => {
  return (
    <Card style={{ padding: 20, backgroundColor: '#fff', marginBottom: 20 }}>
      <Text style={{ marginBottom: 10, color: '#323233' }}>{label}</Text>
      <View>{children}</View>
    </Card>
  );
};

const BasicStepper: React.FC = () => {
  const [value, setValue] = useState<number | undefined>(1.1);
  const [value1, setValue1] = useState<number | undefined>(3.2);
  return (
    <ScrollView>
      <Space>
        <Card1 label="基本用法">
          <Stepper defaultValue={2.3} />
        </Card1>
        <Card1 label="大号">
          <Stepper size="large" />
        </Card1>

        <Card1 label="限制输入整数">
          <Stepper value={2} integer />
        </Card1>

        <Card1 label="beforeChange 用法">
          <Text style={styles.top}>直接返回可输入</Text>
          <Stepper
            defaultValue={0.1}
            inputWidth={50}
            beforeChange={() => {
              // 建议
              return true;
            }}
          />

          <Text style={styles.top}>直接返回不可输入</Text>
          <Stepper
            defaultValue={0.1}
            inputWidth={50}
            beforeChange={() => {
              // 建议
              return false;
            }}
          />

          <Text style={styles.top}>promise反馈可输入</Text>
          <Stepper
            defaultValue={0.1}
            inputWidth={50}
            beforeChange={() => {
              return Promise.resolve(true);
            }}
          />

          <Text style={styles.top}>promise反馈不可输入</Text>
          <Stepper
            defaultValue={0.1}
            inputWidth={50}
            beforeChange={() => {
              return Promise.resolve(false);
            }}
          />
        </Card1>

        <Card1 label="小数点后3位">
          <Stepper value={2.377} digits={3} step={0.001} />
        </Card1>
        <Card1 label="错误告警(配合Field)-new ">
          <Field
            label="标题"
            requiredMark
            errorMessage="错误提示内容"
            showErrorIcon
          >
            <Stepper placeholder="请输入" status="error" />
          </Field>
        </Card1>
        <Card1 label="完全禁用-new">
          <Stepper value={2.3} disabled />
        </Card1>
        <Card1 label="禁用输入框">
          <Stepper value={2.3} inputReadOnly />
        </Card1>

        <Card1 label="禁用减少按钮">
          <Stepper value={2.3} disableMinus />
        </Card1>

        <Card1 label="禁用增加按钮">
          <Stepper value={2.3} disablePlus />
        </Card1>

        <Card1 label="设置步长">
          <Stepper value={2.3} step={0.1} />
        </Card1>

        <Card1 label="设置min(-10)和max(3)">
          <Stepper value={2.3} min={-10} max={3} />
        </Card1>

        <Card1 label="允许为空">
          <Stepper allowEmpty placeholder="请输入金额" onChange={console.log} />
        </Card1>

        <Card1 label="受控 value">
          <Stepper value={value} onChange={(e) => setValue(e)} />
          <Stepper
            style={{ marginTop: 10 }}
            value={value}
            onChange={(e) => setValue(e)}
          />
          <Text>{value}</Text>
        </Card1>

        <Card1 label="输入框样式">
          <Stepper defaultValue={0.1} inputWidth={50} />
        </Card1>

        <Card1 label="前置后置图标">
          <Stepper
            defaultValue={0.1}
            prefixIcon={<IconMARetreat1 size={10} />}
            suffixIcon={<IconMAForward1 size={10} />}
          />
        </Card1>

        <Card1 label="支持修改小数点(需要设置系统语言)">
          <Field label="小数点">
            <Stepper
              defaultValue={1.23}
              decimalSeparator=","
              onChange={console.log}
            />
          </Field>
          <Field label="设置步数0.1和小数点后两位">
            <Stepper
              decimalSeparator=","
              onChange={console.log}
              digits={2}
              step={0.1}
            />
          </Field>
          <Field label="默认值为null并且受控">
            <Stepper
              // @ts-ignore
              defaultValue={null}
              value={value1}
              decimalSeparator=","
              onChange={setValue1}
            />
          </Field>
          <Field label="受控">
            <Stepper value={value1} decimalSeparator="," onChange={setValue1} />
          </Field>
        </Card1>
      </Space>
    </ScrollView>
  );
};

export default BasicStepper;
