import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, Space, Select, Toast } from '@xrnjs/ui';
import { IconXChina1, IconPPBrazil1 } from '../../../icons/index';
import Card from '_global/Card';
import { styles } from './style';

const countries = [
  {
    label: '中国',
    value: 'china',
    subLabel: 'China',
    contentLabel: 'CN',
    prefixIcon: <IconXChina1 size={24} />,
  },
  {
    label: '美国',
    value: 'usa',
    subLabel: 'United States',
    contentLabel: 'US',
    prefixIcon: 'https://flagcdn.com/w40/us.png',
  },
  {
    label: '日本',
    value: 'japan',
    subLabel: 'Japan',
    contentLabel: 'JP',
    prefixIcon: 'https://flagcdn.com/w40/jp.png',
  },
  {
    label: '英国',
    value: 'uk',
    subLabel: 'United Kingdom',
    contentLabel: 'UK',
    prefixIcon: 'https://flagcdn.com/w40/gb.png',
  },
  {
    label: '巴西（禁用）',
    value: 'brazil',
    subLabel: 'Brazil',
    contentLabel: 'BR',
    prefixIcon: <IconPPBrazil1 size={24} />,
    disabled: true,
  },
];

const RedirectSelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>();

  const onChange = (value: string | string[]) => {
    const countryValue = value as string;
    setSelectedCountry(countryValue);
    const country = countries.find((c) => c.value === countryValue);
    Toast({
      position: 'middle',
      message: `选择了: ${country?.label}`,
      forbidPress: true,
    });
    setVisible(false);
  };

  const onDisabledPress = (option: any) => {
    Toast({
      position: 'middle',
      message: `${option.label} 暂不可选`,
      forbidPress: true,
    });
  };

  return (
    <Card>
      <Space>
        <Text style={styles.title}>跳转类型选择</Text>
        <Text style={styles.hint}>点击选项会立即选中并关闭弹窗</Text>

        <Select
          type={Select.Type.redirect}
          options={countries}
          title="选择国家"
          value={selectedCountry}
          visible={visible}
          showSearch
          onPressOverlay={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onChange={onChange}
          onDisabledPress={onDisabledPress}
          currencySelectProps={{
            imageStyle: styles.imageStyle,
          }}
        />

        <Button onPress={() => setVisible(true)}>
          选择国家{' '}
          {selectedCountry
            ? `(当前: ${
                countries.find((c) => c.value === selectedCountry)?.label
              })`
            : ''}
        </Button>
      </Space>
    </Card>
  );
};

export default RedirectSelectExample;
