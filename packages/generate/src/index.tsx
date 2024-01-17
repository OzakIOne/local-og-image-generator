import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import {satoriOptions, ResvgOptions} from '@ozaki/shared';
import {ReactNode} from 'react';

const generateSvg = async (Node: ReactNode): Promise<string> =>
  satori(Node, satoriOptions);

const generatePng = async (svg: string): Promise<Buffer> =>
  new Resvg(svg, ResvgOptions).render().asPng();

const generateImage = async (Node: ReactNode): Promise<Buffer> =>
  generatePng(await generateSvg(Node));

export {generateImage};
