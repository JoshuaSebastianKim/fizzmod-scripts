const path = require('path');

module.exports = {
	AR: {
		'coupons-marketec': path.resolve(__dirname, '../src/views/CouponMarketecView.js'),
		// 'overlay-calculate-installments': path.resolve(__dirname, '../src/views/InstallmentsCalculatorView.js'),
		'store-payment-methods': path.resolve(__dirname, '../src/views/PaymentMethodsView.js'),
		'store-shipping-methods': path.resolve(__dirname, '../src/views/ShippingMethodsView.js'),
		'store-faqs': path.resolve(__dirname, '../src/views/FaqsView.js'),
		'contact-contact': path.resolve(__dirname, '../src/views/ContactView.js'),
		discounts: path.resolve(__dirname, '../src/views/DiscountView.js'),
		// home: path.resolve(__dirname, '../src/views/HomeView'),
		'catalogs-and-offers': path.resolve(__dirname, '../src/views/CatalogsAndOffers.js'),
		'my-account': path.resolve(__dirname, '../src/views/MyAccountView.js'),
		'custom-landings': path.resolve(__dirname, '../src/views/CustomLandingsView.js'),
		
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
	CL_QA: {
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
		'product-specifications': path.resolve(__dirname, '../src/views/ProductSpecifications.js'),
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
