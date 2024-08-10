import {
  type ImageStyle,
  type ImageResizeMode,
  Image as RNImage,
} from 'react-native';

import { styles } from './image.style';
import { PropsWithStyle } from '@common/view/types/props-with-style';

type ImageProps = {
  src: string;
  resizeMode?: ImageResizeMode;
} & PropsWithStyle<ImageStyle>;

export function Image({ style, src, resizeMode = 'contain' }: ImageProps) {
  return (
    <RNImage style={[styles.image, style]} src={src} resizeMode={resizeMode} />
  );
}
