import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FileViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const Thumbnails = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';
  const pdfUrl =
    'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf';

  return (
    <ScrollView>
      <Space>
        <Card title="图片缩略图">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              ImageThumbnail 组件用于显示图片缩略图
            </Text>
            <View style={styles.thumbnailRow}>
              <Space>
                <FileViewer.ImageThumbnail source={imageUrl} size={108} />
                <Text style={styles.fileLabel}>108px (默认)</Text>
              </Space>
              <Space>
                <FileViewer.ImageThumbnail source={imageUrl} size={140} />
                <Text style={styles.fileLabel}>140px</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="PDF 缩略图">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              PdfThumbnail 组件用于显示 PDF 文件图标，支持点击预览
            </Text>
            <View style={styles.thumbnailRow}>
              <Space>
                <FileViewer.PdfThumbnail
                  source={{ uri: pdfUrl }}
                  size={108}
                  onPreview={(source) => console.log('Preview 108px:', source)}
                />
                <Text style={styles.fileLabel}>108px (默认)</Text>
              </Space>
              <Space>
                <FileViewer.PdfThumbnail
                  source={{ uri: pdfUrl }}
                  size={140}
                  onPreview={(source) => console.log('Preview 140px:', source)}
                />
                <Text style={styles.fileLabel}>140px</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="混合缩略图">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              图片和 PDF 缩略图的混合使用
            </Text>
            <View style={styles.thumbnailRow}>
              <Space>
                <FileViewer.ImageThumbnail source={imageUrl} />
                <Text style={styles.fileLabel}>图片</Text>
              </Space>
              <Space>
                <FileViewer.PdfThumbnail
                  source={{ uri: pdfUrl }}
                  onPreview={(source) => console.log('Mixed preview:', source)}
                />
                <Text style={styles.fileLabel}>PDF</Text>
              </Space>
              <Space>
                <FileViewer.ImageThumbnail source={imageUrl} />
                <Text style={styles.fileLabel}>图片</Text>
              </Space>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Thumbnails;
