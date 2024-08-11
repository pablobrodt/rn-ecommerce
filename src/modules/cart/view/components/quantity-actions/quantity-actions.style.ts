import { StyleSheet } from 'react-native';
import { Colors } from '@common/view/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: 18,
  },
  quantity: {
    fontSize: 14,
    width: 20,
    textAlign: 'center',
  },
});
