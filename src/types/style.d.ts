import { CSSProperties } from 'react';
import { SerializedStyles, Theme } from '@emotion/react';

interface StyleProps {
  style?: CSSProperties;
  css?: ((theme: Theme) => SerializedStyles) | SerializedStyles;
}

export default StyleProps;
