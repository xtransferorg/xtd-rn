import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Title, Space, TitleFontSize } from '@xrnjs/ui';
import { IconMAForward1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const CustomStyleDemo = () => {
  return (
    <Space>
      <Card>
        <Title
          description="副标题"
          titleFontSize={TitleFontSize.Size18}
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
          自定义样式标题
        </Title>
      </Card>

      <Card style={styles.cardWrapper}>
        <Title style={styles.marginBottom10}>带边距的标题</Title>
      </Card>
    </Space>
  );
};

export default CustomStyleDemo;
