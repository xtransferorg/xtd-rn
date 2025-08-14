/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

import { Dropdown, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const itemOptions = [
  { label: '全部商品', value: null, badge: true },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map((v) => ({
    label: `商品分类${v}`,
    value: v,
    badge: v,
  })),
];

const itemOptions2 = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4].map((v) => ({
    label: `商品分类${v}`,
    value: v,
  })),
];

const itemOptions3 = [
  { label: '全部商品', value: null, children: [] },
  ...[1, 2, 3, 4].map((v) => ({
    label: `分类_${v}`,
    value: `${v}`,
    children: [6, 7, 8].map((vv) => ({
      label: `分类_${v}_${vv}`,
      value: `${v}_${vv}`,
      children: [9, 10, 11].map((vvv) => ({
        label: `分类_${v}_${vv}_${vvv}`,
        value: `${v}_${vv}_${vvv}`,
      })),
    })),
  })),
];

const itemOptions4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map(
  (v) => ({
    label: `商品分类${v}`,
    value: v,
    badge: v,
  })
);

const BasicDropdown: React.FC = () => {
  const [values, setValues] = useState({
    v1: itemOptions[0]!.value,
    v2: itemOptions[3]!.value,
    v3: itemOptions[2]!.value,
    v4: itemOptions[4]!.value,
  });

  return (
    <ScrollView scrollsToTop={false} style={{ backgroundColor: '#f5f5f5' }}>
      <Space>
        <Card>
          <Text>暂无数据</Text>
          <Dropdown>
            <Dropdown.Item
              options={[]}
              placeholder="请选择"
              titleTextStyle={{
                color: '#098',
              }}
            />
          </Dropdown>
        </Card>

        <Card>
          <Text>自定义布局 左右对齐</Text>
          <Dropdown
            style={{ justifyContent: 'space-between', paddingHorizontal: 12 }}
          >
            <Dropdown.Item
              search
              options={itemOptions}
              value={values.v1}
              onChange={(v, d) => {
                console.log(d);
                setValues((s) => ({
                  ...s,
                  v1: v as number,
                }));
              }}
              titleStyle={{
                flex: 0,
              }}
            />
            <Dropdown.Item
              options={itemOptions}
              defaultValue={itemOptions[2]!.value}
              titleStyle={{
                flex: 0,
              }}
            />
          </Dropdown>
        </Card>

        <Card>
          <Text>禁用下拉框</Text>
          <Dropdown divider={false}>
            <Dropdown.Item
              disabled
              options={itemOptions}
              value={values.v1}
              onChange={(v) => {
                setValues((s) => ({
                  ...s,
                  v1: v as number,
                }));
              }}
            />
            <Dropdown.Item
              options={itemOptions}
              value={itemOptions[2]!.value}
            />
          </Dropdown>
        </Card>

        <Card>
          <Text>下拉选项加载中、自定义高亮颜色</Text>
          <Dropdown direction="up" activeColor="#f30">
            <Dropdown.Item
              loading
              options={itemOptions}
              value={values.v3}
              onChange={(v) => {
                setValues((s) => ({
                  ...s,
                  v3: v as number,
                }));
              }}
            />
            <Dropdown.Item
              options={itemOptions2}
              value={values.v4}
              onChange={(v) => {
                setValues((s) => ({
                  ...s,
                  v4: v as number,
                }));
              }}
            />
          </Dropdown>
        </Card>

        <Card>
          <Text>自定义高亮颜色、有角标与无角标</Text>
          <Dropdown direction="up" activeColor="#f30">
            <Dropdown.Item
              options={itemOptions}
              value={values.v3}
              onChange={(v) => {
                setValues((s) => ({
                  ...s,
                  v3: v as number,
                }));
              }}
            />
            <Dropdown.Item
              options={itemOptions2}
              value={values.v4}
              onChange={(v) => {
                setValues((s) => ({
                  ...s,
                  v4: v as number,
                }));
              }}
            />
          </Dropdown>
        </Card>

        <Card>
          <Text>树形结构选项、有无搜索</Text>
          <Dropdown>
            <Dropdown.Item
              search
              options={itemOptions3}
              defaultValue={null}
              onChange={(v, d) => {
                console.log(v);
                console.log(d);
              }}
            />
            <Dropdown.Item options={itemOptions3} defaultValue={null} />
          </Dropdown>
        </Card>

        <Card>
          <Text>选中后可以取消</Text>
          <Dropdown>
            <Dropdown.Item
              placeholder="商品类目"
              options={itemOptions4}
              onChange={(v, d) => {
                console.log(v);
                console.log(d);
              }}
              cancellable
            />
          </Dropdown>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicDropdown;
