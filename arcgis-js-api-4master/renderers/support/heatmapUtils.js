/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils"],(function(t,e){"use strict";const n=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const a=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n)a.addColorStop(Math.max(t,.001),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`);return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function a(t,e,n,a){const{blurRadius:r,fieldOffset:o,field:i}=e,f=new Float64Array(n*a),l=c(r),s=Math.round(3*r);let h,d=Number.NEGATIVE_INFINITY;const m=u(i,o);for(const{geometry:c,attributes:u}of t){const t=c.x-s,e=c.y-s,r=Math.max(0,t),o=Math.max(0,e),i=Math.min(a,c.y+s),g=Math.min(n,c.x+s),y=+m(u);for(let a=o;a<i;a++){const o=l[a-e];for(let e=r;e<g;e++){const r=l[e-t];h=f[a*n+e]+=o*r*y,h>d&&(d=h)}}}return{matrix:f.buffer,max:d}}function r(t,e,n,a){const{blurRadius:r,fieldOffset:o,field:i}=e,u=new Float64Array(n*a),l=c(r),s=Math.round(3*r);let h,d=Number.NEGATIVE_INFINITY;const m=f(i,o),g=new Set;for(const c of t){const t=c.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const r=t.readLegacyPointGeometry(),o=128;if(r.x<-o||r.x>=n+o||r.y<-o||r.y>a+o)continue;const i=+m(t),c=Math.round(r.x)-s,f=Math.round(r.y)-s,y=Math.max(0,c),M=Math.max(0,f),b=Math.min(a,Math.round(r.y)+s),x=Math.min(n,Math.round(r.x)+s);for(let t=M;t<b;t++){const e=l[t-f];for(let a=y;a<x;a++){const r=l[a-c];h=u[t*n+a]+=e*r*i,h>d&&(d=h)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,a,r,o){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const c=t.getImageData(0,0,e,e);n&&a&&c.data.set(new Uint8ClampedArray(i(e,n,a,r,o))),t.putImageData(c,0,0)}function i(t,n,a,r,o){const i=new Uint32Array(t*t),c="buffer"in n?n:new Float64Array(n),u="buffer"in a?new Uint32Array(a.buffer):new Uint32Array(new Uint8Array(a).buffer),f=u.length/(o-r);for(let l=0;l<c.length;l++){const t=c[l],n=Math.floor((t-r)*f);i[l]=u[e.clamp(n,0,u.length-1)]}return i.buffer}function c(t){const e=Math.round(3*t),n=2*t*t,a=new Float64Array(2*e+1);for(let r=0;r<=a.length;r++)a[r]=Math.exp(-((r-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return a}function u(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function f(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}t.calculateHeatmapIntensityInfo=a,t.calculateHeatmapIntensityInfoReaders=r,t.createHeatmapImageData=i,t.createKernel=c,t.createValueFunction=u,t.createValueFunctionCursor=f,t.drawHeatmap=o,t.generateGradient=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));