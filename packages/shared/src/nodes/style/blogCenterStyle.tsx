import {CSSProperties} from 'react';

const containerStyle: CSSProperties = {
  minWidth: '100%',
  minHeight: '100%',
  backgroundImage:
    'linear-gradient(148deg, rgba(105,255,124,1) 0%, rgba(239,255,241,1) 26%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 54%, rgba(230,246,255,1) 66%, rgba(218,241,255,1) 70%, rgba(68,185,255,1) 100%)',
  display: 'flex',
};

const containerCenterStyle: CSSProperties = {
  ...containerStyle,
  justifyContent: 'center',
  flexDirection: 'column',
};

const titleStyle: CSSProperties = {
  marginLeft: '2rem',
};

const titleContainer: CSSProperties = {
  justifyContent: 'flex-start',
};

const textStyle: CSSProperties = {};

const text1Style: CSSProperties = {};

const text2Style: CSSProperties = {};

const text3Style: CSSProperties = {};

const textContainer: CSSProperties = {
  display: 'flex',
  fontWeight: 'bold',
  fontSize: '4rem',
  color: 'gray',
  flexDirection: 'column',
  marginTop: '2rem',
  width: '100%',
};

export {
  containerCenterStyle,
  titleStyle,
  textStyle,
  text1Style,
  text2Style,
  text3Style,
  textContainer,
  titleContainer,
};
