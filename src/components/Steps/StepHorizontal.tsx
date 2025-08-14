import React from 'react';
import { StyleSheet, View } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import { StepProps } from './interface';
import createStyle from './styles/step-horizontal.style';
import { useTheme } from '../Theme';

const StepHorizontal: React.VFC<
  StepProps & {
    isFirstChild: boolean;
    isLastChild: boolean;
    collapse: boolean;
  }
> = ({ status, title, description, isFirstChild, isLastChild, collapse }) => {
  const token = useTheme();
  const styles = createStyle(token);
  const renderCollapseElement = () => {
    const statusBackgroundColor =
      status === 'wait'
        ? styles.waitCollapsedLineBackgroundColor
        : styles.activeBackgroundColor;

    return (
      <View
        style={StyleSheet.flatten([
          styles.collapsedLine,
          statusBackgroundColor,
          !isLastChild && styles.collapsedLineGap,
        ])}
      />
    );
  };

  const renderContent = () => {
    const statusBackgroundColor =
      status === 'wait'
        ? styles.waitBackgroundColor
        : styles.activeBackgroundColor;

    const dotStyle = StyleSheet.flatten([styles.dot, statusBackgroundColor]);

    return (
      <View style={styles.wrapper}>
        <View style={styles.indicator}>
          <View
            style={StyleSheet.flatten([
              styles.line,
              !isFirstChild && statusBackgroundColor,
            ])}
          />
          <View>
            <View style={dotStyle} />
          </View>
          <View
            style={StyleSheet.flatten([
              styles.line,
              !isLastChild && statusBackgroundColor,
            ])}
          />
        </View>
        <View>
          {renderTextLikeJSX(
            title,
            StyleSheet.flatten([
              styles.title,
              status === 'wait' && {
                color: styles.description.color,
              },
            ])
          )}
        </View>
        <View>
          {renderTextLikeJSX(
            description,
            StyleSheet.flatten([
              styles.description,
              status !== 'wait' && {
                color: styles.title.color,
              },
            ])
          )}
        </View>
      </View>
    );
  };

  return collapse ? renderCollapseElement() : renderContent();
};

export default StepHorizontal;
