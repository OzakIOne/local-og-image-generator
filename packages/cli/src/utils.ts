import {PathLike} from 'fs';
import {writeFile} from 'fs/promises';
import {fileExists} from './validation';
import {CliOptions} from '@ozaki/types';

const saveImageToFile = async (outputPath: PathLike, image: Buffer) => {
  try {
    await writeFile(outputPath, image);
    console.log('The file has been saved!');
  } catch (err) {
    console.error('Error saving the file:', err);
    throw err;
  }
};

// TODO  ugly
const fontPath = async (parsed: CliOptions) => {
  if (parsed.font === undefined) {
    return './src/Roboto-Regular.ttf';
  }
  const isFontValid = await fileExists(parsed.font);
  if (isFontValid) {
    return parsed.font;
  } else {
    return './src/Roboto-Regular.ttf';
  }
};

export {saveImageToFile, fontPath};
