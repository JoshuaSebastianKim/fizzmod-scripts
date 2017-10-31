// Modules
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths.js');
const clearFolder = require('./clear-folder.js');
const { createConfigModule } = require('./utils.js');
const inquirer = require('inquirer');

// Configuration
const { argv, env } = process;
const NODE_ENV = env.NODE_ENV || 'development';

async function configPromise() {
	const answers = await inquirer.prompt([{
		type: 'list',
		name: 'COUNTRY',
		choices: ['AR', 'CL', 'CO', 'PE'],
		message: 'Seleccione un país:'
	}]);
	const { COUNTRY } = answers;
	const entry = paths[COUNTRY];

	const auroraConfig = createConfigModule(COUNTRY);

	const config = {
		entry,
		externals: {
			vtexjs: 'vtexjs',
			Fizzmod: 'Fizzmod',
			jQuery: 'jQuery',
			lodash: 'lodash',
			store: 'store',
			sessionStore: 'sessionStore'
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
									data: `@import "variables"; @import "mixins"; $ENV: "${COUNTRY}";`,
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
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				config: path.resolve(__dirname, './config')
			}
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
			}),
			new webpack.ProvidePlugin({
				CONFIG: 'config'
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
		//
	}

	// Build
	if (NODE_ENV === 'production') {
		clearFolder(path.join(__dirname, '../build', COUNTRY));

		// OUTPUT
		config.output.path = path.join(__dirname, '../build', COUNTRY);

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

	return config;
}

module.exports = configPromise;
