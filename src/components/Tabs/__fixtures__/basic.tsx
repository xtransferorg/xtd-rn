import { IconMAScreen1 } from '../../../icons/index';
import React, { Fragment, useRef, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Tabs, Space, Badge } from '@xrnjs/ui';
import { TabType } from '@xrnjs/ui';
import { SCREEN_WIDTH } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import SwiperScreen from './swiper';
import ExpandScreen from './expand';
import VerticalScreen from './vertical';

const { TabPane } = Tabs;
const style = { height: 200 };

interface changeTabProps {
  changeTab: (key: string) => void;
}

const TabsScreen = () => {
  const ref = useRef<changeTabProps>(null);
  const [activeKey, setActiveKey] = useState('1');
  const [showLast, setShowLast] = useState(false);
  const doChangeTab = () => {
    ref.current?.changeTab('5');
  };

  const handleChange = (num: string) => {
    setActiveKey(num);
  };

  const items = [
    {
      key: '1',
      tab: 'tab 1',
      text: 'hello1',
    },
    showLast && {
      key: '1-1',
      tab: 'tab 1-1',
      text: 'hello1-1',
    },
    {
      key: '2',
      tab: 'tab 2',
      text: 'hello2',
    },
    {
      key: '3',
      tab: 'tab 3',
      text: 'hello3',
    },
    showLast && {
      key: '4',
      tab: 'tab 4',
      text: 'hello4',
    },
  ];

  return (
    <>
      <VerticalScreen />
      <ScrollView>
        <Space>
          <SwiperScreen />
          <ExpandScreen />

          <Card>
            <Text>
              大标题Tab,长语言展示方式,中文不得超过12个字符，英文不得超过21个字符
            </Text>
            <Tabs
              tabType={TabType.SmallText}
              activeKey={activeKey}
              onChange={handleChange}
              indicatorWidth={140}
            >
              <TabPane
                key="1"
                tab={
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    style={[
                      styles.enTextStyle,
                      activeKey === '1' && styles.activeTextStyle,
                    ]}
                  >
                    Paymentpanmentpaymentpayment
                  </Text>
                }
              >
                <Text>Paymentpanmentpaymentpayment</Text>
              </TabPane>
              <TabPane
                key="2"
                tab={
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    style={[
                      styles.cnTextStyle,
                      activeKey === '2' && styles.activeTextStyle,
                    ]}
                  >
                    标题标题标题标题标题标题标题标题
                  </Text>
                }
              >
                <Text>标题标题标题标题标题标题标题标题</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>动态Tab(APP上验证 PC不准)</Text>
            <Button onPress={() => setShowLast(!showLast)}>动态切换</Button>
            <Tabs activeTextColor="red">
              {items
                .filter((item) => item && item.key)
                .map((item) => {
                  return (
                    item && (
                      <TabPane key={item.key} tab={item.tab}>
                        <Text>{item.text}</Text>
                      </TabPane>
                    )
                  );
                })}
            </Tabs>
          </Card>

          <Card>
            <Text>大标题Tab</Text>

            <Tabs tabType={TabType.LargeTitle} activeTextColor="red">
              <TabPane key="1" tab="第1个">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="第2个">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="第3个">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>自定义Tab</Text>

            <Tabs>
              <TabPane
                key="1"
                tab={
                  <Badge count={1}>
                    <Text>第一个</Text>
                  </Badge>
                }
              >
                <Text>第1个</Text>
              </TabPane>
              <TabPane
                key="2"
                tab={
                  <Badge count={999}>
                    <Text>第二个</Text>
                  </Badge>
                }
              >
                <Text>第2个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>大文字标签（和小文字统一16）</Text>

            <Tabs
              tabType={TabType.LargeText}
              suffix={<IconMAScreen1 fillColor="#222222" size={14} />}
              swipe
            >
              <TabPane key="1" tab="长度自适配-第1个">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="长度自适配-第2个">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="长度自适配-第3个">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>小文字标签</Text>

            <Tabs tabType={TabType.SmallText}>
              <TabPane key="1" tab="第1个">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="第2个">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="第3个">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>等分大文字标签</Text>

            <Tabs
              tabType={TabType.LargeText}
              tabStyle={{
                width: (SCREEN_WIDTH - 40) / 3,
              }}
            >
              <TabPane key="1" tab="标签">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="标签">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="标签">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>等分小文字标签</Text>

            <Tabs
              tabType={TabType.SmallText}
              tabStyle={{
                width: (SCREEN_WIDTH - 40) / 3,
              }}
            >
              <TabPane key="1" tab="标签">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="标签">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="标签">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>标签带数字</Text>

            <Tabs tabType={TabType.SmallText}>
              <TabPane key="1" tab="第1个" badge="100">
                <Text>第1个</Text>
              </TabPane>
              <TabPane key="2" tab="第2个" badge="20">
                <Text>第2个</Text>
              </TabPane>
              <TabPane key="3" tab="第3个" badge="3">
                <Text>第3个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>当标签超出屏幕时，tab支持滑动</Text>

            <Tabs
              tabType={TabType.SmallText}
              suffix={<IconMAScreen1 fillColor="#222222" size={14} />}
            >
              <TabPane key="1" tab="第1个">
                <View style={style}>
                  <Text>第1个</Text>
                </View>
              </TabPane>
              <TabPane key="2" tab="第2个">
                <View style={style}>
                  <Text>第2个</Text>
                </View>
              </TabPane>
              <TabPane key="3" tab="第3个">
                <View style={style}>
                  <Text>第3个</Text>
                </View>
              </TabPane>
              <TabPane key="4" tab="第4个">
                <Text>第4个</Text>
              </TabPane>
              <TabPane key="5" tab="第5个">
                <Text>第5个</Text>
              </TabPane>
              <TabPane key="6" tab="第6个">
                <Text>第6个</Text>
              </TabPane>
              <TabPane key="7" tab="第7个">
                <Text>第7个</Text>
              </TabPane>
              <TabPane key="8" tab="第8个">
                <Text>第8个</Text>
              </TabPane>
              <TabPane key="9" tab="第9个">
                <Text>第9个</Text>
              </TabPane>
            </Tabs>
          </Card>

          <Card>
            <Text>当标签超出屏幕时，tab支持滑动 swipe tab 超出滚动</Text>

            <Button onPress={doChangeTab}>切换tab到第5个</Button>

            <Tabs
              suffix={<IconMAScreen1 fillColor="#222222" size={14} />}
              tabType={TabType.SmallText}
              swipe={true}
              activeKey={activeKey}
              ref={ref}
              onChange={handleChange}
            >
              <TabPane key="ALL" tab="第1个">
                <View style={style}>
                  <Text>第1个</Text>
                </View>
              </TabPane>
              <TabPane key="FIRST" tab="第2个">
                <View style={style}>
                  <Text>第2个</Text>
                </View>
              </TabPane>
              <TabPane key="SECOND" tab="第3个">
                <Text>第3个</Text>
              </TabPane>
              <TabPane key="THIRD" tab="第4个">
                <Text>第4个</Text>
              </TabPane>
              <TabPane key="5" tab="第5个">
                <Text>第5个</Text>
                <Test />
              </TabPane>
              <TabPane key="6" tab="第6个">
                <Text>第6个</Text>
              </TabPane>
              <TabPane key="7" tab="第7个">
                <Text>第7个</Text>
              </TabPane>
              <TabPane key="8" tab="第8个">
                <Text>第8个</Text>
              </TabPane>
              <TabPane key="9" tab="第9个">
                <Text>第9个</Text>
              </TabPane>
            </Tabs>
          </Card>
        </Space>
      </ScrollView>
    </>
  );
};

const Test = () => {
  return (
    <Fragment>
      {Array(10)
        .fill(0)
        .map((_, index) => {
          return <Text key={index}>第5个{index}</Text>;
        })}
    </Fragment>
  );
};

export default TabsScreen;
