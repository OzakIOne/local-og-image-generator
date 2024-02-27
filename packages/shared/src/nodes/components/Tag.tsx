import React, {PropsWithChildren} from 'react';
import {BlogTags} from '../types';

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

const Tags = ({tags}: {tags: BlogTags}) => {
  const filteredTags = new Set(tags);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        marginTop: '2rem',
        marginRight: '2rem',
      }}>
      {tags && [...filteredTags].map((el) => <Tag key={el}>{el}</Tag>)}
    </div>
  );
};

export {Tags};
