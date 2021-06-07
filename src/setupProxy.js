// To allow web running locally to hit published demo service without CORS
// issues
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/demo1svc',
        createProxyMiddleware({
            // target: 'http://localhost:4567',
            target: 'https://demo1.dev.demo.cloudtruth.dev',
            // target: 'https://demo1.demo.cloudtruth.dev',
            pathRewrite: {'^/demo1svc' : ''},
            changeOrigin: true,
        })
    );
};
