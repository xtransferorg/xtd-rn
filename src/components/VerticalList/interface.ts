import { StyleProp, ViewStyle } from 'react-native';

export interface VerticalListItemBase {
  key?: React.Key;
  disabled?: boolean;
  onPress?: () => void;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  content?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleSuffix?: React.ReactNode;
  titleStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  divider?: boolean | React.ReactNode;
  titleWrapperStyle?: StyleProp<ViewStyle>;
}

export type VerticalListItemProps =
  | VerticalListItemBase
  | VerticalListItemBase[];

export interface VerticalListProps {
  gap?: number;
  style?: StyleProp<ViewStyle>;
  data: VerticalListItemProps[];
  divider?: boolean | React.ReactNode;
  autoCollapse?: boolean;
  collapseKeepingCount?: number;
}
