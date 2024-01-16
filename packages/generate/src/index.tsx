import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';
import {satoriOptions, ResvgOptions} from '@ozaki/shared';
import type {ImageProps, ImageType} from '@ozaki/shared';
import React from 'react';
// TODO pass nodes as parameters, not depedencies
import {Doc, Blog, Default} from '@ozaki/nodes';
// import {writeFileSync} from 'node:fs';

type SVGParams = {
  props: ImageProps;
  type: ImageType;
};

const generateSvg = async ({props, type}: SVGParams): Promise<string> => {
  return satori(
    <div style={{display: 'flex'}}>
      {(() => {
        switch (type) {
          case 'doc':
            return <Doc title={props.title} description={props.description} />;
          case 'blog':
            return (
              <Blog
                title={props.title}
                author={props.author}
                authorURL={props.authorURL}
              />
            );
          default:
            return (
              <Default
                title={props.title}
                description={props.description}
                moto={props.moto}
              />
            );
        }
      })()}
    </div>,
    satoriOptions,
  );
};

async function generatePng(svg: string): Promise<Buffer> {
  const resvg = new Resvg(svg, ResvgOptions);
  const pngData = resvg.render();
  return pngData.asPng();
}

// TODO await generateImage(<BlogPostImage title="Blog title" description="Blog description" author="Clément"/>)
async function generateImage({
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

// const a = await generateImage({
//   type: 'blog',
//   props: {
//     title: 'e',
//     description: 'test',
//   },
// });
// writeFileSync('test.png', a);

export {generateImage};
