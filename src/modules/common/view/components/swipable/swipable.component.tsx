import type { PropsWithChildren } from 'react';
import RNGHSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

type SwipableProps = {
  renderRightAction: () => React.JSX.Element;
} & PropsWithChildren;

export function Swipable({ children, renderRightAction }: SwipableProps) {
  return (
    <RNGHSwipeable renderRightActions={renderRightAction}>
      {children}
    </RNGHSwipeable>
  );
}
