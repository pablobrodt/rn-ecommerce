import { ActivityIndicator } from 'react-native';
import { PropsWithStyle } from '@common/view/types/props-with-style';
import { Colors } from '@common/view/constants/colors';

type LoaderProps = PropsWithStyle;

export function Loader({ style }: LoaderProps) {
  return (
    <ActivityIndicator
      color={Colors.HIGHLIGHT_REGULAR}
      size='large'
      style={style}
    />
  );
}
