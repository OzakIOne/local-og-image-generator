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

| Param Name    | Param Type Value    | Param Default Value         | Param Description                          | Param Required | Query String Example              | CLI Example                        |
| ------------- | ------------------- | --------------------------- | ------------------------------------------ | -------------- | --------------------------------- | ---------------------------------- |
| `title`       | string              | -                           | Title of the document                      | Yes            | `&title=YourTitle`                | `--title YourTitle`                |
| `description` | string              | `Documentation description` | Description of the document                | Optional       | `&description=YourDescription`    | `--description YourDescription`    |
| `logo`        | string or `'false'` | -                           | URL of the logo (false to remove the logo) | Optional       | `&logo=https://your-logo-url.com` | `--logo https://your-logo-url.com` |
| `logowidth`   | number              | `250`                       | Width of the logo                          | Optional       | `&logowidth=200`                  | `--logowidth 200`                  |

#### Blog `blog`

> [Image link](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog)

![Blog image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog)

| Param Name  | Param Type Value    | Param Default Value               | Param Description                                           | Param Required | Query String Example                  | CLI Example                            |
| ----------- | ------------------- | --------------------------------- | ----------------------------------------------------------- | -------------- | ------------------------------------- | -------------------------------------- |
| `title`     | string              | -                                 | Title of the blog                                           | Yes            | `&title=YourTitle`                    | `--title YourTitle`                    |
| `logo`      | string or `'false'` | -                                 | URL of the logo (false to remove the logo)                  | Optional       | `&logo=https://your-logo-url.com`     | `--logo https://your-logo-url.com`     |
| `logowidth` | number              | `150`                             | Width of the logo                                           | Optional       | `&logowidth=200`                      | `--logowidth 200`                      |
| `authorURL` | string (Image URL)  | `https://github.com/ozakione.png` | Link to the author's profile picture (image)                | Optional       | `&authorURL=https://author-image.com` | `--authorURL https://author-image.com` |
| `authorURLSize`| number              | `96`                               | Size of the author's profile picture (Optional, Default: `96` | Optional       | `&authorURLSize=120`                    | `--authorURLSize 120`                   |
| `author`    | string              | `ozaki`                           | Name of the author                                          | Optional       | `&author=AuthorName`                  | `--author AuthorName`                  |
| `tags`      | string[]            | -                                 | Array of tags associated with the blog (no duplicated tags) | Optional       | `&tags=tag1&tags=tag2`                | `--tags tag1 --tags tag2`              |

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

| Param Name         | Param Type Value                                                              | Param Default Value | Param Description                          | Param Required | Query String Example              | CLI Example                        |
| ------------------ | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | -------------- | --------------------------------- | ---------------------------------- |
| `title`            | string                                                                        | -                   | The title of the blog                      | Yes            | `&title=YourTitle`                | `--title YourTitle`                |
| `logo`             | string or `'false'`                                                           | -                   | URL of the logo (false to remove the logo) | Optional       | `&logo=https://your-logo-url.com` | `--logo https://your-logo-url.com` |
| `logowidth`        | number                                                                        | `150`               | Width of the logo                          | Optional       | `&logowidth=200`                  | `--logowidth 200`                  |
| `mainContent`      | string                                                                        | `'mainContent'`     | Text content 1                             | Optional       | `&mainContent=YourMainContent`    | `--mainContent YourMainContent`    |
| `mainContentsize`  | string                                                                        | `'2rem'`            | Font size of mainContent                   | Optional       | `&mainContentsize=1.5rem`         | `--mainContentsize 1.5rem`         |
| `subContent`       | string                                                                        | `'subContent'`      | Text content 2                             | Optional       | `&subContent=YourSubContent`      | `--subContent YourSubContent`      |
| `subContentsize`   | string                                                                        | `'2rem'`            | Font size of subContent                    | Optional       | `&subContentsize=1.5rem`          | `--subContentsize 1.5rem`          |
| `extraContent`     | string                                                                        | `'extraContent'`    | Text content 3                             | Optional       | `&extraContent=YourExtraContent`  | `--extraContent YourExtraContent`  |
| `extraContentsize` | string                                                                        | `'2rem'`            | Font size of extraContent                  | Optional       | `&extraContentsize=1.5rem`        | `--extraContentsize 1.5rem`        |
| `textalign`        | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Text alignment options                     | Optional       | `&textalign=center`               | `--textalign center`               |
| `titlealign`       | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Title alignment options                    | Optional       | `&titlealign=flex-start`          | `--titlealign flex-start`          |
| `tags`             | Record<string, number>                                                        | -                   | Array of tags associated with the blog     | Optional       | `&tags[react]=1&tags[js]=3`       | `--tags tag1,tag2`                 |

