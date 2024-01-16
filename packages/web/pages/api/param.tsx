import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';
import type {SVGProps, SVGType} from '@ozaki/shared';
import {docNode, defaultNode, blogNode} from '@ozaki/nodes';

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
    const type = getParam({name: 'type', defaultValue: 'default'}) as SVGType;
    const props: SVGProps = {
      title,
      description,
      author,
      authorURL,
      moto,
    };

    return new ImageResponse(
      (
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
        </div>
      ),
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
