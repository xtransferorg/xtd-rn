import React from 'react';
import { Text } from 'react-native';
import { Space, Uploader } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const defaultValue = [
  {
    uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    status: 'done',
  },
] as any;

const BasicUsage = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>基础图片上传</Text>
        <Uploader
          title="图片上传"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          onChange={(files: any) => {
            console.log('基础上传文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>带默认值的上传</Text>
        <Uploader
          title="预设图片上传"
          attachmentType="image"
          defaultValue={defaultValue}
          maxCount={5}
          useContainerWidth
          description="支持JPG、PNG格式，单个文件不超过10MB"
          onChange={(files: any) => {
            console.log('预设上传文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>必填上传</Text>
        <Uploader
          required
          title="必填图片上传"
          attachmentType="image"
          maxCount={1}
          useContainerWidth
          onChange={(files: any) => {
            console.log('必填上传文件变化:', files);
          }}
        />
      </Card>
    </Space>
  );
};

export default BasicUsage;
