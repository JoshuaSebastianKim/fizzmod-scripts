const path = require('path');

module.exports = {
	home: path.resolve(__dirname, '../src/views/HomeView'),

	vendor: [
		'react',
		'react-dom',
		'redux',
		'react-redux',
		'babel-polyfill'
	]
};
