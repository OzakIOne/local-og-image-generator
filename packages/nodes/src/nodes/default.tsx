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
        {props.title && <div>{props.title}</div>}
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
            {props.description && <div>{props.description}</div>}
          </div>
          <Footer>{props.moto && <div>{props.moto}</div>}</Footer>
        </div>
      </CenterRow>
    </div>
  );
};

export {Default};
