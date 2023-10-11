/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/PooledArray","../../../core/promiseUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../state/helpers/SceneIntersectionHelper","./lib/AutoDisposable","./lib/basicInterfaces","./lib/ChangeSet","./lib/GeometryRecord","./lib/WebGLLayer","./parts/Model","./parts/RenderView","../../support/Scheduler"],(function(e,t,r,n,o,i,s,a,d,c,l,u,h,y,p,_,g,m,S,f,w,v){"use strict";var b;e.Stage=b=function(e){function r(t){var r;return(r=e.call(this,t)||this)._handles=new o,r._model=new f.Model,r._layers=new s,r._changeSet=new g.ChangeSet,r._layerSyncSet=new Set,r}t._inheritsLoose(r,e);var n=r.prototype;return n.initialize=function(){this._set("renderView",new w.RenderView(this)),this._frameTask=this.resourceController.scheduler.registerTask(v.TaskPriority.STAGE,this),this._handles.add(this._frameTask)},n.destroy=function(){m.GeometryRecord.pool.prune(0),this._handles.destroy(),this.dispose()},n.add=function(e){this._model.add(e),S.isWebGLLayer(e)&&(e.attachStage(this),this._addLayer(e)),this.renderView.requestRender()},n.remove=function(e){i.isNone(e)||(this.renderView.requestRender(),this._model.remove(e),S.isWebGLLayer(e)&&(this._removeLayer(e),e.detachStage()))},n.addMany=function(e){i.isSome(e)&&(this._model.addMany(e),this.renderView.requestRender())},n.removeMany=function(e){i.isSome(e)&&(this._model.removeMany(e),this.renderView.requestRender())},n.load=function(){var e=t._asyncToGenerator((function*(e){i.isNone(e)||(Array.isArray(e)||(e=[e]),yield a.all(e.filter((e=>i.isNone(e.glTexture))).map((e=>this.schedule((()=>this._model.has(e)?e.load(this.renderView.renderingContext,(()=>this.renderView.textureRepository.textureTechnique)):null))))))}));function r(t){return e.apply(this,arguments)}return r}(),n.loadImmediate=function(e){return e.load(this.renderView.renderingContext,(()=>this.renderView.textureRepository.textureTechnique))},n.forEachOfType=function(e,t){this._model.forEachOfType(e,t)},n.handleEvent=function(e,t){this.destroyed||(this._model.dirtySet[e](t),this.renderView.requestRender())},n.runTask=function(e){this._frameTask.processQueue(e),e.done||this._commit()},n._commit=function(){const e=this._model.dirtySet;b.DebugSettings.logDirtySet&&console.log("Dirty set: "+e.formatDebugInfo()),e.commit(this._changeSet),b.DebugSettings.logDirtySet&&(console.log("RGs add: "+this._changeSet.adds.map((e=>e.id))),console.log("RGs remove: "+this._changeSet.removes.map((e=>e.id)))),this._layerSyncSet.clear(),this.renderView.modify(this._changeSet),this.renderView.requestRender()},n.schedule=function(e,t){return this._frameTask.schedule(e,t)},n.syncLayer=function(e){this._layerSyncSet.add(e),this.renderView.requestRender()},n.processSyncLayers=function(){const e=this._model.dirtySet;this._layers.forAll((t=>{(this._layerSyncSet.has(t.id)||t.updatePolicy===_.UpdatePolicy.SYNC)&&(e.commitLayer(t.id,this._changeSet),this._layerSyncSet.delete(t.id))}));for(const t of this._layerSyncSet)e.commitLayer(t,this._changeSet);this._layerSyncSet.clear(),this.renderView.modify(this._changeSet)},n.getObject=function(e){return this._model.getObject(e)},n._addLayer=function(e){this._layers.some((t=>t===e))||this._layers.push(e)},n._removeLayer=function(e){this._commit(),null!=this._layers.removeUnordered(e)&&(this._model.dirtySet.getResidentRenderGeometries(e.id,this._changeSet.removes),this.renderView.modify(this._changeSet))},n.addRenderPlugin=function(e,t,r){const n=this.renderView.renderPlugins.add(e,t,r),o=()=>{y.isIntersectionHandler(t)&&this.sceneIntersectionHelper.addIntersectionHandler(t)};if(a.isPromiseLike(n))return n.then(o);o()},n.removeRenderPlugin=function(e){y.isIntersectionHandler(e)&&this.sceneIntersectionHelper.removeIntersectionHandler(e),this.renderView.renderPlugins.remove(e)},t._createClass(r,[{key:"viewingMode",get:function(){return this.state.viewingMode}},{key:"updating",get:function(){return this._model.dirtySet.dirty||this.renderView.updating||this._frameTask.updating}},{key:"running",get:function(){return this._model.dirtySet.dirty}},{key:"layers",get:function(){return this._layers}},{key:"performanceInfo",get:function(){return{renderView:this.renderView.performanceInfo,model:this._model.getStats()}}},{key:"test",get:function(){const e=this;return{getCount:t=>e._model.test.content.filter((e=>e.type===t)).length,model:e._model}}}]),r}(p.AutoDisposableMixin(n)),e.Stage.DebugSettings={endFrameContentValidation:!1,logDirtySet:!1},r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"resourceController",void 0),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"options",void 0),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"state",void 0),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"sceneIntersectionHelper",void 0),r.__decorate([d.property({readOnly:!0})],e.Stage.prototype,"viewingMode",null),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"container",void 0),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"renderSR",void 0),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"_handles",void 0),r.__decorate([d.property({readOnly:!0})],e.Stage.prototype,"updating",null),r.__decorate([d.property({constructOnly:!0})],e.Stage.prototype,"_model",void 0),r.__decorate([p.autoDispose(),d.property()],e.Stage.prototype,"renderView",void 0),e.Stage=b=r.__decorate([h.subclass("esri.views.3d.webgl-engine.Stage")],e.Stage),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));