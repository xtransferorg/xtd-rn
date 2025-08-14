import Card from '_global/Card';
import React from 'react';
import { Toast, Uploader } from '@xrnjs/ui';

const onDisabledPress = (tip: string) =>
  Toast({
    position: 'middle',
    message: `${tip} 不可操作提示`,
    forbidPress: true,
  });

const DisabledDemo = () => {
  return (
    <Card title={'disabled状态'}>
      <Uploader
        disabled
        tip={'不可点击上传'}
        onDisabledPress={() => {
          onDisabledPress('disabled状态，');
        }}
      />
      <Uploader
        disabled
        listType={Uploader.UploadListTypes.Text}
        tip={'不可点击上传'}
        onDisabledPress={() => {
          onDisabledPress('disabled状态，');
        }}
      />
    </Card>
  );
};

export default DisabledDemo;
