import React, { FC, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Mask, Button } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

interface MaskScreenProps {}

const MaskScreen: FC<MaskScreenProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);

  return (
    <ScrollView>
      <Card title="基本用法">
        <Button onPress={() => setVisible(true)}>
          显示背景蒙层(包含状态栏)
        </Button>
        <Mask
          visible={visible}
          onBackdropPress={() => setVisible(false)}
          statusBarTranslucent
        />

        <Button onPress={() => setVisible2(true)}>嵌入内容</Button>
        <Mask visible={visible2} onBackdropPress={() => setVisible2(false)}>
          <View style={styles.block} />
        </Mask>

        <Button onPress={() => setVisible3(true)}>显示浅色背景蒙层</Button>
        <Mask
          visible={visible3}
          backdropOpacity={0.3}
          onBackdropPress={() => setVisible3(false)}
        />

        <Button onPress={() => setVisible4(true)}>显示白色背景蒙层</Button>
        <Mask
          visible={visible4}
          onBackdropPress={() => setVisible4(false)}
          backdropStyle={styles.bgWhite}
        />
      </Card>
    </ScrollView>
  );
};

export default MaskScreen;
