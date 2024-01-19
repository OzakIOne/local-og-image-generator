import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';
import type {CliOptions, ImageType} from '@ozaki/types';
import {createConfig, generateJSX} from '@ozaki/shared';
import {SatoriOptions} from 'next/dist/compiled/@vercel/og/satori';

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

    const getParam = ({
      name,
      defaultValue,
    }: {
      name: string;
      defaultValue: string;
    }): string => {
      return searchParams.has(name) ? searchParams.get(name) : defaultValue;
    };

    const title = getParam({name: 'title', defaultValue: 'My default title'});
    const description = getParam({
      name: 'description',
      defaultValue: 'My default description',
    });
    const author = getParam({name: 'author', defaultValue: 'ozakione'});
    const authorURL = getParam({
      name: 'authorurl',
      defaultValue: 'https://github.com/ozakione.png',
    });
    const tags = searchParams.has('tags') ? searchParams.getAll('tags') : [];
    const moto = getParam({
      name: 'moto',
      defaultValue: 'Focus on your content',
    });
    const type = getParam({name: 'type', defaultValue: 'default'}) as ImageType;
    const props: CliOptions = {
      type,
      title,
      description,
      author,
      authorURL,
      moto,
      tags: [tags].flat(),
    };

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
      }) as SatoriOptions,
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
