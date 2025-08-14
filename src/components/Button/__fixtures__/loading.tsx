import React from 'react';
import { Button, Space, Fill, Size } from '@xrnjs/ui';
import Card from '_global/Card';

const ButtonLoadingDemo = () => (
  <Card title="加载状态">
    <Space>
      <Button loading={true} fill={Fill.text}>
        提交
      </Button>
      <Button loading={true} size={Size.mini} block={false}>
        浏览器颜色不可修改，请用手机查看
      </Button>
      <Button loading={true} block={false} size={Size.small}>
        浏览器颜色不可修改，请用手机查看
      </Button>
      <Button loading={true} block={false}>
        浏览器颜色不可修改，请用手机查看
      </Button>
      <Button loading={true} block={false} size={Size.large}>
        浏览器颜色不可修改，请用手机查看
      </Button>
      <Button loading={true} size={Size.mini}>
        提交
      </Button>
      <Button loading={true} fill={Fill.dashed} size={Size.mini}>
        提交
      </Button>
      <Button loading={true} fill={Fill.danger} size={Size.mini}>
        提交
      </Button>
      <Button loading={true} fill={Fill.weak} size={Size.mini}>
        提交
      </Button>
      <Button loading={true}>提交</Button>
      <Button loading={true} fill={Fill.dashed}>
        提交
      </Button>
      <Button loading={true} fill={Fill.danger}>
        提交
      </Button>
      <Button loading={true} fill={Fill.weak}>
        提交
      </Button>
    </Space>
  </Card>
);

export default ButtonLoadingDemo;
