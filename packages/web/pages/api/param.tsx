import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';
import type {ImageProps, ImageType} from '@ozaki/shared';
import {Doc, Default, Blog} from '@ozaki/nodes';

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
    const moto = getParam({
      name: 'moto',
      defaultValue: 'Focus on your content',
    });
    const type = getParam({name: 'type', defaultValue: 'default'}) as ImageType;
    const props: ImageProps = {
      title,
      description,
      author,
      authorURL,
      moto,
    };

    return new ImageResponse(
      (() => {
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
      })(),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Roboto',
            data: fontData,
            style: 'normal',
          },
        ],
        emoji: 'twemoji',
        debug: true,
      },
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
