import React, { useState } from 'react';
import { Field, Input, Button, Fill, TextType } from '@xrnjs/ui';
import Card from '_global/Card';

const CodeDemo = () => {
  const [hasSent, setHasSent] = useState(false);
  return (
    <Card title="验证码输入">
      <Field label="订单编号">
        <Input
          placeholder="请输入订单编号"
          suffix={
            <Button
              fill={Fill.text}
              textType={TextType.primary}
              onPress={() => {
                if (hasSent) return;
                setHasSent(true);
                setTimeout(() => setHasSent(false), 3000);
              }}
              disabled={hasSent}
            >
              {hasSent ? '请稍等...' : '获取验证码'}
            </Button>
          }
        />
      </Field>
    </Card>
  );
};

export default CodeDemo;
