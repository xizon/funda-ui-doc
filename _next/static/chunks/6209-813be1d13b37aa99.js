(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6209],{6209:function(t,e,r){var n;n=t=>(()=>{var e={188:function(t,e,r){var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),i=function(){return function(){"use strict";var t={};t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t||""===t?void 0===r?t:r:e}function i(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e){for(var i=[],a=0;a<e.length;a++){var u=e[a];if(u){var l=n(u);if("string"===l||"number"===l)i.push(u);else if("object"===l){var c=Array.isArray(u)?u:Object.entries(u).map(function(t){var e=function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{for(i=(r=r.call(t)).next;!(l=(n=i.call(r)).done)&&(u.push(n.value),2!==u.length);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,2)||function(t,e){if(t){if("string"==typeof t)return r(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=e[0];return e[1]?n:null});i=c.length?i.concat(c.filter(function(t){return!!t})):i}}}return i.join(" ").trim()}}return t.r(e),t.d(e,{clsWrite:function(){return o},combinedCls:function(){return i}}),e}()},"object"===a(e)&&"object"===a(t)?t.exports=i():(n=[],void 0===(o=i.apply(e,n))||(t.exports=o))},954:function(t,e,r){var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),i=function(){return function(){"use strict";var t={};t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};function r(t){var e=window.getComputedStyle(t),r=parseFloat(e.fontSize),n=parseFloat(e.lineHeight)||r;return parseFloat(e.paddingTop)+(n-r)/2-2*parseFloat(e.borderWidth)}function n(t,e){var r,n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(null===t)return 0;var i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,a=i.display,u=i.position,l=i.visibility,c=0,f=0;return(o&&!0===o.includeMargin&&(c=parseFloat(i.marginLeft)+parseFloat(i.marginRight),f=parseFloat(i.marginTop)+parseFloat(i.marginBottom)),"fontSize"===e&&(n=parseFloat(i.fontSize)),"fontFamily"===e&&(n=i.fontFamily),"letterSpacing"===e&&(n=i.letterSpacing),"width"===e&&(r=parseFloat(i.maxWidth),"none"!==a&&0!==r))?t.clientWidth:"height"===e&&(r=parseFloat(i.maxHeight),"none"!==a&&0!==r)?t.clientHeight:"outerWidth"===e&&(r=parseFloat(i.maxWidth),"none"!==a&&0!==r)?t.offsetWidth+c:"outerHeight"===e&&(r=parseFloat(i.maxHeight),"none"!==a&&0!==r)?t.offsetHeight+f:(t.style.position="absolute",t.style.visibility="hidden",t.style.display="block","width"===e&&(n=t.clientWidth),"height"===e&&(n=t.clientHeight),"outerWidth"===e&&(n=t.offsetWidth+c),"outerHeight"===e&&(n=t.offsetHeight+f),t.style.display=a,t.style.position=u,t.style.visibility=l,n)}function o(t,e,r){var n,o=null===(n=document.defaultView)||void 0===n?void 0:n.getComputedStyle(t,null).getPropertyValue(e);return r?isNaN(parseFloat(o))?0:parseFloat(o):o}function i(t,e,r){if(null===t||null===e||null===r)return 0;var i=t.selectionStart;if(e&&r){var a=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];e.style.setProperty("white-space","pre-wrap"),e.style.setProperty("padding","0"),e.style.setProperty("margin","0"),e.style.setProperty("display","none");for(var u=0;u<a.length;u++){var l=o(r,a[u],!1);e.style.setProperty(a[u],l)}return e.textContent=t.value.substring(0,i).replace(/\s/g,"\xa0"),n(e,"outerWidth")}}return t.r(e),t.d(e,{actualPropertyValue:function(){return n},getElCSS:function(){return o},getTextTop:function(){return r},getTextWidth:function(){return i}}),e}()},"object"===a(e)&&"object"===a(t)?t.exports=i():(n=[],void 0===(o=i.apply(e,n))||(t.exports=o))},372:function(t,e,r){var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),i=function(t){return function(){"use strict";var e={787:function(e){e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return function(){n.r(o),n.d(o,{default:function(){return i}});var t=n(787);function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var i=function(r){var n=r.el,o=r.value,i=r.cb,a=e((0,t.useState)(0),2),u=a[0],l=a[1],c=e((0,t.useState)(!1),2),f=c[0],s=c[1];(0,t.useEffect)(function(){if(n){var t=n.currentStyle||window.getComputedStyle(n),e=n.scrollWidth+parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth);n.scrollHeight>0&&!f&&(l(n.scrollHeight+parseInt(t.borderTopWidth)+parseInt(t.borderBottomWidth)),s(!0)),u>0&&(n.style.height=u+"px");var r=n.scrollHeight;r>u&&u>0&&(n.style.height=r+"px"),null==i||i([e,r])}},[n,o])}}(),o}()},"object"===a(e)&&"object"===a(t)?t.exports=i(r(787)):(n=[r(787)],void 0===(o=i.apply(e,n))||(t.exports=o))},85:function(t,e,r){var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),i=function(t){return function(){"use strict";var e,r,n={787:function(e){e.exports=t}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return i.r(a),i.d(a,{default:function(){return r}}),e=i(787),r=function(){return"ID-".concat((0,e.useId)().replace(/\:/g,"-"))},a}()},"object"===a(e)&&"object"===a(t)?t.exports=i(r(787)):(n=[r(787)],void 0===(o=i.apply(e,n))||(t.exports=o))},702:function(t,e,r){var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),i=function(t){return function(){"use strict";var e,r,n={787:function(e){e.exports=t}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return i.r(a),i.d(a,{default:function(){return r}}),e=i(787),r=function(t,r,n){var o=(0,e.useRef)(null);return(0,e.useCallback)(function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];clearTimeout(o.current),o.current=null,o.current=setTimeout(function(){t.apply(void 0,n)},r)},n)},a}()},"object"===a(e)&&"object"===a(t)?t.exports=i(r(787)):(n=[r(787)],void 0===(o=i.apply(e,n))||(t.exports=o))},787:e=>{"use strict";e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>S});var t=n(787),e=n.n(t),r=n(85),i=n.n(r),a=n(372),u=n.n(a),l=n(188),c=n(954),f=n(702),s=n.n(f),p=["contentRef","wrapperClassName","controlClassName","controlExClassName","controlGroupWrapperClassName","controlGroupTextClassName","cols","rows","disabled","required","placeholder","autoSize","iconLeft","iconRight","aiPredict","aiPredictRemainingTextRGB","aiPredictConfirmKey","aiPredictFetchFuncAsync","aiPredictFetchFuncMethod","aiPredictFetchFuncMethodParams","aiPredictFetchCallback","readOnly","defaultValue","value","requiredLabel","label","name","id","minLength","maxLength","style","tabIndex","onChangeCallback","onInputCallback","onKeyPressedCallback","onChange","onBlur","onFocus","onPressEnter","onKeyDown","onKeyUp","onResize"];function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var i,a,u=Object.create((e&&e.prototype instanceof p?e:p).prototype);return n(u,"_invoke",{value:(i=new P(o||[]),a="suspendedStart",function(e,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===e)throw n;return F()}for(i.method=e,i.arg=n;;){var o=i.delegate;if(o){var u=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+n+"' method")),s;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,s;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,s)}(o,i);if(u){if(u===s)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var l=f(t,r,i);if("normal"===l.type){if(a=i.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(a="completed",i.method="throw",i.arg=l.arg)}})}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function p(){}function h(){}function m(){}var v={};l(v,i,function(){return this});var b=Object.getPrototypeOf,g=b&&b(b(E([])));g&&g!==e&&r.call(g,i)&&(v=g);var S=m.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e(function(o,a){!function n(o,i,a,u){var l=f(t[o],t,i);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==d(s)&&r.call(s,"__await")?e.resolve(s.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):e.resolve(s).then(function(t){c.value=t,a(c)},function(t){return n("throw",t,a,u)})}u(l.arg)}(n,i,o,a)})}return o=o?o.then(a,a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:void 0,done:!0}}return h.prototype=m,n(S,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:h,configurable:!0}),h.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(S),l(S,u,"Generator"),l(S,i,function(){return this}),l(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){return(h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function m(t,e,r,n,o,i,a){try{var u=t[i](a),l=u.value}catch(t){r(t);return}u.done?e(l):Promise.resolve(l).then(n,o)}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||b(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}let S=(0,t.forwardRef)(function(r,n){var o=r.contentRef,a=r.wrapperClassName,f=r.controlClassName,S=r.controlExClassName,x=r.controlGroupWrapperClassName,w=r.controlGroupTextClassName,j=r.cols,O=r.rows,P=r.disabled,E=r.required,F=r.placeholder,L=r.autoSize,T=r.iconLeft,C=r.iconRight,_=r.aiPredict,A=void 0!==_&&_,N=r.aiPredictRemainingTextRGB,I=void 0===N?[153,153,153]:N,k=r.aiPredictConfirmKey,M=void 0===k?[["Enter"],["Tab"],["Shift"," "]]:k,W=r.aiPredictFetchFuncAsync,R=r.aiPredictFetchFuncMethod,z=r.aiPredictFetchFuncMethodParams,G=r.aiPredictFetchCallback,H=r.readOnly,K=r.defaultValue,V=r.value,U=r.requiredLabel,B=r.label,D=r.name,$=r.id,q=r.minLength,Y=r.maxLength,Q=r.style,J=r.tabIndex,X=r.onChangeCallback,Z=r.onInputCallback,tt=r.onKeyPressedCallback,te=r.onChange,tr=r.onBlur,tn=r.onFocus,to=r.onPressEnter,ti=r.onKeyDown,ta=r.onKeyUp,tu=r.onResize,tl=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(r,p),tc=i()(),tf=$||tc,ts=(0,t.useRef)(null),tp=(0,t.useRef)(null),ty=v((0,t.useState)(V||""),2),td=ty[0],th=ty[1],tm=v((0,t.useState)(""),2),tv=tm[0],tb=tm[1],tg=v((0,t.useState)([]),2),tS=tg[0],tx=tg[1],tw=v((0,t.useState)(0),2),tj=tw[0],tO=tw[1],tP=(0,t.useRef)(null),tE=(0,t.useRef)({fontSize:16,fontFamily:"inherit",letterSpacing:"normal",textTop:10}),tF=v((0,t.useState)(!1),2),tL=(tF[0],tF[1]),tT=(0,t.useRef)(0),tC=v((0,t.useState)([]),2),t_=(tC[0],tC[1]),tA=s()(function(t,e){(function(t){return tN.apply(this,arguments)})((z||[]).map(function(t){return"$QUERY_STRING"!==t?t:e}).join(",")).then(function(t){tW(e,t)})},350,[]);function tN(){var t;return t=y().mark(function t(e){var r;return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:var n;if("object"!==d(W)){t.next=11;break}return t.next=3,W["".concat(R)].apply(W,function(t){if(Array.isArray(t))return g(t)}(n=e.split(","))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||b(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());case 3:return r=t.sent.data,"function"==typeof G&&(r=G(r)),Array.isArray(r)||(console.warn("The data structure does not match, please refer to the example in the component documentation."),tL(!0),r=[]),t_(r),t.abrupt("return",r);case 11:return t.abrupt("return",[]);case 12:case"end":return t.stop()}},t)}),(tN=function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,u,"next",t)}function u(t){m(i,n,o,a,u,"throw",t)}a(void 0)})}).apply(this,arguments)}var tI=function(t){if(tp.current){var e=document.createElement("canvas").getContext("2d");return e.font="".concat(tE.current.fontSize,"px ").concat(tE.current.fontFamily),e.measureText(t).width}return 0},tk=function(t){if(!td||!t)return"";var e=td[td.length-1],r=t.toLowerCase().lastIndexOf(e.toLowerCase());return t.slice(r+1)},tM=function(t,e){if(!t)return"";var r=RegExp(t.split("").map(function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(".*"),"i"),n=e.filter(function(t){return r.test(t)});return tx(n),n},tW=function(t,e){tO(tI(t)),tb(tM(t,e)[0]||"")},tR=function(t){t.preventDefault();var e=tk(tv);e&&(tH(t,td+e),tb(""))},tz=tk(tv);(0,t.useImperativeHandle)(o,function(){return{control:function(){return tp.current},clear:function(t){th(""),null==t||t()},set:function(t,e){th("".concat(t)),null==e||e()},aiPredictReset:function(){setTimeout(function(){tb("")},0)}}},[o]),u()({el:L?tp.current:null,value:L?td:"",cb:function(t){null==tu||tu(tp.current,t)}});var tG=function(t){return null!=t&&""!==t};function tH(t,e){if(th(e),""===e){var r;null===(r=ts.current)||void 0===r||r.classList.remove("focus")}if(null==te||te(t,tp.current,e),"function"==typeof Z){var n=Z(t,tp.current);n&&th(n)}}return(0,t.useEffect)(function(){void 0!==V&&("string"==typeof V&&V.length>0&&L?(th(""),setTimeout(function(){th("".concat(V))},0)):th("".concat(V)))},[V]),(0,t.useEffect)(function(){void 0!==K&&("string"==typeof K&&K.length>0&&L?(th(""),setTimeout(function(){th("".concat(K))},0)):th("".concat(K))),A&&null!==tp.current&&(tE.current={fontSize:(0,c.actualPropertyValue)(tp.current,"fontSize"),fontFamily:(0,c.actualPropertyValue)(tp.current,"fontFamily"),letterSpacing:(0,c.actualPropertyValue)(tp.current,"letterSpacing"),textTop:(0,c.getTextTop)(tp.current)})},[]),e().createElement(e().Fragment,null,e().createElement("div",{className:(0,l.clsWrite)(a,"mb-3 position-relative"),ref:ts},B?e().createElement(e().Fragment,null,"string"==typeof B?e().createElement("label",{htmlFor:tf,className:"form-label",dangerouslySetInnerHTML:{__html:"".concat(B)}}):e().createElement("label",{htmlFor:tf,className:"form-label"},B)):null,e().createElement("div",{className:(0,l.combinedCls)("position-relative z-1",(0,l.clsWrite)(x,"input-group"),{"has-left-content":tG(T),"has-right-content":tG(C)})},tG(T)?e().createElement(e().Fragment,null,e().createElement("span",{className:(0,l.clsWrite)(w,"input-group-text")},T)):null,e().createElement("div",{className:"input-group-control-container flex-fill position-relative"},e().createElement("textarea",h({ref:function(t){tp.current=t,"function"==typeof n?n(t):n&&(n.current=t)},tabIndex:J||0,className:(0,l.combinedCls)((0,l.clsWrite)(f,"form-control"),S,{rounded:!tG(T)&&!tG(C),"rounded-start-0":tG(T),"rounded-end-0":tG(C)}),id:tf,name:D,placeholder:F||"",defaultValue:K,value:td,minLength:q||null,maxLength:Y||null,onFocus:function(t){var e;t.target,null===(e=ts.current)||void 0===e||e.classList.add("focus"),null==tn||tn(t,tp.current)},onBlur:function(t){var e;if(t.target,""===t.target.value&&(null===(e=ts.current)||void 0===e||e.classList.remove("focus")),null==tr||tr(t,tp.current),"function"==typeof X){var r=X(t,tp.current);r&&th(r)}},onChange:function(t){tH(t,t.target.value),A&&tA(t,t.target.value)},onKeyDown:function(t){if(null==ti||ti(t,tp.current),"function"==typeof tt){var e=tt(t,tp.current);e&&th(e)}"Enter"==t.code&&(null==to||to(t,tp.current)),A&&""!==tv&&(M.map(function(e){return{keys:e,action:function(){tR(t)}}}).forEach(function(e){e.keys.every(function(e){return"Shift"===e?t.shiftKey:"Control"===e?t.ctrlKey:"Alt"===e?t.altKey:"Meta"===e?t.metaKey:t.key===e})&&e.action()}),"ArrowUp"===t.code&&(tT.current=(tT.current-1+tS.length)%tS.length),"ArrowDown"===t.code&&(tT.current=(tT.current+1)%tS.length),tb(tS[tT.current]||""))},onKeyUp:function(t){null==ta||ta(t,tp.current)},disabled:P||null,required:E||null,readOnly:H||null,cols:j||20,rows:O||2,style:Q},tl)),A&&tz&&e().createElement("div",{ref:tP,className:"position-absolute z-1","data-ai":"predict",style:{left:"".concat(tE.current.fontSize+tj,"px"),top:tE.current.textTop+"px",color:"rgba(".concat(I[0],", ").concat(I[1],", ").concat(I[2],", ").concat(Math.max(.2,.5-.05*td.length),")"),pointerEvents:"none",fontSize:tE.current.fontSize+"px",fontFamily:tE.current.fontFamily,letterSpacing:tE.current.letterSpacing}},tz),E?e().createElement(e().Fragment,null,U||""===U?U:e().createElement("span",{className:"position-absolute end-0 top-0 my-2 mx-2"},e().createElement("span",{className:"text-danger"},"*"))):""),tG(C)?e().createElement(e().Fragment,null,e().createElement("span",{className:(0,l.clsWrite)(w,"input-group-text")},C)):null)))})})(),o})(),t.exports=n(r(7294))}}]);
//# sourceMappingURL=6209-813be1d13b37aa99.js.map