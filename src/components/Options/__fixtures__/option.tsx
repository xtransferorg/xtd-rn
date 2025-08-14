import React from 'react';
import { ScrollView, StyleProp, Text, ViewStyle } from 'react-native';
import { Field, Options, Space, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { IconXBackside1, IconXFrontside1 } from '../../../icons/index';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 140,
  height: 140,
};
const vCenter: StyleProp<ViewStyle> = {};
const iconProps = { size: 32 };
const OptionsScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card style={styles.section}>
          <Text style={[styles.title]}>带图标</Text>
          <Options
            defaultValue={'1'}
            columns={2}
            showIcon
            style={{ paddingHorizontal: 0 }}
            fullColumn
            options={[
              {
                label: '结汇提现',
                description: '立即到账',
                value: '1',
              },
              {
                label: '普通提现',
                description: '三天到账',
                value: '2',
              },
              {
                label: '禁止提现',
                description: '点击给出提示',
                value: '3',
                disabled: true,
              },
              {
                label: '标题内容过长情况----标题内容过长情况',
                description: '描述正常描述正常描述正常描述正常描述正常',
                value: '4',
              },
              {
                label: '标题内容正常',
                description:
                  '描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况描述内容过长情况',
                value: '5',
              },
              {
                label: '标题内容过长情况----标题内容过长情况',
                description: '描述内容过长情况描述内容过长情况',
                value: '6',
              },
            ]}
            onDisabledPress={(opt) => {
              console.log('opt=', opt.label);
              Toast({
                position: 'middle',
                message: `${opt.label} 不可操作提示`,
                forbidPress: true,
              });
            }}
          />
        </Card>
        <Card style={styles.section}>
          <Text style={[styles.title]}>带图标自定义大小</Text>
          <Options
            defaultValue={'1'}
            columns={2}
            showIcon
            style={{ paddingHorizontal: 0 }}
            fullColumn
            iconProps={iconProps} // 统一设置
            optionStyle={vCenter} //统一设置
            options={[
              {
                label: '标题内容正常',
                description: '描述正常',
                value: '1',
                // style: vCenter, //也可单独设置
                // iconProps, // 也可单独设置
              },
              {
                label: '标题内容过长情况----标题内容过长情况',
                description: '描述正常',
                value: '2',
                // style: vCenter,
                // iconProps,
              },
              {
                label: '标题内容正常',
                description: '描述内容过长情况描述内容过长情况',
                value: '3',
                // style: vCenter,
                // iconProps,
              },
              {
                label: '标题内容过长情况----标题内容过长情况',
                description: '描述内容过长情况描述内容过长情况',
                value: '4',
                // style: vCenter,
                // iconProps,
              },
              {
                label: '标题内容过长情况----标题内容过长情况',
                description: '描述内容过长情况描述内容过长情况',
                value: '5',
                // style: vCenter,
                // iconProps,
              },
              {
                label: '只有标题--标题内容过长情况----标题内容过长情况',
                value: '6',
                // style: vCenter,
                // iconProps,
              },
              {
                description: '只有描述--描述内容过长情况描述内容过长情况',
                value: '7',
                // style: vCenter,
                // iconProps,
              },
            ]}
            onDisabledPress={(opt) => {
              console.log('opt=', opt.label);
              Toast({
                position: 'middle',
                message: `${opt.label} 不可操作提示`,
                forbidPress: true,
              });
            }}
          />
        </Card>

        <Card style={styles.section}>
          <Text
            style={[styles.title, { paddingHorizontal: 0 }]}
          >{`带图标(垂直布局)`}</Text>
          <Options
            defaultValue={'1'}
            columns={2}
            showIcon
            mode="vertical"
            style={{ paddingHorizontal: 0 }}
            fullColumn
            options={[
              {
                label: '结汇提现',
                description: '立即到账',
                value: '1',
              },
              {
                label: '普通提现',
                description: '三天到账',
                value: '2',
              },
              {
                label: '禁止提现',
                description: '当前渠道不可用',
                value: '3',
                disabled: true,
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={[styles.title, { paddingHorizontal: 0 }]}>图片</Text>
          <Options
            defaultValue={'1'}
            columns={2}
            showIcon
            style={{ paddingHorizontal: 0 }}
            imageStyle={styles.imagePicStyle}
            fullColumn
            options={[
              {
                imageSource: logo,
                value: '1',
                style: styles.imageStyle,
              },
              {
                imageSource: logo,
                value: '2',
                style: styles.imageStyle,
              },
              {
                imageSource: logo,
                value: '3',
                style: styles.imageStyle,
                disabled: true,
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={[styles.title, { paddingHorizontal: 0 }]}>
            撑满整个容器
          </Text>
          <Options
            defaultValue={'1'}
            options={[
              {
                label: '结汇提现',
                value: '1',
              },
              {
                label: '普通提现',
                value: '2',
              },
              {
                label: '快速提现',
                value: '3',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>单行文字(值不是V[])</Text>
          <Options<string, true>
            defaultValue={'1'}
            columns={2}
            single
            cancelable={false}
            onChange={(v) => console.log(v)}
            options={[
              {
                label: '结汇提现',
                value: '1',
              },
              {
                label: '普通体现',
                value: '2',
              },
              {
                disabled: true,
                label: '易企结',
                value: '3',
              },
              {
                disabled: true,
                label: '4',
                value: '4',
              },
              {
                disabled: true,
                label: '5',
                value: '5',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>主副标题</Text>
          <Options
            defaultValue={['1']}
            options={[
              {
                label: '法人代表/实际控制人',
                labelTextProps: { numberOfLines: 1 },
                description: '占股10%及以上',
                descriptionTextProps: { numberOfLines: 1 },
                value: '1',
              },
              {
                label: '法人代表/实际控制人',
                labelTextProps: { numberOfLines: 1 },
                description: '占股10%及以上',
                descriptionTextProps: { numberOfLines: 1 },
                value: '占股10%及以上',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>双行文字选项</Text>
          <Options
            defaultValue={['1']}
            options={[
              {
                label: '法人代表/实际控制人占股10%及以上',
                value: '1',
              },
              {
                label: '法人代表/实际控制人占股20%及以上',
                value: '2',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>多选</Text>
          <Options
            multiple
            defaultValue={['1']}
            options={[
              {
                label: '结汇提现',
                value: '1',
              },
              {
                label: '普通体现',
                value: '2',
              },
              {
                label: '易企结',
                value: '3',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Field
            layout="horizontal"
            label="提现方式"
            labelStyle={styles.labelText}
          >
            <Options
              style={styles.optionsHorizontal}
              defaultValue={['1']}
              options={[
                {
                  label: '结汇提现',
                  value: '1',
                },
                {
                  label: '普通体现',
                  value: '2',
                },
              ]}
            />
          </Field>
          <Field
            layout="vertical"
            label="提现方式"
            labelStyle={styles.labelText}
          >
            <Space gap={20}>
              <Options
                defaultValue={['1']}
                showIcon
                mode="vertical"
                options={[
                  {
                    label: '结汇提现',
                    value: '1',
                    icon: <IconXFrontside1 />,
                  },
                  {
                    label: '普通体现',
                    value: '2',
                    icon: <IconXBackside1 />,
                  },
                ]}
              />
              <Options
                defaultValue={['1']}
                showIcon
                mode="horizontal"
                options={[
                  {
                    label: '结汇提现',
                    value: '1',
                    icon: <IconXFrontside1 />,
                  },
                  {
                    label: '普通体现',
                    value: '2',
                    icon: <IconXBackside1 />,
                  },
                ]}
              />
            </Space>
          </Field>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default OptionsScreen;
