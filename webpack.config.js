
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        // favicon     : './favicon.ico',
        // title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};

//webpack config
var config = {
  entry:    {
  	'index' : ['./src/page/index/index.js'],
  	'login' : ['./src/page/login/index.js'],
  	'common' : ['./src/page/common/index.js'],
  },//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    publicPath : '/dist',//访问文件时的路径
    filename: "js/[name].js"//打包后输出文件的文件名
  },
  externals : {
  	'jquery' : 'window.jQuery'
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            // {
            //     test: /\.string$/, 
            //     loader: 'html-loader',
            //     query : {
            //         minimize : true,
            //         removeAttributeQuotes : false
            //     }
            // }
        ]
    },
  plugins : [
  	//独立通用模块到js/base.js
  	new webpack.optimize.CommonsChunkPlugin({
  		name : 'common',
  		filename : 'js/base.js'
  	}),
  	//吧css单独打包到文件里
  	new ExtractTextPlugin("css/[name].css"),
  	//html模板的处理
  	new HtmlWebpackPlugin(getHtmlConfig('index')),
  	new HtmlWebpackPlugin(getHtmlConfig('login')),
  	
  	// new HtmlWebpackPlugin({
  	// 	template : './src/view/index.html',
  	// 	filename : 'view/index.html',
  	// 	inject   : true,
  	// 	hash 	 : true,
  	// 	chunks	 : ['common','index']
  	// })
  ]
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;
