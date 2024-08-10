import type { StyleProp, ViewStyle } from 'react-native';

export type PropsWithStyle<TStyleProps = ViewStyle> = {
  style?: StyleProp<TStyleProps>;
};
