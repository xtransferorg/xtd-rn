import React from 'react';
import { Text, Alert } from 'react-native';
import { ImageInfo, Space, Uploader } from '@xrnjs/ui';
import Card from '_global/Card';
import { UploadListTypes } from '../enum';
import styles from './style';

const AdvancedFeatures = () => {
  const handleBeforeUpload = (newFiles: ImageInfo[]) => {
    return new Promise<boolean>((resolve) => {
      Alert.alert(
        '确认上传',
        `即将上传 ${newFiles.length} 个文件，是否继续？`,
        [
          { text: '取消', onPress: () => resolve(false) },
          { text: '确认', onPress: () => resolve(true) },
        ]
      );
    });
  };

  const handleDoUpload = (files: any[]) => {
    return new Promise((resolve, reject) => {
      console.log('开始上传文件:', files);

      // 模拟上传过程
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve({ success: true, urls: files.map((f) => f.uri) });
        } else {
          reject(new Error('上传失败'));
        }
      }, 2000);
    });
  };

  const handleUploadSuccess = (
    newFiles: any[],
    allFiles: any[],
    response: any
  ) => {
    console.log('上传成功:', { newFiles, allFiles, response });
    Alert.alert('上传成功', `成功上传 ${newFiles.length} 个文件`);
  };

  const handleUploadError = (files: ImageInfo[], error: any) => {
    console.log('上传失败:', { files, error });
    return new Promise<boolean>((resolve) => {
      Alert.alert('上传失败', '文件上传失败，是否重试？', [
        { text: '取消', onPress: () => resolve(false) },
        { text: '重试', onPress: () => resolve(true) },
      ]);
    });
  };

  const handleRemove = () => {
    return new Promise<boolean>((resolve) => {
      Alert.alert('确认删除', '确定要删除这个文件吗？', [
        { text: '取消', onPress: () => resolve(false) },
        { text: '删除', onPress: () => resolve(true) },
      ]);
    });
  };

  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>完整上传流程</Text>
        <Uploader
          title="完整上传示例"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          description="包含上传前确认、实际上传、成功/失败处理的完整流程"
          beforeUpload={handleBeforeUpload}
          doUpload={handleDoUpload}
          onSuccess={handleUploadSuccess}
          onError={handleUploadError}
          onRemove={handleRemove}
          onChange={(files: any) => {
            console.log('完整流程文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>文件大小限制</Text>
        <Uploader
          title="大小限制上传"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          maxSize={5 * 1024 * 1024} // 5MB
          minSize={1024} // 1KB
          maxSizeErrorTip="文件大小不能超过5MB"
          minSizeErrorTip="文件大小不能小于1KB"
          description="限制文件大小在1KB-5MB之间"
          onChange={(files: any) => {
            console.log('大小限制文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>文本列表样式</Text>
        <Uploader
          title="文本列表上传"
          attachmentType="image"
          maxCount={5}
          useContainerWidth
          listType={UploadListTypes.Text}
          tip="点击上传文件"
          subTip="支持多种格式"
          description="使用文本列表样式显示上传文件"
          onChange={(files: any) => {
            console.log('文本列表文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>图片质量控制</Text>
        <Uploader
          title="图片质量设置"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          imgQuality={0.8}
          description="设置图片压缩质量为0.8，平衡文件大小和图片质量"
          onChange={(files: any) => {
            console.log('质量控制文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>预览和下载</Text>
        <Uploader
          title="预览下载功能"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          listType={UploadListTypes.Text}
          description="支持文件预览和下载功能"
          onPreviewFile={(uri: string) => {
            console.log('预览文件:', uri);
            Alert.alert('预览', `预览文件: ${uri}`);
          }}
          onDownload={(file: any) => {
            console.log('下载文件:', file);
            Alert.alert('下载', `下载文件: ${file.fileName || file.uri}`);
          }}
          onChange={(files: any) => {
            console.log('预览下载文件变化:', files);
          }}
        />
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
