import { StyleSheet } from 'react-native';

const ICON_SIZE = 26;

export const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    position: 'relative',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 6,
    right: 6,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
