import React, {CSSProperties} from 'react';
import {BlogProps} from '../types/index.js';

interface AuthorImageProps
  extends Pick<BlogProps, 'authorURL' | 'authorURLSize'> {
  style: CSSProperties;
}

const AuthorImage = ({
  authorURL,
  authorURLSize,
  ...styleProps
}: AuthorImageProps) => (
  <img
    src={authorURL}
    height={authorURLSize}
    width={authorURLSize}
    style={{
      width: authorURLSize,
      borderRadius: authorURLSize / 2,
      ...styleProps,
    }}
  />
);

export {AuthorImage};
