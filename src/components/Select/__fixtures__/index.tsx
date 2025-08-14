import React, { FC, useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Space, Select, SelectInputItem, Toast, Option } from '@xrnjs/ui';
import {
  IconMAFinancialmanagement2,
  IconPPBrazil1,
  IconXChina1,
} from '../../../icons/index';
import Card from '_global/Card';
// import AddrTest from './AddrTest';
interface SearchBarScreenProps {
  navigation: any;
}

const options = [
  {
    label: 'option1',
    value: '1-1',
  },
  {
    label: 'option2',
    value: '1-2',
  },
  {
    label: 'option3',
    value: '1-3',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: 'option4',
    value: '1-4',
    subLabel: 'This is a description.',
    prefixIcon: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b',
  },
  {
    label: 'option5',
    value: '1-5',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    disabled: true,
  },
];

const options1 = [
  {
    label: 'option1 label is too too too too too too too too too long!',
    value: '2-1',
  },
  {
    label: 'option2',
    value: '2-2',
    subLabel: 'This is a sublel.',
  },
  {
    label: 'option2_1',
    value: '2-2_1',
    subLabel: 'This is a sublel.',
    contentLabel: 'This is a content',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: 'option2_2(disabled)',
    value: '2-2_2',
    subLabel: 'This is a sublel.',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    disabled: true,
    contentLabel: 'This is a content',
  },
  {
    label: 'option3 label is too too too too too too  long!',
    value: '2-3',
    prefixIcon: (
      <IconMAFinancialmanagement2 size={24} style={{ marginRight: 8 }} />
    ),
  },
  {
    label: 'option3-1 label too too too too too too  long!',
    value: '2-3-1',
    prefixIcon:
      'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  },
  {
    label: (
      <Text style={{ color: 'red', lineHeight: 22 }}>option4 自定义样式</Text>
    ),
    value: '2-4',
    subLabel: <Text style={{ color: 'pink' }}>This is a sublel.</Text>,
    prefixIcon: (
      <IconPPBrazil1 size={24} style={{ marginRight: 8, borderRadius: 40 }} />
    ),
  },
];

const options2 = [{ label: 'default', value: 'default' }];
for (let i = 0; i < 20; i++) {
  options1.push({
    label: `option${i}`,
    value: `atuo-${i}`,
  });
}

const groups = [
  {
    label: 'group1',
    children: options,
  },
  {
    label: 'group2',
    children: options1,
  },
  {
    label: 'group3',
    children: options2,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const extra = (
  <View style={{ paddingBottom: 16 }}>
    <Text style={{ color: '#999' }}>
      底部自定义内容，根据自身需要添加需要展示的内容，具体效果可自定义
    </Text>
  </View>
);

const SelectScreen: FC<SearchBarScreenProps> = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  const [_options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const [value1, setValue1] = useState<string>();
  const [mulDisplayValue, setMulDisplayValue] = useState<SelectInputItem[]>([]);
  const [displayValue, setDisplayValue] = useState<React.ReactNode>();
  const addIndex = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      setOptions(options);
    }, 3000);
  }, []);

  const addOption = () => {
    setOptions((ops) => [
      {
        label: `option-s-${addIndex.current}`,
        value: `s-1-${addIndex.current}`,
      },
      ...ops,
    ]);
    addIndex.current = addIndex.current + 1;
  };

  const onConfirm = (values: string | string[]) => {
    console.log('onConfirm>>>', values);
    setVisible1(false);
  };

  const onCancel1 = () => {
    setVisible1(false);
  };

  const onCancel2 = () => {
    setVisible2(false);
  };

  const onCancel3 = () => {
    setVisible3(false);
  };

  const onChange = (values: string | string[]) => {
    console.log('onChange>>>', values);
    const val = values as string;
    setValue1(val);
    const disOpt = [...options, ...options1].find((opt) => opt.value === val);
    setDisplayValue(
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconXChina1 size={24} />
        <Text style={{ marginLeft: 8 }}>{disOpt?.label}</Text>
      </View>
    );
    setVisible2(false);
  };

  const onChange2 = (values: string | string[]) => {
    console.log('onChange2>>>', values);
    setVisible3(false);
  };

  const setValueAndDisplay = (values: string[]) => {
    setValue(values);
    const dispaly: SelectInputItem[] = [];
    values.forEach((v) => {
      options1.some((opt) => {
        if (opt?.value === v) {
          dispaly.push(opt);
          return true;
        }
        return false;
      });
    });
    setMulDisplayValue(dispaly);
  };

  const onClear = () => {
    setValue([]);
    setMulDisplayValue([]);
  };
  const onClear1 = () => {
    setValue1('');
    setDisplayValue('');
  };

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text>分组类型实例（新增）</Text>
          <Select
            showSearch
            enableSlidingClose
            threshold={0.7}
            type={Select.Type.radio}
            options={groups}
            disableKeyboardManager
            title="标题标题"
            searchEmptyText="没有搜索到数据"
            value={value}
            showConfirmButton
            visible={visible5}
            onPressOverlay={() => setVisible5(false)}
            onClosed={() => setVisible5(false)}
            onConfirm={() => setVisible5(false)}
            onCancel={() => setVisible5(false)}
            onChange={(e) => {
              console.log('onChange==', e);
              setValue(e as string[]);
            }}
            onSearch={(v) => {
              console.log('onSearch==', v);
            }}
            onDisabledPress={onDisabledPress}
            extra={extra}
          />
          <Button onPress={() => setVisible5(true)}>
            弹出多选类型Select组件（新增分组）
          </Button>
        </Card>

        <Card>
          <Text>多选类型实例(使用SelectInput触发&展示 不同状态)</Text>
          <Select
            showSearch
            enableSlidingClose
            threshold={0.7}
            type={Select.Type.checkbox}
            options={options1}
            title="标题标题"
            searchEmptyText="没有搜索到数据"
            value={value}
            showConfirmButton
            visible={visible1}
            onPressOverlay={() => setVisible1(false)}
            onClosed={() => setVisible1(false)}
            onConfirm={onConfirm}
            onCancel={onCancel1}
            onChange={(selectV) => {
              setValueAndDisplay(selectV as string[]);
            }}
            onDisabledPress={onDisabledPress}
            extra={extra}
          />
          <Select.SelectInput
            value={mulDisplayValue}
            multiple
            onPress={() => setVisible1(true)}
            placeholder="弹出多选类型Select组件(无清空按钮)"
            allowClear={false}
          />
          <Select.SelectInput
            value={mulDisplayValue}
            multiple
            closable
            onClose={(item) => {
              console.log('onClose===', item);
              const vals = value.filter((v) => v !== item.value);
              setValueAndDisplay(vals);
            }}
            onPress={() => setVisible1(true)}
            placeholder="弹出多选类型Select组件(closable)"
            onClear={onClear}
          />
          <Select.SelectInput
            value={mulDisplayValue}
            disabled
            multiple
            onPress={() => setVisible1(true)}
            placeholder="弹出多选类型Select组件(disabled)"
            onClear={onClear}
          />
          <Select.SelectInput
            value={mulDisplayValue}
            status={'error'}
            multiple
            onPress={() => setVisible1(true)}
            placeholder="弹出多选类型Select组件(error)"
            onClear={onClear}
          />
        </Card>

        <Card>
          <Text>单选类型实例(使用SelectInput触发&展示 不同尺寸)</Text>
          <Select
            showSearch
            type={Select.Type.radio}
            options={[...options, ...options1]}
            title="标题标题"
            cancelable={false}
            onRepeatClick={() => setVisible2(false)}
            value={value1}
            visible={visible2}
            onPressOverlay={() => setVisible2(false)}
            onCancel={onCancel2}
            onChange={onChange}
            onDisabledPress={onDisabledPress}
            extra={extra}
          />
          <Select.SelectInput
            value={displayValue}
            onPress={() => setVisible2(true)}
            placeholder="弹出单选类型Select组件(large)"
            size={'large'}
            onClear={onClear1}
          />
          <Select.SelectInput
            value={displayValue}
            onPress={() => setVisible2(true)}
            placeholder="弹出单选类型Select组件(default默认)"
            onClear={onClear1}
          />

          <Select.SelectInput
            value={displayValue}
            onPress={() => setVisible2(true)}
            placeholder="弹出单选类型Select组件(small)"
            size={'small'}
            onClear={onClear1}
          />
        </Card>

        <Card>
          <Text>跳转类型实例</Text>
          <Select
            showSearch
            type={Select.Type.redirect}
            options={_options}
            title="标题标题"
            defaultValue={'1'}
            visible={visible3}
            onPressOverlay={() => setVisible3(false)}
            onCancel={onCancel3}
            onChange={onChange2}
            onDisabledPress={onDisabledPress}
            extra={extra}
          />
          <Button onPress={() => setVisible3(true)}>
            弹出跳转类型Select组件
          </Button>
          <Button onPress={addOption}>动态添加</Button>
        </Card>

        <Card title="没有数据">
          <Select
            showSearch
            type={Select.Type.redirect}
            options={[]}
            title="标题标题"
            visible={visible4}
            onPressOverlay={() => setVisible4(false)}
            onDisabledPress={onDisabledPress}
          />
          <Button onPress={() => setVisible4(true)}>
            弹出无数据的 Select 组件
          </Button>
        </Card>
        {/* <AddrTest /> */}
      </Space>
    </ScrollView>
  );
};

export default SelectScreen;
