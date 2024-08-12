import { FlatList, View } from 'react-native';
import { CartProduct } from '@cart/model/cart-product.model';
import { Product } from '@cart/view/components/product/product.component';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import { SafeArea } from '@common/view/components/safe-area/safe-area.component';
import { Text } from '@common/view/components/text/text.component';

import { styles } from './cart.style';

function Separator() {
  return <View style={styles.separator} />;
}

export function CartScreen() {
  const cartViewModel = useCartViewModel();

  function renderProduct(product: CartProduct) {
    return (
      <Product
        product={product}
        onIncreaseProduct={cartViewModel.increaseProduct}
        onDecreaseProduct={cartViewModel.decreaseProduct}
        onRemoveProduct={cartViewModel.removeProduct}
      />
    );
  }

  return (
    <SafeArea>
      <Text>{cartViewModel.productCount.toString()} produtos na sacola</Text>
      <FlatList
        data={cartViewModel.products}
        renderItem={({ item }) => renderProduct(item)}
        style={styles.container}
        ItemSeparatorComponent={Separator}
      />
    </SafeArea>
  );
}
