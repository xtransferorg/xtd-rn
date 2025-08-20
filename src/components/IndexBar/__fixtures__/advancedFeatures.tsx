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
import { IconXChina1, IconXStar1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';
import { cityJson } from './cityList';

type CityType = {
  name: string;
  code: string;
};

// 格式化城市数据
const formatLocationData: IndexBarGroupItem<IndexBarBaseData>[] = [];
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
});

// 自定义数据示例
const customData: IndexBarGroupItem<IndexBarBaseData>[] = [
  {
    value: 'star',
    label: '⭐ 特色',
    data: [
      {
        value: 'vip1',
        label: 'VIP城市',
        prefix: <IconXStar1 size={24} color="#FFD700" />,
        description: '黄金会员专享',
      },
      {
        value: 'vip2',
        label: '钻石城市',
        prefix: <IconXStar1 size={24} color="#B9F2FF" />,
        description: '钻石会员专享',
      },
    ],
  },
  {
    value: 'hot',
    label: '🔥 热门',
    data: [
      {
        value: 'hot1',
        label: '网红城市',
        prefix: <IconXChina1 size={24} color="#FF6B6B" />,
        description: '年轻人最爱',
      },
      {
        value: 'hot2',
        label: '旅游胜地',
        prefix: <IconXChina1 size={24} color="#4ECDC4" />,
        description: '度假首选',
      },
    ],
  },
];

const onDisabledPress = (v: IndexBarBaseData) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const AdvancedFeatures = () => {
  // 空数据示例
  const emptyRef = useRef<IndexBarRef>(null);
  const [emptyVisible, setEmptyVisible] = useState(false);
  const [emptyValue, setEmptyValue] = useState<IndexBarValue>();

  // 自定义样式示例
  const customStyleRef = useRef<IndexBarRef>(null);
  const [customStyleVisible, setCustomStyleVisible] = useState(false);
  const [customStyleValue, setCustomStyleValue] = useState<IndexBarValue>([]);

  // 自定义空状态示例
  const customEmptyRef = useRef<IndexBarRef>(null);
  const [customEmptyVisible, setCustomEmptyVisible] = useState(false);
  const [customEmptyValue, setCustomEmptyValue] = useState<IndexBarValue>();

  // 底部分割线示例
  const splitLineRef = useRef<IndexBarRef>(null);
  const [splitLineVisible, setSplitLineVisible] = useState(false);
  const [splitLineValue, setSplitLineValue] = useState<IndexBarValue>([]);

  const EmptyExample = useMemo(() => {
    return (
      <IndexBar
        visible={emptyVisible}
        headerProps={{
          title: '空数据状态',
          showCancelButton: true,
          onCancel: () => setEmptyVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setEmptyVisible(false)}
        onClosed={() => setEmptyVisible(false)}
        groups={[]}
        value={emptyValue}
        ref={emptyRef}
        onChange={setEmptyValue}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [emptyVisible, emptyValue]);

  const CustomStyleExample = useMemo(() => {
    return (
      <IndexBar
        visible={customStyleVisible}
        headerProps={{
          title: '自定义样式',
          showCancelButton: true,
          onCancel: () => setCustomStyleVisible(false),
          showConfirmButton: true,
          onConfirm: () => setCustomStyleVisible(false),
        }}
        onPressOverlay={() => setCustomStyleVisible(false)}
        onClosed={() => setCustomStyleVisible(false)}
        groups={customData}
        mode="multiple"
        value={customStyleValue}
        ref={customStyleRef}
        containerStyle={styles.customContainer}
        titleStyle={styles.customTitle}
        descriptionStyle={styles.customDescription}
        sideBarStyle={styles.customSideBar}
        valueStyle={styles.customValueStyle}
        onChange={setCustomStyleValue}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setCustomStyleValue([]);
                customStyleRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setCustomStyleVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [customStyleVisible, customStyleValue]);

  const CustomEmptyExample = useMemo(() => {
    return (
      <IndexBar
        visible={customEmptyVisible}
        headerProps={{
          title: '自定义空状态',
          showCancelButton: true,
          onCancel: () => setCustomEmptyVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setCustomEmptyVisible(false)}
        onClosed={() => setCustomEmptyVisible(false)}
        groups={[]}
        value={customEmptyValue}
        ref={customEmptyRef}
        emptyProps={{
          title: '暂无城市数据',
          description: '请稍后再试或联系客服',
          status: 'empty',
          style: styles.customEmpty,
        }}
        onChange={setCustomEmptyValue}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [customEmptyVisible, customEmptyValue]);

  const SplitLineExample = useMemo(() => {
    return (
      <IndexBar
        visible={splitLineVisible}
        headerProps={{
          title: '底部分割线',
          showCancelButton: true,
          onCancel: () => setSplitLineVisible(false),
          showConfirmButton: true,
          onConfirm: () => setSplitLineVisible(false),
        }}
        onPressOverlay={() => setSplitLineVisible(false)}
        onClosed={() => setSplitLineVisible(false)}
        groups={formatLocationData.slice(0, 3)} // 只显示前3组数据
        mode="multiple"
        value={splitLineValue}
        ref={splitLineRef}
        splitLine={true}
        onChange={setSplitLineValue}
        footerStyle={[styles.footerStyle, styles.splitFooter]}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setSplitLineValue([]);
                splitLineRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setSplitLineVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [splitLineVisible, splitLineValue]);

  return (
    <Space>
      <Card title="空数据状态">
        {EmptyExample}
        <Button onPress={() => setEmptyVisible(true)}>显示空数据状态</Button>
      </Card>

      <Card title="自定义样式">
        {CustomStyleExample}
        <Button onPress={() => setCustomStyleVisible(true)}>
          自定义样式示例
        </Button>
        {Array.isArray(customStyleValue) && customStyleValue.length > 0 && (
          <Button fill={Fill.weak} disabled>
            自定义样式选择 {customStyleValue.length} 个
          </Button>
        )}
      </Card>

      <Card title="自定义空状态">
        {CustomEmptyExample}
        <Button onPress={() => setCustomEmptyVisible(true)}>
          自定义空状态提示
        </Button>
      </Card>

      <Card title="底部分割线">
        {SplitLineExample}
        <Button onPress={() => setSplitLineVisible(true)}>
          底部渐变分割线
        </Button>
        {Array.isArray(splitLineValue) && splitLineValue.length > 0 && (
          <Button fill={Fill.weak} disabled>
            分割线样式选择 {splitLineValue.length} 个
          </Button>
        )}
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
