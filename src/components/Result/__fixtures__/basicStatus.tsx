import React from 'react';
import { Result, Card, Space } from '@xrnjs/ui';
import styles from './style';

/**
 * 基本状态
 * 展示 Result 组件的各种状态：成功、失败、警告、处理中、终止、信息
 */
const BasicStatusExample = () => {
  return (
    <Space direction="vertical" gap={16}>
      <Card style={styles.wrapper}>
        <Result
          status="success"
          title="成功"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="error"
          title="失败"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="warning"
          title="警示"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="waiting"
          title="处理中"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="reject"
          title="终止"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Result
          status="info"
          title="信息"
          subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
        />
      </Card>
    </Space>
  );
};

export default BasicStatusExample;
