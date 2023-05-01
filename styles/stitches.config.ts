import { createStitches } from '@stitches/react';

import { generateMdeia } from './breakPoints/createMedia';
import { themes } from './theme';

export const { styled, css, theme, config, reset, globalCss, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...themes,
      },
    },
    media: {
      ...generateMdeia(),
    },
  });
