/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  List,
  Title,
  Space,
  Switch,
  Button,
  Fill,
  Size,
  TextType,
  Checkbox,
  Toast,
} from '@xrnjs/ui';
import { Align } from '../interface';
import {
  IconMAWloading1,
  IconMAActivity1,
  IconXEdit1,
  IconXMorea1,
  IconXTrashcan1,
  IconXCopy1,
  IconXMarksmall1,
} from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';
import CustomerIcon from './CustomerIcon';

interface ListScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v.label || v} 不可操作提示`,
    forbidPress: true,
  });

const ListScreen: FC<ListScreenProps> = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card>
          <List header={<Title style={styles.title}>一、单行列表-new</Title>}>
            <List.Item
              extra={
                <View style={styles.rightContainer}>
                  <Button fill={Fill.weak} size={Size.small}>
                    取消
                  </Button>
                </View>
              }
              style={styles.singleItem}
            >
              标题1
            </List.Item>

            <List.Item
              extra={
                <View style={styles.rightContainer}>
                  <Button
                    fill={Fill.text}
                    icon={<IconXEdit1 size={16} fillColor="#413F57" />}
                    style={{ padding: 4 }}
                  />
                </View>
              }
            >
              标题2
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              prefix={<IconXCopy1 size={16} fillColor={'#413F57'} />}
              extra={
                <View style={styles.rightContainer}>
                  <Button
                    fill={Fill.text}
                    icon={<IconXMorea1 size={16} fillColor="#413F57" />}
                    style={{ padding: 4, marginRight: 8 }}
                  />
                  <Button
                    fill={Fill.text}
                    icon={<IconXTrashcan1 size={16} fillColor="#413F57" />}
                    style={{ padding: 4 }}
                  />
                </View>
              }
            >
              标题3
            </List.Item>
            <List.Item
              style={styles.singleItem}
              extra={
                <View style={styles.rightContainer}>
                  <Button
                    fill={Fill.text}
                    size={Size.large}
                    textType={TextType.primary}
                  >
                    按钮
                  </Button>
                </View>
              }
            >
              标题4
            </List.Item>
            <List.Item
              extra={
                <View style={styles.rightContainer}>
                  <Button
                    fill={Fill.text}
                    icon={<IconXMarksmall1 size={24} fillColor="#413F57" />}
                  />
                </View>
              }
            >
              标题5
            </List.Item>
            <List.Item
              extra={
                <View style={styles.rightContainer}>
                  <Checkbox renderIcon={(props) => CustomerIcon(props)} />
                </View>
              }
            >
              标题6
            </List.Item>
            <List.Item
              disabled
              onDisabledPress={() => onDisabledPress('标题7')}
            >
              标题7
            </List.Item>
          </List>
        </Card>

        <Card>
          <List header={<Title style={styles.title}>一、单行列表</Title>}>
            <List.Item
              extra={<Text style={styles.description}>描述字段1</Text>}
              style={styles.singleItem}
            >
              标题文案1
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.remind}>强提醒</Text>}
            >
              标题文案2
            </List.Item>
            <List.Item
              onPress={() => {}}
              arrow={<IconMAWloading1 name="plus" />}
            >
              标题文案3
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              onPress={() => {}}
              prefix={<IconMAActivity1 />}
              style={styles.singleItem}
            >
              标题文案4
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              onPress={() => {}}
              prefix={<IconMAActivity1 fillColor={'#B3B2C2'} />}
              style={styles.singleItem}
              disabled
              onDisabledPress={() => onDisabledPress('标题文案4-1')}
            >
              标题文案4-1
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              onPress={() => {}}
              prefix={<IconMAActivity1 />}
              style={styles.singleItem}
              extra={<Text style={styles.remind}>提醒</Text>}
            >
              标题文案5
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              prefix={<IconMAActivity1 />}
              arrow={<Switch defaultValue={true} />}
              extra={<></>}
            >
              标题文案6
            </List.Item>
            <List.Item
              titleStyle={styles.titleIcon}
              disabled
              prefix={<IconMAActivity1 fillColor={'#B3B2C2'} />} // 设置图标disabled颜色
              arrow={<Switch defaultValue={true} activeColor="grey" disabled />}
              extra={<></>}
              onDisabledPress={() => onDisabledPress('标题文案7')}
            >
              标题文案7
            </List.Item>
          </List>
        </Card>

        <Card>
          <List header={<Title style={styles.title}>二、多行列表</Title>}>
            <List.Item
              extra={<Text style={styles.description}>描述字段描述</Text>}
              description="描述行文本、对标题进行补充"
              style={styles.multipleItem}
            >
              标题文案1
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段描述字</Text>}
              description="描述行文本"
              style={styles.multipleItem}
            >
              标题带图标
            </List.Item>
            <List.Item
              onPress={() => {}}
              extra={<Text style={styles.description}>描述字段</Text>}
              description="描述行文本描述行文本  描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段描述字段"
              descriptionLines={3}
              align={Align.top}
              style={styles.multipleItem}
            >
              顶部对齐
            </List.Item>
            <List.Item
              onPress={() => {}}
              prefix={
                <Image
                  source={{
                    uri: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
                  }}
                  style={{ width: 36, height: 36 }}
                />
              }
              extra={
                <Text style={styles.description}>描述字段描述字段描述</Text>
              }
              description="描述行文本描"
              style={styles.multipleItem}
            >
              标题带图片
            </List.Item>
          </List>
        </Card>
        <Card>
          <List
            header={
              <Title style={styles.combineTitle} description="Description">
                组合列表-new
              </Title>
            }
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabelNew}
              descriptionStyle={styles.combineDescriptionNew}
              description={'Angola, Afghanistan, Algeria,Angola, Afghanistan,'}
              style={styles.combineItem}
              align={Align.middle}
              arrowStyle={styles.arrowStyleNew}
            >
              Major export area
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabelNew}
              descriptionStyle={styles.combineDescriptionNew}
              description={
                'Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan'
              }
              descriptionLines={2}
              style={styles.combineItem}
              align={Align.middle}
              arrowStyle={styles.arrowStyleNew}
            >
              Major export area
            </List.Item>
          </List>
        </Card>
        <Card>
          <List
            header={
              <Title style={styles.combineTitle} description="副标题文案">
                组合列表
              </Title>
            }
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={<Text style={styles.combineDescription}>自营出口</Text>}
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              出口类型
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>
                  香蕉、草莓、水蜜桃
                </Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              出口商品名称
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>
                  安哥拉、阿富汗、阿尔及利亚、安哥拉、阿富汗、阿尔
                </Text>
              }
              rightStyle={styles.flexShrink}
              style={styles.combineItem}
              align={Align.middle}
              rightAlign={Align.middle}
              arrowStyle={styles.arrowStyle}
            >
              主要出口地区
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>10,000万美元</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              历史年出口额
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>23,000万美元</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              预估年出口额
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>www.jaiosf.com</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              企业网站
            </List.Item>
          </List>
        </Card>
        <Card>
          <List
            header={<Title style={styles.combineTitle}>左右布局-new</Title>}
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleLines={3}
              style={styles.combineItem}
              align={Align.middle}
              extra={
                <Text numberOfLines={3} style={styles.rightExtra}>
                  这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
                </Text>
              }
            >
              这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleLines={3}
              style={styles.combineItem}
              align={Align.middle}
              extra={
                <Text numberOfLines={3} style={styles.rightExtra}>
                  Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan,
                  Algeria,Angola, Angola, Afghanistan Angola, Afghanistan,
                  Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola,
                  Afghanistan
                </Text>
              }
            >
              Major export areaMajor export areaMajor export areaMajor export
              areaMajor export areaMajor export areaMajor export areaMajor
              export areaMajor export areaMajor export area
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ListScreen;
