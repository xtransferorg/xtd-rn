import React from 'react';
import { ScrollView } from 'react-native';
import { Popup, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const PopupScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <Popup.Header
            title="标题"
            onCancel={() => {
              console.log('标题:onClose');
            }}
          />
        </Card>

        <Card>
          <Popup.Header
            title="纯标题"
            showCancelButton={false}
            showConfirmButton={false}
          />
        </Card>

        <Card>
          <Popup.Header title="纯标题" showConfirmButton={false} />
        </Card>

        <Card>
          <Popup.Header
            title="左右拓展左右拓展左右拓展左右拓展左右拓展左右拓展"
            description="描述"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default PopupScreen;
