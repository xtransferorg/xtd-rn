import React, { useRef } from 'react';
import { Text } from 'react-native';
import {
  Space,
  Uploader,
  UploaderRef,
  UploadWays,
  Button,
  Size,
} from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const defaultValue = [
  {
    uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    status: 'done',
  },
] as any;

const InteractiveFeatures = () => {
  const uploaderRef = useRef<UploaderRef>(null);
  const customUploaderRef = useRef<UploaderRef>(null);

  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>Ref 控制上传</Text>
        <Uploader
          ref={uploaderRef}
          title="通过 Ref 控制"
          attachmentType="image"
          defaultValue={defaultValue}
          maxCount={5}
          useContainerWidth
          description="可以通过 ref 进行程序化控制"
          onChange={(files: any) => {
            console.log('Ref控制文件变化:', files);
          }}
        />
        <Space direction="horizontal" style={styles.horizontalSpaceContainer}>
          <Button
            size={Size.small}
            onPress={() => uploaderRef?.current?.upload()}
          >
            触发上传
          </Button>
          <Button
            size={Size.small}
            onPress={() => uploaderRef?.current?.choose(UploadWays.Image)}
          >
            选择图片
          </Button>
          <Button
            size={Size.small}
            onPress={() => uploaderRef?.current?.remove(0)}
          >
            删除第一张
          </Button>
        </Space>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>自定义上传操作</Text>
        <Uploader
          ref={customUploaderRef}
          title="自定义上传拦截"
          attachmentType="image"
          defaultValue={defaultValue}
          maxCount={5}
          useContainerWidth
          description="拦截上传操作，执行自定义逻辑"
          onUpload={() => {
            console.log('执行自定义上传逻辑');
            customUploaderRef.current?.choose(UploadWays.Image);
          }}
          onChange={(files: any) => {
            console.log('自定义上传文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>带图标和示例</Text>
        <Uploader
          title="完整功能示例"
          showIcon
          onShowDemo={() => {
            console.log('点击示例按钮');
          }}
          onClickIcon={() => {
            console.log('点击帮助图标');
          }}
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          description="包含帮助图标和示例按钮的上传组件"
          onChange={(files: any) => {
            console.log('完整功能文件变化:', files);
          }}
        />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>禁止删除下载</Text>
        <Uploader
          listType={Uploader.UploadListTypes.Text}
          title={'禁用下载和删除icon'}
          showIcon
          required
          description={'请提供采购合同，加盖双方公章或合同章的鲜章;'}
          subTip={'JPG、JPEG、PNG'}
          value={[
            {
              uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
              fileName: '测试不能下载和删除',
              hideDeleteIcon: true,
              hideDownloadIcon: true,
            },
            {
              uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
              fileName: '测试不能删除',
              hideDeleteIcon: true,
            },
            {
              uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
              fileName: '测试不能下载',
              hideDownloadIcon: true,
            },
          ]}
        />
      </Card>
    </Space>
  );
};

export default InteractiveFeatures;
