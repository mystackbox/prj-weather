
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mystackbox.github.io/prj-weather/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/prj-weather/home",
    "route": "/prj-weather"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H2GRC4TO.js",
      "chunk-KD7BMFLQ.js"
    ],
    "route": "/prj-weather/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7WUJIZC4.js",
      "chunk-KD7BMFLQ.js"
    ],
    "route": "/prj-weather/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JNMDKYEB.js"
    ],
    "route": "/prj-weather/not-found"
  },
  {
    "renderMode": 2,
    "redirectTo": "/prj-weather/not-found",
    "route": "/prj-weather/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5734, hash: 'da4d6123efd1224d8d57a69c4eaadef30762823f9b1251c6a6004748a388d597', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1091, hash: '9c166a3d02de468c7a5bd52cc1c5467c72b424cf0cefab8962a8de7cf1d75005', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 20804, hash: '727c7269ce99f1061fe7054c4698245193af185d8a44e127f4afcfdfe43b1ed4', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34273, hash: '05b7250c464d561c535bd48bbee8db5e9915049350e84203b4ce477b9e07ac8b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 44172, hash: '80058643a0b449d26b17d43c4dc05419c2c24f7a54e917670e2bd064e84b30bf', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-V3HRKWW5.css': {size: 332766, hash: 'kpChRh4XYus', text: () => import('./assets-chunks/styles-V3HRKWW5_css.mjs').then(m => m.default)}
  },
};
