// Modules
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths.js');
const clearFolder = require('./clear-folder.js');
const inquirer = require('inquirer');

// Configuration
const { argv, env } = process;
const NODE_ENV = env.NODE_ENV || 'development';

const configPromise = new Promise(function(resolve, reject) {

	inquirer.prompt([{type: "list", name:"ENV",choices: ["AR", "CL", "CO", "PE"], message: "Seleccione un país:"}]).then(function (answers) {
		const { ENV } = answers;
		const entry = paths[ENV];


		const config = {
			entry,
			externals: {
				vtexjs: 'vtexjs',
				Fizzmod: 'Fizzmod',
				jQuery: 'jQuery',
				lodash: 'lodash'
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
						use: NODE_ENV === 'development' && argv.indexOf('--watch') === -1 ? [
							'style-loader',
							'css-loader?sourceMap',
							{
								loader: 'sass-loader',
								options: {
									data: '@import "variables"; @import "mixins";',
									includePaths: [
										path.resolve(__dirname, '../src/styles')
									]
								}
							}
						] : ExtractTextPlugin.extract({
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

		// DevServer
		if (NODE_ENV === 'development' && argv.indexOf('--watch') === -1) {
			// ENTRY
			const { entry } = config;
			config.entry = Object.keys(entry).reduce((entries, key) => {
				if (key === 'vendor') {
					return entries;
				}

				Object.assign(entries, {
					[key]: [
						'react-hot-loader/patch',
						entry[key]
					]
				});

				return entries;
			}, {});

			// OUTPUT
			config.output.path = path.join(__dirname, '../dist');
			config.output.filename = '[name].js';

			// PLUGINS
			config.plugins.push(
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin(),
				new HtmlWebpackPlugin({
					title: 'Dev server',
					template: 'fizzmod-scripts/templates/index.ejs'
				})
			);

			// DevServer
			config.devServer = {
				publicPath: '/',
				hot: true
			};
		}

		// Build
		if (NODE_ENV === 'production') {
			clearFolder(path.join(__dirname, '../build', ENV));

			// OUTPUT
			config.output.path = path.join(__dirname, '../build', ENV);

			// PLUGINS
			config.plugins.push(
				new webpack.optimize.UglifyJsPlugin(),
				new ExtractTextPlugin({
					filename: 'styles/[name].css'
				}),
				new HtmlWebpackPlugin({
					title: 'Dev server',
					template: 'fizzmod-scripts/templates/index.ejs'
				})
			);
		}

		resolve(config);
	});
});

module.exports = configPromise;