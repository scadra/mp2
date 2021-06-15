// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {
  createProxyMiddleware
} = require("http-proxy-middleware");

module.exports = function (api) {

  // Create middleware for api
  api.configureServer(app => {
    app.use(
      createProxyMiddleware("/api/", {
        target: `${process.env.GRIDSOME_BACK_URL}`,
        changeOrigin: true,
      }),
    );
  });


  api.loadSource(({
    addCollection
  }) => {})

  api.createPages(({ createPage }) => {
    createPage(  {
      path: '/component/apiportal/reset',
      component: './src/pages/new-password.vue'
    })
  })
}