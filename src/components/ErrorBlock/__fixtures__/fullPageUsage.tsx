/**
 * title: 全屏模式
 * desc: 展示全屏显示的错误块，适用于页面级错误
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ErrorBlock, Button, Size } from '@xrnjs/ui';
import { errorBlockStyles } from './style';

const FullPageUsage: React.FC = () => {
  const [showFullPage, setShowFullPage] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<
    'empty' | 'networkError' | 'notFound'
  >('empty');

  const toggleFullPage = () => {
    setShowFullPage(!showFullPage);
  };

  const switchStatus = (status: 'empty' | 'networkError' | 'notFound') => {
    setCurrentStatus(status);
  };

  if (showFullPage) {
    return (
      <ErrorBlock
        title="全屏错误页面"
        description="这是一个全屏显示的错误页面，通常用于页面级别的错误展示"
        status={currentStatus}
        fullPage
        footerText="返回"
        footerSecondText="重试"
        footerDescriptionText="需要帮助？联系客服"
        onFooterPress={toggleFullPage}
        onFooterSecondPress={() => switchStatus('empty')}
      />
    );
  }

  return (
    <View style={errorBlockStyles.fullPageDemo}>
      <ErrorBlock
        title="全屏模式演示"
        description="点击下方按钮体验全屏错误页面"
        status="empty"
      />

      <View style={errorBlockStyles.buttonGroup}>
        <Button
          size={Size.middle}
          style={errorBlockStyles.demoButton}
          onPress={() => {
            setCurrentStatus('empty');
            toggleFullPage();
          }}
        >
          空状态全屏
        </Button>

        <Button
          size={Size.middle}
          style={errorBlockStyles.demoButton}
          onPress={() => {
            setCurrentStatus('networkError');
            toggleFullPage();
          }}
        >
          网络错误全屏
        </Button>

        <Button
          size={Size.middle}
          style={errorBlockStyles.demoButton}
          onPress={() => {
            setCurrentStatus('notFound');
            toggleFullPage();
          }}
        >
          404错误全屏
        </Button>
      </View>
    </View>
  );
};

export default FullPageUsage;
