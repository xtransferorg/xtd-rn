import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AutoComplete, AutoCompleteOption } from '@xrnjs/ui';
import styles from './style';

const HighlightDemo = () => {
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  const handleChange = (value: string) => {
    if (!value) {
      return setOptions([]);
    }

    // 生成包含高亮匹配的选项
    const suggestions = [
      'xtrfr',
      'xtrfr.cn',
      'xtrfr.com',
      'xtransfer',
      'xtransfer.cn',
      'xtransfer.com',
    ]
      .filter((item) => item.includes(value.toLowerCase()))
      .map((item) => ({ value: item }));

    setOptions(suggestions);
  };

  return (
    <View style={{ zIndex: 8 }}>
      <Text style={styles.sectionTitle}>高亮匹配内容</Text>
      <Text style={styles.sectionDescription}>
        输入内容时会高亮显示匹配的部分（请输入 xt）
      </Text>
      <AutoComplete
        placeholder="输入内容查看高亮效果"
        options={options}
        onChange={handleChange}
        highlighted
        allowClear
      />
    </View>
  );
};

export default HighlightDemo;
