!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/copy-link"]=t():e["utils/comments/copy-link"]=t()}(self,(function(){return function(){"use strict";var e,t,n={206:function(e){e.exports=coreApis.componentApis.utils.commentApis}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return o}});var e=coreApis.componentApis.define,t=coreApis.utils,n=coreApis.utils.urls;const o=(0,e.defineComponentMetadata)({name:"copyCommentsLink",displayName:"复制评论链接",description:{"zh-CN":"开启后, 可在每条评论的菜单中选择复制链接."},entry:async()=>{const{forEachCommentItem:e,addMenuItem:o}=await Promise.resolve().then(r.t.bind(r,206,23));e({added:e=>{const r=e=>{e.forEach((e=>{o(e,{className:"copy-link",text:"复制链接",action:async()=>{const o=(e=>{if(document.URL.match(/\/\/t\.bilibili\.com\/(\d+)/))return"";if(n.feedsUrls.every((e=>!(0,t.matchUrlPattern)(e))))return"";let o=e;for(;null!==o&&o!==document.body;){if(o.hasAttribute("data-did"))return`https://t.bilibili.com/${o.getAttribute("data-did")}`;o=o.parentElement}return""})(e.element)||document.URL.replace(location.hash,"");await navigator.clipboard.writeText(`${o}#reply${e.id}`);const r=dq(e.element,".opera-list");r&&(r.style.display="none")}})}))};r([e,...e.replies]),e.onRepliesUpdate=e=>r(e)}})},tags:[componentsTags.utils],commitHash:"96e850560dc42914a10adebca7d81d755e51dfb0",coreVersion:"2.4.1"})}(),i=i.component}()}));