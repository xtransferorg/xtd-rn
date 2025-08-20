import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const Scenarios = () => {
  const [pageLoading, setPageLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const handlePageLoad = () => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
  };

  const handleListLoad = () => {
    setListLoading(true);
    setTimeout(() => {
      setListLoading(false);
    }, 2000);
  };

  const handleDataProcess = () => {
    setDataLoading(true);
    setTimeout(() => {
      setDataLoading(false);
    }, 2500);
  };

  const handleFileUpload = () => {
    setUploadLoading(true);
    setTimeout(() => {
      setUploadLoading(false);
    }, 4000);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="页面加载">
          <View style={styles.wrapper}>
            <Space>
              <Loading
                loading={pageLoading}
                name="loading-xt"
                loadingType="circle"
                size="large"
              >
                <View style={styles.pageLoadingContainer}>
                  <Text style={styles.customText}>页面内容已加载完成</Text>
                  <Text
                    style={[
                      styles.customText,
                      { fontSize: 12, color: '#999', marginTop: 8 },
                    ]}
                  >
                    这里是页面的主要内容区域
                  </Text>
                </View>
              </Loading>
              <TouchableOpacity
                onPress={handlePageLoad}
                style={styles.actionButton}
              >
                <Text style={styles.buttonText}>
                  {pageLoading ? '加载中...' : '模拟页面加载'}
                </Text>
              </TouchableOpacity>
            </Space>
          </View>
        </Card>

        <Card title="列表加载">
          <View style={styles.wrapper}>
            <Loading
              loading={listLoading}
              name="loading"
              loadingType="circle"
              size={32}
            >
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>数据项 1</Text>
                  <Text style={styles.listDesc}>
                    这是第一个数据项的详细信息
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>数据项 2</Text>
                  <Text style={styles.listDesc}>
                    这是第二个数据项的详细信息
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listTitle}>数据项 3</Text>
                  <Text style={styles.listDesc}>
                    这是第三个数据项的详细信息
                  </Text>
                </View>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleListLoad}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>
                {listLoading ? '刷新中...' : '刷新列表'}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="数据处理">
          <View style={styles.wrapper}>
            <Loading
              loading={dataLoading}
              name="loading-xt"
              loadingType="goldCoin"
              size={48}
            >
              <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>交易数据</Text>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>订单号：</Text>
                  <Text style={styles.dataValue}>XTD202401150001</Text>
                </View>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>金额：</Text>
                  <Text style={styles.dataValue}>¥ 1,299.00</Text>
                </View>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>状态：</Text>
                  <Text style={[styles.dataValue, { color: '#52c41a' }]}>
                    处理完成
                  </Text>
                </View>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleDataProcess}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>
                {dataLoading ? '处理中...' : '处理数据'}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="文件上传">
          <View style={styles.wrapper}>
            <Loading
              loading={uploadLoading}
              size="large"
              loadingType="dot"
              colorFilters={[{ keypath: 'dot', color: '#888888' }]}
            >
              <View style={styles.uploadContainer}>
                <View style={styles.uploadArea}>
                  <Text style={styles.uploadTitle}>📁 文件上传区域</Text>
                  <Text style={styles.uploadDesc}>
                    点击或拖拽文件到此区域进行上传
                  </Text>
                  <Text style={styles.uploadStatus}>
                    {uploadLoading
                      ? '正在上传文件，请勿关闭页面...'
                      : '准备就绪，可以上传文件'}
                  </Text>
                </View>
              </View>
            </Loading>
            <TouchableOpacity
              onPress={handleFileUpload}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>
                {uploadLoading ? '上传中...' : '开始上传'}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card title="网络请求">
          <View style={styles.wrapper}>
            <Text style={styles.sectionTitle}>不同类型的网络请求状态</Text>
            <View style={styles.networkGrid}>
              <View style={styles.networkItem}>
                <Loading name="loading-xt" loadingType="circle" size={24} />
                <Text style={styles.networkLabel}>获取数据</Text>
              </View>
              <View style={styles.networkItem}>
                <Loading name="loading-xt" loadingType="dot" size={24} />
                <Text style={styles.networkLabel}>发送请求</Text>
              </View>
              <View style={styles.networkItem}>
                <Loading name="loading" size={24} />
                <Text style={styles.networkLabel}>同步数据</Text>
              </View>
              <View style={styles.networkItem}>
                <Loading name="loading-xt" loadingType="goldCoin" size={24} />
                <Text style={styles.networkLabel}>支付处理</Text>
              </View>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Scenarios;
