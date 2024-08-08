import { StyleSheet } from 'react-native';

const MINIMUM_TOUCHABLE_AREA = 44;

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
    minWidth: MINIMUM_TOUCHABLE_AREA,
    minHeight: MINIMUM_TOUCHABLE_AREA,
  },
});
