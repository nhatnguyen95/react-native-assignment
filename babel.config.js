module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["."],
          alias: {
            "assets": "./src/assets",
            "components": "./src/components",
            "constants": "./src/constants",
            "core": "./src/core",
            "navigations": "./src/navigations",
            "screens": "./src/screens",
            "utils": "./src/utils",
            "services": "./src/services",
          },
        },
      ],
    ],
  }
}
