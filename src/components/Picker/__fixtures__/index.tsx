import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import {
  Button,
  Space,
  Picker,
  PickerOption,
  PickerOptionCascade,
} from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import FPicker from './floatinglayer';

const columns1: PickerOption[] = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}));
const columns2: PickerOption[][] = [columns1, columns1, columns1];

const columnsText1 = new Array(10).fill(0).map((_, index) => ({
  label: `显示一个或多个选项集合的的可滚动列表选项，提供一组或多组关联选项供用户选择${index}`,
  value: `${index}`,
  disabled: index === 6,
}));

// 新增级联mock数据
const column3: PickerOptionCascade[] = [
  {
    label: 'Beijing',
    value: 'Beijing',
    children: [
      {
        label: 'Beijing',
        value: 'Beijing',
      },
    ],
  },
  {
    label: 'Liaoning',
    value: 'Liaoning',
    children: [
      {
        label: 'Shenyang',
        value: 'Shenyang',
        children: [
          {
            label: 'Shenhe',
            value: 'Shenhe',
          },
          {
            label: 'Hunnan',
            value: 'Hunnan',
          },
          {
            label: 'Shenbei',
            value: 'Shenbei',
          },
        ],
      },
      {
        label: 'Benxi',
        value: 'Benxi',
        children: [
          {
            label: 'Xihu',
            value: 'Xihu',
          },
          {
            label: 'Dongming',
            value: 'Dongming',
          },
          {
            label: 'Huanren',
            value: 'Huanren',
          },
        ],
      },
    ],
  },
  {
    label: 'Yunnan',
    value: 'Yunnan',
    children: [
      {
        label: 'Kunming',
        value: 'Kunming',
        children: [
          {
            label: 'Wuhua',
            value: 'Wuhua',
          },
          {
            label: 'Guandu',
            value: 'Guandu',
          },
          {
            label: 'Chenggong',
            value: 'Chenggong',
          },
        ],
      },
    ],
  },
];

const columns4: PickerOptionCascade[] = [
  {
    label: 'Beijing2',
    value: 'Beijing',
    children: [],
  },
  {
    label: 'Liaoning2',
    value: 'Liaoning',
    children: [],
  },
  {
    label: 'Yunnan2',
    value: 'Yunnan',
    children: [],
  },
];

const { PickerComponent } = Picker;
const PickerScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [mulPickerData, setMulPickerData] =
    useState<PickerOptionCascade[]>(column3);

  return (
    <ScrollView>
      <Space>
        <FPicker />
        <Card style={styles.section}>
          <Text style={styles.title}>Picker方法调用方式</Text>
          <Space>
            <Button
              onPress={() => {
                Picker({
                  title: '标题',
                  columns: columns1,
                }).then((data) => {
                  console.log(data);
                });
              }}
            >
              单项选择
            </Button>

            <Button
              onPress={() => {
                Picker({
                  title: '标题',
                  columns: columnsText1,
                  itemHeight: 76,
                }).then((data) => {
                  console.log(data);
                });
              }}
            >
              多行文字
            </Button>

            <Button
              onPress={() => {
                Picker({
                  title: '多项选择',
                  columns: columns2,
                }).then((data) => {
                  console.log(data);
                });
              }}
            >
              多项选择
            </Button>

            <Button
              onPress={() => {
                Picker({
                  title: '这是多选',
                  columns: columns2,
                  defaultValue: columns1
                    .filter((_, idx) => [0, 4, 8].includes(idx))
                    .map((it) => it.value),
                }).then((data) => {
                  console.log(data);
                });
              }}
            >
              多选默认值
            </Button>

            <Button
              onPress={() => {
                Picker({
                  title: '请选择地址',
                  columns: column3,
                }).then((data) => {
                  console.log(data);
                });
              }}
            >
              级联
            </Button>
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>Picker组件渲染方式</Text>

          <PickerComponent
            visible={visible}
            {...{ title: '多项选择', columns: columns2 }}
            onChange={(v) => {
              console.log(v);
            }}
            onPressOverlay={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
          />
          <Button onPress={() => setVisible(true)}>Picker 组件形式</Button>

          <PickerComponent
            visible={visible2}
            {...{ title: '多项选择', columns: column3 }}
            onChange={(v) => {
              console.log(v);
            }}
            defaultValue={['Liaoning', 'Benxi', 'Dongming']}
            onPressOverlay={() => setVisible2(false)}
            onCancel={() => setVisible2(false)}
            onConfirm={() => setVisible2(false)}
          />

          <PickerComponent
            visible={visible3}
            title="多项选择"
            columns={mulPickerData}
            onChange={(v) => {
              console.log('mulPickerData===', v);
              if (mulPickerData === column3) {
                setMulPickerData(columns4);
              } else {
                setMulPickerData(column3);
              }
            }}
            onPressOverlay={() => setVisible3(false)}
            onCancel={() => setVisible3(false)}
            onConfirm={() => setVisible3(false)}
          />

          <Button onPress={() => setVisible2(true)}>
            Picker 组件形式 级联 & 默认值
          </Button>
          <Button onPress={() => setVisible3(true)}>
            Picker 组件形式 级联 & 数据源列数动态变化
          </Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default PickerScreen;
