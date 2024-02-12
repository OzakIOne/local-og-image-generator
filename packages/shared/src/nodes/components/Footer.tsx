import {CSSProperties, PropsWithChildren} from 'react';
import React from 'react';

const Footer = (props: PropsWithChildren<{style?: CSSProperties}>) => (
  <div
    style={{
      display: 'flex',
      color: 'gray',
      fontSize: '3rem',
      ...props.style,
    }}>
    {props.children}
  </div>
);

export {Footer};
