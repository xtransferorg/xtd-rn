import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Title, Space } from '@xrnjs/ui';
import { IconMAForward1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const WithExtraDemo = () => {
  return (
    <Space>
      <Card style={styles.cardWrapper}>
        <Title
          description="副标题"
          extra={
            <TouchableOpacity style={[styles.extra]}>
              <Text style={styles.moreText}>更多</Text>
              <IconMAForward1
                fillColor="#CCCCCC"
                size={14}
                style={styles.moreIcon}
              />
            </TouchableOpacity>
          }
        >
          主标题
        </Title>
      </Card>

      <Card>
        <Title
          description="副标题"
          extra={
            <TouchableOpacity style={styles.extra}>
              <Text style={styles.moreText}>更多</Text>
              <IconMAForward1
                fillColor="#CCCCCC"
                size={14}
                style={styles.moreIcon}
              />
            </TouchableOpacity>
          }
          style={styles.marginBottom12}
        >
          主标题
        </Title>
      </Card>
    </Space>
  );
};

export default WithExtraDemo;
