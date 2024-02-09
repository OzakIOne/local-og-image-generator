import {Blog, Default, Doc} from '@ozaki/nodes';
import {ImageOptions, ImageType} from '@ozaki/types';
import React from 'react';
import {z} from 'zod';

const typeSchema = z.enum(['doc', 'blog', 'default']);

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
  author: z.union([z.string().url(), z.literal('')], {
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string to a URL or an empty string',
  }),
  authorURL: z.string().url({
    message: 'Author URL must be a valid URL to an image',
  }),
  tags: z.array(z.string()).or(z.string()).optional(),
});

type NodeMap = {
  [key in ImageType]: {
    component: React.ReactElement;
    propsValidation: z.ZodObject<any, any>;
  };
};

const generateJSX = (options: ImageOptions) => {
  const nodeMap: NodeMap = {
    doc: {
      component: <Doc />,
      propsValidation: docSchema,
    },
    blog: {
      component: <Blog />,
      propsValidation: blogSchema,
    },
    default: {
      component: <Default />,
      propsValidation: defaultSchema,
    },
  };
  try {
    const node = nodeMap[options.type];
    node.propsValidation.parse(options);
    return React.cloneElement(node.component, options);
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

export {generateJSX, globalConfig, createConfig, typeSchema};
