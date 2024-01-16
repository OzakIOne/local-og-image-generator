import React from 'react';
import {SVGProps, defaultStyle, docusaurusLogoSvg} from '../options';

const defaultNode = (props: SVGProps) => (
  <div style={defaultStyle}>
    <div
      style={{
        display: 'flex',
        fontSize: '6rem',
        fontWeight: 'bold',
        justifyContent: 'center',
      }}>
      {props.title && <div>{props.title}</div>}
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {docusaurusLogoSvg(300)}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
        }}>
        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            fontSize: '4rem',
            color: 'gray',
            marginBottom: '2rem',
          }}>
          {props.description && <div>{props.description}</div>}
        </div>
        <div
          style={{
            display: 'flex',
            color: 'gray',
            fontSize: '3rem',
          }}>
          {props.moto && <div>{props.moto}</div>}
        </div>
      </div>
    </div>
  </div>
);

export {defaultNode};
