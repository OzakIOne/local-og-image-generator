import satori from 'satori';
import {promises} from 'fs';
import {Resvg} from '@resvg/resvg-js';
import {dirname, join} from 'path';
import React from 'react';
import type {ReactNode} from 'react';
import fm from 'front-matter';
import {readdir, stat} from 'fs/promises';
import {cac} from 'cac';
import {
  satoriOptions,
  ResvgOptions,
  docusaurusLogoSvg,
  defaultStyle,
  docStyle,
} from '@ozaki/shared';
import type {SVGProps, SVGType} from '@ozaki/shared';

type SVGParams = {
  fileName: string;
  node?: ReactNode;
  props: SVGProps;
  type: SVGType;
};

type FrontMatter = {
  attributes: SVGProps;
};

type OptionsFrontMatter = Partial<FrontMatter>;

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

/**
 * Description placeholder
 * @date 1/2/2024 - 3:50:29 PM
 *
 * @async
 * @param {SVGParams} param0
 * @param {string} param0.fileName
 * @param {ReactNode} [param0.node]
 * @param {SVGProps} param0.props
 * @param {SVGType} param0.type
 * @returns {Promise<void>}
 */
const generateSvg = async ({
  fileName,
  node,
  props,
  type,
}: SVGParams): Promise<void> => {
  const dirPath = dirname(fileName);

  if (!(await promises.stat(dirPath).catch(() => false))) {
    await promises.mkdir(dirPath, {recursive: true});
  }

  const svg = await satori(
    <div style={{display: 'flex'}}>
      {(() => {
        switch (type) {
          case 'doc':
            return node ? node : docNode(props);
          case 'blog':
            return node ? node : blogNode(props);
          default:
            return node ? node : defaultNode(props);
        }
      })()}
    </div>,
    satoriOptions,
  );

  await promises.writeFile(fileName, svg);
};

/**
 * Transform a SVG file to a PNG file and write it to the disk
 * @date 1/2/2024 - 3:50:29 PM
 *
 * @async
 * @param {{ path: string }} param0
 * @param {string} param0.path
 * @returns {Promise<void>}
 */
async function generatePng({path}: {path: string}): Promise<void> {
  const svg = await promises.readFile(path);
  const resvg = new Resvg(svg, ResvgOptions);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await promises.writeFile(path.replace(/\.svg$/, '.png'), pngBuffer);
}

/**
 * Get front matter from a markdown file
 * @date 1/2/2024 - 3:50:28 PM
 *
 * @async
 * @returns {Promise<OptionsFrontMatter>}
 */
const getFrontMatter = async (
  path: string,
): Promise<OptionsFrontMatter['attributes']> => {
  const file = await promises.readFile(path, 'utf-8');
  const {attributes} = fm(file) as OptionsFrontMatter;
  return attributes;
};

/**
 * Get file names of all markdown files in a directory
 * @date 1/2/2024 - 3:50:28 PM
 *
 * @async
 * @param {string} dirPath
 * @returns {Promise<string[]>}
 */
async function getAllMarkdownFileNames(dirPath: string): Promise<string[]> {
  const files = await readdir(dirPath, {recursive: true});
  const markdownFiles = files.filter((file) => file.match(/\.(md|mdx)$/));

  return Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = join(dirPath, file);
      const fileStat = await stat(filePath);

      if (fileStat.isFile() && file.endsWith('.md')) {
        return filePath;
      } else return [];
    }),
  ).then((result) => result.flat());
}

/**
 * Generate the OG images for the blog and docs pages
 * @date 1/2/2024 - 3:50:28 PM
 *
 * @async
 * @returns {Promise<void>}
 */
async function generateOgImages({
  path,
  type,
}: {
  path: string;
  type: SVGType;
}): Promise<void> {
  const blogFiles = await getAllMarkdownFileNames(path);

  for (const file of blogFiles) {
    const attributes = await getFrontMatter(file);
    const fileNameGenerated = file.replace(
      /\/([^/]+)\.md$/,
      '/assets/og-image/$1.png',
    );
    await generateSvg({
      fileName: fileNameGenerated,
      props: {
        title: attributes?.title,
        author: attributes?.author,
        authorURL: attributes?.authorURL,
        description: attributes?.description,
      },
      type: type,
    });
    await generatePng({path: fileNameGenerated});
  }
}

const cli = cac('docusaurus-cli-og-image-generator');
cli
  .option('--path <name>', 'Choose a path to generate the OG images')
  .option(
    '--type <doc | blog | default>',
    'Choose which type of OG image to generate',
  );
cli.help();
cli.version('0.0.1');
const parsed = cli.parse();
console.log('parsed:', parsed);

if (
  typeof parsed.options.path === 'string' &&
  typeof parsed.options.type === 'string'
) {
  generateOgImages({
    path: parsed.options.path,
    type: parsed.options.type as SVGType,
  });
} else {
  throw new Error('Please specify a path and a type');
}
