import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  AutoComplete,
  AutoCompleteOption,
  AutoCompleteRef,
  FloatingLayer,
  Field,
  Button,
  Space,
} from '@xrnjs/ui';
import styles from './style';

export default () => {
  // 基础使用状态
  const [basicOptions, setBasicOptions] = useState<AutoCompleteOption[]>([]);

  // 状态演示选项
  const [statusOptions] = useState<AutoCompleteOption[]>([
    { value: '选项1' },
    { value: '选项2' },
    { value: '选项3' },
  ]);

  // 弹出位置选项
  const [placementOptions] = useState<AutoCompleteOption[]>([
    { value: '选项1' },
    { value: '选项2' },
    { value: '选项3' },
  ]);

  // 受控组件状态
  const [controlledValue, setControlledValue] = useState('');
  const [controlledOptions] = useState<AutoCompleteOption[]>([
    { value: '预设选项1' },
    { value: '预设选项2' },
    { value: '预设选项3' },
  ]);

  // 高亮演示状态
  const [highlightOptions, setHighlightOptions] = useState<
    AutoCompleteOption[]
  >([]);

  // Ref 演示状态
  const autoCompleteRef = useRef<AutoCompleteRef>(null);
  const [refOptions, setRefOptions] = useState<AutoCompleteOption[]>([]);

  // 高级功能状态
  const [advancedOptions, setAdvancedOptions] = useState<AutoCompleteOption[]>(
    []
  );
  const [showFloatingLayer, setShowFloatingLayer] = useState(false);
  const maxHeight = Dimensions.get('window').height - 198;

  // 基础使用处理函数
  const handleBasicChange = (value: string) => {
    console.log('输入值变化:', value);
    if (!value) {
      return setBasicOptions([]);
    }

    const suggestions = Array.from({ length: 5 }, (_, i) => ({
      value: `${value}_选项${i + 1}`,
    }));
    setBasicOptions(suggestions);
  };

  const handleBasicSelect = (value: string, option: AutoCompleteOption) => {
    console.log('选中项:', { value, option });
  };

  // 受控组件处理函数
  const handleControlledChange = (newValue: string) => {
    setControlledValue(newValue);
    console.log('受控组件值变化:', newValue);
  };

  const handleControlledClear = () => {
    setControlledValue('');
  };

  const handleSetControlledValue = () => {
    setControlledValue('程序设置的值');
  };

  // 高亮演示处理函数
  const handleHighlightChange = (value: string) => {
    if (!value) {
      return setHighlightOptions([]);
    }

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

    setHighlightOptions(suggestions);
  };

  // Ref 演示处理函数
  const handleRefChange = (value: string) => {
    if (!value) return setRefOptions([]);

    const suggestions = Array.from({ length: 5 }, (_, i) => ({
      value: `${value}_ref选项${i + 1}`,
    }));
    setRefOptions(suggestions);
  };

  const handleRefFocus = () => {
    autoCompleteRef.current?.focus();
  };

  const handleRefBlur = () => {
    autoCompleteRef.current?.blur();
  };

  const handleRefClear = () => {
    autoCompleteRef.current?.clear();
  };

  // 高级功能处理函数
  const handleAdvancedChange = (value: string) => {
    if (!value) {
      return setAdvancedOptions([]);
    }

    const suggestions = Array.from({ length: 8 }, (_, i) => ({
      value: `高级选项${i + 1}`,
    }));
    setAdvancedOptions(suggestions);
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Space>
        {/* 状态演示 */}
        <View style={[styles.demoContainer, { zIndex: 1000 }]}>
          {/* 基础使用 */}
          <View style={[styles.demoSection, { zIndex: 1000 }]}>
            <Text style={styles.sectionTitle}>基础使用</Text>
            <Text style={styles.sectionDescription}>
              最基本的自动补全功能，支持清除、焦点事件等
            </Text>
            <AutoComplete
              placeholder="请输入内容"
              allowClear
              options={basicOptions}
              onChange={handleBasicChange}
              onSelect={handleBasicSelect}
              onVisibleChange={(isOpen) => {
                console.log('下拉框状态变化:', isOpen);
              }}
              onFocus={() => console.log('获得焦点')}
              onBlur={() => console.log('失去焦点')}
              onClear={() => console.log('清空内容')}
            />
          </View>
          <Text style={styles.sectionTitle}>状态演示</Text>

          <View style={[styles.demoSection, { zIndex: 990 }]}>
            <Text style={styles.sectionDescription}>错误状态</Text>
            <AutoComplete
              placeholder="错误状态示例"
              options={statusOptions}
              status="error"
            />
          </View>

          <View style={[styles.demoSection, { zIndex: 980 }]}>
            <Text style={styles.sectionDescription}>禁用状态</Text>
            <AutoComplete
              placeholder="禁用状态示例"
              options={statusOptions}
              disabled
              value="禁用的输入框"
            />
          </View>

          {/* 高亮匹配内容 */}
          <View style={[styles.demoSection, { zIndex: 970 }]}>
            <Text style={styles.sectionTitle}>高亮匹配内容</Text>
            <Text style={styles.sectionDescription}>
              输入内容时会高亮显示匹配的部分（请输入 xt）
            </Text>
            <AutoComplete
              placeholder="输入内容查看高亮效果"
              options={highlightOptions}
              onChange={handleHighlightChange}
              highlighted
              allowClear
            />
          </View>

          {/* 弹出位置 */}
          <View style={[styles.demoContainer, { zIndex: 960 }]}>
            <Text style={styles.sectionTitle}>弹出位置</Text>

            <View style={styles.demoSection}>
              <Text style={styles.sectionDescription}>默认向下弹出</Text>
              <AutoComplete
                placeholder="默认向下弹出"
                options={placementOptions}
                placement="bottom"
              />
            </View>

            <View style={[styles.demoSection, styles.placementTopContainer]}>
              <Text style={styles.sectionDescription}>向上弹出</Text>
              <AutoComplete
                placeholder="向上弹出"
                options={placementOptions}
                placement="top"
              />
            </View>
          </View>

          {/* 受控组件 */}
          <View style={[styles.demoContainer, { zIndex: 950 }]}>
            <Text style={styles.sectionTitle}>受控组件</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSetControlledValue}
              >
                <Text style={styles.buttonText}>设置值</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDanger}
                onPress={handleControlledClear}
              >
                <Text style={styles.buttonText}>清空</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.demoSection}>
              <Text style={styles.sectionDescription}>
                通过 value 和 onChange 控制组件状态
              </Text>
              <Text style={styles.currentValueText}>
                当前值: {controlledValue || '(空)'}
              </Text>
              <AutoComplete
                placeholder="受控组件示例"
                value={controlledValue}
                options={controlledOptions}
                onChange={handleControlledChange}
              />
            </View>
          </View>

          {/* Ref 使用 */}
          <View style={[styles.demoContainer, { zIndex: 940 }]}>
            <Text style={styles.sectionTitle}>Ref 使用</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonSuccess}
                onPress={handleRefFocus}
              >
                <Text style={styles.buttonText}>聚焦</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonWarning}
                onPress={handleRefBlur}
              >
                <Text style={styles.buttonText}>失焦</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDanger}
                onPress={handleRefClear}
              >
                <Text style={styles.buttonText}>清空</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.demoSection}>
              <Text style={styles.sectionDescription}>
                通过 ref 可以调用组件的方法
              </Text>
              <AutoComplete
                ref={autoCompleteRef}
                placeholder="Ref 示例"
                options={refOptions}
                onChange={handleRefChange}
              />
            </View>
          </View>

          {/* 高级功能 */}
          <View
            style={[
              styles.demoContainer,
              styles.lastContainer,
              { zIndex: 930 },
            ]}
          >
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
                      options={advancedOptions}
                      onChange={handleAdvancedChange}
                      placeholder="请输入内容"
                    />
                  </Field>
                </View>

                <View style={styles.floatingLayerField}>
                  <Field
                    label="自定义解决方案（红色边框为父视图）"
                    requiredMark
                  >
                    <AutoComplete
                      style={styles.customAutoComplete}
                      highlighted
                      allowClear
                      options={advancedOptions}
                      onChange={handleAdvancedChange}
                      placeholder="请输入内容"
                    />
                  </Field>
                </View>
              </FloatingLayer>
            </View>
          </View>
        </View>
      </Space>
    </ScrollView>
  );
};
