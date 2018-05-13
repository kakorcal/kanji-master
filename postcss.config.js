import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'stylelint';

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: 'last 2 versions'
    }),
    stylelint()
  ]
};
