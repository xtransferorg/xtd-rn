import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FileViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const MixedFiles = () => {
  const combineList = [
    {
      type: 'image',
      uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      type: 'image',
      uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    },
    {
      type: 'pdf',
      uri: 'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf',
    },
  ];

  const imageOnlyList = [
    {
      type: 'image',
      uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      type: 'image',
      uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    },
    {
      type: 'image',
      uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    },
  ];

  const pdfOnlyList = [
    {
      type: 'pdf',
      uri: 'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf',
    },
    {
      type: 'pdf',
      uri: 'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf',
    },
  ];

  return (
    <ScrollView>
      <Space>
        <Card title="图片和 PDF 混合预览">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              支持图片和 PDF 文件混合显示，自动识别文件类型并使用相应的预览组件
            </Text>
            <FileViewer
              type="all"
              sources={combineList}
              onPreview={(source) => {
                console.log('onPreview', source);
              }}
            />
          </View>
        </Card>

        <Card title="多张图片混合">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              多张图片文件的混合显示
            </Text>
            <FileViewer
              type="all"
              sources={imageOnlyList}
              size={100}
              gap={15}
              onPreview={(source) => {
                console.log('onPreview', source);
              }}
            />
          </View>
        </Card>

        <Card title="多个 PDF 文件">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              多个 PDF 文件的混合显示
            </Text>
            <FileViewer
              type="all"
              sources={pdfOnlyList}
              onPreview={(source) => {
                console.log('onPreview', source);
              }}
            />
          </View>
        </Card>

        <Card title="自定义尺寸和间距">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              可以自定义缩略图尺寸和间距
            </Text>
            <Space>
              <Text style={styles.cardTitle}>默认尺寸 (108px, gap: 8px)</Text>
              <FileViewer
                type="all"
                sources={combineList}
                onPreview={(source) => console.log('Small preview:', source)}
              />

              <Text style={styles.cardTitle}>大尺寸 (140px, gap: 20px)</Text>
              <FileViewer
                type="all"
                sources={combineList}
                size={140}
                gap={20}
                onPreview={(source) => console.log('Large preview:', source)}
              />
            </Space>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default MixedFiles;
