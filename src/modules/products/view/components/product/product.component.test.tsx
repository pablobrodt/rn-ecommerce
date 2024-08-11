import { fireEvent, render } from '@testing-library/react-native';
import { Product as ProductModel } from '@products/model/product.model';

import { Product } from './product.component';

describe('@Products Product Component Tests', () => {
  it('should execute onAddToCart if product not in cart', () => {
    const fakeOnAddToCart = jest.fn();
    const fakeProduct: ProductModel = {
      id: '171',
      image: 'fake-image-url',
      name: 'fake product',
      price: 17.1,
    };

    const { getByTestId } = render(
      <Product
        isInCart={false}
        onAddToCart={fakeOnAddToCart}
        onRemoveFromCart={jest.fn()}
        product={fakeProduct}
      />,
    );

    const addToCartActionButton = getByTestId('product-171-cart-action');

    fireEvent(addToCartActionButton, 'press');

    expect(fakeOnAddToCart).toHaveBeenCalledTimes(1);
    expect(fakeOnAddToCart).toHaveBeenCalledWith(fakeProduct);
  });

  it('should execute onRemoveFromCart if product in cart', () => {
    const fakeOnRemoveFromCart = jest.fn();
    const fakeProduct: ProductModel = {
      id: '171',
      image: 'fake-image-url',
      name: 'fake product',
      price: 17.1,
    };

    const { getByTestId } = render(
      <Product
        isInCart={true}
        onAddToCart={jest.fn()}
        onRemoveFromCart={fakeOnRemoveFromCart}
        product={fakeProduct}
      />,
    );

    const addToCartActionButton = getByTestId('product-171-cart-action');

    fireEvent(addToCartActionButton, 'press');

    expect(fakeOnRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(fakeOnRemoveFromCart).toHaveBeenCalledWith(fakeProduct.id);
  });
});
