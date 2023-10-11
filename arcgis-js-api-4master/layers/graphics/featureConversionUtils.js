/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/Logger","../../core/maybe","../../geometry/support/jsonUtils","./OptimizedFeature","./OptimizedFeatureSet","./OptimizedGeometry"],(function(e,t,n,o,r,s,i,c){"use strict";function u(e,t){return e?t?4:3:t?3:2}const l=n.getLogger("esri.layers.graphics.featureConversionUtils"),a={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},f=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},h=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},g=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},d=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function m(e,t,n,o){if(e){if(n)return t&&o?d:h;if(t&&o)return g}else if(t&&o)return h;return f}function y({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function p({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function F({scale:e,translate:t},n){return n*e[0]+t[0]}function I({scale:e,translate:t},n){return t[1]-n*e[1]}function b(e,t,n){return e?t?n?z(e):G(e):n?w(e):M(e):null}function M(e){const t=e.coords;return{x:t[0],y:t[1]}}function N(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function G(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function w(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function v(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function z(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function S(e,t,n,r){let s=M;n&&r?s=z:n?s=G:r&&(s=w);for(const i of t){const{geometry:t,attributes:n}=i,r=o.isSome(t)?s(t):null;e.push({attributes:n,geometry:r})}return e}function O(e,t){return e&&t?P:e?T:t?v:N}function x(e,t,n,o,r){const i=O(n,o);for(const u of t){const{geometry:t,attributes:n}=u;let o;t&&(o=i(new c,t)),e.push(new s.OptimizedFeature(o,n,null,n[r]))}return e}function Z(e,t,n=O(null!=t.z,null!=t.m)){return n(e,t)}function k(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let i;t&&(i=E(t,n,o)),e.push({attributes:s,geometry:i})}return e}function E(e,t,n){if(o.isNone(e))return null;const r=u(t,n),s=[];for(let o=0;o<e.coords.length;o+=r){const t=[];for(let n=0;n<r;n++)t.push(e.coords[o+n]);s.push(t)}return t?n?{points:s,hasZ:t,hasM:n}:{points:s,hasZ:t}:n?{points:s,hasM:n}:{points:s}}function q(e,t,n,o,r){const i=u(n,o);for(const u of t){const t=u.geometry,n=u.attributes;let o;t&&(o=j(new c,t,i)),e.push(new s.OptimizedFeature(o,n,null,n[r]))}return e}function j(e,t,n=u(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const s of t.points)for(let e=0;e<n;e++)o[r++]=s[e];return e}function V(e,t,n,r){for(const s of t){const{geometry:t,attributes:i}=s;let c;o.isSome(t)&&(c=Y(t,n,r)),e.push({attributes:i,geometry:c})}return e}function Y(e,t,n){if(!e)return null;const o=u(t,n),{coords:r,lengths:s}=e,i=[];let c=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[c++]);e.push(t)}i.push(e)}return t?n?{paths:i,hasZ:t,hasM:n}:{paths:i,hasZ:t}:n?{paths:i,hasM:n}:{paths:i}}function _(e,t,n,o,r){const i=u(n,o);for(const u of t){const t=u.geometry,n=u.attributes;let o;t&&(o=A(new c,t,i)),e.push(new s.OptimizedFeature(o,n,null,n[r]))}return e}function A(e,t,n=u(t.hasZ,t.hasM)){const{lengths:o,coords:r}=e;let s=0;for(const i of t.paths){for(const e of i)for(let t=0;t<n;t++)r[s++]=e[t];o.push(i.length)}return e}function U(e,t,n,r){for(const s of t){const{geometry:t,attributes:i,centroid:c}=s;let u;if(o.isSome(t)&&(u=L(t,n,r)),o.isSome(c)){const t=M(c);e.push({attributes:i,centroid:t,geometry:u})}else e.push({attributes:i,geometry:u})}return e}function L(e,t,n){if(!e)return null;const o=u(t,n),{coords:r,lengths:s}=e,i=[];let c=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[c++]);e.push(t)}i.push(e)}return t?n?{rings:i,hasZ:t,hasM:n}:{rings:i,hasZ:t}:n?{rings:i,hasM:n}:{rings:i}}function R(e,t,n,r,i){for(const u of t){const t=u.geometry,l=u.centroid,a=u.attributes;let f;t&&(f=$(new c,t,n,r)),o.isSome(l)?e.push(new s.OptimizedFeature(f,a,N(new c,l),a[i])):e.push(new s.OptimizedFeature(f,a,null,a[i]))}return e}function $(e,t,n=t.hasZ,o=t.hasM){return C(e,t.rings,n,o),e}function C(e,t,n,o){const r=u(n,o),{lengths:s,coords:i}=e;let c=0;s.length=i.length=0;for(const u of t){for(const e of u)for(let t=0;t<r;t++)i[c++]=e[t];s.push(u.length)}return e}const Q=[],B=[];function X(e,t,n,o,r){Q[0]=e;const[s]=D(B,Q,t,n,o,r);return Q.length=B.length=0,s}function D(e,n,o,r,i,c){if(e.length=0,!o){for(const t of n){const n=t.attributes[c];e.push(new s.OptimizedFeature(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return x(e,n,r,i,c);case"esriGeometryMultipoint":return q(e,n,r,i,c);case"esriGeometryPolyline":return _(e,n,r,i,c);case"esriGeometryPolygon":return R(e,n,r,i,c);default:l.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${o}'`)),e.length=0}return e}function H(e,n,o,r,s,i){const c=e.length;switch(o){case"esriGeometryPoint":x(e,n,r,s,i);break;case"esriGeometryMultipoint":q(e,n,r,s,i);break;case"esriGeometryPolyline":_(e,n,r,s,i);break;case"esriGeometryPolygon":R(e,n,r,s,i);break;default:l.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${o}'`))}for(let t=0;t<n.length;t++)e[t+c].geometryType=o,e[t+c].insertAfter=n[t].insertAfter,e[t+c].groupId=n[t].groupId;return e}function J(e,t,n,o){B[0]=e,te(Q,B,t,n,o);const r=Q[0];return Q.length=B.length=0,r}function K(e,n,s){if(o.isNone(e))return null;const i=new c;if("hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==s&&(s=e.hasM),r.isPoint(e)){return O(null!=n?n:null!=e.z,null!=s?s:null!=e.m)(i,e)}return r.isPolygon(e)?$(i,e,n,s):r.isPolyline(e)?A(i,e,u(n,s)):r.isMultipoint(e)?j(i,e,u(n,s)):void l.error("convertFromGeometry:unknown-geometry",new t(`Unable to parse unknown geometry type '${e}'`))}function W(e,n,r,s){const i=e&&("coords"in e?e:e.geometry);if(o.isNone(i))return null;switch(n){case"esriGeometryPoint":{let e=M;return r&&s?e=z:r?e=G:s&&(e=w),e(i)}case"esriGeometryMultipoint":return E(i,r,s);case"esriGeometryPolyline":return Y(i,r,s);case"esriGeometryPolygon":return L(i,r,s);default:return void l.error("convertToGeometry:unknown-geometry",new t(`Unable to parse unknown geometry type '${n}'`))}}function ee(e,t){for(const n of t)e.push({attributes:n.attributes});return e}function te(e,n,r,s,i){if(e.length=0,o.isNone(r))return ee(e,n);switch(r){case"esriGeometryPoint":return S(e,n,s,i);case"esriGeometryMultipoint":return k(e,n,s,i);case"esriGeometryPolyline":return V(e,n,s,i);case"esriGeometryPolygon":return U(e,n,s,i);default:l.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${r}'`))}return e}function ne(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:i,features:c,geometryType:u,exceededTransferLimit:l,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=e,g={features:te([],c,u,i,s),fields:r,geometryType:u,objectIdFieldName:t,spatialReference:n,uniqueIdField:a,queryGeometry:W(f,h,!1,!1)};return o&&(g.transform=o),l&&(g.exceededTransferLimit=l),s&&(g.hasM=s),i&&(g.hasZ=i),g}function oe(e,n){const o=new i,{hasM:r,hasZ:s,features:c,objectIdFieldName:u,spatialReference:a,geometryType:f,exceededTransferLimit:h,transform:g,fields:d}=e;return d&&(o.fields=d),o.geometryType=f,o.objectIdFieldName=u||n,o.spatialReference=a,o.objectIdFieldName?(c&&D(o.features,c,f,s,r,o.objectIdFieldName),h&&(o.exceededTransferLimit=h),r&&(o.hasM=r),s&&(o.hasZ=s),g&&(o.transform=g),o):(l.error(new t("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function re(e){const{transform:t,features:n,hasM:r,hasZ:s}=e;if(!t)return e;for(const i of n)o.isSome(i.geometry)&&he(i.geometry,i.geometry,r,s,t),o.isSome(i.centroid)&&he(i.centroid,i.centroid,r,s,t);return e.transform=null,e}function se(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let i=0;i<o.length;i++){const t=o[i],u=t.weakClone();u.geometry=new c,ie(u.geometry,t.geometry,r,s,n,e),t.centroid&&(u.centroid=new c,ie(u.centroid,t.centroid,r,s,"esriGeometryPoint",e)),o[i]=u}return t.transform=e,t}function ie(e,t,n,r,s,i,c=n,l=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),o.isNone(t)||!t.coords.length)return null;const f=a[s],{coords:h,lengths:g}=t,d=u(n,r),F=u(n&&c,r&&l),I=m(n,r,c,l);if(!g.length)return I(e.coords,h,0,0,y(i,h[0]),p(i,h[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=d,e;let b,M,N,G,T=0,w=0,v=w;for(const o of g){if(o<f)continue;let t=0;w=v,N=b=y(i,h[T]),G=M=p(i,h[T+1]),I(e.coords,h,w,T,N,G),t++,T+=d,w+=F;for(let n=1;n<o;n++,T+=d)N=y(i,h[T]),G=p(i,h[T+1]),N===b&&G===M||(I(e.coords,h,w,T,N-b,G-M),w+=F,t++,b=N,M=G);t>=f&&(e.lengths.push(t),v=w)}return e.coords.length=v,e.coords.length?e:null}function ce(e,t,n,o,r,s,i=n,c=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const l=a[r],{coords:f,lengths:h}=t,g=u(n,o),d=u(n&&i,o&&c),y=m(n,o,i,c);if(!h.length)return y(e.coords,f,0,0,f[0],f[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let p=0;const F=s*s;for(const u of h){if(u<l){p+=u*g;continue}const t=e.coords.length/d,n=p,o=p+(u-1)*g;y(e.coords,f,e.coords.length,n,f[n],f[n+1]),le(e.coords,f,g,F,y,n,o),y(e.coords,f,e.coords.length,o,f[o],f[o+1]);const r=e.coords.length/d-t;r>=l?e.lengths.push(r):e.coords.length=t*d,p+=u*g}return e.coords.length?e:null}function ue(e,t,n,o){const r=e[t],s=e[t+1],i=e[n],c=e[n+1],u=e[o],l=e[o+1];let a=i,f=c,h=u-a,g=l-f;if(0!==h||0!==g){const e=((r-a)*h+(s-f)*g)/(h*h+g*g);e>1?(a=u,f=l):e>0&&(a+=h*e,f+=g*e)}return h=r-a,g=s-f,h*h+g*g}function le(e,t,n,o,r,s,i){let c,u=o,l=0;for(let a=s+n;a<i;a+=n)c=ue(t,a,s,i),c>u&&(l=a,u=c);u>o&&(l-s>n&&le(e,t,n,o,r,s,l),r(e,t,e.length,l,t[l],t[l+1]),i-l>n&&le(e,t,n,o,r,l,i))}function ae(e,t,n,r){if(o.isNone(t)||!t.coords||!t.coords.length)return null;const s=u(n,r);let i=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=s){const n=e[t],o=e[t+1];i=Math.min(i,n),l=Math.max(l,n),c=Math.min(c,o),a=Math.max(a,o)}}return e[0]=i,e[1]=c,e[2]=l,e[3]=a,e}function fe(e,t,n,o){const r=u(n,o),{lengths:s,coords:i}=t;let c=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,h=0;for(const u of s){let e=i[h],t=i[h+1];c=Math.min(e,c),l=Math.min(t,l),a=Math.max(e,a),f=Math.max(t,f),h+=r;for(let n=1;n<u;n++,h+=r){const n=i[h],o=i[h+1];e+=n,t+=o,n<0&&(c=Math.min(c,e)),n>0&&(a=Math.max(a,e)),o<0?l=Math.min(l,t):o>0&&(f=Math.max(f,t))}}return e[0]=c,e[1]=l,e[2]=a,e[3]=f,e}function he(e,t,n,o,r){const{coords:s,lengths:i}=t,c=n?o?d:h:o?h:f,l=u(n,o);if(!s.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return c(e.coords,s,0,0,F(r,s[0]),I(r,s[1])),e!==t&&(e.lengths.length=0,e.coords.length=l),e;const[a,g]=r.scale;let m=0;for(let u=0;u<i.length;u++){const t=i[u];e.lengths[u]=t;let n=F(r,s[m]),o=I(r,s[m+1]);c(e.coords,s,m,m,n,o),m+=l;for(let r=1;r<t;r++,m+=l)n+=s[m]*a,o-=s[m+1]*g,c(e.coords,s,m,m,n,o)}return e!==t&&(e.lengths.length=i.length,e.coords.length=s.length),e}function ge(e,t,n,o,r,s){const i=u(n,o),c=m(n,o,r,s),l=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let u=0;u<l.length;u+=i)c(e.coords,l,e.coords.length,u,l[u],l[u+1]);return e}function de(e,t,n,o,r){if(!t||!t.coords||!t.coords.length)return null;const s=a[n],{coords:i,lengths:c}=t,l=m(o,r,o,r),f=u(o,r);let h=0,g=0,d=0,y=0;for(const u of c){g=y,l(e.coords,i,g,h,i[h],i[h+1]),h+=f;let t=i[h],n=i[h+1],o=t,r=n,c=n/t;g+=f,l(e.coords,i,g,h,o,r),h+=f;for(let s=2;s<u;s++){t=i[h],n=i[h+1];const s=n/t,u=c===s||!isFinite(c)&&!isFinite(s),a=u&&isFinite(s)?c>=0&&s>=0||c<=0&&s<=0:r>=0&&n>=0||r<=0&&n<=0;u&&a?(o+=t,r+=n):(o=t,r=n,g+=f),l(e.coords,i,g,h,o,r),h+=f,c=s}g+=f;const a=(g-y)/f;a>=s&&(e.lengths[d]=a,y=g,d++)}return e.coords.length>y&&(e.coords.length=y),e.lengths.length>d&&(e.lengths.length=d),e.coords.length&&e.lengths.length?e:null}function me(e,t,n,o){let r=0,s=e[o*t],i=e[o*(t+1)];for(let c=1;c<n;c++){const n=s+e[o*(t+c)],u=i+e[o*(t+c)+1],l=(n-s)*(u+i);s=n,i=u,r+=l}return.5*r}function ye(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let i=0;i<o.length;i++){s+=me(n,r,o[i],t),r+=i}return Math.abs(s)}function pe(e,t){const n=e.clone(),o=e.coords,r=e.lengths;let s=0;for(let i=0;i<r.length;i++){const e=r[i];let c=o[t*s],u=o[t*s+1];for(let r=1;r<e;r++){const e=o[t*(s+r)],i=o[t*(s+r)+1],l=e-c,a=i-u;n.coords[t*(s+r)]=l,n.coords[t*(s+r)+1]=a,c=e,u=i}s+=e}return n}function Fe(e,t){if(o.isNone(e))return null;const n=e.clone(),r=e.coords,s=e.lengths;let i=0;for(let o=0;o<s.length;o++){const e=s[o];let c=r[t*i],u=r[t*i+1];for(let o=1;o<e;o++){const e=c+r[t*(i+o)],s=u+r[t*(i+o)+1];n.coords[t*(i+o)]=e,n.coords[t*(i+o)+1]=s,c=e,u=s}i+=e}return n}e.convertFromFeature=X,e.convertFromFeatureSet=oe,e.convertFromFeatures=D,e.convertFromGeometry=K,e.convertFromGraphics=H,e.convertFromMultipoint=j,e.convertFromMultipointFeatures=q,e.convertFromNestedArray=C,e.convertFromPoint=Z,e.convertFromPointFeatures=x,e.convertFromPolygon=$,e.convertFromPolyline=A,e.convertFromPolylineFeatures=_,e.convertToFeature=J,e.convertToFeatureSet=ne,e.convertToFeatures=te,e.convertToGeometry=W,e.convertToMultipoint=E,e.convertToMultipointFeatures=k,e.convertToPoint=b,e.convertToPolygon=L,e.convertToPolyline=Y,e.deltaDecodeGeometry=Fe,e.deltaEncodeGeometry=pe,e.generalizeOptimizedGeometry=ce,e.getBoundsOptimizedGeometry=ae,e.getQuantizedArea=ye,e.getQuantizedBoundsOptimizedGeometry=fe,e.getSignedQuantizedRingArea=me,e.quantizeOptimizedFeatureSet=se,e.quantizeOptimizedGeometry=ie,e.quantizeX=y,e.quantizeY=p,e.removeCollinearVectices=de,e.removeZMValues=ge,e.unquantizeOptimizedFeatureSet=re,e.unquantizeOptimizedGeometry=he,e.unquantizeX=F,e.unquantizeY=I,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));