import { type TextStyle, Text as RNText } from 'react-native';

import { styles } from './text.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type TextProps = {
  children: string | string[];
} & PropsWithStyle<TextStyle>;

export function Text({ children, style }: TextProps) {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
}
