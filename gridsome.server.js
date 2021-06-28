/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { default: axios } = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (api) {
  // Create middleware for api
  api.configureServer((app) => {
    app.use(
      createProxyMiddleware("/api/", {
        target: `${process.env.GRIDSOME_BACK_URL}`,
        changeOrigin: true,
      })
    );
  });

  api.createPages(({ createPage }) => {
    createPage({
      path: "/component/apiportal/reset",
      component: "./src/pages/new-password.vue",
    });
  });

  api.loadSource(async (actions) => {
    const apis = await axios.get(
      `${process.env.GRIDSOME_BACK_URL}/api/api-cards`
    );
    const apisCollection = actions.addCollection({
      typeName: "Apis",
    });

    const titi = "toto";

    for (const item of apis.data) {
      apisCollection.addNode({
        content: item.content,
        title: item.title,
      });
    }
  });
};
