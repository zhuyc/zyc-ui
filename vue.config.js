const path = require("path");
const { config } = require("process");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(resolve("packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((option) => {
        return option;
      });
  },
};
