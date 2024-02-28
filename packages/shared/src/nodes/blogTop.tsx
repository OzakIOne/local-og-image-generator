import React from 'react';
import {DocusaurusLogo} from './logo.js';
import {CenterRow, Header} from './components/index.js';
import {BlogCenterProps} from './types/index.js';
import {
  titleStyle,
  textStyle,
  mainContentStyle,
  subContentStyle,
  extraContentStyle,
  textContainer,
  titleContainer,
  containerTopStyle,
} from './style/blogTopStyle.js';
import {TagsList} from './components/TagsList.js';

const BlogTop = (props: BlogCenterProps) => {
  const logo =
    props.logo === 'false' ? null : props.logo ? (
      <img src={props.logo} alt="logo" style={{width: props.logowidth}} />
    ) : (
      <DocusaurusLogo size={props.logowidth} />
    );

  return (
    <div style={containerTopStyle}>
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
                ...mainContentStyle,
                fontSize: props.mainContentsize,
              }}>
              {props.mainContent} {props.tags && <TagsList tags={props.tags} />}
            </div>
            <div
              style={{
                ...textStyle,
                ...subContentStyle,
                fontSize: props.subContentsize,
              }}>
              {props.subContent}
            </div>
            <div
              style={{
                ...textStyle,
                ...extraContentStyle,
                fontSize: props.extraContentsize,
              }}>
              {props.extraContent}
            </div>
          </div>
        </div>
      </CenterRow>
    </div>
  );
};

export {BlogTop};
