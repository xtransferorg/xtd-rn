import React from 'react';
import { View, Text } from 'react-native';
import { Result, Card, Space, Button, Fill } from '@xrnjs/ui';
import styles from './style';

/**
 * 自定义扩展内容
 * 展示 Result 组件的自定义扩展内容和额外信息
 */

// 额外信息组件
const ExtraInfoContent = () => {
  return (
    <View style={styles.extraInfoWrapper}>
      <Text style={styles.extraText}>
        <Text style={styles.strong}>温馨提示：</Text>
        如有疑问，请联系客服或查看帮助文档
      </Text>
    </View>
  );
};

const CustomExtraExample = () => {
  return (
    <Space direction="vertical" gap={16}>
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

      <Card style={styles.wrapper}>
        <Result
          status="success"
          title="支付成功"
          subtitle="您的订单已支付成功，商品将在24小时内发货"
          extra={
            <View style={styles.extraContentWrapper}>
              <Text style={styles.extraText}>订单号：202312250001</Text>
              <Text style={styles.extraText}>
                支付时间：2023-12-25 14:30:00
              </Text>
              <Text style={styles.extraText}>支付金额：¥299.00</Text>
            </View>
          }
        />
      </Card>
    </Space>
  );
};

export default CustomExtraExample;
