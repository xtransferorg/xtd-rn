import React, { useState } from 'react';
import { Button, FloatingLayer, Space } from '@xrnjs/ui';
import { View, Text } from 'react-native';
import styles from './style';
import Card from '_global/Card';

const BasicUsageScreen = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <Space>
      <Card title="基础浮层">
        <FloatingLayer
          visible={visible1}
          onPressOverlay={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          onConfirm={() => setVisible1(false)}
        >
          <View style={styles.animationContainer}>
            <Text style={styles.animationText}>这是一个基础的浮层</Text>
            <Button onPress={() => setVisible1(false)}>关闭</Button>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible1(true)}>打开基础浮层</Button>
      </Card>

      <Card title="带标题的浮层">
        <FloatingLayer
          title="浮层标题"
          visible={visible2}
          onPressOverlay={() => setVisible2(false)}
          showCancelButton
          onCancel={() => setVisible2(false)}
          onConfirm={() => setVisible2(false)}
        >
          <View style={styles.animationContainer}>
            <Text style={styles.animationText}>这是一个带标题的浮层</Text>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible2(true)}>打开带标题浮层</Button>
      </Card>

      <Card title="带描述的浮层">
        <FloatingLayer
          title="浮层标题"
          description="这是浮层的描述信息，可以提供更多的上下文"
          visible={visible3}
          onPressOverlay={() => setVisible3(false)}
          showCancelButton
          showConfirmButton
          onCancel={() => setVisible3(false)}
          onConfirm={() => setVisible3(false)}
        >
          <View style={styles.animationContainer}>
            <Text style={styles.animationText}>带描述信息的浮层内容</Text>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible3(true)}>打开带描述浮层</Button>
      </Card>

      <Card title="自定义动画时长">
        <FloatingLayer
          title="快速动画"
          visible={visible4}
          duration={100}
          onPressOverlay={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
          onConfirm={() => setVisible4(false)}
          showCancelButton
        >
          <View style={styles.animationContainer}>
            <Text style={styles.animationText}>这个浮层使用了快速动画</Text>
          </View>
        </FloatingLayer>
        <Button onPress={() => setVisible4(true)}>快速动画浮层</Button>
      </Card>
    </Space>
  );
};

export default BasicUsageScreen;
