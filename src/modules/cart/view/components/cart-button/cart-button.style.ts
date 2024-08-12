import { Colors } from '@common/view/constants/colors';
import { StyleSheet } from 'react-native';

const ICON_SIZE = 26;
const INDICATOR_SIZE = 16;
const INDICATOR_RADIUS = INDICATOR_SIZE / 2;

export const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    position: 'relative',
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_RADIUS,
    backgroundColor: Colors.HIGHLIGHT_REGULAR,
    position: 'absolute',
    top: 6,
    right: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productQuantity: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
