/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Collapse, Space, Button } from '@xrnjs/ui';
import { IconMANewpersonnel1 } from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

function toggleElement(array: string[], element: string) {
  if (array.includes(element)) {
    return array.filter((item) => item !== element);
  } else {
    return [...array, element];
  }
}

const CollapseScreen = () => {
  const [activeKey, setActiveKey] = React.useState();
  const [keyArr, setKeyArr] = React.useState<string[]>(['1']);
  return (
    <ScrollView>
      <Space>
        <Button onPress={() => setActiveKey('2')}>打开2</Button>
        <Card title="基础用法:手风琴折叠面板">
          <Collapse
            accordion
            key="2"
            defaultActiveKey={'1'}
            activeKey={activeKey}
            onChange={(key) => {
              if (typeof key === 'string') {
                console.log(key);
                setActiveKey(key);
              }
            }}
          >
            <Collapse.Item
              icon={<IconMANewpersonnel1 size={16} />}
              title="标题 1 自定义icon"
              description="这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是..."
              name="1"
              hideArrow
            >
              <Text>Hello 1 content</Text>
            </Collapse.Item>
            <Collapse.Item
              icon
              title="标题 2 禁用 使用内置icon"
              description="这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是一段炫酷的描述这是..."
              name="2"
              disabled
            >
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              icon
              headerStyle={{ borderBottomWidth: 0 }}
              title="标题 3 无分割 隐藏“展开”文本"
              name="3"
              hideArrowTip
            >
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
            {/* headerStyle */}
            <Collapse.Item title="标题 4 不带icon" name="4">
              <Text>Hello 4 content</Text>
            </Collapse.Item>
            <Collapse.Item
              title="标题 5"
              name="5"
              expandArrowTip="强提醒展开"
              collapseArrowTip="强提醒收起"
            >
              <Text>Hello 5 content</Text>
            </Collapse.Item>
            <Collapse.Item headerStyle={{ flexDirection: 'column' }} name="6">
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Card>

        <Card title="基础用法:非手风琴折叠面板">
          <Button onPress={() => setKeyArr(toggleElement(keyArr, '2'))}>
            切换2
          </Button>
          <Collapse
            key="1"
            activeKey={keyArr}
            onChange={(key) => {
              if (key && typeof key === 'object') {
                console.log(key);
                setKeyArr(key);
              }
            }}
          >
            <Collapse.Item title="标题 1 自定义箭头" name="1" hideArrow>
              <Text>Hello 1 content</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2">
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              headerStyle={{ borderBottomWidth: 0 }}
              title="标题 3 无分割"
              name="3"
            >
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
            {/* headerStyle */}
            <Collapse.Item title="标题 4" name="4">
              <Text>Hello 4 content</Text>
            </Collapse.Item>
          </Collapse>
        </Card>

        <Card title="基础用法:手风琴折叠面板">
          <Collapse accordion>
            <Collapse.Item title="标题 1" name="1">
              <Text>Hello 1 content</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2">
              <Text>Hello 2 content</Text>
            </Collapse.Item>
          </Collapse>
        </Card>

        <Card title="自定义">
          <Collapse>
            <Collapse.Item
              title={<Text style={{ color: '#FF7A00' }}>自定义标题颜色</Text>}
              name="1"
            >
              <Text>Hello 自定义颜色</Text>
            </Collapse.Item>
            <Collapse.Item
              title={
                <>
                  <IconMANewpersonnel1 size={16} />
                  <Text style={{ color: 'red', paddingLeft: 6 }}>
                    自定义标题+icon
                  </Text>
                </>
              }
              titleStyle={styles.customTitleStyle}
              name="2"
            >
              <Text>自定义标题+icon</Text>
            </Collapse.Item>
            <Collapse.Item
              noBorder
              arrowPlaceDown={true}
              headerStyle={{ flexDirection: 'column' }}
              name="3"
              collapseArrowTip="强提醒收起"
              expandArrowTip="强提醒展开"
              permanentNode={
                <View
                  style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                  }}
                >
                  <Text>自定义常驻节点内容向上展开</Text>
                </View>
              }
            >
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              headerStyle={{ flexDirection: 'column' }}
              name="4"
              permanentNode={
                <View
                  style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                  }}
                >
                  <Text>自定义常驻节点内容向下展开</Text>
                </View>
              }
            >
              <View>
                <Text style={styles.text}>内容编辑区域</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Card>

        <Card title="禁用状态">
          <Collapse>
            <Collapse.Item title="标题 1" name="1" disabled>
              <Text>Hello 1 content</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2" disabled>
              <Text>Hello 2 content</Text>
            </Collapse.Item>
          </Collapse>
        </Card>

        <Card title="默认展开">
          <Collapse defaultActiveKey={['1']}>
            <Collapse.Item title="标题 1" name="1">
              <Text>Hello 1 content</Text>
            </Collapse.Item>
            <Collapse.Item title="标题 2" name="2">
              <Text>Hello 2 content</Text>
            </Collapse.Item>
          </Collapse>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CollapseScreen;
