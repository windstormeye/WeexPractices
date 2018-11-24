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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/pjhubs/Documents/project/case/Weex/todo-list/src/components/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-688b5e20"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "navbar": {
    "height": "88",
    "backgroundColor": "#50e3a4",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "navbar-icon": {
    "color": "#ffffff",
    "fontSize": "36"
  }
}

/***/ }),
/* 2 */
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

var navigator = weex.requireModule('navigator');
exports.default = {
  name: 'navbar',
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
    });
  },

  methods: {
    onBack: function onBack() {
      navigator.pop({
        animated: 'true'
      });
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbar"]
  }, [(_vm.showBack) ? _c('text', {
    staticClass: ["iconfont", "navbar-icon"],
    on: {
      "click": _vm.onBack
    }
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["navbar-title"]
  }), _c('text', {
    staticClass: ["navbar-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
    staticClass: ["navbar-title"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/pjhubs/Documents/project/case/Weex/todo-list/src/components/event-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-08a36576"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#3e434f"
  },
  "label": {
    "color": "#3e434f",
    "fontSize": "28"
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
    "borderRadius": "10",
    "fontSize": "24",
    "paddingLeft": "18",
    "paddingRight": "18",
    "paddingTop": "2",
    "paddingBottom": "2",
    "backgroundColor": "#50e3a4",
    "color": "#ffffff"
  }
}

/***/ }),
/* 6 */
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

exports.default = {
  name: 'event-item',
  props: {
    showFinishButton: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
    });
  },

  methods: {
    onFinish: function onFinish(event, index) {
      this.$emit('onClickFinishButton', event, index);
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(_vm._s(_vm.event.name))]), _c('div', {
    staticClass: ["event-btn-wrp"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.onFinish(_vm.event, _vm.index)
      }
    }
  }, [_vm._v("完成")]), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/pjhubs/Documents/project/case/Weex/todo-list/src/components/tabbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-04ac836e"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#3e434f"
  },
  "tabbar-wrp": {
    "bottom": "0",
    "left": "0",
    "position": "absolute",
    "width": 100,
    "height": "88",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopWidth": "2",
    "borderColor": "#e2e2e2"
  },
  "tabbar-item": {
    "flex": 1,
    "textAlign": "center",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tabbar-text": {
    "fontSize": "24",
    "color": "#3e434f"
  },
  "tabbar-icon": {
    "fontSize": "44"
  }
}

/***/ }),
/* 10 */
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

exports.default = {
  name: 'tabbar',
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
    });
  },

  methods: {
    onAdd: function onAdd() {
      this.$emit('onAdd');
    },
    onClear: function onClear() {
      this.$emit('onClear');
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tabbar-wrp"]
  }, [_c('div', {
    staticClass: ["tabbar-item"],
    on: {
      "click": _vm.onAdd
    }
  }, [_c('text', {
    staticClass: ["iconfont", "tabbar-icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["tabbar-text"]
  }, [_vm._v("添加")])]), _c('div', {
    staticClass: ["tabbar-item"],
    on: {
      "click": _vm.onClear
    }
  }, [_c('text', {
    staticClass: ["iconfont", "tabbar-icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["tabbar-text"]
  }, [_vm._v("清空")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(30)
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "wrp": {
    "backgroundColor": "#F0EFE9"
  },
  "title": {
    "fontSize": "24",
    "paddingTop": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#3e434f"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(29);

var _navbar = __webpack_require__(0);

var _navbar2 = _interopRequireDefault(_navbar);

var _eventItem = __webpack_require__(4);

var _eventItem2 = _interopRequireDefault(_eventItem);

var _tabbar = __webpack_require__(8);

var _tabbar2 = _interopRequireDefault(_tabbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var storage = weex.requireModule('storage');
var navigator = weex.requireModule('navigator');
exports.default = {
  components: { navbar: _navbar2.default, eventItem: _eventItem2.default, tabBar: _tabbar2.default },
  data: function data() {
    return {
      todoEvents: [],
      doneEvents: []
    };
  },
  created: function created() {
    if (weex.config.env.platform === 'Web') {
      this.onShow();
    }
  },

  methods: {
    onShow: function onShow() {
      var _this = this;

      storage.getItem('todoEvents', function (e) {
        if (e.result === 'success') {
          _this.todoEvents = JSON.parse(e.data);
        } else {
          _this.todoEvents = [];
        }
      });
      storage.getItem('doneEvents', function (e) {
        if (e.result === 'success') {
          _this.doneEvents = JSON.parse(e.data);
        } else {
          _this.doneEvents = [];
        }
      });
    },
    onEventClick: function onEventClick(event) {
      if (weex.config.env.platform === 'Web') {
        this.onHidden();
      }
      storage.setItem('currentEvent', JSON.stringify(event));
      navigator.push({
        url: (0, _utils.getEntryUrl)('detail'),
        animated: 'true'
      });
    },
    onHidden: function onHidden() {
      storage.setItem('todoEvents', JSON.stringify(this.todoEvents));
      storage.setItem('doneEvents', JSON.stringify(this.doneEvents));
    },
    onFinish: function onFinish(event, index) {
      this.todoEvents.splice(index, 1);
      this.doneEvents.push(event);
    },
    onAdd: function onAdd() {
      if (weex.config.env.platform === 'Web') {
        this.onHidden();
      }
      navigator.push({
        url: (0, _utils.getEntryUrl)('add'),
        animated: 'true'
      });
    },
    onClear: function onClear() {
      this.todoEvents = [];
      this.doneEvents = [];
      this.onHidden();
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntryUrl = getEntryUrl;
function getEntryUrl(pageName) {
  if (weex.config.env.platform === 'Web') {
    return './' + pageName + '.html';
  } else {
    var arr = weex.config.bundleUrl.split('/');
    // 防止为 .html
    arr.pop();
    arr.push(pageName + '.js');
    return arr.join('/');
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrp"],
    on: {
      "viewappear": _vm.onShow,
      "viewdisappear": _vm.onHidden
    }
  }, [_c('navbar', {
    attrs: {
      "title": "待办清单",
      "showBack": false
    }
  }), (_vm.todoEvents.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("代办事项")]) : _vm._e(), _c('div', {
    staticClass: ["event-wrp"]
  }, _vm._l((_vm.todoEvents), function(event, index) {
    return _c('eventItem', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index
      },
      on: {
        "click": function($event) {
          _vm.onEventClick(event)
        },
        "onClickFinishButton": _vm.onFinish
      }
    })
  })), (_vm.doneEvents.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事项")]) : _vm._e(), _c('div', {
    staticClass: ["event-wrp"]
  }, _vm._l((_vm.doneEvents), function(event, index) {
    return _c('eventItem', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index,
        "showFinishButton": false
      },
      on: {
        "click": function($event) {
          _vm.onEventClick(event)
        }
      }
    })
  })), _c('tab-bar', {
    on: {
      "onAdd": _vm.onAdd,
      "onClear": _vm.onClear
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);