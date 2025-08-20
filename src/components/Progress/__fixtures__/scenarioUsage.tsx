import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Progress, Button, Space, Size } from '@xrnjs/ui';
import { IconMADownload1, IconPPUpload1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const perventText = ({ percent }: { percent?: number }) => (
  <Text>{`${percent}% (${
    percent ? (percent * 2.5).toFixed(1) : 0
  }MB/250MB)`}</Text>
);

const ScenarioUsage: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [taskProgress, setTaskProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // 模拟上传进度
  const startUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const timer = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsUploading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  // 模拟下载进度
  const startDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    const timer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDownloading(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 300);
  };

  return (
    <Card title="实际场景">
      <View style={styles.section}>
        <Text style={styles.description}>展示进度条在实际业务场景中的应用</Text>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>文件上传</Text>
          <View style={styles.customContent}>
            <IconPPUpload1 size={20} />
            <Text style={styles.customText}>
              {isUploading
                ? '上传中...'
                : uploadProgress === 100
                ? '上传完成'
                : '准备上传'}
            </Text>
          </View>
          <Progress
            type="line"
            percent={Math.round(uploadProgress)}
            status={uploadProgress === 100 ? 'success' : 'normal'}
            animated
            strokeColor={uploadProgress === 100 ? undefined : '#1890ff'}
          />
          <Button
            size={Size.small}
            onPress={startUpload}
            disabled={isUploading}
            style={{ marginTop: 8 }}
          >
            {isUploading ? '上传中...' : '开始上传'}
          </Button>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>文件下载</Text>
          <View style={styles.customContent}>
            <IconMADownload1 size={20} />
            <Text style={styles.customText}>
              {isDownloading
                ? '下载中...'
                : downloadProgress === 100
                ? '下载完成'
                : '准备下载'}
            </Text>
          </View>
          <Progress
            type="line"
            percent={Math.round(downloadProgress)}
            status={downloadProgress === 100 ? 'success' : 'normal'}
            animated
            strokeColor={['#52c41a', '#73d13d']}
            format={(percent) => perventText({ percent })}
          />
          <Button
            size={Size.small}
            onPress={startDownload}
            disabled={isDownloading}
            style={{ marginTop: 8 }}
          >
            {isDownloading ? '下载中...' : '开始下载'}
          </Button>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>任务完成度</Text>
          <View style={{ alignItems: 'center' }}>
            <Progress
              type="circle"
              percent={taskProgress}
              size={120}
              strokeColor={
                taskProgress < 30
                  ? '#ff4d4f'
                  : taskProgress < 70
                  ? '#faad14'
                  : '#52c41a'
              }
              format={(percent) => (
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    {percent}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#666' }}>任务完成</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.animationControls}>
            <Button
              size={Size.small}
              onPress={() =>
                setTaskProgress((prev) => Math.min(prev + 10, 100))
              }
            >
              完成任务
            </Button>
            <Button size={Size.small} onPress={() => setTaskProgress(0)}>
              重置
            </Button>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>步骤进度</Text>
          <Space>
            <Progress
              type="line"
              percent={25}
              percentPosition="top"
              pivotText="步骤 1/4"
              strokeColor="#1890ff"
            />
            <Progress
              type="line"
              percent={50}
              percentPosition="top"
              pivotText="步骤 2/4"
              strokeColor="#1890ff"
            />
            <Progress
              type="line"
              percent={75}
              percentPosition="top"
              pivotText="步骤 3/4"
              strokeColor="#1890ff"
            />
            <Progress
              type="line"
              percent={100}
              percentPosition="top"
              pivotText="完成"
              status="success"
            />
          </Space>
        </View>
      </View>
    </Card>
  );
};

export default ScenarioUsage;
