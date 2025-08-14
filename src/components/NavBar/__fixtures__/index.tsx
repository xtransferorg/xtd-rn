import React, { FC } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Fill, Size, NavBar, Space, Input } from '@xrnjs/ui';
import {
  IconMASearch1,
  IconMAMore1,
  IconXOpeneyes1,
  IconXSettings1,
  IconMAReturn1,
} from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

interface NavBarScreenProps {
  navigation: any;
}

const right = [
  { icon: IconXOpeneyes1, onPress: () => {}, label: '显示' },
  { icon: IconXSettings1, onPress: () => {}, label: '设置' },
  { icon: IconMASearch1, onPress: () => {}, label: '搜索' },
];

const NavBarScreen: FC<NavBarScreenProps> = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <NavBar
            translucent
            onBack={() => {}}
            right={right.slice(0, 1)}
            title="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
            description="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
          />
        </Card>

        <Card>
          <NavBar
            translucent
            onBack={() => {}}
            right={right.slice(0, 2)}
            title="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
            description="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
          />
        </Card>

        <Card>
          <NavBar
            translucent
            onBack={() => {}}
            right={right}
            title="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
            description="标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案"
          />
        </Card>

        <Card>
          <NavBar translucent onBack={() => {}} right={right.slice(0, 2)}>
            <Input size="small" />
          </NavBar>
        </Card>

        <Card>
          <NavBar
            translucent
            onBack={() => {}}
            right={
              <Button
                fill={Fill.solid}
                size={Size.mini}
                onPress={() => {
                  console.log('新建转账记录');
                }}
              >
                新建
              </Button>
            }
            title="标题文案"
            description="副标题文案"
          />
        </Card>

        <Card>
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
        </Card>

        <Card>
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
        </Card>

        <Card>
          <NavBar
            translucent
            onBack={() => {
              // props.navigation.goBack();
            }}
            right={
              <>
                <TouchableOpacity>
                  <IconMAMore1 size={16} />
                </TouchableOpacity>
                <View style={styles.iconSpace} />
                <TouchableOpacity>
                  <IconMASearch1 />
                </TouchableOpacity>
              </>
            }
          >
            标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案
          </NavBar>
        </Card>

        <Card>
          <NavBar
            translucent
            backArrow={
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.goBack();
                }}
              >
                <Text style={styles.backText}>返回</Text>
              </TouchableOpacity>
            }
          >
            <>
              <Text style={styles.title}>标题文案</Text>
              <Text style={styles.description}>副标题文案副标题文案</Text>
            </>
          </NavBar>
        </Card>

        <Card>
          <NavBar translucent backArrow={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quae alias reprehenderit, quos quia quibusdam! Sequi ipsa dolores,
            vitae ipsam, eveniet voluptates quae corporis obcaecati voluptatem,
            modi consequuntur perspiciatis officiis!
          </NavBar>
        </Card>

        <Card>
          <NavBar
            translucent
            backArrow={false}
            customNavBar={
              <View style={styles.customNavBar}>
                <Text>自定义导航栏区域</Text>
              </View>
            }
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default NavBarScreen;
