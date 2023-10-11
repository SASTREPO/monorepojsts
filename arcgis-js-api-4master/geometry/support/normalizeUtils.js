/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../core/Error","../../core/Logger","../../core/maybe","../Polygon","../Polyline","./normalizeUtilsCommon","./spatialReferenceUtils","./webMercatorUtils","../../rest/geometry/cut","../../rest/geometry/simplify"],(function(e,t,n,o,s,r,i,l,f,c,a,u,p){"use strict";const h=s.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e.type}function m(e){return"polygon"===e[0].type}function y(e){return"polyline"===e[0].type}function x(e){const t=[];let n=0,o=0;for(let s=0;s<e.length;s++){const r=e[s];let i=null;for(let e=0;e<r.length;e++)i=r[e],t.push(i),0===e?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&t.push([(n+o)/2,0])}return t}function d(e,t){if(!(e instanceof l||e instanceof i)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw h.error(e),new o(e)}const n=f.getGeometryParts(e),s=[];for(const o of n){const e=[];s.push(e),e.push([o[0][0],o[0][1]]);for(let n=0;n<o.length-1;n++){const s=o[n][0],r=o[n][1],i=o[n+1][0],l=o[n+1][1],f=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),c=(l-r)/f,a=(i-s)/f,u=f/t;if(u>1){for(let l=1;l<=u-1;l++){const n=l*t,o=a*n+s,i=c*n+r;e.push([o,i])}const n=(f+Math.floor(u-1)*t)/2,o=a*n+s,i=c*n+r;e.push([o,i])}e.push([i,l])}}return g(e)?new i({rings:s,spatialReference:e.spatialReference}):new l({paths:s,spatialReference:e.spatialReference})}function M(e,t,n){if(t){const t=d(e,1e6);e=a.webMercatorToGeographic(t,!0)}return n&&(e=f.updatePolyGeometry(e,n)),e}function P(e,t,n){if(Array.isArray(e)){const o=e[0];if(o>t){const n=f.offsetMagnitude(o,t);e[0]=o+n*(-2*t)}else if(o<n){const t=f.offsetMagnitude(o,n);e[0]=o+t*(-2*n)}}else{const o=e.x;if(o>t){const n=f.offsetMagnitude(o,t);e=e.clone().offset(n*(-2*t),0)}else if(o<n){const t=f.offsetMagnitude(o,n);e=e.clone().offset(t*(-2*n),0)}}return e}function b(e,t){let n=-1;for(let o=0;o<t.cutIndexes.length;o++){const s=t.cutIndexes[o],r=t.geometries[o],i=f.getGeometryParts(r);for(let e=0;e<i.length;e++){const t=i[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const o=t[e][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*f.offsetMagnitude(n,180);for(let s=0;s<t.length;s++){const t=r.getPoint(e,s);r.setPoint(e,s,t.clone().offset(o,0))}return!0}}))}if(s===n){if(m(e))for(const t of f.getGeometryParts(r))e[s]=e[s].addRing(t);else if(y(e))for(const t of f.getGeometryParts(r))e[s]=e[s].addPath(t)}else n=s,e[s]=r}return e}function w(e,t,n){return R.apply(this,arguments)}function R(){return(R=t._asyncToGenerator((function*(e,t,o){var s;if(!Array.isArray(e))return w([e],t);const h=null!=(s=null==t?void 0:t.url)?s:n.geometryServiceUrl;let g,m,y,x,d,R,v,G,z=0;const L=[],T=[];for(const n of e)if(r.isNone(n))T.push(n);else if(g||(g=n.spatialReference,m=c.getInfo(g),y=g.isWebMercator,R=y?102100:4326,x=f.cutParams[R].maxX,d=f.cutParams[R].minX,v=f.cutParams[R].plus180Line,G=f.cutParams[R].minus180Line),m)if("mesh"===n.type)T.push(n);else if("point"===n.type)T.push(P(n.clone(),x,d));else if("multipoint"===n.type){const e=n.clone();e.points=e.points.map((e=>P(e,x,d))),T.push(e)}else if("extent"===n.type){const e=n.clone()._normalize(!1,!1,m);T.push(e.rings?new i(e):e)}else if(n.extent){const e=n.extent,t=f.offsetMagnitude(e.xmin,d)*(2*x);let o=0===t?n.clone():f.updatePolyGeometry(n.clone(),t);e.offset(t,0),e.intersects(v)&&e.xmax!==x?(z=e.xmax>z?e.xmax:z,o=M(o,y),L.push(o),T.push("cut")):e.intersects(G)&&e.xmin!==d?(z=e.xmax*(2*x)>z?e.xmax*(2*x):z,o=M(o,y,360),L.push(o),T.push("cut")):T.push(o)}else T.push(n.clone());else T.push(n);let I=f.offsetMagnitude(z,x),U=-90;const _=I,A=new l;for(;I>0;){const e=360*I-180;A.addPath([[e,U],[e,-1*U]]),U*=-1,I--}if(L.length>0&&_>0){const t=b(L,yield u.cut(h,L,A,o)),n=[],s=[];for(let o=0;o<T.length;o++){const i=T[o];if("cut"!==i)s.push(i);else{const i=t.shift(),l=e[o];r.isSome(l)&&"polygon"===l.type&&l.rings&&l.rings.length>1&&i.rings.length>=l.rings.length?(n.push(i),s.push("simplify")):s.push(y?a.geographicToWebMercator(i):i)}}if(!n.length)return s;const i=yield p.simplify(h,n,o),l=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?l.push(t):l.push(y?a.geographicToWebMercator(i.shift()):i.shift())}return l}const S=[];for(let n=0;n<T.length;n++){const e=T[n];if("cut"!==e)S.push(e);else{const e=L.shift();S.push(!0===y?a.geographicToWebMercator(e):e)}}return Promise.resolve(S)}))).apply(this,arguments)}function v(e){if(!e)return null;const t=e.extent;if(!t)return null;const n=e.spatialReference&&c.getInfo(e.spatialReference);if(!n)return t;const[o,s]=n.valid,r=2*s,{width:i}=t;let l,{xmin:f,xmax:a}=t;if([f,a]=[a,f],"extent"===e.type||0===i||i<=s||i>r||f<o||a>s)return t;switch(e.type){case"polygon":if(!(e.rings.length>1))return t;l=x(e.rings);break;case"polyline":if(!(e.paths.length>1))return t;l=x(e.paths);break;case"multipoint":l=e.points}const u=t.clone();for(let c=0;c<l.length;c++){let e=l[c][0];e<0?(e+=s,a=Math.max(e,a)):(e-=s,f=Math.min(e,f))}return u.xmin=f,u.xmax=a,u.width<i?(u.xmin-=s,u.xmax-=s,u):t}function G(e,t){const n=c.getInfo(t);if(n){const[t,o]=n.valid,s=o-t;if(e<t)for(;e<t;)e+=s;if(e>o)for(;e>o;)e-=s}return e}e.getDenormalizedExtent=v,e.normalizeCentralMeridian=w,e.normalizeMapX=G,e.straightLineDensify=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));