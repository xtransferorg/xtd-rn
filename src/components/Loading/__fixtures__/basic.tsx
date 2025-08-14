/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import { Loading, Empty, Input, Button, Switch, Divider } from '@xrnjs/ui';
import Card from '_global/Card';
import { ProgressBar } from './progress';

const styles = StyleSheet.create({
  text: {
    width: 282,
    textAlign: 'center',
    color: '#222222',
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
});

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ScrollView>
      <Card title="基本用法">
        <Loading name="loading-xt" loadingType="circle" size="mini" />
        <View style={{ alignItems: 'center' }}>
          <Loading size="large" />
          <Loading
            name="loading-xt"
            loadingType="whiteCoin"
            size="large"
            tipDisable={false}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              backgroundColor: '#999999',
            }}
          />
        </View>

        <Loading
          size="large"
          tipDisable={true}
          tip={
            <View style={{ alignItems: 'center' }}>
              <ProgressBar
                width={182}
                style={{ marginTop: 24, marginBottom: 16 }}
              />
              <Text style={styles.text}>
                文案可配置，支持轮播展示，建议轮播间隔3s
              </Text>
            </View>
          }
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <Loading
          name="loading-xt"
          loadingType="goldCoin"
          size={48}
          tipDisable={true}
          tip={
            <Text style={[styles.text, { marginTop: 16 }]}>
              南美、非洲等国家外汇少，本币报价获得更多商机
            </Text>
          }
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <Loading name="loading-xt" loadingType="dot" size={48} />
        <Loading name="loading-xt" loadingType="circle" size={48} />

        <Loading
          name="loading"
          tipDisable={true}
          style={{
            backgroundColor: '#EEEEEE',
          }}
        />
        <Loading
          name="loading-white"
          tipDisable={true}
          style={{
            backgroundColor: '#999999',
          }}
        />
        <Loading name="loading-xt" loadingType="dot" size={20} />
        <Loading name="loading-xt" loadingType="circle" />

        <Loading name="loading" style={{ marginTop: 20 }} />

        <Loading
          name="loading-xt"
          size={32}
          tipDisable={true}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#333',
          }}
        />

        <Empty style={{ width: '100%', height: 100 }} />

        <Empty style={{ width: '20%', height: 50 }} />
        <Text>loading</Text>
        <Switch value={loading} onChange={setLoading} />
        <Divider />
        <Loading
          name="loading-xt"
          loadingType="circle"
          size="small"
          loading={loading}
        >
          <View>
            <Input placeholder="请输入文字" />
            <Button onPress={() => Alert.alert('333')}>查询</Button>
          </View>
        </Loading>
        <Divider />
        <Loading name="transparent" size="small" loading={loading}>
          <View>
            <Input placeholder="请输入文字" />
            <Button onPress={() => Alert.alert('333')}>查询</Button>
          </View>
        </Loading>
      </Card>
    </ScrollView>
  );
};

export default LoadingScreen;
