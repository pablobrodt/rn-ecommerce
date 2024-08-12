import { FlatList } from 'react-native';
import { SafeArea } from '@common/view/components/safe-area/safe-area.component';
import { Loader } from '@common/view/components/loader/loader.component';
import { Text } from '@common/view/components/text/text.component';
import { Button } from '@common/view/components/button/button.component';
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
        <Loader style={styles.loader} />
      </SafeArea>
    );
  }

  if (productsViewModel.error) {
    return (
      <SafeArea style={styles.container}>
        <Text style={styles.errorMessage}>
          Ocorreu um erro ao buscar os produtos.
        </Text>
        <Button
          style={styles.tryAgainButton}
          onPress={productsViewModel.getProducts}
        >
          <Text style={styles.tryAgainText}>Tentar Novamente</Text>
        </Button>
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
