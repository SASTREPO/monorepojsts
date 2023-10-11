/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../symbols/cim/cimAnalyzer","../../../../symbols/cim/ExpandedCIM","./webStyleUtils"],(function(e,n,t,r,a){"use strict";const l=function(){var e=n._asyncToGenerator((function*(e,n,t,r){return Promise.all(e.map((e=>u(e,n,t,r))))}));return function(n,t,r,a){return e.apply(this,arguments)}}(),i=function(){var e=n._asyncToGenerator((function*(e,n,a){return new r.ExpandedCIM(yield t.analyzeCIMSymbol(e.data,n,a),e.data,e.rendererKey,e.maxVVSize)}));return function(n,t,r){return e.apply(this,arguments)}}(),u=function(){var e=n._asyncToGenerator((function*(e,n,t,r){if(!e)return null;if("cim"===e.type)return i(e,n,t);if("web-style"===e.type){const l={type:"cim",data:yield a.fetchCIMSymbolReference(e,null,r),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return i(l,n,t)}return e}));return function(n,t,r,a){return e.apply(this,arguments)}}();function o(e){if(!e)return null;const{type:n,cim:t,url:r,materialHash:a}=e,l={cim:t,type:n,mosaicHash:a,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(n){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}e.cimLayerToRasterizationInfo=o,e.expandSymbol=u,e.expandSymbols=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));