import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const ArrowDemo = () => {
  return (
    <Card title="箭头配置">
      <Space>
        <Space>
          <Text style={styles.text}>隐藏箭头</Text>
          <Text style={styles.description}>
            通过 hideArrow 属性隐藏展开/收起箭头
          </Text>
          <Collapse>
            <Collapse.Item title="隐藏箭头的面板" name="1" hideArrow>
              <Text style={styles.contentText}>这个面板没有展开/收起箭头</Text>
            </Collapse.Item>
            <Collapse.Item title="正常显示箭头的面板" name="2">
              <Text style={styles.contentText}>这个面板有正常的箭头显示</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>自定义箭头文案</Text>
          <Text style={styles.description}>自定义展开和收起时的提示文案</Text>
          <Collapse>
            <Collapse.Item
              title="自定义文案面板"
              name="1"
              expandArrowTip="点击展开详情"
              collapseArrowTip="点击收起详情"
            >
              <Text style={styles.contentText}>
                这个面板有自定义的箭头提示文案
              </Text>
            </Collapse.Item>
            <Collapse.Item title="隐藏箭头文案面板" name="2" hideArrowTip>
              <Text style={styles.contentText}>这个面板隐藏了箭头提示文案</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>箭头位置配置</Text>
          <Text style={styles.description}>将箭头放置在面板下方</Text>
          <Collapse>
            <Collapse.Item
              title="箭头在下方的面板"
              name="1"
              arrowPlaceDown={true}
              headerStyle={{ flexDirection: 'column' }}
              expandArrowTip="向上展开"
              collapseArrowTip="向上收起"
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>
                  这个面板的箭头在下方，内容向上展开
                </Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default ArrowDemo;
