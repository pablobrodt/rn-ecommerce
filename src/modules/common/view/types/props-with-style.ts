import type { StyleProp, ViewProps } from 'react-native';

export type PropsWithStyle<TStyleProps = ViewProps> = {
  style?: StyleProp<TStyleProps>;
};
