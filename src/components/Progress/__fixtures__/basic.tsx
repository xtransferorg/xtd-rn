import React, { useState, ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Size, Progress, Space, ProgressProps } from '@xrnjs/ui';
import { IconXHappy1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const ProgressScreen = () => {
  const [percent0, setPercent0] = useState<number>(0);
  const [percent1, setPercent1] = useState<number>(10);
  const [percent2, setPercent2] = useState<number>(20);
  const [percent3, setPercent3] = useState<number>(30);
  const [percent4, setPercent4] = useState<number>(40);
  const [percent5, setPercent5] = useState<number>(50);

  const gradientColors: ProgressProps['strokeColor'] = [
    '#87d068',
    '#ffe58f',
    '#ffccc7',
  ];

  return (
    <ScrollView>
      <Space>
        <Card style={styles.section}>
          <View style={styles.wrapper}>
            <Progress
              type="circle"
              percent={68}
              size={[74, 4]}
              style={styles.circle}
            />
            <Progress
              type="circle"
              percent={68}
              size={[74, 4]}
              style={styles.circle}
            />
            <Progress
              type="circle"
              percent={100}
              size={[74, 4]}
              status="success"
              style={styles.circle}
            />
            <Progress
              type="circle"
              percent={30}
              size={[74, 4]}
              status="exception"
              style={styles.circle}
            />
            <Progress type="circle" size={[74, 4]} style={styles.circle} />
            <Progress.Circle
              percent={25}
              size={[74, 4]}
              style={styles.circle}
              strokeColor="#5731E0"
              pivotText={<IconXHappy1 size={20} />}
              format={(percent?: number, pivotText?: ReactNode) => {
                return (
                  <View style={styles.circleWrapper}>
                    {pivotText}
                    <Text style={styles.circleText}>{`${percent}%`}</Text>
                  </View>
                );
              }}
            />
            <Progress
              type="circle"
              percent={50}
              size={[74, 4]}
              strokeColor={gradientColors}
              pivotText="渐变"
              style={styles.circle}
            />

            <Progress
              type="circle"
              percent={30}
              size="small"
              pivotText="小"
              style={styles.circle}
            />
            <Progress
              type="circle"
              percent={30}
              pivotText="大"
              style={styles.circle}
            />
          </View>
        </Card>

        <Card style={styles.section}>
          <Progress
            type="circle"
            percent={percent0}
            status="success"
            animated
            size={[74, 4]}
            onAnimationEnd={(n) => {
              console.log('当前环形进度条进度', n);
            }}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent0(() => percent0 + 10)}
          >
            环状增加(+1)
          </Button>
        </Card>

        <Card style={styles.section}>
          <Progress.Line
            percent={percent1}
            size={200}
            percentPosition="top"
            pivotText={
              <View style={styles.topWrapper}>
                <Text>{`本月目标进度`}</Text>
                <Text>{`${percent1}%`}</Text>
              </View>
            }
            onAnimationEnd={(n) => {
              console.log('当前进度', n);
            }}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent1(() => percent1 + 1)}
          >
            增加(+1，指定进度条长度，进度在上)
          </Button>
        </Card>

        <Card style={styles.section}>
          <Progress.Line
            percent={percent2}
            percentPosition="right"
            strokeColor={gradientColors}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent2(() => percent2 + 10)}
          >
            增加(+10，渐变色，进度在右)
          </Button>
        </Card>

        <Card style={styles.section}>
          <Progress.Line
            percent={percent3}
            percentPosition="bottom"
            status="success"
            format={(_?: number, pivotText?: ReactNode) => {
              return <View style={styles.bottomWrapper}>{pivotText}</View>;
            }}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent3(() => percent3 + 10)}
          >
            增加(+10，进度在下, 成功)
          </Button>
        </Card>

        <Card style={styles.section}>
          <Progress.Line
            percent={percent4}
            percentPosition="bottom"
            status="exception"
            format={(percent?: number, pivotText?: ReactNode) => {
              return (
                <View style={styles.bottomWrapper}>
                  {pivotText}
                  <Text style={{ marginLeft: 8 }}>{`${percent}%`}</Text>
                </View>
              );
            }}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent4(() => percent4 + 10)}
          >
            增加(+10，进度在下， 失败)
          </Button>
        </Card>

        <Card style={styles.section}>
          <Progress.Line
            percent={percent5}
            percentPosition="right"
            strokeColor="#5731E0"
            pivotText={<IconXHappy1 size={20} style={{ marginLeft: 8 }} />}
          />
          <Button
            size={Size.mini}
            onPress={() => setPercent5(() => percent5 + 10)}
          >
            增加(+10，进度在右，自定义icon)
          </Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ProgressScreen;
