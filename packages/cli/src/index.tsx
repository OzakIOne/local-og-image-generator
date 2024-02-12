import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {SatoriOptions} from 'satori';
import {readFile} from 'fs/promises';
import {cliSchema, cliSchemaType} from './validation.js';
import {ResvgOptions} from './settings.js';
import {createConfig, typeMap, typeSchema} from '@ozaki/shared';
import {saveImageToFile} from './utils.js';
import React from 'react';

const cli = cac('image-generator');
cli.version('0.0.1');

function parseType(type: unknown) {
  return typeSchema.parse(type);
}

function parseProps(props: unknown, schema: any) {
  return schema.merge(cliSchema).parse(props);
}

const generateOGImage = async (options: cliSchemaType) => {
  const cliParams = cliSchema.parse({
    output: options.output,
    font: options.font,
    help: options.help,
    type: options.type,
  });

  const type = parseType(cliParams.type);
  const config = typeMap[type];
  if (!config) {
    throw new Error(`Unexpected missing config`);
  }

  const Component = config.component;
  const props = parseProps(options, config.propsValidation);
  const jsx = <Component {...props} />;

  const satoriOptions = createConfig({
    fonts: [
      {
        name: 'Roboto',
        data: await readFile(cliParams.font),
        style: 'normal',
      },
    ],
  }) as SatoriOptions;
  await saveImageToFile(
    options.output,
    await generateImage({
      Node: jsx,
      satoriOptions,
      svgOptions: ResvgOptions,
    }),
  );
};

cli
  .command('doc', 'Generate a OG image for a doc page')
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option('--title <name>', 'Choose a title')
  .option('--description <name>', 'Choose a description')
  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'doc'});
  });

cli
  .command('blog', 'Generate a OG image for a blog page')
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option('--title <name>', 'Choose a title')
  .option('--author <name>', 'Choose an author')
  .option('--authorURL <name>', 'Choose an author URL')
  .option('--tags <name>', 'Choose a tag')
  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'blog'});
  });

cli
  .command('default', 'Generate a OG image for a default page')
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option('--title <name>', 'Choose a title')
  .option('--description <name>', 'Choose a description')
  .option('--moto <name>', 'Choose a moto')
  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'default'});
  });

cli.help();
cli.parse();
