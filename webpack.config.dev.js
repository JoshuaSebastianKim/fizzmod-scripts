var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var paths = require('./paths.js')

module.exports = {
    /**************************/
    /* ADD CUSTOM CONFIG HERE */
    entry: paths,
    output: {
        publicPath: "/files/",
        filename: '[name].js',
        path: '../src/js'
    },
    /**************************/
    /* DO NOT EDIT THIS OR YOU WILL GET FIRED */
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "lodash": "lodash",
        "vtexjs": "vtexjs",
        "Fizzmod": "Fizzmod"
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/, // include .js files
        //         exclude: /node_modules/, // exclude any and all files in the node_modules folder
        //         loader: "jshint-loader"
        //     }
        // ],
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
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&-autoprefixer!postcss')
        }, {
            test: /\.(pug|jade)$/,
            loader: "pug-loader"
        }, {
            test: /\.svg$/,
            loader: 'file',
			query: {
				publicPath: "/arquivos",
				name: "../images/[name].[ext]"
			}
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
        new ExtractTextPlugin("../styles/[name].css")
    ],
    jshint: {
        esversion: 6
    }
}
