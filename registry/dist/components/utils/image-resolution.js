!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/image-resolution"]=e():t["utils/image-resolution"]=e()}(self,(function(){return function(){var t,e,n={217:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".favInfo-box .collection-cover img,\n.favInfo-box .favInfo-cover img {\n  width: 100% !important;\n  -o-object-position: left !important;\n     object-position: left !important;\n}\n\n.bb-comment .sailing .sailing-img,\n.comment-bilibili-fold .sailing .sailing-img {\n  width: 288px;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},563:function(t,e,n){var o=n(217);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},391:function(t){"use strict";t.exports=coreApis.observer}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return u}});var t=coreApis.componentApis.define,e=coreApis.componentApis.styledComponent;const n=/@(\d+)[Ww]_(\d+)[Hh]/,o=["#certify-img1","#certify-img2"],a=(t,e)=>{const n=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT);let o=n.nextNode();for(;o;)e(o),o=n.nextNode()},s=async(t,e)=>{const{attributes:i}=await Promise.resolve().then(r.t.bind(r,391,23)),a=(r,i)=>{const a=r(e);if(null===a)return;if(o.some((t=>e.matches(t))))return;const s=a.match(n);if(!s)return;const[,c,u]=s,f=parseInt(e.getAttribute("data-resolution-width")||"0");if(parseInt(c)>=f&&0!==f)return;null===e.getAttribute("width")&&null===e.getAttribute("height")&&(e.classList.contains("bili-avatar-img")?e.setAttribute("height",u):e.setAttribute("width",c));const l=Math.round(t*parseInt(c)).toString(),d=Math.round(t*parseInt(u)).toString();e.setAttribute("data-resolution-width",l),i(e,a.replace(n,`@${l}w_${d}h`))};i(e,(()=>{a((t=>t.getAttribute("src")),((t,e)=>t.setAttribute("src",e))),a((t=>t.style.backgroundImage),((t,e)=>t.style.backgroundImage=e))}))},c=(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,563,23))),(async t=>{let{settings:e}=t;const{allMutations:n}=await Promise.resolve().then(r.t.bind(r,391,23)),o="auto"===e.options.scale?window.devicePixelRatio:parseFloat(e.options.scale);a(document.body,(t=>s(o,t))),n((t=>{t.forEach((t=>t.addedNodes.forEach((t=>{t instanceof HTMLElement&&(s(o,t),"IMG"!==t.nodeName.toUpperCase()&&a(t,(t=>s(o,t))))}))))}))})),u=(0,t.defineComponentMetadata)({name:"imageResolution",displayName:"高分辨率图片",tags:[componentsTags.utils],enabledByDefault:window.devicePixelRatio>1,entry:c,description:{"zh-CN":"根据屏幕 DPI 请求更高分辨率的图片, 例如 DPI 缩放 200% 则请求 2 倍的分辨率, 加载时间也会相应变长一些. (也会导致某些浏览器里出现图片闪动, 因为本质上是更换了图片源)"},options:{scale:{displayName:"缩放级别",defaultValue:"auto",hidden:!0}},commitHash:"96e850560dc42914a10adebca7d81d755e51dfb0",coreVersion:"2.4.1"})}(),i=i.component}()}));