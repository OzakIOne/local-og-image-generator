import React, {CSSProperties} from 'react';

// TODO type from zod
type AuthorImageProps = {
  author: string;
  size?: number;
  style?: CSSProperties;
};

// TODO remove size from here, default value in zod
const AuthorImage = ({author, size = 64, ...props}: AuthorImageProps) => (
  <img
    src={author}
    height={size}
    width={size}
    style={{width: size, borderRadius: size / 2, ...props.style}}
    {...props}
  />
);

export {AuthorImage};
