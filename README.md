# Local OG Image Generator

This project is a simple tool to generate Open Graph images for your website

## Documentation

### Images options

Available types of images: [`doc`](#doc-doc), [`blog`](#blog-blog), [`default`](#default-default), [`blogtop`](#blogtop-blogtop), [`blogcenter`](#blogcenter-blogcenter)

#### CLI

These are the options related to the CLI,

| Param Name | Param Type Value | Param Default Value          | Param Description        | Param Required |
| ---------- | ---------------- | ---------------------------- | ------------------------ | -------------- |
| `output`   | string           | -                            | Path for the output file | yes            |
| `font`     | string           | `'./src/Roboto-Regular.ttf'` | Path to the font file    | Optional       |
| `help`     | boolean          | -                            | Print cli help           | Optional       |

#### Doc `doc`

[Image link](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=doc&title=Doc)

![Doc image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=doc&title=Doc)

| Param Name    | Param Type Value    | Param Default Value         | Param Description                          | Param Required |
| ------------- | ------------------- | --------------------------- | ------------------------------------------ | -------------- |
| `title`       | string              | -                           | Title of the document                      | Yes            |
| `description` | string              | `Documentation description` | Description of the document                | Optional       |
| `logo`        | string or `'false'` | -                           | URL of the logo (false to remove the logo) | Optional       |
| `logowidth`   | number              | `250`                       | Width of the logo                          | Optional       |

#### Blog `blog`

> [Image link](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog)

![Blog image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog)

| Param Name  | Param Type Value    | Param Default Value               | Param Description                                                      | Param Required |
| ----------- | ------------------- | --------------------------------- | ---------------------------------------------------------------------- | -------------- |
| `title`     | string              | -                                 | Title of the blog                                                      | Yes            |
| `logo`      | string or `'false'` | -                                 | URL of the logo (false to remove the logo)                             | Optional       |
| `logowidth` | number              | `150`                             | Width of the logo                                                      | Optional       |
| `authorURL` | string (Image URL)  | `https://github.com/ozakione.png` | Link to the author's profile picture (image)                           | Optional       |
| `author`    | string              | `ozaki`                           | Name of the author                                                     | Optional       |
| `tags`      | string[]            | -                                 | Array of tags associated with the blog (there can't be duplicated tag) | Optional       |

> Note: To pass an array of strings in a query parameter, you can use the following syntax: `?type=blog&title=Blog&tags=tag1&tags=tag2`
>
> Example: `https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog&tags=tag1&tags=tag2`
>
> Note: to pass an array of strings in the cli you can use the following syntax: `--tags tag1 --tags tag2`
>
> Example: `pnpm cli:start blog --output ./blog.png  --title "My Blog" --tags tag1 --tags tag2`

#### BlogTop `blogtop`

[Image link](<https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogtop&title=Top%20title>)

![BlogTop image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogtop&title=Top%20title)

| Param Name   | Param Type Value                                                              | Param Default Value | Param Description                          | Param Required |
| ------------ | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | -------------- |
| `title`      | string                                                                        | -                   | The title of the blog                      | Yes            |
| `logo`       | string or `'false'`                                                           | -                   | URL of the logo (false to remove the logo) | Optional       |
| `logowidth`  | number                                                                        | `150`               | Width of the logo                          | Optional       |
| `text1`      | string                                                                        | `'text1'`           | Text content 1                             | Optional       |
| `text1size`  | string                                                                        | `'2rem'`            | Font size of text1                         | Optional       |
| `text2`      | string                                                                        | `'text2'`           | Text content 2                             | Optional       |
| `text2size`  | string                                                                        | `'2rem'`            | Font size of text2                         | Optional       |
| `text3`      | string                                                                        | `'text3'`           | Text content 3                             | Optional       |
| `text3size`  | string                                                                        | `'2rem'`            | Font size of text3                         | Optional       |
| `textalign`  | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Text alignment options                     | Optional       |
| `titlealign` | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Title alignment options                    | Optional       |

#### BlogCenter `blogcenter`

[Image link](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogcenter&title=Center%20title)

![BlogCenter image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogcenter&title=Center%20title)

| Param Name   | Param Type Value                                                              | Param Default Value | Param Description                          | Param Required |
| ------------ | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | -------------- |
| `title`      | string                                                                        | -                   | The title of the blog                      | Yes            |
| `logo`       | string or `'false'`                                                           | -                   | URL of the logo (false to remove the logo) | Optional       |
| `logowidth`  | number                                                                        | `150`               | Width of the logo                          | Optional       |
| `text1`      | string                                                                        | `'text1'`           | Text content 1                             | Optional       |
| `text1size`  | string                                                                        | `'2rem'`            | Font size of text1                         | Optional       |
| `text2`      | string                                                                        | `'text2'`           | Text content 2                             | Optional       |
| `text2size`  | string                                                                        | `'2rem'`            | Font size of text2                         | Optional       |
| `text3`      | string                                                                        | `'text3'`           | Text content 3                             | Optional       |
| `text3size`  | string                                                                        | `'2rem'`            | Font size of text3                         | Optional       |
| `textalign`  | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Text alignment options                     | Optional       |
| `titlealign` | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Title alignment options                    | Optional       |

#### Default `default`

![Default image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=default&title=Default)

| Param Name    | Param Type Value    | Param Default Value   | Param Description                           | Param Required |
| ------------- | ------------------- | --------------------- | ------------------------------------------- | -------------- |
| `title`       | String              | -                     | Title of the default content                | Yes            |
| `description` | String              | `Default description` | Description of the default content          | Optional       |
| `logo`        | string or `'false'` | -                     | URL of the logo (false to remove the logo)  | Optional       |
| `logowidth`   | number              | `150`                 | Width of the logo                           | Optional       |
| `tagline`     | String              | `Default tagline`     | Tagline associated with the default content | Optional       |

## Usage

```bash
git clone https://github.com/OzakIOne/local-og-image-generator/
cd local-og-image-generator
nvm use # (optional, just to have node 18)
corepack enable # (to have pnpm)
pnpm install
pnpm build
pnpm cli:start doc --output ./doc.png  --title "My Title" --description "My description"
pnpm cli:start blog --output ./blog.png  --title "My Blog" --authorURL "https://github.com/ozakione.png" --author "OzakIOne"
pnpm cli:start default --output ./default.png  --title "Ozaki's site" --description "My website" --tagline "I love coding"
pnpm cli:start blogtop --output ./blogtop.png  --title "Title" # and other otions
pnpm cli:start blogcenter --output ./blogcenter.png  --title "Title" # and other otions
```

## Deploy

### Vercel edge

The easiest way is to [create a github account](https://github.com/signup) if you don't have one, then fork this repository, then [create a vercel account](https://vercel.com/signup) with github, then create a new project in your [vercel dashboard](https://vercel.com/dashboard) and import the forked project

- Framework Preset : `Other`
- Output directory : `.`
- Root directory : `packages/vercel-edge-vanilla`
