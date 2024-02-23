(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_login_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_notify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/notify.js */ "./resources/js/utils/notify.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("login", {
                  email: _this.email,
                  password: _this.password
                });

              case 3:
                response = _context.sent;
                localStorage.setItem("token", response.data.token);

                _this.$store.dispatch("user", response.data.user);

                _this.$router.push("/admin");

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _utils_notify_js__WEBPACK_IMPORTED_MODULE_2__.authError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    startImageSlideshow: function startImageSlideshow() {
      var _this2 = this;

      setInterval(function () {
        var totalImages = _this2.images.length;
        var currentImage = _this2.activeImage;
        var nextImage = (currentImage + 1) % totalImages; // Hide the current image

        _this2.images[currentImage].isActive = false; // After a delay, show the next image

        setTimeout(function () {
          _this2.activeImage = nextImage;
          _this2.images[nextImage].isActive = true;
        }, 1000); // Adjust the delay as needed
      }, 8000);
    }
  }
});

/***/ }),

/***/ "./resources/js/utils/notify.js":
/*!**************************************!*\
  !*** ./resources/js/utils/notify.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authError": () => (/* binding */ authError)
/* harmony export */ });
function authError(error) {
  var errorMessages = [];
  var detailedMessages = [];
  var errorMessage = error.response.data.message || "The given data was invalid.";
  errorMessages.push(errorMessage);

  if (error.response.data.errors) {
    detailedMessages = [].concat.apply([], Object.values(error.response.data.errors));
    errorMessages = errorMessages.concat(detailedMessages);
  }

  errorMessages.forEach(function (message) {
    var toast = Vue.toasted.show(message, {
      theme: "toasted-primary",
      position: "top-right",
      duration: 5000
    });
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nheader.loging-header[data-v-72911c7d] {\n    width: 100%;\n    padding: 30px 100px;\n    position: absolute;\n}\n.contanir[data-v-72911c7d] {\n    width: 100%;\n}\nnav.logaing-nav[data-v-72911c7d] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.loging-logo[data-v-72911c7d] {\n    width: 7%;\n}\n.loging-logo img[data-v-72911c7d] {\n    width: 100%;\n}\n.loging-close-btn[data-v-72911c7d] {\n    width: 5%;\n}\n.loging-close-btn button[data-v-72911c7d] {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n}\n.loging-close-btn button img[data-v-72911c7d] {\n    width: 100%;\n}\nsection.loging-page[data-v-72911c7d] {\n    width: 100%;\n    background-color: #DED4A2;\n    padding: 0px 0px 0px 100px;\n}\n.main-loging[data-v-72911c7d] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.loging-salider[data-v-72911c7d] {\n    width: 52%;\n}\n.loging-salider img[data-v-72911c7d] {\n    width: 100%;\n}\n.loging-form[data-v-72911c7d] {\n    width: 40%;\n}\n.form-LogIn[data-v-72911c7d] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 40px;\n    align-items: center;\n}\n.form-LogIn h2[data-v-72911c7d] {\n    color: #293857;\n    font-family: \"Saol Display\";\n    font-size: 70px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n    text-align: center;\n    width: 100%;\n}\n.Login-btn-box[data-v-72911c7d] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.Login-btn-box button[data-v-72911c7d] {\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    display: inline-flex;\n    padding: 22px 62px 22px 63px;\n    justify-content: center;\n    border: 1px solid #293857;\n    background: transparent;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    align-items: center;\n    transition: 0.3s;\n}\n.loging-input-group[data-v-72911c7d] {\n    width: 100%;\n}\n.loging-input-group input[data-v-72911c7d] {\n    width: 100%;\n    color: #293857 !important;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-style: normal;\n    outline: none;\n    border: none;\n    font-weight: 400;\n    padding: 22px 0px;\n    line-height: normal;\n    background-color: transparent;\n    border-bottom: 1px solid #5C5C5C;\n}\n.Forgot-box[data-v-72911c7d] {\n    width: 100%;\n}\n.Forgot-box button[data-v-72911c7d] {\n    background: transparent;\n    border: none;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-weight: 600;\n    line-height: normal;\n    font-style: italic;\n}\n.btn-loging-long[data-v-72911c7d] {\n    width: 100%;\n}\n.btn-loging-long button[data-v-72911c7d] {\n    width: 100%;\n    background: #293857;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    color: #FFF;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding: 18px;\n    border: 1px solid #293857;\n}\n.OR-list[data-v-72911c7d] {width: 100%;}\n.OR-list p[data-v-72911c7d] {\n    width: 100%;\n    text-align: center;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    background: #5C5C5C;\n    height: 1px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.Google-btn[data-v-72911c7d] {\n    width: 100%;\n}\n.Google-btn button[data-v-72911c7d] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    padding: 18px 30px;\n    justify-content: center;\n    gap: 20px;\n    background: transparent;\n    border: 1px solid #5C5C5C;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.form-LogIn p[data-v-72911c7d] {\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    text-align: center;\n    width: 100%;\n}\n.Login-btn-box button[data-v-72911c7d]:hover {\n    background: #293857;\n    color: #ded4a2;\n}\nol.carousel-indicators img[data-v-72911c7d] {\n    width: 100% !important;\n}\nol.carousel-indicators[data-v-72911c7d] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: 0px;\n    left: -70px;\n    width: 14%;\n    margin: 0px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72911c7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72911c7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72911c7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/login/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/login/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=72911c7d&scoped=true& */ "./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/login/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_72911c7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& */ "./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72911c7d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/login/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/login/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/login/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72911c7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=style&index=0&id=72911c7d&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_72911c7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=72911c7d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/login/index.vue?vue&type=template&id=72911c7d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "loging-page" }, [
      _c("div", { staticClass: "contanir" }, [
        _c("div", { staticClass: "main-loging" }, [
          _c("div", { staticClass: "loging-form" }, [
            _c("div", { staticClass: "form-LogIn" }, [
              _c("h2", [_vm._v("Log In ")]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "Google-btn" }, [
                _c("button", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30",
                        viewBox: "0 0 30 30",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_265_483)" } },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M10.4508 0.986913C7.45335 2.02676 4.86834 4.00043 3.07548 6.61801C1.28262 9.23559 0.376419 12.3591 0.489976 15.5298C0.603533 18.7005 1.73087 21.7512 3.70638 24.2338C5.6819 26.7164 8.40148 28.5001 11.4657 29.3229C13.9499 29.9639 16.5526 29.992 19.05 29.4049C21.3125 28.8967 23.4042 27.8096 25.1203 26.2502C26.9065 24.5776 28.2029 22.4498 28.8703 20.0955C29.5955 17.5353 29.7246 14.843 29.2477 12.2252H15.2977V18.0119H23.3766C23.2151 18.9349 22.8691 19.8157 22.3593 20.6018C21.8495 21.3879 21.1863 22.0631 20.4094 22.5869C19.423 23.2397 18.3109 23.6788 17.1446 23.876C15.9749 24.0935 14.7752 24.0935 13.6055 23.876C12.4199 23.6311 11.2984 23.1418 10.3125 22.4393C8.72851 21.318 7.53912 19.725 6.9141 17.8877C6.27868 16.0159 6.27868 13.9868 6.9141 12.115C7.359 10.803 8.09449 9.60848 9.06566 8.62051C10.177 7.46913 11.5841 6.64612 13.1324 6.24178C14.6808 5.83743 16.3106 5.86738 17.843 6.32832C19.0402 6.69564 20.1349 7.33772 21.0399 8.20332C21.9508 7.29707 22.8602 6.38848 23.768 5.47754C24.2368 4.98769 24.7477 4.52129 25.2094 4.01973C23.8278 2.73422 22.2063 1.73388 20.4375 1.07598C17.2165 -0.0935799 13.6922 -0.125011 10.4508 0.986913Z",
                              fill: "#293857"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M10.4504 0.986587C13.6915 -0.126092 17.2158 -0.0954888 20.4371 1.07331C22.2062 1.73568 23.827 2.74084 25.2066 4.03112C24.7379 4.53268 24.2434 5.00143 23.7652 5.48893C22.8559 6.39674 21.9473 7.30143 21.0395 8.20299C20.1345 7.3374 19.0398 6.69531 17.8426 6.32799C16.3106 5.86543 14.6809 5.83376 13.1322 6.23645C11.5834 6.63914 10.1755 7.46064 9.06289 8.61081C8.09172 9.59878 7.35623 10.7933 6.91133 12.1053L2.05273 8.34362C3.79182 4.89493 6.80293 2.25696 10.4504 0.986587Z",
                              fill: "#E33629"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M0.764007 12.0703C1.02496 10.776 1.45852 9.52264 2.05307 8.34375L6.91166 12.1148C6.27625 13.9866 6.27625 16.0157 6.91166 17.8875C5.29291 19.1375 3.67338 20.3938 2.05307 21.6563C0.565141 18.6945 0.111349 15.3199 0.764007 12.0703Z",
                              fill: "#F8BD00"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M15.2979 12.2227H29.2479C29.7248 14.8405 29.5958 17.5328 28.8706 20.093C28.2032 22.4472 26.9067 24.575 25.1206 26.2477C23.5526 25.0242 21.9776 23.8102 20.4096 22.5867C21.187 22.0624 21.8505 21.3865 22.3604 20.5995C22.8702 19.8126 23.216 18.9308 23.3768 18.007H15.2979C15.2956 16.0805 15.2979 14.1516 15.2979 12.2227Z",
                              fill: "#587DBD"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M2.05078 21.6564C3.67109 20.4064 5.29062 19.1502 6.90937 17.8877C7.53564 19.7257 8.72673 21.3187 10.3125 22.4393C11.3014 23.1386 12.4254 23.6239 13.6125 23.8643C14.7822 24.0818 15.9819 24.0818 17.1516 23.8643C18.3179 23.6671 19.43 23.228 20.4164 22.5752C21.9844 23.7986 23.5594 25.0127 25.1273 26.2361C23.4115 27.7964 21.3197 28.8843 19.057 29.3932C16.5596 29.9803 13.9569 29.9521 11.4727 29.3111C9.50789 28.7865 7.67268 27.8617 6.08203 26.5947C4.39858 25.2579 3.02352 23.5734 2.05078 21.6564Z",
                              fill: "#319F43"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_265_483" } }, [
                          _c("rect", {
                            attrs: { width: "30", height: "30", fill: "white" }
                          })
                        ])
                      ])
                    ]
                  ),
                  _vm._v("\nSign In With Google")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("New to 444Living ? Sign Up")])
            ])
          ]),
          _vm._v(" "),
          _vm._m(7)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "loging-header" }, [
      _c("div", { staticClass: "contanir" }, [
        _c("nav", { staticClass: "logaing-nav" }, [
          _c("div", { staticClass: "loging-logo" }, [
            _c("img", { attrs: { src: "/images/logo-header.png", alt: "" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "loging-close-btn" }, [
            _c("button", [
              _c("img", { attrs: { src: "/images/loging-close.png", alt: "" } })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "Login-btn-box" }, [
      _c("button", [_vm._v("As  Buyer")]),
      _vm._v(" "),
      _c("button", [_vm._v("As Realtor")]),
      _vm._v(" "),
      _c("button", [_vm._v("As Realtor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loging-input-group" }, [
      _c("input", { attrs: { type: "email", placeholder: "Email *" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loging-input-group" }, [
      _c("input", {
        attrs: { type: "password", placeholder: "Your Password *" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "Forgot-box" }, [
      _c("button", [_vm._v("Forgot Password ?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-loging-long" }, [
      _c("button", [_vm._v("Log In")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "OR-list" }, [_c("p", [_vm._v("OR")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loging-salider" }, [
      _c(
        "div",
        {
          staticClass: "carousel slide carousel-fade",
          attrs: {
            id: "carouselExampleIndicators",
            "data-ride": "carousel",
            "data-interval": "3000"
          }
        },
        [
          _c("div", [
            _c("ol", { staticClass: "carousel-indicators" }, [
              _c("img", {
                staticClass: "active",
                attrs: {
                  src: "/images/p1.png",
                  alt: "",
                  "data-target": "#carouselExampleIndicators",
                  "data-slide-to": "0"
                }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src: "/images/p2.png",
                  alt: "",
                  "data-target": "#carouselExampleIndicators",
                  "data-slide-to": "1"
                }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src: "/images/p3.png",
                  alt: "",
                  "data-target": "#carouselExampleIndicators",
                  "data-slide-to": "2"
                }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src: "/images/p4.png",
                  alt: "",
                  "data-target": "#carouselExampleIndicators",
                  "data-slide-to": "3"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-inner" }, [
            _c("div", { staticClass: "carousel-item active" }, [
              _c("img", {
                staticClass: "d-block w-100",
                attrs: { src: "/images/salider.png", alt: "First slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("img", {
                staticClass: "d-block w-100",
                attrs: {
                  s: "",
                  src: "/images/salider1.png",
                  alt: "Second slide"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("img", {
                staticClass: "d-block w-100",
                attrs: { src: "/images/salider2.png", alt: "Third slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("img", {
                staticClass: "d-block w-100",
                attrs: { src: "/images/salider3.png", alt: "fourth slide" }
              })
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);