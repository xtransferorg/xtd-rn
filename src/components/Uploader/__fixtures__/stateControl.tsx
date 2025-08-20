import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Space, Uploader, Stepper } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const defaultControlledValue = [
  {
    uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    status: 'isUploading',
  },
] as any;

const StateControl = () => {
  const [controlledFiles, setControlledFiles] = useState(
    defaultControlledValue
  );
  const [spacing, setSpacing] = useState(35);
  const containerSpacing = 10 * 2 + spacing * 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedFiles = controlledFiles.map((file: any) => {
        if (file.status === 'isUploading') {
          return {
            ...file,
            status: 'done',
          };
        }
        return file;
      });
      setControlledFiles(updatedFiles);
    }, 5000);

    return () => clearTimeout(timer);
  }, [controlledFiles]);

  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>受控组件</Text>
        <Uploader
          title="受控文件列表"
          attachmentType="image"
          value={controlledFiles}
          maxCount={5}
          useContainerWidth
          description="文件列表由外部状态控制，5秒后上传状态变为完成"
          onChange={(files: any) => {
            console.log('受控文件变化:', files);
            setControlledFiles(files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>禁用状态</Text>
        <Uploader
          title="禁用上传"
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          disabled
          description="禁用状态下无法进行上传操作"
          onDisabledPress={(files) => {
            console.log('点击了禁用的上传组件:', files);
          }}
          onChange={(files: any) => {
            console.log('禁用状态文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>容器间距调整</Text>
        <View style={styles.spacingContainer}>
          <Text>间距：</Text>
          <Stepper value={spacing} onChange={(v) => setSpacing(v || 0)} />
        </View>
        <View style={[styles.paddingContainer, { paddingHorizontal: spacing }]}>
          <Uploader
            required
            title="动态间距示例"
            attachmentType="credentials"
            description="通过 containerSpacing 处理布局显示问题"
          >
            <Uploader.UploaderBody
              attachmentType="credentials"
              maxCount={1}
              containerSpacing={containerSpacing}
              onChange={(files) => {
                console.log('动态间距文件1:', files);
              }}
            />
            <Uploader.UploaderBody
              attachmentType="credentials"
              maxCount={1}
              containerSpacing={containerSpacing}
              onChange={(files) => {
                console.log('动态间距文件2:', files);
              }}
            />
          </Uploader>
        </View>
      </Card>
    </Space>
  );
};

export default StateControl;
