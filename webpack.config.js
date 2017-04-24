// Modules
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const paths = require('./paths.js');

// Configuration
const { NODE_ENV } = process.env;

const config = {
	entry: paths,
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		lodash: 'lodash',
		vtexjs: 'vtexjs',
		jQuery: 'jQuery',
		Fizzmod: 'Fizzmod',
		google: 'google',
		store: 'store'
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
							presets: ['react', 'env'],
							plugins: ['transform-object-rest-spread', 'transform-class-properties', 'transform-decorators']
						}
					}
				]
			}, {
				test: /\.(css|scss|sass)$/,
				use: ExtractTextPlugin.extract({
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
			'process.env': {
				'process.env': { NODE_ENV: JSON.stringify(NODE_ENV || 'development') }
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
			minChunks: Infinity
		})
	],
	devtool: 'source-map'
};

if (NODE_ENV === 'development') {
	// OUTPUT
	config.output.path = path.join(__dirname, '../src');
	config.output.filename = 'js/webpack/[name].js';

	// PLUGINS
	config.plugins.push(
		new ExtractTextPlugin({
			filename: 'styles/webpack/[name].css'
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
