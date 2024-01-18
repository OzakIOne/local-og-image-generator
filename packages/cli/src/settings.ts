import type {ResvgRenderOptions} from '@resvg/resvg-js';
import {globalConfig} from '@ozaki/shared';

const ResvgOptions: ResvgRenderOptions = {
  background: 'rgba(255, 255, 255)',
  fitTo: {
    mode: 'width',
    value: globalConfig.resvgWidth,
  },
  font: {
    loadSystemFonts: false,
  },
};

export {ResvgOptions};
