/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(r,t){"use strict";function n(r,t){if(r.forEach)r.forEach(t);else for(let n=0;n<r.length;n++)t(r[n],n,r)}function o(r,t,n){if(r.slice)return r.slice(t,n);void 0===t?t=0:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t))),void 0===n?n=r.length:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n)));const o=Math.max(0,n-t),e=new(0,r.constructor)(o);for(let a=0;a<o;a++)e[a]=r[t+a];return e}function e(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function a(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function c(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function i(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function s(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function y(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function A(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function l(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}function m(r){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=r[n];return t}function h(r){return t.isNone(r)?0:128+r.buffer.byteLength+64}r.estimateSize=h,r.forEach=n,r.isArrayBuffer=e,r.isFloat32Array=A,r.isFloat64Array=l,r.isInt16Array=u,r.isInt32Array=f,r.isInt8Array=a,r.isUint16Array=s,r.isUint32Array=y,r.isUint8Array=c,r.isUint8ClampedArray=i,r.slice=o,r.toArray=m,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));