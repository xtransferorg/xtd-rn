import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavBar, Space } from '@xrnjs/ui';
import { IconMAReturn1 } from '../../../icons/index';
import styles from './style';

const CustomStyle: FC = () => {
  return (
    <Space>
      <NavBar
        translucent
        backArrow={
          <TouchableOpacity onPress={() => {}}>
            <IconMAReturn1 fillColor={'#FFFFFF'} size={24} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            onPress={() => {
              console.log('查看转账记录');
            }}
          >
            <Text style={[styles.rightTextStyle, { color: '#FFFFFF' }]}>
              转账记录
            </Text>
          </TouchableOpacity>
        }
        title="主标题展示"
        titleStyle={{ color: '#FFFFFF' }}
        statusBarStyle={styles.yellowStatusBar}
        navBarStyle={styles.yellowNavBar}
      />

      <NavBar
        translucent
        backArrow={
          <TouchableOpacity onPress={() => {}}>
            <IconMAReturn1 fillColor={'#FFFFFF'} size={24} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            onPress={() => {
              console.log('查看转账记录');
            }}
          >
            <Text style={[styles.rightTextStyle, { color: '#FFFFFF' }]}>
              转账记录
            </Text>
          </TouchableOpacity>
        }
        title="Title"
        titleStyle={{ color: '#FFFFFF' }}
        statusBarStyle={styles.blueStatusBar}
        navBarStyle={styles.blueNavBar}
      />
    </Space>
  );
};

export default CustomStyle;
