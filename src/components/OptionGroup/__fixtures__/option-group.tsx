/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { OptionGroup, Space, SCREEN_WIDTH, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconXStar1 } from '../../../icons/index';

const options = new Array(9).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}));

const options2 = new Array(10).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项签${index + 1}`,
  disabled: index % 2 === 0,
}));

const options3 = new Array(100).fill(0).map((_, index) => ({
  value: index + 1,
  label: `最新上架标签${index + 1}`,
}));

// 换行问题造数据 iPhone11重现
const options4 = [
  {
    value: 1,
    label: 'All12345678901234567890qwertyuuioop',
  },
  {
    value: 2,
    label: 'Processing',
  },
  {
    value: 3,
    label: 'Pending',
  },
  {
    value: 4,
    label: 'Sent',
  },
  {
    value: 5,
    label: 'Bounced',
  },
  {
    value: 6,
    label: 'Failed',
    disabled: true,
  },
];

const OptionGroupScreen = () => {
  const [value1, setValue1] = useState<number>();
  const [value2, setValue2] = useState<number[]>([]);
  const [value3, setValue3] = useState<number[]>([]);
  const [value4, setValue4] = useState<number>();
  const [value5, setValue5] = useState<number>();
  const [valuePrefix, setValuePrefix] = useState<number[]>([]);
  const normalColor = '#181721';
  const activeColor = '#F56A00';
  const disabledColor = '#B3B2C2';
  const optionsPrefix = [
    {
      value: 2,
      label: 'Processing',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(2) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 3,
      label: 'Pending',
      prefix: <IconXStar1 size={20} fillColor={disabledColor} />,
      disabled: true,
    },
    {
      value: 4,
      label: 'Sent',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(4) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 5,
      label: 'Bounced',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(5) ? activeColor : normalColor}
        />
      ),
    },
    {
      value: 6,
      label: 'Failed',
      prefix: (
        <IconXStar1
          size={20}
          fillColor={valuePrefix.includes(6) ? activeColor : normalColor}
        />
      ),
    },
  ];
  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.textWrapper}>前缀配置-新增</Text>
          <OptionGroup
            options={optionsPrefix}
            value={valuePrefix}
            multiple
            onChange={(v) => {
              setValuePrefix(v);
            }}
            onDisabledPress={(v) =>
              Toast({
                position: 'middle',
                message: `${v.label} 不可操作提示`,
                forbidPress: true,
              })
            }
          />
        </Card>

        <Card>
          <Text style={styles.textWrapper}>等距：单选</Text>
          <OptionGroup
            options={options}
            value={value1}
            onChange={(v) => {
              setValue1(v as number);
            }}
            optionStyle={[
              styles.optionStyle,
              { width: (SCREEN_WIDTH - 28 - 40) / 5 },
            ]}
            numberOfSingleLines={5}
            scrollable
          />
        </Card>

        <Card>
          <Text style={styles.textWrapper}>等距：单选，带展开</Text>
          <OptionGroup
            options={options2}
            value={value2}
            onChange={(v) => {
              setValue2(v as number[]);
            }}
            numberOfSingleLines={4}
            scrollable
            operate
            onDisabledPress={(v) =>
              Toast({
                position: 'middle',
                message: `${v.label} 不可操作提示`,
                forbidPress: true,
              })
            }
          />
        </Card>

        <Card>
          <Text style={styles.textWrapper}>等距：多选，带展开</Text>
          <OptionGroup
            accessibilityLabel={'等距：多选，带展开'}
            options={options3}
            value={value3}
            onChange={(v) => {
              setValue3(v as number[]);
            }}
            panelMaxHeight={200}
            numberOfSingleLines={2}
            scrollable
            scrollableWrap
            multiple
            operate
            wrap={false}
          />
        </Card>

        <Card>
          <Text style={styles.textWrapper}>等距：换行</Text>
          <OptionGroup
            style={{ paddingVertical: 4, paddingLeft: 4, paddingRight: 4 }}
            options={options}
            value={value4}
            onChange={(v) => {
              setValue4(v as number);
            }}
            optionStyle={styles.optionStyle}
            numberOfSingleLines={4}
          />
        </Card>

        <Card>
          <Text style={styles.textWrapper}>
            等距：单选 (换行问题验证，iPhone11重现)
          </Text>
          <OptionGroup
            accessibilityLabel={'换行问题验证'}
            options={options4}
            deselect={false}
            value={value5}
            onChange={(v) => setValue5(v)}
            numberOfSingleLines={5}
            scrollable
            onDisabledPress={(v) =>
              Toast({
                position: 'middle',
                message: `${v.label} 不可操作提示`,
                forbidPress: true,
              })
            }
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default OptionGroupScreen;
