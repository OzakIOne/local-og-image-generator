// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import vercel from 'vite-plugin-vercel';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), vercel()],
// },
//   vercel: {
//     // Vercel configuration
//   },

// );

// import react from '@vitejs/plugin-react-swc';
// import vercel from 'vite-plugin-vercel';
// import {UserConfig} from 'vite';

// export default {
//   plugins: [react(), vercel()],
//   vercel: {
//     additionalEndpoints: [
//       {
//         source: 'edge/param.tsx',
//         destination: `param`,
//         addRoute: true,
//       },
//       {
//         source: 'edge/og.tsx',
//         destination: `og`,
//         addRoute: true,
//       },
//       {
//         source: 'endpoints/edge.ts',
//         destination: `edge`,
//         addRoute: true,
//       },
//     ],
//   },
// } as UserConfig;

import vercel from 'vite-plugin-vercel';
import {UserConfig} from 'vite';

export default {
  plugins: [vercel()],
  vercel: {
    additionalEndpoints: [
      {
        source: 'edge/param.tsx',
        destination: `param`,
        addRoute: true,
      },
      {
        source: 'edge/og.tsx',
        destination: `og`,
        addRoute: true,
      },
      {
        source: 'edge/edge.ts',
        destination: `edge`,
        addRoute: true,
      },
    ],
    smart: false,
  },
} as UserConfig;
