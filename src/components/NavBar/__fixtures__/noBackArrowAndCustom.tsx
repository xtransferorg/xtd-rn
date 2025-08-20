import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { NavBar, Space } from '@xrnjs/ui';
import styles from './style';

const NoBackArrowAndCustom: FC = () => {
  return (
    <Space>
      <NavBar translucent backArrow={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae
        alias reprehenderit, quos quia quibusdam! Sequi ipsa dolores, vitae
        ipsam, eveniet voluptates quae corporis obcaecati voluptatem, modi
        consequuntur perspiciatis officiis!
      </NavBar>

      <NavBar
        translucent
        backArrow={false}
        customNavBar={
          <View style={styles.customNavBar}>
            <Text>自定义导航栏区域</Text>
          </View>
        }
      />
    </Space>
  );
};

export default NoBackArrowAndCustom;
