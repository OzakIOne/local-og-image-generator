import React, {CSSProperties} from 'react';

type AuthorImageProps = {
  author: string;
  size?: number;
  style?: CSSProperties;
};

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
