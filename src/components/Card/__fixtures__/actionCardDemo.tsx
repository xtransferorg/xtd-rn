import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, Fill, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const ActionCardDemo = () => {
  const handleHeaderPress = () => {
    console.log('Header pressed');
  };

  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="可点击头部"
        extra={
          <TouchableOpacity onPress={() => console.log('Extra pressed')}>
            <Text style={{ color: '#1976d2' }}>更多</Text>
          </TouchableOpacity>
        }
        onPressHeader={handleHeaderPress}
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          点击头部区域可以触发 onPressHeader 回调，右上角有额外的操作区域。
        </Text>
      </Card>

      <Card
        type={Type.AllCard}
        title="带底部按钮"
        footer={
          <Button fill={Fill.solid} onPress={handleButtonPress}>
            确定
          </Button>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这个卡片在底部有一个操作按钮，可以用于确认或其他操作。
        </Text>
      </Card>

      <Card
        type={Type.NestCard}
        title="左侧标识"
        titleLeftExtra={
          <View
            style={{
              width: 4,
              height: 16,
              backgroundColor: '#1976d2',
              marginRight: 8,
            }}
          />
        }
        extra={
          <TouchableOpacity>
            <Text style={{ color: '#666', fontSize: 12 }}>编辑</Text>
          </TouchableOpacity>
        }
        footer={
          <Space direction="horizontal">
            <Button fill={Fill.outline}>取消</Button>
            <Button fill={Fill.solid}>保存</Button>
          </Space>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这个卡片展示了左侧标识、右侧操作和底部多按钮的组合使用。
        </Text>
      </Card>
    </Space>
  );
};

export default ActionCardDemo;
