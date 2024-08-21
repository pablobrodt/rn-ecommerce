import { FlatList, View } from 'react-native';
import { CartProduct } from '@cart/model/cart-product.model';
import { Product } from '@cart/view/components/product/product.component';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import { useZustandCartStore } from '@cart/store/cart/zustand-cart.store';
import { SafeArea } from '@common/view/components/safe-area/safe-area.component';
import { Text } from '@common/view/components/text/text.component';

import { styles } from './cart.style';

function Separator() {
  return <View style={styles.separator} />;
}

export function CartScreen() {
  const cartStore = useZustandCartStore();
  const cartViewModel = useCartViewModel(cartStore);

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

  if (cartViewModel.productCount < 1) {
    return (
      <SafeArea style={styles.container}>
        <Text style={styles.noProductsAdded}>Nenhum produto adicionado</Text>
      </SafeArea>
    );
  }

  return (
    <SafeArea style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.quantityText}>
          {cartViewModel.productCount.toString()} produtos adicionados:
        </Text>
        <FlatList
          data={cartViewModel.products}
          renderItem={({ item }) => renderProduct(item)}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </SafeArea>
  );
}
