// Modules
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths.js');

// Configuration
const { argv, env } = process;
const NODE_ENV = env.NODE_ENV || 'development';

const config = {
	entry: paths,
	externals: {
		Fizzmod: 'Fizzmod'
	},
	output: {
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['env', { modules: false }],
								'react',
								'flow'
							],
							plugins: [
								'react-hot-loader/babel',
								'transform-object-rest-spread',
								'transform-class-properties',
								'transform-decorators'
							]
						}
					}
				]
			}, {
				test: /\.(css|scss|sass)$/,
				use: NODE_ENV === 'development' ?
					['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
				 	: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									autoprefixer({
										browsers: '> 1%, last 2 versions, iOS >= 8'
									})
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								data: '@import "variables"; @import "mixins";',
								includePaths: [
									path.resolve(__dirname, '../src/styles')
								]
							}
						}
					]
				})
			}, {
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
			minChunks: Infinity
		})
	],
	devtool: 'source-map'
};

// Watch
if (NODE_ENV === 'development' && argv.indexOf('--watch') !== -1) {
	// OUTPUT
	config.output.path = path.join(__dirname, '../src');
	config.output.filename = 'js/webpack/[name].js';

	config.watchOptions = {
		poll: true
	};

	// PLUGINS
	config.plugins.push(
		new ExtractTextPlugin({
			filename: 'styles/webpack/[name].css'
		})
	);
}

if (NODE_ENV === 'development' && argv.indexOf('--watch') === -1) {
	// OUTPUT
	config.output.path = path.join(__dirname, '../dist');
	config.output.filename = '[name].js';


	// PLUGINS
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'Dev server',
			template: 'templates/index.ejs'
		})
	);
}

if (NODE_ENV === 'production') {
	// OUTPUT
	config.output.path = path.join(__dirname, '../build');

	// PLUGINS
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({
			filename: 'styles/[name].css'
		})
	);
}

module.exports = config;
