const merge = require('webpack-merge');
const common = require('./common.js');
const path = require('path');

module.exports = merge(
    common, 
    {
        mode: 'development',
        entry: ["idempotent-babel-polyfill", path.join(__dirname, "./../src/index.js")],
        devtool: 'inline-source-map',
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        output: {
            globalObject: 'self',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            pathinfo: true, // show module paths in the bundle, handy for debugging
        },
        devServer: {
            port: 3800,
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            historyApiFallback: true,
            proxy: {
                '/api/': {
                    target: "http://localhost:3900/",
                    secure: true,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api/': ''
                    },
                }
            }
        },
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                Assets: path.resolve(__dirname, '../src/assets'),
                Api: path.resolve(__dirname, '../src/api'),
                Containers: path.resolve(__dirname, '../src/containers'),
                Components: path.resolve(__dirname, '../src/components'),
                Constants: path.resolve(__dirname, '../src/constants'),
                Styles: path.resolve(__dirname, '../src/styles'),
            }
        }
    }
);