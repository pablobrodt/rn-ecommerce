import { type ImageStyle, Image as RNImage } from 'react-native';

import { styles } from './image.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type ImageProps = {
  src: string;
} & PropsWithStyle<ImageStyle>;

export function Image({ style, src }: ImageProps) {
  return (
    <RNImage style={[styles.image, style]} src={src} resizeMode='contain' />
  );
}
