import React from 'react';
import {ImageProps} from '@ozaki/types';
import {containerStyle} from './style/containerstyle';
import {DocusaurusLogo} from './logo';
import {Footer, Header} from './components';

const Doc = (props: ImageProps) => (
  <div style={containerStyle}>
    <Header>
      <DocusaurusLogo size={150} />
      {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
    </Header>
    <div
      style={{
        display: 'flex',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
        }}>
        <Footer>{props.description && <div>{props.description}</div>}</Footer>
      </div>
    </div>
  </div>
);

export {Doc};
