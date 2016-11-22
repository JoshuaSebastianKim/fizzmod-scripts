var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pug = require("pug-loader");

module.exports = {
	/**************************/
	/* ADD CUSTOM CONFIG HERE */
	entry: {
		main: '../src/main.js'
	},
	output: {
		publicPath: "/files/",
		filename: '[name].js',
		path: '../src/build/files'
	},
	/**************************/
	/* DO NOT EDIT THIS OR YOU WILL GET FIRED */
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: [
					require.resolve('babel-preset-es2015'),
					require.resolve('babel-preset-react')
				],
				plugins: [
					require.resolve('babel-plugin-transform-runtime'),
					require.resolve('babel-plugin-transform-es2015-modules-amd')
				]
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&-autoprefixer!postcss')
		}, {
			test: /\.(pug|jade)$/,
			loader: "pug-loader"
		}]
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json', ".css"],
		root: [
			path.resolve(__dirname, "node_modules")
		]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	postcss: function() {
		return [
			autoprefixer({
				browsers: [
					'>1%',
					'last 4 versions',
					'Firefox ESR',
					'not ie < 9', // React doesn't support IE8 anyway
				]
			}),
		];
	},
	plugins: [
		new ExtractTextPlugin("style.css", {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			title: 'index pug-file',
			template: '../src/index.pug',
			filename: '../index.html',
			chunks: ['main']
		})
	]
}