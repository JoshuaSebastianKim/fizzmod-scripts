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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(64), __webpack_require__(18), __webpack_require__(19), __webpack_require__(22), __webpack_require__(57), __webpack_require__(68), __webpack_require__(1), __webpack_require__(126), __webpack_require__(127), __webpack_require__(158)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _reactDom, _react, _productTestModel, _ProductItem) {
		'use strict';

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _react2 = _interopRequireDefault(_react);

		var _productTestModel2 = _interopRequireDefault(_productTestModel);

		var _ProductItem2 = _interopRequireDefault(_ProductItem);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		var ProductItemContainer = function (_React$Component) {
			(0, _inherits3.default)(ProductItemContainer, _React$Component);

			function ProductItemContainer() {
				(0, _classCallCheck3.default)(this, ProductItemContainer);
				return (0, _possibleConstructorReturn3.default)(this, (ProductItemContainer.__proto__ || (0, _getPrototypeOf2.default)(ProductItemContainer)).apply(this, arguments));
			}

			(0, _createClass3.default)(ProductItemContainer, [{
				key: 'render',
				value: function render() {
					return _react2.default.createElement(
						'div',
						{ className: 'product' },
						_productTestModel2.default.map(function (product) {
							return _react2.default.createElement(_ProductItem2.default, { key: product.productId, product: product });
						})
					);
				}
			}]);
			return ProductItemContainer;
		}(_react2.default.Component);

		_reactDom2.default.render(_react2.default.createElement(ProductItemContainer, null), document.getElementById("product-item-root"));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */,
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
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(13);

	__webpack_require__(67)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = lodash;

/***/ },
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ function(module, exports) {

	module.exports = [
		{
			"productId": "13",
			"productName": "7up lata 353ml",
			"brand": "7 UP",
			"linkText": "7up-lata-353ml",
			"productReference": "7791813050520",
			"categories": [
				"/Bebidas/Gaseosas/Lima Limón/",
				"/Bebidas/Gaseosas/",
				"/Bebidas/"
			],
			"link": "http://jumboargentinaqa.vtexlocal.com.br/7up-lata-353ml/p",
			"description": "",
			"items": [
				{
					"itemId": "13",
					"name": "7up lata 353ml",
					"nameComplete": "7up lata 353ml",
					"complementName": "",
					"ean": "7791813050520",
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155420",
							"imageLabel": "",
							"imageTag": "<img src=\"~/arquivos/ids/155420-#width#-#height#/lata.jpg\" width=\"#width#\" height=\"#height#\" alt=\"lata\" id=\"\" />",
							"imageUrl": "http://jumboargentinaqa.vteximg.com.br/arquivos/ids/155420/lata.jpg",
							"imageText": "lata"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Argentina QA",
							"addToCartLink": "https://jumboargentinaqa.vtexlocal.com.br/checkout/cart/add?sku=13&qty=1&seller=1&sc=1&price=1500&cv=d255ce2024afed8ae6beca309b228f9a_geral:08189FD34AB18FF3B4986544A649E749&sc=1",
							"sellerDefault": true,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {
									"0": {
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									"1": {
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								},
								"Installments": [
									{
										"Value": 15,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express à vista"
									},
									{
										"Value": 5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 3 vezes sem juros"
									},
									{
										"Value": 2.68,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 16.08,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 6 vezes com juros"
									},
									{
										"Value": 15,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Visa",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Visa à vista"
									},
									{
										"Value": 15,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners à vista"
									},
									{
										"Value": 7.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 2 vezes sem juros"
									},
									{
										"Value": 5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 3 vezes sem juros"
									},
									{
										"Value": 3.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 4 vezes sem juros"
									},
									{
										"Value": 3.05,
										"InterestRate": 1,
										"TotalValuePlusInterestRate": 15.25,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 5 vezes com juros"
									},
									{
										"Value": 2.62,
										"InterestRate": 2,
										"TotalValuePlusInterestRate": 15.72,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 6 vezes com juros"
									},
									{
										"Value": 2.33,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 16.31,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 7 vezes com juros"
									},
									{
										"Value": 2.14,
										"InterestRate": 4,
										"TotalValuePlusInterestRate": 17.12,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 8 vezes com juros"
									},
									{
										"Value": 2,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 18,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 9 vezes com juros"
									},
									{
										"Value": 1.92,
										"InterestRate": 6,
										"TotalValuePlusInterestRate": 19.2,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 10 vezes com juros"
									},
									{
										"Value": 1.86,
										"InterestRate": 7,
										"TotalValuePlusInterestRate": 20.46,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 11 vezes com juros"
									},
									{
										"Value": 1.84,
										"InterestRate": 8,
										"TotalValuePlusInterestRate": 22.08,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 12 vezes com juros"
									},
									{
										"Value": 15,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard à vista"
									},
									{
										"Value": 7.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 2 vezes sem juros"
									},
									{
										"Value": 5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 3 vezes sem juros"
									},
									{
										"Value": 3.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 4 vezes sem juros"
									},
									{
										"Value": 3,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 5 vezes sem juros"
									},
									{
										"Value": 2.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 6 vezes sem juros"
									},
									{
										"Value": 2.14,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 7 vezes sem juros"
									},
									{
										"Value": 1.87,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 8 vezes sem juros"
									},
									{
										"Value": 1.66,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 9 vezes sem juros"
									},
									{
										"Value": 1.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 10 vezes sem juros"
									},
									{
										"Value": 1.36,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 11 vezes sem juros"
									},
									{
										"Value": 1.25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 12 vezes sem juros"
									},
									{
										"Value": 15,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 15,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Medio de Pago TEST",
										"PaymentSystemGroupName": "custom201PaymentGroupPaymentGroup",
										"Name": "Medio de Pago TEST à vista"
									}
								],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [],
								"Price": 15,
								"ListPrice": 15,
								"PriceValidUntil": "2017-12-14T18:31:52.6238448Z",
								"AvailableQuantity": 96,
								"Tax": 0,
								"DeliverySlaSamples": [
									{
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									{
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								],
								"GetInfoErrorMessage": null,
								"CacheVersionUsedToCallCheckout": "d255ce2024afed8ae6beca309b228f9a_geral:08189FD34AB18FF3B4986544A649E749"
							}
						}
					]
				}
			]
		},
		{
			"productId": "12",
			"productName": "Coca cola 1.5Lts",
			"brand": "COCA COLA",
			"linkText": "coca-cola-1-5lts",
			"productReference": "7790895000430",
			"categories": [
				"/Bebidas/Gaseosas/Cola/",
				"/Bebidas/Gaseosas/",
				"/Bebidas/"
			],
			"link": "http://jumboargentinaqa.vtexlocal.com.br/coca-cola-1-5lts/p",
			"description": "",
			"items": [
				{
					"itemId": "12",
					"name": "Coca cola 1.5Lts",
					"nameComplete": "Coca cola 1.5Lts",
					"complementName": "",
					"ean": "7790895000430",
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "7790895000430"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155419",
							"imageLabel": "",
							"imageTag": "<img src=\"~/arquivos/ids/155419-#width#-#height#/0779089500043-1.jpg\" width=\"#width#\" height=\"#height#\" alt=\"0779089500043-1\" id=\"\" />",
							"imageUrl": "http://jumboargentinaqa.vteximg.com.br/arquivos/ids/155419/0779089500043-1.jpg",
							"imageText": "0779089500043-1"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Argentina QA",
							"addToCartLink": "https://jumboargentinaqa.vtexlocal.com.br/checkout/cart/add?sku=12&qty=1&seller=1&sc=1&price=2500&cv=1738f8722181d241c30bce5e061c0279_geral:08189FD34AB18FF3B4986544A649E749&sc=1",
							"sellerDefault": true,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {
									"0": {
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									"1": {
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								},
								"Installments": [
									{
										"Value": 25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express à vista"
									},
									{
										"Value": 8.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 3 vezes sem juros"
									},
									{
										"Value": 4.48,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 26.88,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 6 vezes com juros"
									},
									{
										"Value": 2.68,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 32.16,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 12 vezes com juros"
									},
									{
										"Value": 25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Visa",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Visa à vista"
									},
									{
										"Value": 25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners à vista"
									},
									{
										"Value": 12.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 2 vezes sem juros"
									},
									{
										"Value": 8.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 3 vezes sem juros"
									},
									{
										"Value": 6.25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 4 vezes sem juros"
									},
									{
										"Value": 5.09,
										"InterestRate": 1,
										"TotalValuePlusInterestRate": 25.45,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 5 vezes com juros"
									},
									{
										"Value": 4.37,
										"InterestRate": 2,
										"TotalValuePlusInterestRate": 26.22,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 6 vezes com juros"
									},
									{
										"Value": 3.89,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 27.23,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 7 vezes com juros"
									},
									{
										"Value": 3.57,
										"InterestRate": 4,
										"TotalValuePlusInterestRate": 28.56,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 8 vezes com juros"
									},
									{
										"Value": 3.34,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 30.06,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 9 vezes com juros"
									},
									{
										"Value": 3.2,
										"InterestRate": 6,
										"TotalValuePlusInterestRate": 32,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 10 vezes com juros"
									},
									{
										"Value": 3.11,
										"InterestRate": 7,
										"TotalValuePlusInterestRate": 34.21,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 11 vezes com juros"
									},
									{
										"Value": 3.07,
										"InterestRate": 8,
										"TotalValuePlusInterestRate": 36.84,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 12 vezes com juros"
									},
									{
										"Value": 25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard à vista"
									},
									{
										"Value": 12.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 2 vezes sem juros"
									},
									{
										"Value": 8.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 3 vezes sem juros"
									},
									{
										"Value": 6.25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 4 vezes sem juros"
									},
									{
										"Value": 5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 5 vezes sem juros"
									},
									{
										"Value": 4.16,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 6 vezes sem juros"
									},
									{
										"Value": 3.57,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 7 vezes sem juros"
									},
									{
										"Value": 3.12,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 8 vezes sem juros"
									},
									{
										"Value": 2.77,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 9 vezes sem juros"
									},
									{
										"Value": 2.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 10 vezes sem juros"
									},
									{
										"Value": 2.27,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 11 vezes sem juros"
									},
									{
										"Value": 2.08,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 12 vezes sem juros"
									},
									{
										"Value": 25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 25,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Medio de Pago TEST",
										"PaymentSystemGroupName": "custom201PaymentGroupPaymentGroup",
										"Name": "Medio de Pago TEST à vista"
									}
								],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [],
								"Price": 25,
								"ListPrice": 25,
								"PriceValidUntil": "2017-12-14T18:31:48.7403741Z",
								"AvailableQuantity": 93,
								"Tax": 0,
								"DeliverySlaSamples": [
									{
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									{
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								],
								"GetInfoErrorMessage": null,
								"CacheVersionUsedToCallCheckout": "1738f8722181d241c30bce5e061c0279_geral:08189FD34AB18FF3B4986544A649E749"
							}
						}
					]
				}
			]
		},
		{
			"productId": "9",
			"productName": "Queso La Serenisima Cremon",
			"brand": "La Serenisima",
			"linkText": "queso-la-serenisima-cremon",
			"productReference": "24410519016",
			"categories": [
				"/Quesos y Fiambres/Quesos/Quesos Port Salud y Cremosos/",
				"/Quesos y Fiambres/Quesos/",
				"/Quesos y Fiambres/"
			],
			"link": "http://jumboargentinaqa.vtexlocal.com.br/queso-la-serenisima-cremon/p",
			"description": "Queso La Serenisima Cremon",
			"items": [
				{
					"itemId": "9",
					"name": "Queso La Serenisima Cremon",
					"nameComplete": "Queso La Serenisima Cremon",
					"complementName": "",
					"ean": "2547625000001",
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "24410519016"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155405",
							"imageLabel": "frente",
							"imageTag": "<img src=\"~/arquivos/ids/155405-#width#-#height#/24410519016.jpg\" width=\"#width#\" height=\"#height#\" alt=\"Queso-La-Serenisima-Cremon\" id=\"\" />",
							"imageUrl": "http://jumboargentinaqa.vteximg.com.br/arquivos/ids/155405/24410519016.jpg",
							"imageText": "Queso-La-Serenisima-Cremon"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Argentina QA",
							"addToCartLink": "https://jumboargentinaqa.vtexlocal.com.br/checkout/cart/add?sku=9&qty=1&seller=1&sc=1&price=15900&cv=ca473ba74ec940afcb74a16cc0c27a64_geral:08189FD34AB18FF3B4986544A649E749&sc=1",
							"sellerDefault": true,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {
									"0": {
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									"1": {
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								},
								"Installments": [
									{
										"Value": 159,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express à vista"
									},
									{
										"Value": 53,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 3 vezes sem juros"
									},
									{
										"Value": 28.49,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 170.94,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 6 vezes com juros"
									},
									{
										"Value": 17.08,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 204.96,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 12 vezes com juros"
									},
									{
										"Value": 159,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Visa",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Visa à vista"
									},
									{
										"Value": 159,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners à vista"
									},
									{
										"Value": 79.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 2 vezes sem juros"
									},
									{
										"Value": 53,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 3 vezes sem juros"
									},
									{
										"Value": 39.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 4 vezes sem juros"
									},
									{
										"Value": 32.43,
										"InterestRate": 1,
										"TotalValuePlusInterestRate": 162.15,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 5 vezes com juros"
									},
									{
										"Value": 27.82,
										"InterestRate": 2,
										"TotalValuePlusInterestRate": 166.92,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 6 vezes com juros"
									},
									{
										"Value": 24.77,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 173.39,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 7 vezes com juros"
									},
									{
										"Value": 22.7,
										"InterestRate": 4,
										"TotalValuePlusInterestRate": 181.6,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 8 vezes com juros"
									},
									{
										"Value": 21.3,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 191.7,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 9 vezes com juros"
									},
									{
										"Value": 20.38,
										"InterestRate": 6,
										"TotalValuePlusInterestRate": 203.8,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 10 vezes com juros"
									},
									{
										"Value": 19.81,
										"InterestRate": 7,
										"TotalValuePlusInterestRate": 217.91,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 11 vezes com juros"
									},
									{
										"Value": 19.53,
										"InterestRate": 8,
										"TotalValuePlusInterestRate": 234.36,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 12 vezes com juros"
									},
									{
										"Value": 159,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard à vista"
									},
									{
										"Value": 79.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 2 vezes sem juros"
									},
									{
										"Value": 53,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 3 vezes sem juros"
									},
									{
										"Value": 39.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 4 vezes sem juros"
									},
									{
										"Value": 31.8,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 5 vezes sem juros"
									},
									{
										"Value": 26.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 6 vezes sem juros"
									},
									{
										"Value": 22.71,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 7 vezes sem juros"
									},
									{
										"Value": 19.87,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 8 vezes sem juros"
									},
									{
										"Value": 17.66,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 9 vezes sem juros"
									},
									{
										"Value": 15.9,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 10 vezes sem juros"
									},
									{
										"Value": 14.45,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 11 vezes sem juros"
									},
									{
										"Value": 13.25,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 12 vezes sem juros"
									},
									{
										"Value": 159,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 159,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Medio de Pago TEST",
										"PaymentSystemGroupName": "custom201PaymentGroupPaymentGroup",
										"Name": "Medio de Pago TEST à vista"
									}
								],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [
									"1",
									"2",
									"3",
									"4"
								],
								"Price": 159,
								"ListPrice": 173,
								"PriceValidUntil": "2017-12-14T18:31:52.2137667Z",
								"AvailableQuantity": 89,
								"Tax": 0,
								"DeliverySlaSamples": [
									{
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									{
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								],
								"GetInfoErrorMessage": null,
								"CacheVersionUsedToCallCheckout": "ca473ba74ec940afcb74a16cc0c27a64_geral:08189FD34AB18FF3B4986544A649E749"
							}
						}
					]
				}
			]
		},
		{
			"productId": "8",
			"productName": "Azucar Ledesma molida",
			"brand": "Ledesma",
			"linkText": "azucar-ledesma-molida",
			"productReference": "11270101001",
			"categories": [
				"/Almacén/Desayuno y Merienda/Azúcar y Edulcorantes/",
				"/Almacén/Desayuno y Merienda/",
				"/Almacén/"
			],
			"link": "http://jumboargentinaqa.vtexlocal.com.br/azucar-ledesma-molida/p",
			"description": "Azucar Ledesma molida",
			"items": [
				{
					"itemId": "8",
					"name": "Azucar Ledesma molida",
					"nameComplete": "Azucar Ledesma molida",
					"complementName": "",
					"ean": "7792540000017",
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "11270101001"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155404",
							"imageLabel": "",
							"imageTag": "<img src=\"~/arquivos/ids/155404-#width#-#height#/11270101001.jpg\" width=\"#width#\" height=\"#height#\" alt=\"11270101001\" id=\"\" />",
							"imageUrl": "http://jumboargentinaqa.vteximg.com.br/arquivos/ids/155404/11270101001.jpg",
							"imageText": "11270101001"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Argentina QA",
							"addToCartLink": "https://jumboargentinaqa.vtexlocal.com.br/checkout/cart/add?sku=8&qty=1&seller=1&sc=1&price=999&cv=09cba6ace63dc266c4dbabcdcbbedcba_geral:08189FD34AB18FF3B4986544A649E749&sc=1",
							"sellerDefault": true,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {
									"0": {
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									"1": {
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								},
								"Installments": [
									{
										"Value": 9.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express à vista"
									},
									{
										"Value": 3.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 3 vezes sem juros"
									},
									{
										"Value": 9.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Visa",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Visa à vista"
									},
									{
										"Value": 9.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners à vista"
									},
									{
										"Value": 4.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 2 vezes sem juros"
									},
									{
										"Value": 3.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 3 vezes sem juros"
									},
									{
										"Value": 2.49,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 4 vezes sem juros"
									},
									{
										"Value": 2.03,
										"InterestRate": 1,
										"TotalValuePlusInterestRate": 10.15,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 5 vezes com juros"
									},
									{
										"Value": 1.74,
										"InterestRate": 2,
										"TotalValuePlusInterestRate": 10.44,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 6 vezes com juros"
									},
									{
										"Value": 1.55,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 10.85,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 7 vezes com juros"
									},
									{
										"Value": 1.42,
										"InterestRate": 4,
										"TotalValuePlusInterestRate": 11.36,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 8 vezes com juros"
									},
									{
										"Value": 1.33,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 11.97,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 9 vezes com juros"
									},
									{
										"Value": 1.28,
										"InterestRate": 6,
										"TotalValuePlusInterestRate": 12.8,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 10 vezes com juros"
									},
									{
										"Value": 1.24,
										"InterestRate": 7,
										"TotalValuePlusInterestRate": 13.64,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 11 vezes com juros"
									},
									{
										"Value": 1.22,
										"InterestRate": 8,
										"TotalValuePlusInterestRate": 14.64,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 12 vezes com juros"
									},
									{
										"Value": 9.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard à vista"
									},
									{
										"Value": 4.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 2 vezes sem juros"
									},
									{
										"Value": 3.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 3 vezes sem juros"
									},
									{
										"Value": 2.49,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 4 vezes sem juros"
									},
									{
										"Value": 1.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 5 vezes sem juros"
									},
									{
										"Value": 1.66,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 6 vezes sem juros"
									},
									{
										"Value": 1.42,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 7 vezes sem juros"
									},
									{
										"Value": 1.24,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 8 vezes sem juros"
									},
									{
										"Value": 1.11,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 9 vezes sem juros"
									},
									{
										"Value": 9.99,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 9.99,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Medio de Pago TEST",
										"PaymentSystemGroupName": "custom201PaymentGroupPaymentGroup",
										"Name": "Medio de Pago TEST à vista"
									}
								],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [],
								"Price": 9.99,
								"ListPrice": 11.24,
								"PriceValidUntil": "2017-12-14T18:31:48.2442618Z",
								"AvailableQuantity": 91,
								"Tax": 0,
								"DeliverySlaSamples": [
									{
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									{
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								],
								"GetInfoErrorMessage": null,
								"CacheVersionUsedToCallCheckout": "09cba6ace63dc266c4dbabcdcbbedcba_geral:08189FD34AB18FF3B4986544A649E749"
							}
						}
					]
				}
			]
		},
		{
			"productId": "1",
			"productName": "HELADERA PATRICK. Modelo: HPK 137 BL",
			"brand": "Patrick",
			"linkText": "heladera-patrick-modelo-hpk-137-bl",
			"productReference": "61210128014",
			"categories": [
				"/Tecnología y Electrodomésticos/Heladeras, Freezers y Cavas/Heladeras con Freezer/",
				"/Tecnología y Electrodomésticos/Heladeras, Freezers y Cavas/",
				"/Tecnología y Electrodomésticos/"
			],
			"link": "http://jumboargentinaqa.vtexlocal.com.br/heladera-patrick-modelo-hpk-137-bl/p",
			"ProductData": [
				"Título"
			],
			"SkuData": [
				"Subtítulo"
			],
			"Configuraciones": [
				"ProductData",
				"SkuData"
			],
			"allSpecifications": [
				"ProductData",
				"SkuData"
			],
			"description": "HELADERA PATRICK. Modelo: HPK 154444",
			"items": [
				{
					"itemId": "1",
					"name": "HELADERA PATRICK",
					"nameComplete": "HELADERA PATRICK. Modelo: HPK 137 BL HELADERA PATRICK",
					"complementName": "",
					"ean": "7797102001389",
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "61210128014"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155397",
							"imageLabel": "frente",
							"imageTag": "<img src=\"~/arquivos/ids/155397-#width#-#height#/61210128014.jpg\" width=\"#width#\" height=\"#height#\" alt=\"Heladera\" id=\"\" />",
							"imageUrl": "http://jumboargentinaqa.vteximg.com.br/arquivos/ids/155397/61210128014.jpg",
							"imageText": "Heladera"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Argentina QA",
							"addToCartLink": "https://jumboargentinaqa.vtexlocal.com.br/checkout/cart/add?sku=1&qty=1&seller=1&sc=1&price=829900&cv=7f26332b42a8991a071571589ca98d32_geral:08189FD34AB18FF3B4986544A649E749&sc=1",
							"sellerDefault": true,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {
									"0": {
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									"1": {
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								},
								"Installments": [
									{
										"Value": 8299,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express à vista"
									},
									{
										"Value": 2766.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 3 vezes sem juros"
									},
									{
										"Value": 1487.35,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 8924.1,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 6 vezes com juros"
									},
									{
										"Value": 891.75,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 10701,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "American Express",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "American Express 12 vezes com juros"
									},
									{
										"Value": 8299,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Visa",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Visa à vista"
									},
									{
										"Value": 8299,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners à vista"
									},
									{
										"Value": 4149.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 2 vezes sem juros"
									},
									{
										"Value": 2766.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 3 vezes sem juros"
									},
									{
										"Value": 2074.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 4 vezes sem juros"
									},
									{
										"Value": 1692.99,
										"InterestRate": 1,
										"TotalValuePlusInterestRate": 8464.95,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 5 vezes com juros"
									},
									{
										"Value": 1452.53,
										"InterestRate": 2,
										"TotalValuePlusInterestRate": 8715.18,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 6 vezes com juros"
									},
									{
										"Value": 1293.24,
										"InterestRate": 3,
										"TotalValuePlusInterestRate": 9052.68,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 7 vezes com juros"
									},
									{
										"Value": 1185.22,
										"InterestRate": 4,
										"TotalValuePlusInterestRate": 9481.76,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 8 vezes com juros"
									},
									{
										"Value": 1111.98,
										"InterestRate": 5,
										"TotalValuePlusInterestRate": 10007.82,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 9 vezes com juros"
									},
									{
										"Value": 1063.74,
										"InterestRate": 6,
										"TotalValuePlusInterestRate": 10637.4,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 10 vezes com juros"
									},
									{
										"Value": 1034.32,
										"InterestRate": 7,
										"TotalValuePlusInterestRate": 11377.52,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 11 vezes com juros"
									},
									{
										"Value": 1019.66,
										"InterestRate": 8,
										"TotalValuePlusInterestRate": 12235.92,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Diners",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Diners 12 vezes com juros"
									},
									{
										"Value": 8299,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard à vista"
									},
									{
										"Value": 4149.5,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 2,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 2 vezes sem juros"
									},
									{
										"Value": 2766.33,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 3,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 3 vezes sem juros"
									},
									{
										"Value": 2074.75,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 4,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 4 vezes sem juros"
									},
									{
										"Value": 1659.8,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 5,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 5 vezes sem juros"
									},
									{
										"Value": 1383.16,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 6,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 6 vezes sem juros"
									},
									{
										"Value": 1185.57,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 7,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 7 vezes sem juros"
									},
									{
										"Value": 1037.37,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 8,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 8 vezes sem juros"
									},
									{
										"Value": 922.11,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 9,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 9 vezes sem juros"
									},
									{
										"Value": 829.9,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 10,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 10 vezes sem juros"
									},
									{
										"Value": 754.45,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 11,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 11 vezes sem juros"
									},
									{
										"Value": 691.58,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 12,
										"PaymentSystemName": "Mastercard",
										"PaymentSystemGroupName": "creditCardPaymentGroup",
										"Name": "Mastercard 12 vezes sem juros"
									},
									{
										"Value": 8299,
										"InterestRate": 0,
										"TotalValuePlusInterestRate": 8299,
										"NumberOfInstallments": 1,
										"PaymentSystemName": "Medio de Pago TEST",
										"PaymentSystemGroupName": "custom201PaymentGroupPaymentGroup",
										"Name": "Medio de Pago TEST à vista"
									}
								],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [],
								"Price": 8299,
								"ListPrice": 9299,
								"PriceValidUntil": "2017-12-14T18:31:52.4024326Z",
								"AvailableQuantity": 98,
								"Tax": 0,
								"DeliverySlaSamples": [
									{
										"DeliverySlaPerTypes": [],
										"Region": null
									},
									{
										"DeliverySlaPerTypes": [
											{
												"TypeName": "Normal",
												"Price": 50,
												"EstimatedTimeSpanToDelivery": "00:00:00"
											}
										],
										"Region": {
											"IsPersisted": true,
											"IsRemoved": false,
											"Id": 1,
											"Name": "Buenos Aires",
											"CountryCode": "ARG",
											"ZipCode": "1414",
											"CultureInfoName": "es-AR"
										}
									}
								],
								"GetInfoErrorMessage": null,
								"CacheVersionUsedToCallCheckout": "7f26332b42a8991a071571589ca98d32_geral:08189FD34AB18FF3B4986544A649E749"
							}
						}
					]
				}
			]
		},
		{
			"productId": "1513",
			"productName": "Licuadora Oster Monterrey 1.5lt - Vaso Vidrio - Roja",
			"brand": "OSTER",
			"linkText": "licuadora-oster-monterrey-1-5lt---vaso-vidrio---roja-1513",
			"productReference": "34264450127",
			"categories": [
				"/Electrodomésticos/Cocina/Pequeños Electrodomésticos/Licuadoras/",
				"/Electrodomésticos/Cocina/Pequeños Electrodomésticos/",
				"/Electrodomésticos/Cocina/",
				"/Electrodomésticos/"
			],
			"link": "http://jumbocolombiafoodqa.vtexlocal.com.br/licuadora-oster-monterrey-1-5lt---vaso-vidrio---roja-1513/p",
			"ProductData": [
				"{\"allow_notes\":true,\"allow_substitute\":true,\"cart_limit\":\"0\",\"measurement_unit\":\"un\",\"unit_multiplier\":1,\"measurement_unit_selector\":false}"
			],
			"SkuData": [
				"{\"1513\":{\"cart_limit\":0,\"allow_notes\":true,\"allow_substitute\":true,\"measurement_unit\":\"un\",\"unit_multiplier\":1,\"promotions\":[],\"measurement_unit_selector\":false}}"
			],
			"Configuraciones": [
				"ProductData",
				"SkuData"
			],
			"allSpecifications": [
				"ProductData",
				"SkuData"
			],
			"description": "Encuentra un momento para sorprender a tus amigos con las más frescas bebidas.",
			"items": [
				{
					"itemId": "1513",
					"name": "Licuadora Oster Monterrey 1.5lt - Vaso Vidrio - Roja",
					"nameComplete": "Licuadora Oster Monterrey 1.5lt - Vaso Vidrio - Roja",
					"complementName": "",
					"ean": "34264450127",
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "698653"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"images": [
						{
							"imageId": "155545",
							"imageLabel": null,
							"imageTag": "<img src=\"~/arquivos/ids/155545-#width#-#height#/1.jpg\" width=\"#width#\" height=\"#height#\" alt=\"1\" id=\"\" />",
							"imageUrl": "http://jumbocolombiafoodqa.vteximg.com.br/arquivos/ids/155545/1.jpg",
							"imageText": "1"
						}
					],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Jumbo Colombia Food QA",
							"addToCartLink": "https://jumbocolombiafoodqa.vtexlocal.com.br/checkout/cart/add?sku=1513&qty=1&seller=1&sc=1&price=0&cv=212b78d0425aef0916623d3bdec581e5_geral:72421B7C219D6A843F0EEA8E9F73D423&sc=1",
							"sellerDefault": false,
							"commertialOffer": {
								"DeliverySlaSamplesPerRegion": {},
								"Installments": [],
								"DiscountHighLight": [],
								"GiftSkuIds": [],
								"Teasers": [],
								"BuyTogether": [],
								"Price": 0,
								"ListPrice": 0,
								"PriceValidUntil": null,
								"AvailableQuantity": 0,
								"Tax": 0,
								"DeliverySlaSamples": [],
								"GetInfoErrorMessage": "Code: withoutPriceRnB Status:error Message: No está más disponible el item Licuadora Oster Monterrey 1.5lt - Vaso Vidrio - Roja y el lo fue retirado del carrito",
								"CacheVersionUsedToCallCheckout": "212b78d0425aef0916623d3bdec581e5_geral:72421B7C219D6A843F0EEA8E9F73D423"
							}
						}
					]
				}
			]
		}
	];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(64), __webpack_require__(18), __webpack_require__(19), __webpack_require__(22), __webpack_require__(57), __webpack_require__(1), __webpack_require__(129), __webpack_require__(130), __webpack_require__(128), __webpack_require__(131), __webpack_require__(132), __webpack_require__(135), __webpack_require__(138), __webpack_require__(141), __webpack_require__(147), __webpack_require__(150), __webpack_require__(153), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _assign, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _spinner, _vtexjs, _ProductHelperFunctions, _ProductImage, _ProductName, _ProductBrand, _ProductPrices, _ProductPrice, _ProductQuantity, _ProductBuyButton, _ProductControls) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _assign2 = _interopRequireDefault(_assign);

		var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass3 = _interopRequireDefault(_createClass2);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _react2 = _interopRequireDefault(_react);

		var _spinner2 = _interopRequireDefault(_spinner);

		var _vtexjs2 = _interopRequireDefault(_vtexjs);

		var _ProductImage2 = _interopRequireDefault(_ProductImage);

		var _ProductName2 = _interopRequireDefault(_ProductName);

		var _ProductBrand2 = _interopRequireDefault(_ProductBrand);

		var _ProductPrices2 = _interopRequireDefault(_ProductPrices);

		var _ProductPrice2 = _interopRequireDefault(_ProductPrice);

		var _ProductBuyButton2 = _interopRequireDefault(_ProductBuyButton);

		var _ProductControls2 = _interopRequireDefault(_ProductControls);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		var ProductItem = function (_React$Component) {
			(0, _inherits3.default)(ProductItem, _React$Component);

			function ProductItem(props) {
				(0, _classCallCheck3.default)(this, ProductItem);

				var _this = (0, _possibleConstructorReturn3.default)(this, (ProductItem.__proto__ || (0, _getPrototypeOf2.default)(ProductItem)).call(this, props));

				_this.state = {
					addingToCart: false,
					quantity: 1
				};
				return _this;
			}

			(0, _createClass3.default)(ProductItem, [{
				key: 'handleQuantityChange',
				value: function handleQuantityChange(e) {
					this.setState({ quantity: e.target.value });
				}
			}, {
				key: 'handleQuantityIncrase',
				value: function handleQuantityIncrase() {
					var quantity = this.state.quantity;


					this.setState({ quantity: quantity + 1 });
				}
			}, {
				key: 'handleQuantityDecrease',
				value: function handleQuantityDecrease() {
					var quantity = this.state.quantity;


					if (quantity > 1) {
						this.setState({ quantity: this.state.quantity - 1 });
					}
				}
			}, {
				key: 'handleBuyButtonClick',
				value: function handleBuyButtonClick() {
					var product = this.props.product;
					var quantity = this.state.quantity;

					var defaultItem = (0, _ProductHelperFunctions.getDefaultItem)(product);
					var item = {
						id: defaultItem.itemId,
						quantity: quantity,
						seller: defaultItem.sellers[0].sellerId
					};

					_vtexjs2.default.checkout.addToCart([item], null, 1);
				}
			}, {
				key: 'render',
				value: function render() {
					var _props = this.props,
					    product = _props.product,
					    styles = _props.styles;
					var quantity = this.state.quantity;

					var isAvailable = (0, _ProductHelperFunctions.isProductAvailable)(product);
					var prices = (0, _ProductHelperFunctions.getProductPrices)(product);
					var pricesFormatted = prices && prices.map(function (price) {
						var label = "";

						switch (price.type) {
							case "list-price":
								{
									label = "Antes";
									break;
								}
							case "best-price":
								{
									label = "Online";
									break;
								}
						}

						return (0, _assign2.default)({}, price, { label: label });
					});

					return _react2.default.createElement(
						'div',
						{ className: 'product-item product-item--' + product.productId, style: styles },
						_react2.default.createElement(_ProductImage2.default, { src: product.items[0].images[0].imageUrl, size: '200' }),
						_react2.default.createElement(_ProductName2.default, { name: product.productName }),
						_react2.default.createElement(_ProductBrand2.default, { brand: product.brand }),
						_react2.default.createElement(
							_ProductPrices2.default,
							null,
							pricesFormatted && pricesFormatted.map(function (price) {
								return _react2.default.createElement(_ProductPrice2.default, {
									key: price.type,
									type: price.type,
									label: price.label,
									value: price.value,
									tax: price.tax,
									currency: 'S/',
									decimals: 2
								});
							})
						),
						isAvailable && _react2.default.createElement(
							_ProductControls2.default,
							null,
							_react2.default.createElement(
								_ProductQuantity.ProductQuantity,
								null,
								_react2.default.createElement(_ProductQuantity.ProductQuantityInput, { value: quantity, onChange: this.handleQuantityChange.bind(this) }),
								_react2.default.createElement(
									_ProductQuantity.ProductQuantityControls,
									null,
									_react2.default.createElement(
										_ProductQuantity.ProductQuantityIncrease,
										{ onClick: this.handleQuantityIncrase.bind(this) },
										_react2.default.createElement('div', { className: 'font-icn plus' })
									),
									_react2.default.createElement(
										_ProductQuantity.ProductQuantityDecrease,
										{ disabled: quantity < 2, onClick: this.handleQuantityDecrease.bind(this) },
										_react2.default.createElement('div', { className: 'font-icn minus' })
									)
								)
							),
							_react2.default.createElement(
								_ProductBuyButton2.default,
								{ onClick: this.handleBuyButtonClick.bind(this) },
								_react2.default.createElement('span', { className: 'font-icn shopping-cart' }),
								_react2.default.createElement(
									'span',
									{ className: 'buy-button-text' },
									'Agregar'
								),
								_react2.default.createElement('img', { src: _spinner2.default })
							)
						)
					);
				}
			}]);
			return ProductItem;
		}(_react2.default.Component);

		ProductItem.defaultProps = {
			styles: {}
		};

		ProductItem.propTypes = {
			product: _react.PropTypes.object.isRequired
		};

		exports.default = ProductItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(105)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _assign, _keys) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.isProductAvailable = isProductAvailable;
		exports.getProductPrices = getProductPrices;
		exports.getDefaultItem = getDefaultItem;

		var _assign2 = _interopRequireDefault(_assign);

		var _keys2 = _interopRequireDefault(_keys);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		function isProductAvailable(product) {
			var items = product.items;


			return items.some(function (item) {
				return item.sellers.some(function (seller) {
					return seller.commertialOffer.AvailableQuantity !== 0;
				});
			});
		}

		function getProductPrices(product) {
			// Validation, just in case
			if (!isProductAvailable(product)) {
				return null;
			}

			var items = product.items;


			var commertialOffer = items.reduce(function (accumulator, item) {
				if ((0, _keys2.default)(accumulator).length) {
					return accumulator;
				}

				return accumulator = item.sellers.find(function (seller) {
					return seller.commertialOffer.AvailableQuantity !== 0;
				}).commertialOffer;
			}, {});

			return [{
				type: "list-price",
				value: commertialOffer.ListPrice,
				tax: commertialOffer.Tax
			}, {
				type: "best-price",
				value: commertialOffer.Price,
				tax: commertialOffer.Tax
			}];
		}

		function getDefaultItem(product) {
			// Validation, just in case
			if (!isProductAvailable(product)) {
				return null;
			}

			var items = product.items;


			return items.reduce(function (accumulator, item) {
				if ((0, _keys2.default)(accumulator).length) {
					return accumulator;
				}

				var defaultSeller = item.sellers.find(function (seller) {
					return seller.commertialOffer.AvailableQuantity !== 0;
				});

				return accumulator = (0, _assign2.default)({}, item, { sellers: [defaultSeller] });
			}, {});
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "/arquivos/spinner.svg";

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = vtexjs;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		function getResizedImage(src, size) {
			var srcFormatted = src.replace(/(?:ids\/[0-9]+)-([0-9]+)-([0-9]+)\//, function (match, matchedWidth, matchedHeight) {
				return match.replace("-" + matchedWidth + "-" + matchedHeight, "-" + size + "-" + size);
			});

			return srcFormatted.replace(/(ids\/[0-9]+)\//, "$1-" + size + "-" + size + "/");
		}

		var ProductItem = function ProductItem(props) {
			var src = props.src,
			    size = props.size;

			var formattedSrc = src;

			if (size !== "auto") {
				formattedSrc = getResizedImage(src, size);
			}

			return _react2.default.createElement(
				"div",
				{ className: "product__image-container" },
				_react2.default.createElement("img", { className: "product__image", src: formattedSrc, width: size, height: size }),
				props.children
			);
		};

		ProductItem.defaultProps = {
			size: "auto"
		};

		ProductItem.propTypes = {
			src: _react.PropTypes.string.isRequired
		};

		exports.default = ProductItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(133)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
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

		var ProductName = function ProductName(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__name-container' },
				_react2.default.createElement(
					'div',
					{ className: 'product__name' },
					props.name
				)
			);
		};

		ProductName.propTypes = {
			name: _react.PropTypes.string.isRequired
		};

		exports.default = ProductName;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(136)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
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

		var ProductBrand = function ProductBrand(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__brand-container' },
				_react2.default.createElement(
					'div',
					{ className: 'product__brand' },
					props.brand
				)
			);
		};

		ProductBrand.propTypes = {
			brand: _react.PropTypes.string.isRequired
		};

		exports.default = ProductBrand;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 136 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(139)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
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

		var ProductPrices = function ProductPrices(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__prices-container' },
				props.children
			);
		};

		exports.default = ProductPrices;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 139 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 140 */,
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(142), __webpack_require__(1), __webpack_require__(108), __webpack_require__(145)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _trunc, _react, _lodash) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _trunc2 = _interopRequireDefault(_trunc);

		var _react2 = _interopRequireDefault(_react);

		var _lodash2 = _interopRequireDefault(_lodash);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		Number.prototype.toFixedDown = function (digits) {
			var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
			    m = this.toString().match(re);
			return m ? parseFloat(m[1]) : this.valueOf();
		};

		function addTax(price, tax) {
			return tax * 100 / price + price;
		}

		function setDecimals(price, decimals) {
			if (decimals === 0) {
				return (0, _trunc2.default)(price);
			}

			return price.toFixedDown(decimals) % 1 === 0 ? price.toString() + "." + _lodash2.default.range(decimals).map(function () {
				return "0";
			}).join("") : price.toFixedDown(decimals);
		}

		var ProductPrice = function ProductPrice(props) {
			var type = props.type,
			    value = props.value,
			    tax = props.tax,
			    decimals = props.decimals,
			    currency = props.currency,
			    label = props.label;

			var formattedPrice = setDecimals(addTax(value, tax), decimals);

			return _react2.default.createElement(
				'div',
				{ className: 'product__price-container product__price-container--' + type },
				label && _react2.default.createElement(
					'span',
					{ className: 'product__price-label' },
					label
				),
				_react2.default.createElement(
					'span',
					{ className: 'product__price-currency' },
					currency
				),
				_react2.default.createElement(
					'span',
					{ className: 'product__price-value' },
					formattedPrice
				)
			);
		};

		ProductPrice.defaultProps = {
			decimals: 2,
			currency: "$"
		};

		ProductPrice.propTypes = {
			type: _react.PropTypes.string.isRequired,
			value: _react.PropTypes.number.isRequired,
			tax: _react.PropTypes.number.isRequired,
			decimals: _react.PropTypes.number,
			currency: _react.PropTypes.string,
			label: _react.PropTypes.string
		};

		exports.default = ProductPrice;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	module.exports = __webpack_require__(8).Math.trunc;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 146 */,
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(23), __webpack_require__(1), __webpack_require__(148)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _typeof2, _react) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.ProductQuantityDecrease = exports.ProductQuantityIncrease = exports.ProductQuantityControls = exports.ProductQuantityInput = exports.ProductQuantity = undefined;

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		var ProductQuantity = exports.ProductQuantity = function ProductQuantity(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-quantity-container' },
				props.children
			);
		};

		ProductQuantity.propTypes = {
			children: function children(props, propName) {
				var validComponents = ["ProductQuantityInput", "ProductQuantityControls", "ProductQuantityIncrease", "ProductQuantityDecrease"];
				var components = props[propName];
				var hasInvalidCompoents = components.some(function (component) {
					if ((typeof component === 'undefined' ? 'undefined' : (0, _typeof3.default)(component)) !== "object") {
						return true;
					}

					return !~validComponents.indexOf(component.type.name);
				});

				if (hasInvalidCompoents) {
					return new Error('Invalid children found, they must be only those ones: ' + validComponents);
				}
			}
		};

		var ProductQuantityInput = exports.ProductQuantityInput = function ProductQuantityInput(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-quantity-input' },
				_react2.default.createElement('input', { onChange: props.onChange, value: props.value })
			);
		};

		ProductQuantityInput.defaultProps = {
			value: 1
		};

		ProductQuantityInput.propTypes = {
			value: _react.PropTypes.number.isRequired,
			onChange: _react.PropTypes.func.isRequired
		};

		var ProductQuantityControls = exports.ProductQuantityControls = function ProductQuantityControls(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-quantity-controls' },
				props.children
			);
		};

		var ProductQuantityIncrease = exports.ProductQuantityIncrease = function ProductQuantityIncrease(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-quantity-control product__product-quantity-control--increase' },
				_react2.default.createElement(
					'button',
					{ onClick: props.onClick },
					props.children
				)
			);
		};

		ProductQuantityIncrease.propTypes = {
			onClick: _react.PropTypes.func.isRequired
		};

		var ProductQuantityDecrease = exports.ProductQuantityDecrease = function ProductQuantityDecrease(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-quantity-control product__product-quantity-control--decrease' },
				_react2.default.createElement(
					'button',
					{ onClick: props.onClick, disabled: props.disabled },
					props.children
				)
			);
		};

		ProductQuantityDecrease.propTypes = {
			onClick: _react.PropTypes.func.isRequired
		};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 148 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 149 */,
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(151)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
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

		var ProductBuyButton = function ProductBuyButton(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__buy-button-container' },
				_react2.default.createElement(
					'button',
					{ className: 'product__buy-button', onClick: props.onClick },
					props.children
				)
			);
		};

		ProductBuyButton.propTypes = {
			onClick: _react.PropTypes.func.isRequired
		};

		exports.default = ProductBuyButton;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(154)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react) {
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

		var ProductControls = function ProductControls(props) {
			return _react2.default.createElement(
				'div',
				{ className: 'product__product-controls-container' },
				props.children
			);
		};

		exports.default = ProductControls;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 154 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 155 */,
/* 156 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 157 */,
/* 158 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);