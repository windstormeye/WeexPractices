// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/pjhubs/Documents/project/case/Weex/todo-list/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrp": {
    "backgroundColor": "#f0f0f2"
  },
  "title": {
    "fontSize": "30",
    "paddingTop": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "event": {
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "20",
    "paddingRight": "20",
    "height": "80"
  },
  "event-btn-wrp": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btn": {
    "borderWidth": "2",
    "borderRadius": "10",
    "fontSize": "28",
    "paddingLeft": "18",
    "paddingRight": "18",
    "paddingTop": "2",
    "paddingBottom": "2"
  },
  "bottom-btn-wrp": {
    "bottom": "0",
    "left": "0",
    "position": "absolute",
    "width": 100,
    "height": "100",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "bottom-btn": {
    "flex": 1,
    "textAlign": "center"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_hjux2fbay07.ttf')"
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrp"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("代办事项")]), _c('div', {
    staticClass: ["event-wrp"]
  }, [_c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("Label")]), _c('div', {
    staticClass: ["event-btn-wrp"]
  }, [_c('text', {
    staticClass: ["btn"]
  }, [_vm._v("完成")]), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事项")]), _c('div', {
    staticClass: ["event-wrp"]
  }, [_c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("Label")]), _c('div', {
    staticClass: ["event-btn-wrp"]
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])]), _c('div', {
    staticClass: ["bottom-btn-wrp"]
  }, [_c('text', {
    staticClass: ["bottom-btn"]
  }, [_vm._v("添加")]), _c('text', {
    staticClass: ["bottom-btn"]
  }, [_vm._v("清空")])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);