import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import { Button } from '@common/view/components/button/button.component';
import { Colors } from '@common/view/constants/colors';
import { CartShopping } from '@assets/icons';
import { CartRoute } from '@cart/view/route/cart.route';

import { styles } from './cart-button.style';

type CartButtonProps = {
  navigation: any;
};

export function CartButton({ navigation }: CartButtonProps) {
  const [hasNewProducts, setHasNewProducts] = useState(false);
  const totalProducts = useRef<number>(0);
  const cartViewModel = useCartViewModel();

  useEffect(() => {
    if (totalProducts.current < cartViewModel.productCount) {
      setHasNewProducts(true);
    }
    totalProducts.current = cartViewModel.productCount;
  }, [cartViewModel.productCount]);

  function goToCart() {
    navigation.navigate(CartRoute.CART);
    setHasNewProducts(false);
  }

  function renderNewProductsIndicator() {
    if (hasNewProducts) {
      return <View style={styles.indicator} />;
    }
  }

  return (
    <Button onPress={goToCart} style={styles.container}>
      <CartShopping style={styles.icon} color={Colors.HIGHLIGHT_REGULAR} />
      {renderNewProductsIndicator()}
    </Button>
  );
}
