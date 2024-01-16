import React from 'react';
import {SVGProps, docStyle, docusaurusLogoSvg} from '../options';

function checkAuthorImage(authorURL: string): boolean {
  return /^https?:\/\/(?:www\.)?\S+\.(png|jpe?g|gif|bmp)$/i.test(authorURL);
}

const blogNode = (props: SVGProps) => (
  <div style={docStyle}>
    <div
      style={{
        display: 'flex',
        fontSize: '6rem',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: '2rem',
        marginLeft: '2rem',
      }}>
      {docusaurusLogoSvg(150)}
      {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
    </div>
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
        <div
          style={{
            display: 'flex',
            color: 'gray',
            fontSize: '3rem',
          }}>
          {checkAuthorImage(props.authorURL) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={props.authorURL}
              height={64}
              width={64}
              style={{width: 64, borderRadius: 50}}
              alt="Author profile picture"
            />
          )}
          {props.author && (
            <div style={{display: 'flex', alignItems: 'center'}}>
              {props.author}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export {blogNode};
