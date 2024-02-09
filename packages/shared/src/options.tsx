import {Blog, Default, Doc} from '@ozaki/nodes';
import {ImageOptions} from '@ozaki/types';
import {z} from 'zod';

const typeSchema = z.enum(['doc', 'blog', 'default']);

// TODO put default values in scehma
// TODO reject non known query params
// TODO put optionals in shcema
// TODO put title strictly required
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

const blogSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  author: z.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  authorURL: z.union([z.string().url(), z.literal('')], {
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string to a URL or an empty string',
  }),
  tags: z
    .array(z.string())
    .or(z.string().transform((e) => new Array(e)))
    .optional(),
});

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

const generateJSX = (options: ImageOptions) => {
  try {
    const node = typeMap[options.type];
    node.propsValidation.parse(options);
    return node.component;
  } catch (error) {
    throw new Error(`Failed to generate jsx: ${error}`);
  }
};

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

export {generateJSX, globalConfig, createConfig, typeSchema, typeMap};
