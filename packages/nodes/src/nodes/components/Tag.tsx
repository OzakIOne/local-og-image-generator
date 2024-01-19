import React, {PropsWithChildren} from 'react';

const Tag = (props: PropsWithChildren) => (
  <div
    style={{
      display: 'flex',
      fontSize: '2rem',
      padding: '.2rem .5rem .3rem',
      borderRadius: '.4rem',
      border: '3px solid #999',
      marginRight: '.5rem',
      marginLeft: '.5rem',
    }}>
    {props.children}
  </div>
);

const Tags = ({tags}: {tags: string[]}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row-reverse',
      marginTop: '2rem',
      marginRight: '2rem',
    }}>
    {tags && [tags].flat().map((el) => <Tag>{el}</Tag>)}
  </div>
);

export {Tags};
