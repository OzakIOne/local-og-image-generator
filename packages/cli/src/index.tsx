import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {SatoriOptions} from 'satori';
import {readFile} from 'fs/promises';
import {cliSchema, cliSchemaType} from './validation.js';
import {ResvgOptions} from './settings.js';
import {createConfig, typeMap, parseType} from '@ozaki/shared';
import {saveImageToFile} from './utils.js';
import React from 'react';

const cli = cac('image-generator');
cli.version('0.0.1');

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
  .option('--logo <name>', 'Choose a logo image url')
  .option('--logowidth <name>', 'Choose a logo size')
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
  .option('--logo <name>', 'Choose a logo image url')
  .option('--logowidth <name>', 'Choose a logo size')
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
  .option('--logo <name>', 'Choose a logo image url')
  .option('--logowidth <name>', 'Choose a logo size')
  .option('--tagline <name>', 'Choose a tagline')
  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'default'});
  });

cli
  .command('blogcenter', 'Generate a OG image for a default page')
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option('--title <name>', 'Choose a title')
  .option('--text1 <name>', 'Choose a description1')
  .option('--text1size <name>', 'Choose a size for description1')
  .option('--text2 <name>', 'Choose a description2')
  .option('--text2size <name>', 'Choose a size for description2')
  .option('--text3 <name>', 'Choose a description3')
  .option('--text3size <name>', 'Choose a size for description3')
  .option(
    '--titlealign <name>',
    'Chose to align the title left, right or center',
  )
  .option('--textalign <name>', 'Chose to align the text left, right or center')
  .option('--logo <name>', 'Choose a logo image url')
  .option('--logowidth <name>', 'Choose a logo size')

  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'blogcenter'});
  });

cli
  .command('blogtop', 'Generate a OG image for a default page')
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option('--title <name>', 'Choose a title')
  .option('--text1 <name>', 'Choose a description1')
  .option('--text1size <name>', 'Choose a size for description1')
  .option('--text2 <name>', 'Choose a description2')
  .option('--text2size <name>', 'Choose a size for description2')
  .option('--text3 <name>', 'Choose a description3')
  .option('--text3size <name>', 'Choose a size for description3')
  .option(
    '--titlealign <name>',
    'Chose to align the title left, right or center',
  )
  .option('--textalign <name>', 'Chose to align the text left, right or center')
  .option('--logo <name>', 'Choose a logo image url')
  .option('--logowidth <name>', 'Choose a logo size')
  .option('--font <path>', 'Choose a font path')
  .action(async (options) => {
    await generateOGImage({...options, type: 'blogtop'});
  });

cli.help();
cli.parse();
