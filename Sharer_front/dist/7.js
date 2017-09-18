<<<<<<< HEAD
webpackJsonp([7],{107:function(t,e,r){var n=r(108);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(2)("fd71c74a",n,!0)},108:function(t,e,r){e=t.exports=r(1)(void 0),e.push([t.i,"",""])},109:function(t,e,r){"use strict";var n=r(110);r.n(n);e.a={name:"aboutus"}},110:function(t,e,r){var n=r(111);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(16)(n,o);n.locals&&(t.exports=n.locals)},111:function(t,e,r){e=t.exports=r(1)(void 0),e.push([t.i,".aboutus{width:100%;height:40rem;background-color:#242424}.aboutus-div{margin:0 auto;width:10rem;height:20rem;text-align:center;padding-top:3rem}.aboutus-div span{color:#fff;font-size:5rem}",""])},112:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aboutus"},[r("div",{staticClass:"aboutus-div"},[r("span",[t._v("书二")])])])}],i={render:n,staticRenderFns:o};e.a=i},16:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=v[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i],e))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(f(n.parts[i],e));v[n.id]={id:n.id,refs:1,parts:s}}}}function o(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],u=i[2],c=i[3],f={css:a,media:u,sourceMap:c};n[s]?n[s].parts.push(f):r.push(n[s]={id:s,parts:[f]})}return r}function i(t,e){var r=b(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),i(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),i(t,e),e}function c(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function f(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=y++;r=m||(m=a(e)),n=l.bind(null,r,c,!1),o=l.bind(null,r,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=p.bind(null,r,e),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=d.bind(null,r),o=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function l(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=w(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var v={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),m=null,y=0,g=[],w=r(17);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(t,e);return n(r,e),function(t){for(var i=[],s=0;s<r.length;s++){var a=r[s],u=v[a.id];u.refs--,i.push(u)}if(t){n(o(t,e),e)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete v[u.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},17:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},31:function(t,e,r){"use strict";function n(t){r(107)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(109),i=r(112),s=r(3),a=n,u=s(o.a,i.a,a,null,null);e.default=u.exports}});
=======
webpackJsonp([7],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b3508f96_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__ = __webpack_require__(66);
function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b3508f96"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b3508f96_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d5af896", content, true);

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /var/www/sharer_backend/Sharer_front/node_modules/node-sass/vendor/linux-x64-46/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 4.x\n\nFound bindings for the following environments:\n  - Linux 64-bit with Node.js 6.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/var/www/sharer_backend/Sharer_front/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/var/www/sharer_backend/Sharer_front/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:410:26)\n    at Object.Module._extensions..js (module.js:417:10)\n    at Module.load (module.js:344:32)\n    at Function.Module._load (module.js:301:12)\n    at Module.require (module.js:354:17)\n    at require (internal/module.js:12:17)\n    at Object.<anonymous> (/var/www/sharer_backend/Sharer_front/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:410:26)\n    at Object.Module._extensions..js (module.js:417:10)\n    at Module.load (module.js:344:32)\n    at Function.Module._load (module.js:301:12)\n    at Module.require (module.js:354:17)\n    at require (internal/module.js:12:17)\n    at loadLoader (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/var/www/sharer_backend/Sharer_front/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/var/www/sharer_backend/Sharer_front/node_modules/webpack/lib/NormalModule.js:181:3)\n    at NormalModule.build (/var/www/sharer_backend/Sharer_front/node_modules/webpack/lib/NormalModule.js:274:15)\n    at Compilation.buildModule (/var/www/sharer_backend/Sharer_front/node_modules/webpack/lib/Compilation.js:149:10)\n    at factoryCallback (/var/www/sharer_backend/Sharer_front/node_modules/webpack/lib/Compilation.js:337:12)");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'todo',
	components: {},
	directives: {},
	data() {
		return {};
	},
	methods: {}
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_vm._v("page todo")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/vuex"
    }
  }, [_vm._v("下一页")])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
>>>>>>> f8b2d511e5c5468a131ca324df3f64e89dd6816b
