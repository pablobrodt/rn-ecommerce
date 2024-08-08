import type { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './button.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type ButtonProps = {
  onPress: () => void;
} & PropsWithChildren &
  PropsWithStyle;

export function Button({ children, style, onPress }: ButtonProps) {
  function handlePress() {
    onPress();
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      {children}
    </TouchableOpacity>
  );
}
