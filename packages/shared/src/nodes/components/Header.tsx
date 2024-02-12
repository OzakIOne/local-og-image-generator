import React, {CSSProperties, PropsWithChildren} from 'react';

const Header = (props: PropsWithChildren<{style?: CSSProperties}>) => (
  <div
    style={{
      display: 'flex',
      fontSize: '6rem',
      fontWeight: 'bold',
      alignItems: 'center',
      marginTop: '2rem',
      marginLeft: '2rem',
      ...props.style,
    }}>
    {props.children}
  </div>
);

export {Header};
