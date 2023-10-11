/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/NestedMap"],(function(e,t,n,r){"use strict";let o=function(e){this.technique=e,this.refCount=0,this.refZeroFrame=0},s=function(){function e(e){this._context=e,this._perConstructorInstances=new r.NestedMap,this._frameCounter=0,this._keepAliveFrameCount=i}var s=e.prototype;return s.dispose=function(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.destroy())))),this._perConstructorInstances.clear()},s.acquire=function(e,t){const r=t.key;let s=this._perConstructorInstances.get(e,r);if(n.isNone(s)){const n=new e(this._context,t,(()=>this.release(n)));s=new o(n),this._perConstructorInstances.set(e,r,s)}return++s.refCount,s.technique},s.releaseAndAcquire=function(e,t,r){if(n.isSome(r)){if(t.key===r.key)return r;this.release(r)}return this.acquire(e,t)},s.release=function(e){if(n.isNone(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);n.isNone(t)||(--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter))},s.frameUpdate=function(){this._frameCounter++,this._keepAliveFrameCount!==i&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,n)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.destroy(),this._perConstructorInstances.delete(t,n))}))}))},s.reloadAll=function(){var e=t._asyncToGenerator((function*(){var e=this;const n=new Array;this._perConstructorInstances.forEach(((r,o)=>{const s=function(){var n=t._asyncToGenerator((function*(t,n){const r=n.shader;r&&(yield r.reload(),t.forEach((t=>{t.technique.reload(e._context)})))}));return function(e,t){return n.apply(this,arguments)}}();n.push(s(r,o))})),yield Promise.all(n)}));function n(){return e.apply(this,arguments)}return n}(),t._createClass(e,[{key:"viewingMode",get:function(){return this._context.viewingMode}},{key:"constructionContext",get:function(){return this._context}}]),e}();const i=-1;e.ShaderTechniqueRepository=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));