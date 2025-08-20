import React from 'react';
import { Result, Card, Space, Button, Fill } from '@xrnjs/ui';
import styles from './style';

/**
 * 带按钮的结果页
 * 展示带有主要按钮、次要按钮和扩展按钮的 Result 组件
 */
const WithButtonsExample = () => {
  return (
    <Space direction="vertical" gap={16}>
      <Card style={styles.wrapper}>
        <Result
          status="success"
          title="成功"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
          primaryText="主要按钮"
          primaryProps={{
            onPress: () => {
              console.log('点击主要按钮');
            },
          }}
          secondaryText="次要按钮"
          secondaryProps={{
            onPress: () => {
              console.log('点击次要按钮');
            },
          }}
          expand={
            <Button
              fill={Fill.link}
              style={styles.expandBtnStyle}
              onPress={() => {
                console.log('点击扩展按钮');
              }}
            >
              扩展按钮
            </Button>
          }
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="error"
          title="失败"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
          primaryText="重试"
          primaryProps={{
            onPress: () => {
              console.log('点击重试');
            },
          }}
          secondaryText="取消"
          secondaryProps={{
            onPress: () => {
              console.log('点击取消');
            },
          }}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="warning"
          title="异常"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
          primaryText="确认"
          primaryProps={{
            onPress: () => {
              console.log('点击确认');
            },
          }}
        />
      </Card>
    </Space>
  );
};

export default WithButtonsExample;
