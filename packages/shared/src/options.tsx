import type {ResvgRenderOptions} from '@resvg/resvg-js';
import {promises} from 'fs';
import type {SatoriOptions} from 'satori';
import React from 'react';
import {defaultNode, docNode, blogNode} from '../../nodes/src';

const fontPath = process.env.OG_FONT || './src/Roboto-Regular.ttf';

const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

const satoriOptions: SatoriOptions = {
  width: globalConfig.satoriWidth,
  height: globalConfig.satoriHeight,

  fonts: [
    {
      name: 'Roboto',
      data: await promises.readFile(fontPath),
      style: 'normal',
    },
  ],
  debug: true,
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

type SVGProps = {
  title?: string;
  description?: string;
  moto?: string;
  author?: string;
  authorURL?: string;
};

type SVGType = 'doc' | 'blog' | 'default';

export {satoriOptions, ResvgOptions, defaultNode, docNode, blogNode};
export type {SVGProps, SVGType};
