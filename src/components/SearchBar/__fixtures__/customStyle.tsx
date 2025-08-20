import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SearchBar, Space } from '@xrnjs/ui';
import { IconMAReturn1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const CustomStyle = () => {
  return (
    <Space gap={20}>
      <Card style={styles.wrapper}>
        <Text style={styles.title}>自定义容器样式</Text>
        <SearchBar
          style={styles.customContainer}
          placeholder="自定义外层容器"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>自定义内层容器样式</Text>
        <SearchBar
          title="自定义内层样式"
          placeholder="内层容器样式"
          wrapStyle={styles.customWrap}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>自定义输入框容器</Text>
        <SearchBar
          placeholder="输入框容器样式"
          inputWrapperStyle={styles.customInputWrapper}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>自定义扩展内容样式</Text>
        <SearchBar
          placeholder="扩展内容样式"
          leftExtra={
            <TouchableOpacity>
              <IconMAReturn1 size={24} fillColor="#007AFF" />
            </TouchableOpacity>
          }
          leftExtraStyle={styles.customLeftExtra}
          rightExtra={<Text style={styles.customRightText}>搜索</Text>}
          rightExtraStyle={styles.customRightExtra}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>综合自定义样式</Text>
        <SearchBar
          backgroundColor="#F8F9FA"
          title="综合样式示例"
          placeholder="综合自定义"
          wrapStyle={styles.comprehensiveWrap}
          inputWrapperStyle={styles.comprehensiveInputWrapper}
          inputStyle={styles.comprehensiveInput}
          leftExtra={
            <TouchableOpacity>
              <IconMAReturn1 size={20} fillColor="#007AFF" />
            </TouchableOpacity>
          }
          leftExtraStyle={styles.comprehensiveLeftExtra}
          rightExtra={<Text style={styles.comprehensiveRightText}>搜索</Text>}
          rightExtraStyle={styles.comprehensiveRightExtra}
        />
      </Card>
    </Space>
  );
};

export default CustomStyle;
