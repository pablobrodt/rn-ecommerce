import { RouteConfig } from '@common/view/route/route-config';

import { CartScreen } from '../screens/cart/cart.screen';

export enum CartRoute {
  CART = 'Cart',
}

export const CartRouteConfig: RouteConfig = {
  [CartRoute.CART]: CartScreen,
};
