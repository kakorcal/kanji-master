const atImport = require('postcss-import');
const urls = require('postcss-url');
const cssnext = require('postcss-cssnext');
const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');
const browserReporter = require('postcss-browser-reporter');

module.exports = {
  plugins: [
    atImport(),
    urls(),
    cssnext({
      features: {
        customProperties: {
          preserve: true
        }
      }
    }),
    postcssPresetEnv({
      browsers: 'defaults'
    }),
    // put this plugin after stylelint if you want to see linter errors on the browser
    browserReporter(),
    stylelint()
  ]
};
