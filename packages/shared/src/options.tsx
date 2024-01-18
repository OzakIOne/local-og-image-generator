import {Blog, Default, Doc} from '@ozaki/nodes';
import React from 'react';
import type {CliOptions} from '@ozaki/types';

const generateJSX = (options: CliOptions) => {
  if (options.type === 'doc') {
    return <Doc title={options.title} description={options.description} />;
  } else if (options.type === 'blog') {
    return (
      <Blog
        title={options.title}
        author={options.author}
        authorURL={options.authorURL}
      />
    );
  } else {
    return (
      <Default
        title={options.title}
        description={options.description}
        moto={options.moto}
      />
    );
  }
};

export {generateJSX};
