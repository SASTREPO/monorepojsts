/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var n,l,o;let t,a;const u=null!=(n=null==(l=globalThis.esriConfig)?void 0:l.locale)?n:null==(o=globalThis.dojoConfig)?void 0:o.locale;function i(){var e,n;return null!=(e=null!=u?u:null==(n=globalThis.navigator)?void 0:n.language)?e:"en"}function c(){return void 0===a&&(a=i()),a}function r(e){t=e||void 0,b()}function s(e=c()){const n=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(e);return null==n?void 0:n[1].toLowerCase()}const g={he:!0,ar:!0};function f(e=c()){const n=s(e);return void 0!==n&&(g[n]||!1)}const d=[];function v(e){return d.push(e),{remove(){d.splice(d.indexOf(e),1)}}}const h=[];function L(e){return h.push(e),{remove(){d.splice(h.indexOf(e),1)}}}function b(){var e;const n=null!=(e=t)?e:i();a!==n&&(a=n,[...h].forEach((e=>{e.call(null,n)})),[...d].forEach((e=>{e.call(null,n)})))}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",b),e.beforeLocaleChange=L,e.getDefaultLocale=i,e.getLanguage=s,e.getLocale=c,e.onLocaleChange=v,e.prefersRTL=f,e.setLocale=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));