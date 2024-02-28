import {ImageResponse} from '@vercel/og';
import type {VercelRequest} from '@vercel/node';
import {createConfig, parseType, typeMap} from '@ozaki/shared';
import qs from 'qs';
import React from 'react';

export const config = {
  runtime: 'edge',
};

function parseProps(props: unknown, schema) {
  return schema.parse(props);
}

export default async function handler(req: VercelRequest) {
  // const fontData = await font;

  try {
    const {search} = new URL(req.url);
    const param = qs.parse(search.slice(1));
    const type = parseType(param.type);
    const config = typeMap[type];

    if (!config) {
      throw new Error(`Unexpected missing config`);
    }

    const Component = config.component;
    const props = parseProps(param, config.propsValidation);
    const jsx = <Component {...props} />;

    return new ImageResponse(jsx, createConfig() as any);
  } catch (e) {
    return new Response(
      `Failed to generate the image, make sure all the parameters are correct. ${e}`,
      {
        status: 500,
      },
    );
  }
}
