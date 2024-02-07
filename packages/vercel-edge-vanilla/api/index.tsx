import {ImageResponse} from '@vercel/og';
import type {VercelRequest} from '@vercel/node';
import type {ImageOptions, SatoriOptions} from '@ozaki/types';
import {createConfig, generateJSX, typeSchema} from '@ozaki/shared';
import qs from 'qs';

export const config = {
  runtime: 'edge',
};

// const font = fetch(
//   new URL(`../../assets/Roboto-Regular.ttf`, import.meta.url),
// ).then((res) => res.arrayBuffer());

export default async function handler(req: VercelRequest) {
  // const fontData = await font;

  try {
    const {searchParams} = new URL(req.url);

    const param = qs.parse(searchParams.toString());
    // TODO validate param
    typeSchema.parse(param.type);

    const title = param.title;
    const description = param.description;
    const author = param.author;
    const authorURL = param.authorurl;
    const moto = param.moto;
    const tags = Array.isArray(param.tags) ? param.tags : [];
    const type = param.type;
    // TODO verifier le schema en fonction du type
    const props = {
      type,
      title,
      description,
      author,
      authorURL,
      moto,
      tags: [tags].flat(),
    } as ImageOptions;

    return new ImageResponse(
      generateJSX(props),
      createConfig() as SatoriOptions,
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
