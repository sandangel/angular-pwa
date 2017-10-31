const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  stripPrefix: 'dist/apps/admin-mobile/browser',
  root: 'dist/apps/admin-mobile/browser/',
  plugin: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'admin-mobile',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'dist/apps/admin-mobile//browser/index.html',
        'dist/apps/admin-mobile//browser/**.js',
        'dist/apps/admin-mobile//browser/**.css'
      ],
      stripPrefix: 'dist/apps/admin-mobile/browser',
      mergeStaticsConfig: true
    })
  ]
};
