import React from 'react';
import {SVGProps, docStyle, docusaurusLogoSvg} from '../options';

const docNode = (props: SVGProps) => (
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
          {props.description && <div>{props.description}</div>}
        </div>
      </div>
    </div>
  </div>
);

export {docNode};
