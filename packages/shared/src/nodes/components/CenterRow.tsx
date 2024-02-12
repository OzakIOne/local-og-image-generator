import React, {CSSProperties, PropsWithChildren} from 'react';

const CenterRow = (props: PropsWithChildren<{style?: CSSProperties}>) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      ...props.style,
    }}>
    {props.children}
  </div>
);

export {CenterRow};
