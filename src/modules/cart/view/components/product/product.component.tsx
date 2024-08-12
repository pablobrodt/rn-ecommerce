import { View } from 'react-native';
import { CartProduct } from '@cart/model/cart-product.model';
import { Image } from '@common/view/components/image/image.component';
import { Text } from '@common/view/components/text/text.component';
import { formatCurrency } from '@common/utils/format-currency/format-currency.util';
import { Swipable } from '@common/view/components/swipable/swipable.component';
import { Button } from '@common/view/components/button/button.component';
import { Colors } from '@common/view/constants/colors';
import { Delete } from '@assets/icons';

import { QuantityActions } from '../quantity-actions/quantity-actions.component';
import { styles } from './product.style';

type ProductProps = {
  product: CartProduct;
  onIncreaseProduct: (productId: string) => void;
  onDecreaseProduct: (productId: string) => void;
  onRemoveProduct: (productId: string) => void;
};

export function Product({
  product,
  onIncreaseProduct,
  onDecreaseProduct,
  onRemoveProduct,
}: ProductProps) {
  function increaseProduct() {
    onIncreaseProduct(product.id);
  }

  function decreaseProduct() {
    onDecreaseProduct(product.id);
  }

  function removeProduct() {
    onRemoveProduct(product.id);
  }

  function renderRemoveFromCart() {
    return (
      <Button style={styles.removeProductButton} onPress={removeProduct}>
        <Delete style={styles.icon} color={Colors.WHITE} />
      </Button>
    );
  }

  return (
    <Swipable renderRightAction={renderRemoveFromCart}>
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
    </Swipable>
  );
}
