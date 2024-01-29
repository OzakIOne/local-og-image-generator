import React from 'react';
import {containerStyle} from './style/containerstyle.js';
import {DocusaurusLogo} from './logo.js';
import {AuthorImage, Footer, Header, Tags} from './components/index.js';
import {BlogProps} from './types/index.js';
import {blogSchema} from './validation/index.js';

function checkAuthorImage(authorURL: string): boolean {
  return /^https?:\/\/(?:www\.)?\S+\.(png|jpe?g|gif|bmp)$/i.test(authorURL);
}

const Blog = (props: BlogProps) => {
  blogSchema.parse(props);

  return (
    <div style={containerStyle}>
      <Header>
        <DocusaurusLogo size={150} />
        {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
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
            {props.authorURL && checkAuthorImage(props.authorURL) && (
              <AuthorImage size={96} author={props.authorURL} />
            )}
            {props.author && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '1rem',
                }}>
                {props.author}
              </div>
            )}
          </Footer>
        </div>
      </div>
      {props.tags && <Tags tags={props.tags}></Tags>}
    </div>
  );
};

export {Blog};
