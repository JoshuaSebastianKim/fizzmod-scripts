const path = require('path');

module.exports = {
	AR: {
		'overlay-calculate-installments': path.resolve(__dirname, '../src/views/InstallmentsCalculatorView.js'),
		'store-payment-methods': path.resolve(__dirname, '../src/views/PaymentMethodsView.js'),
		'store-shipping-methods': path.resolve(__dirname, '../src/views/ShippingMethodsView.js'),
		'store-faqs': path.resolve(__dirname, '../src/views/FaqsView.js'),
		'contact-contact': path.resolve(__dirname, '../src/views/ContactView.js'),
		discounts: path.resolve(__dirname, '../src/views/DiscountView.js'),
		search: path.resolve(__dirname, '../src/views/SearchView.js'),
		// home: path.resolve(__dirname, '../src/views/HomeView'),
		'cart-view': path.resolve(__dirname, '../src/views/CartView.js'),
		vendor: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'babel-polyfill'
		]
	},
	CL: {
		login: path.resolve(__dirname, '../src/views/LoginView.js'),
		'store-selection': path.resolve(__dirname, '../src/views/StoreSelectionView.js'),
		'my-account': path.resolve(__dirname, '../src/views/MyAccountView.js'),
		'address-manager': path.resolve(__dirname, '../src/views/AddressManagerView.js'),
		vendor: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'babel-polyfill'
		]
	},
	CO: {
		'overlay-paper-gift': path.resolve(__dirname, '../src/components/overlay-paper-gift/overlay-paper-gift.js'),
		'coverage-search': path.resolve(__dirname, '../src/views/CoverageSearchView.js'),
		'healthy-world': path.resolve(__dirname, '../src/views/HealthyWorld.js'),
		'bag-adder': path.resolve(__dirname, '../src/views/BagAdderView.js'),
		vendor: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'babel-polyfill'
		]
	},
	PE: {
		'overlay-shipping-preference': path.resolve(__dirname, '../src/views/ShippingPreferenceView.js'),
		'my-account': path.resolve(__dirname, '../src/views/MyAccountView.js'),
		vendor: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'babel-polyfill'
		]
	}
};
