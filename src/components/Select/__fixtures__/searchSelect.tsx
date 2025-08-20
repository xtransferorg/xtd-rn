import React, { useState } from 'react';
import { Text } from 'react-native';
import { Space, Select } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const cities = [
  { label: '北京', value: 'beijing', subLabel: '中国首都' },
  { label: '上海', value: 'shanghai', subLabel: '经济中心' },
  { label: '广州', value: 'guangzhou', subLabel: '南方大城市' },
  { label: '深圳', value: 'shenzhen', subLabel: '科技之城' },
  { label: '杭州', value: 'hangzhou', subLabel: '电商之都' },
  { label: '成都', value: 'chengdu', subLabel: '天府之国' },
  { label: '武汉', value: 'wuhan', subLabel: '九省通衢' },
  { label: '西安', value: 'xian', subLabel: '古都' },
  { label: '南京', value: 'nanjing', subLabel: '六朝古都' },
  { label: '重庆', value: 'chongqing', subLabel: '山城' },
];

const SearchSelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();
  const [searchValue, setSearchValue] = useState('');

  const onChange = (selectedValue: string | string[]) => {
    setValue(selectedValue as string);
    setVisible(false);
  };

  const onSearch = (searchText: string) => {
    setSearchValue(searchText);
    console.log('搜索内容:', searchValue);
  };

  const filterOption = (inputValue: string, option: any) => {
    return (
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.subLabel?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const selectedCity = cities.find((city) => city.value === value);

  return (
    <Card>
      <Space>
        <Text style={styles.title}>搜索功能</Text>

        <Select
          type={Select.Type.radio}
          options={cities}
          title="选择城市"
          value={value}
          visible={visible}
          showSearch
          searchEmptyText="没有找到匹配的城市"
          filterOption={filterOption}
          onPressOverlay={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onChange={onChange}
          onSearch={onSearch}
          searchInputProps={{
            placeholder: '搜索城市名称或描述',
            clearButtonMode: 'while-editing',
          }}
        />

        <Select.SelectInput
          value={selectedCity?.label}
          onPress={() => setVisible(true)}
          placeholder="请选择城市"
          onClear={() => setValue('')}
        />

        {selectedCity && (
          <Text style={styles.selectedInfo}>
            已选择: {selectedCity.label} - {selectedCity.subLabel}
          </Text>
        )}
      </Space>
    </Card>
  );
};

export default SearchSelectExample;
