/**
 * inline: true
 * background: '#f6f7f9'
 */
import React, { useMemo, useState, useRef, useCallback } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import * as icons from '../../../icons';
import Clipboard from '@react-native-clipboard/clipboard';
import Input from '../../Input';
import debounce from 'lodash/debounce';
import { success as showSuccessNotification } from '../../Notification/NotificationInstance';

const ITEM_MARGIN = 20;

export default ({ NUM_COLUMNS = 6 }) => {
  const [searchText, setSearchText] = useState('');

  const components = useMemo<[string, any][]>(() => {
    return Object.entries(icons).sort(([nameA], [nameB]) =>
      nameA.localeCompare(nameB)
    );
  }, []);

  const filteredComponents = useMemo(() => {
    if (!searchText) {
      return components;
    }
    const lowerCaseSearchText = searchText.toLowerCase();
    return components.filter(([name]) =>
      name.toLowerCase().includes(lowerCaseSearchText)
    );
  }, [components, searchText]);

  const copyToClipboard = (name: string) => {
    Clipboard.setString(`<${name} />`);
    showSuccessNotification({
      title: '拷贝成功',
      description: `已拷贝: <${name} />`,
      duration: 2000,
    });
  };

  const renderIconItem = ({ item }: { item: [string, any] }) => {
    const [name, Component] = item;
    return (
      <TouchableOpacity
        onPress={() => copyToClipboard(name)}
        style={styles.iconWrapper}
      >
        <Component size={36} />
        <Text style={styles.iconNameText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const debouncedSetSearchText = useRef(
    debounce((text: string) => {
      setSearchText(text);
    }, 300)
  ).current;

  const handleSearchTextChange = useCallback(
    (text: string) => {
      debouncedSetSearchText(text);
    },
    [debouncedSetSearchText]
  );

  return (
    <View style={styles.pageContainer}>
      <Input
        style={styles.searchInput}
        placeholder="搜索图标..."
        onChange={handleSearchTextChange}
      />
      <FlatList
        data={filteredComponents}
        renderItem={renderIconItem}
        keyExtractor={([name]) => name}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  searchInput: {
    marginVertical: ITEM_MARGIN,
  },
  container: {
    gap: ITEM_MARGIN,
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
    padding: 4,
  },
  columnWrapper: {
    gap: ITEM_MARGIN,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingVertical: 20,
  },
  iconWrapper: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconNameText: {
    marginTop: 16,
  },
});
