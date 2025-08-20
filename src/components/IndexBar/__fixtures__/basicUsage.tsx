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

const onDisabledPress = (v: IndexBarBaseData) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const BasicUsage = () => {
  // 单选示例
  const singleRef = useRef<IndexBarRef>(null);
  const [singleVisible, setSingleVisible] = useState(false);
  const [singleValue, setSingleValue] = useState<IndexBarValue>();

  // 多选示例
  const multipleRef = useRef<IndexBarRef>(null);
  const [multipleVisible, setMultipleVisible] = useState(false);
  const [multipleValue, setMultipleValue] = useState<IndexBarValue>([]);

  const SingleExample = useMemo(() => {
    return (
      <IndexBar
        visible={singleVisible}
        headerProps={{
          title: '选择省份/城市',
          showCancelButton: true,
          onCancel: () => setSingleVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setSingleVisible(false)}
        onClosed={() => setSingleVisible(false)}
        groups={formatLocationData}
        value={singleValue}
        ref={singleRef}
        onChange={(item) => {
          setSingleValue(item);
          setSingleVisible(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [singleVisible, singleValue]);

  const MultipleExample = useMemo(() => {
    return (
      <IndexBar
        visible={multipleVisible}
        headerProps={{
          title: '选择省份/城市',
          showCancelButton: true,
          onCancel: () => setMultipleVisible(false),
          showConfirmButton: true,
          onConfirm: () => setMultipleVisible(false),
        }}
        onPressOverlay={() => setMultipleVisible(false)}
        onClosed={() => setMultipleVisible(false)}
        groups={formatLocationData}
        mode="multiple"
        max={5}
        onChange={setMultipleValue}
        value={multipleValue}
        ref={multipleRef}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setMultipleValue([]);
                multipleRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setMultipleVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [multipleVisible, multipleValue]);

  return (
    <Space>
      <Card title="单选模式">
        {SingleExample}
        <Button onPress={() => setSingleVisible(true)}>
          单选城市（选中即关闭）
        </Button>
        {singleValue && (
          <Button fill={Fill.weak} disabled>
            已选择: {singleValue}
          </Button>
        )}
      </Card>

      <Card title="多选模式">
        {MultipleExample}
        <Button onPress={() => setMultipleVisible(true)}>
          多选城市（最多5个）
        </Button>
        {Array.isArray(multipleValue) && multipleValue.length > 0 && (
          <Button fill={Fill.weak} disabled>
            已选择 {multipleValue.length} 个城市
          </Button>
        )}
      </Card>
    </Space>
  );
};

export default BasicUsage;
