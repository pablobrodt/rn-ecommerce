import { View } from 'react-native';
import { Image } from '@common/view/components/image/image.component';
import { Text } from '@common/view/components/text/text.component';
import { formatCurrency } from '@common/utils/format-currency/format-currency.util';
import type { Product } from '@products/model/product.model';

import { CartActionButton } from '../cart-action-button/cart-action-button.component';
import { styles } from './product.style';

type ProductProps = {
  product: Product;
  isInCart: boolean;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
};

export function Product({
  product,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
}: ProductProps) {
  const cartActionButtonTestId = `product-${product.id}-cart-action`;

  function handlePress() {
    if (!isInCart) {
      onAddToCart(product);
      return;
    }

    onRemoveFromCart(product.id);
  }

  function renderCardButton() {
    return (
      <CartActionButton
        isInCart={isInCart}
        style={styles.button}
        onPress={handlePress}
        testId={cartActionButtonTestId}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Image src={product.image} style={styles.image} />
      <Text ellipsis style={styles.name}>
        {product.name}
      </Text>
      <Text style={styles.price}>{formatCurrency(product.price)}</Text>
      {renderCardButton()}
    </View>
  );
}
