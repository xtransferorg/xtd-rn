import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  AutoComplete,
  AutoCompleteOption,
  FloatingLayer,
  Field,
  Button,
} from '@xrnjs/ui';
import styles from './style';

const AdvancedDemo = () => {
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);
  const [showFloatingLayer, setShowFloatingLayer] = useState(false);
  const maxHeight = Dimensions.get('window').height - 198;

  const handleChange = (value: string) => {
    if (!value) {
      return setOptions([]);
    }

    // 生成更多选项来演示滚动
    const suggestions = Array.from({ length: 8 }, (_, i) => ({
      value: `高级选项${i + 1}`,
    }));
    setOptions(suggestions);
  };

  return (
    <View style={[styles.demoContainer, styles.lastContainer, { zIndex: 3 }]}>
      <Text style={styles.sectionTitle}>高级功能</Text>

      <View style={styles.demoSection}>
        <Text style={styles.sectionDescription}>
          在 FloatingLayer 中使用（解决 Android 滚动问题）
        </Text>
        <Button onPress={() => setShowFloatingLayer(true)}>
          打开 FloatingLayer 示例
        </Button>

        <FloatingLayer
          title="滚动问题演示"
          confirmButtonText="确定"
          visible={showFloatingLayer}
          useNative
          showCancelButton
          keyboardMargin={156}
          containerHeight={maxHeight}
          onCancel={() => setShowFloatingLayer(false)}
          onConfirm={() => setShowFloatingLayer(false)}
        >
          <View style={styles.floatingLayerContent}>
            <Field label="Android 滚动问题演示" requiredMark>
              <AutoComplete
                highlighted
                allowClear
                options={options}
                onChange={handleChange}
                placeholder="请输入内容"
              />
            </Field>
          </View>

          <View style={styles.floatingLayerField}>
            <Field label="自定义解决方案（红色边框为父视图）" requiredMark>
              <AutoComplete
                style={styles.customAutoComplete}
                highlighted
                allowClear
                options={options}
                onChange={handleChange}
                placeholder="请输入内容"
              />
            </Field>
          </View>
        </FloatingLayer>
      </View>
    </View>
  );
};

export default AdvancedDemo;
