(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_profilescreen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _admin_components_Topbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/Topbar.vue */ "./resources/js/views/admin/components/Topbar.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 // import chartBarDemo from "../../chart/demo/chart-bar-demo";
// import { get , byMethod} from '../admin/components/lib/api';
// import Edit from "./entreform.vue";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin',
  components: {
    Header: _admin_components_Topbar_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      isModalOpen: true,
      method: 'POST',
      model: {},
      ancd: []
    }, _defineProperty(_ref, "model", ''), _defineProperty(_ref, "count", 0), _ref;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["user"])) //         created(){
  //             this.id = this.$route.params.id;
  //                 get('/getprofile?id='+this.id)
  //               .then((res) => {
  //                  this.setData(res)
  //               })
  //         }, 
  //         methods:{
  //             hiring(){
  //                 this.$router.push(`/allmerchandises/${this.id}`)
  //             },
  //             chat(){
  //                 this.$router.push({
  //   name: 'chats', 
  //   params: { id: JSON.stringify(this.model) },
  // });
  //             },
  //             openModal() {
  //      $('#popup-box').modal('show');
  //    },
  //    closeModal() {
  //    console.log('avcd');
  //    this.shows = false;
  //    $('#popup-box').modal('hide');
  //    get('/getprofile?id='+this.id)
  //               .then((res) => {
  //                  this.setData(res)
  //               });
  //    },
  //             editform(){
  //                 this.$router.push('/entrefrom');
  //             },
  //             setData(res) {
  //               Vue.set(this.$data, 'model', res.data.data)
  //               Vue.set(this.$data, 'ancd', res.data.data.package)
  //               if (Array.isArray(this.ancd) && this.ancd.length > 0) {
  //   this.count = 1;
  // }
  //           },
  //         }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-7a99f634]{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\n}\n.imgss[data-v-7a99f634]{\r\nwidth: 100%;\n}\n.godashboard[data-v-7a99f634]{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 40px;\r\n\r\n    padding: 8px 48px 8px 49px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #293857;\r\n    color: #DED4A2;\r\ntext-align: center;\r\nfont-family: sans-serif;\r\nfont-size: 16px;\r\nfont-style: normal;\r\nfont-weight: 400;\r\nline-height: 24px; /* 150% */\n}\n.upgardebutton[data-v-7a99f634]{\r\n    background: #DED4A2;\r\n    display: flex;\r\nwidth: 172px;\r\nheight: 48px;\r\npadding: 12px 29px;\r\njustify-content: center;\r\nalign-items: center;\r\nflex-shrink: 0;\r\ncolor: #293857;\n}\n.trust[data-v-7a99f634]{\r\n    color: #DED4A2;\r\n    font-family: AktivGrotesk-Regular;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.contac[data-v-7a99f634]{\r\n    background: #293857;\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 6px 10px 4px 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 24px;\n}\n.arrow[data-v-7a99f634]::after{\r\n    position: relative;\r\n    left: 0px;\n}\n.arrow[data-v-7a99f634]{\r\n    background: #293857;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border:none;\n}\nbutton[data-v-7a99f634]::after{\r\n\r\n    left: 0px;\n}\nbutton[data-v-7a99f634]{\r\n    border:none;\n}\n.member[data-v-7a99f634]{\r\n    color: #DED4A2;\r\nfont-family: sans-serif;\r\nfont-size: 25px;\r\nfont-style: italic;\r\nfont-weight: 400;\r\nline-height: normal;\n}\n.basic[data-v-7a99f634]{\r\n    color: #DED4A2;\r\nfont-family: \"Saol Display\";\r\nfont-size: 65px;\r\nfont-style: normal;\r\nfont-weight: 400;\r\nline-height: normal;\n}\n.since[data-v-7a99f634]{\r\n    color: #DED4A2;\r\nfont-family: sans-serif;\r\nfont-size: 16px;\r\nfont-style: normal;\r\nfont-weight: 400;\r\nline-height: normal;\n}\n.carder[data-v-7a99f634]{\r\n    width: 515px;\r\n    height: 177px;\r\n    flex-shrink: 0;\r\n    background: #293857;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 25px;\n}\n.newp[data-v-7a99f634]{\r\n    font-size: 22px !important;\r\n    font-weight: 400 !important;\n}\n.ptag[data-v-7a99f634]{\r\n    color: #5C5C5C !important;\r\n    font-family: sans-serif !important;\r\n    font-size: 18px !important;\r\n    font-style: normal !important;\r\n    font-weight: 400 !important;\r\n    line-height: normal !important;\r\n    padding-bottom: 15px !important;\r\n    padding-top: 5px !important;\n}\n.page-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    background-color: #293857;\r\n    padding: 30px;\n}\n.contanir[data-v-7a99f634] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.main[data-v-7a99f634] {\r\n    width: 100%;\r\n    height: 871px;\r\n    flex-shrink: 0;\r\n    border-radius: 0px !important;\r\n    background: #293857 !important;\r\n    /* box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25); */\r\n    box-shadow: none !important;\n}\n.roll-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    height: 250px;\r\n    flex-shrink: 1;\r\n    background-image: url(/images/bgimg.png);\r\n    /* border-radius: 20px 20px  0px 0px; */\r\n    border-radius: 0px !important;\n}\n.roll-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 0px 0px !important;\n}\n.list-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 25px 0px 15px 0px;\r\n    /* border-bottom: 2px solid #f96; */\r\n    border-bottom: 2px solid #DED4A2 !important;\n}\n.list-1 img[data-v-7a99f634] {\r\n    width: 12%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -125px;\r\n    margin-left: 20px;\r\n   \r\n    max-height: 232px;\r\n    min-height: 232px;\r\n    border-radius: 0px !important;\r\n    -o-object-fit: cover;\r\n    object-fit: contain !important;\n}\n.list-titel[data-v-7a99f634] {\r\n    width: 50%;\n}\n.list-titel span[data-v-7a99f634] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    width: 100%;\n}\n.list-titel span h2[data-v-7a99f634] {\r\n    color: #DED4A2 !important;\r\n    font-family: Saol Display !important;\r\n    font-size: 50px;\r\n    font-style: normal;\r\n    font-weight: 400 !important;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-id[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 5px 0px 8px 0px;\n}\n.list-id h2[data-v-7a99f634] {\r\n    color: #DED4A2 !important;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400 !important;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin: 0px;\n}\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding-right: 50px;\n}\n.btn-ides[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 45px;\n}\n.buttons[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-top: 10px;\n}\n.list-btn[data-v-7a99f634] {\r\n    width: 34%;\n}\n.btn-ides span[data-v-7a99f634] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    justify-content: center;\n}\n.btn-ides h2[data-v-7a99f634] {\r\n    color: #DED4A2 !important;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400 !important;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.buttons button[data-v-7a99f634] {\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Hire[data-v-7a99f634] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #fff;\n}\n.pox-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    /* border-bottom: 1px solid #000; */\r\n    border: none !important;\n}\n.pox-1 h2[data-v-7a99f634] {\r\n    color: #293857 !important;\r\n    text-align: center;\r\n    font-family: Saol Display !important;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 400 !important;\r\n    line-height: normal; \r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-7a99f634] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 10px;\n}\n.top-btn button[data-v-7a99f634] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-7a99f634] {\r\n    /* color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px; */\r\n    color: #293857;\r\nfont-family: sans-serif;\r\nfont-size: 25px;\r\nfont-style: normal;\r\nfont-weight: 600;\r\nline-height: normal;\n}\n.pox-2 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.pox-3[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3 p[data-v-7a99f634] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.carousel-control-prev[data-v-7a99f634], .carousel-control-next[data-v-7a99f634] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    display: flex;\r\n    width: 5% !important;\r\n    color: #fff;\r\n    text-align: center !important;\r\n    opacity: 0.5;\r\n    transition: opacity 0.15s ease;\r\n    justify-content: center !important;\r\n    align-items: center !important;\n}\n.pox-3 h2 span[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-7a99f634] {\r\n    color: #fff;\n}\n.cards[data-v-7a99f634] {\r\n    /* border-radius: 16px; */\r\n    /* border: 2px solid #000; */\r\n    background: #DED4A2 !important;\r\n    /* box-shadow: 4px 4px 0px 2px #1B1C1D; */\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    flex-shrink: 0;\r\n    border-radius: 0px !important;\r\n    border: none !important;\r\n    box-shadow: none !important;\n}\n.more-card[data-v-7a99f634] {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 15px\n}\n.more-card[data-v-7a99f634] {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.salider-card[data-v-7a99f634] {\r\n    height: 445px;\r\n    flex-shrink: 0;\r\n    /* border-left: 2px solid #F96; */\r\n    border-left: 2px solid #DED4A2 !important;\r\n\r\n    width: 28%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\n}\n.list-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.mine-card[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.Jobs-card[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 144px;\r\n    padding: 17px 15px 17px 16px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.Jobs-card p span[data-v-7a99f634] {\r\n    color: green;\n}\n.Jobs-card h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 46px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 144px;\r\n    padding: 17px 46px 17px 16px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.run-card h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\n}\n.Jobs-cards h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 46px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.slide-card[data-v-7a99f634] {\r\n    width: 380px;\r\n    height: 100% !important;\r\n    border: 2px solid #293857 !important;\r\n    background: #DED4A2 !important;\r\n    box-shadow: none !important;\r\n    border-radius: 0px !important;\r\n    padding: 34px 47px 33px 48px;\n}\n.run-card[data-v-7a99f634] {\r\n    width: 100% !important;\r\n\r\n    display: flex;\r\n    justify-content: center;\n}\n.imger[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.imger img[data-v-7a99f634] {\r\n    width: 32%;\n}\n.imger h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: \"Saol Display\";\r\n    font-size: 23px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.sharo-bhai[data-v-7a99f634] {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.slide-card p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\r\n    padding: 30px 30px 30px 0px;\n}\n@media screen and (max-width: 1600px){\n.member[data-v-7a99f634] {\r\n   \r\n    font-size: 23px;\n}\n.basic[data-v-7a99f634] {\r\n \r\n    font-size: 60px;\n}\n.newp[data-v-7a99f634] {\r\n    font-size: 20px !important;\r\n    font-weight: 400 !important;\n}\n.cards[data-v-7a99f634] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 315px;\r\n    flex-shrink: 0;\n}\n.contanir[data-v-7a99f634] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.roll-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    height: 200px;\r\n    flex-shrink: 1;\r\n    background-image: url(/images/bgimg.png);\r\n    border-radius: 20px 20px 0px 0px;\n}\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-right: 0px;\n}\n.list-id h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    font-size: 15px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n    margin: 0px;\n}\n.btn-ides span[data-v-7a99f634] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    justify-content: center;\n}\n.list-titel span h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel span svg[data-v-7a99f634] {\r\n    width: 35px;\r\n    height: 35px;\n}\n.pox-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-2 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    padding: 10px 0px;\r\n    font-size: 22px;\n}\n.pox-3 h2 span[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px 0px 0px 0px;\n}\n.mine-card[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 18px;\n}\n.Jobs-card[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 130px;\r\n    padding: 15px 12px 15px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 5px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 130px;\r\n    padding: 15px 35px 15px 15px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.main[data-v-7a99f634] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n}\n}\n@media screen and (max-width: 1440px){\n.tops[data-v-7a99f634]{\r\n        padding-top: 20px;\n}\n.member[data-v-7a99f634] {\r\n    font-size: 20px;\n}\n.basic[data-v-7a99f634] {\r\n    font-size: 50px;\n}\n.newp[data-v-7a99f634] {\r\n        font-size: 18px !important;\r\n    font-weight: 400 !important;\r\n    color: #293857 !important;\n}\n.pox-1 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 10px;\n}\n.cards[data-v-7a99f634] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 280px;\r\n    flex-shrink: 0;\n}\n.btn-ides h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.contanir[data-v-7a99f634] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.roll-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 0px 25px;\n}\n.list-titel span h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel[data-v-7a99f634] {\r\n    width: 50%;\n}\n.list-id span svg[data-v-7a99f634] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.list-btn[data-v-7a99f634] {\r\n    width: 34%;\n}\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 11px;\n}\n.btn-ides[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 45px;\r\n    justify-content: flex-end;\r\n    gap: 4px;\n}\n.btn-ides span svg[data-v-7a99f634] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.list-1 img[data-v-7a99f634] {\r\n    width: 11%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -80px;\r\n\r\n  \r\n    margin-top: -80px;\r\n    border-radius: 50%;\r\n    max-height: 149px;\r\n    min-height: 149px;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\n}\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-right: 20px;\n}\n.list-id h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    font-size: 15px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n    margin: 0px;\r\n    font-size: 13px;\n}\n.buttons[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding-top: 0px;\n}\n.buttons button[data-v-7a99f634] {\r\n    display: flex;\r\n    width: 130px;\r\n    height: 35px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.pox-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button svg[data-v-7a99f634] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-7a99f634] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\n}\n.pox-2 p[data-v-7a99f634] {\r\n    color: #293857;\r\n    font-family: sans-serif;\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 15px;\n}\n.pox-2 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 10px;\r\n    padding: 15px 0px;\r\n    font-size: 18px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3 h2 span[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.carder[data-v-7a99f634] {\r\n    width: 470px;\r\n    height: 160px;\r\n    flex-shrink: 0;\r\n    background: #293857;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 25px;\n}\ndiv#carouselExampleControls[data-v-7a99f634] {\r\n    width: 100%;\n}\n.yes svg[data-v-7a99f634] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.Jobs-card[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 115px;\r\n    padding: 8px 12px 8px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-card h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 115px;\r\n    padding: 8px 30px 8px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-cards h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.slide-card[data-v-7a99f634] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #FFF;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 100%;\r\n    height: 184px;\r\n    flex-shrink: 0;\r\n    padding: 34px 30px 33px 30px;\n}\n.imger h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.imger img[data-v-7a99f634] {\r\n    width: 34%;\n}\n.slide-card p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\r\n    padding: 20px 30px 20px 0px;\n}\r\n/* .slide-card {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #FFF;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 100%;\r\n    height: 145px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\r\n} */\n.salider-card[data-v-7a99f634] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-left: 2px solid #F96;\r\n    width: 28%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\n}\n}\n@media screen and (max-width: 1366px){\n.upgardebutton[data-v-7a99f634] {\r\n  \r\n    width: 160px;\r\n    height: 40px;\r\n    padding: 9px 7px;\r\n    font-size: 14px;\n}\n.carder[data-v-7a99f634]{\r\n        width: 460px;\r\n    height: 150px;\r\n    flex-shrink: 0;\r\n    background: #293857;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 25px;\n}\n.godashboard[data-v-7a99f634]{\r\n    font-size: 14px;\n}\n.btn-ides[data-v-7a99f634] {\r\n\r\n    gap: 20px;\n}\n.basic[data-v-7a99f634] {\r\n    font-size: 45px;\n}\n.ptag[data-v-7a99f634] {\r\n  \r\n    font-size: 15px !important;\n}\n.since[data-v-7a99f634] {\r\n   \r\n    font-size: 13px;\n}\n.member[data-v-7a99f634] {\r\n    font-size: 17px;\n}\n.newp[data-v-7a99f634] {\r\n    font-size: 16px !important;\r\n    font-weight: 400 !important;\r\n    color: #293857 !important;\n}\n}\n@media screen and (max-width: 1024px){\n.buttons[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding-top: 0px;\n}\n.btn-ides[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 20px;\r\n    justify-content: flex-end;\r\n    gap: 4px;\n}\n.list-btn[data-v-7a99f634] {\r\n    width: 38%;\r\n    padding-top: 20px;\n}\n.btn-ides h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n    overflow: hidden; /* Hide overflowed text */\r\n    text-overflow: ellipsis;\n}\n.list-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 25px 0px 15px 0px;\r\n    border-bottom: 2px solid #f96;\n}\n.list-titel span h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel[data-v-7a99f634] {\r\n    width: 62%;\n}\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 0px;\n}\n.pox-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 10px;\n}\n.top-btn button span[data-v-7a99f634] {\r\n    font-size: 12px;\n}\n.pox-2 p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 10px;\r\n    padding: 10px 0px;\r\n    font-size: 15px;\r\n    margin: 0px;\n}\n.yes[data-v-7a99f634] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-3 h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-2 p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.page-1[data-v-7a99f634] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 0px 15px;\n}\n.roll-2[data-v-7a99f634] {\r\n    width: 100%;\r\n    padding: 0px 20px;\n}\n.Jobs-card[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 8px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-card h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 8px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-cards h2[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.icon-box svg[data-v-7a99f634] {\r\n    width: 15px;\r\n    height: 15px;\n}\n}\n@media screen and (max-width: 768px){\n.list-titel p[data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 80px;\n}\n.salider-card[data-v-7a99f634]{\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border: 2px solid #F96;\r\n    width: 68%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\r\n    align-content: center;\r\n    border-radius: 15px;\n}\n.more-card[data-v-7a99f634]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.list-2[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    padding: 20px 0px;\n}\n.mine-card[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 18px;\n}\n.Jobs-cards[data-v-fdc95946][data-v-7a99f634] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 30px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.run-card h2[data-v-fdc95946][data-v-7a99f634] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    padding: 20px 0px 10px 0px;\n}\n}\n@media screen and (max-width: 425px){\n.more-card[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 20px;\n}\n.list-titel[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    padding-top: 18px;\n}\n.list-btn[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    padding-top: 20px;\n}\n.list-1 img[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 30%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -85px;\r\n   \r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -80px;\r\n    border-radius: 50%;\r\n    max-height: 115px;\r\n    min-height: 115px;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\n}\n.list-1[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 25px 0px 15px 0px;\r\n    border-bottom: 2px solid #f96;\r\n    flex-direction: column;\n}\n.list-id[data-v-fdc95946][data-v-7a99f634] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 0px 0px 5px 0px;\n}\n.cards[data-v-fdc95946][data-v-7a99f634] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 65%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.salider-card[data-v-fdc95946][data-v-7a99f634] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border: 2px solid #F96;\r\n    width: 98%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\r\n    align-content: center;\r\n    border-radius: 15px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_style_index_0_id_7a99f634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_style_index_0_id_7a99f634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_style_index_0_id_7a99f634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/profilescreen.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/profilescreen.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profilescreen.vue?vue&type=template&id=7a99f634&scoped=true& */ "./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true&");
