(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{296:function(t,e,n){"use strict";var r=n(0),o=n.n(r);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,r,c=y(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).state={elementStyles:[]},window.stylesModule=m(e),window.stylesModuleResolve(m(e)),e}return e=a,(n=[{key:"addElementStyles",value:function(t,e){if(e){var n=!1,r=l(this.state.elementStyles);r.forEach((function(r){r.elementId===t&&(n=!0,r.styles=e)})),n||r.push({elementId:t,styles:e}),this.setState(i(i({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return o.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}])&&s(e.prototype,n),r&&s(e,r),a}(r.Component);e.a=v},299:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=function(t){t.styles;var e=a(t,["styles"]);return o.a.createElement("svg",c({width:"29",height:"29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.a.createElement("path",{d:"M26.411 14.842h.25V13.16h-11.82V1.34h-1.68v11.82H1.34v1.682h11.82v11.82h1.68v-11.82h11.57z",fill:"#fff",stroke:"#fff",strokeWidth:".5"}))};function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=function(t){t.styles;var e=l(t,["styles"]);return o.a.createElement("svg",u({width:"27",height:"23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.a.createElement("path",{d:"M21.74 20.953c-.116.43-.54.755-1.022.755H2.068a1.06 1.06 0 01-1.066-1.056v.23H.774m20.965.07l.235.087.004-.01m-.239-.076l.242.064a.482.482 0 01-.003.012m-.239-.076L1 20.633l-.247-.002v.002c-.001.084.006.168.021.25m21.204.146c-.15.54-.674.93-1.26.93H2.068a1.31 1.31 0 01-1.046-.518h0a1.305 1.305 0 01-.248-.558m21.204.146l4.257-11.673.015-.041v-.118c0-.815-.514-1.489-1.296-1.489H23.75V5.347a1.39 1.39 0 00-1.388-1.389H12.177l-2.009-2.812-.075-.104H2.138A1.39 1.39 0 00.75 2.43v18.453h.024M11.49 5.292l-.075-.105-2.008-2.812H2.138a.055.055 0 00-.055.055v14.287l2.963-8.08c.13-.471.548-.828 1.04-.91 0 0 0 0 0 0l.041.246c.058-.01.118-.015.178-.015l5.185-2.666zm0 0h10.871c.03 0 .055.024.055.055v2.361L11.49 5.292zm9.22 15.324l-.003.009H2.092l4.22-11.574.003-.01h18.578a.402.402 0 01.015.063L20.71 20.616z",fill:"#fff",stroke:"#fff",strokeWidth:".5"}))},s=n(4),p=n(9);n(22);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(a,t);var e,n,r,c=v(a);function a(){return b(this,a),c.apply(this,arguments)}return e=a,(n=[{key:"onDragOver",value:function(t){return t.preventDefault(),t.stopPropagation(),!1}},{key:"onDragEnter",value:function(t){return t.preventDefault(),t.stopPropagation(),!1}},{key:"onDrop",value:function(t){var e=t.dataTransfer.getData("text/plain");return t.preventDefault(),t.stopPropagation(),Object(s.b)().modules.templateDataStorage.addWidgetInSection(e),!1}},{key:"render",value:function(){return o.a.createElement("div",{className:"new-section",onDragOver:this.onDragOver,onDragEnter:this.onDragEnter,onDrop:this.onDrop,"data-element-type":"new-section"},o.a.createElement("div",{className:"new-section-buttons d-flex"},o.a.createElement("button",{draggable:"true",className:"new-section__button new-section__button_add d-flex "},o.a.createElement(i,null)),o.a.createElement("button",{className:"new-section__button new-section__button_library d-flex"},o.a.createElement(f,null))),o.a.createElement("div",{className:"new-section__text"},"Drag widget here"))}}])&&m(e.prototype,n),r&&m(e,r),a}(r.Component),g=n(2),j=n(43),E=n(296);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?R(t):e}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,t);var e,n,r,c=D(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).state={},e.editorWindow=o.a.createRef(),p.a.subscribe(e.currentElementListener.bind(R(e))),window.altrpEditorContent=R(e),e}return e=a,(n=[{key:"currentElementListener",value:function(t){var e=p.a.getState().currentElement.currentElement;e instanceof j.a&&e!==this.state.rootElement&&this.setState({rootElement:e})}},{key:"componentDidMount",value:function(){var t=Object(s.b)().modules.templateDataStorage.getRootElement();this.setState({rootElement:t})}},{key:"render",value:function(){return o.a.createElement(g.a,{store:p.a},o.a.createElement("div",{className:"editor-content d-flex flex-column justify-center align-content-center",ref:this.editorWindow},this.state.rootElement?o.a.createElement(this.state.rootElement.componentClass,{children:this.state.rootElement.children,element:this.state.rootElement}):"",o.a.createElement(w,null)),o.a.createElement(E.a,null))}}])&&P(e.prototype,n),r&&P(e,r),a}(r.Component);e.default=I}}]);
//# sourceMappingURL=2.editor.js.map