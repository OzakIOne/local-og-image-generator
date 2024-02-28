import React from 'react';
import {
  containerStyle,
  titleStyle,
  authorStyle,
  authorImageStyle,
} from './style/blogStyle.js';
import {DocusaurusLogo} from './logo.js';
import {AuthorImage, Footer, Header, Tags} from './components/index.js';
import {BlogProps} from './types/index.js';

const Blog = (props: BlogProps) => {
  const logo =
    props.logo === 'false' ? null : props.logo ? (
      <img src={props.logo} alt="logo" style={{width: props.logowidth}} />
    ) : (
      <DocusaurusLogo size={props.logowidth} />
    );

  return (
    <div style={containerStyle}>
      <Header>
        {logo}
        <div
          style={{
            ...titleStyle,
            marginLeft: '2rem',
          }}>
          {props.title}
        </div>
      </Header>
      <div
        style={{
          display: 'flex',
          marginTop: '4rem',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '2rem',
          }}>
          <Footer>
            <AuthorImage
              style={{...authorImageStyle}}
              authorURLSize={props.authorURLSize}
              authorURL={props.authorURL}
            />
            <div
              style={{
                ...authorStyle,
                display: 'flex',
                alignItems: 'center',
                marginLeft: '1rem',
              }}>
              {props.author}
            </div>
          </Footer>
        </div>
      </div>
      {props.tags && <Tags tags={props.tags}></Tags>}
    </div>
  );
};

export {Blog};
