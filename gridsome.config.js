/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");
const fs = require("fs");

const packageJson = JSON.parse(
  fs.readFileSync("./package.json", {
    encoding: "utf-8",
  })
);

module.exports = {
  siteName: packageJson.name,
  siteDescription: packageJson.description,
  metadata: {
    siteVersion: packageJson.version,
    siteTimestamp: new Date().toISOString(),
  },
  icon: {
    favicon: "./src/favicon.png",
    touchicon: "./src/favicon.png",
  },
  plugins: [
    {
      use: "gridsome-plugin-typescript", //Need to be the last : if not ts-loader will be by passed ! -,
    },
  ],
  chainWebpack: (config) => {
    (devServer = {
      proxy: {
        "/api": {
          target: process.env.GRIDSOME_CAMUNDA_URL,
        },
      },
    }),
      config.resolve.alias
        .set("Assets", path.resolve(__dirname, "./src/assets/"))
        .set("Aspsp", path.resolve(__dirname, "./src/aspsp/"))
        .set("Components", path.resolve(__dirname, "./src/components/"))
        .set("Config", path.resolve(__dirname, "./src/config/"))
        .set("Constants", path.resolve(__dirname, "./src/constants/"))
        .set(
          "Interfaces",
          path.resolve(__dirname, "./src/services/interfaces/")
        )
        .set("Layouts", path.resolve(__dirname, "./src/layouts/"))
        .set("Models", path.resolve(__dirname, "./src/models/"))
        .set("Pages", path.resolve(__dirname, "./src/pages/"))
        .set("Styles", path.resolve(__dirname, "./src/styles/"))
        .set("Services", path.resolve(__dirname, "./src/services/impl/"))
        .set("Templates", path.resolve(__dirname, "./src/templates/"))
        .set("Store", path.resolve(__dirname, "./src/store/"))
        .set("Utils", path.resolve(__dirname, "./src/utils/"))
        .set("Validations", path.resolve(__dirname, "./src/validations/"));
  },
};
