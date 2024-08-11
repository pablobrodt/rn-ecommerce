import { View } from 'react-native';
import { Button } from '@common/view/components/button/button.component';
import { Text } from '@common/view/components/text/text.component';

import { styles } from './quantity-actions.style';

type QuantityActionsProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantityActions({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityActionsProps) {
  const quantityString = quantity.toString().padStart(2, '0');

  function handleOnIncrease() {
    onIncrease();
  }

  function handleOnDecrease() {
    onDecrease();
  }

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={handleOnDecrease}>
        <Text style={styles.buttonText}>-</Text>
      </Button>
      <Text style={styles.quantity} ellipsis>
        {quantityString}
      </Text>
      <Button style={styles.button} onPress={handleOnIncrease}>
        <Text style={styles.buttonText}>+</Text>
      </Button>
    </View>
  );
}
