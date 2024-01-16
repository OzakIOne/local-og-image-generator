import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import {satoriOptions, ResvgOptions} from '@ozaki/shared';
import React, {ReactNode} from 'react';

const generateSvg = async (Node: ReactNode): Promise<string> => {
  return satori(<div style={{display: 'flex'}}>{Node}</div>, satoriOptions);
};

async function generatePng(svg: string): Promise<Buffer> {
  const resvg = new Resvg(svg, ResvgOptions);
  const pngData = resvg.render();
  return pngData.asPng();
}

async function generateImage(Node: ReactNode): Promise<Buffer> {
  const svg = await generateSvg(Node);
  return generatePng(svg);
}

export {generateImage};
