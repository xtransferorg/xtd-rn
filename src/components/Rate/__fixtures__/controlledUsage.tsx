import React, { useState } from 'react';
import { Button, Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const ControlledUsage = () => {
  const [value, setValue] = useState(1);

  return (
    <Space>
      <Card title="受控value">
        <Rate value={value} onChange={setValue} />
        <Button style={styles.buttonContainer} onPress={() => setValue(3)}>
          设置为3
        </Button>
      </Card>
    </Space>
  );
};

export default ControlledUsage;
