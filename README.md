# Local OG Image Generator

This project is a simple tool to generate Open Graph images for your website

## Documentation

### Images

#### Doc

- title
- description

#### Blog

- title
- description
- authorURL (author's profile picture, must be a link to an image)
- author (author's name)

#### Default

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

To change the font used, you can change the `OG_FONT` env variable :

```bash
FONT_PATH='./src/Pacifico.ttf' pnpm cli:start --output ./doc.png --type doc --title "My Title" --description "My description"
```

## Deploy

### Vercel

Framework Preset : `Next.js`
Install command : `pnpm install`
Build command : `pnpm build`

Root directory : `packages/web`
