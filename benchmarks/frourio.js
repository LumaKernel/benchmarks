!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);var u,a,s="function"==typeof(u=()=>({get:()=>({status:200,body:"Hello world"})}))?u():{...a(u),inject:e=>a(e)};((e,t={})=>{var r;const n=null!==(r=t.basePath)&&void 0!==r?r:"";var o;return e.get(n+"/",(o=s.get,async(e,t)=>{try{const r=o({query:e.query,path:e.path,method:e.method,body:e.body,headers:e.headers,params:e.typedParams,user:e.user}),{status:n,body:u,headers:a}=r instanceof Promise?await r:r;for(const e in a)t.setHeader(e,a[e]);t.status(n).send(u)}catch(e){t.sendStatus(500)}})),e})(o()()).listen(3e3)}]);