/**
 * title: 自定义样式
 * desc: 展示自定义图片、样式和内容的错误块
 */

import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ErrorBlock, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import { errorBlockStyles } from './style';

const CustomExtra = () => (
  <View style={errorBlockStyles.customExtraContainer}>
    <Button size={Size.middle}>自定义按钮</Button>
    <TouchableOpacity style={errorBlockStyles.linkButton}>
      <Text style={errorBlockStyles.linkText}>自定义链接</Text>
    </TouchableOpacity>
  </View>
);

const CustomFooter = () => (
  <View style={errorBlockStyles.customFooterContainer}>
    <Button size={Size.small} style={errorBlockStyles.customFooterButton}>
      自定义底部
    </Button>
  </View>
);

const CustomImage = () => (
  <View style={errorBlockStyles.customImageContainer}>
    <Text style={errorBlockStyles.customImageText}>🎨</Text>
    <Text style={errorBlockStyles.customImageLabel}>自定义图标</Text>
  </View>
);

const CustomUsage: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <ErrorBlock
            title="自定义标题样式"
            titleStyle={errorBlockStyles.customTitle}
            description="自定义描述样式"
            descriptionStyle={errorBlockStyles.customDescription}
            status="empty"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="自定义图片"
            description="使用自定义图片替代默认图标"
            image="https://static.xtransfer.com/resources/officialfrontend/svg/a4cff814d2b3ef6f602f.svg"
            footerText="了解更多"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="自定义图片组件"
            description="使用 React 组件作为图片"
            image={<CustomImage />}
            footerText="继续"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="自定义额外内容"
            description="在错误块中添加自定义内容"
            status="empty"
            extra={<CustomExtra />}
          />
        </Card>

        <Card>
          <ErrorBlock
            title="自定义底部"
            description="完全自定义底部内容"
            status="empty"
            footer={<CustomFooter />}
          />
        </Card>

        <Card>
          <ErrorBlock
            title="小场景模式"
            isSmallScene
            smallSceneText="这是一个小场景的错误提示，适用于空间有限的场景"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CustomUsage;
