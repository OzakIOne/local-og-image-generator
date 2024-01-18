import {z} from 'zod';
import fs from 'fs';

const optionsSchema = z
  .object({
    output: z.string(),
    type: z.enum(['doc', 'blog', 'default']),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    authorURL: z.string().url(),
    font: z.string(),
    moto: z.string(),
  })
  .partial();

const fileExists = async (path: string): Promise<string> => {
  await fs.promises.access(path, fs.constants.F_OK);
  return path;
};

export {optionsSchema, fileExists};
