import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Popover, NavBar } from '@xrnjs/ui';
import { IconMAMore1, IconMASearch1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const NavBarUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const navActions = [
    {
      text: '新建菜单',
    },
    {
      text: '草稿箱',
    },
    {
      text: '禁用状态',
      disabled: true,
    },
  ];

  return (
    <Card title="导航栏集成">
      <View style={styles.section}>
        <View style={styles.navBarContainer}>
          <NavBar
            translucent
            onBack={() => console.log('返回')}
            right={
              <>
                <Popover
                  actions={navActions}
                  onSelect={handleSelect}
                  statusBarTranslucent={false}
                >
                  <TouchableOpacity>
                    <IconMAMore1 size={24} />
                  </TouchableOpacity>
                </Popover>
                <View style={styles.iconSpace} />
                <TouchableOpacity>
                  <IconMASearch1 size={24} />
                </TouchableOpacity>
              </>
            }
          >
            标题文案
          </NavBar>
        </View>
      </View>
    </Card>
  );
};

export default NavBarUsage;
