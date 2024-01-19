import {z} from 'zod';
import fs from 'fs';

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

const docSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
});

const defaultSchema = docSchema.extend({
  moto: z.string({
    required_error: 'Moto is required',
    invalid_type_error: 'Moto must be a string',
  }),
});

const blogSchema = docSchema.extend({
  author: z.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  authorURL: z.string().url({
    message: 'Author URL must be a valid URL to an image',
  }),
  tags: z.array(z.string()).or(z.string()).optional(),
});

const fileExists = async (path: string): Promise<string> => {
  try {
    await fs.promises.access(path, fs.promises.constants.F_OK);
    return path;
  } catch (error) {
    throw new Error('File does not exist.');
  }
};

export {docSchema, blogSchema, defaultSchema, cliSchema, fileExists};
