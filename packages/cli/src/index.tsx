import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {CliOptions} from '@ozaki/types';
import {satoriOptions, ResvgOptions} from '@ozaki/shared';
import {writeFile} from 'fs';
import {Doc, Blog, Default} from '@ozaki/nodes';
import React from 'react';

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
  .option('--moto <name>', 'Choose a moto');

cli.help();
cli.version('0.0.1');
const parsed = cli.parse().options as CliOptions;

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

const saveImageToFile = async (outputPath: string, image: Buffer) => {
  writeFile(outputPath, image, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('The file has been saved!');
    }
  });
};

if (typeof parsed.output === 'string') {
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
