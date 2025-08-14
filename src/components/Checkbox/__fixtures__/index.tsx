import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, Checkbox, Space, Toast } from '@xrnjs/ui';
import { IconMANotice1, IconMANotice2 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';
import CustomerIcon from './CustomerIcon';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v?.label || v} 不可操作提示`,
    forbidPress: true,
  });

const CheckboxScreen = () => {
  const [multiValue, setMultiValue] = React.useState<number[]>();
  const [size, setSize] = React.useState<'middle' | 'small'>('middle');

  const toggleSize = () => {
    setSize(size === 'middle' ? 'small' : 'middle');
  };

  return (
    <ScrollView>
      <Space>
        <Card style={styles.section}>
          <Text style={styles.title}>基础用法</Text>
          <Space>
            <Checkbox label="热区" style={{ height: 60 }} />
            <Checkbox defaultValue label="已选中" />
            <Checkbox
              disabled
              label="不可选"
              onDisabledPress={() => onDisabledPress('不可选')}
            />
            <Checkbox
              defaultValue
              disabled
              label="强制选中、不可取消"
              onDisabledPress={() => onDisabledPress('强制选中、不可取消')}
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>动态切换尺寸</Text>
          <Button onPress={toggleSize}>{`点击切换尺寸(当前:${size})`}</Button>
          <Space>
            <Checkbox size={size} label="可操作" />
            <Checkbox size={size} defaultValue label="默认已选中" />
            <Checkbox
              size={size}
              disabled
              label="不可选"
              onDisabledPress={() => onDisabledPress('不可选')}
            />
            <Checkbox
              size={size}
              defaultValue
              disabled
              label="强制选中、不可取消"
              onDisabledPress={() => onDisabledPress('强制选中、不可取消')}
            />
          </Space>
        </Card>
        <Card style={styles.section}>
          <Text style={styles.title}>小尺寸</Text>
          <Space>
            <Checkbox size="small" label="未选择" />
            <Checkbox size="small" defaultValue label="已选中" />
            <Checkbox
              size="small"
              disabled
              label="不可选"
              onDisabledPress={() => onDisabledPress('不可选')}
            />
            <Checkbox
              size="small"
              defaultValue
              disabled
              label="强制选中、不可取消"
              onDisabledPress={() => onDisabledPress('强制选中、不可取消')}
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>多行选框</Text>
          <Space>
            <Checkbox
              labelTextStyle={styles.labelRow}
              defaultValue
              label="内容区实际视觉形式不限、示例仅用文字示例、选框和内容均上下居中与容器"
            />
            <Checkbox
              labelTextStyle={styles.labelRow}
              labelAlign="top"
              defaultValue
              label="选框示例:协议选框时、选框始终上下居中于第一行文字 协议选框时、选框始终上下居中于第一行文字"
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>选择框在右侧</Text>
          <Space>
            <Checkbox
              labelTextStyle={styles.labelRow}
              labelPosition="left"
              defaultValue
              label="内容区实际视觉形式不限、示例仅用文字示例、选框和内容均上下居中与容器"
            />
            <Checkbox
              labelTextStyle={styles.labelRow}
              labelAlign="top"
              labelPosition="left"
              defaultValue
              label="选框示例:协议选框时、选框始终上下居中于第一行文字 协议选框时、选框始终上下居中于第一行文字 "
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>Checkbox 组:单选</Text>
          <Checkbox.Group
            defaultValue={1}
            onChange={(v) => {
              console.log('onChange=', v);
            }}
            options={[
              { label: 'a', value: 1, disabled: true },
              { label: 'b', value: 2 },
              { label: 'c', value: 3 },
            ]}
            onDisabledPress={(option) => onDisabledPress(option)}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>Checkbox 组:多选</Text>
          <Checkbox.Group<number>
            multiple
            value={multiValue}
            onChange={(v) => {
              console.log('onChange m =', v);
              setMultiValue(v as number[]);
            }}
            options={[
              { label: 'a', value: 1 },
              { label: 'b', value: 2 },
              { label: 'c', value: 3, disabled: true },
            ]}
            onDisabledPress={(option) => onDisabledPress(option)}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>Checkbox 组:多选 横向</Text>
          <Checkbox.Group
            multiple
            value={multiValue}
            onChange={(v) => {
              console.log('onChange m =', v);
              setMultiValue(v as number[]);
            }}
            options={[
              { label: 'horizontal a', value: 1 },
              { label: 'horizontal b', value: 2 },
              { label: 'horizontal c', value: 3, disabled: true },
              { label: 'horizontal d', value: 4, disabled: true },
            ]}
            onDisabledPress={(option) => onDisabledPress(option)}
            direction={'horizontal'}
          />
        </Card>
        <Card style={styles.section}>
          <Text style={styles.title}>Checkbox 组:多选 分列</Text>
          <Checkbox.Group
            defaultValue={1}
            split
            labelAlign="top"
            options={[
              {
                label: '这是一段文字这是一段文字这是一段文字',
                value: 1,
              },
              {
                label: '这是一段文字这是一段文字这是一段文字',
                value: 2,
              },
              {
                label: '这是一段文字这是一',
                value: 3,
              },
              {
                label: '这是一段文字这是一',
                value: 4,
              },
            ]}
            onChange={(value) => {
              console.log(value);
            }}
            onDisabledPress={onDisabledPress}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>主副标题选框</Text>
          <Space>
            <Checkbox
              labelTextStyle={styles.labelRow}
              defaultValue
              label="主标题主标题主标题"
              subLabel="副标题副标题"
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>为选中时的值</Text>
          <Space>
            <Checkbox
              inactiveValue="off"
              label="主标题主标题主标题"
              onChange={console.log}
            />
          </Space>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>自定义Icon</Text>
          <Space>
            <Checkbox
              label="自定义复选框"
              renderIcon={(props) => CustomerIcon(props)}
            />
            <Checkbox
              label="自定义复选框(disabled)"
              disabled
              renderIcon={(props) => CustomerIcon(props)}
              onDisabledPress={() => onDisabledPress('自定义复选框(disabled)')}
            />
            <Checkbox
              label="自定义复选框(defaultValue & disabled)"
              defaultValue
              disabled
              renderIcon={(props) => CustomerIcon(props)}
              onDisabledPress={() =>
                onDisabledPress('自定义复选框(defaultValue & disabled)')
              }
            />
            <Checkbox
              label="主标题主标题主标题"
              renderIcon={({ active }) =>
                active ? <IconMANotice2 /> : <IconMANotice1 />
              }
            />
          </Space>
        </Card>
        <Card style={styles.section}>
          <Text style={styles.title}>新增描述(contentLabel)</Text>
          <Space>
            <Checkbox
              label="标题"
              subLabel={'副标题'}
              contentLabel={'内容信息'}
              style={{ height: 60 }}
            />
            <Checkbox
              labelPosition={'left'}
              label="标题"
              subLabel={'副标题'}
              contentLabel={'内容信息'}
              style={{ height: 60 }}
            />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CheckboxScreen;
