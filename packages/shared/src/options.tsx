import {Blog} from './nodes/blog.js';
import {Default} from './nodes/default.js';
import {Doc} from './nodes/documentation.js';
import {BlogCenter} from './nodes/blogCenter.js';
import {BlogTop} from './nodes/blogTop.js';
import {z} from 'zod';

const typeSchema = z.enum(['doc', 'blog', 'default', 'blogtop', 'blogcenter']);

const titleSchema = z.string({
  required_error: 'Title is required',
  invalid_type_error: 'Title must be a string',
});

const descriptionSchema = z
  .string()
  .optional()
  .default('Documentation description');

const logoSchema = z.union([z.string().url(), z.enum(['false'])]).optional();

const docSchema = z
  .object({
    title: titleSchema,
    description: descriptionSchema,
    logo: logoSchema,
    logowidth: z.number().optional().default(250),
  })
  .extend({type: z.string()})
  .strict();

const defaultSchema = z
  .object({
    title: titleSchema,
    description: descriptionSchema,
    tagline: z.string().optional().default('Default tagline'),
    logo: logoSchema,
    logowidth: z.number().optional().default(150),
  })
  .extend({type: z.string()})
  .strict();

const blogTagsSchema = z
  .array(z.string())
  .or(z.string().transform((e) => new Array(e)))
  .optional();

const blogSchema = z
  .object({
    title: titleSchema,
    author: z.string().optional().default('ozaki'),
    authorURL: z.string().url().default('https://github.com/ozakione.png'),
    authorURLSize: z.number().optional().default(96),
    logo: logoSchema,
    logowidth: z.number().optional().default(150),
    tags: blogTagsSchema,
  })
  .extend({type: z.string()})
  .strict();

const blogCenterTags = z.record(z.string(), z.number()).optional();

const blogCenter = z
  .object({
    title: titleSchema,
    logo: logoSchema,
    logowidth: z.number().optional().default(150),
    mainContent: z.string().optional().default('mainContent'),
    mainContentsize: z.string().optional().default('2rem'),
    subContent: z.string().optional().default('subContent'),
    subContentsize: z.string().optional().default('2rem'),
    extraContent: z.string().optional().default('extraContent'),
    extraContentsize: z.string().optional().default('2rem'),
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
    tags: blogCenterTags,
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
  debug: false,
});

type docType = z.infer<typeof docSchema>;
type defaultType = z.infer<typeof defaultSchema>;
type blogType = z.infer<typeof blogSchema>;
type blogCenterType = z.infer<typeof blogCenter>;
type blogTopType = z.infer<typeof blogCenter>;
type typeImage = z.infer<typeof typeSchema>;
type blogCenterTags = z.infer<typeof blogCenterTags>;
type blogTags = z.infer<typeof blogTagsSchema>;

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
  blogCenterTags,
  blogTags,
};
