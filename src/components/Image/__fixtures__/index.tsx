import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, Platform } from 'react-native';
import { Field, Image, Space, Input, Button } from '@xrnjs/ui';
import Card from '_global/Card';
import SizeDemo from './size';

const imagePng =
    'https://static.xtransfer.com/boss/static/wechatqr_6f9e679ec75432d7.png',
  imageGif =
    'https://static.xtransfer.com/boss/static/service_8b547e25417f6a14.gif',
  imageWebp =
    'https://static.xtransfer.com/boss/static/42fb15a7adc94ec38c5a427b138b881a_ab98f89ec68b94bc.webp',
  imageIco =
    'https://static.xtransfer.com/boss/static/favicon_adb49d0503860935.ico',
  imageJpg = 'https://static.xtransfer.com/boss/static/wm_09eaae18d66a7dd0.jpg',
  imageSvg =
    'https://static.xtransfer.com/resources/officialfrontend/svg/a4cff814d2b3ef6f602f.svg';

const normalImgs = [
  { uri: imagePng, des: 'imagePng' },
  { uri: imageGif, des: 'imageGif' },
  { uri: imageWebp, des: 'imageWebp' },
  { uri: imageIco, des: 'imageIco' },
  { uri: imageJpg, des: 'imageJpg' },
];

const pngSoureId = require('./assets/annual_bill_bo.png');
const svgSoureId = require('./assets/close.svg');
const svgPatternSoureId = require('./assets/x-vangry-6.svg');
const svgPattern2SoureId = require('./assets/x-zimbabwe-1.svg');
const svgStyleSoureId = require('./assets/style.svg');

const ImageViewerScreen = () => {
  const [cbArr, setCbArr] = useState<string[]>([]);
  const [imgUri, setImgUri] = useState(imagePng);
  const imageUriValue = useRef(imagePng);
  const [autoPlay, setAutoPlay] = useState(true);
  const isWeb = Platform.OS === 'web'; // 是web文档环境？
  console.log('😄------', pngSoureId);

  return (
    <ScrollView>
      <Space>
        <Card title="本地资源非svg">
          <Image
            style={{ width: '100%', height: 100 }}
            source={pngSoureId}
            resizeMode={'contain'}
            onLoad={(e) => {
              console.log(e);
            }}
            onError={(e) => {
              e.error;
            }}
          />
        </Card>

        <Card title="本地资源svg">
          <Image
            style={{ width: '100%', height: 100 }}
            source={svgSoureId}
            resizeMode={'contain'}
          />
          <Text>包含pattern标签</Text>
          <Image
            style={{ width: '100%', height: 100 }}
            source={svgPatternSoureId}
            resizeMode={'contain'}
            onError={(err) => console.log('包含pattern标签 err==', err)}
          />
          <Image
            style={{ width: '100%', height: 100 }}
            source={svgPattern2SoureId}
            resizeMode={'contain'}
            onError={(err) => console.log('包含pattern标签 err==', err)}
          />

          <Card title="svg中包含style标签">
            <Image
              tintColor={'red'}
              source={svgStyleSoureId}
              style={{ width: '100%', height: 100 }}
            />
          </Card>
        </Card>

        <Card title="线上资源">
          <Field label="线上非SVG" requiredMark>
            {normalImgs.map((item) => (
              <View key={item.uri}>
                <Text>{item.des}</Text>
                <Image
                  source={{ uri: item.uri }}
                  style={{ width: '100%', height: 100 }}
                  resizeMode={'contain'}
                  onError={(error) => {
                    console.error('Image===', error);
                  }}
                />
              </View>
            ))}
          </Field>

          <Field label="线上SVG" requiredMark>
            <Image
              source={{ uri: imageSvg }}
              style={{ width: '100%', height: 100 }}
              resizeMode={'contain'}
              onError={(error) => {
                console.error('Image===', error);
              }}
            />
          </Field>
        </Card>
        <Card title="图片事件回调">
          <Image
            source={imgUri}
            style={{ width: '100%', height: 100 }}
            resizeMode={'contain'}
            onLoadStart={() =>
              !isWeb && setCbArr((res) => [...res, '图标开始加载 onLoadStart~'])
            }
            onLoadEnd={() =>
              !isWeb && setCbArr((res) => [...res, '图标加载完成 onLoadEnd~'])
            }
            onLoad={() =>
              !isWeb && setCbArr((res) => [...res, '图标加载成功 onLoad~'])
            }
            onProgress={() =>
              !isWeb && setCbArr((res) => [...res, '图标加载过程onProgress~'])
            }
            onError={() =>
              !isWeb && setCbArr((res) => [...res, '获取图片出错 onError~'])
            }
            onDisplay={() =>
              !isWeb && setCbArr((res) => [...res, '成功渲染 onDisplay~'])
            }
          />
          <Text>图片地址：</Text>
          <Input.TextArea
            defaultValue={imgUri}
            onChange={(imageUri: string) => (imageUriValue.current = imageUri)}
          />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Button onPress={() => setImgUri(imageUriValue.current)}>
              确认
            </Button>
            <Button
              onPress={() => {
                Image.clearDiskCache();
                Image.clearMemoryCache();
              }}
            >
              清除缓存
            </Button>
            <Button
              onPress={() =>
                Image.getCachePathAsync(imgUri)
                  .then((path) => {
                    setCbArr((res) => [...res, `缓存图片地址：${path}`]);
                  })
                  .catch((err) => {
                    console.log('err==', err);
                  })
              }
            >
              获取图片缓存地址
            </Button>
            <Button onPress={() => setCbArr([])}>清除输出</Button>
          </View>

          <Text>{cbArr.join('\r\n')}</Text>
        </Card>

        <Card title="图片模糊处理">
          <Image
            source={imageJpg}
            style={{ width: 200, height: 200 }}
            resizeMode={'cover'}
            blurRadius={30}
          />
        </Card>
        <Card title="动画播放">
          <Button
            onPress={() => {
              setAutoPlay((res) => !res);
            }}
          >
            {autoPlay ? '暂停' : '播放'}
          </Button>
          <Image
            autoplay={autoPlay}
            source={imageGif}
            style={{ width: 200, height: 200 }}
            resizeMode={'contain'}
          />
        </Card>
        <Card title="自动化测试使用">
          <Image
            accessibilityLabel="this is test image"
            testID="testImage"
            source={imageJpg}
            style={{ width: 100, height: 100 }}
            resizeMode={'cover'}
          />
        </Card>

        <Card title="图片宽高设置">
          <SizeDemo />
        </Card>
      </Space>
    </ScrollView>
  );
};
// import React from 'react';
// import { Text } from 'react-native';

// const ImageViewerScreen = () => (
//   <Text
//     style={{
//       width: '100%',
//       height: 200,
//       textAlign: 'center',
//       textAlignVertical: 'center',
//       backgroundColor: '#Feddee',
//     }}
//   >
//     图片提示，需要添加harmony适配
//   </Text>
// );

export default ImageViewerScreen;
