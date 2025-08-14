import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Field,
  Input,
  Space,
  Uploader,
  Toast,
  AutoComplete,
  AutoCompleteOption,
} from '@xrnjs/ui';
import { IconMARobot1 } from '../../../icons/index';
import Card from '_global/Card'; // demo用 非标准组件

function Demo() {
  const { Title } = Field;
  const [options1, setOptions1] = useState<AutoCompleteOption[]>([]);

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Space>
        <Card title="带分组标题（新增）" gap={0}>
          <Title label="分组标题" />
          <Field
            label="标题"
            requiredMark
            showQuestionIcon
            onClickQuestionIcon={() => {
              Toast({
                position: 'top',
                message: 'Hi~ ',
              });
            }}
          >
            <Input placeholder="请输入" />
          </Field>
          <Field
            label="标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证 标题过长问题验证"
            showQuestionIcon
          >
            <Input placeholder="请输入" />
          </Field>

          <Title label="分组标题" style={{ marginTop: 32 }} />
          <Field label="标题" requiredMark>
            <Input placeholder="请输入" />
          </Field>
        </Card>

        <Card title="基本用法" gap={0} style={{ zIndex: 1 }} noSpace>
          <Field label="标题" showQuestionIcon>
            <Input placeholder="请输入" />
          </Field>
          <Field label="标题" requiredMark showQuestionIcon>
            <Input placeholder="请输入" />
          </Field>
          <Field
            label={<IconMARobot1 size={26} style={{ marginRight: 4 }} />}
            labelContainerStyle={{ alignItems: 'center' }}
          >
            <Input placeholder="请输入(label支持自定义node)" />
          </Field>
          <Field
            label="标题"
            requiredMark
            errorMessage="错误提示内容"
            showErrorIcon
            style={{ zIndex: 10 }}
          >
            <AutoComplete
              allowClear
              // open
              options={options1}
              onChange={(v) => {
                console.log('v===', v); // 最后一次就是最终结果值
                if (!v) {
                  return setOptions1([]);
                }
                const arr: string[] = [];
                arr.length = 9;
                arr.fill('1');
                const ops = arr.map((_, i) => {
                  return { value: v.repeat(i + 1) };
                });
                setOptions1(ops);
              }}
              onSelect={(value, option) => {
                console.log('onSelect===', { value, option });
              }}
              onVisibleChange={(isOpen) => {
                console.log('onVisibleChange~', isOpen);
              }}
              onFocus={() => {
                console.log('onFocus~');
              }}
              onBlur={() => {
                console.log('onBlur~');
              }}
              onClear={() => console.log('onClear~')}
            />
          </Field>
          <Field
            label="样例标签1"
            // requiredMark 最新去除
            showDividerLine
          >
            <Input placeholder="请输入" />
          </Field>

          <Field label="样例标签2" requiredMark layout="vertical">
            <Input placeholder="请输入" />
          </Field>

          <Field label="请上传证件" requiredMark>
            <Uploader useContainerWidth />
          </Field>
        </Card>
        <Card title="进阶用法" gap={0} style={{ paddingBottom: 100 }}>
          <Field
            label="错误和提示同时存在"
            requiredMark
            errorMessage="错误提示"
            message="提示"
            showErrorIcon={true}
          >
            <Input placeholder="请输入" />
          </Field>
        </Card>

        <Card
          title="容器外层padding改变"
          gap={0}
          style={{ paddingBottom: 100 }}
        >
          <Field
            label="标题"
            requiredMark
            showQuestionIcon
            errorMessage="错误提示"
            message="提示"
            labelWrapperStyle={{ paddingTop: 2 }}
            messageWrapperStyle={{ paddingTop: 4 }}
          >
            <Input placeholder="请输入" />
          </Field>
          <Field
            label="错误和提示过长情况"
            containerStyle={{ paddingTop: 24 }}
            requiredMark
            errorMessage="错误提示 错误提示信息过长问题验证 错误提示信息过长问题验证 错误提示信息过长问题验证"
            message="提示 提示信息过长问题验证 提示信息过长问题验证 提示信息过长问题验证"
            messageWrapperStyle={{ paddingTop: 4 }}
            showErrorIcon={true}
          >
            <Input placeholder="请输入" />
          </Field>
        </Card>
      </Space>
    </ScrollView>
  );
}

export default Demo;
