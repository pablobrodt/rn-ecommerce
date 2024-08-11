import { Button } from '@common/view/components/button/button.component';
import { Colors } from '@common/view/constants/colors';
import type { PropsWithStyle } from '@common/view/types/props-with-style';

import { styles } from './cart-action-button.style';
import { CartArrowDown, CartArrowUp } from '@assets/icons';
import { PropsWithTestId } from '@common/view/types/props-with-test-id';

type CartActionButtonProps = {
  isInCart: boolean;
  onPress: () => void;
} & PropsWithStyle &
  PropsWithTestId;

export function CartActionButton({
  style,
  isInCart,
  testId,
  onPress,
}: CartActionButtonProps) {
  const Icon = isInCart ? CartArrowUp : CartArrowDown;
  const backgroundColor = isInCart
    ? Colors.DANGER_REGULAR
    : Colors.SUCCESS_REGULAR;

  function handleOnPress() {
    onPress();
  }

  return (
    <Button
      style={[styles.container, style, { backgroundColor: backgroundColor }]}
      onPress={handleOnPress}
      testId={testId}
    >
      <Icon style={styles.icon} color={Colors.WHITE} />
    </Button>
  );
}
