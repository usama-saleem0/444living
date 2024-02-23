(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nheader.loging-header[data-v-5baf7a25] {\n    width: 100%;\n    padding: 30px 100px;\n    position: absolute;\n}\n.contanir[data-v-5baf7a25] {\n    width: 100%;\n}\nnav.logaing-nav[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\ninput[data-v-5baf7a25]:-internal-autofill-selected {\n    background-color: transparent !important;\n}\n.loging-logo[data-v-5baf7a25] {\n    width: 7%;\n}\n.loging-logo img[data-v-5baf7a25] {\n    width: 100%;\n}\n.loging-close-btn[data-v-5baf7a25] {\n    width: 5%;\n}\n.loging-close-btn button[data-v-5baf7a25] {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n}\n.loging-close-btn button img[data-v-5baf7a25] {\n    width: 100%;\n}\nsection.loging-page[data-v-5baf7a25] {\n    width: 100%;\n    background-color: #DED4A2;\n    padding: 0px 0px 0px 100px;\n}\n.main-loging[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.loging-salider[data-v-5baf7a25] {\n    width: 52%;\n}\n.loging-salider img[data-v-5baf7a25] {\n    width: 100%;\n}\n.loging-form[data-v-5baf7a25] {\n    width: 40%;\n}\n.form-LogIn[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 40px;\n    align-items: center;\n}\n.form-LogIn h2[data-v-5baf7a25] {\n    color: #293857;\n    font-family: \"Saol Display\";\n    font-size: 70px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n    text-align: center;\n    width: 100%;\n}\n.Login-btn-box[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.Login-btn-box button[data-v-5baf7a25] {\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    display: inline-flex;\n    padding: 22px 62px 22px 63px;\n    justify-content: center;\n    border: 1px solid #293857;\n    background: transparent;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    align-items: center;\n    transition: 0.3s;\n}\n.loging-input-group[data-v-5baf7a25] {\n    width: 100%;\n}\n.loging-input-group input[data-v-5baf7a25] {\n    width: 100%;\n    color: #293857 !important;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-style: normal;\n    outline: none;\n    border: none;\n    font-weight: 400;\n    padding: 22px 0px;\n    line-height: normal;\n    background-color: transparent;\n    border-bottom: 1px solid #5C5C5C;\n}\n.Forgot-box[data-v-5baf7a25] {\n    width: 100%;\n}\n.Forgot-box button[data-v-5baf7a25] {\n    background: transparent;\n    border: none;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-weight: 600;\n    line-height: normal;\n    font-style: italic;\n}\n.btn-loging-long[data-v-5baf7a25] {\n    width: 100%;\n}\n.btn-loging-long button[data-v-5baf7a25] {\n    width: 100%;\n    background: #293857;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    color: #FFF;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding: 18px;\n    border: 1px solid #293857;\n}\n.OR-list[data-v-5baf7a25] {width: 100%;}\n.OR-list p[data-v-5baf7a25] {\n    width: 100%;\n    text-align: center;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    background: #5C5C5C;\n    height: 1px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.Google-btn[data-v-5baf7a25] {\n    width: 100%;\n}\n.Google-btn button[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    padding: 18px 30px;\n    justify-content: center;\n    gap: 20px;\n    background: transparent;\n    border: 1px solid #5C5C5C;\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.form-LogIn p[data-v-5baf7a25] {\n    color: #293857;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    text-align: center;\n    width: 100%;\n}\n.Login-btn-box button[data-v-5baf7a25]:hover {\n    background: #293857;\n    color: #ded4a2;\n}\nol.carousel-indicators img[data-v-5baf7a25] {\n    width: 100% !important;\n}\nol.carousel-indicators[data-v-5baf7a25] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: 0px;\n    left: -70px;\n    width: 14%;\n    margin: 0px !important;\n}\n.loging-input-groups input[data-v-5baf7a25] {\n    width: 48%;\n    color: #293857 !important;\n    font-family: sans-serif;\n    font-size: 22px;\n    font-style: normal;\n    outline: none;\n    border: none;\n    font-weight: 400;\n    padding: 22px 0px;\n    line-height: normal;\n    background-color: transparent;\n    border-bottom: 1px solid #5C5C5C;\n}\n.loging-input-groups[data-v-5baf7a25] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5baf7a25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5baf7a25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5baf7a25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/register/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/register/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5baf7a25&scoped=true& */ "./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/register/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_5baf7a25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& */ "./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5baf7a25",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/register/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5baf7a25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=style&index=0&id=5baf7a25&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5baf7a25&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("header", { staticClass: "loging-header" }, [
        _c("div", { staticClass: "contanir" }, [
          _c("nav", { staticClass: "logaing-nav" }, [
            _c("div", { staticClass: "loging-logo" }, [
              _c("img", { attrs: { src: "/images/logo-header.png", alt: "" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "loging-close-btn" }, [
              _c("button", [
                _c("img", {
                  attrs: { src: "/images/loging-close.png", alt: "" }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "loging-page" }, [
        _c("div", { staticClass: "contanir" }, [
          _c("div", { staticClass: "main-loging" }, [
            _c("div", { staticClass: "loging-form" }, [
              _c("div", { staticClass: "form-LogIn" }, [
                _c("h2", [_vm._v("Sign Up")]),
                _vm._v(" "),
                _c("div", { staticClass: "Login-btn-box" }, [
                  _c("button", [_vm._v("As  Buyer")]),
                  _vm._v(" "),
                  _c("button", [_vm._v("As Realtor")]),
                  _vm._v(" "),
                  _c("button", [_vm._v("As Realtor")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "loging-input-group" }, [
                  _c("input", {
                    attrs: {
                      type: "email",
                      placeholder: "Enter your email address*"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "loging-input-groups" }, [
                  _c("input", {
                    attrs: { type: "text", placeholder: "Username" }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "number", placeholder: "Contact Number" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "loging-input-group" }, [
                  _c("input", {
                    attrs: {
                      type: "password",
                      placeholder: "Enter your password*"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "loging-input-group" }, [
                  _c("input", {
                    attrs: {
                      type: "password",
                      placeholder: "Re-enter your password"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-loging-long" }, [
                  _c("button", [_vm._v("Next")])
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("New to 444Living ? Sign Up")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "loging-salider" }, [
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
                        attrs: {
                          src: "/images/salider.png",
                          alt: "First slide"
                        }
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
                        attrs: {
                          src: "/images/salider2.png",
                          alt: "Third slide"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "carousel-item" }, [
                      _c("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                          src: "/images/salider3.png",
                          alt: "fourth slide"
                        }
                      })
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);