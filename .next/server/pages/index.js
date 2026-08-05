"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,952];
exports.modules = {

/***/ 3486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home7__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9961);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home7__WEBPACK_IMPORTED_MODULE_1__]);
_home7__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// import Demos from "./demos";


function Home({ contentPage  }) {
    // Asegurar que siempre hay una estructura válida
    const safeContentPage = contentPage || {
        data: {
            slider: [],
            services: [],
            featured_projects: [],
            projects: []
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home7__WEBPACK_IMPORTED_MODULE_1__["default"], {
        content: safeContentPage
    }));
};
async function getStaticProps() {
    try {
        // Usar la función helper para hacer el request al API
        const contentPage = await (0,_config_api__WEBPACK_IMPORTED_MODULE_2__/* .apiRequest */ .N)(_config_api__WEBPACK_IMPORTED_MODULE_2__/* .API_CONFIG.endpoints.mainPage */ .H.endpoints.mainPage);
        // By returning { props: { contentPage } }, the Home component
        // will receive `contentPage` as a prop at build time
        return {
            props: {
                contentPage
            },
            // Opcional: revalidar cada 60 segundos (ISR - Incremental Static Regeneration)
            revalidate: 60
        };
    } catch (error) {
        console.error('Error fetching content:', error);
        // En caso de error, retornar estructura por defecto
        return {
            props: {
                contentPage: {
                    data: {
                        slider: [],
                        services: [],
                        featured_projects: [],
                        projects: []
                    }
                }
            },
            // Reintentar más frecuentemente en caso de error
            revalidate: 10
        };
    }
}

});

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8248:
/***/ ((module) => {

module.exports = import("date-fns");;

/***/ }),

/***/ 4711:
/***/ ((module) => {

module.exports = import("date-fns/locale");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [989,664,613,843,63,46,220,427,106,961], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();