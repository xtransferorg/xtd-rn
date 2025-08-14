import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Pdf, { PdfProps, Source } from 'react-native-pdf';
import RNFS from 'react-native-fs';

export type PdfViewerProps = PdfProps;

const PdfViewer: React.FC<PdfViewerProps> = ({ source, ...reset }) => {
  const [realSource, setRealSource] = useState<number | Source>();

  const copyFileIfNeeded = async () => {
    if (!source) {
      return;
    }

    if (source && typeof source === 'object' && source.uri) {
      if (Platform.OS === 'android' && source.uri.startsWith('content://')) {
        const tempPath = `${RNFS.CachesDirectoryPath}/temp_preview.pdf`;
        if (await RNFS.exists(tempPath)) {
          await RNFS.unlink(tempPath);
        }
        await RNFS.copyFile(source.uri, tempPath);
        setRealSource({ uri: tempPath });
      } else if (Platform.OS === 'ios' && source.uri.startsWith('file://')) {
        setRealSource({ uri: decodeURIComponent(source.uri) });
      } else {
        setRealSource(source);
      }
    } else {
      setRealSource(source);
    }
  };

  useEffect(() => {
    copyFileIfNeeded();
  }, [source]);

  if (!realSource) {
    return <></>;
  }

  return <Pdf {...reset} source={realSource} />;
};

export default PdfViewer;
