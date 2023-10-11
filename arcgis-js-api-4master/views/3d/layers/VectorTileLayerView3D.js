/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../2d/engine/vectorTiles/SchemaHelper","../../2d/engine/vectorTiles/TileHandler3D","../../2d/engine/vectorTiles/VTLPainter3D","../../2d/engine/vectorTiles/style/StyleRepository","./LayerView3D","./TiledLayerView3D","../terrain/terrainUtils","../../layers/LayerView"],(function(e,t,i,r,l,s,n,o,a,h,c,d,p,y,u,f,m,_,g){"use strict";let v=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).type="vector-tile-3d",e}e._inheritsLoose(n,t);var o=n.prototype;return o.initialize=function(){if(r.isNone(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new i("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:e,spatialReference:t,pixelRatio:n,viewingMode:o}=this.view,a="local"===o&&!_.vtlAssumes256PixelSizeAsDefault(t)||_.test.force512VTL,h=this.layer.tileInfo.spatialReference.isGeographic,c=a?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,h?1:2),f=this._getTileInfoSupportError(c,this.layer.fullExtent);if(r.isSome(f))return this.addResolvingPromise(Promise.reject(f));const m=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const t=e.tilingScheme,i=t.pixelSize;let r;if(this.schemaHelper=new d.SchemaHelper(i,e.spatialReference.isGeographic),256===i){const e=this.layer.tileInfo.spatialReference.isGeographic;r=this.layer.tileInfo.getOrCreateCompatible(256,e?1:2)}else r=this.view.spatialReference.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const l=this._getTileInfoCompatibilityError(r,t);if(l)throw l;this.tileInfo=r}));this._tileHandlerController=new AbortController;const g=this.view.resourceController;this._memCache=g.memoryController.newCache(this.layer.uid,(e=>{e.release()}));const{style:v}=this.layer.currentStyleInfo,C=new u(v),w=e.mapTileRequester;this._tileHandler=new p(this.layer,C,n,this._memCache,w);const H=this._tileHandlerController.signal,T=e=>g.schedule(e),b=this._tileHandler.start({signal:H,schedule:T}),R=this._tileHandler.spriteMosaic;R.then((e=>{!l.isAborted(H)&&this._tileHandler&&(this.painter=new y(e,this._tileHandler.glyphMosaic))})),b.then((()=>this._tileHandlerController=null));const S=()=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const{style:e}=this.layer.currentStyleInfo,t=new u(e),i=new p(this.layer,t,n,this._memCache,w),r=i.start({signal:this._tileHandlerController.signal,schedule:T}),l=i.spriteMosaic;r.then((()=>this._tileHandlerController=null)),this.updatingHandles.addPromise(Promise.all([r,l]).then((([,e])=>{const t=this._tileHandler,r=this.painter;this.painter=new y(e,i.glyphMosaic),this._tileHandler=i,this.emit("data-changed"),t.destroy(),r&&r.dispose()})))};this.updatingHandles.add((()=>[this.layer.currentStyleInfo,this.view.pixelRatio]),S);const I=Promise.all([m,b,R]);this.addResolvingPromise(I)},o.destroy=function(){this.painter=r.disposeMaybe(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),r.destroyMaybe(this._tileHandler),this._memCache=r.destroyMaybe(this._memCache),this._tileHandler=null},o.fetchTile=function(){var t=e._asyncToGenerator((function*(e,t,i,r){return this._tileHandler.getVectorTile(e,t,i,r)}));function i(e,i,r,l){return t.apply(this,arguments)}return i}(),e._createClass(n,[{key:"dataLevelRange",get:function(){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return 1===r.minLevel&&256===this.tileInfo.size[0]&&(r.minLevel=0),r}}]),n}(m.TiledLayerView3D(f.LayerView3D(g)));t.__decorate([n.property()],v.prototype,"layer",void 0),t.__decorate([n.property()],v.prototype,"dataLevelRange",null),t.__decorate([n.property()],v.prototype,"updatingProgressValue",void 0),v=t.__decorate([c.subclass("esri.views.3d.layers.VectorTileLayerView3D")],v);return v}));