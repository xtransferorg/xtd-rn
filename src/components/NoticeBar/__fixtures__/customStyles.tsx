import React from 'react';
import { NoticeBar, Space } from '@xrnjs/ui';
import { IconMAMore1, IconMANotice2 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const CustomStyles = () => {
  return (
    <Space>
      <Card style={styles.section} title="自定义背景色">
        <NoticeBar backgroundColor="#FFF6E5" text="自定义背景色的通知栏" />
      </Card>

      <Card style={styles.section} title="自定义圆角">
        <NoticeBar
          backgroundColor="#E6F7FF"
          borderRadius={12}
          text="自定义圆角的通知栏"
        />
      </Card>

      <Card style={styles.section} title="自定义图标">
        <NoticeBar
          leftIcon={
            <IconMAMore1
              size={16}
              fillColor="#FF7A00"
              style={styles.iconStyle}
            />
          }
          backgroundColor="#FFF6E5"
          text="自定义图标的通知栏"
        />
      </Card>

      <Card style={styles.section} title="深色主题">
        <NoticeBar
          leftIcon={
            <IconMANotice2
              size={14}
              fillColor="#fff"
              style={styles.customLeftIcon}
            />
          }
          contentStyle={styles.whiteText}
          borderRadius={8}
          backgroundColor="rgba(34, 34, 34, 0.5)"
          text="深色主题的通知栏"
        />
      </Card>
    </Space>
  );
};

export default CustomStyles;
