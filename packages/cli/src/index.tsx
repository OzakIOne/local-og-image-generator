import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
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
const parsed = cli.parse();

if (typeof parsed.options.output === 'string') {
  let png = null;
  if (parsed.options.type === 'doc') {
    png = await generateImage(
      <Doc
        title={parsed.options.title}
        description={parsed.options.description}
      />,
    );
  } else if (parsed.options.type === 'blog') {
    png = await generateImage(
      <Blog
        title={parsed.options.title}
        author={parsed.options.author}
        authorURL={parsed.options.authorURL}
      />,
    );
  } else {
    png = await generateImage(
      <Default
        title={parsed.options.title}
        description={parsed.options.description}
        moto={parsed.options.moto}
      />,
    );
  }
  writeFile(parsed.options.output, png, (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });
} else {
  throw new Error('Please specify a output path and a type');
}
