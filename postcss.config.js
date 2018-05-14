const cssnext = require('postcss-cssnext');
const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    cssnext({
      features: {
        customProperties: {
          preserve: true
        }
      }
    }),
    postcssPresetEnv({
      browsers: 'last 2 versions'
    }),
    stylelint()
  ]
};
