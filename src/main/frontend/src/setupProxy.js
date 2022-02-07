const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://turismo-jujuy.herokuapp.com",
      changeOrigin: true,
    })
  );
};
