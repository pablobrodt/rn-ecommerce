import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator, StackScreen } from './stack.navigator';

import {
  ProductsRouteConfig,
  ProductsRoute,
} from '@products/view/route/products.route';
import { CartRouteConfig } from '@cart/view/route/cart.route';
import { CartButton } from '@cart/view/components/cart-button/cart-button.component';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const routeConfigs = [
  ...Object.entries(ProductsRouteConfig),
  ...Object.entries(CartRouteConfig),
];

export function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName={ProductsRoute.PRODUCTS}
        screenOptions={({ navigation }) => ({
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      >
        {routeConfigs.map(([name, component]) => (
          <StackScreen key={name} name={name} component={component} />
        ))}
      </StackNavigator>
    </NavigationContainer>
  );
}
