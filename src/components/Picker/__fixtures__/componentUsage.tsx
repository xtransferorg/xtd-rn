import React, { useState } from 'react';
import {
  Button,
  Space,
  Picker,
  PickerOption,
  PickerOptionCascade,
  Fill,
} from '@xrnjs/ui';
import Card from '_global/Card';

// 基础选项数据
const basicOptions: PickerOption[] = new Array(8).fill(0).map((_, index) => ({
  label: `选项${index + 1}`,
  value: `option_${index + 1}`,
  disabled: index === 3,
}));

// 多列数据
const multipleColumns: PickerOption[][] = [
  new Array(6).fill(0).map((_, index) => ({
    label: `年份${2020 + index}`,
    value: `year_${2020 + index}`,
  })),
  new Array(12).fill(0).map((_, index) => ({
    label: `${index + 1}月`,
    value: `month_${index + 1}`,
  })),
  new Array(31).fill(0).map((_, index) => ({
    label: `${index + 1}日`,
    value: `day_${index + 1}`,
  })),
];

// 级联数据
const cascadeData: PickerOptionCascade[] = [
  {
    label: '水果',
    value: 'fruit',
    children: [
      {
        label: '苹果',
        value: 'apple',
        children: [
          { label: '红富士', value: 'red_fuji' },
          { label: '青苹果', value: 'green_apple' },
          { label: '黄元帅', value: 'yellow_apple' },
        ],
      },
      {
        label: '橙子',
        value: 'orange',
        children: [
          { label: '脐橙', value: 'navel_orange' },
          { label: '血橙', value: 'blood_orange' },
          { label: '甜橙', value: 'sweet_orange' },
        ],
      },
    ],
  },
  {
    label: '蔬菜',
    value: 'vegetable',
    children: [
      {
        label: '叶菜',
        value: 'leafy',
        children: [
          { label: '白菜', value: 'cabbage' },
          { label: '菠菜', value: 'spinach' },
          { label: '生菜', value: 'lettuce' },
        ],
      },
      {
        label: '根茎菜',
        value: 'root',
        children: [
          { label: '萝卜', value: 'radish' },
          { label: '胡萝卜', value: 'carrot' },
          { label: '土豆', value: 'potato' },
        ],
      },
    ],
  },
];

const { PickerComponent } = Picker;

const ComponentUsage = () => {
  // 单列组件示例
  const [singleVisible, setSingleVisible] = useState(false);
  const [singleValue, setSingleValue] = useState<string[]>([]);

  // 多列组件示例
  const [multipleVisible, setMultipleVisible] = useState(false);
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  // 级联组件示例
  const [cascadeVisible, setCascadeVisible] = useState(false);
  const [cascadeValue, setCascadeValue] = useState<string[]>([]);

  // 带默认值的组件示例
  const [defaultValueVisible, setDefaultValueVisible] = useState(false);
  const [defaultValue, setDefaultValue] = useState<string[]>([
    'year_2022',
    'month_6',
    'day_15',
  ]);

  // 动态数据组件示例
  const [dynamicVisible, setDynamicVisible] = useState(false);
  const [dynamicData, setDynamicData] =
    useState<PickerOptionCascade[]>(cascadeData);

  return (
    <Space>
      <Card title="单列组件形式">
        <PickerComponent
          visible={singleVisible}
          title="单列选择器"
          columns={basicOptions}
          value={singleValue}
          onChange={(values) => {
            console.log('单列组件值变化:', values);
            setSingleValue(values as string[]);
          }}
          onPressOverlay={() => setSingleVisible(false)}
          onCancel={() => setSingleVisible(false)}
          onConfirm={() => setSingleVisible(false)}
        />
        <Space>
          <Button onPress={() => setSingleVisible(true)}>打开单列选择器</Button>
          {singleValue.length > 0 && (
            <Button fill={Fill.weak} disabled>
              当前值: {singleValue.join(', ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="多列组件形式">
        <PickerComponent
          visible={multipleVisible}
          title="日期选择器"
          description="选择年月日"
          columns={multipleColumns}
          value={multipleValue}
          onChange={(values) => {
            console.log('多列组件值变化:', values);
            setMultipleValue(values as string[]);
          }}
          onPressOverlay={() => setMultipleVisible(false)}
          onCancel={() => setMultipleVisible(false)}
          onConfirm={() => setMultipleVisible(false)}
        />
        <Space>
          <Button onPress={() => setMultipleVisible(true)}>
            打开日期选择器
          </Button>
          {multipleValue.length > 0 && (
            <Button fill={Fill.weak} disabled>
              选择日期: {multipleValue.join('-')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="级联组件形式">
        <PickerComponent
          visible={cascadeVisible}
          title="食物分类选择"
          columns={cascadeData}
          value={cascadeValue}
          defaultValue={['fruit', 'apple', 'red_fuji']}
          onChange={(values) => {
            console.log('级联组件值变化:', values);
            setCascadeValue(values as string[]);
          }}
          onPressOverlay={() => setCascadeVisible(false)}
          onCancel={() => setCascadeVisible(false)}
          onConfirm={() => setCascadeVisible(false)}
        />
        <Space>
          <Button onPress={() => setCascadeVisible(true)}>
            打开级联选择器（带默认值）
          </Button>
          {cascadeValue.length > 0 && (
            <Button fill={Fill.weak} disabled>
              选择食物: {cascadeValue.join(' - ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="带默认值的组件">
        <PickerComponent
          visible={defaultValueVisible}
          title="预设日期选择"
          columns={multipleColumns}
          value={defaultValue}
          onChange={(values) => {
            console.log('默认值组件值变化:', values);
            setDefaultValue(values as string[]);
          }}
          onPressOverlay={() => setDefaultValueVisible(false)}
          onCancel={() => setDefaultValueVisible(false)}
          onConfirm={() => setDefaultValueVisible(false)}
        />
        <Space>
          <Button onPress={() => setDefaultValueVisible(true)}>
            打开预设日期选择器
          </Button>
          <Button fill={Fill.weak} disabled>
            预设值: {defaultValue.join('-')}
          </Button>
        </Space>
      </Card>

      <Card title="动态数据组件">
        <PickerComponent
          visible={dynamicVisible}
          title="动态数据选择"
          columns={dynamicData}
          onChange={(values) => {
            console.log('动态数据组件值变化:', values);
            // 模拟数据变化
            if (values[0] === 'fruit') {
              setDynamicData([
                {
                  label: '热带水果',
                  value: 'tropical',
                  children: [
                    {
                      label: '芒果',
                      value: 'mango',
                      children: [
                        { label: '台芒', value: 'taiwan_mango' },
                        { label: '澳芒', value: 'australia_mango' },
                      ],
                    },
                  ],
                },
              ]);
            }
          }}
          onPressOverlay={() => setDynamicVisible(false)}
          onCancel={() => setDynamicVisible(false)}
          onConfirm={() => setDynamicVisible(false)}
        />
        <Space>
          <Button onPress={() => setDynamicVisible(true)}>
            打开动态数据选择器
          </Button>
          <Button fill={Fill.weak} onPress={() => setDynamicData(cascadeData)}>
            重置数据
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default ComponentUsage;
