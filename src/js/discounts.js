/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/files";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(64), __webpack_require__(18), __webpack_require__(19), __webpack_require__(22), __webpack_require__(57), __webpack_require__(1), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(72), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_extends2, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _reactDom, _discounts, _DiscountList, _Bank) {
		'use strict';

		var _extends3 = _interopRequireDefault(_extends2);

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _react2 = _interopRequireDefault(_react);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _discounts2 = _interopRequireDefault(_discounts);

		var _DiscountList2 = _interopRequireDefault(_DiscountList);

		var _Bank2 = _interopRequireDefault(_Bank);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		console.log(_discounts2.default);

		///////////////
		// CONSTANTS //
		///////////////

		var dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		var filterTypes = [{
			type: "date",
			iconClassName: "filter-date",
			filterText: "Por Día"
		}, {
			type: "bank",
			iconClassName: "filter-bank",
			filterText: "Por Banco"
		}, {
			type: "jumbomas",
			iconClassName: "jumbomas",
			filterText: null
		}, {
			type: "cencosud",
			iconClassName: "cencosud",
			filterText: "Tarjeta Cencosud"
		}];

		//////////////////////////
		// STATELESS COMPONENTS //
		//////////////////////////

		var DiscountsFilter = function DiscountsFilter(props) {
			var isActive = props.activeFilter === props.type;

			return _react2.default.createElement(
				'button',
				{ className: 'discounts__filter-type discounts__filter-type--' + (isActive ? "active" : "inactive"), onClick: props.onClick },
				_react2.default.createElement(
					'span',
					{ className: 'discounts__filter-icon' },
					_react2.default.createElement('div', { className: 'font-icn ' + props.iconClassName })
				),
				props.filterText && _react2.default.createElement(
					'span',
					{ className: 'discounts__filter-text' },
					props.filterText
				)
			);
		};

		var DayFilter = function DayFilter(props) {
			var isActive = props.activeDay === props.dayNumber;

			return _react2.default.createElement(
				'button',
				{ className: 'discounts__filter-day discounts__filter-day--' + (isActive ? "active" : "inactive"), onClick: props.onClick },
				_react2.default.createElement(
					'div',
					{ className: 'discounts__filter-day-name' },
					props.dayName
				)
			);
		};

		var BankFilter = function BankFilter(props) {
			return _react2.default.createElement(
				'button',
				{ className: 'discounts__filter-bank', onClick: props.onClick },
				props.children
			);
		};

		////////////////
		// COMPONENTS //
		////////////////

		var Discounts = function (_React$Component) {
			(0, _inherits3.default)(Discounts, _React$Component);

			function Discounts() {
				(0, _classCallCheck3.default)(this, Discounts);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Discounts.__proto__ || (0, _getPrototypeOf2.default)(Discounts)).call(this));

				_this.state = {
					activeFilter: "date",
					activeDay: new Date().getDay() === 0 ? 1 : new Date().getDay(),
					activeBank: null
				};
				return _this;
			}

			(0, _createClass3.default)(Discounts, [{
				key: 'setDiscountFilter',
				value: function setDiscountFilter(filter) {
					this.setState({
						activeFilter: filter,
						activeDay: new Date().getDay() === 0 ? 1 : new Date().getDay(),
						activeBank: null
					});
				}
			}, {
				key: 'setDayFilter',
				value: function setDayFilter(day) {
					this.setState({
						activeDay: day
					});
				}
			}, {
				key: 'setBankFilter',
				value: function setBankFilter(bank) {
					this.setState({
						activeBank: bank
					});
				}
			}, {
				key: 'render',
				value: function render() {
					var _this2 = this;

					var _state = this.state,
					    activeFilter = _state.activeFilter,
					    activeDay = _state.activeDay,
					    activeBank = _state.activeBank;


					return _react2.default.createElement(
						'div',
						{ className: 'discounts__container' },
						_react2.default.createElement(
							'div',
							{ className: 'discounts__header' },
							_react2.default.createElement(
								'div',
								{ className: 'discounts__header-title' },
								'Descuentos'
							),
							_react2.default.createElement(
								'div',
								{ className: 'discounts__header-subtitle' },
								'Conoc\xE9 todos nuestros descuentos'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'discounts__body' },
							_react2.default.createElement(
								'div',
								{ className: 'discounts__filter-type-container' },
								filterTypes.map(function (filter) {
									return _react2.default.createElement(DiscountsFilter, (0, _extends3.default)({ key: filter.type }, filter, { activeFilter: activeFilter, onClick: function onClick() {
											return _this2.setDiscountFilter(filter.type);
										} }));
								})
							),
							activeFilter === "date" && _react2.default.createElement(
								'div',
								{ className: 'discounts__filter-day-container' },
								dayNames.map(function (dayName, dayNumber) {
									return dayName !== "Domingo" && _react2.default.createElement(DayFilter, { key: dayNumber, activeDay: activeDay, dayName: dayName, dayNumber: dayNumber, onClick: function onClick() {
											return _this2.setDayFilter(dayNumber);
										} });
								})
							),
							activeFilter === "bank" && !activeBank && _react2.default.createElement(
								'div',
								{ className: 'discounts__filter-bank-container' },
								_discounts2.default.map(function (bankDiscount) {
									return _react2.default.createElement(
										BankFilter,
										{ key: bankDiscount.bank, onClick: function onClick() {
												return _this2.setBankFilter(bankDiscount.bank);
											} },
										_react2.default.createElement(_Bank2.default, { bank: bankDiscount.bank })
									);
								})
							),
							_react2.default.createElement(_DiscountList2.default, { bankDiscounts: _discounts2.default, activeFilter: activeFilter, activeDay: activeDay, activeBank: activeBank })
						)
					);
				}
			}]);
			return Discounts;
		}(_react2.default.Component);

		_reactDom2.default.render(_react2.default.createElement(Discounts, null), document.getElementById('discounts-root'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(11)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(12)
	  , toObject = __webpack_require__(13)
	  , IObject  = __webpack_require__(15);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(16);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(20);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(23);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(24);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(47);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(42);
	module.exports = __webpack_require__(39)('iterator');

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(27)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(28)
	  , defined   = __webpack_require__(14);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(30)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(32)
	  , has            = __webpack_require__(35)
	  , Iterators      = __webpack_require__(36)
	  , $iterCreate    = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(38)
	  , getProto       = __webpack_require__(12).getProto
	  , ITERATOR       = __webpack_require__(39)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(12)
	  , createDesc = __webpack_require__(33);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(12)
	  , descriptor     = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(38)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(32)(IteratorPrototype, __webpack_require__(39)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).setDesc
	  , has = __webpack_require__(35)
	  , TAG = __webpack_require__(39)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(40)('wks')
	  , uid    = __webpack_require__(41)
	  , Symbol = __webpack_require__(7).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	var Iterators = __webpack_require__(36);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(44)
	  , step             = __webpack_require__(45)
	  , Iterators        = __webpack_require__(36)
	  , toIObject        = __webpack_require__(46);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(15)
	  , defined = __webpack_require__(14);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	__webpack_require__(56);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(12)
	  , global         = __webpack_require__(7)
	  , has            = __webpack_require__(35)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(31)
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(40)
	  , setToStringTag = __webpack_require__(38)
	  , uid            = __webpack_require__(41)
	  , wks            = __webpack_require__(39)
	  , keyOf          = __webpack_require__(50)
	  , $names         = __webpack_require__(51)
	  , enumKeys       = __webpack_require__(52)
	  , isArray        = __webpack_require__(53)
	  , anObject       = __webpack_require__(54)
	  , toIObject      = __webpack_require__(46)
	  , createDesc     = __webpack_require__(33)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(30)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(12)
	  , toIObject = __webpack_require__(46);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(46)
	  , getNames  = __webpack_require__(12).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(12);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(16);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(58);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(62);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(23);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(61).set});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(55)
	  , anObject = __webpack_require__(54);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	module.exports = __webpack_require__(8).Object.getPrototypeOf;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(13);

	__webpack_require__(67)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = [
		{
			"bank": "Patagonia",
			"legals": "BANCO PATAGONIA: PROMOCIÓN VÁLIDA EN LA REPÚBLICA ARGENTINA EXCLUSIVA PARA CLIENTES QUE PARTICIPEN DEL PROGRAMA PATAGONIA MÁS. ABONANDO LOS DÍAS VIERNES DEL MES DE DICIEMBRE DE 2016 CON TODAS LA TARJETA DE DÉBITO PATAGONIA24 Y LAS TARJETAS DE CRÉDITO EMITIDAS POR BANCO PATAGONIA S.A., RECIBIRÁ UN 20% DE DESCUENTO EN UN PAGO EN SUPERMERCADOS JUMBO A TRAVÉS DE LA SIGUIENTE PÁGINA WEB: WWW.JUMBO.COM.AR Y A TRAVÉS DE VENTA TELEFÓNICA 0810-999-58626. SE EXCLUYEN ELECTRÓNICA, ELECTRODOMÉSTICOS Y TELEFONÍA CELULAR. TOPE DE DEVOLUCIÓN POR MES Y POR CUENTA: $500. EL IMPORTE BONIFICADO POR LAS COMPRAS EN UN PAGO REALIZADAS CON TARJETAS VISA, MASTERCARD Y AMERICAN EXPRESS DE BANCO PATAGONIA, SERÁ ACREDITADO EN EL MISMO RESUMEN EN QUE INGRESE EL CONSUMO O BIEN EN EL INMEDIATO POSTERIOR. EN EL CASO DE COMPRAS CON TARJETAS DE DÉBITO LAS BONIFICACIONES SE ACREDITARÁN EN LA CUENTA DE DÉBITO, DENTRO DE LOS 10 DÍAS HÁBILES DE REALIZADA LA COMPRA. SE EXCLUYEN TARJETAS CORPORATIVAS. PROMOCIÓN NO ACUMULABLE CON OTRAS PROMOCIONES. LAS CUENTAS NO DEBERÁN REGISTRAR MORA. BANCO PATAGONIA S.A. NO SE RESPONSABILIZA POR LOS CUPONES PRESENTADOS FUERA DE LA FECHA DE VIGENCIA DE LA PROMOCIÓN. CONSULTE ALCANCES, TÉRMINOS Y CONDICIONES DEL PROGRAMA EN WWW.BANCOPATAGONIA.COM.AR. O EN CUALQUIERA DE NUESTRAS SUCURSALES. PATAGONIA MÁS ES UN PROGRAMA INTEGRAL DESARROLLADO POR BANCO PATAGONIA S.A. QUE BRINDA BENEFICIOS Y/O PROMOCIONES EXCLUSIVOS PARA CLIENTES TITULARES DE LOS PRODUCTOS PATAGONIA PLUS PREMIUM, PLUS, GLOBAL, PERSONAL, AHORRO Y SUELDO. LOS ACCIONISTAS DE BANCO PATAGONIA S.A. LIMITAN SU RESPONSABILIDAD A LA INTEGRACIÓN DE LAS ACCIONES SUSCRIPTAS. LEY 25.738. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 20:30 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 5,
					"paymentMethod": "both",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Exclusivo Patagonia Más",
						"Tope de devolución por mes y por cuenta $500",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Itau",
			"legals": "PROMOCIÓN PARA CLIENTES PERSONAL BANK, VÁLIDA EN ARGENTINA PARA TARJETAS VISA PLATINUM Y SIGNATURE Y/O MASTERCARD PLATINUM Y BLACK EMITIDAS POR BANCO ITAÚ ARGENTINA SA PARA COMPRAS CON ENTREGAS PROGRAMABLES LOS DÍAS SÁBADOS COMPRENDIDOS DEL 08/10/2016 AL 31/12/2016 EXCLUSIVAMENTE A TRAVÉS DE VENTA ONLINE COMPRANDO A TRAVÉS DE WWW.JUMBO.COM.AR Y TELEFÓNICAMENTE AL 0810-999-58626 HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS . TOPE MÁXIMO DE REINTEGRO: $500 POR MES PARA CLIENTES PERSONAL BANK DURANTE LA VIGENCIA DE LA CAMPAÑA POR CADA TARJETA DE CRÉDITO TITULAR VISA Y/O MASTERCARD (CORRESPONDE A LA SUMATORIA DE LAS COMPRAS EFECTUADAS POR EL TITULAR DE TARJETA DE CRÉDITO Y SUS ADICIONALES EN TODOS LOS COMERCIOS ADHERIDOS, DURANTE EL PERÍODO DE LA PROMOCIÓN). EJEMPLO: PARA UNA COMPRA DE $1000: EL IMPORTE DE AHORRO ES DE $200. EL IMPORTE AHORRADO POR LAS COMPRAS REALIZADAS SE REINTEGRA EN EL MISMO RESUMEN EN QUE INGRESA EL CONSUMO O EN EL RESUMEN SIGUIENTE. QUEDAN EXCLUIDAS LAS COMPRAS REALIZADAS CON TARJETAS CORPORATIVAS. PROMOCIÓN NO ACUMULABLE ENTRE SÍ NI CON OTRAS PROMOCIONES VIGENTES. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ. BANCO ITAÚ ARGENTINA ES UNA SOCIEDAD ANÓNIMA SEGÚN LA LEY ARGENTINA. SUS ACCIONISTAS RESPONDEN POR LAS OPERACIONES DEL BANCO, SÓLO HASTA LA INTEGRACIÓN DE LAS ACCIONES SUSCRIPTAS (LEY 25.738).",
			"discounts": [
				{
					"discount": 20,
					"day": 6,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Tope de reintegro $500 por cuenta por mes",
						"Válido para Todos los Jumbo del País",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Hipotecario",
			"legals": "BANCO HIPOTECARIO: EXCLUSIVO POR WWW.JUMBO.COM.AR. O POR TELÉFONO AL 0810-999-JUMBO (58626). PROMOCIÓN VÁLIDA PARA TARJETAS DE CRÉDITO (TC) QUE NO REGISTREN MORA Y TARJETAS DE DÉBITO (TD) EMITIDAS POR BANCO HIPOTECARIO SA, OBTENDRÁ UN 20% DE DESCUENTO LOS DÍAS MIÉRCOLES DE DICIEMBRE HASTA EL 28/12/2016. EL REINTEGRO PARA TC SE VERÁ REFLEJADO EN EL RESUMEN EN EL CUAL INGRESE EL CONSUMO O EN EL POSTERIOR. TD: SE ACREDITARÁ A LOS 10 DÍAS HÁBILES DE INGRESADO LOS MISMOS EN LA CUENTA DE ORIGEN DE LOS FONDOS. LAS COMPRAS CON TD PODRÁN ESTAR ALCANZADAS POR LA DEVOLUCIÓN DEL I.V.A. HASTA EL 5% CONFORME RESOLUCIÓN 153/2016 DEL MINISTERIO DE HACIENDA. ESTA PROMOCIÓN NO INCLUYE ELECTRODOMÉSTICOS. COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 0.00%. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 3,
					"paymentMethod": "both",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Sin tope de reintegro",
						"Válido para todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "ICBC",
			"legals": "PROPUESTAS VÁLIDAS PARA CARTERA DE CONSUMO DESDE EL 07/12/2016 HASTA EL 12/12/2016. PARA LAS SUCURSALES JUMBO DE TODO EL PAÍS. LOS DESCUENTOS NO SON ACUMULABLES CON OTRAS PROMOCIONES NI OFERTAS EN VIGENCIA. NO INCLUYE PRODUCTOS ACORDADOS CON EL GOBIERNO, NI DEL RUBRO ELECTRODOMÉSTICOS.DESCUENTO ES AHORRO. DEBIDO AL FERIADO DEL DÍA JUEVES 8 DE DICIEMBRE EL DESCUENTO PASARA AL DÍA MIÉRCOLES 7 DE DICIEMBRE POR UNICA VEZ, PARA ACCEDER AL DESCUENTO, HACÉ TU PEDIDO EL DÍA QUE QUIERAS Y PROGRAMÁ LA ENTREGA PARA EL MIÉRCOLES 7 DE DICIEMBRE. PARA COMPRAS ONLINE A TRAVÉS DE WWW.JUMBO.COM.AR O COMUNICANDOSE AL 0810-999-JUMBO (58626). 20% DE DESCUENTO Y 3 CUOTAS SIN INTERES CON TARJETAS DE CRÉDITO VISA Y MASTERCARD ICBC. TOPE MÁXIMO DE REEMBOLSO $1000 POR TRANSACCIÓN. EJEMPLO: POR CADA $1000 DE CONSUMO SE REINTEGRARÁ $200 Y PARA CLIENTES QUE ACREDITAN SU SUELDO EN ICBC 30% DE DESCUENTO Y 3 CUOTAS SIN INTERES CON TARJETAS DE CRÉDITO VISA Y MASTERCARD ICBC. SIN TOPE DE REINTEGRO. PARA CONOCER ALCANCES DE LA ENTREGA Y COSTO DE ENVÍO INGRESE EN WWW.JUMBO.COM.AR O COMUNICANDOSE AL 0810-999-JUMBO (58626) (*) TASA NOMINAL ANUAL 0,00%, TASA EFECTIVA ANUAL 0,00%, COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA) 0,00%, CFTNA SIN IVA 0,00%. SÓLO PARA CLIENTES QUE SE ENCUENTREN AL DÍA EN SUS PRODUCTOS. NO VÁLIDAS PARA COMPRAS EN EL SECTOR MAYORISTA, COMPRAS CON TARJETAS DE CRÉDITO EMITIDAS EN EL EXTERIOR, TARJETAS DISTRIBUTION, CUENTA CENTRAL, CORPORATE, BUSINESS, PURCHASING. LOS REINTEGROS SE VERÁN ACREDITADOS CON POSTERIORIDAD A LA FECHA DE REALIZADA LA COMPRA EN RESUMEN DE TARJETA PARA TARJETA DE CRÉDITO CONSULTE LOCALES ADHERIDOS EN WWW.BENEFICIOSICBC.COM.AR O EN NUESTRAS SUCURSALES. INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A. ES UNA SOCIEDAD ANÓNIMA BAJO LA LEY ARGENTINA. SUS ACCIONISTAS LIMITAN SU RESPONSABILIDAD AL CAPITAL APORTADO. SÓLO VÁLIDO PARA CONSUMO FAMILIAR. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 1,
					"paymentMethod": "credit",
					"cft": 3.85,
					"installments": 3,
					"info": [
						"Exclusivo Jumbo.com.ar y Venta Telefónica",
						"Tope por transacción $1000",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				},
				{
					"discount": 30,
					"day": 1,
					"paymentMethod": "credit",
					"cft": 3.85,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Sin tope de reintegro, para clientes que acreditan su sueldo en el banco.",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				},
				{
					"discount": 20,
					"day": 4,
					"paymentMethod": "credit",
					"cft": 3.85,
					"installments": 3,
					"info": [
						"Exclusivo Jumbo.com.ar y Venta Telefónica",
						"Tope por transacción $1000",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				},
				{
					"discount": 30,
					"day": 4,
					"paymentMethod": "credit",
					"cft": 3.85,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Sin tope de reintegro, para clientes que acreditan su sueldo en el banco.",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "American Express",
			"legals": "AMERICAN EXPRESS: BENEFICIO VÁLIDO TODOS LOS MIERCOLES DESDE EL 07/12/2016 HASTA EL 28/12/2016, INCLUSIVE, ABONANDO CON TODAS LAS TARJETAS PERSONALES -TITULARES O ADICIONALES- EMITIDAS Y ADMINISTRADAS POR AMERICAN EXPRESS ARGENTINA S.A. VÁLIDO PARA COMPRAS PRESENCIALES Y ONLINE A TRAVES DE WWW.JUMBO.COM.AR O TELEFONICAMENTE AL 0810-999-58626. CONSULTE SUCURSALES ADHERIDAS EN WWW.BENEFICIOSAMEX.COM.AR. BENEFICIO VÁLIDO PARA COMPRAS ONLINE POR WWW.JUMBO.COM.AR O TELEFONICAMENTE AL 0810-999-58626 CON ENTREGA ÚNICAMENTE LOS DÍAS MIERCOLES. NO VÁLIDO PARA PRODUCTOS DE ELECTRO. AMERICAN EXPRESS REALIZARÁ EL REINTEGRO DEL 20% DE LA COMPRA DENTRO DE LOS 60 DÍAS CORRIDOS DE REALIZADA. TOPE MÁXIMO DE REINTEGRO: $400 POR DÍA, POR CUENTA. NO ACUMULABLE CON OTRAS PROMOCIONES. CONSULTE EL LISTADO DE SUCURSALES PARTICIPANTES Y OBTENGA MAYOR INFORMACIÓN EN WWW.BENEFICIOSAMEX.COM.AR. CENTRO DE ATENCIÓN AL CLIENTE JUMBO: TEL. 0810-999-58626| SUGERENCIAS@JUMBO.COM.AR | WWW.JUMBO.COM.AR/CONTACTENOS.PHP JUMBO RETAIL ARGENTINA S.A. SUIPACHA 1111, PISO 18, CABA, CUIT: 30-708777296-4. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 3,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Válido en nuestras Tiendas, por Jumbo.com.ar y Venta Telefónica",
						"Emitidas por American Express S.A. Tope de reintegro $400 por día",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Provincia",
			"legals": "BANCO PROVINCIA: VÁLIDA LOS DÍAS MIÉRCOLES COMPRENDIDOS ENTRE EL 07/12/2016 AL 28/12/2016, AMBAS FECHAS INCLUSIVE, EN SUPERMERCADOS JUMBO EN EL ÁMBITO DE LA CIUDAD AUTÓNOMA DE BUENOS AIRES Y PROVINCIA DE BUENOS AIRES. INGRESANDO A WWW.JUMBO.COM.AR Ó COMUNICANDOSE AL 0810-999-JUMBO (58626).PARA COMPRAS EN UN PAGO REALIZADAS CON LAS TARJETAS DE CRÉDITO Y/O DEBITO EMITIDAS POR EL BANCO PROVINCIA. PARA EL CASO DE TARJETA DE CRÉDITO EL REINTEGRO SE VERÁ REFLEJADO COMO BONIFICACIÓN HASTA EN EL SIGUIENTE RESUMEN A AQUEL EN EL QUE INGRESE EL CONSUMO. BENEFICIO DEL 15% DE DESCUENTO, TOPE DE REINTEGRO MENSUAL UNIFICADO $500 POR CUENTA. UNIFICADO SIGNIFICA QUE EL TOPE APLICARÁ CONSIDERANDO EL TOTAL DE COMPRAS MENSUALES REALIZADAS EN LAS CADENAS DE SUPERMERCADOS ADHERIDAS A LA PROMOCIÓN. SE EXCLUYEN DE LA PROMOCIÓN LAS TARJETAS VISA REGALO, VISA RECARGABLE, VISA CORPORATE, VISA BUSINESS Y VISA PURCHASING. PARA EL CASO DE TARJETA DE DÉBITO EL REINTEGRO SE VERÁ REFLEJADO EN LOS MOVIMIENTOS DE LA CUENTA A LAS 72 HORAS HÁBILES DE REALIZADA LA COMPRA.TOPE DE REINTEGRO MENSUAL POR TARJETA $500.-NO PARTICIPA DE LA PROMOCIÓN LA CUENTA GRATUITA UNIVERSAL NI LA CUENTA BENEFICIARIO JUDICIAL. DEVOLUCIÓN DEL IVA: DECRETOS DEL P.E.N. 1.387/01, 1.548/01 Y 940/12; RESOLUCIÓN GENERAL 1.166/01 Y 1.195/01 DE A.F.I.P. Y MODIFICATORIAS Y COMPLEMENTARIAS. CUANDO UN ARTÍCULO ESTÉ EXENTO DEL IMPUESTO AL VALOR AGREGADO Y/O LA COMPRA SUPERE LOS $1.000 (MIL PESOS), NO SE PRODUCE LA DEVOLUCIÓN DEL 5% EN CONCEPTO DE I.V.A POR LAS COMPRAS CON TARJETA DE DÉBITO. NO ACUMULABLE CON OTRAS PROMOCIONES Y/O DESCUENTOS VIGENTES. NO APLICA PARA PRODUCTOS DE ELECTRO, TELEFONÍA E INFORMÁTICA. VÁLIDA PARA CONSUMO DE USO FAMILIAR. EJEMPLO REPRESENTATIVO: EN UNA COMPRA POR $800 EL CLIENTE RECIBIRÁ UN REINTEGRO DE $120 O HASTA LA SUMA DISPONIBLE QUE NO EXCEDA EL TOPE MENSUAL PREVISTO PARA LA PROMOCIÓN). BANCO DE LA PROVINCIA DE BUENOS AIRES. CUIT 33-99924210-9. CALLE 7 Nº 726 LA PLATA, PROVINCIA DE BUENOS AIRES",
			"discounts": [
				{
					"discount": 15,
					"day": 3,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Válido en nuestras Tiendas, Jumbo.com.ar y Venta Telefónica",
						"Tope por reintegro mensual unificado $500 por cuenta",
						"Válido para todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Ciudad",
			"legals": "BANCO CIUDAD: PROMOCIÓN VÁLIDA PARA COMPRAS EN PESOS REALIZADAS LOS DÍAS VIERNES HASTA EL 30/12/2016 EN C.A.B.A Y G.B.A. ABONADAS CON TARJETAS DE CRÉDITO VISA, MASTERCARD Y CABAL DEL BANCO CIUDAD, EFECTUADAS A TRAVÉS DE LA SIGUIENTE PÁGINA WEB: WWW.JUMBO.COM.AR Y A TRAVÉS DE VENTA TELEFÓNICA 0810-999-58626, REINTEGRÁNDOSE UN 20% (VEINTE) POR CIENTO SOBRE EL VALOR DE LAS COMPRAS EFECTUADAS. EL TOPE MÁXIMO DE DEVOLUCIÓN POR COMPRA ES DE HASTA $500 (PESOS QUINIENTOS). PARA AQUELLAS COMPRAS EFECTUADAS CON TARJETAS DE CRÉDITO, LOS IMPORTES A REINTEGRAR SE VERÁN REFLEJADOS EN EL RESUMEN DE CUENTA EN QUE INGRESE EL CONSUMO. LA PRESENTE PROMOCIÓN ES VÁLIDA SÓLO PARA CONSUMOS DE TIPO FAMILIAR. EN CASO DE DUDA SOBRE EL DESTINO DEL CONSUMO, NO SE ACREDITARÁ EL MONTO DE LA BONIFICACIÓN HASTA TANTO SE ACLARE EL MISMO. LOS DESCUENTOS PUBLICADOS NO SON ACUMULABLES CON OTRAS PROMOCIONES. T.N.A., T.E.A. Y C.F.T. (IVA INCLUIDO): 0,00% VARIABLE. T.N.A: TASA NOMINAL ANUAL, T.E.A: TASA EFECTIVA ANUAL, C.F.T: COSTO FINANCIERO TOTAL. EL PRODUCTO OFRECIDO CORRESPONDE A LA CARTERA DE CONSUMO.C.F.T (IVA INCLUIDO): 0,00%. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 5,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"El tope máximo de devolución por compra es de hasta $500",
						"Válido en todos los Jumbo De CBA y GBA.",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Citi",
			"legals": "BANCO CITI: PUBLICIDAD PARA CARTERA DE CONSUMO. VÁLIDO EN ARGENTINA PARA COMPRAS REALIZADAS TODOS LOS DÍAS DEL 6 DE DICIEMBRE AL 30 DE DICIEMBRE DE 2016 CON ENTREGA PROGRAMADA PARA LOS MARTES Y VIERNES. APLICA A TARJETAS DE CRÉDITO CITI EMITIDAS POR CITIBANK ARGENTINA (EXCEPTO CORPORATIVAS Y GIFT CARD). NO ACUMULABLE ENTRE SÍ NI CON OTRAS PROMOCIONES VIGENTES. EXCLUSIVO VENTA ONLINE COMPRANDO A TRAVÉS WWW.JUMBO.COM.AR Y TELEFONICAMENTE AL 0810-999-58626. EXCLUYE ELECTRO. TOPE DE DEVOLUCIÓN $500 POR TRANSACCIÓN. DEVOLUCIÓN DEL DESCUENTO: EN EL RESUMEN DE CUENTA JUNTO AL DETALLE DEL CONSUMO. EJEMPLO: EN UNA COMPRA POR $3.000 EN UN PAGO CON DESCUENTO DEL 20%, UD. RECIBIRÁ EN EL PRIMER RESUMEN DE SU TARJETA UN CONSUMO DE $3.000 Y UN REINTEGRO DE $500 (TOPE DEL REINTEGRO). LA PALABRA OFF SIGNIFICA DESCUENTO. CITIBANK N.A. NO PROMOCIONA NI GARANTIZA LOS PRODUCTOS Y/O SERVICIOS NI LA CALIDAD DE LOS MISMOS. SUCURSAL DE CITIBANK N.A. ESTABLECIDA EN LA REPÚBLICA ARGENTINA. CITIBANK N.A. REALIZA SU ACTIVIDAD BANCARIA EN ARGENTINA A TRAVÉS DE SU SUCURSAL, LAS OBLIGACIONES RESULTANTES DE SUS OPERACIONES SON PAGADERAS EN ARGENTINA Y ÚNICAMENTE CON LOS ACTIVOS DE LA SUCURSAL DE CITIBANK N.A. EN ARGENTINA. CITI Y EL DISEÑO DEL ARCO ES UNA MARCA REGISTRADA DE CITIGROUP INC. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo Jumbo.com.ar y Venta Telefónica",
						"Tope De Devolución: $500 Por Transacción",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				},
				{
					"discount": 20,
					"day": 5,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo Jumbo.com.ar y Venta Telefónica",
						"Tope De Devolución: $500 Por Transacción",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Diners",
			"legals": "DINERS: CARGO POR PRIMA E IMPUESTO SEGURO SALDO DEUDOR 0.00% *TNA: 0% TASA NOMINAL ANUAL. TEA: 0% TASA EFECTIVA ANUAL. LA TARJETA DE CRÉDITO DINERS CLUB INTERNATIONAL ES EMITIDA EN ARGENTINA POR BANCO COMAFI S.A. CON DOMICILIO EN AV. PTE. R. SAENZ PEÑA 660, PISO 3, CUIT: 30-60473101.PROMOCIÓN VÁLIDA HASTA EL 31/12/2016 PARA LAS COMPRAS ABONADAS ENTRE LAS 0 Y LAS 24 HS DE LOS DÍAS MIÉRCOLES CON TARJETAS DE CRÉDITO DINERS CLUB EMITIDAS EN ARGENTINA REALIZADAS EXCLUSIVAMENTE A TRAVÉS DE COMPRAS WEB O VENTA TELEFÓNICA QUE SE REALICEN EN LOS LOCALES MARCA JUMBO.COM.AR (WWW.JUMBO.COM.AR Ó 0810-999-58626), TOPE DE REINTEGRO: $750 MENSUALES PARA LAS COMPRAS REALIZADAS DENTRO DEL MISMO PERÍODO ENTRE CIERRES DE RESUMEN PARA TARJETAS DE CRÉDITO. EL AHORRO SE EFECTUARÁ MEDIANTE UN REINTEGRO POR MES Y POR CUENTA EN EL PORCENTAJE INDICADO Y SE VERÁ REFLEJADO EN EL RESUMEN SIGUIENTE AL QUE INGRESEN LOS CONSUMOS. SÓLO VÁLIDA PARA AQUELLOS CLIENTES QUE SE ENCUENTREN AL DÍA EN SUS PRODUCTOS. LA PROMOCIÓN NO APLICA A COMPRAS DE LOS RUBROS ELECTRODOMÉSTICOS Y TECNOLOGÍA, MAYORISTAS; NI A PRODUCTOS DE LA BODEGA CHANDON, SOLO ES VÁLIDA PARA CONSUMO FAMILIAR. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 20:30 HS. (*) NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 3,
					"paymentMethod": "credit",
					"cft": 3.89,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Tope por cuenta por mes $750",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Supervielle",
			"legals": "BANCO SUPERVIELLE: DISPONIBLE PARA CARTERA CONSUMO. VÁLIDO LOS DÍAS MARTES DESDE EL 6 DE DICIEMBRE DE 2016 AL 27 DE DICIEMBRE PARA COMPRAS CON TARJETAS DE CRÉDITO VISA Y MASTERCARD DEL BANCO SUPERVIELLE S.A. LA PROMOCIÓN SÓLO ES VÁLIDA PARA CLIENTES CON PAQUETES DE PRODUCTOS DE BANCO SUPERVIELLE S.A. LOS BENEFICIOS NO SON APLICABLES A TARJETAS CORPORATIVAS NI A TARJETAS EMITIDAS EN ORIGEN POR CORDIAL COMPAÑÍA FINANCIERA S.A. PROMOCIÓN VÁLIDA EN EL SITIO WEB: WWW.JUMBO.COM.AR Ó COMUNICANDOSE AL 0810-999-JUMBO (58626). PARA COMPRAS EN HASTA 3 CUOTAS FIJAS: TASA NOMINAL ANUAL (TNA):0,00 % TASA EFECTIVA ANUAL (TEA): 0,00 % COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 0,00% EL CFTNA Y DEMÁS DATOS ECONÓMICOS INFORMADOS EN EL PRESENTE, CORRESPONDEN EXCLUSIVAMENTE A LA OPERACIÓN DE COMPRA EN CUOTAS OBJETO DE LA PRESENTE. TARJETAS DE CRÉDITO, EL REINTEGRO DEL AHORRO SE HARÁ EFECTIVO SOBRE EL IMPORTE TOTAL DEL PLAN DE CUOTAS EN EL RESUMEN DE CUENTAS EN EL QUE INGRESE LA PRIMERA O LA SEGUNDA CUOTA. EJ.: TARJETAS DE CRÉDITO: I) P/ LA COMPRA DE UN PRODUCTO EN 3 CUOTAS SIN INTERÉS CUYO PRECIO FUERA $1200 SE REALIZARÁ UN DESCUENTO VÍA REINTEGRO DEL 20% SOBRE EL PRECIO. EN EL 1ER.,2DO. Y 3ER. RESUMEN QUE SE EMITAN CON POSTERIORIDAD AL CIERRE Y LUEGO DE REALIZADA LA COMPRA SE VERÁ REFLEJADO UN CONSUMO DE $400 EN CADA UNO DE ELLOS. EL REINTEGRO DE $240 SE PODRÁ VER REFLEJADO EN EL 1ER. O 2DO RESUMEN .II) P/ LA COMPRA DE UN PRODUCTO CUYO PRECIO FUERA $1000 SE REALIZARÁ UN DESCUENTO VÍA REINTEGRO DEL 20% SOBRE EL PRECIO. EN EL PRIMER RESUMEN QUE SE EMITA CON POSTERIORIDAD AL CIERRE Y LUEGO DE REALIZADA LA COMPRA SE VERÁ REFLEJADO UN CONSUMO DE $1000. EL REINTEGRO DE $200 SE PODRÁ VER REFLEJADO EN EL 1ER. O 2DO. RESUMEN. NO COMBINABLE CON OTRAS PROMOCIONES NI DESCUENTOS VIGENTES. CONSULTAR LOCALES ADHERIDOS EN WWW.SUPERVIELLE.COM.AR. ORGANIZA: BANCO SUPERVIELLE S.A.,B. MITRE 434 C.A.B.A.- CUIT 33-50000517-9 INSCRIP. I.G.J. N° 23, F° 502, L. 45, T° A DE ESTATUTOS NAC.”. BANCO SUPERVIELLE S.A. NO ES RESPONSABLE POR LOS PRODUCTOS Y/O SERVICIOS COMERCIALIZADOS POR LAS MARCAS Y LOCALES PARTICIPANTES EN LAS PROMOCIONES. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Tope por cuenta por mes $500",
						"Válido para todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Nacion",
			"legals": "BANCO NACIÓN: PROMOCIÓN VÁLIDA PARA COMPRAS PRESENCIALES O EN WWW.JUMBO.COM.AR O POR TELÉFONO AL 0810-999-JUMBO (58626). BENEFICIO VÁLIDO SÓLO LOS MARTES HASTA EL 27/12/2016 PARA LAS COMPRAS ABONADAS CON LAS TARJETAS DE CRÉDITO NATIVA, MASTERCARD (EN SUS VERSIONES REGIONAL, INTERNACIONAL, GOLD, PLATINUM Y CORPORATE REGIONAL) Y VISA (EN SUS VERSIONES CLASSIC, GOLD Y PLATINUM) EMITIDAS POR EL BANCO NACION. TOPE DE DEVOLUCIÓN POR TRANSACCIÓN: $750. EL DESCUENTO SOBRE EL IMPORTE DE COMPRA SE VERÁ REFLEJADO COMO UN AJUSTE CRÉDITO EN EL RESUMEN DE CUENTA DONDE SE VISUALICE EL IMPORTE TOTAL DE LA COMPRA O LA PRIMERA CUOTA DE LA COMPRA.TASA NOMINAL ANUAL (TNA) FIJA: 0% -TASA EFECTIVA ANUAL (TEA) FIJA: 0% - COSTO FINANCIERO TOTAL (CFT): 0.00% TEA POR EL COSTO DEL SEGURO DE VIDA SOBRE SALDO DEUDOR PARA UNA COMPRA DE $1.000. DESCUENTO NO ACUMULABLE CON OTROS DESCUENTOS, PROMOCIONES Y/O BENEFICIOS. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 15,
					"day": 2,
					"paymentMethod": "credit",
					"cft": 3.58,
					"installments": 3,
					"info": [
						"Válido en nuestras Tiendas, Jumbo.com.ar y Venta Telefónica",
						"Tope por transacción $750",
						"Válido para todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Macro",
			"legals": "BANCO MACRO: CARTERA DE CONSUMO. PROMOCIÓN VALIDA EN LAS SIGUIENTES FECHAS Y BAJO LAS SIGUIENTES CONDICIONES: (1)TODOS LOS MARTES DESDE EL 06/12/2016 AL 27/12/2016 20% DE DESCUENTO Y HASTA 3 CUOTAS SIN INTERÉS CON TARJETAS DE CRÉDITO VISA, MASTERCARD Y AMERICAN EXPRESS DE LOS BANCOS DEL GRUPO MACRO EN LOCALES ADHERIDOS DE LOS SUPERMERCADOS JUMBO. TOPE DE DEVOLUCIÓN: $300 POR TRANSACCIÓN (2) PARA COMPRAS CON ENTREGA PROGRAMADA PARA LOS DÍAS MARTES DESDE EL 06/12/2016 HASTA EL 27/12/2016 A TRAVÉS DE JUMBO.COM.AR. Ó TELEFONICAMENTE AL 0810-999-58626 20% DE DESCUENTO Y HASTA 3 CUOTAS SIN INTERÉS CON TARJETAS DE CRÉDITO VISA, MASTERCARD Y AMERICAN EXPRESS DE LOS BANCOS DEL GRUPO MACRO. TOPE DE DEVOLUCIÓN: $300 POR TRANSACCIÓN. CONSULTE ZONA DE ENTREGA Y GASTOS DE ENVÍO PREVIO A REALIZAR SU COMPRA. CONDICIONES APLICABLES PARA TODOS LOS BENEFICIOS (1)( 2) : NO INCLUYE PRODUCTOS ELECTRO. NO VÁLIDO TARJETAS DE CRÉDITO EMPRESA Y/O AGRO. BENEFICIO NO ACUMULABLE CON OTRAS PROMOCIONES. VÁLIDA PARA CONSUMO FAMILIAR. TNA (TASA NOMINAL ANUAL) 0%, TEA (TASA EFECTIVA ANUAL) 0%, CFTNA (COSTO FINANCIERO TOTAL NOMINAL ANUAL) 0%. LA APLICACIÓN DEL DESCUENTO SE REALIZARÁ AL CIERRE DEL RESUMEN EN EL CUAL SE REGISTRE LA OPERACIÓN. LOS ESTABLECIMIENTOS, LOS PRODUCTOS Y/O SERVICIOS QUE COMERCIALIZAN O LA CALIDAD DE LOS MISMOS NO SON PROMOCIONADOS NI GARANTIZADOS POR LOS BANCOS DEL GRUPO MACRO, COMO ASÍ TAMPOCO SE RESPONSABILIZAN POR LOS CUPONES PRESENTADOS FUERA DE TÉRMINO POR LOS COMERCIOS. JUMBO RETAIL ARGENTINA S.A., CUIT: 30-70877296-4, SUIPACHA 1111, PISO 18, CABA.CONSULTE BASES, CONDICIONES, ALCANCES DE LA PROMOCIÓN, Y TODA INFORMACIÓN ADICIONAL EN FORMA PREVIA A REALIZAR LA OPERACIÓN EN WWW.BENEFICIOSACANOMAS.COM.AR, AL 0810-555-2355 PARA BANCO MACRO O AL 0810-888-3300 PARA BANCO DEL TUCUMÁN O EN LA SUCURSAL MÁS CERCANA A SU DOMICILIO. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ",
			"discounts": [
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "credit",
					"cft": 2.1,
					"installments": 3,
					"info": [
						"Válido en nuestras Tiendas, Jumbo.com.ar y Venta Telefónica",
						"Tope por transacción $300",
						"Válido para todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Naranja",
			"legals": "TARJETA NARANJA: PROMOCIÓN VÁLIDA HASTA EL 31/12/2016 INCLUSIVE, VÁLIDA PARA PEDIDOS A REALIZARSE Y ENTREGARSE POR WWW.JUMBO.COM.AR Ó COMUNICANDOSE AL 0810-999-JUMBO (58626). EXCLUSIVAMENTE PROGRAMANDO LA ENTREGA PARA LOS DÍAS MIÉRCOLES Y ABONANDO CON TARJETA NARANJA OBTENDRÁ UN 20% DE DESCUENTO EN TODA LA COMPRA, $400 TOPE DE REINTEGRO MENSUAL QUE SE VERÁ REFLEJADO EN EL RESUMEN EN EL CUAL INGRESA LA COMPRA. SÓLO VÁLIDO PARA CONSUMO FAMILIAR. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ. (CFT): 0,00%.",
			"discounts": [
				{
					"discount": 20,
					"day": 3,
					"paymentMethod": "credit",
					"cft": 3.36,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Tope por cuenta por mes $400",
						"Válido en Todos los Jumbo del País",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Santa Fe",
			"legals": "NUEVO BANCO DE SANTA FE: TNA (TASA NOMINAL ANUAL): 0%, TEA (TASA EFECTIVA ANUAL): 0%. SEGURO DE VIDA SOBRE SALDO DEUDOR: 0,2955%. VÁLIDO LOS DÍAS MARTES HASTA EL 27/12/2016 ABONANDO CON TARJETAS DE CRÉDITO VISA O MASTERCARD EMITIDAS POR EL BANCO SANTA FE. EN WWW.JUMBO.COM.AR. O COMUNICANDOSE AL 0810-999-JUMBO (58626).APLICACIÓN DEL DESCUENTO: LA EFECTIVIZACIÓN DEL TOTAL DEL AHORRO SERÁ EFECTUADA VÍA REINTEGRO EN LA LIQUIDACIÓN RESPECTIVA. PROMOCIÓN NO ACUMULABLE CON OTRAS PROMOCIONES VIGENTES. EL TOPE DE REINTEGRO ES DE $500 MENSUALES POR CUENTA. EJEMPLO: EN UNA COMPRA DE $ 1.200 ABONADA CON TARJETA DE CRÉDITO, REALIZADA EN UN SOLO PAGO, RECIBIRÁ EN LA PRIMERA LIQUIDACIÓN UN CONSUMO DE $ 1.200 Y UN REINTEGRO DE $ 240. ADICIONALMENTE, SE INCLUIRÁ EN EL RUBRO \"GTO DE CONTRATACIÓN SEGURO\" LA SUMA TOTAL DE $2,84 QUE INGRESARÁ EN EL RESÚMEN POSTERIORES AL QUE INGRESA LA COMPRA CONFORME EL SALDO DE DEUDA QUE REGISTRE. LOS DATOS Y OFERTAS INCLUIDOS EN ESTE REVISTEN CARÁCTER EXCLUSIVAMENTE INFORMATIVO Y EN MODO ALGUNO SUPONEN QUE LOS ESTABLECIMIENTOS, PRODUCTOS O LA CALIDAD DE LOS MISMOS SE ENCUENTRAN PROMOCIONADOS Y/O GARANTIZADOS POR EL BANCO SANTA FE. AVISO – LEY 25.738. BANCO SANTA FE ES UNA MARCA REGISTRADA DE NUEVO BANCO DE SANTA FE S.A., LA CUAL ES UNA SOCIEDAD ANÓNIMA CONSTITUIDA BAJO LAS LEYES DE LA REPÚBLICA ARGENTINA. SUS ACCIONISTAS LIMITAN SU RESPONSABILIDAD AL CAPITAL APORTADO. . HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. NO INCLUYE ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, AZUCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, BODEGAS CHANDON, TERRAZAS, LA RURAL, CLOS DE LOS SIETE, LEONCIO ARIZU. NO ACUMULABLE CON OTROS DESCUENTOS, OFERTAS Y/O PROMOCIONES. VER TÉRMINOS Y CONDICIONES, ZONAS DE ENTREGA Y GASTOS DE ENVÍO EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARG S.A., CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTINEZ.",
			"discounts": [
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 1,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Tope por cuenta por mes $500",
						"Válido en Jumbo Rosario",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Jumbomas",
			"legals": "15% DE DESCUENTO PARA LOS PEDIDOS REALIZADOS LOS DÍAS MARTES DEL 06 AL 27 DE DICIEMBRE DE 2016 INCLUSIVE.REALIZÁ TU PEDIDO LOS MARTES DE DICIEMBRE DE 2016 Y PROGRAMÁ LA ENTREGA DEL PEDIDO PARA EL DÍA QUE PREFIERAS. VÁLIDO PARA COMPRAS A REALIZARSE Y ENTREGARSE A TRAVÉS DE JUMBO.COM.AR INGRESANDO A WWW.JUMBO.COM.AR O POR TELÉFONO AL 0810-999-58626. ENTREGAS DESDE LOS LOCALES JUMBO DE TODO EL PAÍS. QUILMES II, PACHECO NOVO, PUNTA CHICA Y AV. SANTA FE (C.A.B.A.) SÓLO POR LA OPCIÓN DE COMPRA RETIRA CLIENTE. VALOR MÍNIMO DE COMPRA $500. PARA QUE SE EFECTIVICE EL DESCUENTO, SE DEBERÁ INGRESAR EL NÚMERO DE LA TARJETA JUMBO MÁS EN EL PUNTO 4 DEL SECTOR CAJA DE LA WEB, EN EL CAMPO CORRESPONDIENTE. REGLAMENTO DEL PROGRAMA JUMBO MÁS EN WWW.JUMBOMAS.COM.AR. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADOS DE 8:30 A 21:00 HS. *NO INCLUYE COSTO DEL SERVICIO,CAJAS NAVIDEÑAS ELECTRODOMÉSTICOS, ACEITES MEZCLA Y GIRASOL, YERBA, AZÚCAR, PRODUCTOS ACORDADOS CON EL GOBIERNO, PRODUCTOS DE BODEGAS: CHANDON, TERRAZAS DE LOS ANDES, NORTON, LA RURAL, LEONCIO ARIZU, VALMONT, CLOS DE LOS SIETE, RUTINI WINES Y ZUCCARDI. NO ACUMULABLE CON DESCUENTOS BANCARIOS, OFERTAS, Y/O PROMOCIONES. SÓLO APTO PARA CONSUMO FAMILIAR. VER TERMINOS, CONDICIONES Y ZONAS DE COBERTURA EN WWW.JUMBO.COM.AR. JUMBO RETAIL ARGENTINA S.A. CUIT 30-70877296-4. DIRECCIÓN LEGAL: SUIPACHA 1111, PISO 18, CAPITAL FEDERAL. DIRECCIÓN COMERCIAL: PARANÁ 3617, MARTÍNEZ.",
			"discounts": [
				{
					"discount": 15,
					"day": 2,
					"paymentMethod": null,
					"cft": null,
					"installments": null,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				}
			]
		},
		{
			"bank": "Cencosud",
			"legals": "TARJETA CENCOSUD: PROMOCION VÁLIDA PARA COMPRAS REALIZADAS CON TARJETA CENCOSUD. (1) 20% DE DESCUENTO EXCLUSIVO EN TU COMPRA. OFERTA NO ACUMULABLE CON OTRAS OFERTAS Y PROMOCIONES. VALIDO PARA COMPRAS REALIZADAS LOS DIAS MARTES DE DICIEMBRE POR JUMBO.COM.AR EN LOS LOCALES JUMBO DE TODO EL PAÍS. INGRESANDO A WWW.JUMBO.COM.AR. O COMUNICÁNDOTE POR TELÉFONO AL 0810-999-58626. HORARIO DE ATENCIÓN DEL CALL CENTER DÍAS HÁBILES DE LUNES A SÁBADO DE 8.30 A 21.00 HS. VER BASES, CONDICIONES Y ZONAS DE COBERTURA EN WWW.JUMBO.COM.AR. NO INCLUYE ELECTRO,CAJAS NAVIDEÑAS,ACEITES MEZCLA NI DE GIRASOL, AZÚCAR, HARINAS, PRODUCTOS ACORDADOS CON EL GOBIERNO NI BODEGAS CHANDON, LA RURAL, TERRAZAS, LEONCIO ARIZU, VALMONT Y LATITUD 33. (2) SÓLO 3 CUOTAS FIJAS MENSUALES SIN INTERÉS EN TODA LA COMPRA.TASA NOMINAL ANUAL: 0%, TASA EFECTIVA ANUAL: 0%; TASA EFECTIVA MENSUAL: 0% SISTEMA FRANCÉS DE AMORTIZACIÓN MENSUAL. COSTO FINANCIERO TOTAL (CFT): 0,00%. PREVIA SUSCRIPCIÓN A LA SOLICITUD Y CONTRATO DE TARJETA DE CRÉDITO CENCOSUD. APROBACIÓN SUJETA A EVALUACIÓN CREDITICIA. EL USUARIO TITULAR PODRÁ REVOCAR SU SOLICITUD Y/O ACEPTACIÓN MEDIANTE NOTIFICACIÓN FEHACIENTE AL EMISOR DENTRO DE LOS DIEZ (10) DÍAS HÁBILES DE TENER A DISPOSICIÓN EFECTIVA EL SERVICIO, YA SEA CON LA RECEPCIÓN DEL CONTRATO Y/O DE LA TARJETA DE CRÉDITO Y/O DEL CUPÓN QUE EVENTUALMENTE SE ENTREGUE CON UN NÚMERO DE CUENTA DE TARJETA PROVISORIO, SIN COSTO NI RESPONSABILIDAD ALGUNA, EN LA MEDIDA QUE NO SE HAYA HECHO USO DEL SERVICIO, Y EN ESTE ÚLTIMO SUPUESTO, CONTRA EL PAGO DE LAS COMISIONEES Y CARGOS POPORCIONALES PROMOCIONES VÁLIDAS PARA COMPRAS REALIZADAS CON TARJETA CENCOSUD. EL CFT NO INCLUYE EL CARGO MENSUAL DE ADMINISTRACIÓN DE CUENTA Y COSTOS ASOCIADOS AL MANTENIMIENTO DE LA TARJETA. CONSULTE CARGOS VIGENTES ASOCIADOS A SU CUENTA AL 0810-9999-627. CENCOSUD S.A. CUIT 30-59036076-3, SUIPACHA 1111, PISO 18, CABA (DOM. NO COMERCIAL)(2)CFT 0%",
			"discounts": [
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "credit",
					"cft": null,
					"installments": 3,
					"info": [
						"Exclusivo en Jumbo.com.ar y Venta Telefónica",
						"Sin tope de devolución",
						"Válido en todos los Jumbo del país",
						"Excluye Electro"
					]
				},
				{
					"discount": 20,
					"day": 2,
					"paymentMethod": "electro",
					"cft": null,
					"installments": 18,
					"info": [
						"Válido en nuestras Tiendas, Jumbo.com.ar y Venta Telefónica",
						"Sin tope de devolución",
						"Válido en todos los Jumbo del país"
					]
				}
			]
		}
	];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(64), __webpack_require__(18), __webpack_require__(19), __webpack_require__(22), __webpack_require__(57), __webpack_require__(1), __webpack_require__(71), __webpack_require__(82), __webpack_require__(101)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _extends2, _assign, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _DiscountItem, _reactMotion) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends3 = _interopRequireDefault(_extends2);

		var _assign2 = _interopRequireDefault(_assign);

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _react2 = _interopRequireDefault(_react);

		var _DiscountItem2 = _interopRequireDefault(_DiscountItem);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		///////////////
		// CONSTANTS //
		///////////////

		var dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

		//////////////////////////
		// STATELESS COMPONENTS //
		//////////////////////////

		var DiscountShippingText = function DiscountShippingText(props) {
			var days = props.days;

			var daysText = days.reduce(function (accumulator, curValue, curIndex, array) {
				// If not the first index
				if (curIndex > 0) {
					// If last index
					if (array.length - 1 === curIndex) {
						accumulator += " o ";
					} else {
						accumulator += ", ";
					}
				}

				return accumulator += curValue;
			}, "");

			return _react2.default.createElement(
				'div',
				{ className: 'discounts__shipping-text' },
				'Para acceder al descuento hac\xE9 tu pedido cualquier d\xEDa y',
				_react2.default.createElement(
					'strong',
					null,
					' program\xE1 la ',
					_react2.default.createElement(
						'span',
						{ className: 'color-primary' },
						'entrega'
					),
					' para los ',
					_react2.default.createElement(
						'span',
						{ className: 'color-primary' },
						daysText
					)
				),
				' de ',
				monthNames[new Date().getMonth()]
			);
		};

		////////////////
		// COMPONENTS //
		////////////////

		var DiscountList = function (_React$Component) {
			(0, _inherits3.default)(DiscountList, _React$Component);

			function DiscountList() {
				(0, _classCallCheck3.default)(this, DiscountList);

				var _this = (0, _possibleConstructorReturn3.default)(this, (DiscountList.__proto__ || (0, _getPrototypeOf2.default)(DiscountList)).call(this));

				_this.state = {
					openDiscount: null
				};
				return _this;
			}

			(0, _createClass3.default)(DiscountList, [{
				key: 'shouldComponentUpdate',
				value: function shouldComponentUpdate(nextProps, nextState) {
					return this.state.openDiscount !== nextState.openDiscount || this.props.activeDay !== nextProps.activeDay || this.props.activeBank !== nextProps.activeBank || this.props.activeFilter !== nextProps.activeFilter;
				}
			}, {
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
					var _props = this.props,
					    activeFilter = _props.activeFilter,
					    activeDay = _props.activeDay,
					    activeBank = _props.activeBank;


					if (activeFilter !== nextProps.activeFilter || activeDay !== nextProps.activeDay || activeBank !== nextProps.activeBank) {
						this.setState({
							openDiscount: null
						});
					}
				}
			}, {
				key: 'getDiscountDays',
				value: function getDiscountDays(discounts) {
					return discounts.reduce(function (accumulator, bankDiscount) {
						bankDiscount.discounts.forEach(function (discount) {
							var dayName = dayNames[discount.day];

							if (!~accumulator.indexOf(dayName)) {
								accumulator.push(dayName);
							}
						});

						return accumulator;
					}, []);
				}
			}, {
				key: 'toggleOpenDiscountItem',
				value: function toggleOpenDiscountItem(discountKey) {
					var openDiscount = null;

					if (this.state.openDiscount !== discountKey) {
						openDiscount = discountKey;
					}

					this.setState({
						openDiscount: openDiscount
					});
				}
			}, {
				key: 'renderDiscountList',
				value: function renderDiscountList(discounts) {
					var _this2 = this;

					// Helper functions
					var formatDiscountObject = function formatDiscountObject(bankName, legals, discount) {
						var bankNameFormatted = bankName.toLowerCase().replace(/\s/, "") + '-' + discount.discount + '-' + discount.day + '-' + discount.installments;
						var bankData = { bank: bankName, legals: legals, key: bankNameFormatted };
						var isOpen = _this2.state.openDiscount === bankNameFormatted;
						var showDate = _this2.props.activeFilter === "bank";

						return (0, _assign2.default)({}, discount, bankData, { isOpen: isOpen, showDate: showDate });
					};

					// Create an array flatmap of the discounts
					var discountsArray = discounts.reduce(function (accumulator, bankDiscount) {
						if (_this2.state.openDiscount === null) {
							var discountFormatted = bankDiscount.discounts.map(function (discount) {
								return formatDiscountObject(bankDiscount.bank, bankDiscount.legals, discount);
							});

							return accumulator.concat(discountFormatted);
						} else {
							var _discountFormatted = bankDiscount.discounts.filter(function (discount) {
								var bankNameFormatted = bankDiscount.bank.toLowerCase().replace(/\s/, "") + '-' + discount.discount + '-' + discount.day + '-' + discount.installments;

								return _this2.state.openDiscount === bankNameFormatted;
							}).map(function (discount) {
								return formatDiscountObject(bankDiscount.bank, bankDiscount.legals, discount);
							});

							if (_discountFormatted.length) {
								return accumulator.concat(_discountFormatted);
							}
						}

						return accumulator;
					}, []);

					// React motion helper functions
					var defaultStyles = discountsArray.map(function (discount) {
						return {
							data: discount, key: discount.key, style: { translateY: -10, opacity: 0, maxHeight: 700, marginTop: 20, padding: 0, borderWidth: 0 }
						};
					});
					var nextStyles = discountsArray.map(function (discount) {
						return {
							data: discount, key: discount.key, style: { translateY: (0, _reactMotion.spring)(0), opacity: (0, _reactMotion.spring)(1), maxHeight: 700, marginTop: 20, padding: 25, borderWidth: 1 }
						};
					});
					var willLeave = function willLeave() {
						return { translateY: (0, _reactMotion.spring)(0), opacity: (0, _reactMotion.spring)(0), maxHeight: (0, _reactMotion.spring)(0), marginTop: (0, _reactMotion.spring)(0), padding: (0, _reactMotion.spring)(0), borderWidth: 0 };
					};
					var willEnter = function willEnter() {
						return { translateY: -10, opacity: 0, maxHeight: 700, marginTop: 20, padding: 25, borderWidth: 1 };
					};

					return _react2.default.createElement(
						_reactMotion.TransitionMotion,
						{
							defaultStyles: defaultStyles,
							willLeave: willLeave,
							willEnter: willEnter,
							styles: nextStyles },
						function (styles) {
							return _react2.default.createElement(
								'div',
								null,
								styles.map(function (_ref) {
									var key = _ref.key,
									    style = _ref.style,
									    data = _ref.data;
									return _react2.default.createElement(_DiscountItem2.default, (0, _extends3.default)({
										key: key
									}, data, {
										onClick: function onClick() {
											return _this2.toggleOpenDiscountItem(key);
										},
										style: {
											transform: 'translateY(' + style.translateY + '%)',
											opacity: style.opacity,
											maxHeight: style.maxHeight,
											marginTop: style.marginTop,
											padding: style.padding + 'px 15px',
											borderWidth: style.borderWidth
										} }));
								})
							);
						}
					);
				}
			}, {
				key: 'renderDiscountsByDate',
				value: function renderDiscountsByDate() {
					var _props2 = this.props,
					    bankDiscounts = _props2.bankDiscounts,
					    activeDay = _props2.activeDay;

					var filteredDiscounts = bankDiscounts.reduce(function (accumulator, bankDiscount) {
						var discounts = bankDiscount.discounts.filter(function (discount) {
							return discount.day === activeDay;
						});

						if (discounts.length) {
							return accumulator.concat((0, _assign2.default)({}, bankDiscount, { discounts: discounts }));
						} else {
							return accumulator;
						}
					}, []);

					return _react2.default.createElement(
						'div',
						{ className: 'discounts__list-by-date' },
						_react2.default.createElement(DiscountShippingText, { days: [dayNames[activeDay]] }),
						_react2.default.createElement(
							'div',
							{ className: 'discounts__list' },
							this.renderDiscountList(filteredDiscounts)
						)
					);
				}
			}, {
				key: 'renderDiscountsByBank',
				value: function renderDiscountsByBank() {
					var _props3 = this.props,
					    bankDiscounts = _props3.bankDiscounts,
					    activeBank = _props3.activeBank;

					var filteredDiscounts = bankDiscounts.filter(function (bankDiscount) {
						return bankDiscount.bank === activeBank;
					});
					var discountDays = this.getDiscountDays(filteredDiscounts);

					return _react2.default.createElement(
						'div',
						{ className: 'discounts__list-by-bank' },
						_react2.default.createElement(DiscountShippingText, { days: discountDays }),
						_react2.default.createElement(
							'div',
							{ className: 'discounts__list' },
							this.renderDiscountList(filteredDiscounts)
						)
					);
				}
			}, {
				key: 'renderDiscountsJumbomas',
				value: function renderDiscountsJumbomas() {
					var bankDiscounts = this.props.bankDiscounts;

					var filteredDiscounts = bankDiscounts.filter(function (bankDiscount) {
						return bankDiscount.bank === "Jumbomas";
					});
					var discountDays = this.getDiscountDays(filteredDiscounts);

					return _react2.default.createElement(
						'div',
						{ className: 'discounts__list-jumbomas' },
						_react2.default.createElement(DiscountShippingText, { days: discountDays }),
						_react2.default.createElement(
							'div',
							{ className: 'discounts__list' },
							this.renderDiscountList(filteredDiscounts)
						)
					);
				}
			}, {
				key: 'renderDiscountsCencosud',
				value: function renderDiscountsCencosud() {
					var bankDiscounts = this.props.bankDiscounts;

					var filteredDiscounts = bankDiscounts.filter(function (bankDiscount) {
						return bankDiscount.bank === "Cencosud";
					});
					var discountDays = this.getDiscountDays(filteredDiscounts);

					return _react2.default.createElement(
						'div',
						{ className: 'discounts__list-jumbomas' },
						_react2.default.createElement(DiscountShippingText, { days: discountDays }),
						_react2.default.createElement(
							'div',
							{ className: 'discounts__list' },
							this.renderDiscountList(filteredDiscounts)
						)
					);
				}
			}, {
				key: 'render',
				value: function render() {
					var _props4 = this.props,
					    activeFilter = _props4.activeFilter,
					    activeBank = _props4.activeBank;


					return _react2.default.createElement(
						'div',
						{ className: 'discounts__list-container' },
						activeFilter === "date" && this.renderDiscountsByDate(),
						activeFilter === "bank" && activeBank && this.renderDiscountsByBank(),
						activeFilter === "jumbomas" && this.renderDiscountsJumbomas(),
						activeFilter === "cencosud" && this.renderDiscountsCencosud()
					);
				}
			}]);
			return DiscountList;
		}(_react2.default.Component);

		exports.default = DiscountList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(64), __webpack_require__(18), __webpack_require__(19), __webpack_require__(22), __webpack_require__(57), __webpack_require__(1), __webpack_require__(72), __webpack_require__(77), __webpack_require__(99)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _Bank, _reactCollapse) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _react2 = _interopRequireDefault(_react);

		var _Bank2 = _interopRequireDefault(_Bank);

		var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		///////////////
		// CONSTANTS //
		///////////////

		var dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

		////////////////
		// COMPONENTS //
		////////////////

		var DiscountItem = function (_React$Component) {
			(0, _inherits3.default)(DiscountItem, _React$Component);

			function DiscountItem() {
				(0, _classCallCheck3.default)(this, DiscountItem);
				return (0, _possibleConstructorReturn3.default)(this, (DiscountItem.__proto__ || (0, _getPrototypeOf2.default)(DiscountItem)).apply(this, arguments));
			}

			(0, _createClass3.default)(DiscountItem, [{
				key: 'render',
				value: function render() {
					var _props = this.props,
					    bank = _props.bank,
					    discount = _props.discount,
					    day = _props.day,
					    paymentMethod = _props.paymentMethod,
					    cft = _props.cft,
					    installments = _props.installments,
					    info = _props.info,
					    legals = _props.legals,
					    showDate = _props.showDate,
					    style = _props.style,
					    isOpen = _props.isOpen,
					    onClick = _props.onClick;


					return _react2.default.createElement(
						'div',
						{ className: 'discounts__item', style: style, onClick: onClick },
						_react2.default.createElement(
							'div',
							{ className: 'discounts__item-visible' },
							showDate && _react2.default.createElement(
								'div',
								{ className: 'discounts__item-days' },
								dayNames[day]
							),
							_react2.default.createElement(
								'div',
								{ className: 'discounts__item-bank' },
								_react2.default.createElement(_Bank2.default, { bank: bank })
							),
							_react2.default.createElement(
								'div',
								{ className: 'discounts__item-data' },
								_react2.default.createElement(
									'div',
									{ className: 'discounts__item-discount' },
									discount,
									'% Dto.'
								),
								paymentMethod && _react2.default.createElement(
									'div',
									{ className: 'discounts__item-payment-method' },
									paymentMethod === "credit" && "Con Tarjeta de Crédito",
									paymentMethod === "debit" && "Con Tarjeta de Débito",
									paymentMethod === "both" && "Con Tarjeta de Crédito y Débito",
									paymentMethod === "electro" && "En Electro"
								),
								installments && _react2.default.createElement(
									'div',
									{ className: 'discounts__item-installments' },
									_react2.default.createElement(
										'span',
										{ className: 'installments' },
										installments === 1 ? "Sólo 1 pago" : "Hasta " + installments + " cuotas sin interés"
									),
									cft && _react2.default.createElement(
										'span',
										{ className: 'cft' },
										'(CFTNA: ',
										cft,
										'%)'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'discounts__item-info' },
								info.map(function (text, index) {
									return _react2.default.createElement(
										'div',
										{ key: index, className: 'info' },
										text
									);
								})
							)
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'discounts__item-legals' },
								_react2.default.createElement(
									_reactCollapse2.default,
									{ isOpened: isOpen },
									_react2.default.createElement(
										'span',
										{ className: 'legals' },
										legals
									)
								)
							),
							isOpen && _react2.default.createElement(
								'button',
								{ className: 'discounts__item-collapse' },
								_react2.default.createElement('div', { className: 'font-icn cross' })
							)
						)
					);
				}
			}]);
			return DiscountItem;
		}(_react2.default.Component);

		exports.default = DiscountItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(73)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		var Bank = function Bank(props) {
			return _react2.default.createElement('div', { className: 'bank bank--' + props.bank.toLowerCase().replace(/\s/, "") });
		};

		exports.default = Bank;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export

	var Collapse = __webpack_require__(78).default;

	module.exports = Collapse;
	//# sourceMappingURL=index.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(79);

	var _reactMotion = __webpack_require__(82);

	var _reactHeight = __webpack_require__(97);

	var _reactHeight2 = _interopRequireDefault(_reactHeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var PRECISION = 0.5;

	var stringHeight = function stringHeight(height) {
	  return Math.max(0, parseFloat(height)).toFixed(1);
	};

	var Collapse = _react2.default.createClass({
	  displayName: 'Collapse',

	  propTypes: {
	    isOpened: _react2.default.PropTypes.bool.isRequired,
	    children: _react2.default.PropTypes.node.isRequired,
	    fixedHeight: _react2.default.PropTypes.number,
	    style: _react2.default.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    springConfig: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.number),
	    keepCollapsedContent: _react2.default.PropTypes.bool,
	    onRest: _react2.default.PropTypes.func,
	    onHeightReady: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      fixedHeight: -1,
	      style: {},
	      keepCollapsedContent: false,
	      onHeightReady: function onHeightReady() {} // eslint-disable-line no-empty-function
	    };
	  },
	  getInitialState: function getInitialState() {
	    return { height: -1, isOpenedChanged: false };
	  },
	  componentWillMount: function componentWillMount() {
	    this.height = stringHeight(0);
	    this.renderStatic = true;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var isOpened = _ref.isOpened;

	    this.setState({ isOpenedChanged: isOpened !== this.props.isOpened });
	  },


	  shouldComponentUpdate: _ReactComponentWithPureRenderMixin.shouldComponentUpdate,

	  componentDidUpdate: function componentDidUpdate(_ref2) {
	    var isOpened = _ref2.isOpened;

	    if (isOpened !== this.props.isOpened) {
	      var report = this.props.isOpened ? this.state.height : 0;

	      this.props.onHeightReady(report);
	    }
	  },
	  onHeightReady: function onHeightReady(height) {
	    var _props = this.props;
	    var isOpened = _props.isOpened;
	    var onHeightReady = _props.onHeightReady;


	    if (this.renderStatic && isOpened) {
	      this.height = stringHeight(height);
	    }

	    this.setState({ height: isOpened || !this.renderStatic ? height : 0 });

	    var reportHeight = isOpened ? height : 0;

	    if (this.state.height !== reportHeight) {
	      onHeightReady(reportHeight);
	    }
	  },
	  getMotionHeight: function getMotionHeight(height) {
	    var _props2 = this.props;
	    var isOpened = _props2.isOpened;
	    var springConfig = _props2.springConfig;
	    var fixedHeight = _props2.fixedHeight;
	    var isOpenedChanged = this.state.isOpenedChanged;


	    var newHeight = isOpened ? Math.max(0, parseFloat(height)).toFixed(1) : stringHeight(0);

	    // No need to animate if content is closed and it was closed previously
	    // Also no need to animate if height did not change
	    var skipAnimation = !isOpenedChanged && !isOpened || this.height === newHeight && fixedHeight === -1;

	    var springHeight = (0, _reactMotion.spring)(isOpened ? Math.max(0, height) : 0, _extends({
	      precision: PRECISION
	    }, springConfig));
	    var instantHeight = isOpened ? Math.max(0, height) : 0;

	    return skipAnimation ? instantHeight : springHeight;
	  },
	  renderFixed: function renderFixed() {
	    var _this = this;

	    var _props3 = this.props;
	    var _springConfig = _props3.springConfig;
	    var _onHeightReady = _props3.onHeightReady;
	    var _onRest = _props3.onRest;
	    var isOpened = _props3.isOpened;
	    var style = _props3.style;
	    var children = _props3.children;
	    var fixedHeight = _props3.fixedHeight;
	    var keepCollapsedContent = _props3.keepCollapsedContent;

	    var props = _objectWithoutProperties(_props3, ['springConfig', 'onHeightReady', 'onRest', 'isOpened', 'style', 'children', 'fixedHeight', 'keepCollapsedContent']);

	    if (this.renderStatic) {
	      this.renderStatic = false;
	      var newStyle = { overflow: 'hidden', height: isOpened ? fixedHeight : 0 };

	      if (!keepCollapsedContent && !isOpened) {
	        return null;
	      }
	      this.height = stringHeight(fixedHeight);
	      return _react2.default.createElement(
	        'div',
	        _extends({ style: _extends({}, newStyle, style) }, props),
	        children
	      );
	    }

	    return _react2.default.createElement(
	      _reactMotion.Motion,
	      {
	        defaultStyle: { height: isOpened ? 0 : fixedHeight },
	        style: { height: this.getMotionHeight(fixedHeight) } },
	      function (_ref3) {
	        var height = _ref3.height;

	        _this.height = stringHeight(height);

	        // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
	        // See https://github.com/chenglou/react-motion/issues/235
	        if (!keepCollapsedContent && !isOpened && _this.height === stringHeight(0)) {
	          return null;
	        }

	        var newStyle = { overflow: 'hidden', height: height };

	        return _react2.default.createElement(
	          'div',
	          _extends({ style: _extends({}, newStyle, style) }, props),
	          children
	        );
	      }
	    );
	  },
	  render: function render() {
	    var _this2 = this;

	    var _props4 = this.props;
	    var _springConfig = _props4.springConfig;
	    var _onHeightReady = _props4.onHeightReady;
	    var isOpened = _props4.isOpened;
	    var style = _props4.style;
	    var children = _props4.children;
	    var fixedHeight = _props4.fixedHeight;
	    var keepCollapsedContent = _props4.keepCollapsedContent;
	    var onRest = _props4.onRest;

	    var props = _objectWithoutProperties(_props4, ['springConfig', 'onHeightReady', 'isOpened', 'style', 'children', 'fixedHeight', 'keepCollapsedContent', 'onRest']);

	    if (fixedHeight > -1) {
	      return this.renderFixed();
	    }

	    var renderStatic = this.renderStatic;
	    var height = this.state.height;

	    var currentStringHeight = parseFloat(height).toFixed(1);

	    if (height > -1 && renderStatic) {
	      this.renderStatic = false;
	    }

	    // Cache Content so it is not re-rendered on each animation step
	    var content = _react2.default.createElement(
	      _reactHeight2.default,
	      { onHeightReady: this.onHeightReady },
	      children
	    );

	    if (renderStatic) {
	      var _ret = function () {
	        var newStyle = isOpened ? { height: 'auto' } : { overflow: 'hidden', height: 0 };

	        if (!isOpened && height > -1) {
	          if (!keepCollapsedContent) {
	            return {
	              v: null
	            };
	          }

	          return {
	            v: _react2.default.createElement(
	              'div',
	              _extends({ style: _extends({ height: 0, overflow: 'hidden' }, style) }, props),
	              content
	            )
	          };
	        }

	        // <Motion> to prevent loosing input after causing this component to rerender
	        return {
	          v: _react2.default.createElement(
	            _reactMotion.Motion,
	            {
	              defaultStyle: { height: Math.max(0, height) },
	              style: { height: Math.max(0, height) },
	              onRest: onRest },
	            function () {
	              return _react2.default.createElement(
	                'div',
	                _extends({ style: _extends({}, newStyle, style) }, props),
	                content
	              );
	            }
	          )
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return _react2.default.createElement(
	      _reactMotion.Motion,
	      {
	        defaultStyle: { height: Math.max(0, height) },
	        onRest: onRest,
	        style: { height: this.getMotionHeight(height) } },
	      function (st) {
	        _this2.height = stringHeight(st.height);

	        // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
	        // See https://github.com/chenglou/react-motion/issues/235
	        if (!isOpened && _this2.height === '0.0') {
	          if (!keepCollapsedContent) {
	            return null;
	          }
	          return _react2.default.createElement(
	            'div',
	            _extends({ style: _extends({ height: 0, overflow: 'hidden' }, style) }, props),
	            content
	          );
	        }

	        var newStyle = isOpened && _this2.height === currentStringHeight ? { height: 'auto' } : {
	          height: st.height, overflow: 'hidden'
	        };

	        return _react2.default.createElement(
	          'div',
	          _extends({ style: _extends({}, newStyle, style) }, props),
	          content
	        );
	      }
	    );
	  }
	});

	exports.default = Collapse;
	//# sourceMappingURL=Collapse.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowCompare = __webpack_require__(80);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowEqual = __webpack_require__(81);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _Motion = __webpack_require__(83);

	exports.Motion = _interopRequire(_Motion);

	var _StaggeredMotion = __webpack_require__(91);

	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

	var _TransitionMotion = __webpack_require__(92);

	exports.TransitionMotion = _interopRequire(_TransitionMotion);

	var _spring = __webpack_require__(94);

	exports.spring = _interopRequire(_spring);

	var _presets = __webpack_require__(95);

	exports.presets = _interopRequire(_presets);

	// deprecated, dummy warning function

	var _reorderKeys = __webpack_require__(96);

	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(89);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(90);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;

	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },

	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;

	    for (var key in destStyle) {
	      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	        continue;
	      }

	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }

	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }

	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }

	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      _this.wasAnimating = true;

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};

	      for (var key in propsStyle) {
	        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	          continue;
	        }

	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }

	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];

	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });

	      _this.unreadPropStyle = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }

	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	

	// currently used to initiate the velocity style object to 0
	'use strict';

	exports.__esModule = true;
	exports['default'] = mapToZero;

	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	

	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";

	exports.__esModule = true;
	exports["default"] = stepper;

	var reusedTuple = [0, 0];

	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;

	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }

	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}

	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },
