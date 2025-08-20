import React, { useState } from 'react';
import { Button, Space, Picker, PickerOption, Fill } from '@xrnjs/ui';
import Card from '_global/Card';

// 基础选项数据
const basicOptions: PickerOption[] = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index + 1}`,
  value: `option_${index + 1}`,
  disabled: index === 5, // 第6个选项禁用
}));

// 多列选择数据
const multipleColumns: PickerOption[][] = [
  new Array(5).fill(0).map((_, index) => ({
    label: `第一列${index + 1}`,
    value: `col1_${index + 1}`,
  })),
  new Array(5).fill(0).map((_, index) => ({
    label: `第二列${index + 1}`,
    value: `col2_${index + 1}`,
  })),
  new Array(5).fill(0).map((_, index) => ({
    label: `第三列${index + 1}`,
    value: `col3_${index + 1}`,
  })),
];

// 长文本选项数据
const longTextOptions: PickerOption[] = new Array(8)
  .fill(0)
  .map((_, index) => ({
    label: `这是一个很长的选项文本内容，用于测试文本换行和显示效果 ${
      index + 1
    }`,
    value: `long_text_${index + 1}`,
    disabled: index === 3,
  }));

const BasicUsage = () => {
  const [singleResult, setSingleResult] = useState<string>('');
  const [multipleResult, setMultipleResult] = useState<string[]>([]);
  const [longTextResult, setLongTextResult] = useState<string>('');

  return (
    <Space>
      <Card title="单列选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '请选择一个选项',
                columns: basicOptions,
              }).then((data) => {
                console.log('单列选择结果:', data);
                setSingleResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            单列选择器
          </Button>
          {singleResult && (
            <Button fill={Fill.weak} disabled>
              已选择: {singleResult}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="多列选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '请选择多个选项',
                columns: multipleColumns,
              }).then((data) => {
                console.log('多列选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setMultipleResult(labels as string[]);
              });
            }}
          >
            多列选择器
          </Button>
          {multipleResult.length > 0 && (
            <Button fill={Fill.weak} disabled>
              已选择: {multipleResult.join(' | ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="带默认值的选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '带默认值的选择',
                columns: multipleColumns,
                defaultValue: ['col1_2', 'col2_3', 'col3_1'], // 设置默认值
              }).then((data) => {
                console.log('带默认值选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setMultipleResult(labels as string[]);
              });
            }}
          >
            带默认值选择
          </Button>
        </Space>
      </Card>

      <Card title="长文本选项">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '长文本选项',
                columns: longTextOptions,
                itemHeight: 76, // 增加行高以适应长文本
              }).then((data) => {
                console.log('长文本选择结果:', data);
                setLongTextResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            长文本选择器
          </Button>
          {longTextResult && (
            <Button fill={Fill.weak} disabled>
              已选择: {longTextResult}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="禁用选项">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '包含禁用选项',
                columns: basicOptions, // 第6个选项被禁用
                description: '第6个选项不可选择',
              }).then((data) => {
                console.log('禁用选项选择结果:', data);
                setSingleResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            包含禁用选项
          </Button>
        </Space>
      </Card>
      <Card title="顶部栏选项">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '包含禁用选项',
                columns: basicOptions, // 第6个选项被禁用
                description: '第6个选项不可选择',
                toolbarPosition: 'bottom',
              }).then((data) => {
                console.log('禁用选项选择结果:', data);
                setSingleResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            包含禁用选项
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
