import React from 'react';
import {ImageProps} from '@ozaki/shared';
import {docStyle} from './style/docstyle';
import {DocusaurusLogo} from './logo';

const docNode = (props: ImageProps) => (
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
      <DocusaurusLogo size={150} />
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
