import { ActivityIndicator, FlatList } from 'react-native';
import { SafeArea } from '@common/view/components/safe-area/safe-area.component';
import { useProductsViewModel } from '@products/viewmodel/products/products.viewmodel';
import { Product } from '@products/view/components/product/product.component';
import type { Product as ProductModel } from '@products/model/product.model';

import { styles } from './products.style';

const PRODUCT_LIST_COLUMNS = 2;

export function ProductsScreen() {
  const productsViewModel = useProductsViewModel();

  if (productsViewModel.loading) {
    return (
      <SafeArea style={styles.container}>
        <ActivityIndicator />
      </SafeArea>
    );
  }

  if (productsViewModel.error) {
    return (
      <SafeArea style={styles.container}>
        <ActivityIndicator />
      </SafeArea>
    );
  }

  function renderProduct(product: ProductModel) {
    const isInCart = productsViewModel.isInCart(product.id);

    return (
      <Product
        product={product}
        onAddToCart={productsViewModel.addToCart}
        onRemoveFromCart={productsViewModel.removeFromCart}
        isInCart={isInCart}
      />
    );
  }

  return (
    <SafeArea style={styles.container}>
      <FlatList
        data={productsViewModel.products}
        renderItem={({ item: product }) => renderProduct(product)}
        numColumns={PRODUCT_LIST_COLUMNS}
        style={styles.productList}
        columnWrapperStyle={styles.productListColumn}
        contentContainerStyle={styles.productListContent}
      />
    </SafeArea>
  );
}
