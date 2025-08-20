import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, Space, Select } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const EmptyStateExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <Card>
      <Space>
        <Text style={styles.title}>空数据状态</Text>

        {/* 无数据状态 */}
        <Select
          type={Select.Type.radio}
          options={[]}
          title="无数据选择器"
          visible={visible1}
          onPressOverlay={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          dataEmptyText="暂无可选项"
        />

        <Button onPress={() => setVisible1(true)}>打开无数据选择器</Button>

        {/* 搜索无结果状态 */}
        <Select
          type={Select.Type.radio}
          options={[
            { label: '苹果', value: 'apple' },
            { label: '香蕉', value: 'banana' },
          ]}
          title="搜索测试"
          visible={visible2}
          showSearch
          onPressOverlay={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
          searchEmptyText="没有找到匹配的结果，请尝试其他关键词"
          filterOption={(inputValue, option) => {
            if (typeof option.label === 'string') {
              return option.label
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            }
            return true;
          }}
        />

        <Button onPress={() => setVisible2(true)}>
          {'打开搜索测试（试试搜索"橙子"）'}
        </Button>

        <Text style={styles.hint}>
          {'提示：在搜索框中输入"橙子"可以看到搜索无结果的状态'}
        </Text>
      </Space>
    </Card>
  );
};

export default EmptyStateExample;
