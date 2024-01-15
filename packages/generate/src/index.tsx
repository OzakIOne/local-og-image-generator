import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import {
  satoriOptions,
  ResvgOptions,
  docNode,
  blogNode,
  defaultNode,
} from '@ozaki/shared';
import type {SVGProps, SVGType} from '@ozaki/shared';
import React from 'react';
import {writeFileSync} from 'fs';

type SVGParams = {
  props: SVGProps;
  type: SVGType;
};

/**
 * Generate SVG from a ReactNode
 * @date 1/2/2024 - 3:50:29 PM
 *
 * @async
 * @param {SVGProps} param0.props
 * @param {SVGType} param0.type
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
 * Transform a SVG file to a PNG
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
 * Generate the OG images for the blog and docs pages
 * @date 1/2/2024 - 3:50:28 PM
 *
 * @async
 * @returns {Promise<void>}
 */
async function generateOgImages({
  type,
  props,
}: {
  type: SVGType;
  props: SVGProps;
}): Promise<Buffer> {
  const svg = await generateSvg({
    props: {
      title: props.title,
      author: props.author,
      authorURL: props.authorURL,
      description: props.description,
    },
    type: type,
  });
  return generatePng(svg);
}

const a = await generateOgImages({
  type: 'default',
  props: {
    title: 'Ozakqwei',
    description: 'My custom description',
    moto: 'Some random moto',
  },
});

// write a to disk
writeFileSync('./tests.png', a);
