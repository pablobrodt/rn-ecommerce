import { type TextStyle, Text as RNText } from 'react-native';

import { styles } from './text.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type TextProps = {
  children: string | string[];
  ellipsis?: boolean;
} & PropsWithStyle<TextStyle>;

export function Text({ children, style, ellipsis }: TextProps) {
  const numberOfLines = ellipsis ? 1 : undefined;
  const ellipsizeMode = ellipsis ? 'tail' : undefined;

  return (
    <RNText
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </RNText>
  );
}
