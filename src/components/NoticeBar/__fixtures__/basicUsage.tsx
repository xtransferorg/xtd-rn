import React from 'react';
import { NoticeBar, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  return (
    <Space>
      <Card style={styles.section} title="基础用法">
        <NoticeBar text="这是一个基础的通知栏" />
      </Card>

      <Card style={styles.section} title="带左侧图标">
        <NoticeBar leftIcon text="带有默认图标的通知栏" />
      </Card>

      <Card style={styles.section} title="不同尺寸">
        <NoticeBar text="全局通告栏 (middle)" size="middle" />
        <NoticeBar
          text="模块通告栏 (small)"
          size="small"
          style={styles.marginTop}
        />
      </Card>
    </Space>
  );
};

export default BasicUsage;
