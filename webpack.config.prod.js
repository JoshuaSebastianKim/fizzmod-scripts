var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pug = require("pug-loader");

module.exports = {
	/**************************/
	/* ADD CUSTOM CONFIG HERE */
	entry: {
		"overlay-delivery-window-promos": '../src/components/overlay-delivery-window-promos/overlay-delivery-window-promos.js',
		"overlay-calculate-installments": '../src/components/overlay-calculate-installments/overlay-calculate-installments.js',
		"store-payment-methods": "../src/components/store-payment-methods/store-payment-methods.js",
		"discounts": "../src/components/discounts/discounts.js"
	},
	output: {
		publicPath: "/files/",
		filename: '[name].js',
		path: '../build/js'
	},
	/**************************/
	/* DO NOT EDIT THIS OR YOU WILL GET FIRED */
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"lodash": "lodash"
	},
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new ExtractTextPlugin("../css/[name].css"),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin()
	]
}