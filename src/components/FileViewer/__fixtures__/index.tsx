import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Card from '_global/Card';
import { FileViewer, PdfThumbnail } from '@xrnjs/ui';

const FileViewerScreen = () => {
  const pdf =
    'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf';
  const [uri, setUrl] = useState();
  const previewList = [
    {
      uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    },
  ];

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
  return (
    <ScrollView>
      <Card title="pdf和图片混合预览">
        <FileViewer
          type="all"
          sources={combineList}
          onPreview={(source) => {
            console.log('onPreview', source);
          }}
        />
      </Card>
      <Card title="图片预览">
        <FileViewer type="image" horizontal sources={previewList} />
      </Card>

      <Card title="Pdf 预览">
        <PdfThumbnail
          source={{ uri: pdf }}
          onPreview={(source) => setUrl(source as any)}
        />
        <Text>
          使用 PdfThumbnail
          组件显示Pdf图标组件，点击后，onPreview事件会触发，使用下方FileViewer组件预览Pdf文件
        </Text>
        <FileViewer
          type="pdf"
          style={{ width: '100%', height: 400 }}
          source={uri as any}
        />
      </Card>
    </ScrollView>
  );
};

export default FileViewerScreen;
