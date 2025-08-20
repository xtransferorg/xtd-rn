import React from 'react';
import { Text, View, Image } from 'react-native';
import { Space, Uploader, UploadFileTypes } from '@xrnjs/ui';
import { IconXFrontside1, IconMARobot1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const { UploaderBody } = Uploader;

const imageMap = {
  front: {
    title: '身份证正面',
    source: require('./asset/id_front.png'),
  },
  back: {
    title: '身份证反面',
    source: require('./asset/id_back.png'),
  },
  credentials: {
    title: '营业执照',
    source: require('./asset/credential.png'),
  },
} as any;

const CustomUploaderBtn = ({ type }: any) => {
  return (
    <View style={styles.container}>
      <View />
      <Image source={imageMap[type].source} style={styles.idcard_btn} />
      <View style={styles.cameraWrapper}>
        <Image source={require('./asset/camera.png')} style={styles.camera} />
      </View>
      <Text style={styles.absoluteTitle}>{imageMap[type].title}</Text>
    </View>
  );
};

const CustomeTip = ({ tip }: { tip: string }) => {
  return (
    <View style={styles.tipContainer}>
      <Text style={styles.tip}>{tip}</Text>
      <Text style={styles.tipBtn}>Upload</Text>
    </View>
  );
};

const CustomStyles = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>自定义标题样式</Text>
        <Uploader
          showIcon
          title={
            <View style={styles.titleContainer}>
              <IconMARobot1 size={26} style={styles.titleIcon} />
              <Text style={styles.titleText}>自定义标题样式示例</Text>
            </View>
          }
          attachmentType="image"
          maxCount={3}
          useContainerWidth
          description="自定义标题样式的上传组件"
          onChange={(files: any) => {
            console.log('自定义标题文件变化:', files);
          }}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>自定义上传按钮</Text>
        <Uploader
          title="证件上传"
          attachmentType="credentials"
          description="请提供身份证正反面照片"
        >
          <UploaderBody
            attachmentType="credentials"
            uploadFileType={[UploadFileTypes.Image]}
            maxCount={1}
            renderUploaderBtn={<CustomUploaderBtn type="front" />}
            onChange={(files) => {
              console.log('身份证正面:', files);
            }}
          />
          <UploaderBody
            attachmentType="credentials"
            uploadFileType={[UploadFileTypes.Image]}
            maxCount={1}
            renderUploaderBtn={<CustomUploaderBtn type="back" />}
            onChange={(files) => {
              console.log('身份证反面:', files);
            }}
          />
        </Uploader>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>自定义提示信息</Text>
        <Uploader
          title="自定义提示"
          attachmentType="credentials"
          description="自定义上传提示信息和图标"
        >
          <UploaderBody
            attachmentType="credentials"
            uploadFileType={[UploadFileTypes.Image]}
            maxCount={1}
            tip={<CustomeTip tip="Front side" />}
            tipIcon={<IconXFrontside1 size={40} />}
            onChange={(files) => {
              console.log('自定义提示文件:', files);
            }}
          />
        </Uploader>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>自定义内容尺寸</Text>
        <Uploader
          title="自定义尺寸"
          attachmentType="credentials"
          description="自定义上传区域的宽高"
        >
          <UploaderBody
            attachmentType="credentials"
            uploadFileType={[UploadFileTypes.Image]}
            maxCount={1}
            contentStyle={styles.customContentStyle}
            tip={<CustomeTip tip="Enterprise certificate" />}
            onChange={(files) => {
              console.log('自定义尺寸文件:', files);
            }}
          />
        </Uploader>
      </Card>
    </Space>
  );
};

export default CustomStyles;
