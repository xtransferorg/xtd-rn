import Card from '_global/Card';
import React from 'react';
import { Uploader } from '@xrnjs/ui';

const ErrorDemo = () => {
  return (
    <Card title={'error状态'}>
      <Uploader status="error" />
      <Uploader listType={Uploader.UploadListTypes.Text} status="error" />
    </Card>
  );
};

export default ErrorDemo;
