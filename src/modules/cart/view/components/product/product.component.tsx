import { View } from 'react-native';
import { CartProduct } from '@cart/model/cart-product.model';
import { Image } from '@common/view/components/image/image.component';
import { Text } from '@common/view/components/text/text.component';
import { formatCurrency } from '@common/utils/format-currency/format-currency.util';

import { QuantityActions } from '../quantity-actions/quantity-actions.component';
import { styles } from './product.style';

type ProductProps = {
  product: CartProduct;
  onIncreaseProduct: (productId: string) => void;
  onDecreaseProduct: (productId: string) => void;
};

export function Product({
  product,
  onIncreaseProduct,
  onDecreaseProduct,
}: ProductProps) {
  function increaseProduct() {
    onIncreaseProduct(product.id);
  }

  function decreaseProduct() {
    onDecreaseProduct(product.id);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} src={product.image} />
      <View style={styles.content}>
        <Text style={styles.productName} ellipsis>
          {product.name}
        </Text>
        <View style={styles.priceAndQuantityContainer}>
          <Text style={styles.price}>{formatCurrency(product.price)}</Text>
          <QuantityActions
            quantity={product.quantity}
            onIncrease={increaseProduct}
            onDecrease={decreaseProduct}
          />
        </View>
      </View>
    </View>
  );
}
