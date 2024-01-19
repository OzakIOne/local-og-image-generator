import fs from 'fs';
import {z} from 'zod';

const cliSchema = z.object({
  output: z.string({
    required_error: 'Output is required',
    invalid_type_error: 'Output must be a path',
  }),
  type: z.enum(['doc', 'blog', 'default'], {
    required_error: 'Type is required',
    invalid_type_error: 'Must be one of "doc", "blog", or "default"',
  }),
  font: z.string().optional(),
  help: z.boolean().optional(),
});

const fileExists = async (path: string): Promise<string> => {
  try {
    await fs.promises.access(path, fs.promises.constants.F_OK);
    return path;
  } catch (error) {
    console.error('Error accessing file:', error);
    throw new Error('File does not exist.');
  }
};

export {fileExists, cliSchema};
