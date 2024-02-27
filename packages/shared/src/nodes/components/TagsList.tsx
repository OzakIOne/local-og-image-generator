import React, {PropsWithChildren} from 'react';
import {BlogCenterTags} from '../types';

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

const TagsList = ({tags}: {tags: BlogCenterTags}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        marginRight: '2rem',
      }}>
      {tags &&
        Object.entries(tags).map(([key, value]) => (
          <Tag key={key}>
            {key} · {value.toString()}
          </Tag>
        ))}
    </div>
  );
};

export {TagsList};
