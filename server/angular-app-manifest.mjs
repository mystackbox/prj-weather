
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/prj-weather/',
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
    'index.csr.html': {size: 5706, hash: '4553bea4d547431898a408d707de957cfefd9a7e6588201bf045d0c327c3505d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: '8af3d86dc452161ae8b6169ec4428a44742b6b7ad6721d4e918f344b0eff6a57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 20713, hash: '5ebd378183d512aaa66a36b0de808297ff6698c009babc2183f75943b4a82455', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34182, hash: 'b7f686338f7fdcbe1568a9c6c76346e2ca936f1986136f695dffa5c4e91de9c3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 44081, hash: '147a42ff0b7a900d7bf4efa9c9958512f0f9bc9968215037565bbdca1ce8da9d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-XDYWZ2S5.css': {size: 332759, hash: 'V53wMLzAkVI', text: () => import('./assets-chunks/styles-XDYWZ2S5_css.mjs').then(m => m.default)}
  },
};
