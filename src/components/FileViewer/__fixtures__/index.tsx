import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import PdfPreview from './pdfPreview';
import MixedFiles from './mixedFiles';
import Thumbnails from './thumbnails';

const FileViewerScreen = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <PdfPreview />
        <MixedFiles />
        <Thumbnails />
      </Space>
    </ScrollView>
  );
};

export default FileViewerScreen;
