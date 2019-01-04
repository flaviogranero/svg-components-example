var path = require('path');
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          svg: path.resolve(__dirname, './static')
        }
      }
    ],
    ['inline-react-svg']
  ]
};
