import React from 'react';
import {containerStyle} from './style/containerStyle.js';
import {DocusaurusLogo} from './logo.js';
import {Footer, CenterRow} from './components/index.js';
import {DefaultProps} from './types/index.js';

const Default = (props: DefaultProps) => {
  const logo =
    props.logo === 'false' ? null : props.logo ? (
      <img src={props.logo} alt="logo" style={{width: props.logowidth}} />
    ) : (
      <DocusaurusLogo size={props.logowidth} />
    );

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: 'flex',
          fontSize: '6rem',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}>
        <div>{props.title}</div>
      </div>
      <CenterRow>
        {logo}
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
            <div>{props.description}</div>
          </div>
          <Footer>{<div>{props.tagline}</div>}</Footer>
        </div>
      </CenterRow>
    </div>
  );
};

export {Default};
