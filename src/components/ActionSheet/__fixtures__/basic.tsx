import { ActionSheet, Button, Space } from '@xrnjs/ui';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Card from '_global/Card';

const ActionSheetScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <Text>基础用法</Text>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: ['选项一', '选项二'],
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });
              // 注释代码为之前的用法，目前不推荐（若使用需添加catch），下面注释代码同理
              // ActionSheet({
              //   actions: ['选项一', '选项二'],
              // })
              //   .then(({ item, index }) => {
              //     console.log('提示弹窗 -> 选项');
              //     console.log(item, index);
              //   })
              //   .catch((e) => {
              //     console.log('提示弹窗 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            提示弹窗
          </Button>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: ['选项一', '选项二'],
                cancelText: '取消了',
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });
              // ActionSheet({
              //   actions: ['选项一', '选项二'],
              //   cancelText: '取消了',
              // })
              //   .then(({ item, index }) => {
              //     console.log('展示取消按钮 -> 选项');
              //     console.log(item, index);
              //     console.log(index);
              //   })
              //   .catch((e) => {
              //     console.log('展示取消按钮 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            展示取消按钮
          </Button>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: ['选项一', '选项二'],
                cancelText: '取消了',
                description: '这是标题描述信息',
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                beforeClose: (action, _, index) => {
                  if (action === 'item') {
                    return new Promise((resolve) => {
                      setTimeout(() => {
                        resolve(index === 0);
                      }, 3000);
                    });
                  }
                  return true;
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });
              // ActionSheet({
              //   actions: ['选项一', '选项二'],
              //   cancelText: '取消了',
              //   description: '这是标题描述信息',
              //   beforeClose: (action, _, index) => {
              //     if (action === 'item') {
              //       return new Promise((resolve) => {
              //         setTimeout(() => {
              //           resolve(index === 0);
              //         }, 3000);
              //       });
              //     }
              //     return true;
              //   },
              // })
              //   .then(({ item, index }) => {
              //     console.log('展示描述信息 -> 选项');
              //     console.log(item, index);
              //   })
              //   .catch((e) => {
              //     console.log('展示描述信息 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            展示标题及描述信息
          </Button>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: new Array(3).fill(0).map((_, index) => ({
                  name: `选项${index}`,
                  callback: () => {
                    console.log(index);
                  },
                })),
              });
              // ActionSheet({
              //   actions: new Array(3).fill(0).map((_, index) => ({
              //     name: `选项${index}`,
              //     callback: () => {
              //       console.log(index);
              //     },
              //   })),
              // }).catch(() => { });
            }}
          >
            独立 callback(每个选项不同的callback)
          </Button>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
                cancelText: '取消了',
                description: '请选择你要进行的操作',
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });
              // ActionSheet({
              //   actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
              //   cancelText: '取消了',
              //   description: '请选择你要进行的操作',
              // })
              //   .then(({ item, index }) => {
              //     console.log('提示弹窗 -> 选项');
              //     console.log(item, index);
              //   })
              //   .catch((e) => {
              //     console.log('提示弹窗 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            出现滚动条(默认顶部边距是屏幕高度*0.15)
          </Button>
          <Button
            onPress={() => {
              ActionSheet.open({
                safeAreaInsetTop: 100,
                actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
                cancelText: '取消了',
                description: '请选择你要进行的操作',
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });

              // ActionSheet({
              //   safeAreaInsetTop: 100,
              //   actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
              //   cancelText: '取消了',
              //   description: '请选择你要进行的操作',
              // })
              //   .then(({ item, index }) => {
              //     console.log('提示弹窗 -> 选项');
              //     console.log(item, index);
              //   })
              //   .catch((e) => {
              //     console.log('提示弹窗 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            出现滚动条:自定义顶部边距
          </Button>
        </Card>

        <Card>
          <Text>选项状态</Text>
          <Button
            onPress={() => {
              ActionSheet.open({
                actions: [
                  { name: '普通选项' },
                  { name: '着色选项', color: '#f30' },
                  { name: 'loading', loading: true },
                  { name: '禁用选项', disabled: true },
                  { name: '选项带描述信息', description: '描述信息' },
                ],
                cancelText: '取消了',
                closeOnPressOverlay: true,
                onSelect: (item, index) => {
                  console.log('提示弹窗 -> 选项');
                  console.log(item, index);
                },
                onClose: () => console.log('提示弹窗 -> 关闭'),
              });

              // ActionSheet({
              //   actions: [
              //     { name: '普通选项' },
              //     { name: '着色选项', color: '#f30' },
              //     { name: 'loading', loading: true },
              //     { name: '禁用选项', disabled: true },
              //     { name: '选项带描述信息', description: '描述信息' },
              //   ],
              //   cancelText: '取消了',
              //   closeOnPressOverlay: true,
              // })
              //   .then(({ item, index }) => {
              //     console.log('选项状态 -> 选项');
              //     console.log(item, index);
              //   })
              //   .catch((e) => {
              //     console.log('选项状态 -> 关闭');
              //     console.log(e);
              //   });
            }}
          >
            选项状态
          </Button>
        </Card>
      </Space>
    </ScrollView>
  );
};
export default ActionSheetScreen;
