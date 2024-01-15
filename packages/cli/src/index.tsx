import {cac} from 'cac';
import type {SVGType} from '@ozaki/shared';

const cli = cac('docusaurus-cli-og-image-generator');
cli
  .option('--path <name>', 'Choose a path to generate the OG images')
  .option(
    '--type <doc | blog | default>',
    'Choose which type of OG image to generate',
  );
cli.help();
cli.version('0.0.1');
const parsed = cli.parse();
console.log('parsed:', parsed);

if (
  typeof parsed.options.path === 'string' &&
  typeof parsed.options.type === 'string'
) {
  // TODO import the function from 'generate' package
  generateOgImages({
    path: parsed.options.path,
    type: parsed.options.type as SVGType,
  });
} else {
  throw new Error('Please specify a path and a type');
}
