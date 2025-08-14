import React, { useState } from 'react';
import { Button, FloatingLayer, Fill, Picker, PickerOption } from '@xrnjs/ui';
import Card from '_global/Card';
import { View } from 'react-native';

const columns: PickerOption[] = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}));

const NewFloatingLayerScreen = () => {
  const [visible, setVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  return (
    <Card title="弹框中操作显示">
      <FloatingLayer
        title="弹框中操作显示"
        visible={newVisible}
        showCancelButton
        showConfirmButton={false}
        onPressOverlay={() => setNewVisible(false)}
        onPressTextButton={() => setNewVisible(false)}
        onConfirm={() => setNewVisible(false)}
        onCancel={() => setNewVisible(false)}
        // useNative
        enableSlidingClose
        footer={
          <Button fill={Fill.solid} onPress={() => setNewVisible(false)}>
            确定
          </Button>
        }
      >
        <View>
          <Picker.Component
            visible={visible}
            {...{ title: '多项选择', columns: columns }}
            onChange={(v) => {
              console.log(v);
            }}
            onPressOverlay={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
            // useNative
          />
          <Button onPress={() => setVisible(true)}>Picker 组件形式</Button>
        </View>
      </FloatingLayer>
      <Button onPress={() => setNewVisible(true)}>弹框中操作显示</Button>
    </Card>
  );
};

export default NewFloatingLayerScreen;
