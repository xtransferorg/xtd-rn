import React, { useState } from 'react';
import {
  Descriptions,
  Space,
  DescriptionsItem,
  Uploader,
  UploadFileTypes,
  FloatingLayer,
  Button,
} from '@xrnjs/ui';
import styles from './style';
import Card from '_global/Card';
import { ScrollView, Text, View } from 'react-native';

// DEMO 数据制造
const items1: DescriptionsItem[] = [1, 2, 3].map((v) => ({
  title: `Title ${v}`,
  content: `This is content ${v} 长按复制`,
}));
const items2: DescriptionsItem[] = [
  {
    title: 'contract date',
    content: '2025-03-18',
  },
  {
    title: 'English name of the buyer',
    content: 'mingxing202530495828495',
  },
  {
    title: 'Trading countries/regions',
    content: 'Angola',
  },
  {
    title: 'Expected withdrawal method',
    content: '结汇提现',
  },
  {
    title: 'title',
    content: 'long long long long long long long long long long2',
  },
  {
    title: 'cortocortocorto corto',
    content:
      '· Esta cuenta solo acepta pagos en naira nigeriana (NGN) de compradores ubicados en Nigeria. Por favor, verifica con tu comprador que su método de pago, moneda y región sean compatibles. [Esta cuenta no acepta transferencias bancarias internacionales].',
  },
  {
    title: 'short short',
    content: '1',
  },
  {
    title: (
      <Text style={{ flex: 1 }}>组件 title title title title title title</Text>
    ),
    content: (
      <Text style={{ flex: 1 }}>
        组件 content content content content content content
      </Text>
    ),
  },
];
const items3 = [
  ...items1,
  {
    title: '自定义内容为上传组件',
    content: (
      <View style={styles.customerContent}>
        <Uploader
          uploadFileType={[UploadFileTypes.Image]}
          // title="新增选填图片上传"
          attachmentType="image"
          // description="这是一个描述信息， 可配置"
          tip="上传图片"
          maxCount={5}
          onClickIcon={() => {
            console.log('screen', '点击icon的回调');
          }}
          onChange={(file: any) => {
            console.log('screen', file);
          }}
          onPreviewFile={(uri: any) => {
            // 跳转到PDF预览页面
            console.log('screen', uri);
          }}
          useContainerWidth
        />
      </View>
    ),
  },
];

const item4 = [
  {
    content:
      '1. 货物贸易企业的所有收款账户仅支持用于贵司收取实物贸易项下海外买家支付的货款；服务贸易企业的所有收款账户仅支持用于贵司收取海外买家支付的服务费用；',
  },
  {
    content:
      '2. 货物贸易企业的所有收款账户不支持收取任何带有服务性质的款项（如翻译费、设计费、咨询费、佣金等）；服务贸易企业的所有收款账户不支持收取任何带有实物性质的款项（如电视、建材、玩具等）；',
  },
  {
    content:
      '3. 所有收款账户不支持收取或支付任何与伊朗、叙利亚、北朝鲜、古巴、俄罗斯、白俄罗斯、缅甸、克里米亚、塞瓦斯托波尔、顿涅茨克、卢甘斯克、赫尔松和扎波罗热等地区的实体或个人相关的交易款项（如向上述所列地区的实体或个人支付款项、）包括不或接受上述所列地区实体或个人的委托进行代付；不收取来自上述所列地区的买家直接支付的货款或者是委托其他第三方（无论是否来自上述所列地区）进行代付的货款，以及不发货至上述所列地区等）。各银行禁止国家/地区不同，以公司最新运营通知为准。',
  },
  {
    content: '4. 不使用该账户收取来自吉尔吉斯斯坦、塔吉克斯坦、亚美尼亚的款项;',
  },
  {
    content:
      '5. 请勿将账户转让/赠与/出租/出借给任何第三人使用、代替他人收款、或协助/参与任何形式的洗钱等金融犯罪活动（如收取来路不明、性质不明的“代理费”，“佣金”，“薪资”等资金，或按照买家指示向任何他人个人银行账户转账，或按照买家指示向所谓的“供应商账户”转移资金）',
  },
  {
    content:
      '6. 银行及我司有权对该账户敏感外汇进行审核，收款人有义务配合提供资料以证明资金来源；如审核通过则可正常操作人民币结汇/转账，如有异常，我司有权拒绝；',
  },
  {
    content:
      '7. 如由买家以外的第三方付款，请和买家确认付款人和买家的关系，并提醒付款人在汇款时添加附言，附言需备注付款人和买家关系及Invoice No.。',
  },
];

const CollapseScreen = () => {
  const [floatingLayerVisible, setFloatingLayerVisible] = useState(false);

  return (
    <ScrollView>
      <Space>
        <Card title="基础用法" style={styles.wrap}>
          <Descriptions items={items1} title="测试标题" selectable />
        </Card>
        <Card title="不可收缩" style={styles.wrap}>
          <Descriptions
            items={items1}
            title="测试标题"
            expanded={false}
            selectable
          />
        </Card>
        <Card title="无头部" style={styles.wrap}>
          <Descriptions items={items1} selectable />
        </Card>
        <Card title="长内容" style={styles.wrap}>
          <Descriptions
            items={items2}
            title={
              '标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长'
            }
            selectable
          />
        </Card>
        <Card title="启用边框" style={styles.wrap}>
          <Descriptions items={items3} title="测试标题" bordered selectable />
        </Card>
        <Card title="横向布局" style={styles.wrap}>
          <Descriptions items={items1} title="测试标题" horizontal selectable />
          <Descriptions
            horizontal
            items={items2}
            title={
              '标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长'
            }
            selectable
          />
        </Card>

        <Card title="extra 配置额外内容" style={styles.wrap}>
          <Descriptions
            items={items2}
            extra={<Text>extra 展开&收起</Text>}
            title={
              '标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长'
            }
            selectable
          />
        </Card>
        <Card title="多个Descriptions" style={styles.wrap}>
          <View>
            <Descriptions
              items={items1}
              title={'测试标题'}
              style={styles.descriptionsBottom}
              defaultValue={false}
              selectable
            />

            <Descriptions
              items={items2}
              title={
                '标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长 标题也很长'
              }
              style={styles.descriptionsBottom}
              defaultValue={false}
              selectable
            />
            <Descriptions
              items={items3}
              title={'测试标题'}
              defaultValue={false}
              selectable
            />
          </View>
        </Card>

        <Card title="FloatingLayer中的Descriptions" style={styles.wrap}>
          <Button
            onPress={() => {
              setFloatingLayerVisible(true);
            }}
          >
            show FloatingLayer
          </Button>
          <FloatingLayer
            title={'FloatingLayer title'}
            visible={floatingLayerVisible}
            position="bottom"
            showConfirmButton={false}
            round
            onCancel={() => setFloatingLayerVisible(false)}
            footer={
              <Button
                onPress={() => {
                  setFloatingLayerVisible(false);
                }}
              >
                知道了
              </Button>
            }
          >
            <Descriptions items={item4} />
          </FloatingLayer>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CollapseScreen;
