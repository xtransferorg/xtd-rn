import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Checkbox, OptionGroup, Options, Radio } from '@xrnjs/ui';
import styles from './style';
import Card from '_global/Card';
import PopopFilter, { FilterItem } from './popup-filter';

const mockFilterList = [
  {
    value: 'filter',
    label: '筛选',
    multiple: true,
    tagType: 'checkbox',
    tags: [
      { value: 'filter-1', label: '筛选1' },
      { value: 'filter-2', label: '筛选2' },
      { value: 'filter-3', label: '筛选3' },
      { value: 'filter-4', label: '筛选4' },
      { value: 'filter-5', label: '筛选5' },
    ],
  },
  {
    value: 'follow',
    label: '关注',
    multiple: true,
    tagType: 'optionsGroup',
    tags: [
      { value: 'follow-1', label: '关注1' },
      { value: 'follow-2', label: '关注2' },
      { value: 'follow-3', label: '关注3' },
      { value: 'follow-4', label: '关注4' },
      { value: 'follow-5', label: '关注5' },
    ],
  },
  {
    value: 'recommend',
    label: '推荐',
    tagType: 'radio',
    tags: [
      { value: 'recommend-1', label: '推荐1' },
      { value: 'recommend-2', label: '推荐2' },
      { value: 'recommend-3', label: '推荐3' },
      { value: 'recommend-4', label: '推荐4' },
      { value: 'recommend-5', label: '推荐5' },
    ],
  },
  {
    value: 'found',
    label: '发现',
    tagType: 'tag',
    multiple: true,
    tags: [
      {
        label: '标签1',
        value: 'tag1',
        children: [
          { value: 'found-1', label: '发现1' },
          { value: 'found-2', label: '发现2' },
        ],
      },
      {
        label: '标签2',
        value: 'tag2',
        children: [
          { value: 'found-3', label: '发现3' },
          { value: 'found-4', label: '发现4' },
          { value: 'found-5', label: '发现5' },
        ],
      },
    ],
  },
  {
    value: 'hotSearch',
    label: '热搜',
    tagType: 'checkbox',
    tags: [
      { value: 'hotSearch-1', label: '热搜1' },
      { value: 'hotSearch-2', label: '热搜2' },
      { value: 'hotSearch-3', label: '热搜3' },
      { value: 'hotSearch-4', label: '热搜4' },
      { value: 'hotSearch-5', label: '热搜5' },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    tagType: 'checkbox',
    tags: [
      { value: 'shanghai-1', label: '上海1' },
      { value: 'shanghai-2', label: '上海2' },
      { value: 'shanghai-3', label: '上海3' },
      { value: 'shanghai-4', label: '上海4' },
      { value: 'shanghai-5', label: '上海5' },
    ],
  },
];

const UsePopupFilter = () => {
  const [itemLabel, setItemLabel] = useState<{
    [key: string]: string | string[] | undefined;
  }>();

  const onCheckboxChange = (val: string | string[], curFilter: string) => {
    setItemLabel({ ...itemLabel, [curFilter]: val });
  };
  const popupBody = (filter: FilterItem, curFilter: string) => {
    const checkboxNode = (
      <View style={styles.popupContent}>
        <Checkbox.Group
          gap={0}
          value={itemLabel?.[curFilter] || []}
          onChange={(val) => onCheckboxChange(val, curFilter)}
          multiple={filter?.multiple || false}
          checkboxComponentStyle={styles.checkboxComponentStyle}
          options={(filter?.tags || []).map((i) => ({
            ...i,
            labelPosition: 'left',
          }))}
        />
      </View>
    );

    const optionsGroupNode = (
      <View style={styles.popupContent}>
        <Options
          columns={3}
          value={itemLabel?.[curFilter] || []}
          onChange={(val) => onCheckboxChange(val, curFilter)}
          multiple={filter?.multiple || false}
          options={filter?.tags || []}
        />
      </View>
    );

    const radioNode = (
      <View style={styles.popupContent}>
        <Radio
          gap={0}
          value={itemLabel?.[curFilter] || []}
          onChange={(val) => onCheckboxChange(val, curFilter)}
          multiple={filter?.multiple || false}
          checkboxComponentStyle={styles.checkboxComponentStyle}
          options={(filter?.tags || []).map((i) => ({
            ...i,
            labelPosition: 'left',
          }))}
        />
      </View>
    );

    const tagNode = (
      <View style={styles.popupContent}>
        {filter.tags?.map((i, j) => (
          <View style={styles.groupItem} key={`tag-group-${j}`}>
            <Text style={styles.groupTitle}>{i.label}</Text>
            <OptionGroup
              options={i.children || []}
              value={itemLabel?.[curFilter] || []}
              onChange={(val) => onCheckboxChange(val, curFilter)}
              multiple={filter?.multiple || false}
              optionStyle={styles.optionStyle}
            />
          </View>
        ))}
      </View>
    );

    let retNode = checkboxNode;
    switch (filter.tagType) {
      case 'checkbox':
        retNode = checkboxNode;
        break;
      case 'optionsGroup':
        retNode = optionsGroupNode;
        break;
      case 'radio':
        retNode = radioNode;
        break;
      case 'tag':
        retNode = tagNode;
        break;
      default:
        retNode = checkboxNode;
        break;
    }
    return retNode;
  };

  return (
    <Card>
      <Text style={styles.text}>等分布局: 带筛选，可多选，可横向滚动</Text>
      <PopopFilter
        itemLabel={itemLabel}
        filterList={mockFilterList}
        popupBody={popupBody}
        onChange={onCheckboxChange}
        onReset={(curFilter) =>
          setItemLabel({ ...itemLabel, [curFilter]: undefined })
        }
      />
    </Card>
  );
};

export default UsePopupFilter;
