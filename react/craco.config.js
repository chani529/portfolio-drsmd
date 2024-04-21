const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  ],
};
