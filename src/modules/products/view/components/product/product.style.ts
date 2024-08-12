import { Colors } from '@common/view/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  image: {
    height: 180,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  price: {
    fontSize: 14,
  },
  button: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
