/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/Logger","../../../../../../symbols/cim/cimAnalyzer","../../../../../../symbols/cim/utils","./WGLMeshTemplate"],(function(e,t,a,n,i){"use strict";const r=t.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");return function(t){function i(e){var a;return(a=t.call(this)||this)._ongoingMaterialRequestMap=new Map,a._materialCache=new Map,a._dynamicPropertyMap=new Map,a._cimLayer=e,a}return e._inheritsLoose(i,t),i.prototype.analyze=function(e,t,i,s,l){if(l&&0===l.length)return null;const o=l&&l.length>0,c=t.readLegacyFeature(),u=this._materialCache,m=this._cimLayer.materialHash;if(!m)return r.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null);const h="function"==typeof m?m(c,i,s):m;if(u.has(h)){const e=u.get(h);return Promise.resolve(e)}const g=this._ongoingMaterialRequestMap.get(h);if(g)return g;const p=this._cimLayer,y=a.analyzeCIMResource(p.cim,this._cimLayer.materialOverrides);y.mosaicHash=h;const{type:M,url:f}=p,_={cim:y,type:M,mosaicHash:h,url:f,size:null,dashTemplate:null,text:null,fontName:null};switch(M){case"marker":_.size=n.evaluateValueOrFunction(p.size,c,i,s);break;case"line":_.dashTemplate=p.dashTemplate;break;case"text":_.text=n.evaluateValueOrFunction(p.text,c,i,s),_.fontName=n.evaluateValueOrFunction(p.fontName,c,i,s)}const d=e.getMosaicItem(_,l).then((e=>(o||(this._ongoingMaterialRequestMap.delete(h),u.set(h,e)),e))).catch((e=>(this._ongoingMaterialRequestMap.delete(h),r.error(".analyze()",e.message),null)));return o||this._ongoingMaterialRequestMap.set(h,d),d},i}(i)}));