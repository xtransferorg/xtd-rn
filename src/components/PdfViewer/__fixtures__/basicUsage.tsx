/**
 * title: 基础用法
 * desc: PdfViewer 组件的基本使用方式，支持本地文件和网络文件
 */

import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { PdfViewer, Field, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const BasicUsage: React.FC = () => {
  const [currentSource, setCurrentSource] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 网络 PDF 文件示例
  const loadNetworkPdf = () => {
    setLoading(true);
    const networkSource = {
      uri: 'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf',
      cache: true,
    };
    setCurrentSource(networkSource);
    setLoading(false);
  };

  const handleLoadComplete = (numberOfPages: number, filePath: string) => {
    console.log('PDF 加载完成:', { numberOfPages, filePath });
  };

  const handlePageChanged = (page: number, numberOfPages: number) => {
    console.log('页面变化:', { page, numberOfPages });
  };

  const handleError = (error: any) => {
    console.error('PDF 加载错误:', error);
    Alert.alert('错误', 'PDF 文件加载失败');
  };

  return (
    <Card title="基础用法">
      <Text style={styles.description}>
        PdfViewer 组件支持显示本地文件、网络文件和 Base64 格式的 PDF 文档。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="PDF 文档源">
          <View style={styles.buttonContainer}>
            <Button size={Size.small} onPress={loadNetworkPdf}>
              网络文件
            </Button>
          </View>
        </Field>

        <Field label="PDF 预览">
          <View style={styles.pdfContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>加载中...</Text>
              </View>
            ) : currentSource ? (
              <PdfViewer
                source={currentSource}
                onLoadComplete={handleLoadComplete}
                onPageChanged={handlePageChanged}
                onError={handleError}
                style={{ flex: 1 }}
                enablePaging={true}
                enableRTL={false}
                enableAnnotationRendering={true}
                enableAntialiasing={true}
                fitPolicy={0}
                spacing={10}
                password=""
                scale={1.0}
                minScale={1.0}
                maxScale={3.0}
                horizontal={false}
                page={1}
                onPageSingleTap={(page) => console.log('单击页面:', page)}
                onScaleChanged={(scale) => console.log('缩放变化:', scale)}
              />
            ) : (
              <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>请选择 PDF 文档源</Text>
              </View>
            )}
          </View>
        </Field>

        {currentSource && (
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              <Text style={styles.statusLabel}>当前源类型:</Text>
              {currentSource.uri?.startsWith('http')
                ? ' 网络文件'
                : currentSource.uri?.startsWith('data:')
                ? ' Base64 数据'
                : ' 本地文件'}
            </Text>
          </View>
        )}
      </Space>
    </Card>
  );
};

export default BasicUsage;
