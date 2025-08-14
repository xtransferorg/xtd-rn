import React, { useState } from 'react';
import {
  Button,
  FloatingLayer,
  Space,
  List,
  Fill,
  Rate,
  Title,
  Input,
} from '@xrnjs/ui';
import styles from './style';
import Card from '_global/Card';
import { View, Text, Dimensions } from 'react-native';
import {
  IconXHappy1,
  IconXEasy1,
  IconXAwkward1,
  IconXAngry8,
  IconXVangry6,
} from '../../../icons/index';

const getIcon = (score: number) => {
  const iconSize = 120;
  let icon = <IconXHappy1 size={iconSize} />;

  switch (score) {
    case 1:
      icon = <IconXVangry6 size={iconSize} />;
      break;
    case 2:
    case 3:
      icon = <IconXAngry8 size={iconSize} />;
      break;
    case 4:
    case 5:
      icon = <IconXAwkward1 size={iconSize} />;
      break;
    case 6:
      icon = <IconXEasy1 size={iconSize} />;
      break;
    case 7:
      icon = <IconXHappy1 size={iconSize} />;
      break;
    default:
      break;
  }

  return icon;
};
const NewFloatingLayerScreen = () => {
  const [newVisible2, setNewVisible2] = useState(false);
  const [newVisible3, setNewVisible3] = useState(false);
  const [newVisible4, setNewVisible4] = useState(false);
  const [superposition, setSuperposition] = useState(false);
  const [rateV, setRateV] = useState(0);
  const onListItem = (type: number) => {
    switch (type) {
      case 2:
        setSuperposition(true);
        break;
      case 4:
        setSuperposition(false);
        break;
      case 3:
        setNewVisible3(false);
        break;
    }
  };

  const numberCharacter = [];

  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }
  const { width: screenWidth } = Dimensions.get('window');
  const starWidth = (screenWidth - 32) / 7;
  return (
    <Space>
      <Card title="顶部额外配置-新增（ESC）">
        <FloatingLayer
          title="标题名称"
          topExtra={<View style={styles.topExtra}>{getIcon(rateV)}</View>}
          style={styles.overShow} // 超出部分显示
          visible={newVisible4}
          showCancelButton
          showConfirmButton={false}
          onPressOverlay={() => {
            console.log('onPressOverlay~');
            setNewVisible4(false);
          }}
          onPressTextButton={() => setNewVisible4(false)}
          onConfirm={() => setNewVisible4(false)}
          onCancel={() => {
            console.log('onCancel~');
            setNewVisible4(false);
          }}
          onClose={() => {
            // useNative开启 处理android的返回关闭时候改变状态
            console.log('onClose~');
            setNewVisible4(false);
          }}
          onClosed={() => {
            console.log('onClosed~ ');
          }}
          useNative
          disableKeyboardManager
          headerStyle={styles.headerStyle}
          cancelBtnStyle={styles.cancelBtnStyle}
          titleStyle={styles.titleStyle}
          confirmBtnStyle={styles.confirmBtnStyle}
          contentStyle={styles.contentStyle}
          splitLine={false} // 即使内容多了滚动也不显示
          footer={
            <Button
              fill={Fill.solid}
              style={styles.newBtn}
              onPress={() => setNewVisible4(false)}
            >
              提交
            </Button>
          }
        >
          <View style={styles.rate}>
            <Title style={styles.rateTitle}>
              您认为完成结汇的难易程度如何？
            </Title>
            <Rate
              count={7}
              character={numberCharacter}
              background
              single
              value={rateV}
              onChange={(v) => setRateV(v)}
              size={{ width: starWidth }}
            />
            <View style={styles.rateDescription}>
              <Text style={styles.rateDescriptionText}>很困难</Text>
              <Text style={styles.rateDescriptionText}>非常简单</Text>
            </View>
            <Input.TextArea
              placeholder="还有什么建议想和我们说"
              style={styles.rateInput}
            />
          </View>
        </FloatingLayer>
        <Button onPress={() => setNewVisible4(true)}>
          CES 新增顶部额外配置
        </Button>
      </Card>
      <Card title="二级叠层">
        <FloatingLayer
          title="标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称"
          description="标题名称标题名称标题名称标题名称标题名称"
          visible={newVisible2}
          showCancelButton
          showConfirmButton={false}
          onPressOverlay={() => setNewVisible2(false)}
          onPressTextButton={() => setNewVisible2(false)}
          onConfirm={() => setNewVisible2(false)}
          onCancel={() => setNewVisible2(false)}
          useNative
          onClose={() => {
            // useNative开启 处理android的返回关闭时候改变状态
            console.log('onClose~');
            setNewVisible2(false);
          }}
          headerStyle={styles.headerStyle}
          cancelBtnStyle={styles.cancelBtnStyle}
          titleStyle={styles.titleStyle}
          confirmBtnStyle={styles.confirmBtnStyle}
          contentStyle={styles.contentStyle}
          splitLine={false} // 手动设置不显示底部操作区域分割线
          footer={
            <Button
              fill={Fill.solid}
              style={styles.newBtn}
              onPress={() => setNewVisible2(false)}
            >
              确定
            </Button>
          }
        >
          <List style={styles.list}>
            {Array.from({ length: 10 }).map((_, index) => (
              <List.Item
                key={`${index}`}
                rightStyle={styles.rightStyle}
                onPress={() => onListItem(2)}
                arrow={false}
              >{`标题文案${index}`}</List.Item>
            ))}
          </List>
        </FloatingLayer>
        <Button onPress={() => setNewVisible2(true)}>打开二级叠层</Button>
      </Card>

      <Card title="常规改造">
        <FloatingLayer
          title="标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称"
          visible={newVisible3}
          showCancelButton
          showConfirmButton={false}
          onPressOverlay={() => setNewVisible3(false)}
          onPressTextButton={() => setNewVisible3(false)}
          onConfirm={() => setNewVisible3(false)}
          onCancel={() => setNewVisible3(false)}
          useNative
          onClose={() => {
            // useNative开启 处理android的返回关闭时候改变状态
            console.log('onClose~');
            setNewVisible3(false);
          }}
          enableSlidingClose
          headerStyle={styles.headerStyle}
          cancelBtnStyle={styles.cancelBtnStyle}
          titleStyle={styles.titleStyle}
          confirmBtnStyle={styles.confirmBtnStyle}
          contentStyle={styles.contentStyle}
          footer={
            <Button
              fill={Fill.solid}
              style={styles.newBtn}
              onPress={() => setNewVisible3(false)}
            >
              确定
            </Button>
          }
        >
          <List style={styles.list}>
            {Array.from({ length: 10 }).map((_, index) => (
              <List.Item
                key={`${index}`}
                rightStyle={styles.rightStyle}
                onPress={() => onListItem(3)}
                arrow={false}
              >{`标题文案${index}`}</List.Item>
            ))}
          </List>
        </FloatingLayer>
        <Button onPress={() => setNewVisible3(true)}>打开常规改造</Button>
      </Card>

      <FloatingLayer
        title="叠加弹出层"
        visible={superposition}
        showCancelButton
        showConfirmButton={false}
        onPressOverlay={() => setSuperposition(false)}
        onPressTextButton={() => setSuperposition(false)}
        onConfirm={() => setSuperposition(false)}
        onCancel={() => setSuperposition(false)}
        useNative
        onClose={() => {
          // useNative开启 处理android的返回关闭时候改变状态
          console.log('onClose~');
          setSuperposition(false);
        }}
        headerStyle={styles.headerStyle}
        cancelBtnStyle={styles.cancelBtnStyle}
        titleStyle={styles.titleStyle}
        confirmBtnStyle={styles.confirmBtnStyle}
        contentStyle={styles.contentStyle}
        footer={
          <Button
            fill={Fill.solid}
            style={styles.newBtn}
            onPress={() => setSuperposition(false)}
          >
            确定
          </Button>
        }
      >
        <List style={styles.list}>
          {Array.from({ length: 5 }).map((_, index) => (
            <List.Item
              key={`${index}`}
              rightStyle={styles.rightStyle}
              onPress={() => onListItem(4)}
              arrow={false}
            >{`叠加弹出层${index}`}</List.Item>
          ))}
        </List>
      </FloatingLayer>
    </Space>
  );
};

export default NewFloatingLayerScreen;
