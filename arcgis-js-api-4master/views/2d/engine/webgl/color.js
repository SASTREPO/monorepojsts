/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./number"],(function(t,r){"use strict";const n=[255,255,255,1],e=[0,0,0,0];function u(t,r){return Array.isArray(r)?(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3]):(t[0]=r.r,t[1]=r.g,t[2]=r.b,t[3]=r.a),t}function i(t,r=0,n=!1){const e=t[r+3];return t[r+0]*=e,t[r+1]*=e,t[r+2]*=e,n||(t[r+3]*=255),t}function o(t){return i(u([],t))}function l(t){return i(u(e,t)),r.i8888to32(e[0],e[1],e[2],e[3])}function p(t){if(!t)return 0;const{r:n,g:e,b:u,a:i}=t,o=n*i,l=e*i,p=u*i,c=255*i;return r.i8888to32(o,l,p,c)}function c(t){if(!t)return 0;const[n,e,u,i]=t,o=n*(i/255),l=e*(i/255),p=u*(i/255),c=i;return r.i8888to32(o,l,p,c)}t.copyAndPremultiply=o,t.premultiplyAlpha=i,t.premultiplyAlphaRGBA=p,t.premultiplyAlphaRGBAArray=c,t.premultiplyAlphaUint32=l,t.white=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));