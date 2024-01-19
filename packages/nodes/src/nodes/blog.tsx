import React from 'react';
import {ImageProps} from '@ozaki/types';
import {containerStyle} from './style/containerstyle';
import {DocusaurusLogo} from './logo';
import {AuthorImage, Footer, Header, Tags} from './components';

function checkAuthorImage(authorURL: string): boolean {
  return /^https?:\/\/(?:www\.)?\S+\.(png|jpe?g|gif|bmp)$/i.test(authorURL);
}

const Blog = (props: ImageProps) => (
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

export {Blog};
