/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../handleUtils","../lang","../maybe"],(function(r,n,t,e){"use strict";function i(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function o(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function a(r,n){const t=i(r);return t?t.getDependsInfo(r,n,""):""}function u(r,n,t){if(t){return l(r,n,{policy:t,path:""})}return l(r,n,null)}function l(r,n,i){return n?Object.keys(n).reduce((function(r,o){let a=null,u="merge";if(i&&(a=i.path?`${i.path}.${o}`:o,u=i.policy(a)),"replace"===u)return r[o]=n[o],r;if(void 0===r[o])return r[o]=t.clone(n[o]),r;let s=r[o],c=n[o];if(s===c)return r;if(Array.isArray(c)||Array.isArray(r))s=s?Array.isArray(s)?r[o]=s.concat():r[o]=[s]:r[o]=[],c&&(Array.isArray(c)||(c=[c]),c.forEach((r=>{-1===s.indexOf(r)&&s.push(r)})));else if(c&&"object"==typeof c)if(i){const n=i.path;i.path=e.assumeNonNull(a),r[o]=l(s,c,i),i.path=n}else r[o]=l(s,c,null);else r.hasOwnProperty(o)&&!n.hasOwnProperty(o)||(r[o]=c);return r}),r||{}):r}function s(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:c(r):r}function c(r){return Array.isArray(r)?r:r.split(".")}function f(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function p(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...f(t));return n}return f(r)}function y(r){if(-1===r.indexOf("?"))return null;const n=c(r),t=new Array(n.length);for(let e=0;e<n.length;e++){const r=n[e];t[e]="?"===r[r.length-1],t[e]&&(n[e]=r.slice(0,-1))}return{fullPath:n.join("."),conditional:t}}function h(r,t,e,i){const o=p(t);if(1!==o.length){const t=o.map((n=>i(r,n,e)));return n.handlesGroup(t)}return i(r,o[0],e)}function d(r){let n=!1;return()=>{n||(n=!0,r())}}r.getDependsInfo=a,r.getProperties=i,r.isPropertyDeclared=o,r.merge=u,r.once=d,r.parse=h,r.parseConditionalPath=y,r.pathToArray=c,r.pathToStringOrArray=s,r.splitPath=p,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));