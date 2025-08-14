import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Field } from '@xrnjs/ui';
import PasswordInput from '../PasswordInput';

export const Card: React.FC<{ label: string; children: React.ReactNode }> = ({
  children,
  label,
}) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#fff', marginBottom: 20 }}>
      <Text style={{ marginBottom: 10, color: '#323233' }}>{label}</Text>
      <View>{children}</View>
    </View>
  );
};

const Demo = () => {
  const [value, setValue] = React.useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Card label="基本用法">
        <PasswordInput
          placeholder="请输入密码"
          onChangeSecureTextEntry={console.log}
        />
      </Card>

      <Card label="不显示眼睛控制按钮">
        <PasswordInput
          placeholder="请输入密码"
          allowClear={false}
          showSecureControl={false}
        />
      </Card>

      <Card label="默认显示为文本输入框">
        <PasswordInput
          placeholder="请输入密码"
          allowClear={false}
          defaultSecureTextEntry={false}
          onChangeSecureTextEntry={console.log}
        />
      </Card>

      <Card label="颜色、大小、边框 (自定义)">
        <PasswordInput
          placeholder="请输入密码"
          allowClear={false}
          eyeSize={30}
          eyeColor="#ccc"
        />
      </Card>

      <Card label="受控状态">
        <Field label="密码">
          <PasswordInput
            placeholder="请输入密码"
            allowClear={false}
            secureTextEntry={value}
            onChangeSecureTextEntry={(e) => setValue(e)}
          />
        </Field>
        <Field label="密码">
          <PasswordInput
            placeholder="请输入密码"
            allowClear={false}
            secureTextEntry={value}
            onChangeSecureTextEntry={(e) => setValue(e)}
          />
        </Field>
      </Card>
    </ScrollView>
  );
};

export default Demo;
