import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {CliOptions} from '@ozaki/types';
import {PathLike, writeFile} from 'fs';
import {Doc, Blog, Default} from '@ozaki/nodes';
import React from 'react';
import {z} from 'zod';
import type {ResvgRenderOptions} from '@resvg/resvg-js';
import {promises} from 'fs';
import type {SatoriOptions} from 'satori';

const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

const optionsSchema = z
  .object({
    output: z.string(),
    type: z.enum(['doc', 'blog', 'default']),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    authorURL: z.string().url(),
    font: z.string(),
    moto: z.string(),
  })
  .partial();

const cli = cac('docusaurus-cli-og-image-generator');
cli
  .option('--output <path>', 'Choose a path where to generate the OG images')
  .option(
    '--type <doc | blog | default>',
    'Choose which type of OG image to generate',
  )
  .option('--title <name>', 'Choose a title')
  .option('--author <name>', 'Choose an author')
  .option('--authorURL <name>', 'Choose an author URL')
  .option('--description <name>', 'Choose a description')
  .option('--font <path>', 'Choose a font path')
  .option('--moto <name>', 'Choose a moto');

cli.version('0.0.1');
const parsed = cli.parse().options as CliOptions;
console.log('parsed:', parsed);

const fontPath = parsed.font ?? './src/Roboto-Regular.ttf';

const satoriOptions: SatoriOptions = {
  width: globalConfig.satoriWidth,
  height: globalConfig.satoriHeight,

  fonts: [
    {
      name: 'Roboto',
      data: await promises.readFile(fontPath),
      style: 'normal',
    },
  ],
  debug: true,
};

const ResvgOptions: ResvgRenderOptions = {
  background: 'rgba(255, 255, 255)',
  fitTo: {
    mode: 'width',
    value: globalConfig.resvgWidth,
  },
  font: {
    // fontFiles: [fontPath], // Load custom fonts.
    loadSystemFonts: false, // It will be faster to disable loading system fonts.
  },
};

optionsSchema.parse(parsed);

const generateJSX = (options: CliOptions) => {
  if (options.type === 'doc') {
    return <Doc title={options.title} description={options.description} />;
  } else if (options.type === 'blog') {
    return (
      <Blog
        title={options.title}
        author={options.author}
        authorURL={options.authorURL}
      />
    );
  } else {
    return (
      <Default
        title={options.title}
        description={options.description}
        moto={options.moto}
      />
    );
  }
};

const saveImageToFile = async (outputPath: PathLike, image: Buffer) => {
  writeFile(outputPath, image, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('The file has been saved!');
    }
  });
};

if (parsed.help === true) {
  cli.outputHelp();
} else if (typeof parsed.output === 'string') {
  try {
    const jsx = generateJSX(parsed);
    await saveImageToFile(
      parsed.output,
      await generateImage({Node: jsx, satoriOptions, svgOptions: ResvgOptions}),
    );
  } catch (error) {
    throw error;
  }
} else {
  throw new Error('Please specify a output path');
}
