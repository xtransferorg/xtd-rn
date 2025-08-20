import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Popup, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const HeaderExamples = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.cardTitle}>基础 Header</Text>
          <Popup
            visible={visible1}
            position="bottom"
            round
            onPressOverlay={() => setVisible1(false)}
          >
            <Popup.Header
              title="基础标题"
              onCancel={() => setVisible1(false)}
              onConfirm={() => {
                console.log('确认操作');
                setVisible1(false);
              }}
            />
            <View style={styles.largeContentContainer}>
              <Text style={styles.text}>这是带有基础 Header 的弹出层内容</Text>
            </View>
          </Popup>
          <Button onPress={() => setVisible1(true)}>基础 Header</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>仅显示标题</Text>
          <Popup
            visible={visible2}
            position="bottom"
            round
            onPressOverlay={() => setVisible2(false)}
          >
            <Popup.Header
              title="纯标题"
              showCancelButton={false}
              showConfirmButton={false}
            />
            <View style={styles.largeContentContainer}>
              <Text style={styles.text}>这是仅显示标题的 Header</Text>
            </View>
          </Popup>
          <Button onPress={() => setVisible2(true)}>仅显示标题</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>带描述的 Header</Text>
          <Popup
            visible={visible3}
            position="bottom"
            round
            onPressOverlay={() => setVisible3(false)}
          >
            <Popup.Header
              title="详细信息"
              description="这是一个描述信息，用于说明弹出层的用途"
              onCancel={() => setVisible3(false)}
              showConfirmButton={false}
            />
            <View style={styles.largeContentContainer}>
              <Text style={styles.text}>这是带有描述信息的 Header</Text>
            </View>
          </Popup>
          <Button onPress={() => setVisible3(true)}>带描述的 Header</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>自定义样式 Header</Text>
          <Popup
            visible={visible4}
            position="bottom"
            round
            onPressOverlay={() => setVisible4(false)}
          >
            <Popup.Header
              title={<Text style={styles.customTitle}>自定义标题样式</Text>}
              headerStyle={styles.customHeaderWrapper}
              confirmButtonText="保存"
              onCancel={() => setVisible4(false)}
              onConfirm={() => {
                console.log('保存操作');
                setVisible4(false);
              }}
            />
            <View style={styles.largeContentContainer}>
              <Text style={styles.text}>这是自定义样式的 Header</Text>
            </View>
          </Popup>
          <Button onPress={() => setVisible4(true)}>自定义样式 Header</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default HeaderExamples;