/* harmony import */ var _profilescreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilescreen.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js&");
/* harmony import */ var _profilescreen_vue_vue_type_style_index_0_id_7a99f634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& */ "./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _profilescreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a99f634",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/profilescreen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profilescreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_style_index_0_id_7a99f634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=style&index=0&id=7a99f634&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profilescreen_vue_vue_type_template_id_7a99f634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profilescreen.vue?vue&type=template&id=7a99f634&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/profilescreen.vue?vue&type=template&id=7a99f634&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c("hr", {
      staticStyle: {
        width: "85%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        margin: "auto",
        "background-color": "#DED4A2"
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "page-1" }, [
      _c("div", { staticClass: "contanir" }, [
        _c("div", { staticClass: "main" }, [
          _c("div", { staticClass: "roll-1" }),
          _vm._v(" "),
          _c("div", { staticClass: "roll-2" }, [
            _c("div", { staticClass: "list-1" }, [
              _c("img", {
                attrs: { src: "/profile/" + _vm.user.profile, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "list-titel" }, [
                _c("span", [
                  _c("h2", [
                    _vm._v(
                      _vm._s(_vm.user.username ? _vm.user.username : "Profile")
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "list-id" }, [
                  _c("h2", [
                    _vm._v(_vm._s(_vm.user.email ? _vm.user.email : ""))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list-btn" }, [
                _c("div", { staticClass: "buttons" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M7 9H5C3.93913 9 2.92172 9.42143 2.17157 10.1716C1.42143 10.9217 1 11.9391 1 13V31C1 32.0609 1.42143 33.0783 2.17157 33.8284C2.92172 34.5786 3.93913 35 5 35H23C24.0609 35 25.0783 34.5786 25.8284 33.8284C26.5786 33.0783 27 32.0609 27 31V29",
                          stroke: "#DED4A2",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M25 5.00021L31 11.0002M33.77 8.17021C34.5577 7.38252 35.0002 6.31418 35.0002 5.20021C35.0002 4.08625 34.5577 3.01791 33.77 2.23021C32.9823 1.44252 31.914 1 30.8 1C29.686 1 28.6177 1.44252 27.83 2.23021L11 19.0002V25.0002H17L33.77 8.17021Z",
                          stroke: "#DED4A2",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-ides" }, [
                  _c("span", [
                    _c("h2", [
                      _vm._v(
                        "Profile Type: " +
                          _vm._s(_vm.user.type ? _vm.user.type : "")
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 18 18",
                          fill: "none"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.3307 11.904 13.2256 11.887 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.37543 12.9304 5.06961 10.6246 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.69065 3.41806 5.49821 2.2128 5.5 1C5.5 0.45 5.05 0 4.5 0Z",
                            fill: "#DED4A2"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("h2", [
                      _vm._v(_vm._s(_vm.user.number ? _vm.user.number : ""))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            opacity: "0.3",
                            d: "M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z",
                            fill: "#DED4A2"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z",
                            fill: "#DED4A2"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("h2", [
                      _vm._v(_vm._s(_vm.user.email ? _vm.user.email : ""))
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list-2" }, [
              _c("div", { staticClass: "more-card" }, [
                _c("div", { staticClass: "cards" }, [
                  _c("div", { staticClass: "pox-1" }, [
                    _c("h2", [_vm._v("Profile Information")]),
                    _vm._v(" "),
                    _c("div", [
                      _c("button", { staticClass: "godashboard" }, [
                        _c("span", { staticClass: "pr-2" }, [
                          _vm._v(
                            "\n                            Go to dashboard\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "12",
                              height: "12",
                              viewBox: "0 0 12 12",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M1.76254 5.42269C2.30034 5.41318 2.78631 5.3856 3.26895 5.46881C3.31983 5.47737 3.37879 5.44932 3.43253 5.43315C3.69738 5.35326 3.96319 5.34233 4.2328 5.41128C4.46723 5.47119 4.70642 5.41983 4.9437 5.43743C5.30983 5.46453 5.67408 5.36563 6.03785 5.38417C6.33408 5.39939 6.63366 5.39463 6.928 5.44076C7.07731 5.46406 7.21852 5.47214 7.37116 5.43363C7.53711 5.39226 7.70164 5.49164 7.87378 5.49164C8.06304 5.49164 8.24943 5.53919 8.43108 5.5934C8.63459 5.65379 8.68594 5.83828 8.53759 5.98807C8.31124 6.21679 8.01549 6.31712 7.70926 6.36182C7.45581 6.39891 7.19713 6.4203 6.94178 6.43362C6.67169 6.44741 6.3997 6.54061 6.1258 6.45026C6.07873 6.43457 6.02025 6.43124 5.97269 6.44408C5.6541 6.53158 5.32268 6.47261 5.00171 6.53538C4.90281 6.55487 4.79438 6.54822 4.69357 6.53253C4.55377 6.51065 4.41968 6.51446 4.28654 6.5582C4.11631 6.61431 3.94704 6.54299 3.77632 6.54631C3.60371 6.54964 3.43253 6.55582 3.26895 6.59719C3.0117 6.66281 2.75588 6.6262 2.50528 6.59957C2.27894 6.5758 2.06068 6.59577 1.83767 6.60147C1.62702 6.60718 1.40686 6.62525 1.19954 6.58864C0.964165 6.54679 0.861929 6.33186 0.775862 6.13547C0.698829 5.95954 0.807247 5.82972 0.925648 5.70324C1.10015 5.51636 1.30129 5.4165 1.56045 5.4341C1.64509 5.4398 1.73116 5.42411 1.76397 5.42221L1.76254 5.42269Z",
                                fill: "#DED4A2"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M8.38513 9.81531C8.08651 9.81769 7.85731 9.55093 7.90724 9.24089C7.94005 9.03595 8.01518 8.84432 8.14833 8.67789C8.25056 8.54998 8.35422 8.42112 8.43839 8.28132C8.73177 7.79202 9.05322 7.32412 9.43838 6.90187C9.47214 6.86478 9.49972 6.81675 9.51637 6.7692C9.61575 6.48437 9.81499 6.26801 10.0095 6.04928C10.1279 5.91614 10.1383 5.81723 10.0033 5.69931C9.8245 5.54286 9.68469 5.36407 9.58531 5.14819C9.51494 4.99603 9.36658 4.90758 9.25816 4.78633C9.10743 4.61752 9.01043 4.41115 8.90439 4.21667C8.75745 3.94706 8.5449 3.73213 8.37229 3.48581C8.19825 3.2376 8.05227 2.97417 7.94671 2.68934C7.92294 2.62514 7.90629 2.55667 7.89964 2.48867C7.88775 2.36029 7.96573 2.2804 8.06607 2.21811C8.16069 2.15915 8.2458 2.18387 8.32949 2.24616C8.49497 2.36932 8.67043 2.47441 8.79882 2.64749C8.96287 2.86813 9.21299 3.01411 9.35517 3.25757C9.72987 3.47107 9.91008 3.85528 10.1659 4.17435C10.3162 4.3617 10.4997 4.52385 10.6761 4.68838C10.8183 4.82104 10.9343 4.96607 10.9857 5.15675C11.0156 5.26754 11.0822 5.35694 11.144 5.45157C11.2914 5.67743 11.2819 5.90758 11.1374 6.13297C10.9239 6.46583 10.747 6.82246 10.5049 7.13724C10.2539 7.46392 10.0875 7.85003 9.79501 8.14865C9.61717 8.33029 9.52302 8.56377 9.41318 8.78868C9.26149 9.09919 9.08222 9.39401 8.82782 9.63366C8.68755 9.76538 8.55917 9.81436 8.38656 9.81578L8.38513 9.81531Z",
                                fill: "#DED4A2"
                              }
                            })
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", {
                    staticStyle: {
                      width: "95%",
                      display: "flex",
                      "justify-content": "center",
                      "align-items": "center",
                      margin: "auto",
                      "background-color": "#293857"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "pox-2" }, [
                    _c("p", [_vm._v("Bio:")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ptag" }, [
                      _vm._v(
                        "\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo odio, pretium eget tincidunt a, sollicitudin a mi. Praesent odio dui, porttitor nec massa ut, dapibus volutpat enim. Vivamus id velit eros. Cras pellentesque elit posuere tempor lacinia. Vivamus viverra leo a metus vehicula, vitae laoreet justo pellentesque. \n                 "
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        width: "100%",
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center",
                        margin: "auto",
                        "background-color": "#293857"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col tops" }, [
                        _c(
                          "div",
                          {
                            staticClass: "pox-box",
                            staticStyle: { "padding-bottom": "3%" }
                          },
                          [
                            _c("div", { staticClass: "yes" }, [
                              _c("p", { staticClass: "newp" }, [
                                _vm._v(
                                  "First Name: " +
                                    _vm._s(
                                      _vm.user.first_name
                                        ? _vm.user.first_name
                                        : ""
                                    )
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pox-box",
                            staticStyle: { "padding-bottom": "3%" }
                          },
                          [
                            _c("div", { staticClass: "yes" }, [
                              _c("p", { staticClass: "newp" }, [
                                _vm._v(
                                  "Last: " +
                                    _vm._s(
                                      _vm.user.last_name
                                        ? _vm.user.last_name
                                        : ""
                                    )
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pox-box",
                            staticStyle: { "padding-bottom": "3%" }
                          },
                          [
                            _c("div", { staticClass: "yes" }, [
                              _c("p", { staticClass: "newp" }, [
                                _vm._v(
                                  "Email: " +
                                    _vm._s(_vm.user.email ? _vm.user.email : "")
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pox-box",
                            staticStyle: { "padding-bottom": "1%" }
                          },
                          [
                            _c("div", { staticClass: "yes" }, [
                              _c("p", { staticClass: "newp" }, [
                                _vm._v(
                                  "Phone: " +
                                    _vm._s(
                                      _vm.user.number ? _vm.user.number : ""
                                    )
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "salider-card" }, [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "run-card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "carousel slide",
                      attrs: {
                        id: "carouselExampleControls",
                        "data-ride": "carousel"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "carousel-inner",
                          staticStyle: {
                            display: "flex",
                            "flex-direction": "row"
                          }
                        },
                        [
                          _c("div", { staticClass: "carousel-item active" }, [
                            _c("div", { staticClass: "slide-card" }, [
                              _c("div", { staticClass: "imger" }, [
                                _c("img", {
                                  attrs: { src: "/images/alex.png", alt: "" }
                                }),
                                _vm._v(" "),
                                _c("h2", [_vm._v("Alex Smith")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "icon-box" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "36",
                                        height: "36",
                                        viewBox: "0 0 36 36",
                                        fill: "none"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z",
                                          fill: "#293857"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "row pt-4  sharo-bhai" },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-4" }, [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "46",
                                          height: "34",
                                          viewBox: "0 0 46 34",
                                          fill: "none"
                                        }
                                      },
                                      [
                                        _c("rect", {
                                          attrs: {
                                            width: "46",
                                            height: "34",
                                            fill: "#293857"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z",
                                            fill: "#DED4A2"
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "carousel-item " }, [
                            _c("div", { staticClass: "slide-card" }, [
                              _c("div", { staticClass: "imger" }, [
                                _c("img", {
                                  attrs: { src: "/images/alex.png", alt: "" }
                                }),
                                _vm._v(" "),
                                _c("h2", [_vm._v("Alex Smith")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "icon-box" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "36",
                                        height: "36",
                                        viewBox: "0 0 36 36",
                                        fill: "none"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z",
                                          fill: "#293857"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "row pt-4  sharo-bhai" },
                                [
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-4" }, [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "46",
                                          height: "34",
                                          viewBox: "0 0 46 34",
                                          fill: "none"
                                        }
                                      },
                                      [
                                        _c("rect", {
                                          attrs: {
                                            width: "46",
                                            height: "34",
                                            fill: "#293857"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z",
                                            fill: "#DED4A2"
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
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
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "carder " }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("span", { staticClass: "member" }, [
              _vm._v(
                "\n                                Membership Type:\n                            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col text-right" }, [
            _c("span", { staticClass: "since" }, [
              _vm._v(
                "\n                                Since:19 oct 2024\n                            "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("span", { staticClass: "basic" }, [
              _vm._v(
                "\n                                Basic\n                            "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col text-right",
              staticStyle: {
                display: "flex",
                "justify-content": "flex-end",
                "align-items": "center"
              }
            },
            [
              _c("button", { staticClass: "upgardebutton" }, [
                _vm._v(
                  "\n                                Upgrade Plan\n                            "
                )
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("span", { staticClass: "trust" }, [_vm._v("Preferred Location")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mine-card" }, [
      _c("img", { staticClass: "imgss", attrs: { src: "/images/map.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col pt-2" }, [
      _c("span", { staticClass: "trust" }, [_vm._v("Trusted Realtors")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("button", { staticClass: "contac" }, [
        _vm._v("\n    Contact Realtor\n")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("button", { staticClass: "contac" }, [
        _vm._v("\n    Contact Realtor\n")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);