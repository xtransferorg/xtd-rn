import React, { ReactNode } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';

interface TouchableViewProps extends TouchableWithoutFeedbackProps {
  contentView?: ViewProps;
  children?: ReactNode;
}

const TouchableView = (props: TouchableViewProps) => {
  const { contentView, children, ...resPorps } = props;

  return (
    <TouchableWithoutFeedback {...resPorps}>
      <View
        {...contentView}
        style={StyleSheet.flatten([
          { alignSelf: 'flex-start' },
          contentView?.style,
        ])}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TouchableView;
