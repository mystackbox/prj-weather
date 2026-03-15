
export default {
  basePath: 'https://mystackbox.github.io/prj-weather',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
