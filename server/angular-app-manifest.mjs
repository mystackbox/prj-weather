
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
    'index.csr.html': {size: 5734, hash: 'c3ca6273dba58f4bc291f64b5f13f09eb967a94e655f22783a060a328291aff9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1091, hash: 'a326ff715611cf8f807be78a5da4196b17a4bfe08732bcd7cee56120d1710ff4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 20797, hash: '9e4715aa9ad04125a0ec5e12c1280fd05e18ab0534b5880e992ea33fd8e45713', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 44165, hash: 'a9e8493edc65f25387900722bf217c75b3bfc2cef62f85af910c28f4c55df115', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34266, hash: '5fdea38fa22e90968385411c51901ab58cc258082e35d609b9163bc3ad17afbf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-XDYWZ2S5.css': {size: 332759, hash: 'V53wMLzAkVI', text: () => import('./assets-chunks/styles-XDYWZ2S5_css.mjs').then(m => m.default)}
  },
};
