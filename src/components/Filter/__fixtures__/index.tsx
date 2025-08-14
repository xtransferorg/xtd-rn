import React, { useState, createRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  Filter,
  Button,
  Title,
  Checkbox,
  Space,
  defaultColor,
  OptionGroup,
  Fill,
  ItemRef,
  FilterLayoutType,
} from '@xrnjs/ui';
import styles from './style';
import { IconXASpecification1 } from '../../../icons/index';
import Card from '_global/Card';
import UsePopupFilter from './use-popup-filter';

const options = new Array(3).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}));

const FilterScreen = () => {
  const [label01, setLabel01] = useState<string>();
  const item01Ref = createRef<ItemRef>();

  const [label02, setLabel02] = useState<string>();
  const item02Ref = createRef<ItemRef>();
  const [value1, setValue1] = useState<number>();
  const [value2, setValue2] = useState<number>();

  return (
    <ScrollView>
      <Space>
        <UsePopupFilter />

        <Card>
          <Text style={styles.text}>等分布局</Text>
          <Filter style={styles.filterWrapper}>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollWrapper}
            >
              <Filter.Item
                placeholder="标签名称1"
                itemLabel={label01}
                ref={item01Ref}
                style={styles.item}
              >
                <View style={styles.panel100}>
                  <Text>这是内容1</Text>
                </View>
                <View style={styles.btnGroupWrapper}>
                  <Button
                    style={styles.btn}
                    fill={Fill.outline}
                    onPress={() => setLabel01(undefined)}
                  >
                    重置
                  </Button>
                  <View style={styles.space} />
                  <Button
                    style={styles.btn}
                    onPress={() => {
                      setLabel01('这是标签值');
                      item01Ref.current?.close();
                    }}
                  >
                    确定
                  </Button>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称2" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容2</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称3" style={styles.item}>
                <View style={styles.panel300}>
                  <Text>这是内容3</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称4">
                <View style={styles.panel300}>
                  <Text>这是内容4</Text>
                </View>
              </Filter.Item>
            </ScrollView>
          </Filter>
        </Card>

        <Card>
          <Text style={styles.text}>等距布局</Text>
          <Filter
            style={styles.filterWrapper}
            filterLayoutType={FilterLayoutType.Equidistance}
          >
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollWrapper}
            >
              <Filter.Item placeholder="标签名称1" style={styles.item}>
                <View style={styles.panel100}>
                  <Text>这是内容1</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称2" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容2</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称3" style={styles.item}>
                <View style={styles.panel300}>
                  <Text>这是内容3</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称4">
                <View style={styles.panel300}>
                  <Text>这是内容4</Text>
                </View>
              </Filter.Item>
            </ScrollView>
          </Filter>
        </Card>

        <Card>
          <Text style={styles.text}>等距布局：带筛选</Text>
          <Filter
            style={styles.filterWrapper}
            filterLayoutType={FilterLayoutType.Equidistance}
          >
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollWrapper}
            >
              <Filter.Item
                style={styles.item}
                ref={item02Ref}
                itemLabel={label02}
                placeholder="标签名称1"
              >
                <View style={styles.panel200}>
                  <Space>
                    <Checkbox
                      labelTextStyle={styles.labelRow}
                      labelPosition="left"
                      defaultValue
                      label="内容区实际视觉形式1"
                    />
                    <Checkbox
                      labelTextStyle={styles.labelRow}
                      labelAlign="top"
                      labelPosition="left"
                      defaultValue
                      label="内容区实际视觉形式2"
                    />
                    <Checkbox
                      labelTextStyle={styles.labelRow}
                      labelAlign="top"
                      labelPosition="left"
                      defaultValue
                      label="内容区实际视觉形式3"
                    />
                  </Space>
                </View>
                <View style={styles.btnGroupWrapper}>
                  <Button
                    style={styles.btn}
                    fill={Fill.outline}
                    onPress={() => setLabel02(undefined)}
                  >
                    重置
                  </Button>
                  <View style={styles.space} />
                  <Button
                    style={styles.btn}
                    onPress={() => {
                      setLabel02('这是标签值');
                      item02Ref.current?.close();
                    }}
                  >
                    确定
                  </Button>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称2" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容2</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称3" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容3</Text>
                </View>
              </Filter.Item>
              {/* 筛选 */}
              <Filter.Item
                placeholder=""
                icon={(active: boolean) => (
                  <IconXASpecification1
                    size={16}
                    fillColor={active ? defaultColor : '#222222'}
                  />
                )}
              >
                <View style={styles.filterContent}>
                  <Text>这是筛选内容区</Text>
                </View>
              </Filter.Item>
            </ScrollView>
          </Filter>
        </Card>

        <Card>
          <Text style={styles.text}>展开菜单-等分布局 </Text>
          <Filter style={styles.filterWrapper}>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollWrapper}
            >
              <Filter.Item
                style={styles.item}
                placeholder="标签名称1"
                itemLabel={'标签名称1'}
                ref={item01Ref}
              >
                <View style={styles.panel3}>
                  <Title style={styles.title}>标题标题1</Title>
                  <OptionGroup
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 4,
                      paddingRight: 4,
                    }}
                    options={options}
                    value={value1}
                    onChange={(v) => {
                      setValue1(v as number);
                    }}
                    optionStyle={styles.optionStyle}
                    numberOfSingleLines={3}
                  />
                  <Title style={styles.title}>标题标题2</Title>
                  <OptionGroup
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 4,
                      paddingRight: 4,
                    }}
                    options={options}
                    value={value2}
                    onChange={(v) => {
                      setValue2(v as number);
                    }}
                    optionStyle={styles.optionStyle}
                    numberOfSingleLines={3}
                  />
                </View>
                <View style={styles.btnGroupWrapper}>
                  <Button
                    style={styles.btn}
                    fill={Fill.outline}
                    onPress={() => setLabel01(undefined)}
                  >
                    重置
                  </Button>
                  <View style={styles.space} />
                  <Button
                    style={styles.btn}
                    onPress={() => {
                      setLabel01('这是标签值');
                      item01Ref.current?.close();
                    }}
                  >
                    确定
                  </Button>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称2" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容2</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称3" style={styles.item}>
                <View style={styles.panel300}>
                  <Text>这是内容3</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称4">
                <View style={styles.panel300}>
                  <Text>这是内容4</Text>
                </View>
              </Filter.Item>
            </ScrollView>
          </Filter>

          <Filter style={styles.filterWrapper}>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollWrapper}
            >
              <Filter.Item
                style={styles.item}
                placeholder="标签名称"
                itemLabel={'标签名称'}
                ref={item01Ref}
              >
                <View style={styles.panel200}>
                  <Text>这是内容1</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称" style={styles.item}>
                <View style={styles.panel200}>
                  <Text>这是内容2</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称" style={styles.item}>
                <View style={styles.panel300}>
                  <Text>这是内容3</Text>
                </View>
              </Filter.Item>
              <Filter.Item placeholder="标签名称">
                <View style={styles.panel200}>
                  <Text>这是内容4</Text>
                </View>
              </Filter.Item>
            </ScrollView>
          </Filter>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default FilterScreen;
