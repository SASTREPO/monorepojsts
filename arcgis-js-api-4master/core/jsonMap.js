/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./object"],(function(t,o){"use strict";let n=function(){function t(t,n={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=t,this.options=n,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(t),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(t,n,i)=>{const s=this.toJSON(t);void 0!==s&&o.setDeepValue(i,s,n)},this.write.isJSONMapWriter=!0}var n=t.prototype;return n.toJSON=function(t){if(this.apiToJSON.hasOwnProperty(t)){const o=this.apiToJSON[t];return this.options.useNumericKeys?+o:o}return this.options.ignoreUnknown?void 0:t},n.fromJSON=function(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t},n._invertMap=function(t){const o={};for(const n in t)o[t[n]]=n;return o},n._getKeysSorted=function(t){const o=[];for(const n in t)o.push(n);return o.sort(),o},t}();function i(){return function(t,o){return new n(t,{ignoreUnknown:!0,...o})}}t.JSONMap=n,t.strict=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));