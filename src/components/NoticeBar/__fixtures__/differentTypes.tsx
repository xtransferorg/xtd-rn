import React from 'react';
import { NoticeBar } from '@xrnjs/ui';
import Card from '_global/Card';

const DifferentTypes = () => {
  return (
    <Card title="不同类型">
      {NoticeBar.remind({ text: '传达辅助信息的提示' })}
      {NoticeBar.warn({ text: '传达警惕类提示信息' })}
      {NoticeBar.fail({ text: '传达错误类的提示信息' })}
      {NoticeBar.success({ text: '传达积极类的提示信息' })}
    </Card>
  );
};

export default DifferentTypes;
