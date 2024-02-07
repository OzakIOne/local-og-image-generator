import {Blog, Default, Doc} from '@ozaki/nodes';
import {ImageOptions} from '@ozaki/types';
import React from 'react';
import {z} from 'zod';

// {
//   'doc':{
//     component: <Doc {...options} />,
//     propsValidation: docschema
//   }
// }

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
  author: z.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  authorURL: z.string().url({
    message: 'Author URL must be a valid URL to an image',
  }),
  tags: z.array(z.string()).or(z.string()).optional(),
});

// TODO remove if, check the type ine web / cli
// it should just render jsx
const generateJSX = (options: ImageOptions) => {
  const nodeMap = {
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

  const node = nodeMap[options.type];
  if (!node) {
    throw new Error(`Unknown type: ${options.type}`);
  }
  node.propsValidation.parse(options);
  return React.cloneElement(node.component, options);
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
