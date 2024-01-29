import {z} from 'zod';

const docSchema = z.object({
  title: z.coerce.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  description: z.coerce.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
});

const defaultSchema = docSchema.extend({
  moto: z.coerce.string({
    required_error: 'Moto is required',
    invalid_type_error: 'Moto must be a string',
  }),
});

const blogSchema = docSchema.extend({
  author: z.coerce.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  authorURL: z.coerce.string().url({
    message: 'Author URL must be a valid URL to an image',
  }),
  tags: z.array(z.coerce.string()).or(z.coerce.string()).optional(),
});

export {docSchema, defaultSchema, blogSchema};
