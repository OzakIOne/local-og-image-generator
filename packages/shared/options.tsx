import type {ResvgRenderOptions} from '@resvg/resvg-js';
import {promises} from 'fs';
import type {SatoriOptions} from 'satori';
import React from 'react';
import type {CSSProperties} from 'react';

const fontPath = './src/Roboto-Regular.ttf';

const globalConfig = {
  satoriWidth: 1200,
  satoriHeight: 650,
  resvgWidth: 1200 * 2,
};

const satoriOptions: SatoriOptions = {
  width: globalConfig.satoriWidth,
  height: globalConfig.satoriHeight,

  // fonts: [],
  fonts: [
    {
      name: 'Roboto',
      data: await promises.readFile(fontPath),
      weight: 400,
      style: 'normal',
    },
  ],
  debug: true,
};

const ResvgOptions: ResvgRenderOptions = {
  background: 'rgba(255, 255, 255)',
  fitTo: {
    mode: 'width',
    value: globalConfig.resvgWidth,
  },
  font: {
    // fontFiles: [fontPath], // Load custom fonts.
    loadSystemFonts: false, // It will be faster to disable loading system fonts.
  },
};

const docusaurusLogoSvg = (size: number) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path fill="#FFF" d="M99 52h84v34H99z" />
      <path
        d="M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 003 163c0 11.046 8.954 20 20 20h20v-20H23z"
        fill="#3ECC5F"
      />
      <path
        d="M112.98 57.376L183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 01103 68c0-5.621 4.37-10.273 9.98-10.624"
        fill="#3ECC5F"
      />
      <path fill="#3ECC5F" d="M143 183h30v-40h-30z" />
      <path
        d="M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 00190.32 148a4.96 4.96 0 00-3.016 1.036 26.531 26.531 0 00-.335-.336 4.955 4.955 0 001.011-2.987 5 5 0 00-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 00-5-5 5 5 0 00-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 00-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 005-5 5 5 0 00-5-5"
        fill="#44D860"
      />
      <path fill="#3ECC5F" d="M153 123h30v-20h-30z" />
      <path
        d="M193 115.5a2.5 2.5 0 100-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 00-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 00-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 00-4.8-.979A9.987 9.987 0 00183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 004.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 00.963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032"
        fill="#44D860"
      />
      <path
        d="M63 55.5a2.5 2.5 0 01-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 11-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 01-2.5 2.5"
        fill="#000"
      />
      <path
        d="M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z"
        fill="#FFFF50"
      />
      <path
        d="M168.02 124h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0-49.814h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 19.814h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 00-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z"
        fill="#000"
      />
      <path fill="#3ECC5F" d="M83 183h40v-40H83z" />
      <path
        d="M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 00140.32 148a4.96 4.96 0 00-3.016 1.036 26.531 26.531 0 00-.335-.336 4.955 4.955 0 001.011-2.987 5 5 0 00-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 00-5-5 5 5 0 00-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 00-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 005-5 5 5 0 00-5-5"
        fill="#44D860"
      />
      <path fill="#3ECC5F" d="M83 123h40v-20H83z" />
      <path
        d="M133 115.5a2.5 2.5 0 100-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 00-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 00-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 00-4.8-.979A9.987 9.987 0 00123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 004.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 00.963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032"
        fill="#44D860"
      />
      <path
        d="M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 01-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 01-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 01-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 01-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 01-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 01-.96.19"
        fill="#000"
      />
    </g>
  </svg>
);

const defaultStyle: CSSProperties = {
  minWidth: '100%',
  minHeight: '100%',
  backgroundImage:
    'linear-gradient(148deg, rgba(105,255,124,1) 0%, rgba(239,255,241,1) 26%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 54%, rgba(230,246,255,1) 66%, rgba(218,241,255,1) 70%, rgba(68,185,255,1) 100%)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

const docStyle: CSSProperties = {
  minWidth: '100%',
  minHeight: '100%',
  backgroundImage:
    'linear-gradient(148deg, rgba(105,255,124,1) 0%, rgba(239,255,241,1) 26%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 54%, rgba(230,246,255,1) 66%, rgba(218,241,255,1) 70%, rgba(68,185,255,1) 100%)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

type SVGProps = {
  title?: string;
  description?: string;
  moto?: string;
  author?: string;
  authorURL?: string;
};

type SVGType = 'doc' | 'blog' | 'default';

const defaultNode = (props: SVGProps) => (
  <div style={defaultStyle}>
    <div
      style={{
        display: 'flex',
        fontSize: '6rem',
        fontWeight: 'bold',
        justifyContent: 'center',
      }}>
      {props.title || 'Docusaurus'}
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {docusaurusLogoSvg(300)}
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
          {props.description || 'Build optimized websites'}
        </div>
        <div
          style={{
            display: 'flex',
            color: 'gray',
            fontSize: '3rem',
          }}>
          {props.moto || 'Focus on your content'}
        </div>
      </div>
    </div>
  </div>
);

const docNode = (props: SVGProps) => (
  <div style={docStyle}>
    <div
      style={{
        display: 'flex',
        fontSize: '6rem',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: '2rem',
        marginLeft: '2rem',
      }}>
      {docusaurusLogoSvg(150)}
      {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
        }}>
        <div
          style={{
            display: 'flex',
            color: 'gray',
            fontSize: '3rem',
          }}>
          {props.description && <div>{props.description}</div>}
        </div>
      </div>
    </div>
  </div>
);

const blogNode = (props: SVGProps) => (
  <div style={docStyle}>
    <div
      style={{
        display: 'flex',
        fontSize: '6rem',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: '2rem',
        marginLeft: '2rem',
      }}>
      {docusaurusLogoSvg(150)}
      {props.title && <div style={{marginLeft: '2rem'}}>{props.title}</div>}
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
        }}>
        <div
          style={{
            display: 'flex',
            color: 'gray',
            fontSize: '3rem',
          }}>
          {props.authorURL && (
            <img
              src={props.authorURL}
              style={{width: 64, borderRadius: 50}}
              alt="Author profile picture"
            />
          )}
          {props.author && (
            <div style={{display: 'flex', alignItems: 'center'}}>
              {props.author}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export {
  satoriOptions,
  docusaurusLogoSvg,
  defaultStyle,
  docStyle,
  ResvgOptions,
  docNode,
  blogNode,
  defaultNode,
};
export type {SVGProps, SVGType};
