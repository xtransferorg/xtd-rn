/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NoticeBar, Space, Modal, Button, Fill } from '@xrnjs/ui';
import {
  IconMAMore1,
  IconMANotice2,
  IconMAPrompt2,
  IconXClosesmall1,
} from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';
import ScrollView from '_global/ScrollView';
import CusTail from './cusTail';

const NoticeBarScreen = () => {
  const onRightPress = () => {
    console.log('onRightPress');
  };

  return (
    <ScrollView>
      <Space>
        <CusTail />
        <Card style={styles.section}>
          {NoticeBar.remind({ text: '传达辅助信息的提示' })}
        </Card>
        <Card style={styles.section}>
          {NoticeBar.warn({ text: '传达警惕类提示信息' })}
        </Card>
        <Card style={styles.section}>
          {NoticeBar.fail({ text: '传达错误类的提示信息' })}
        </Card>
        <Card style={styles.section}>
          {NoticeBar.success({ text: '传达积极类的提示信息' })}
        </Card>

        <Card style={styles.section}>
          <NoticeBar leftIcon text="全局通告栏" />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon="remind"
            wrapable
            numberOfLines={0}
            title="警告"
            text="全局通告栏"
            renderOverFlow={(isOverflow) => {
              return isOverflow ? (
                <Button
                  fill={Fill.link}
                  style={{
                    paddingLeft: 8,
                  }}
                >
                  查看更多
                </Button>
              ) : null;
            }}
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            scrollable
            title="警告"
            numberOfLines={1}
            text="信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本。"
            onRightPress={onRightPress}
            rightIcon={<IconXClosesmall1 size={16} />}
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            wrapable
            numberOfLines={2}
            title="警告"
            text="信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本。"
            renderOverFlow={(isOverflow) => {
              return isOverflow ? (
                <Button fill={Fill.link}>查看更多</Button>
              ) : null;
            }}
            onRightPress={onRightPress}
            rightIcon={<IconXClosesmall1 size={16} />}
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            wrapable
            numberOfLines={3}
            text="XTransfer supports transfers to the corporate accounts of this company and the bank accounts of legal representatives XTransfer supports transfers to the corporate accounts of this company and the bank accounts of legal representatives"
            onRightPress={onRightPress}
            rightIcon={<IconXClosesmall1 size={16} />}
            renderOverFlow={(isOverflow) => {
              return isOverflow ? (
                <Button
                  onPress={() => {
                    Modal({
                      message: (
                        <>
                          <Text>
                            1. XTransfer supports transfers to the corporate
                            accounts of this company and the bank accounts of
                            legal representatives/directors/shareholders/actual
                            controllers.
                          </Text>
                          <Text>
                            2. XTransfer supports transfers to your supplier or
                            service provider bank accounts and other XTransfer
                            accounts.
                          </Text>
                          <Text>
                            3. You are required to pay a service fee, which does
                            not include correspondent bank fees.
                          </Text>
                        </>
                      ),
                      showCancelButton: false,
                      solidButton: true,
                      buttonsDirection: 'column',
                      confirmButtonText: 'Got it',
                    });
                  }}
                  fill={Fill.link}
                >
                  view detail
                </Button>
              ) : null;
            }}
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            backgroundColor="#FFF6E5"
            text="提示文案、文字过长可跑马灯、可换行"
            rightIcon={<Button fill={Fill.link}>默认右边</Button>}
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar backgroundColor="#FFF6E5" text="模块通告栏" size="small" />
        </Card>

        <Card>
          <NoticeBar
            leftIcon
            backgroundColor="#FFF6E5"
            text="这里是提示文案、文字过长可跑马灯展示"
          />
          <NoticeBar
            backgroundColor="#FFF6E5"
            text="这里是提示文案、文字过长可跑马灯展示"
          />
          <NoticeBar
            text="这里是提示文案、文字过长可跑马灯展示"
            backgroundColor="#FFF6E5"
            rightIcon={<Button fill={Fill.link}>默认右边</Button>}
          />

          <NoticeBar
            leftIcon
            text="提示文案、文字过长可跑马灯、可换行"
            backgroundColor="#FFF6E5"
            rightIcon={<Button fill={Fill.link}>默认右边</Button>}
          />
        </Card>

        <Card>
          <NoticeBar
            leftIcon={
              <IconMAMore1
                size={16}
                fillColor="#FF7A00"
                style={styles.iconStyle}
              />
            }
            backgroundColor="#FFF6E5"
            text="自定义icon"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon={
              <IconMANotice2
                size={14}
                fillColor="#fff"
                style={styles.customLeftIcon}
              />
            }
            contentStyle={styles.whiteText}
            borderRadius={8}
            backgroundColor="rgba(34, 34, 34, 0.5)"
            text="这里是提示文案、文字过长可跑马灯展示"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon={
              <IconMAPrompt2
                fillColor="#FFF"
                size={14}
                style={styles.customLeftIcon}
              />
            }
            contentStyle={styles.whiteText}
            borderRadius={8}
            backgroundColor="rgba(34, 34, 34, 0.5)"
            text="这里是提示文案、文字过长可跑马灯展示"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            wrapable
            borderRadius={8}
            backgroundColor="#FFEDED"
            text="补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            wrapable
            borderRadius={8}
            backgroundColor="#FFF6E5"
            text="补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合"
          />
          <NoticeBar
            leftIcon
            rightIcon={<Button fill={Fill.link}>查看更多</Button>}
            scrollable
            backgroundColor="#FFF6E5"
            text="补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            borderRadius={8}
            scrollable
            backgroundColor="#FFF6E5"
            text="补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            style={{ paddingRight: 12 }}
            rightIcon={<Button fill={Fill.link}>查看更多</Button>}
            borderRadius={8}
            scrollable
            backgroundColor="#FFF6E5"
            text="补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合"
          />
        </Card>

        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            wrapable
            backgroundColor="#FFF6E5"
            style={{ alignItems: 'flex-start' }}
            contentStyle={{
              lineHeight: 20,
              color: '#222',
              fontSize: 14,
              marginTop: -2,
            }}
            text="web端不支持预览此功能。补充材料：温馨提示由于款项对应的贸易场景特殊，请按照进行材料补充，感谢您的理解和配合。提供多个选项供用户选择，一般在筛选和表单中使用。"
            numberOfLines={2}
            renderOverFlow={(isOverflow) => {
              if (isOverflow) {
                return (
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: '#FF7A00' }}>查看更多</Text>
                    <Text style={{ color: '#FF7A00', marginLeft: 10 }}>
                      立即补充
                    </Text>
                  </View>
                );
              }
              return null;
            }}
          />
        </Card>
        <Card style={styles.section} key="1">
          <NoticeBar
            leftIcon
            showType="multipleLines"
            showBullets={false}
            backgroundColor="#FFF6E5"
            texts={[
              { content: '这是一段信息这是一段信息1' },
              { content: '这是一段信息这是一段信息3' },
            ]}
          />
        </Card>
        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            showType="multipleLines"
            backgroundColor="#FFF6E5"
            texts={[
              { content: '这是一段信息这是一段信息333' },
              { content: '这是一段信息这是一段信息2' },
              { content: '这是一段信息这是一段信息这是一段信息3' },
            ]}
          />
        </Card>
        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            showType="multipleLines"
            showBullets
            backgroundColor="#FFF6E5"
            texts={[
              {
                content:
                  '这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息',
              },
              {
                content:
                  '这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息',
              },
              {
                content:
                  '这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息',
              },
              {
                content:
                  '这是一段信信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息一段信息这是一段信息',
              },
            ]}
          />
        </Card>
        <Card style={styles.section}>
          <NoticeBar
            leftIcon
            showBullets
            showType="multipleLines"
            backgroundColor="#FFF6E5"
            popupUseNative={true}
            texts={[
              {
                content: (
                  <Text>
                    这是一段信息这是一段信息
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: '#FF7A00',
                          lineHeight: 20, // 保持行高一致
                        }}
                      >
                        详细信息
                      </Text>
                    </TouchableOpacity>
                  </Text>
                ),
              },
              {
                content:
                  '这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息',
              },
            ]}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default NoticeBarScreen;
