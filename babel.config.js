module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
           'module-resolver',
           {
             root: ['.'],
             extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
             alias: {
                enums: "./sources/enums",
                assets: "./sources/assets",
                i18n: "./sources/i18n",
                models: "./sources/models",
                sources: "./sources/sources",
                theme: "./sources/theme",
                screens: "./sources/screens",
                router: "./sources/router",
                ts: "./ts"
             }
           }
         ]
        ]
  };
};
