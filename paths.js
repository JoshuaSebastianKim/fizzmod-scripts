const path = require('path');

module.exports = {
	'ALL' : {
		"installments-calculator": path.resolve(__dirname, "../src/views/InstallmentsCalculatorView.js"),

		vendor: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'babel-polyfill'
		]
	}
};
