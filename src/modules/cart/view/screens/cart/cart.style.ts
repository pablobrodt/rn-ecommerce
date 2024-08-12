import { StyleSheet } from 'react-native';
import { Colors } from '@common/view/constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 12,
    flexGrow: 1,
    width: '100%',
  },
  separator: {
    backgroundColor: Colors.NEUTRAL_REGULAR,
    flexGrow: 1,
    height: 2,
    marginVertical: 8,
  },
  quantityText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  noProductsAdded: {
    fontSize: 36,
    textAlign: 'center',
  },
});
