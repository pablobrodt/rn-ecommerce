import { Colors } from '@common/view/constants/colors';
import { StyleSheet } from 'react-native';

const GRID_GAP = 8;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
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
  errorMessage: {
    fontSize: 20,
    textAlign: 'center',
  },
  tryAgainButton: {
    backgroundColor: Colors.HIGHLIGHT_REGULAR,
    maxWidth: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tryAgainText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  loader: {
    alignSelf: 'center',
  },
});
