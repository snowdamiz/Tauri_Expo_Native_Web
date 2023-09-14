module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            constants: './src/dictionary/constants',
            theme: './src/theme',
            helpers: './src/helpers',
            store: './src/store',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,      
          safe: false,
          allowUndefined: true
        }
      ],
    ],
  };
};
