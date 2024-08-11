import { View } from 'react-native';
import { Image } from '@common/view/components/image/image.component';
import { Text } from '@common/view/components/text/text.component';
import { formatCurrency } from '@common/utils/format-currency/format-currency.util';
import type { Product } from '@products/model/product.model';

import { CartButton } from '../cart-button/cart-button.component';
import { styles } from './product.style';

type ProductProps = {
  product: Product;
  onPress: (product: Product) => void;
};

export function Product({ product, onPress }: ProductProps) {
  function handlePress() {
    onPress(product);
  }

  function renderCardButton() {
    // TODO adicionar logica de verificacao no carrinho
    const isInCart = false;

    if (!isInCart) {
      return (
        <CartButton style={styles.button} onPress={handlePress}>
          +
        </CartButton>
      );
    }

    return (
      <CartButton style={styles.button} onPress={handlePress}>
        -
      </CartButton>
    );
  }

  return (
    <View style={styles.container}>
      <Image src={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{formatCurrency(product.price)}</Text>
      {renderCardButton()}
    </View>
  );
}
