import React, { useState } from 'react';
import {
  Button,
  Space,
  Picker,
  PickerOption,
  FloatingLayer,
  Fill,
} from '@xrnjs/ui';
import Card from '_global/Card';
import { View } from 'react-native';
import styles from './style';

// 自定义样式选项数据
const customOptions: PickerOption[] = new Array(12).fill(0).map((_, index) => ({
  label: `自定义选项${index + 1}`,
  value: `custom_${index + 1}`,
  disabled: index % 4 === 3, // 每4个选项禁用一个
}));

// 时间选择数据
const timeColumns: PickerOption[][] = [
  new Array(24).fill(0).map((_, index) => ({
    label: `${index.toString().padStart(2, '0')}时`,
    value: `hour_${index}`,
  })),
  new Array(60).fill(0).map((_, index) => ({
    label: `${index.toString().padStart(2, '0')}分`,
    value: `minute_${index}`,
  })),
  new Array(60).fill(0).map((_, index) => ({
    label: `${index.toString().padStart(2, '0')}秒`,
    value: `second_${index}`,
  })),
];

// 大数据量选项
const largeDataOptions: PickerOption[] = new Array(1000)
  .fill(0)
  .map((_, index) => ({
    label: `大数据选项${index + 1}`,
    value: `large_data_${index + 1}`,
    disabled: index % 100 === 99, // 每100个选项禁用一个
  }));

const { PickerComponent } = Picker;

const AdvancedFeatures = () => {
  // 自定义样式示例
  const [customResult, setCustomResult] = useState<string>('');

  // 嵌套弹框示例
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [nestedPickerVisible, setNestedPickerVisible] = useState(false);
  const [nestedResult, setNestedResult] = useState<string[]>([]);

  // 大数据量示例
  const [largeDataResult, setLargeDataResult] = useState<string>('');

  // 自定义高度示例
  const [customHeightResult, setCustomHeightResult] = useState<string[]>([]);

  // 加载状态示例
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Space>
      <Card title="自定义样式">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '自定义样式选择器',
                description: '这是一个自定义样式的选择器',
                columns: customOptions,
                itemHeight: 60, // 自定义行高
                visibleItemCount: 7, // 显示7行
                confirmButtonText: '确定选择',
                cancelButtonText: '取消选择',
              }).then((data) => {
                console.log('自定义样式选择结果:', data);
                setCustomResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            自定义样式选择器
          </Button>
          {customResult && (
            <Button fill={Fill.weak} disabled>
              已选择: {customResult}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="嵌套弹框中使用">
        <FloatingLayer
          title="嵌套弹框示例"
          visible={floatingVisible}
          showCancelButton
          showConfirmButton={false}
          onPressOverlay={() => setFloatingVisible(false)}
          onPressTextButton={() => setFloatingVisible(false)}
          onConfirm={() => setFloatingVisible(false)}
          onCancel={() => setFloatingVisible(false)}
          enableSlidingClose
          footer={
            <Button fill={Fill.solid} onPress={() => setFloatingVisible(false)}>
              关闭弹框
            </Button>
          }
        >
          <View style={styles.nestedContainer}>
            <PickerComponent
              visible={nestedPickerVisible}
              title="嵌套选择器"
              columns={timeColumns}
              value={nestedResult}
              onChange={(values) => {
                console.log('嵌套选择器值变化:', values);
                setNestedResult(values as string[]);
              }}
              onPressOverlay={() => setNestedPickerVisible(false)}
              onCancel={() => setNestedPickerVisible(false)}
              onConfirm={() => setNestedPickerVisible(false)}
            />
            <Space>
              <Button onPress={() => setNestedPickerVisible(true)}>
                打开时间选择器
              </Button>
              {nestedResult.length > 0 && (
                <Button fill={Fill.weak} disabled>
                  选择时间: {nestedResult.join(':')}
                </Button>
              )}
            </Space>
          </View>
        </FloatingLayer>
        <Button onPress={() => setFloatingVisible(true)}>
          嵌套弹框中使用选择器
        </Button>
      </Card>

      <Card title="大数据量处理">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '大数据量选择器',
                description: '包含1000个选项的选择器',
                columns: largeDataOptions,
                defaultValue: ['large_data_500'], // 默认选择中间位置
              }).then((data) => {
                console.log('大数据量选择结果:', data);
                setLargeDataResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            大数据量选择器（1000项）
          </Button>
          {largeDataResult && (
            <Button fill={Fill.weak} disabled>
              已选择: {largeDataResult}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="自定义高度和显示行数">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '自定义高度选择器',
                columns: timeColumns,
                itemHeight: 80, // 更大的行高
                visibleItemCount: 3, // 只显示3行
                defaultValue: ['hour_12', 'minute_30', 'second_0'],
              }).then((data) => {
                console.log('自定义高度选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setCustomHeightResult(labels as string[]);
              });
            }}
          >
            大行高3行显示
          </Button>
          {customHeightResult.length > 0 && (
            <Button fill={Fill.weak} disabled>
              选择时间: {customHeightResult.join(' ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="加载状态">
        <PickerComponent
          visible={loadingVisible}
          title="加载状态选择器"
          columns={customOptions}
          loading={isLoading}
          onChange={(values) => {
            console.log('加载状态选择器值变化:', values);
          }}
          onPressOverlay={() => setLoadingVisible(false)}
          onCancel={() => setLoadingVisible(false)}
          onConfirm={() => {
            setIsLoading(true);
            // 模拟异步操作
            setTimeout(() => {
              setIsLoading(false);
              setLoadingVisible(false);
            }, 2000);
          }}
        />
        <Space>
          <Button onPress={() => setLoadingVisible(true)}>
            带加载状态的选择器
          </Button>
          <Button fill={Fill.weak} onPress={() => setIsLoading(!isLoading)}>
            切换加载状态
          </Button>
        </Space>
      </Card>

      <Card title="自定义按钮文本">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '自定义按钮文本',
                description: '确认和取消按钮使用自定义文本',
                columns: customOptions,
                confirmButtonText: '立即选择',
                cancelButtonText: '稍后再说',
              }).then((data) => {
                console.log('自定义按钮文本选择结果:', data);
                setCustomResult((data.columns?.[0]?.label || '') as string);
              });
            }}
          >
            自定义按钮文本
          </Button>
        </Space>
      </Card>
      <Card title="空数组">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '请选择',
                columns: [[]],
              }).then(({ action, values }) => {
                console.log('Promise  =>>  action  =>', action);
                console.log('Promise  =>>  value  =>', values);
              });
            }}
          >
            处理空数组 [[]]
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
