import React from 'react';
import {DocusaurusLogo} from './logo.js';
import {CenterRow, Header} from './components/index.js';
import {blogCenterProps} from './types/index.js';
import {
  titleStyle,
  textStyle,
  text1Style,
  text2Style,
  text3Style,
  textContainer,
  titleContainer,
  containerCenterStyle,
} from './style/blogCenterStyle.js';

const BlogCenter = (props: blogCenterProps) => {
  const logo =
    props.logo === 'false' ? null : props.logo ? (
      <img src={props.logo} alt="logo" style={{width: props.logowidth}} />
    ) : (
      <DocusaurusLogo size={props.logowidth} />
    );

  return (
    <div style={containerCenterStyle}>
      <Header
        style={{
          ...titleContainer,
          justifyContent: props.titlealign,
        }}>
        {logo}
        <div
          style={{
            ...titleStyle,
          }}>
          {props.title}
        </div>
      </Header>
      <CenterRow
        style={{
          justifyContent: props.textalign,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div
            style={{
              ...textContainer,
            }}>
            <div
              style={{
                ...textStyle,
                ...text1Style,
                fontSize: props.text1size,
              }}>
              {props.text1}
            </div>
            <div
              style={{
                ...textStyle,
                ...text2Style,
                fontSize: props.text2size,
              }}>
              {props.text2}
            </div>
            <div
              style={{
                ...textStyle,
                ...text3Style,
                fontSize: props.text3size,
              }}>
              {props.text3}
            </div>
          </div>
        </div>
      </CenterRow>
    </div>
  );
};

export {BlogCenter};
