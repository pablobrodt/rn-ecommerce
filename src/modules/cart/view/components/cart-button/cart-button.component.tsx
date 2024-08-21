import { View } from 'react-native';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import { Button } from '@common/view/components/button/button.component';
import { Colors } from '@common/view/constants/colors';
import { Text } from '@common/view/components/text/text.component';
import { CartShopping } from '@assets/icons';
import { CartRoute } from '@cart/view/route/cart.route';
import { useZustandCartStore } from '@cart/store/cart/zustand-cart.store';

import { styles } from './cart-button.style';

type CartButtonProps = {
  navigation: any;
};

export function CartButton({ navigation }: CartButtonProps) {
  const zustandCartStore = useZustandCartStore();
  const cartViewModel = useCartViewModel(zustandCartStore);

  function goToCart() {
    navigation.navigate(CartRoute.CART);
  }

  function renderProductCount() {
    if (cartViewModel.productCount > 0) {
      return (
        <View style={styles.indicator}>
          <Text style={styles.productQuantity} ellipsis>
            {cartViewModel.productCount.toString()}
          </Text>
        </View>
      );
    }
  }

  return (
    <Button onPress={goToCart} style={styles.container}>
      <CartShopping style={styles.icon} color={Colors.HIGHLIGHT_REGULAR} />
      {renderProductCount()}
    </Button>
  );
}
