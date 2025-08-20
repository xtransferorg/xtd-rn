import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from '@xrnjs/ui';
import * as icons from '../../../icons';

export default () => {
  const [fillColor, setFillColor] = useState('red');
  const [iconName, setIconName] = useState('IconXAdd1');

  const DynamicIconComponent =
    icons[(iconName || '').replace(/[</>\s]/g, '') as keyof typeof icons];

  return (
    <View style={styles.container}>
      <Input
        style={styles.colorInput}
        placeholder="输入颜色 (如: red, #FF0000)"
        value={fillColor}
        onChange={setFillColor}
      />
      <Input
        style={styles.iconNameInput}
        placeholder="输入图标名称 (如: IconXAdd1)"
        value={iconName}
        onChange={setIconName}
      />
      <View style={styles.dynamicIconWrapper}>
        {DynamicIconComponent ? (
          <DynamicIconComponent size={48} fillColor={fillColor} />
        ) : iconName ? (
          <Text style={styles.notFoundText}>未找到图标: {iconName}</Text>
        ) : (
          <Text style={styles.placeholderText}>请在上方输入图标名称</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f7f9',
  },
  colorInput: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconNameInput: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  dynamicIconWrapper: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  notFoundText: {
    color: 'red',
    fontSize: 16,
  },
  placeholderText: {
    color: 'gray',
    fontSize: 16,
  },
});
