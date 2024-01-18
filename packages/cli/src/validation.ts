import {z} from 'zod';
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

export {optionsSchema};
