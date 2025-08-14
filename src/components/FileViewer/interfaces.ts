import { FC } from 'react';
import { PdfProps, Source } from '../PdfViewer';
import { ImageViewerProps } from './ImagePreview/interface';
import ImageThumbnail from './thumbnails/ImageThumbnail';
import PdfThumbnail from './thumbnails/PdfThumbnail';

export interface ConbineSource {
  uri: string;
  type: string;
}

export type PdfPreviewProps = PdfProps & {
  onPreview?: (source: Source | number) => void;
};

export type ConbineType = Omit<
  ImageViewerProps &
    PdfPreviewProps & {
      type: 'all';
      sources: ConbineSource[];
      source?: unknown;
    },
  'imageUrls' | 'source'
> & {
  size?: number; // 控制缩略图的大小
  gap?: number; // 控制缩略图的间距
};

export type FileViewerBaseProps =
  | ({ type: 'image' } & ImageViewerProps)
  | ({ type: 'pdf' } & PdfPreviewProps)
  | ConbineType;

export interface FileViewerProps extends FC<FileViewerBaseProps> {
  PdfThumbnail: typeof PdfThumbnail;
  ImageThumbnail: typeof ImageThumbnail;
}
