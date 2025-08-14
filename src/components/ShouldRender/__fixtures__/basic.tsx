import React from 'react';
import { useToggle } from 'ahooks';
import { ScrollView } from 'react-native';
import { Button, Size, ShouldRender, Fill } from '@xrnjs/ui';
import Card from '_global/Card';

const ShouldRenderScreen = () => {
  const [showButton, { toggle }] = useToggle(true);
  return (
    <ScrollView>
      <Card title="基本用法">
        <Button size={Size.small} onPress={toggle}>
          {showButton ? '隐藏按钮' : '显示按钮'}
        </Button>
        <ShouldRender condition={showButton}>
          <Button size={Size.large} fill={Fill.outline}>
            按钮
          </Button>
        </ShouldRender>
      </Card>
    </ScrollView>
  );
};

export default ShouldRenderScreen;
