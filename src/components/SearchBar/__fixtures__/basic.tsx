import React, { FC } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { SearchBar, Space, Title } from '@xrnjs/ui';
import { IconMAReturn1, IconMAScan1, IconMARobot1 } from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

interface SearchBarScreenProps {
  navigation: any;
}

const SearchBarScreen: FC<SearchBarScreenProps> = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Title style={{ margin: 10 }}>
        每个NavBar会计算距离顶部的距离，所以看到和浏览器中不一样的顶部距离
      </Title>
      <Space>
        <Card title="基本用法">
          <SearchBar
            placeholder="配置默认词条占位"
            leftExtra={<IconMAScan1 size={24} fillColor="black" />}
            rightExtra={<IconMARobot1 size={24} fillColor="black" />}
          />
        </Card>

        <Card>
          <SearchBar
            colorType="primary"
            placeholder="配置默认词条占位"
            leftExtra={<IconMAScan1 size={24} fillColor="white" />}
            rightExtra={<IconMARobot1 size={24} fillColor="white" />}
          />
        </Card>

        <Card style={styles.section}>
          <SearchBar
            backgroundColor="#F5F5F5"
            leftExtraStyle={{ marginRight: 14 }}
            inputWrapperStyle={{ backgroundColor: '#fff' }}
            placeholder="配置默认词条占位"
            leftExtra={
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}
              >
                <IconMAReturn1 size={24} fillColor="black" />
              </TouchableOpacity>
            }
            rightExtra={<Text style={styles.suffixText}>搜索</Text>}
          />
        </Card>

        <Card>
          <SearchBar
            defaultValue="输入中"
            placeholder="配置默认词条占位"
            leftExtraStyle={{ marginRight: 14 }}
            leftExtra={
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}
              >
                <IconMAReturn1 size={24} fillColor="black" />
              </TouchableOpacity>
            }
            rightExtra={<Text style={styles.suffixText}>搜索</Text>}
          />
        </Card>

        <Card>
          <SearchBar title="请选择国家或地区" placeholder="配置默认词条占位" />
        </Card>

        <Card title="自定义内层容器样式">
          <SearchBar
            title="请选择国家或地区"
            placeholder="配置默认词条占位"
            wrapStyle={{ paddingHorizontal: 4, paddingVertical: 0 }}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default SearchBarScreen;
