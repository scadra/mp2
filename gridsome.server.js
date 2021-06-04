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
    let cookies;
    function relayRequestHeaders(proxyReq, req) {
      if (cookies) {
        console.log(cookies)
        let sessionId= cookies.find(cookie => cookie.includes("JSESSIONID"))
        if(sessionId) {
          let splitted = sessionId.split(';')
          console.log(splitted)
          let value = splitted[0].split("JSESSIONID=")
          console.log(value)
          proxyReq.setHeader('JSESSIONID', value[1]);

          console.log(proxyReq.headers)
        }
      }
    };
    
    function relayResponseHeaders(proxyRes, req, res) {
      let proxyCookie = proxyRes.headers["set-cookie"];
      if (proxyCookie) {
        cookies = proxyCookie;
        let sessionId= cookies.find(cookie => cookie.includes("JSESSIONID"));
        console.log(cookies)
      }
    };
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

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}