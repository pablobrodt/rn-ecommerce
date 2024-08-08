import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './safe-area.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type SafeAreaProps = PropsWithChildren & PropsWithStyle;

export function SafeArea({ children, style }: SafeAreaProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
