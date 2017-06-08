const path = require('path');

module.exports = {
	// 'overlay-calculate-installments': path.resolve(__dirname, '../src/views/InstallmentsCalculatorView.js'),
	// 'overlay-paper-gift': path.resolve(__dirname, '../src/components/overlay-paper-gift/overlay-paper-gift.js'),
	// 'overlay-shipping-preference': path.resolve(__dirname, '../src/views/ShippingPreferenceView.js'),
	// 'store-payment-methods': path.resolve(__dirname, '../src/views/PaymentMethodsView.js'),
	// 'store-shipping-methods': path.resolve(__dirname, '../src/views/ShippingMethodsView.js'),
	// 'store-faqs': path.resolve(__dirname, '../src/views/FaqsView.js'),
	// 'contact-contact': path.resolve(__dirname, '../src/views/ContactView.js'),
	// 'healthy-world': path.resolve(__dirname, '../src/views/HealthyWorld.js'),
	// discounts: path.resolve(__dirname, '../src/views/DiscountView.js'),
	// search: path.resolve(__dirname, '../src/views/SearchView.js'),
	// home: path.resolve(__dirname, '../src/views/HomeView'),
	'cart-view': path.resolve(__dirname, '../src/views/CartView.js'),

	vendor: [
		'react',
		'react-dom',
		'redux',
		'react-redux',
		'babel-polyfill'
	]
};
