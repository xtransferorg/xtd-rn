import React, { useState, useMemo, useRef } from 'react';
import {
  Button,
  Fill,
  IndexBar,
  IndexBarGroupItem,
  IndexBarBaseData,
  Space,
  IndexBarValue,
  IndexBarRef,
  Toast,
} from '@xrnjs/ui';
import { IconXChina1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';
import { cityJson } from './cityList';

type CityType = {
  name: string;
  code: string;
};

// 格式化城市数据
const formatLocationData: IndexBarGroupItem<IndexBarBaseData>[] = [];
const hotLocationData: IndexBarBaseData[] = [];

cityJson.forEach((i: { initial: string; cityNameList: CityType[] }) => {
  const { initial, cityNameList } = i;
  formatLocationData.push({
    value: initial,
    label: initial,
    data: cityNameList.map((p: CityType) => ({
      value: p.code,
      label: p.name,
      prefix: <IconXChina1 size={24} />,
      description: p.name,
    })),
  });

  // 添加热门城市（每个字母取前2个）
  cityNameList.slice(0, 2).forEach((p: CityType) => {
    hotLocationData.push({
      value: p.code,
      label: p.name,
      prefix: <IconXChina1 size={24} />,
      description: p.name,
    });
  });
});

const onDisabledPress = (v: IndexBarBaseData) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const SearchAndHot = () => {
  // 带搜索功能的示例
  const searchRef = useRef<IndexBarRef>(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState<IndexBarValue>();

  // 热门选项示例
  const hotRef = useRef<IndexBarRef>(null);
  const [hotVisible, setHotVisible] = useState(false);
  const [hotValue, setHotValue] = useState<IndexBarValue>([]);

  // 自定义搜索过滤
  const customFilterRef = useRef<IndexBarRef>(null);
  const [customFilterVisible, setCustomFilterVisible] = useState(false);
  const [customFilterValue, setCustomFilterValue] = useState<IndexBarValue>();

  const SearchExample = useMemo(() => {
    return (
      <IndexBar
        visible={searchVisible}
        headerProps={{
          title: '搜索城市',
          showCancelButton: true,
          onCancel: () => setSearchVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setSearchVisible(false)}
        onClosed={() => setSearchVisible(false)}
        groups={formatLocationData}
        value={searchValue}
        ref={searchRef}
        showSearch={true}
        searchProps={{
          placeholder: '请输入城市名称',
        }}
        onChange={(item) => {
          setSearchValue(item);
          setSearchVisible(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [searchVisible, searchValue]);

  const HotExample = useMemo(() => {
    return (
      <IndexBar
        visible={hotVisible}
        headerProps={{
          title: '选择城市',
          showCancelButton: true,
          onCancel: () => setHotVisible(false),
          showConfirmButton: true,
          onConfirm: () => setHotVisible(false),
        }}
        onPressOverlay={() => setHotVisible(false)}
        onClosed={() => setHotVisible(false)}
        groups={formatLocationData}
        hotSectionTitle="热门城市"
        hotGroups={hotLocationData}
        hotRowNumber={3}
        mode="multiple"
        max={8}
        onChange={setHotValue}
        value={hotValue}
        ref={hotRef}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setHotValue([]);
                hotRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setHotVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [hotVisible, hotValue]);

  const CustomFilterExample = useMemo(() => {
    return (
      <IndexBar
        visible={customFilterVisible}
        headerProps={{
          title: '自定义搜索',
          showCancelButton: true,
          onCancel: () => setCustomFilterVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setCustomFilterVisible(false)}
        onClosed={() => setCustomFilterVisible(false)}
        groups={formatLocationData}
        value={customFilterValue}
        ref={customFilterRef}
        showSearch={true}
        searchProps={{
          placeholder: '仅搜索城市编码',
        }}
        filterOption={(inputValue, option) => {
          // 自定义过滤逻辑：只匹配城市编码
          return option.value.toLowerCase().includes(inputValue.toLowerCase());
        }}
        onChange={(item) => {
          setCustomFilterValue(item);
          setCustomFilterVisible(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [customFilterVisible, customFilterValue]);

  return (
    <Space>
      <Card title="搜索功能">
        {SearchExample}
        <Button onPress={() => setSearchVisible(true)}>带搜索的城市选择</Button>
        {searchValue && (
          <Button fill={Fill.weak} disabled>
            搜索选择: {searchValue}
          </Button>
        )}
      </Card>

      <Card title="热门选项">
        {HotExample}
        <Button onPress={() => setHotVisible(true)}>
          热门城市多选（3行显示）
        </Button>
        {Array.isArray(hotValue) && hotValue.length > 0 && (
          <Button fill={Fill.weak} disabled>
            已选择 {hotValue.length} 个热门城市
          </Button>
        )}
      </Card>

      <Card title="自定义搜索过滤">
        {CustomFilterExample}
        <Button onPress={() => setCustomFilterVisible(true)}>
          自定义搜索逻辑（仅匹配编码）
        </Button>
        {customFilterValue && (
          <Button fill={Fill.weak} disabled>
            编码搜索: {customFilterValue}
          </Button>
        )}
      </Card>
    </Space>
  );
};

export default SearchAndHot;
