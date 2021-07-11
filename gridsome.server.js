/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { default: axios } = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");
const https = require("https");
const fs = require("fs");
const apis = require("./apis.json");
const providers = require("./providers.json");

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

  // load apis from backend
  api.loadSource(async (actions) => {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false, // (NOTE: this will disable client verification)
      cert: fs.readFileSync("./LUXHUB_Root_CA.cer"),
    });
    /*const apis = await axios.get(
      `${process.env.GRIDSOME_BACK_URL}/api/api-cards`,
      {
        httpsAgent,
      }
    );*/
    const apisCollection = actions.addCollection({
      typeName: "Api",
    });

    // These are data needed for API Cards only. We need to add all API data later
    for (const item of apis.data) {
      apisCollection.addNode({
        id: item.id,
        logo: item.logo,
        name: item.name,
        description: item.description,
        version: item.version,
        provider: item.provider,
        environments: item.environments,
        categories: item.categories,
        published_date: item.published_date,
      });
    }

    /*const providers = await axios.get(
      `${process.env.GRIDSOME_BACK_URL}/api/api-providers`,
      {
        httpsAgent,
      }
    );*/
    const providersCollection = actions.addCollection({
      typeName: "Provider",
    });

    // These are data needed for API Providers only. We need to add all API data later
    for (const item of providers.data) {
      providersCollection.addNode({
        id: item.id,
        name: item.name,
        providerId: item.providerId,
      });
    }
  });
};
