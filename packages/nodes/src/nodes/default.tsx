import React from 'react';
import {containerStyle} from './style/containerstyle.js';
import {DocusaurusLogo} from './logo.js';
import {Footer, CenterRow} from './components/index.js';
import {DefaultProps} from './types/index.js';
import {defaultSchema} from './validation/index.js';

const Default = (props: DefaultProps) => {
  defaultSchema.parse(props);

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: 'flex',
          fontSize: '6rem',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}>
        <div>{props.title || 'Docusaurus'}</div>
      </div>
      <CenterRow>
        <DocusaurusLogo size={300} />
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
            <div>{props.description || 'Build optimized websites quickly'}</div>
          </div>
          <Footer>{<div>{props.moto || 'focus on your content'}</div>}</Footer>
        </div>
      </CenterRow>
    </div>
  );
};

export {Default};
