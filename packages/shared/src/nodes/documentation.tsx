import React from 'react';
import {containerStyle} from './style/containerstyle.js';
import {DocusaurusLogo} from './logo.js';
import {Footer, Header} from './components/index.js';
import {DocProps} from './types/index.js';

const Doc = (props: DocProps) => {
  return (
    <div style={containerStyle}>
      <Header>
        <DocusaurusLogo size={150} />
        <div style={{marginLeft: '2rem'}}>{props.title}</div>
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
          <Footer>{<div>{props.description}</div>}</Footer>
        </div>
      </div>
    </div>
  );
};

export {Doc};
