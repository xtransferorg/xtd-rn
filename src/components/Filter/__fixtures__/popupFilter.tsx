import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Filter, Space, Button, Fill, Checkbox, OptionGroup } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const checkboxOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' },
  { value: 4, label: '选项4' },
];

const radioOptions = [
  { value: 'a', label: '单选A' },
  { value: 'b', label: '单选B' },
  { value: 'c', label: '单选C' },
];

const PopupFilter = () => {
  const [checkboxValues, setCheckboxValues] = useState<number[]>([]);
  const [radioValue, setRadioValue] = useState<string>('');
  const [checkboxLabel, setCheckboxLabel] = useState<string>();
  const [radioLabel, setRadioLabel] = useState<string>();

  const handleCheckboxChange = (value: number, checked: boolean) => {
    if (checked) {
      setCheckboxValues([...checkboxValues, value]);
    } else {
      setCheckboxValues(checkboxValues.filter((v) => v !== value));
    }
  };

  const handleCheckboxConfirm = () => {
    const selectedLabels = checkboxOptions
      .filter((option) => checkboxValues.includes(option.value))
      .map((option) => option.label);
    setCheckboxLabel(
      selectedLabels.length > 0 ? selectedLabels.join(', ') : undefined
    );
  };

  const handleRadioConfirm = () => {
    const selectedOption = radioOptions.find(
      (option) => option.value === radioValue
    );
    setRadioLabel(selectedOption?.label);
  };

  return (
    <Space>
      <Card title="复选框筛选">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="多选筛选"
              itemLabel={checkboxLabel}
              style={styles.item}
            >
              <View style={styles.panel200}>
                <Space>
                  {checkboxOptions.map((option) => (
                    <Checkbox
                      key={option.value}
                      label={option.label}
                      value={checkboxValues.includes(option.value)}
                      onChange={(checked) =>
                        handleCheckboxChange(option.value, checked)
                      }
                      labelTextStyle={styles.labelRow}
                      labelPosition="left"
                    />
                  ))}
                </Space>
              </View>
              <View style={styles.btnGroupWrapper}>
                <Button
                  style={styles.btn}
                  fill={Fill.outline}
                  onPress={() => {
                    setCheckboxValues([]);
                    setCheckboxLabel(undefined);
                  }}
                >
                  重置
                </Button>
                <Button style={styles.btn} onPress={handleCheckboxConfirm}>
                  确定
                </Button>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="单选组筛选">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="单选筛选"
              itemLabel={radioLabel}
              style={styles.item}
            >
              <View style={styles.panel200}>
                <OptionGroup
                  options={radioOptions}
                  value={radioValue}
                  onChange={setRadioValue}
                />
              </View>
              <View style={styles.btnGroupWrapper}>
                <Button
                  style={styles.btn}
                  fill={Fill.outline}
                  onPress={() => {
                    setRadioValue('');
                    setRadioLabel(undefined);
                  }}
                >
                  重置
                </Button>
                <Button style={styles.btn} onPress={handleRadioConfirm}>
                  确定
                </Button>
              </View>
            </Filter.Item>
          </ScrollView>
        </Filter>
      </Card>

      <Card title="带徽章的选项">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="徽章筛选"
              style={styles.item}
              options={[
                { value: 1, label: '热门', badge: 'HOT' },
                { value: 2, label: '新品', badge: 'NEW' },
                { value: 3, label: '促销', badge: 99 },
              ]}
            />
          </ScrollView>
        </Filter>
      </Card>

      <Card title="树形结构选项">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="分类筛选"
              style={styles.item}
              options={[
                {
                  value: 'electronics',
                  label: '电子产品',
                  children: [
                    { value: 'phone', label: '手机' },
                    { value: 'laptop', label: '笔记本' },
                  ],
                },
                {
                  value: 'clothing',
                  label: '服装',
                  children: [
                    { value: 'shirt', label: '衬衫' },
                    { value: 'pants', label: '裤子' },
                  ],
                },
              ]}
            />
          </ScrollView>
        </Filter>
      </Card>

      <Card title="原生弹窗模式">
        <Filter style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
          >
            <Filter.Item
              placeholder="原生弹窗"
              style={styles.item}
              useNative={true}
              options={[
                { value: 1, label: '原生选项1' },
                { value: 2, label: '原生选项2' },
                { value: 3, label: '原生选项3' },
              ]}
            />
          </ScrollView>
        </Filter>
      </Card>
    </Space>
  );
};

export default PopupFilter;
