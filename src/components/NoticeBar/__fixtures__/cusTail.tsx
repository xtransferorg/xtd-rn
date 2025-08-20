import Card from '_global/Card';
import React from 'react';
import { Platform, Text } from 'react-native';
import { NoticeBar, Button, Fill } from '@xrnjs/ui';
import styles from './style';

const CusTail = () => {
  return (
    <Card style={styles.section} title="自定义内容">
      <NoticeBar
        leftIcon="remind"
        wrapable
        title="警告"
        text={
          <Text
            style={{
              fontSize: 14,
              lineHeight: 22,
            }}
          >
            {`全局通告栏 全局通告栏 全局通告栏 全局通告栏 全局通告栏 全局通告栏`}
            <Button
              fill={Fill.link}
              style={{
                paddingLeft: 8,
                transform: [
                  //根据文本实际情况调整
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
  );
};

export default CusTail;
