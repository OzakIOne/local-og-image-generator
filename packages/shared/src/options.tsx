import {
  Blog,
  Default,
  Doc,
  BlogProps,
  DefaultProps,
  DocProps,
} from '@ozaki/nodes';
import {ImageType} from '@ozaki/types';
import React from 'react';

interface Props extends BlogProps, DefaultProps, DocProps {
  type: ImageType;
}

const generateJSX = (options: Props) => {
  if (options.type === 'doc') return <Doc {...options} />;
  else if (options.type === 'blog') return <Blog {...options} />;
  return <Default {...options} />;
};

const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

type config = {
  fonts: {
    name: string;
    data: ArrayBuffer;
    style: string;
  }[];
};

const createConfig = (config: config) => ({
  width: globalConfig.satoriWidth,
  height: globalConfig.satoriHeight,
  ...config,
  debug: true,
});

export {generateJSX, globalConfig, createConfig};
