import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import {
  satoriOptions,
  ResvgOptions,
  // TODO pass them as parameters, not depedencies
  docNode,
  blogNode,
  defaultNode,
} from '@ozaki/shared';
import type {ImageProps, ImageType} from '@ozaki/shared';
import React from 'react';
// import {writeFileSync} from 'node:fs';

type SVGParams = {
  props: ImageProps;
  type: ImageType;
};

/**
 * Generate SVG from a ReactNode
 * @date 1/2/2024 - 3:50:29 PM
 *
 * @async
 * @param {ImageProps} param0.props
 * @param {ImageType} param0.type
 * @returns {Promise<void>}
 */
const generateSvg = async ({props, type}: SVGParams): Promise<string> => {
  return satori(
    <div style={{display: 'flex'}}>
      {(() => {
        switch (type) {
          case 'doc':
            return docNode(props);
          case 'blog':
            return blogNode(props);
          default:
            return defaultNode(props);
        }
      })()}
    </div>,
    satoriOptions,
  );
};

/**
 * Transform a SVG to a PNG
 * @date 1/15/2024 - 2:01:15 PM
 *
 * @async
 * @param {string} svg
 * @returns {Promise<Buffer>}
 */
async function generatePng(svg: string): Promise<Buffer> {
  const resvg = new Resvg(svg, ResvgOptions);
  const pngData = resvg.render();
  return pngData.asPng();
}

/**
 * Generate the OG images
 * @date 1/2/2024 - 3:50:28 PM
 *
 * @async
 * @returns {Promise<Buffer>}
 */
// TODO remove s from image and remove OG
// TODO await generateImage(<BlogPostImage title="Blog title" description="Blog description" author="Clément"/>)
async function generateOgImages({
  type,
  props,
}: {
  type: ImageType;
  props: ImageProps;
}): Promise<Buffer> {
  const svg = await generateSvg({
    // pass the node and not props
    props: {
      title: props.title,
      author: props.author,
      authorURL: props.authorURL,
      description: props.description,
      moto: props.moto,
    },
    type: type,
  });
  return generatePng(svg);
}

// const a = await generateOgImages({
//   type: 'blog',
//   props: {
//     title: 'e',
//     description: 'test',
//   },
// });
// writeFileSync('test.png', a);

export {generateOgImages};
