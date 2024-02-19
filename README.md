# Local OG Image Generator

This project is a simple tool to generate Open Graph images for your website

## Documentation

### Images options

#### Doc

![Doc image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=doc&title=Doc)

| Param Name  | Param Type Value | Param Default Value         | Param Description           |
| ----------- | ---------------- | --------------------------- | --------------------------- |
| title       | String           | **required**                | Title of the document       |
| description | String           | `Documentation description` | Description of the document |

#### Blog

![Blog image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog)

| Param Name | Param Type Value   | Param Default Value               | Param Description                                                      |
| ---------- | ------------------ | --------------------------------- | ---------------------------------------------------------------------- |
| title      | String             | **required**                      | Title of the blog                                                      |
| authorURL  | String (Image URL) | `https://github.com/ozakione.png` | Link to the author's profile picture (image)                           |
| author     | String             | `ozaki`                           | Name of the author                                                     |
| tags       | Array of Strings   | **optional**                      | Array of tags associated with the blog (there can't be duplicated tag) |

> Note: To pass an array of strings in a query parameter, you can use the following syntax: `?type=blog&title=Blog&tags=tag1&tags=tag2`
>
> Example: `https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog&title=Blog&tags=tag1&tags=tag2`
>
> Note: to pass an array of strings in the cli you can use the following syntax: `--tags tag1 --tags tag2`
>
> Example: `pnpm cli:start blog --output ./blog.png  --title "My Blog" --tags tag1 --tags tag2`

#### Default

![Default image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=default&title=Default)

| Param Name  | Param Type Value | Param Default Value   | Param Description                           |
| ----------- | ---------------- | --------------------- | ------------------------------------------- |
| title       | String           | **required**          | Title of the default content                |
| description | String           | `Default description` | Description of the default content          |
| tagline     | String           | `Default tagline`     | Tagline associated with the default content |

## Usage

```bash
git clone https://github.com/OzakIOne/local-og-image-generator/
cd local-og-image-generator
nvm use # (optional, just to have node 18)
pnpm install
pnpm cli:start doc --output ./doc.png  --title "My Title" --description "My description"
pnpm cli:start blog --output ./blog.png  --title "My Blog" --authorURL "https://github.com/ozakione.png" --author "OzakIOne"
pnpm cli:start default --output ./default.png  --title "Ozaki's site" --description "My website" --tagline "I love coding"
```

## Deploy

### Vercel edge

- Framework Preset : `Other`
- Output directory : `.`
- Root directory : `packages/vercel-edge-vanilla`
