import React from 'react';
import {ImageProps} from '@ozaki/shared';
import {docStyle} from './style/docstyle';
import {DocusaurusLogo} from './logo';
import {AuthorImage, Footer, Header} from './components';

function checkAuthorImage(authorURL: string): boolean {
  return /^https?:\/\/(?:www\.)?\S+\.(png|jpe?g|gif|bmp)$/i.test(authorURL);
}

const Blog = (props: ImageProps) => (
  <div style={docStyle}>
    <Header>
      <DocusaurusLogo size={150} />
      {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
    </Header>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
        }}>
        <Footer>
          {checkAuthorImage(props.authorURL) && (
            <AuthorImage author={props.authorURL} />
          )}
          {props.author && (
            <div style={{display: 'flex', alignItems: 'center'}}>
              {props.author}
            </div>
          )}
        </Footer>
      </div>
    </div>
  </div>
);

export {Blog};
