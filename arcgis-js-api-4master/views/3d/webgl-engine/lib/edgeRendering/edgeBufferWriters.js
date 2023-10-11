/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/RandomLCG","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../support/buffer/glUtil","./bufferLayouts"],(function(t,e,n,o,i,r){"use strict";let s=function(){function t(){}var e=t.prototype;return e.updateSettings=function(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?l:f},e.write=function(t,e,n){const o=this.edgeHashFunction(n);L.seed=o;const i=L.getIntRange(0,255),r=L.getIntRange(0,this.settings.variants-1),s=.7,u=L.getFloat(),a=255*(.5*p(-(1-Math.min(u/s,1))+Math.max(0,u-s)/(1-s),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,i),t.variantStroke.set(e,r),t.variantExtension.set(e,a)},e.trim=function(t,e){return t.slice(0,e)},t}();const u=new Float32Array(6),a=new Uint32Array(u.buffer),c=new Uint32Array(1);function f(t){const e=u;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],c[0]=5381;for(let n=0;n<a.length;n++)c[0]=31*c[0]+a[n];return c[0]}function l(t){const e=u;e[0]=g(t.position0[0]),e[1]=g(t.position0[1]),e[2]=g(t.position0[2]),e[3]=g(t.position1[0]),e[4]=g(t.position1[1]),e[5]=g(t.position1[2]),c[0]=5381;for(let n=0;n<a.length;n++)c[0]=31*c[0]+a[n];return c[0]}const m=1e4;function g(t){return Math.round(t*m)/m}function p(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}let d=function(){function t(){this.commonWriter=new s}var e=t.prototype;return e.updateSettings=function(t){this.commonWriter.updateSettings(t)},e.allocate=function(t){return r.RegularEdgeInstancesLayout.createBuffer(t)},e.write=function(t,e,o){this.commonWriter.write(t,e,o),n.add(y,o.faceNormal0,o.faceNormal1),n.normalize(y,y),t.normal.setVec(e,y)},e.trim=function(t,e){return this.commonWriter.trim(t,e)},t}();d.Layout=r.RegularEdgeInstancesLayout,d.glLayout=i.glLayout(r.RegularEdgeInstancesLayout,1);let h=function(){function t(){this.commonWriter=new s}var e=t.prototype;return e.updateSettings=function(t){this.commonWriter.updateSettings(t)},e.allocate=function(t){return r.SilhouetteEdgeInstancesLayout.createBuffer(t)},e.write=function(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)},e.trim=function(t,e){return this.commonWriter.trim(t,e)},t}();h.Layout=r.SilhouetteEdgeInstancesLayout,h.glLayout=i.glLayout(r.SilhouetteEdgeInstancesLayout,1);const y=o.create(),L=new e;t.CommonBufferWriter=s,t.RegularEdgeBufferWriter=d,t.SilhouetteEdgeBufferWriter=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));