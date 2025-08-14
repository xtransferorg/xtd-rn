/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, ErrorBlock, Size, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ErrorBlockScreen = () => {
  const [showFullPage, setShowFullPage] = useState<boolean>(false);

  const toggle = () => {
    setShowFullPage(!showFullPage);
  };

  const toggleTitle = () => {};

  const onPress = () => {};

  const ToggleBtn = () => (
    <Button size={Size.middle} onPress={toggle} style={styles.button}>
      切换全屏展示
    </Button>
  );

  const SubTitle = () => (
    <>
      <Button size={Size.middle} onPress={toggleTitle} style={styles.button}>
        前往缴费
      </Button>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>有疑问？联系客服</Text>
      </TouchableOpacity>
    </>
  );

  return showFullPage ? (
    <ErrorBlock
      title="无内容类空态，文字居中对齐，假如有很多文字，假如有很多文字，假如有很多文字"
      description="描述（无内容类空态，文字居中对齐，假如有很多文字，假如有很多文字，假如有很多文字）"
      status="empty"
      fullPage
      footerText="查看更多"
      onFooterPress={toggle}
      footerDescriptionText="有疑问？联系客服"
    />
  ) : (
    <ScrollView>
      <Space gap={20}>
        <Card>
          <ErrorBlock
            isSmallScene
            smallSceneText="There is currently no data available There is currently no data available available There is currently no data available There is currently no data available available"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="暂无数据"
            status="empty"
            description="暂无数据暂无数据暂无数据暂无数据暂无数据暂无数据暂无数据"
            footerText="查看详情"
            footerSecondText="查看更多"
            footerDescriptionText="有疑问？联系客服"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="无内容类空态"
            status="empty"
            footerText="查看更多"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="无内容类空态"
            status="empty"
            extra={<ToggleBtn />}
          />
        </Card>

        <Card>
          <ErrorBlock title="未登录类空态" status="noLogin" />
        </Card>

        <Card>
          <ErrorBlock
            title="未绑定/未认证/未开通类空态"
            status="noAuth"
            description="账户内尚有缴费单带偿还，请先完成缴费"
            descriptionStyle={styles.desc}
            extra={<SubTitle />}
          />
        </Card>

        <Card>
          <ErrorBlock title="网络异常类空态" status="networkError" />
        </Card>

        <Card>
          <ErrorBlock title="升级中/等待中类空态" status="systemUpgrade" />
        </Card>

        <Card>
          <ErrorBlock title="搜索中/无数据类空态" status="noData" />
        </Card>

        <Card>
          <ErrorBlock title="页面不存在等报错类空态" status="notFound" />
        </Card>

        <Card>
          <ErrorBlock title="完成类空态" status="finished" />
        </Card>

        <Card>
          <ErrorBlock title="兼容问题类空态" status="systemCompatibility" />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ErrorBlockScreen;
