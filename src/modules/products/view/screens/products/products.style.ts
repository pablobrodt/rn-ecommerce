import { StyleSheet } from 'react-native';

const GRID_GAP = 8;

export const styles = StyleSheet.create({
  container: {},
  productList: {
    flexGrow: 1,
    padding: 16,
  },
  productListContent: {
    gap: GRID_GAP,
  },
  productListColumn: {
    gap: GRID_GAP,
  },
});
