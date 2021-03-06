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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(17)
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(16);

var _navbar = __webpack_require__(6);

var _navbar2 = _interopRequireDefault(_navbar);

var _eventItem = __webpack_require__(21);

var _eventItem2 = _interopRequireDefault(_eventItem);

var _tabbar = __webpack_require__(25);

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
    }
  }
};

/***/ }),
/* 16 */
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
/* 17 */
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
  }, [_vm._v("代办事项")]) : _vm._e(), _vm._l((_vm.todoEvents), function(event, index) {
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
  }), (_vm.doneEvents.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事项")]) : _vm._e(), _vm._l((_vm.doneEvents), function(event, index) {
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
  }), _c('tab-bar', {
    on: {
      "onAdd": _vm.onAdd,
      "onClear": _vm.onClear
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(_vm._s(_vm.event.name))]), _c('div', {
    staticClass: ["event-btn-wrp"]
  }, [(_vm.showFinishButton) ? _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.onFinish(_vm.event, _vm.index)
      }
    }
  }, [_vm._v("完成")]) : _vm._e(), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
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
/* 26 */
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
/* 27 */
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
/* 28 */
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

/***/ })
/******/ ]);