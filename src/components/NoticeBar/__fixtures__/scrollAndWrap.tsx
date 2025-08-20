import React from 'react';
import { NoticeBar, Button, Fill, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ScrollAndWrap = () => {
  const longText =
    '这是一段很长的文本内容，用来演示通知栏的滚动和换行功能。当文本内容超出容器宽度时，可以选择滚动显示或者换行显示。';

  const handleReplay = () => {
    console.log('滚动重新开始');
  };

  return (
    <Space>
      <Card style={styles.section} title="跑马灯滚动">
        <NoticeBar
          leftIcon
          scrollable
          text={longText}
          speed={80}
          delay={1500}
          onReplay={handleReplay}
        />
      </Card>

      <Card style={styles.section} title="文本换行">
        <NoticeBar leftIcon wrapable text={longText} />
      </Card>

      <Card style={styles.section} title="限制行数">
        <NoticeBar
          leftIcon
          wrapable
          numberOfLines={2}
          text={longText}
          renderOverFlow={(isOverflow) => {
            return isOverflow ? (
              <Button fill={Fill.link} style={styles.viewMoreButton}>
                查看更多
              </Button>
            ) : null;
          }}
        />
      </Card>
    </Space>
  );
};

export default ScrollAndWrap;
