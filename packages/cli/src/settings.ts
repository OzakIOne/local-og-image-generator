import type {ResvgRenderOptions} from '@resvg/resvg-js';
const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

const ResvgOptions: ResvgRenderOptions = {
  background: 'rgba(255, 255, 255)',
  fitTo: {
    mode: 'width',
    value: globalConfig.resvgWidth,
  },
  font: {
    // fontFiles: [fontPath], // Load custom fonts.
    loadSystemFonts: false, // It will be faster to disable loading system fonts.
  },
};

export {globalConfig, ResvgOptions};
