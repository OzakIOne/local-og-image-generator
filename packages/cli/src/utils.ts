/* eslint-disable no-console */
import {PathLike} from 'fs';
import {writeFile} from 'fs/promises';

const saveImageToFile = async (outputPath: PathLike, image: Buffer) => {
  try {
    await writeFile(outputPath, image);
    console.log('The file has been saved!');
  } catch (err) {
    console.error('Error saving the file:', err);
    throw err;
  }
};

export {saveImageToFile};
