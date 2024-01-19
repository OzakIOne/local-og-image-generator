import {z} from 'zod';

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

export {docSchema, defaultSchema, blogSchema};
