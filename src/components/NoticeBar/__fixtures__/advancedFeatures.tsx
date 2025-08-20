import React, { useRef } from 'react';
import { NoticeBar, Button, Fill, Space } from '@xrnjs/ui';
import { Text, Platform } from 'react-native';
import { NoticeBarInstance } from '../interface';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures = () => {
  const noticeBarRef = useRef<NoticeBarInstance>(null);

  const handleReset = () => {
    noticeBarRef.current?.reset();
  };

  return (
    <Space>
      <Card style={styles.section} title="带标题">
        <NoticeBar
          leftIcon="warn"
          title="重要通知"
          text="这是一个带有标题的通知栏"
        />
      </Card>

      <Card style={styles.section} title="自定义内容">
        <NoticeBar
          leftIcon="remind"
          wrapable
          title="警告"
          text={
            <Text style={styles.customText}>
              {'自定义内容样式的通知栏 '}
              <Button
                fill={Fill.link}
                style={{
                  paddingLeft: 8,
                  transform: [
                    {
                      translateY: Platform.select({
                        ios: 3,
                        android: 5,
                        default: 0,
                      }),
                    },
                  ],
                }}
              >
                查看更多
              </Button>
            </Text>
          }
        />
      </Card>

      <Card style={styles.section} title="实例方法">
        <NoticeBar
          ref={noticeBarRef}
          leftIcon
          scrollable
          text="可以通过实例方法重置的滚动通知栏"
          speed={60}
        />
        <Button style={styles.resetButton} onPress={handleReset}>
          重置滚动
        </Button>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
