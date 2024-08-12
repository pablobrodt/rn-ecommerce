import { Colors } from '@common/view/constants/colors';
import { StyleSheet } from 'react-native';

const ICON_SIZE = 30;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
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
  removeProductButton: {
    borderRadius: 0,
    backgroundColor: Colors.DANGER_REGULAR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
