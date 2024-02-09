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

    const param = qs.parse(searchParams.toString(), {comma: true});
    console.log('param:', param);
    try {
      typeSchema.parse(param.type);
    } catch (error) {
      return new Response(`Invalid type: ${param.type}, error : ${error}`, {
        status: 500,
      });
    }

    const title = param.title;
    const description = param.description;
    const author = param.author;
    const authorURL = param.authorurl;
    const moto = param.moto;
    const tags = Array.isArray(param.tags) ? param.tags : [];
    const type = param.type;
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
    return new Response(
      `Failed to generate the image, make sure all the parameters are correct. ${e}`,
      {
        status: 500,
      },
    );
  }
}
