!function(n,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["live/side-bar"]=r():n["live/side-bar"]=r()}(self,(function(){return function(){var n,r,e={890:function(n,r,e){var t=e(645)((function(n){return n[1]}));t.push([n.id,'.side-bar-cntr {\n  transition: 0.24s ease-out !important;\n  overflow: visible !important;\n  transform: translateZ(0) translateX(100%) !important;\n}\n.side-bar-cntr:hover {\n  transform: translateZ(0) !important;\n}\n.side-bar-cntr::after {\n  right: calc(100% + 4px);\n  transform: translateY(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  border: 4px solid #aaa;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\nbody.dark .side-bar-cntr::after {\n  border: 4px solid #eee;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.side-bar-cntr::before {\n  right: calc(100% - 8px);\n  transform: translateY(-50%);\n  width: 32px;\n  height: 48px;\n  border-radius: 8px 0 0 8px;\n  background-color: #fff;\n  border: 1px solid #e9eaec;\n}\nbody.dark .side-bar-cntr::before {\n  background-color: #222;\n  border-color: transparent;\n}\n.side-bar-cntr::before, .side-bar-cntr::after {\n  content: "";\n  transition: 0.24s ease-out;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n}\n.side-bar-cntr:hover::after, .side-bar-cntr:hover::before {\n  opacity: 0;\n}',""]),n.exports=t},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
r.i=function(n,e,t){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},984:function(n,r,e){var t=e(890);t&&t.__esModule&&(t=t.default),n.exports="string"==typeof t?t:t.toString()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}r=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var i=Object.create(null);o.r(i);var a={};n=n||[null,r({}),r([]),r(r)];for(var c=2&t&&e;"object"==typeof c&&!~n.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(n){a[n]=function(){return e[n]}}));return a.default=function(){return e},o.d(i,a),i},o.d=function(n,r){for(var e in r)o.o(r,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return e}});var n=coreApis.componentApis.define,r=coreApis.utils.urls;const e=(0,n.defineComponentMetadata)({name:"collapseLiveSideBar",entry:none,instantStyles:[{name:"collapseLiveSideBar",style:()=>Promise.resolve().then(o.t.bind(o,984,23))}],displayName:"自动收起直播侧栏",description:'自动收起直播间右边偏下的侧栏. (上面有个 "关注" 的面板)',tags:[componentsTags.live,componentsTags.style],urlInclude:r.liveUrls,commitHash:"96e850560dc42914a10adebca7d81d755e51dfb0",coreVersion:"2.4.1"})}(),i=i.component}()}));