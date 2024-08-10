import { ActivityIndicator, FlatList } from 'react-native';
import { SafeArea } from '@common/view/components/safe-area/safe-area.component';
import { useProductsViewModel } from '@products/viewmodel/products/products.viewmodel';
import { Product } from '@products/view/components/product/product.component';
import type { Product as ProductModel } from '@products/model/product.model';
import { styles } from './products.style';

export function ProductsScreen() {
  const { products, error, loading, addToCart } = useProductsViewModel();

  if (loading) {
    return (
      <SafeArea style={styles.container}>
        <ActivityIndicator />
      </SafeArea>
    );
  }

  if (error) {
    return (
      <SafeArea style={styles.container}>
        <ActivityIndicator />
      </SafeArea>
    );
  }

  function renderProduct(product: ProductModel) {
    return (
      <Product
        product={product}
        onPress={(pressedProduct) => addToCart(pressedProduct)}
      />
    );
  }

  return (
    <SafeArea style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item: product }) => renderProduct(product)}
        numColumns={2}
        style={styles.productList}
        columnWrapperStyle={styles.productListColumn}
        contentContainerStyle={styles.productListContent}
      />
    </SafeArea>
  );
}
