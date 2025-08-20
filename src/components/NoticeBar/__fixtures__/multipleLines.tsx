import React from 'react';
import { NoticeBar, Modal, Button, Fill, Space } from '@xrnjs/ui';
import { Text } from 'react-native';
import Card from '_global/Card';
import styles from './style';

const MultipleLines = () => {
  const multipleTexts = [
    { content: '第一条重要通知内容' },
    { content: '第二条重要通知内容' },
    { content: '第三条重要通知内容' },
    { content: '第四条重要通知内容' },
  ];

  const handleViewDetail = () => {
    Modal({
      message: (
        <>
          <Text>1. 第一条重要通知的详细说明</Text>
          <Text>2. 第二条重要通知的详细说明</Text>
          <Text>3. 第三条重要通知的详细说明</Text>
          <Text>4. 第四条重要通知的详细说明</Text>
        </>
      ),
      showCancelButton: false,
      solidButton: true,
      buttonsDirection: 'column',
      confirmButtonText: '我知道了',
    });
  };

  return (
    <Space>
      <Card style={styles.section} title="多行内容">
        <NoticeBar
          leftIcon="remind"
          showType="multipleLines"
          texts={multipleTexts}
          numberOfLines={2}
          showBullets={true}
          showMoreText="查看详情"
          popupTitle="通知详情"
        />
      </Card>

      <Card style={styles.section} title="自定义多行处理">
        <NoticeBar
          leftIcon
          wrapable
          numberOfLines={3}
          text="这是一个很长的通知内容，包含了多个重要信息点。第一个信息点是关于系统更新的通知。第二个信息点是关于功能优化的说明。第三个信息点是关于用户体验改进的介绍。"
          renderOverFlow={(isOverflow) => {
            return isOverflow ? (
              <Button onPress={handleViewDetail} fill={Fill.link}>
                查看详情
              </Button>
            ) : null;
          }}
        />
      </Card>
    </Space>
  );
};

export default MultipleLines;
