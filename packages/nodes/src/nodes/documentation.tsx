import React from 'react';
import {containerStyle} from './style/containerstyle.js';
import {DocusaurusLogo} from './logo.js';
import {Footer, Header} from './components/index.js';
import {DocProps} from './types/index.js';
import {docSchema} from './validation/index.js';

const Doc = (props: DocProps) => {
  docSchema.parse(props);

  return (
    <div style={containerStyle}>
      <Header>
        <DocusaurusLogo size={150} />
        {props.title && (
          <div style={{marginLeft: '2rem'}}>
            {props.title || 'Documentation title'}
          </div>
        )}
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
          <Footer>
            {props.description && (
              <div>{props.description || 'Documentation description'}</div>
            )}
          </Footer>
        </div>
      </div>
    </div>
  );
};

export {Doc};
