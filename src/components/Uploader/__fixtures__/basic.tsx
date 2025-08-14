import React, { useEffect, useState, useRef } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import {
  Button,
  Space,
  Stepper,
  Uploader,
  UploaderRef,
  UploadFileTypes,
  UploadWays,
} from '@xrnjs/ui';
import Card from '_global/Card';
import styles, { CredentialsWidthFullScreen } from './style';
import DisabledDemo from './disabeld';
import CommonFileDemo from './commonFileDemo';
import { IconXFrontside1, IconMARobot1 } from '../../../icons/index';
import ErrorDemo from './error';

const { UploaderBody } = Uploader;

const defaultValue = [
  {
    uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    status: 'done',
  },
] as any;

const defaultControlledValue = [
  {
    uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    status: 'isUploading',
  },
] as any;
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

      <Text
        style={{
          position: 'absolute',
          bottom: 20,
          textAlign: 'center',
          width: '100%',
          fontWeight: 'bold',
        }}
      >
        {imageMap[type].title}
      </Text>
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

const UploaderScreen = () => {
  const [controlledFiles, setControlledFiles] = useState(
    defaultControlledValue
  );
  useEffect(() => {
    setTimeout(() => {
      const requestFiles = controlledFiles.map((file: any) => {
        if (file.status === 'isUploading') {
          return {
            ...file,
            status: 'done',
          };
        }
        return file;
      });
      setControlledFiles(requestFiles);
    }, 5000);
  }, []);

  const ref = useRef<UploaderRef>(null);
  const ref2 = useRef<UploaderRef>(null);
  const [spacing, setSpacing] = useState(35);
  const containerSpacing = 10 * 2 + spacing * 2; // 10：card的左右padding  spacing: 为自定义左右padding
  return (
    <ScrollView>
      <Space>
        <CommonFileDemo />
        <DisabledDemo />
        <ErrorDemo />
        <Card>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>间距：</Text>
            <Stepper value={spacing} onChange={(v) => setSpacing(v || 0)} />
          </View>
          <View style={{ paddingHorizontal: spacing }}>
            <Uploader
              required
              title={
                '新增containerSpacing处理布局显示不全问题，主要解决多个UploaderBody的情况，单个UploaderBody可直接启用useContainerWidth'
              }
              attachmentType="credentials"
              description={
                '这是一个描述信息 请提供采购合同，加盖双方公章或合同章的鲜章；仅支持JPG、JPEG、PNG三种格式，单个文件小于10MB。'
              }
            >
              <UploaderBody
                attachmentType="credentials"
                uploadFileType={[UploadFileTypes.Image]}
                disabled={false}
                maxCount={1}
                onChange={(file) => {
                  console.log('screen', JSON.stringify(file));
                }}
                tip={<CustomeTip tip="Front side" />}
                tipIcon={<IconXFrontside1 size={40} />}
                containerSpacing={containerSpacing}
              />
              <UploaderBody
                attachmentType="credentials"
                uploadFileType={[UploadFileTypes.Image]}
                disabled={false}
                maxCount={1}
                onChange={(file) => {
                  console.log('screen', JSON.stringify(file));
                }}
                tip={<CustomeTip tip="Back side" />}
                containerSpacing={containerSpacing}
              />
            </Uploader>
          </View>
        </Card>
        <Card>
          <Uploader
            ref={ref}
            uploadFileType={[UploadFileTypes.Image]}
            // required
            title={`新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式 新增ref形式`}
            showIcon
            onShowDemo={() => {
              console.log('screen', '点击示例的回调');
            }}
            attachmentType="image"
            defaultValue={defaultValue}
            description="这是一个描述信息， 可配置"
            maxCount={5}
            useContainerWidth
            onChange={(file: any) => {
              console.log('onChange', file);
            }}
            disabled
          />
          <Button onPress={() => ref?.current?.upload()}>上传</Button>
          <Button onPress={() => ref?.current?.choose(UploadWays.Image)}>
            自定义上传(UploadWays.Image)
          </Button>
          <Button onPress={() => ref?.current?.remove(0)}>
            删除第一张图片
          </Button>
        </Card>
        <Card>
          <Uploader
            ref={ref2}
            uploadFileType={[UploadFileTypes.Image]}
            required
            title="新增自定义上传操作（配合ref使用拦截进行自定义操作）"
            showIcon
            attachmentType="image"
            defaultValue={defaultValue}
            description="这是一个描述信息， 可配置"
            maxCount={5}
            useContainerWidth
            onUpload={() => {
              console.log('do what you want~ ');
              ref2.current?.choose(UploadWays.Image); // 直接选中图片
            }}
          />
        </Card>
        <Card>
          <Uploader
            showIcon
            onShowDemo={() => {
              console.log('screen', '点击示例的回调');
            }}
            title={
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <IconMARobot1 size={26} style={{ flexShrink: 0 }} />
                <Text style={{ paddingLeft: 4, color: 'red', flexShrink: 1 }}>
                  证件上传最新 证件上传最新 证件上传最新 证件上传最新
                  证件上传最新
                </Text>
              </View>
            }
            attachmentType="credentials"
            description={
              '这是一个描述信息 请提供采购合同，加盖双方公章或合同章的鲜章；仅支持JPG、JPEG、PNG三种格式，单个文件小于10MB。'
            }
          >
            <UploaderBody
              attachmentType="credentials"
              uploadFileType={[UploadFileTypes.Image]}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
              tip={<CustomeTip tip="Front side" />}
              tipIcon={<IconXFrontside1 size={40} />}
            />
            <UploaderBody
              attachmentType="credentials"
              uploadFileType={[UploadFileTypes.Image]}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
              tip={<CustomeTip tip="Back side" />}
            />
          </Uploader>
        </Card>
        <Card>
          <Uploader
            required
            title="证件上传自定义内容宽高contentStyle"
            attachmentType="credentials"
            description={
              '这是一个描述信息 请提供采购合同，加盖双方公章或合同章的鲜章；仅支持JPG、JPEG、PNG三种格式，单个文件小于10MB。'
            }
          >
            <UploaderBody
              attachmentType="credentials"
              uploadFileType={[UploadFileTypes.Image]}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
              contentStyle={{
                width: CredentialsWidthFullScreen,
                height: 200,
              }}
              tip={<CustomeTip tip="Enterprise certificate" />}
            />
          </Uploader>
        </Card>
        <Card>
          <Uploader
            uploadFileType={[UploadFileTypes.Image]}
            title="新增选填图片上传"
            attachmentType="image"
            defaultValue={defaultValue}
            description="这是一个描述信息， 可配置"
            tip="上传图片"
            maxCount={5}
            onClickIcon={() => {
              console.log('screen', '点击icon的回调');
            }}
            onChange={(file: any) => {
              console.log('screen', file);
            }}
            onPreviewFile={(uri: any) => {
              // 跳转到PDF预览页面
              console.log('screen', uri);
            }}
            useContainerWidth
          />
        </Card>
        <Card>
          <Uploader
            uploadFileType={[UploadFileTypes.Image]}
            required
            title="普通图片上传"
            showIcon
            attachmentType="image"
            defaultValue={defaultValue}
            description="这是一个描述信息， 可配置"
            tip="上传图片"
            maxCount={5}
            onClickIcon={() => {
              console.log('screen', '点击icon的回调');
            }}
            onShowDemo={() => {
              console.log('screen', '点击示例的回调');
            }}
            onChange={(file: any) => {
              console.log('screen', file);
            }}
            onPreviewFile={(uri: any) => {
              // 跳转到PDF预览页面
              console.log('screen', uri);
            }}
            useContainerWidth
          />
        </Card>

        <Card>
          <Uploader
            required
            title="普通图片上传(受控)"
            showIcon
            attachmentType="image"
            value={controlledFiles}
            description="这是一个描述信息， 可配置"
            maxCount={5}
            onClickIcon={() => {
              Alert.alert('点击icon的回调');
            }}
            onShowDemo={() => {
              Alert.alert('点击示例的回调');
            }}
            onChange={(file) => {
              // if (file.length < controlledFiles.length) return;
              setControlledFiles(
                file.map((item, index) => ({
                  ...item,
                  hideDeleteIcon: index % 2, //隐藏删除按钮
                }))
              );
              console.log('screen', file);
            }}
          />
        </Card>
        <Card>
          <Uploader
            required
            title="证件上传"
            attachmentType="credentials"
            description={'这是一个描述信息'}
          >
            <UploaderBody
              attachmentType="credentials"
              renderUploaderBtn={<CustomUploaderBtn type="front" />}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
            />
            <UploaderBody
              attachmentType="credentials"
              renderUploaderBtn={<CustomUploaderBtn type="back" />}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
            />
          </Uploader>
        </Card>
        <Card>
          <Uploader
            required
            title="证件上传"
            attachmentType="credentials"
            description={'这是一个描述信息'}
          >
            <UploaderBody
              attachmentType="credentials"
              uploadFileType={[UploadFileTypes.Image]}
              renderUploaderBtn={<CustomUploaderBtn type="credentials" />}
              disabled={false}
              maxCount={1}
              onChange={(file) => {
                console.log('screen', JSON.stringify(file));
              }}
            />
          </Uploader>
        </Card>
        <Card>
          <Uploader
            required
            title="文件上传（支持PDF）"
            onChange={(file) => {
              console.log('screen', JSON.stringify(file));
            }}
            onPreviewFile={(uri) => {
              // 跳转到PDF预览页面
              console.log('screen', uri);
            }}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};
export default UploaderScreen;
