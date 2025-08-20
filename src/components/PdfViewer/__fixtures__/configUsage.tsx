/**
 * title: 配置选项
 * desc: 展示 PdfViewer 组件的各种配置选项和自定义设置
 */

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { PdfViewer, Field, Space, Button, Size, Switch, Fill } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const ConfigUsage: React.FC = () => {
  const [enablePaging, setEnablePaging] = useState(true);
  const [horizontal, setHorizontal] = useState(false);
  const [enableAnnotation, setEnableAnnotation] = useState(true);
  const [enableAntialiasing, setEnableAntialiasing] = useState(true);
  const [fitPolicy, setFitPolicy] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [spacing, setSpacing] = useState(10);

  // 示例 PDF 源
  const pdfSource = {
    uri: 'https://static.xtransfer.com/boss/static/计算机终端使用说明v1.4_56a11b28884db8ce.pdf',
    cache: true,
  };

  const handleLoadComplete = (numberOfPages: number) => {
    console.log('PDF 加载完成，总页数:', numberOfPages);
  };

  const resetConfig = () => {
    setEnablePaging(true);
    setHorizontal(false);
    setEnableAnnotation(true);
    setEnableAntialiasing(true);
    setFitPolicy(0);
    setScale(1.0);
    setSpacing(10);
  };

  return (
    <Card title="配置选项">
      <Text style={styles.description}>
        通过不同的配置选项可以自定义 PDF 的显示效果和交互行为。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="显示配置">
          <Space direction="vertical" gap="s">
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text>启用分页</Text>
              <Switch value={enablePaging} onChange={setEnablePaging} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text>水平滚动</Text>
              <Switch value={horizontal} onChange={setHorizontal} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text>启用注释渲染</Text>
              <Switch value={enableAnnotation} onChange={setEnableAnnotation} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text>启用抗锯齿</Text>
              <Switch
                value={enableAntialiasing}
                onChange={setEnableAntialiasing}
              />
            </View>
          </Space>
        </Field>

        <Field label="适应策略">
          <View style={styles.buttonContainer}>
            <Button
              size={Size.small}
              fill={fitPolicy === 0 ? Fill.solid : Fill.weak}
              onPress={() => setFitPolicy(0)}
            >
              适应宽度
            </Button>
            <Button
              size={Size.small}
              fill={fitPolicy === 1 ? Fill.solid : Fill.weak}
              onPress={() => setFitPolicy(1)}
            >
              适应高度
            </Button>
            <Button
              size={Size.small}
              fill={fitPolicy === 2 ? Fill.solid : Fill.weak}
              onPress={() => setFitPolicy(2)}
            >
              适应页面
            </Button>
          </View>
        </Field>

        <Field label="缩放控制">
          <View style={styles.buttonContainer}>
            <Button
              size={Size.small}
              onPress={() => setScale(Math.max(0.5, scale - 0.2))}
            >
              缩小
            </Button>
            <Text style={styles.zoomText}>{(scale * 100).toFixed(0)}%</Text>
            <Button
              size={Size.small}
              onPress={() => setScale(Math.min(3.0, scale + 0.2))}
            >
              放大
            </Button>
            <Button size={Size.small} onPress={() => setScale(1.0)}>
              重置
            </Button>
          </View>
        </Field>

        <Field label="页面间距">
          <View style={styles.buttonContainer}>
            <Button
              size={Size.small}
              onPress={() => setSpacing(Math.max(0, spacing - 5))}
            >
              减少
            </Button>
            <Text style={styles.zoomText}>{spacing}px</Text>
            <Button
              size={Size.small}
              onPress={() => setSpacing(Math.min(50, spacing + 5))}
            >
              增加
            </Button>
          </View>
        </Field>

        <Field label="PDF 预览">
          <View style={styles.pdfContainer}>
            <PdfViewer
              source={pdfSource}
              onLoadComplete={handleLoadComplete}
              style={{ flex: 1 }}
              enablePaging={enablePaging}
              horizontal={horizontal}
              enableAnnotationRendering={enableAnnotation}
              enableAntialiasing={enableAntialiasing}
              fitPolicy={fitPolicy}
              scale={scale}
              spacing={spacing}
              minScale={0.5}
              maxScale={3.0}
              onPageChanged={(page, numberOfPages) =>
                console.log(`当前页: ${page}/${numberOfPages}`)
              }
              onScaleChanged={(newScale) => console.log('缩放变化:', newScale)}
            />
          </View>
        </Field>

        <View style={styles.buttonContainer}>
          <Button size={Size.small} onPress={resetConfig}>
            重置配置
          </Button>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            <Text style={styles.statusLabel}>当前配置:</Text>
            {'\n'}分页: {enablePaging ? '启用' : '禁用'}
            {'\n'}方向: {horizontal ? '水平' : '垂直'}
            {'\n'}缩放: {(scale * 100).toFixed(0)}%{'\n'}间距: {spacing}px
          </Text>
        </View>
      </Space>
    </Card>
  );
};

export default ConfigUsage;
