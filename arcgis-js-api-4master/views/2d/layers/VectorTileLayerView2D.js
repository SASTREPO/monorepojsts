/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/lang","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/diffUtils","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","../engine/vectorTiles/enums","../engine/vectorTiles/TileHandler","../engine/vectorTiles/TileManager","../engine/vectorTiles/VectorTile","../engine/vectorTiles/VectorTileContainer","../engine/vectorTiles/decluttering/debugging","../engine/vectorTiles/style/StyleDefinition","../engine/vectorTiles/style/StyleRepository","./LayerView2D","./support/Display","../tiling/TileInfoViewPOT","../tiling/TileQueue","../../layers/LayerView"],(function(e,t,i,s,r,a,n,l,o,h,y,u,c,p,d,_,f,g,T,C,v,S,D,R,H,L,m){"use strict";const Q=r.getLogger("esri.views.2d.layers.VectorTileLayerView2D");let w=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._styleChanges=[],e._fetchQueue=null,e._parseQueue=null,e._isTileHandlerReady=!1,e.fading=!1,e}e._inheritsLoose(r,t);var o=r.prototype;return o.hitTest=function(){var t=e._asyncToGenerator((function*(e,t){if(!this._tileHandlerPromise)return null;yield this._tileHandlerPromise;const s=yield this._vectorTileContainer.hitTest(t);if(!s||0===s.length)return null;const r=s[0]-1,a=this._styleRepository,n=a.getStyleLayerByUID(r);if(!n)return null;const l=a.getStyleLayerIndex(n.id),o=new i({attributes:{layerId:l,layerName:n.id,layerUID:r}});return o.layer=this.layer,o.sourceLayer=this.layer,[o]}));function s(e,i){return t.apply(this,arguments)}return s}(),o.update=function(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))},o.attach=function(){const{style:e}=this.layer.currentStyleInfo;this._styleRepository=new S(e),this._tileInfoView=new H(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new T.VectorTileContainer(this._tileInfoView),this._tileHandler=new _.TileHandler(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this._start(),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate()})),this._vectorTileContainer.on("fade-complete",(()=>{var e;null==(e=this._collisionBoxesDisplay)||e.requestRender(),this.fading=!1,this.notifyChange("updating"),this.requestUpdate()})),l.watch((()=>this.layer.symbolCollisionBoxesVisible),(e=>{e?(this._collisionBoxesDisplay=new R.Display({render:e=>this._renderCollisionBoxes(e.context)}),this.container.addChild(this._collisionBoxesDisplay)):(this.container.removeChild(this._collisionBoxesDisplay),this._collisionBoxesDisplay=null)}),l.initial),this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:d.StyleUpdateType.PAINTER_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate();else{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=i.type===v.StyleLayerType.SYMBOL;t.setPaintProperties(e.layer,e.paint),s&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender()}})),this.layer.on("layout-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=u.diff(i.layout,e.layout);if(!a.isNone(s)){if(u.hasDiff(s,"visibility")&&1===U(s))return t.setLayoutProperties(e.layer,e.layout),i.type===v.StyleLayerType.SYMBOL&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:d.StyleUpdateType.LAYOUT_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate()}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);i&&(t.setStyleLayerVisibility(e.layer,e.visibility),i.type===v.StyleLayerType.SYMBOL&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender())})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:d.StyleUpdateType.LAYER_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:d.StyleUpdateType.LAYER_REMOVED,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("load-style",(()=>this._loadStyle())),this.layer.on("spriteSource-change",(e=>{this._newSpriteSource=e.spriteSource,this._styleChanges.push({type:d.StyleUpdateType.SPRITES_CHANGED,data:null});const t=this._styleRepository.layers;for(const i of t)switch(i.type){case v.StyleLayerType.SYMBOL:i.getLayoutProperty("icon-image")&&this._styleChanges.push({type:d.StyleUpdateType.LAYOUT_CHANGED,data:{layer:i.id,layout:i.layout}});break;case v.StyleLayerType.LINE:i.getPaintProperty("line-pattern")&&this._styleChanges.push({type:d.StyleUpdateType.PAINTER_CHANGED,data:{layer:i.id,paint:i.paint,isDataDriven:i.isPainterDataDriven()}});break;case v.StyleLayerType.FILL:i.getLayoutProperty("fill-pattern")&&this._styleChanges.push({type:d.StyleUpdateType.PAINTER_CHANGED,data:{layer:i.id,paint:i.paint,isDataDriven:i.isPainterDataDriven()}})}this.notifyChange("updating"),this.requestUpdate()}))],this.declaredClass)},o.detach=function(){var e,t;this._stop(),this.container.removeAllChildren(),null==(e=this._vectorTileContainer)||e.destroy(),this._vectorTileContainer=null,null==(t=this._tileHandler)||t.destroy(),this._tileHandler=null,this.handles.remove(this.declaredClass)},o.moveStart=function(){this.requestUpdate()},o.viewChange=function(){this.requestUpdate()},o.moveEnd=function(){this._collisionBoxesDisplay&&this._vectorTileContainer.restartDeclutter(),this.requestUpdate()},o.supportsSpatialReference=function(e){var t;return p.equals(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)},o.canResume=function(){let e=t.prototype.canResume.call(this);const{currentStyleInfo:i}=this.layer;if(e&&null!=i&&i.layerDefinition){const t=this.view.scale,{minScale:s,maxScale:r}=i.layerDefinition;i&&i.layerDefinition&&(s&&s<t&&(e=!1),r&&r>t&&(e=!1))}return e},o.isUpdating=function(){const e=this._vectorTileContainer.children;return!this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.filter((e=>e.invalidating)).length>0||this.fading},o.acquireTile=function(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),t.setData(e),this.requestUpdate(),this.notifyChange("updating")})).catch((e=>{this.notifyChange("updating"),n.isAbortError(e)||Q.error(e)}))})),t},o.releaseTile=function(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate()},o._start=function(){if(this._stop(),this._tileManager=new f.TileManager({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new L({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new L({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate()})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t},o._stop=function(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren()},o._getTileData=function(){var t=e._asyncToGenerator((function*(e,t){const i=yield this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),i}));function i(e,i){return t.apply(this,arguments)}return i}(),o._parseTileData=function(){var t=e._asyncToGenerator((function*(e,t){return this._tileHandler.parseTileData(e,t)}));function i(e,i){return t.apply(this,arguments)}return i}(),o._applyStyleChanges=function(){var t=e._asyncToGenerator((function*(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{yield this._tileHandler.updateStyle(e)}catch(n){Q.error("error applying vector-tiles style update",n.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0}const t=this._styleRepository,i=[];e.forEach((e=>{if(e.type!==d.StyleUpdateType.LAYER_REMOVED)return;const s=e.data,r=t.getLayerById(s.layer);r&&i.push(r.uid)}));const s=[];let r;e.forEach((e=>{const i=e.type,a=e.data;switch(i){case d.StyleUpdateType.PAINTER_CHANGED:t.setPaintProperties(a.layer,a.paint),r=a.layer;break;case d.StyleUpdateType.LAYOUT_CHANGED:t.setLayoutProperties(a.layer,a.layout),r=a.layer;break;case d.StyleUpdateType.LAYER_REMOVED:return void t.deleteStyleLayer(a.layer);case d.StyleUpdateType.LAYER_CHANGED:t.setStyleLayer(a.layer,a.index),r=a.layer.id;break;case d.StyleUpdateType.SPRITES_CHANGED:this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(this._newSpriteSource)),this._newSpriteSource=null,r=null}const n=t.getLayerById(r);n&&s.push(n.uid)}));const a=this._vectorTileContainer.children;if(i.length>0){this._vectorTileContainer.deleteStyleLayers(i);for(const e of a)e.deleteLayerData(i)}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.length>0){const e=[];for(const t of a){const i=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:s}))).then((e=>t.setData(e)));e.push(i)}yield Promise.all(e)}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}));function i(){return t.apply(this,arguments)}return i}(),o._loadStyle=function(){var t=e._asyncToGenerator((function*(){const{style:e}=this.layer.currentStyleInfo,t=s.clone(e);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new S(t),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController;const{signal:i}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,t),yield this._tileHandlerPromise}catch(a){if(!n.isAbortError(a))throw a}if(i.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const r=yield this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(r,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}));function i(){return t.apply(this,arguments)}return i}(),o._createVectorTile=function(e){const t=this._tileInfoView.getTileBounds(c.create(),e);return new g.VectorTile(e,t[0],t[3],512,512,this._styleRepository)},o._renderCollisionBoxes=function(e){for(const t of this._vectorTileContainer.children)if(t.symbols){const i=[];for(const[e,s]of t.symbols)i.push(...s);C.drawColliders(e,i)}},r}(D.LayerView2DMixin(m));function U(e){if(a.isNone(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}t.__decorate([o.property()],w.prototype,"_fetchQueue",void 0),t.__decorate([o.property()],w.prototype,"_parseQueue",void 0),t.__decorate([o.property()],w.prototype,"_isTileHandlerReady",void 0),t.__decorate([o.property()],w.prototype,"fading",void 0),w=t.__decorate([y.subclass("esri.views.2d.layers.VectorTileLayerView2D")],w);return w}));