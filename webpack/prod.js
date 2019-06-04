const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');
const pkg = require('../package.json');
const libraryName= pkg.name;

module.exports = merge(
    common, 
    {
        devtool: 'source-map',
        mode: 'production',
        entry: ["idempotent-babel-polyfill", path.join(__dirname, "../src/index.js")],
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimize: true
        },
        output: {
            globalObject: 'self',
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].bundle.js',
            publicPath: '/',
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
            pathinfo: true, // show module paths in the bundle, handy for debugging
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
    