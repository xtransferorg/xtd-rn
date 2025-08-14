import React, { useState, useMemo, useRef } from 'react';
import { ScrollView } from 'react-native';
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

// sectionList格式化数据
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

const IndexBarScreen = () => {
  const IndexBarRef1 = useRef<IndexBarRef>(null);
  const [visible1, setVisible1] = useState(false);
  const [IndexBarVal1, setIndexBarVal1] = useState<IndexBarValue>();

  const IndexBarRef2 = useRef<IndexBarRef>(null);
  const [visible2, setVisible2] = useState(false);
  const [IndexBarVal2, setIndexBarVal2] = useState<IndexBarValue>([]);

  const IndexBarRef3 = useRef<IndexBarRef>(null);
  const [visible3, setVisible3] = useState(false);
  const [IndexBarVal3, setIndexBarVal3] = useState<IndexBarValue>();

  const IndexBarRef4 = useRef<IndexBarRef>(null);
  const [visible4, setVisible4] = useState(false);
  const [IndexBarVal4, setIndexBarVal4] = useState<IndexBarValue>([]);

  const IndexBarRef5 = useRef<IndexBarRef>(null);
  const [visible5, setVisible5] = useState(false);
  const [IndexBarVal5, setIndexBarVal5] = useState<IndexBarValue>();

  const IndexBarRef6 = useRef<IndexBarRef>(null);
  const [visible6, setVisible6] = useState(false);
  const [IndexBarVal6, setIndexBarVal6] = useState<IndexBarValue>([]);

  const OneExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible1}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible1(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setVisible1(false)}
        onClosed={() => setVisible1(false)}
        groups={formatLocationData}
        hotSectionTitle="Receiving account"
        hotGroups={hotLocationData}
        value={IndexBarVal1}
        ref={IndexBarRef1}
        onChange={(item) => {
          setIndexBarVal1(item);
          setVisible1(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible1, IndexBarVal1]);

  const TwoExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible2}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible2(false),
          showConfirmButton: true,
          onConfirm: () => setVisible2(false),
        }}
        onPressOverlay={() => setVisible2(false)}
        onClosed={() => setVisible2(false)}
        groups={formatLocationData}
        hotSectionTitle="Receiving account"
        hotGroups={hotLocationData}
        hotRowNumber={3}
        mode="multiple"
        onChange={setIndexBarVal2}
        value={IndexBarVal2}
        ref={IndexBarRef2}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setIndexBarVal2([]);
                IndexBarRef2.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setVisible2(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible2, IndexBarVal2]);

  const ThreeExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible3}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible3(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setVisible3(false)}
        onClosed={() => setVisible3(false)}
        groups={formatLocationData}
        onChange={(item) => {
          setIndexBarVal3(item);
          setVisible3(false);
        }}
        value={IndexBarVal3}
        ref={IndexBarRef3}
        descPlacement="right"
        showSearch={false}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible3, IndexBarVal3]);

  const FourExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible4}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible4(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setVisible4(false)}
        onClosed={() => setVisible4(false)}
        groups={formatLocationData}
        onChange={setIndexBarVal4}
        value={IndexBarVal4}
        ref={IndexBarRef4}
        mode="multiple"
        descPlacement="right"
        showFooterValue={false}
        showSearch={false}
        footerStyle={styles.footerStyle}
        footer={
          <>
            <Button
              style={styles.btn}
              fill={Fill.weak}
              onPress={() => {
                setIndexBarVal4([]);
                IndexBarRef4.current?.reset();
              }}
            >
              重置
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setVisible4(false);
              }}
            >
              确定
            </Button>
          </>
        }
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible4, IndexBarVal4]);

  const FiveExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible5}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible5(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setVisible5(false)}
        onClosed={() => setVisible5(false)}
        groups={formatLocationData}
        hotSectionTitle="Receiving account"
        hotGroups={hotLocationData}
        value={IndexBarVal5}
        ref={IndexBarRef5}
        onChange={(item) => {
          setIndexBarVal5(item);
          setVisible5(false);
        }}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible5, IndexBarVal5]);

  const SixExample = useMemo(() => {
    return (
      <IndexBar
        visible={visible6}
        headerProps={{
          title: 'Select a Province/State',
          showCancelButton: true,
          onCancel: () => setVisible6(false),
          showConfirmButton: false,
        }}
        onPressOverlay={() => setVisible6(false)}
        onClosed={() => setVisible6(false)}
        groups={[]}
        onChange={setIndexBarVal6}
        value={IndexBarVal6}
        ref={IndexBarRef6}
        descPlacement="right"
        showSearch={false}
        onDisabledPress={onDisabledPress}
      />
    );
  }, [visible6, IndexBarVal6]);

  return (
    <ScrollView>
      <Space>
        <Card title="描述在下边，单选列表，可搜索">
          {OneExample}
          <Button onPress={() => setVisible1(true)}>描述在下边，可搜索</Button>
        </Card>

        <Card title="描述在下边，多选列表，热门区域，可搜索">
          {TwoExample}
          <Button onPress={() => setVisible2(true)}>
            描述在下边，多选列表，热门区域，可搜索
          </Button>
        </Card>

        <Card title="描述在右边，单选列表，选中即关闭，不可搜索">
          {ThreeExample}
          <Button onPress={() => setVisible3(true)}>
            描述在右边，单选列表，不可搜索
          </Button>
        </Card>

        <Card title="描述在右边，多选列表，不可搜索，选中项不回显">
          {FourExample}
          <Button onPress={() => setVisible4(true)}>
            描述在右边，多选列表，不可搜索，选中项不回显
          </Button>
        </Card>

        <Card title="描述在下边，单选列表，可搜索">
          {FiveExample}
          <Button onPress={() => setVisible5(true)}>
            描述在下边，单选列表，可搜索
          </Button>
        </Card>

        <Card title="空列表">
          {SixExample}
          <Button onPress={() => setVisible6(true)}>空列表</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default IndexBarScreen;
