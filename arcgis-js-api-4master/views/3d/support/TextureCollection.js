/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../support/Scheduler"],(function(e,t,r,s,o,u,n,l,i,a,c){"use strict";e.TextureCollection=function(e){function r(t,r){var s,o;return(o=e.call(this,{})||this)._stage=t,o._textureRequests=new Map,o._frameTask=null!=(s=null==r?void 0:r.registerTask(c.TaskPriority.TEXTURE_UNLOAD))?s:c.ImmediateTask,o}t._inheritsLoose(r,e);var s=r.prototype;return s.normalizeCtorArgs=function(){return{}},s.destroy=function(){e.prototype.destroy.call(this),this._frameTask.remove(),this._textureRequests.forEach((e=>this._releaseTextureRequest(e))),this._textureRequests.clear()},s.fromData=function(e,t,r){const s=this.makeUid(e);let o=this._textureRequests.get(s);return o||(o={referenceCount:0,texture:t(),textureAsync:null,abortController:null,onRemove:r},this._stage&&(this._stage.add(o.texture),this._stage.loadImmediate(o.texture)),this._textureRequests.set(s,o)),o.referenceCount++,{uid:s,texture:o.texture,release:()=>this._release(s)}},s._release=function(e){const t=this._textureRequests.get(e);t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),t.referenceCount--,t.referenceCount<1&&this._frameTask.schedule((()=>this._releaseNow(e)))):console.warn(`TextureCollection: texture doesn't exist: '${e}'`)},s._releaseNow=function(e){if(!this._textureRequests)return;const t=this._textureRequests.get(e);!t||t.referenceCount>0||(this._releaseTextureRequest(t),this._textureRequests.delete(e))},s._releaseTextureRequest=function(e){var t;(e.onRemove&&e.onRemove(),e.texture)?null==(t=this._stage)||t.remove(e.texture):e.abortController&&(e.abortController.abort(),e.abortController=null)},s.makeUid=function(e,t=null){return o.isSome(t)?`${e}.${t}px`:e},t._createClass(r,[{key:"updating",get:function(){return this._frameTask.updating}},{key:"test",get:function(){return{textureRequests:this._textureRequests}}}]),r}(s),r.__decorate([u.property()],e.TextureCollection.prototype,"_frameTask",void 0),r.__decorate([u.property()],e.TextureCollection.prototype,"updating",null),e.TextureCollection=r.__decorate([a.subclass("esri.views.3d.support.TextureCollection")],e.TextureCollection),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));