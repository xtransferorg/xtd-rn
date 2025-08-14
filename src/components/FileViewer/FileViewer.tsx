import React from 'react';
import { View, ViewStyle } from 'react-native';
import { PdfProps, PdfViewer } from '../PdfViewer';
import { FileViewerProps } from './interfaces';
import { ImageViewerProps } from './ImagePreview/interface';
import ImagePreview from './ImagePreview';
import PdfThumbnail from './thumbnails/PdfThumbnail';
import ImageThumbnail from './thumbnails/ImageThumbnail';

const FileViewer: FileViewerProps = ({ type = 'all', ...rest }) => {
  const size = 'size' in rest ? rest.size : 108;
  const gap = 'gap' in rest ? rest.gap : 10;

  if (type === 'all' && 'sources' in rest) {
    const { sources, ...props } = rest;
    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      gap,
    };
    return (
      <View style={containerStyle}>
        {sources.map((source, index) => {
          if (source.type === 'image') {
            return (
              <ImagePreview
                key={index}
                {...(props as ImageViewerProps)}
                sources={[{ uri: source.uri }]}
              >
                <ImageThumbnail size={size} source={source.uri} />
              </ImagePreview>
            );
          }
          if (source.type === 'pdf') {
            return (
              <PdfThumbnail
                key={index}
                {...(props as PdfProps)}
                source={source}
                size={size}
              />
            );
          }
          return null;
        })}
      </View>
    );
  }

  if (type === 'image') {
    const children =
      (rest as ImageViewerProps).children ??
      (rest as ImageViewerProps).sources?.map((img, index) => {
        return <ImageThumbnail key={index} size={size} source={img.uri} />;
      });

    return (
      <ImagePreview {...({ ...rest, size, gap } as ImageViewerProps)}>
        {children}
      </ImagePreview>
    );
  }

  if (type === 'pdf') {
    return <PdfViewer {...(rest as PdfProps)} trustAllCerts={false} />;
  }

  return null;
};

FileViewer.PdfThumbnail = PdfThumbnail;
FileViewer.ImageThumbnail = ImageThumbnail;

export default FileViewer;
