import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {CliOptions, SatoriOptions} from '@ozaki/types';
import {promises} from 'fs';
import {cliSchema} from './validation.js';
import {ResvgOptions} from './settings.js';
import {createConfig, generateJSX} from '@ozaki/shared';
import {fontPath, saveImageToFile} from './utils.js';

const cli = cac('image-generator');
cli.version('0.0.1');

const generateOGImage = async (options: CliOptions) => {
  cliSchema.parse(options);
  const jsx = generateJSX(options);
  const satoriOptions = createConfig({
    fonts: [
      {
        name: 'Roboto',
        data: await promises.readFile(await fontPath(options)),
        style: 'normal',
      },
    ],
  }) as SatoriOptions;
  await saveImageToFile(
    options.output,
    await generateImage({Node: jsx, satoriOptions, svgOptions: ResvgOptions}),
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
  .option('--description <name>', 'Choose a description')
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
