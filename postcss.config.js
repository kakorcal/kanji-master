const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: 'last 2 versions'
    }),
    stylelint()
  ]
};
