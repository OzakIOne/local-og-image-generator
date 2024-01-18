import satori, {SatoriOptions} from 'satori';
import {Resvg, ResvgRenderOptions} from '@resvg/resvg-js';
import {ReactNode} from 'react';

const generateSvg = async ({
  Node,
  satoriOptions,
}: {
  Node: ReactNode;
  satoriOptions: SatoriOptions;
}): Promise<string> => satori(Node, satoriOptions);

const generatePng = async ({
  svg,
  svgOptions,
}: {
  svg: string;
  svgOptions: ResvgRenderOptions;
}): Promise<Buffer> => new Resvg(svg, svgOptions).render().asPng();

const generateImage = async ({
  Node,
  svgOptions,
  satoriOptions,
}: {
  Node: ReactNode;
  svgOptions: ResvgRenderOptions;
  satoriOptions: SatoriOptions;
}): Promise<Buffer> =>
  generatePng({svg: await generateSvg({Node, satoriOptions}), svgOptions});

export {generateImage};
