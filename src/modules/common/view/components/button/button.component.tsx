import type { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './button.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';
import { PropsWithTestId } from '@common/view/types/props-with-test-id';

type ButtonProps = {
  onPress: () => void;
} & PropsWithChildren &
  PropsWithStyle &
  PropsWithTestId;

export function Button({ children, style, testId, onPress }: ButtonProps) {
  function handlePress() {
    onPress();
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={handlePress}
      testID={testId}
    >
      {children}
    </TouchableOpacity>
  );
}
