# Local OG Image Generator

This project is a simple tool to generate Open Graph images for your website

## Documentation

### Images options

#### Doc

![Doc image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=doc)

- title
- description

#### Blog

![Blog image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=blog)

- title
- description
- authorURL (author's profile picture, must be a link to an image)
- author (author's name)

#### Default

![Default image preview](https://local-og-image-generator-web-git-ozaki-project-ozakione.vercel.app/api/param?type=default)

- title
- description
- moto

## Usage

```bash
git clone https://github.com/OzakIOne/local-og-image-generator/
cd local-og-image-generator
nvm use # (optional, just to have node 18)
pnpm install
pnpm cli:start --output ./doc.png --type doc --title "My Title" --description "My description"
pnpm cli:start --output ./blog.png --type blog --title "My Blog" --description "My article" --authorURL "https://github.com/ozakione.png" --author "OzakIOne"
pnpm cli:start --output ./default.png --type default --title "Ozaki's site" --description "My website" --moto "I love coding"
```

## Deploy

### Vercel edge

- Framework Preset : `Next.js`
- Install command : `pnpm install`
- Build command : `pnpm build`
- Root directory : `packages/web`

### Other edge

- [ ] Todo
