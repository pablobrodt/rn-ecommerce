import { RouteConfig } from '@common/view/route/route-config';

import { ProductsScreen } from '../screens/products/products.screen';

export enum ProductsRoute {
  PRODUCTS = 'Products',
}

export const ProductsRouteConfig: RouteConfig = {
  [ProductsRoute.PRODUCTS]: ProductsScreen,
};
