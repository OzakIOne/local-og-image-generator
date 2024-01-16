import {cac} from 'cac';
import type {ImageType} from '@ozaki/shared';
import {generateImage} from '@ozaki/generate';
import {writeFile} from 'fs';

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
  // await generateImage(<BlogPostImage title="Blog title" description="Blog description" author="Clément"/>)
  const png = await generateImage({
    type: parsed.options.type as ImageType,
    props: {
      title: parsed.options.title as string,
      description: parsed.options.description as string,
      author: parsed.options.author as string,
      authorURL: parsed.options.authorURL as string,
      moto: parsed.options.moto as string,
    },
  });
  writeFile(parsed.options.output, png, (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });
} else {
  throw new Error('Please specify a output path and a type');
}
