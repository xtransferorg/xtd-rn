import React, { FC, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  Toast,
  Button,
  Popover,
  Space,
  PopoverAction,
  PopoverInstance,
  NavBar,
} from '@xrnjs/ui';
import styles from './style';
import {
  IconMASearch1,
  IconMAMore1,
  IconMANeworder1,
  IconMAScan1,
  IconMAPrompt2,
  IconMACancellation1,
} from '../../../icons/index';
import Card from '_global/Card';

interface NavBarScreenProps {
  navigation: any;
}
// 目前业务默认值（true 无需设置）即可，这边demo由于Android的DEMO非沉浸模式，故设置为false
const StatusBarTranslucent = false;
const PopoverScreen: FC<NavBarScreenProps> = () => {
  const onSelect = (v: PopoverAction, index?: number) => {
    Toast(`第 ${index} 个选项 => ${v.text}`);
  };

  const onActionSelect = (v: PopoverAction, index?: number) => {
    Toast(`第 ${index} 个选项 => ${v.text}`);
  };

  const iconActions: PopoverAction[] = [
    { text: '新建菜单', icon: <IconMANeworder1 fillColor="#FFF" size={20} /> },
    { text: '草稿箱', icon: <IconMAScan1 fillColor="#FFF" size={20} /> },
    {
      text: '禁用状态',
      icon: <IconMAPrompt2 fillColor="#999999" size={20} />,
      disabled: true,
    },
  ];

  const iconActionsNoIcon: PopoverAction[] = [
    { text: '新建菜单' },
    { text: '草稿箱' },
    { text: '禁用状态', disabled: true },
  ];

  const popoverRef = useRef<PopoverInstance>(null);
  const popoverRef1 = useRef<PopoverInstance>(null);

  const closePopover = () => {
    popoverRef1?.current?.hide();
  };

  return (
    <ScrollView>
      <Space>
        <Card>
          <NavBar
            translucent
            onBack={() => {}}
            right={
              <>
                <Popover
                  actions={iconActions}
                  onSelect={onActionSelect}
                  statusBarTranslucent={StatusBarTranslucent}
                >
                  <TouchableOpacity>
                    <IconMAMore1 size={24} />
                  </TouchableOpacity>
                </Popover>
                <View style={styles.iconSpace} />
                <TouchableOpacity>
                  <IconMASearch1 />
                </TouchableOpacity>
              </>
            }
          >
            标题文案
          </NavBar>
        </Card>

        <Card title="基础用法">
          <View>
            <Space>
              <Popover
                ref={popoverRef}
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度,点击遮罩不会关闭" />
                }
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>多行文字，带箭头，默认深色主题</Button>
              </Popover>
              <Popover
                arrow={false}
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度" />
                }
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>多行文字，不带箭头，默认深色主题</Button>
              </Popover>
              <Popover
                mode="light"
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度" />
                }
                onSelect={onSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>多行文字，带箭头，浅色主题</Button>
              </Popover>
              <Popover
                actions={iconActions}
                onSelect={onActionSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>配置菜单</Button>
              </Popover>
              <Popover
                actions={iconActionsNoIcon}
                onSelect={onActionSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>配置菜单-无图标</Button>
              </Popover>
              <Popover
                mode="light"
                actions={iconActionsNoIcon}
                onSelect={onActionSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>配置菜单-浅色主题-无图标</Button>
              </Popover>
              <Popover
                mode="light"
                actions={iconActionsNoIcon}
                onSelect={onActionSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>配置菜单-禁用弹出</Button>
              </Popover>
            </Space>
          </View>
        </Card>

        <Card title="文字提示位置自动控制">
          <View>
            <Space direction="horizontal">
              <Popover
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度" />
                }
                onSelect={onSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>左边-偏右</Button>
              </Popover>
              <Popover
                placement="bottom"
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度" />
                }
                onSelect={onSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>居中</Button>
              </Popover>
              <Popover
                content={
                  <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度最长宽度" />
                }
                onSelect={onSelect}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>右边-偏左</Button>
              </Popover>
            </Space>
          </View>
        </Card>

        <Card title="菜单提示位置自动控制">
          <View>
            <Space direction="horizontal">
              <Popover
                popoverStyle={{ backgroundColor: '#222' }}
                placement="right"
                onSelect={onSelect}
                content={[
                  <Popover.Item key="1" value="1">
                    <Text style={{ color: '#fff' }}>弹出11111111</Text>
                  </Popover.Item>,
                  <Popover.Item key="2" value="2" disabled>
                    <Text style={{ color: '#999' }}>
                      弹出2222222222222222222 disabled
                    </Text>
                  </Popover.Item>,
                  <Popover.Item key="3" value="3">
                    <Text style={{ color: '#fff' }}>弹出3333333</Text>
                  </Popover.Item>,
                ]}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>左边-偏右</Button>
              </Popover>
              <Popover
                // placement="bottom"
                onSelect={onSelect}
                content={[
                  <Popover.Item key="1" value="1">
                    <Text style={{ color: '#fff' }}>弹出11111111</Text>
                  </Popover.Item>,
                  <Popover.Item key="2" value="2" disabled>
                    <Text style={{ color: '#999' }}>
                      弹出222222222222 disabled
                    </Text>
                  </Popover.Item>,
                  <Popover.Item key="3" value="3">
                    <Text style={{ color: '#fff' }}>弹出333333</Text>
                  </Popover.Item>,
                ]}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>居中-top</Button>
              </Popover>
              <Popover
                popoverStyle={{ backgroundColor: '#222' }}
                placement="left"
                onSelect={onSelect}
                content={[
                  <Popover.Item key="1" value="1">
                    <Text style={{ color: '#fff' }}>弹出11111111</Text>
                  </Popover.Item>,
                  <Popover.Item key="2" value="2" disabled>
                    <Text style={{ color: '#999' }}>
                      弹出2222222222222222 disabled
                    </Text>
                  </Popover.Item>,
                  <Popover.Item key="3" value="3">
                    <Text style={{ color: '#fff' }}>弹出3333333</Text>
                  </Popover.Item>,
                ]}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>右边-偏左</Button>
              </Popover>
            </Space>
          </View>
        </Card>

        <Card title="点击空白不可关闭">
          <Popover
            mode="light"
            ref={popoverRef}
            content={
              <Popover.Text text="哈哈哈最长宽度最长宽度最长宽度,点击遮罩不会关闭" />
            }
            statusBarTranslucent={StatusBarTranslucent}
          >
            <Button>点击空白不可关闭 浅色主题</Button>
          </Popover>
        </Card>

        <Card title="手动关闭">
          <View>
            <Space direction="horizontal">
              <Popover
                ref={popoverRef1}
                closeOnClickPopover={false}
                closeOnClickOverlay={false}
                content={[
                  <Popover.Item key="1" value="1">
                    <View style={styles.wrapper}>
                      <Text style={{ color: '#fff' }}>
                        只有点击按钮,才能关闭
                      </Text>
                      <TouchableOpacity onPress={closePopover}>
                        <IconMACancellation1
                          style={styles.icon}
                          size={14}
                          fillColor="#fff"
                        />
                      </TouchableOpacity>
                    </View>
                  </Popover.Item>,
                ]}
                statusBarTranslucent={StatusBarTranslucent}
              >
                <Button>手动关闭</Button>
              </Popover>
            </Space>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default PopoverScreen;
