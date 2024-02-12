import {Blog} from './nodes/blog.js';
import {Default} from './nodes/default.js';
import {Doc} from './nodes/documentation.js';
import {z} from 'zod';

const typeSchema = z.enum(['doc', 'blog', 'default']);

const docSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .optional()
      .default('Documentation description'),
  })
  .extend({type: z.string()})
  .strict();

const defaultSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .optional()
      .default('Default description'),
    moto: z
      .string({
        required_error: 'Moto is required',
        invalid_type_error: 'Moto must be a string',
      })
      .optional()
      .default('Default moto'),
  })
  .extend({type: z.string()})
  .strict();

const blogSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    author: z
      .string({
        required_error: 'Author is required',
        invalid_type_error: 'Author must be a string',
      })
      .optional()
      .default('ozaki'),
    authorURL: z
      .union([z.string().url(), z.literal('')], {
        required_error: 'Author is required',
        invalid_type_error:
          'Author must be a string to a URL or an empty string',
      })
      .default('https://github.com/ozakione.png'),
    tags: z
      .array(z.string())
      .or(z.string().transform((e) => new Array(e)))
      .optional(),
  })
  .extend({type: z.string()})
  .strict();

const typeMap = {
  doc: {
    component: Doc,
    propsValidation: docSchema,
  },
  blog: {
    component: Blog,
    propsValidation: blogSchema,
  },
  default: {
    component: Default,
    propsValidation: defaultSchema,
  },
} as const;

const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

type config = {
  fonts: {
    name: string;
    data: ArrayBuffer;
    style: string;
  }[];
};

const createConfig = (config?: config) => ({
  width: globalConfig.satoriWidth,
  height: globalConfig.satoriHeight,
  ...config,
  debug: true,
});

type docType = z.infer<typeof docSchema>;
type defaultType = z.infer<typeof defaultSchema>;
type blogType = z.infer<typeof blogSchema>;
type typeImage = z.infer<typeof typeSchema>;

function parseType(type: unknown) {
  return typeSchema.parse(type);
}

export {globalConfig, createConfig, typeSchema, typeMap, parseType};
export type {docType, blogType, defaultType, typeImage};
