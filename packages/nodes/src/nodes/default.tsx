import React from 'react';
import {ImageProps} from '@ozaki/shared';
import {defaultStyle} from './style/defaultstyle';
import {DocusaurusLogo} from './logo';
import {CenterRow} from './components/CenterRow';
import {Footer} from './components';

const Default = (props: ImageProps) => (
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

export {Default};
