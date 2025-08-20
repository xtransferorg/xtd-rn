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

const LayoutAndStyle = () => {
  // 描述在右边的示例
  const rightDescRef = useRef<IndexBarRef>(null);
  const [rightDescVisible, setRightDescVisible] = useState(false);
  const [rightDescValue, setRightDescValue] = useState<IndexBarValue>();

  // 无搜索无侧边栏示例
  const noSearchSidebarRef = useRef<IndexBarRef>(null);
  const [noSearchSidebarVisible, setNoSearchSidebarVisible] = useState(false);
  const [noSearchSidebarValue, setNoSearchSidebarValue] =
    useState<IndexBarValue>([]);

  // 带分割线示例
  const withLineRef = useRef<IndexBarRef>(null);
  const [withLineVisible, setWithLineVisible] = useState(false);
  const [withLineValue, setWithLineValue] = useState<IndexBarValue>();

  // 不显示选中值示例
  const noFooterValueRef = useRef<IndexBarRef>(null);
  const [noFooterValueVisible, setNoFooterValueVisible] = useState(false);
  const [noFooterValueValue, setNoFooterValueValue] = useState<IndexBarValue>(
    []
  );

  const RightDescExample = useMemo(() => {
    return (
      <IndexBar
        visible={rightDescVisible}
        headerProps={{
          title: '描述在右边',
          showCancelButton: true,
          onCancel: () => setRightDescVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setRightDescVisible(false)}
        onClosed={() => setRightDescVisible(false)}
        groups={formatLocationData}
        value={rightDescValue}
        ref={rightDescRef}
        descPlacement="right"
        showSearch={false}
        onChange={(item) => {
          setRightDescValue(item);
          setRightDescVisible(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [rightDescVisible, rightDescValue]);

  const NoSearchSidebarExample = useMemo(() => {
    return (
      <IndexBar
        visible={noSearchSidebarVisible}
        headerProps={{
          title: '无搜索无侧边栏',
          showCancelButton: true,
          onCancel: () => setNoSearchSidebarVisible(false),
          showConfirmButton: true,
          onConfirm: () => setNoSearchSidebarVisible(false),
        }}
        onPressOverlay={() => setNoSearchSidebarVisible(false)}
        onClosed={() => setNoSearchSidebarVisible(false)}
        groups={formatLocationData}
        mode="multiple"
        value={noSearchSidebarValue}
        ref={noSearchSidebarRef}
        showSearch={false}
        disableSidebar={true}
        descPlacement="right"
        onChange={setNoSearchSidebarValue}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setNoSearchSidebarValue([]);
                noSearchSidebarRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setNoSearchSidebarVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [noSearchSidebarVisible, noSearchSidebarValue]);

  const WithLineExample = useMemo(() => {
    return (
      <IndexBar
        visible={withLineVisible}
        headerProps={{
          title: '带分割线',
          showCancelButton: true,
          onCancel: () => setWithLineVisible(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setWithLineVisible(false)}
        onClosed={() => setWithLineVisible(false)}
        groups={formatLocationData}
        value={withLineValue}
        ref={withLineRef}
        showLine={true}
        lineStyle={styles.customLine}
        onChange={(item) => {
          setWithLineValue(item);
          setWithLineVisible(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [withLineVisible, withLineValue]);

  const NoFooterValueExample = useMemo(() => {
    return (
      <IndexBar
        visible={noFooterValueVisible}
        headerProps={{
          title: '不显示选中值',
          showCancelButton: true,
          onCancel: () => setNoFooterValueVisible(false),
          showConfirmButton: true,
          onConfirm: () => setNoFooterValueVisible(false),
        }}
        onPressOverlay={() => setNoFooterValueVisible(false)}
        onClosed={() => setNoFooterValueVisible(false)}
        groups={formatLocationData}
        mode="multiple"
        value={noFooterValueValue}
        ref={noFooterValueRef}
        showFooterValue={false}
        descPlacement="right"
        onChange={setNoFooterValueValue}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setNoFooterValueValue([]);
                noFooterValueRef.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setNoFooterValueVisible(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [noFooterValueVisible, noFooterValueValue]);

  return (
    <Space>
      <Card title="描述位置">
        {RightDescExample}
        <Button onPress={() => setRightDescVisible(true)}>
          描述在右边（无搜索）
        </Button>
        {rightDescValue && (
          <Button fill={Fill.weak} disabled>
            右侧描述选择: {rightDescValue}
          </Button>
        )}
      </Card>

      <Card title="禁用功能">
        {NoSearchSidebarExample}
        <Button onPress={() => setNoSearchSidebarVisible(true)}>
          无搜索无侧边栏
        </Button>
        {Array.isArray(noSearchSidebarValue) &&
          noSearchSidebarValue.length > 0 && (
            <Button fill={Fill.weak} disabled>
              已选择 {noSearchSidebarValue.length} 个
            </Button>
          )}
      </Card>

      <Card title="分割线样式">
        {WithLineExample}
        <Button onPress={() => setWithLineVisible(true)}>显示分割线</Button>
        {withLineValue && (
          <Button fill={Fill.weak} disabled>
            带线选择: {withLineValue}
          </Button>
        )}
      </Card>

      <Card title="隐藏选中值">
        {NoFooterValueExample}
        <Button onPress={() => setNoFooterValueVisible(true)}>
          不显示选中值回显
        </Button>
        {Array.isArray(noFooterValueValue) && noFooterValueValue.length > 0 && (
          <Button fill={Fill.weak} disabled>
            隐藏回显，已选 {noFooterValueValue.length} 个
          </Button>
        )}
      </Card>
    </Space>
  );
};

export default LayoutAndStyle;
