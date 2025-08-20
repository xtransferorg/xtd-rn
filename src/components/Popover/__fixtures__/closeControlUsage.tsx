import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Popover, Button, Space, PopoverInstance } from '@xrnjs/ui';
import { IconMACancellation1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const CloseControlUsage: React.FC = () => {
  const manualPopoverRef = useRef<PopoverInstance>(null);

  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const closeManualPopover = () => {
    manualPopoverRef.current?.hide();
  };

  const showManualPopover = () => {
    manualPopoverRef.current?.show();
  };

  return (
    <Card title="关闭控制">
      <View style={styles.section}>
        <Text style={styles.description}>
          可以控制点击遮罩层、点击内容区域是否关闭气泡，也支持手动控制
        </Text>
        <Space>
          <Popover
            closeOnClickOverlay={false}
            content={<Popover.Text text="点击遮罩层不会关闭" />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>点击遮罩不关闭</Button>
          </Popover>

          <Popover
            closeOnClickPopover={false}
            actions={[{ text: '选项一' }, { text: '选项二' }]}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>点击内容不关闭</Button>
          </Popover>

          <Popover
            closeOnClickOverlay={false}
            closeOnClickPopover={false}
            content={[
              <Popover.Item key="manual" value="manual">
                <View style={styles.wrapper}>
                  <Text style={{ color: '#fff' }}>只能手动关闭</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={closeManualPopover}
                  >
                    <IconMACancellation1 size={14} fillColor="#fff" />
                  </TouchableOpacity>
                </View>
              </Popover.Item>,
            ]}
            ref={manualPopoverRef}
            statusBarTranslucent={false}
          >
            <Button>手动控制</Button>
          </Popover>

          <Button onPress={showManualPopover}>外部控制显示</Button>
        </Space>
      </View>
    </Card>
  );
};

export default CloseControlUsage;
