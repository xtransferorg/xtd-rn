import React from 'react';
import { Text } from 'react-native';
import { Space, Uploader, UploadFileTypes } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const FileTypes = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>仅支持图片上传</Text>
        <Uploader
          title="图片文件"
          uploadFileType={[UploadFileTypes.Image]}
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          description="仅支持图片格式文件"
          onChange={(files: any) => {
            console.log('图片文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>仅支持PDF上传</Text>
        <Uploader
          title="PDF文件"
          uploadFileType={[UploadFileTypes.Pdf]}
          attachmentType="image"
          maxCount={2}
          useContainerWidth
          description="仅支持PDF格式文件"
          onChange={(files: any) => {
            console.log('PDF文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>混合文件类型</Text>
        <Uploader
          title="混合文件"
          uploadFileType={[UploadFileTypes.Image, UploadFileTypes.Pdf]}
          attachmentType="image"
          maxCount={5}
          useContainerWidth
          description="支持图片和PDF格式文件"
          onChange={(files: any) => {
            console.log('混合文件变化:', files);
          }}
        />
      </Card>
    </Space>
  );
};

export default FileTypes;
