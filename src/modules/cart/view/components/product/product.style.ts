import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 90,
    flex: 0,
  },
  content: {
    flexShrink: 1,
    flexGrow: 1,
    padding: 6,
    justifyContent: 'center',
  },
  productName: {
    flexShrink: 1,
    fontSize: 18,
    marginBottom: 10,
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flexShrink: 1,
    fontSize: 20,
  },
});
