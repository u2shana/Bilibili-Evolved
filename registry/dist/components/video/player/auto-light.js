!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/auto-light"]=t():e["video/player/auto-light"]=t()}(self,(function(){return function(){"use strict";var e,t,n={642:function(e){e.exports=coreApis.componentApis.video.playerLight},605:function(e){e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return c}});var e=coreApis.componentApis.define,t=coreApis.componentApis.video.playerAgent,n=coreApis.observer,o=coreApis.utils.urls;let a;const c=(0,e.defineComponentMetadata)({name:"playerAutoLight",displayName:"播放时自动关灯",urlInclude:o.allVideoUrls,tags:[componentsTags.video],description:{"zh-CN":"在视频播放时自动关灯, 暂停或结束时再自动打开."},entry:async()=>{const{isEmbeddedPlayer:e}=await Promise.resolve().then(r.t.bind(r,605,23)),{lightOn:o,lightOff:i}=await Promise.resolve().then(r.t.bind(r,642,23));e()||(0,n.videoChange)((async()=>{if(null!=a){const e=await a.query.video.element();e.removeEventListener("ended",o),e.removeEventListener("pause",o),e.removeEventListener("play",i)}a=t.playerAgent;const e=await a.query.video.element();a.isAutoPlay()&&i(),e.addEventListener("ended",o),e.addEventListener("pause",o),e.addEventListener("play",i)}))},commitHash:"96e850560dc42914a10adebca7d81d755e51dfb0",coreVersion:"2.4.1"})}(),i=i.component}()}));