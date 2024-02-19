import {Blog} from './nodes/blog.js';
import {Default} from './nodes/default.js';
import {Doc} from './nodes/documentation.js';
import {BlogCenter} from './nodes/blogCenter.js';
import {BlogTop} from './nodes/blogTop.js';
import {z} from 'zod';

const typeSchema = z.enum(['doc', 'blog', 'default', 'blogtop', 'blogcenter']);

const docSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z.string().optional().default('Documentation description'),
    logo: z.union([z.string().url(), z.enum(['false'])]).optional(),
    logowidth: z.number().optional().default(250),
  })
  .extend({type: z.string()})
  .strict();

const defaultSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z.string().optional().default('Default description'),
    tagline: z.string().optional().default('Default tagline'),
    logo: z.union([z.string().url(), z.enum(['false'])]).optional(),
    logowidth: z.number().optional().default(150),
  })
  .extend({type: z.string()})
  .strict();

const blogSchema = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    author: z.string().optional().default('ozaki'),
    authorURL: z.string().url().default('https://github.com/ozakione.png'),
    logo: z.union([z.string().url(), z.enum(['false'])]).optional(),
    logowidth: z.number().optional().default(150),
    tags: z
      .array(z.string())
      .or(z.string().transform((e) => new Array(e)))
      .optional(),
  })
  .extend({type: z.string()})
  .strict();

const blogCenter = z
  .object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    logo: z.union([z.string().url(), z.enum(['false'])]).optional(),
    logowidth: z.number().optional().default(150),
    text1: z.string().optional().default('text1'),
    text1size: z.string().optional().default('2rem'),
    text2: z.string().optional().default('text2'),
    text2size: z.string().optional().default('2rem'),
    text3: z.string().optional().default('text3'),
    text3size: z.string().optional().default('2rem'),
    textalign: z
      .enum([
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ])
      .optional()
      .default('center'),
    titlealign: z
      .enum([
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ])
      .optional()
      .default('center'),
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
  blogcenter: {
    component: BlogCenter,
    propsValidation: blogCenter,
  },
  blogtop: {
    component: BlogTop,
    propsValidation: blogCenter,
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
type blogCenterType = z.infer<typeof blogCenter>;
type blogTopType = z.infer<typeof blogCenter>;
type typeImage = z.infer<typeof typeSchema>;

function parseType(type: unknown) {
  return typeSchema.parse(type);
}

export {globalConfig, createConfig, typeSchema, typeMap, parseType};
export type {
  docType,
  blogType,
  defaultType,
  blogCenterType,
  typeImage,
  blogTopType,
};
