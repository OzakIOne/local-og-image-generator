import {ImageResponse} from '@vercel/og';
import type {VercelRequest} from '@vercel/node';
import type {ImageOptions, SatoriOptions} from '@ozaki/types';
// TODO either import the code from the package or import the package
import {createConfig, generateJSX} from '@ozaki/shared';
import qs from 'qs';

// TODO marche pas meme avec minimal repro de lautre repo, voir si cest possible sans hono

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

    const title = param.title || 'My default title';
    const description = param.description || 'My default description';
    const author = param.author || 'ozakione';
    const authorURL = param.authorurl || 'https://github.com/ozakione.png';
    const moto = param.moto;
    const tags = Array.isArray(param.tags) ? param.tags : [];
    const type = param.type || 'default';
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