/* 88 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(87)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 90 */
/***/ function(module, exports) {

	

	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;

	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }

	    if (currentVelocity[key] !== 0) {
	      return false;
	    }

	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(89);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(90);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}

	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;

	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },

	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;

	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }

	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];

	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in destStyle) {
	          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	            continue;
	          }

	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _mergeDiff = __webpack_require__(93);

	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(89);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(90);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}

	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }

	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }

	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	// core key merging logic

	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key

	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });

	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;

	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }

	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}

	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',

	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willEnter: _react.PropTypes.func,
	    willLeave: _react.PropTypes.func,
	    didLeave: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;

	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });

	    var _mergeAndSync = mergeAndSync(
	    // Because this is an old-style React.createClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);

	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really

	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },

	  unmounting: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];

	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }

	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    if (this.unmounting) {
	      return;
	    }
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];

	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in newMergedPropsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	            continue;
	          }

	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }

	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = TransitionMotion;
	module.exports = exports['default'];

	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function

	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 93 */
/***/ function(module, exports) {

	

	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?

	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous

	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a

	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';

	exports.__esModule = true;
	exports['default'] = mergeDiff;

	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster

	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }

	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }

	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];

	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev

	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }

	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}

	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = spring;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _presets = __webpack_require__(95);

	var _presets2 = _interopRequireDefault(_presets);

	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});

	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = reorderKeys;

	var hasWarned = false;

	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export

	var ReactHeight = __webpack_require__(98).default;

	module.exports = ReactHeight;
	//# sourceMappingURL=index.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ReactComponentWithPureRenderMixin = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint "react/no-did-mount-set-state":0 */
	/* eslint "react/no-did-update-set-state":0 */

	var ReactHeight = _react2.default.createClass({
	  displayName: 'ReactHeight',

	  propTypes: {
	    children: _react2.default.PropTypes.node.isRequired,
	    onHeightReady: _react2.default.PropTypes.func.isRequired,
	    hidden: _react2.default.PropTypes.bool,
	    dirty: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return { hidden: false, dirty: true };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      height: 0, dirty: this.props.dirty
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var height = this.wrapper.clientHeight;
	    var dirty = false;

	    this.setState({ height: height, dirty: dirty }, function () {
	      return _this.props.onHeightReady(_this.state.height);
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var children = _ref.children;
	    var dirty = _ref.dirty;

	    if (children !== this.props.children || dirty) {
	      this.setState({ dirty: true });
	    }
	  },


	  shouldComponentUpdate: _ReactComponentWithPureRenderMixin.shouldComponentUpdate,

	  componentDidUpdate: function componentDidUpdate() {
	    var _this2 = this;

	    var height = this.wrapper.clientHeight;
	    var dirty = false;

	    if (height === this.state.height) {
	      this.setState({ dirty: dirty });
	    } else {
	      this.setState({ height: height, dirty: dirty }, function () {
	        return _this2.props.onHeightReady(_this2.state.height);
	      });
	    }
	  },
	  setWrapperRef: function setWrapperRef(el) {
	    this.wrapper = el;
	  },
	  render: function render() {
	    var _props = this.props;
	    var _onHeightReady = _props.onHeightReady;
	    var _dirty = _props.dirty;
	    var hidden = _props.hidden;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['onHeightReady', 'dirty', 'hidden', 'children']);

	    var dirty = this.state.dirty;


	    if (hidden && !dirty) {
	      return null;
	    }

	    if (hidden) {
	      return _react2.default.createElement(
	        'div',
	        { style: { height: 0, overflow: 'hidden' } },
	        _react2.default.createElement(
	          'div',
	          _extends({ ref: this.setWrapperRef }, props),
	          children
	        )
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      _extends({ ref: this.setWrapperRef }, props),
	      children
	    );
	  }
	});

	exports.default = ReactHeight;
	//# sourceMappingURL=ReactHeight.js.map

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);