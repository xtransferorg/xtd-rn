import React from 'react';
import { Text } from 'react-native';
import { Checkbox, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LabelAlignment: React.FC = () => {
  return (
    <>
      <Card style={styles.section}>
        <Text style={styles.title}>多行文本对齐</Text>
        <Space>
          <Checkbox
            labelTextStyle={styles.labelRow}
            defaultValue
            label="内容区实际视觉形式不限、示例仅用文字示例、选框和内容均上下居中与容器"
          />
          <Checkbox
            labelTextStyle={styles.labelRow}
            labelAlign="top"
            defaultValue
            label="选框示例:协议选框时、选框始终上下居中于第一行文字 协议选框时、选框始终上下居中于第一行文字"
          />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>选择框位置</Text>
        <Space>
          <Checkbox
            labelTextStyle={styles.labelRow}
            labelPosition="left"
            defaultValue
            label="选择框在右侧的示例"
          />
          <Checkbox
            labelTextStyle={styles.labelRow}
            labelAlign="top"
            labelPosition="left"
            defaultValue
            label="选择框在右侧且顶部对齐的长文本示例 选择框在右侧且顶部对齐的长文本示例"
          />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>主副标题</Text>
        <Space>
          <Checkbox
            labelTextStyle={styles.labelRow}
            defaultValue
            label="主标题内容"
            subLabel="副标题说明信息"
          />
          <Checkbox
            labelTextStyle={styles.labelRow}
            labelAlign="top"
            label="顶部对齐主标题"
            subLabel="顶部对齐副标题说明"
          />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>内容标签</Text>
        <Space>
          <Checkbox
            label="标题"
            subLabel="副标题"
            contentLabel="详细内容信息描述"
            style={styles.tallContainer}
          />
          <Checkbox
            labelPosition="left"
            label="右侧标题"
            subLabel="右侧副标题"
            contentLabel="右侧详细内容信息"
            style={styles.tallContainer}
          />
        </Space>
      </Card>
    </>
  );
};

export default LabelAlignment;
