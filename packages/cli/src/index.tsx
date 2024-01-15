import {cac} from 'cac';
import type {SVGType} from '@ozaki/shared';
import {generateOgImages} from '@ozaki/generate';
import {writeFile} from 'fs';

const cli = cac('docusaurus-cli-og-image-generator');
cli
  .option('--path <name>', 'Choose a path to generate the OG images')
  .option(
    '--type <doc | blog | default>',
    'Choose which type of OG image to generate',
  )
  .option('--title <name>', 'Choose a title')
  .option('--author <name>', 'Choose an author')
  .option('--authorURL <name>', 'Choose an author URL')
  .option('--description <name>', 'Choose a description');

cli.help();
cli.version('0.0.1');
const parsed = cli.parse();
console.log('parsed:', parsed);

if (
  typeof parsed.options.path === 'string' &&
  typeof parsed.options.type === 'string'
) {
  const png = await generateOgImages({
    type: parsed.options.type as SVGType,
    props: {
      title: parsed.options.title as string,
      description: parsed.options.description as string,
      author: parsed.options.author as string,
      authorURL: parsed.options.authorURL as string,
    },
  });
  writeFile(parsed.options.path, png, (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });
} else {
  throw new Error('Please specify a path and a type');
}
