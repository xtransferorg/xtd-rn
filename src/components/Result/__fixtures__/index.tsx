import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Fill, Result, Space } from '@xrnjs/ui';
import { IconMAForward1 } from '../../../icons/index';
import styles from './style';
import Card from '_global/Card';

const ExtraInfoContent = () => {
  return (
    <Space gap={10} style={{ marginTop: 24 }}>
      <View style={styles.extraInfoWrapper}>
        <Text style={{ fontSize: 12, color: '#222222' }}>
          部分订单超过预计发货日期，点击更新物流信息，否则将影响本次审核
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 12, color: '#FF7A00' }}>
          更新物流信息
          <IconMAForward1 size={8} fillColor="#FF7A00" />
        </Text>
      </View>

      <View style={styles.extraInfoWrapper}>
        <Text style={{ fontSize: 12, color: '#222222' }}>
          部分订单超过预计发货日期，点击更新物流信息，否则将影响本次审核
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 12, color: '#FF7A00' }}>
          更新物流信息
          <IconMAForward1 size={8} fillColor="#FF7A00" />
        </Text>
      </View>
    </Space>
  );
};

const ResultScreen = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card style={styles.wrapper}>
          <Result
            status="success"
            title="成功"
            subtitle={
              <Text style={styles.text}>
                最早到账日期为
                2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看{' '}
                <Text
                  style={styles.textLink}
                  onPress={() => {
                    console.log('跳转');
                  }}
                >
                  文字链
                </Text>
              </Text>
            }
            primaryText="主要按钮"
            primaryProps={{
              onPress: () => {
                console.log('点击主要按钮');
              },
            }}
            secondaryText="次要按钮"
            secondaryProps={{
              onPress: () => {
                console.log('点击次要按钮');
              },
            }}
            expand={
              <Button
                fill={Fill.link}
                style={styles.expandBtnStyle}
                onPress={() => {
                  console.log('点击扩展按钮');
                }}
              >
                扩展按钮
              </Button>
            }
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="error"
            title="失败"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
            primaryText="主要按钮"
            primaryProps={{
              onPress: () => {
                console.log('点击主要按钮');
              },
            }}
            secondaryText="次要按钮"
            secondaryProps={{
              onPress: () => {
                console.log('点击次要按钮');
              },
            }}
            expand={
              <Button
                fill={Fill.link}
                style={styles.expandBtnStyle}
                onPress={() => {
                  console.log('点击扩展按钮');
                }}
              >
                扩展按钮
              </Button>
            }
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="warning"
            title="异常"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
            primaryText="主要按钮"
            primaryProps={{
              onPress: () => {
                console.log('点击主要按钮');
              },
            }}
            secondaryText="次要按钮"
            secondaryProps={{
              onPress: () => {
                console.log('点击次要按钮');
              },
            }}
            expand={
              <Button
                fill={Fill.link}
                style={styles.expandBtnStyle}
                onPress={() => {
                  console.log('点击扩展按钮');
                }}
              >
                扩展按钮
              </Button>
            }
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="waiting"
            title="处理中"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
            primaryText="主要按钮"
            primaryProps={{
              onPress: () => {
                console.log('点击主要按钮');
              },
            }}
            secondaryText="次要按钮"
            secondaryProps={{
              onPress: () => {
                console.log('点击次要按钮');
              },
            }}
            expand={
              <Button
                fill={Fill.link}
                style={styles.expandBtnStyle}
                onPress={() => {
                  console.log('点击扩展按钮');
                }}
              >
                扩展按钮
              </Button>
            }
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="reject"
            title="终止"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
            primaryText="主要按钮"
            primaryProps={{
              onPress: () => {
                console.log('点击主要按钮');
              },
            }}
            secondaryText="次要按钮"
            secondaryProps={{
              onPress: () => {
                console.log('点击次要按钮');
              },
            }}
            expand={
              <Button
                fill={Fill.link}
                style={styles.expandBtnStyle}
                onPress={() => {
                  console.log('点击扩展按钮');
                }}
              >
                扩展按钮
              </Button>
            }
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="success"
            title="成功"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="error"
            title="失败"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
            extra={<ExtraInfoContent />}
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="warning"
            title="警示"
            subtitle="最早到账日期为 2022-10-27，受银行处理时效或节假日等因素影响，实际到账时间以银行处理时间为准，请留意查看"
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="waiting"
            layout="horizontal"
            title="等待"
            subtitle="请关联该笔收款对应的订单资料，关联多笔订单时请填写每一笔订单对应的金额"
            titleTextStyle={{ marginVertical: 0 }}
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="reject"
            layout="horizontal"
            title="已驳回"
            subtitle="用于表示驳回用于表示驳...."
            titleTextStyle={{ marginVertical: 0 }}
          />
        </Card>

        <Card style={styles.wrapper}>
          <Result
            status="info"
            layout="vertical"
            title={
              <View
                style={{
                  marginTop: 24,
                }}
              >
                <Space direction="vertical" gap={20} align="center">
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#222',
                    }}
                  >
                    Info
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#222',
                    }}
                  >
                    800,00.00 USD
                  </Text>
                </Space>
              </View>
            }
            subtitle="The earliest arrival date is 2022-10-27, affected by factors such as bank processing time or holidays"
            subtitleTextStyle={{
              color: '#666',
              marginTop: 20,
            }}
            titleTextStyle={{ marginVertical: 0 }}
            extra={
              <Space
                direction="vertical"
                gap={16}
                style={{
                  marginTop: 24,
                }}
              >
                <Button>Primary button</Button>
                <Button fill={Fill.outline}>Secondary button</Button>
              </Space>
            }
          />
        </Card>
      </Space>
    </ScrollView>
  );
};
export default ResultScreen;
