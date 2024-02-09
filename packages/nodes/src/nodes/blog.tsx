import React from 'react';
import {containerStyle} from './style/containerstyle.js';
import {DocusaurusLogo} from './logo.js';
import {AuthorImage, Footer, Header, Tags} from './components/index.js';
import {BlogProps} from './types/index.js';

function isImageValid(authorURL: string | undefined): boolean {
  if (authorURL === undefined) {
    return false;
  } else if (authorURL === '') {
    return true;
  }

  return /^https?:\/\/(?:www\.)?\S+\.(png|jpe?g|gif|bmp)$/i.test(authorURL);
}

const Blog = (props: BlogProps) => {
  return (
    <div style={containerStyle}>
      <Header>
        <DocusaurusLogo size={150} />
        <div style={{marginLeft: '2rem'}}>{props.title || 'Blog title'}</div>
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
            {isImageValid(props.authorURL) && (
              <AuthorImage
                size={96}
                author={props.authorURL || 'https://github.com/ozakione.png'}
              />
            )}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '1rem',
              }}>
              {props.author || 'ozakione'}
            </div>
          </Footer>
        </div>
      </div>
      {props.tags && <Tags tags={props.tags}></Tags>}
    </div>
  );
};

export {Blog};
