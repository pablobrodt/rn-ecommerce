import { render } from '@testing-library/react-native';

import { CartActionButton } from './cart-action-button.component';

jest.mock('@assets/icons', () => ({
  CartArrowDown: 'CartArrowDown',
  CartArrowUp: 'CartArrowUp',
}));

describe('@Products Cart Action Button Component Tests', () => {
  it('should render CartArrowDown icon and Colors.SUCCESS_REGULAR when not in cart', () => {
    const { toJSON } = render(
      <CartActionButton isInCart={false} onPress={jest.fn()} />,
    );

    const component = toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render CartArrowUp icon and Colors.DANGER_REGULAR when in cart', () => {
    const { toJSON } = render(
      <CartActionButton isInCart={true} onPress={jest.fn()} />,
    );

    const component = toJSON();

    expect(component).toMatchSnapshot();
  });
});
