module.exports = {
  extends: 'airbnb-base',
  installedESLint: true,
  plugins: ['import'],
  env: {
    browser: true,
  },
  globals: {
    _GITHUB_LANGS_: true,
    _GITHUB_LANG_: true,
    _GITHUB_SITE_: true,
  },
  rules: {
    'camelcase': 'off', // 驼峰
    'no-underscore-dangle': ['error', { allow: ['_GITHUB_LANGS_', '_GITHUB_LANG_'] }], // 全局翻译对象
    'max-len': 'off',
    'quote-props': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },
};
