import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { FileViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const PdfPreview = () => {
  const [pdfUri, setPdfUri] = useState<any>();
  const pdfUrl =
    'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf';

  return (
    <ScrollView>
      <Space>
        <Card title="PDF 缩略图">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              使用 PdfThumbnail 组件显示 PDF 图标，点击后可以预览 PDF 文件
            </Text>
            <FileViewer.PdfThumbnail
              source={{ uri: pdfUrl }}
              onPreview={(source) => setPdfUri(source)}
            />
            <TouchableOpacity
              style={styles.previewButton}
              onPress={() => setPdfUri({ uri: pdfUrl })}
            >
              <Text style={styles.previewButtonText}>点击预览 PDF</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="PDF 预览器">
          <View style={styles.wrapper}>
            <Text style={styles.featureDescription}>
              内嵌的 PDF 预览器，支持缩放、翻页等功能
            </Text>
            {pdfUri && (
              <FileViewer type="pdf" style={styles.pdfViewer} source={pdfUri} />
            )}
            {!pdfUri && (
              <View
                style={[
                  styles.pdfViewer,
                  { justifyContent: 'center', alignItems: 'center' },
                ]}
              >
                <Text style={styles.featureDescription}>
                  点击上方按钮加载 PDF 文件
                </Text>
              </View>
            )}
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default PdfPreview;
