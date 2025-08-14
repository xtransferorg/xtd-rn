import React from 'react';
import { IconMAExpand1 } from '../../icons/index';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { xdateToData } from './calendars/interface';
import { createHeaderStyle } from './styles/Calendar.style';
import { HeaderProps } from './interface';
import { formatter, dayjsConvertLang } from './constant';
import Locale from '../Locale';
import { useTheme } from '../Theme/Theme';

export const Header = ({ date, onHeaderTouch }: HeaderProps) => {
  const themeToken = useTheme();
  const styles = createHeaderStyle(themeToken);

  const lang = Locale.useLangType();

  return (
    <TouchableOpacity
      onPress={() => onHeaderTouch?.(xdateToData(date.format(formatter)))}
    >
      <View style={StyleSheet.flatten([styles.container])}>
        <Text style={StyleSheet.flatten([styles.title])}>
          {date.locale(dayjsConvertLang[lang]).format('MMMM YYYY')}
        </Text>
        <IconMAExpand1
          fillColor={themeToken['--color-text-6']}
          size={themeToken['--font-size-1']}
          style={StyleSheet.flatten([styles.titleIcon])}
        />
      </View>
    </TouchableOpacity>
  );
};
