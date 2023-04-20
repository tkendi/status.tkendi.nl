import { createStitches } from '@stitches/react';

import { generateMdeia } from './breakPoints/createMedia';

export const { styled, css, theme, config, reset, globalCss, getCssText } =
  createStitches({
    media: {
      ...generateMdeia(),
    },
  });
