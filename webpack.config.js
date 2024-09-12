const path = require('path');

module.exports = {
  mode: 'production',
  entry: './firebase-messaging-sw-esm.js',
  output: {
    filename: 'firebase-messaging-sw.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