#### BlogCenter `blogcenter`

[Image link](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogcenter&title=Center%20title)

![BlogCenter image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blogcenter&title=Center%20title)

| Param Name         | Param Type Value                                                              | Param Default Value | Param Description                          | Param Required | Query String Example              | CLI Example                        |
| ------------------ | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | -------------- | --------------------------------- | ---------------------------------- |
| `title`            | string                                                                        | -                   | The title of the blog                      | Yes            | `&title=YourTitle`                | `--title YourTitle`                |
| `logo`             | string or `'false'`                                                           | -                   | URL of the logo (false to remove the logo) | Optional       | `&logo=https://your-logo-url.com` | `--logo https://your-logo-url.com` |
| `logowidth`        | number                                                                        | `150`               | Width of the logo                          | Optional       | `&logowidth=200`                  | `--logowidth 200`                  |
| `mainContent`      | string                                                                        | `'mainContent'`     | Text content 1                             | Optional       | `&mainContent=YourMainContent`    | `--mainContent YourMainContent`    |
| `mainContentsize`  | string                                                                        | `'2rem'`            | Font size of mainContent                   | Optional       | `&mainContentsize=1.5rem`         | `--mainContentsize 1.5rem`         |
| `subContent`       | string                                                                        | `'subContent'`      | Text content 2                             | Optional       | `&subContent=YourSubContent`      | `--subContent YourSubContent`      |
| `subContentsize`   | string                                                                        | `'2rem'`            | Font size of subContent                    | Optional       | `&subContentsize=1.5rem`          | `--subContentsize 1.5rem`          |
| `extraContent`     | string                                                                        | `'extraContent'`    | Text content 3                             | Optional       | `&extraContent=YourExtraContent`  | `--extraContent YourExtraContent`  |
| `extraContentsize` | string                                                                        | `'2rem'`            | Font size of extraContent                  | Optional       | `&extraContentsize=1.5rem`        | `--extraContentsize 1.5rem`        |
| `textalign`        | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Text alignment options                     | Optional       | `&textalign=center`               | `--textalign center`               |
| `titlealign`       | `'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around'` | `'center'`          | Title alignment options                    | Optional       | `&titlealign=flex-start`          | `--titlealign flex-start`          |
| `tags`             | Record<string, number>                                                        | -                   | Array of tags associated with the blog     | Optional       | `&tags[react]=1&tags[js]=3`       | `--tags tag1:1,tag2:2`             |

#### Default `default`

![Default image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=default&title=Default)

| Param Name    | Param Type Value    | Param Default Value   | Param Description                           | Param Required | Query String Example              | CLI Example                        |
| ------------- | ------------------- | --------------------- | ------------------------------------------- | -------------- | --------------------------------- | ---------------------------------- |
| `title`       | String              | -                     | Title of the default content                | Yes            | `&title=YourTitle`                | `--title YourTitle`                |
| `description` | String              | `Default description` | Description of the default content          | Optional       | `&description=YourDescription`    | `--description YourDescription`    |
| `logo`        | string or `'false'` | -                     | URL of the logo (false to remove the logo)  | Optional       | `&logo=https://your-logo-url.com` | `--logo https://your-logo-url.com` |
| `logowidth`   | number              | `150`                 | Width of the logo                           | Optional       | `&logowidth=200`                  | `--logowidth 200`                  |
| `tagline`     | String              | `Default tagline`     | Tagline associated with the default content | Optional       | `&tagline=YourTagline`            | `--tagline YourTagline`            |

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
pnpm cli:start blogcenter --output ./blogcenter.png  --title "Title" --tags.react '2' --tags.js '3' # and other otions
```

## Customization

You can customize the images by forking the project and modifying the css files in `./packages/shared/src/nodes/style` or you can change the layout by modifying the `./packages/shared/src/nodes` or `./packages/shared/src/nodes/components` files

## Deploy

### Vercel edge

The easiest way is to [create a github account](https://github.com/signup) if you don't have one, then fork this repository, then [create a vercel account](https://vercel.com/signup) with github, then create a new project in your [vercel dashboard](https://vercel.com/dashboard) and import the forked project

- Framework Preset : `Other`
- Output directory : `.`
- Root directory : `packages/vercel-edge-vanilla`
