'use strict';

const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js'
    },
    devServer: {
        clientLogLevel: 'warning',//设置日志等级，控制在控制台输出的内容
        hot: true,//打开热更新
        inline: true,//如果开启inline， DevServer会在构建完变化后的代码时通过代理客户端控制网页刷新。
        open: true,//用于在 DevServer 启动且第一次构建完时自动用你系统上默认的浏览器去打开要开发的网页。 同时还提供 devServer.openPage 配置项用于打开指定 URL 的网页。
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html (解决histroy mode 404)
        host: 'localhost',
        port: '6789',
        compress: true //配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};

