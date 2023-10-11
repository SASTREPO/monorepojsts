/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry","../../../support/fieldUtils"],(function(e,t,n,o,r){"use strict";const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function s(e){return i[e]}function*u(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*l(e,t={}){const{geometryType:r,objectIdField:i}=t;for(const c of e){var u;const{geometry:e,properties:l,id:f}=c;if(e&&s(e.type)!==r)continue;const a=l||{};let y=null!=(u=a[i])?u:null;i&&null!=f&&!a[i]&&(a[i]=y=f);const p=new n.OptimizedFeature(e?g(new o,e,t):null,a,null,y);yield p}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function a(e){return!p(e)}function y(e){return p(e)}function p(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function d(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":return m(e,t,n);case"MultiLineString":return h(e,t,n);case"MultiPoint":return P(e,t,n);case"MultiPolygon":return w(e,t,n);case"Point":return S(e,t,n);case"Polygon":return b(e,t,n)}}function m(e,t,n){return M(e,t.coordinates,n),e}function h(e,t,n){for(const o of t.coordinates)M(e,o,n);return e}function P(e,t,n){return M(e,t.coordinates,n),e}function w(e,t,n){for(const o of t.coordinates){F(e,o[0],n);for(let t=1;t<o.length;t++)G(e,o[t],n)}return e}function S(e,t,n){return O(e,t.coordinates,n),e}function b(e,t,n){const o=t.coordinates;F(e,o[0],n);for(let r=1;r<o.length;r++)G(e,o[r],n);return e}function F(e,t,n){const o=d(t);a(o)?j(e,o,n):M(e,o,n)}function G(e,t,n){const o=d(t);y(o)?j(e,o,n):M(e,o,n)}function M(e,t,n){for(const o of t)O(e,o,n);e.lengths.push(t.length)}function j(e,t,n){for(let o=t.length-1;o>=0;o--)O(e,t[o],n);e.lengths.push(t.length)}function O(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new t("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new t("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new t("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function L(e,t={}){const n=[],o=new Set,i=new Set;let l,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const r of u(e)){const{geometry:e,properties:t,id:u}=r;if(!e||(d||(d=s(e.type)),s(e.type)===d)){if(!a){a=f(c(e))}if(p||(p=null!=u,p&&(l=typeof u,y=Object.keys(t).filter((e=>t[e]===u)))),p&&null!=u&&(y.length>1?y=y.filter((e=>t[e]===u)):1===y.length&&(y=t[y[0]]===u?y:[])),!g&&t){let e=!0;for(const r in t){if(o.has(r))continue;const s=t[r];if(null==s){e=!1,i.add(r);continue}const u=k(s);"unknown"!==u?(i.delete(r),o.add(r),n.push({name:r,alias:r,type:u})):i.add(r)}g=e}}}const m=y&&1===y.length&&y[0]||null;if(m)for(const s of n)if(s.name===m&&r.isNumericField(s)){s.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:l,unknownFields:Array.from(i)}}function N(e,t){return Array.from(l(u(e),t))}e.createOptimizedFeatures=N,e.getGeometryType=s,e.inferLayerProperties=L,e.validateGeoJSON=T,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));