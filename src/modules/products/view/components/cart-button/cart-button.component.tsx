import { Button } from '@common/view/components/button/button.component';
import { Text } from '@common/view/components/text/text.component';
import { PropsWithStyle } from '@common/view/types/props-with-style';

import { styles } from './cart-button.style';

type CartButtonProps = {
  children: string | string[];
  onPress: () => void;
} & PropsWithStyle;

export function CartButton({ children, style, onPress }: CartButtonProps) {
  function handleOnPress() {
    onPress();
  }

  return (
    <Button style={[styles.container, style]} onPress={handleOnPress}>
      <Text style={styles.text}>{children}</Text>
    </Button>
  );
}
