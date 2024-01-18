import {cac} from 'cac';
import {generateImage} from '@ozaki/generate';
import type {CliOptions} from '@ozaki/types';
import {PathLike, writeFile} from 'fs';
import {promises} from 'fs';
import type {SatoriOptions} from 'satori';
import {optionsSchema} from './validation';
import {ResvgOptions, globalConfig} from './settings';
import {generateJSX} from '@ozaki/shared';

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

optionsSchema.parse(parsed);

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
