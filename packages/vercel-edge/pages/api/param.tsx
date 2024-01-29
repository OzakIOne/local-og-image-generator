import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';
import type {ImageOptions} from '@ozaki/types';
import {createConfig, generateJSX} from '@ozaki/shared';
import qs from 'qs';

export const config = {
  runtime: 'edge',
};

const font = fetch(
  new URL(`../../assets/Roboto-Regular.ttf`, import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
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
      createConfig({
        fonts: [
          {
            name: 'Roboto',
            data: fontData,
            style: 'normal',
          },
        ],
      }) as any,
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
