import fs from 'fs';
import {z} from 'zod';

const cliSchema = z.object({
  output: z.coerce.string({
    required_error: 'Output is required',
    invalid_type_error: 'Output must be a path',
  }),
  font: z.coerce.string().optional(),
  help: z.coerce.boolean().optional(),
});

const fileExists = async (path: string): Promise<string> => {
  try {
    await fs.promises.access(path, fs.promises.constants.F_OK);
    return path;
  } catch (error) {
    throw new Error('File does not exist.', error as ErrorOptions);
  }
};

export {fileExists, cliSchema};
