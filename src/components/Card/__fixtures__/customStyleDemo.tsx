import React from 'react';
import { Text } from 'react-native';
import { Card, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const CustomStyleDemo = () => {
  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="自定义整体样式"
        style={styles.customCard}
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这个卡片使用了自定义的背景色和边框样式。
        </Text>
      </Card>

      <Card
        type={Type.AllCard}
        title="自定义各区域样式"
        headerStyle={styles.customHeader}
        bodyStyle={styles.customBody}
        footerStyle={styles.customFooter}
        titleTextStyle={styles.customTitle}
        footer={
          <Text style={{ textAlign: 'center', padding: 8 }}>自定义底部</Text>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          这个卡片分别自定义了头部、内容和底部区域的样式。
        </Text>
      </Card>

      <Card
        type={Type.NestCard}
        title="带分割线"
        headerDivider={true}
        footerDivider={true}
        footer={
          <Text style={{ textAlign: 'center', padding: 8 }}>底部内容</Text>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>这个卡片在头部和底部都显示了分割线。</Text>
      </Card>
    </Space>
  );
};

export default CustomStyleDemo;
