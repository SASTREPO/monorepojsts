/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/BidiText","../../../../core/HandleOwner","../../../../core/has","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/SpatialReference","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/coordsUtils","../../../../geometry/support/jsonUtils","../../../../geometry/support/normalizeUtilsSync","../../../../geometry/support/spatialReferenceUtils","../../../../layers/graphics/data/projectionSupport","../../../../symbols/cim/CIMSymbolHelper","../../../../symbols/support/defaults","../../engine/webgl/definitions","../../engine/webgl/GraphicTile","../../engine/webgl/TileData","../../engine/webgl/WGLDisplayObject","../../engine/webgl/mesh/MeshData","../../engine/webgl/mesh/factories/WGLMeshFactory","../../engine/webgl/mesh/templates/WGLTemplateStore","../../engine/webgl/util/Matcher","../features/schemaUtils","../features/support/AttributeStore","../features/support/ComputedAttributeStorage","../features/support/GraphicsReader","./GraphicStore","./graphicsUtils","../support/cimSymbolUtils","../../../layers/GraphicsView","../../../webgl/capabilities","../features/createSymbolSchema"],(function(e,t,i,s,r,o,n,a,h,l,c,d,p,u,g,_,y,f,m,b,S,T,I,w,v,G,M,U,P,C,A,E,x,R,F,D,L,O,q){"use strict";const z=o("esri-2d-graphic-debug");function k(e,t,i){if(i.has(e))return i.get(e);const s={tile:t,addedOrModified:[],removed:[]};return i.set(e,s),s}let H=function(t){function i(i){var s;return(s=t.call(this,i)||this)._storage=new E.ComputedAttributeStorage,s._displayIds=new Map,s._controller=new AbortController,s._tiles=new Map,s._graphicStoreUpdate=!1,s._graphicsSet=new Set,s._matcher=Promise.resolve(null),s._tileUpdateSet=new Set,s._tilesToUpdate=new Map,s._graphicIdToAbortController=new Map,s._attached=!1,s._updatingGraphicsTimer=null,s._hashToExpandedSymbol=new Map,s._hashToExpandedSymbolPromise=new Map,s._hashToCIMSymbolPromise=new Map,s._hashToCIM=new Map,s._processing=!1,s._needsProcessing=!1,s._pendingUpdate={added:new Set,updated:new Set,removed:new Set},s.lastUpdateId=-1,s.updateRequested=!1,s.graphicUpdateHandler=s.graphicUpdateHandler.bind(e._assertThisInitialized(s)),s}e._inheritsLoose(i,t);var r=i.prototype;return r.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()},r._createMatcher=function(e,t,i){if(e){const s=C.createMatcherSchema({indexCount:0,fields:{}},"feature",e);this._matcher=P.createMatcher(s,t,null,i)}},r._createDisplayId=function(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)},r.initialize=function(){this._attributeStore=new A({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},O.getWebGL1Capabilities()),this.container.hasHighlight=()=>this._attributeStore.hasHighlight;const e=e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},t=e=>{const t=this._displayIds.get(e.uid);this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},i=new U.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo);this._graphicStore=new R(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e,t,this._hashToCIM),this._meshFactory=new M.WGLMeshFactory(null,this.uid,i),this._templateStore=i,this.handles.add([this.watch("renderer",(e=>{this._createMatcher(e,i,this.container.stage.resourceManager);for(const t of this.graphics)this._pendingUpdate.updated.add(t);this.requestUpdate()})),this.view.graphicsTileStore.on("update",(e=>this._onTileUpdate(e))),this.container.on("attach",(()=>{z&&this.container.enableRenderingBounds((()=>this._graphicStore.getAllBounds())),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",(e=>this._graphicsChangeHandler(e))),"graphics");const e=this.container.stage.resourceManager;this._createMatcher(this.renderer,i,e),this._graphicStore.setResourceManager(e),this._attached=!0,this.notifyChange("updating")}))]);const s=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:s,removed:[]})},r.hitTest=function(e){if(!this.view||!this.view.position)return null;const{resolution:t,rotation:i}=this.view.state;return this._graphicStore.hitTest(e.x,e.y,2,t,i)},r.update=function(e){a.throwIfAborted(this._controller.signal);const t=e.state,{resolution:i}=t;if(this._graphicStore.updateLevel(i),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}},r.viewChange=function(){this.requestUpdate()},r.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())},r.processUpdate=function(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))},r.graphicUpdateHandler=function(e){const{graphic:t,property:i,newValue:s}=e;switch(i){case"attributes":case"geometry":case"symbol":this._pendingUpdate.updated.add(t),this.requestUpdate();break;case"visible":this._setFilterState(t.uid,s),this._attributeStore.sendUpdates()}},r.setHighlight=function(e){const t=e.map((e=>this._displayIds.get(e)));this._attributeStore.setHighlight(e,t)},r._getIntersectingTiles=function(e){const t=this._graphicStore.getBounds(e);if(!t||0===u.width(t)||0===u.height(t))return[];const i=F.intersectingInternationalDateline(t,this.view.spatialReference);return n.isSome(i)?[...new Set([...this.view.graphicsTileStore.boundsIntersections(i[0]),...this.view.graphicsTileStore.boundsIntersections(i[1])])]:this.view.graphicsTileStore.boundsIntersections(t)},r._updateTile=function(){var t=e._asyncToGenerator((function*(e){a.throwIfAborted(this._controller.signal);const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified),s=yield this._processGraphics(t,i);return a.throwIfAborted(this._controller.signal),this._patchTile(t.key,{type:"update",addOrUpdate:s,remove:e.removed,end:!0,clear:!1,sort:!1}),s}));function i(e){return t.apply(this,arguments)}return i}(),r._patchTile=function(e,t){if(!this._tiles.has(e))return;const i=this._tiles.get(e);this.container.onTileData(i,t),this.container.requestRender()},r._graphicsChangeHandler=function(e){const t=this._pendingUpdate;for(const i of e.added)t.added.add(i);for(const i of e.moved)t.updated.add(i);for(const i of e.removed)this._pendingUpdate.added.has(i)?t.added.delete(i):t.removed.add(i);this._processing?this._needsProcessing=!0:this._updateGraphics()},r._getGraphicsToUpdate=function(){const e={added:[],removed:[],updated:[]};if(!this.graphics)return e;const t=this._pendingUpdate;for(const i of this.graphics.items)t.added.has(i)?e.added.push(i):t.updated.has(i)&&e.updated.push(i);for(const i of t.removed)this._graphicStore.has(i)&&e.removed.push(i);return t.added.clear(),t.removed.clear(),t.updated.clear(),e},r._updateGraphics=function(){var t=e._asyncToGenerator((function*(){this._processing=!0;const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),s=this._tilesToUpdate;let r;try{if(!this._graphicStoreUpdate){const e=this.view.state,{resolution:t}=e;this._graphicStore.updateLevel(t)}const o=[],n=new Array(e.length+t.length);for(let e=0;e<i.length;e++){const t=i[e],a=this._getIntersectingTiles(t);for(const e of a){r=e.id;k(r,e,s).removed.push(this._displayIds.get(t.uid))}o.push(this._updateGraphic(t,null)),n[e]=t}const a=i.length;for(let t=0;t<e.length;t++){const i=e[t];n[a+t]=i,this._graphicsSet.add(i),o.push(this._addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid);const t=this._getIntersectingTiles(e);for(const i of t){r=i.id;k(r,i,s).removed.push(this._displayIds.get(e.uid))}this._graphicsSet.delete(e),this._graphicStore.remove(e)}let h;this._flipUpdatingGraphics(),yield Promise.all(o);for(let e=0;e<n.length;e++){h=n[e];const t=this._getIntersectingTiles(h);for(const e of t){r=e.id;k(r,e,s).addedOrModified.push(h)}}this._graphicStore.updateZ();const l=[];for(const[e,t]of s)l.push(this._updateTile(t));yield Promise.all(l)}catch(o){a.isAbortError(o),0}for(const n of t)try{const e=yield this._getSymbolForGraphic(n,{});if(e){const t=e.hash();this._hashToExpandedSymbol.delete(t)}}catch(o){a.isAbortError(o),0}s.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}));function i(){return t.apply(this,arguments)}return i}(),r._getArcadeInfo=function(e){const t=(e.attributes?Object.keys(e.attributes):[]).map((t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"})));return n.isNone(e.geometry)?null:{geometryType:_.getJsonType(e.geometry),spatialReference:p.fromJSON(e.geometry.spatialReference),fields:t}},r._getSymbolForGraphic=function(e,t){return a.throwIfAborted(this._controller.signal),n.isSome(e.symbol)?Promise.resolve(e.symbol):n.isSome(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):Promise.resolve(this._getNullSymbol(e))},r._getCIMSymbol=function(e,t,i){let s=this._hashToCIM.get(t);if(s)return Promise.resolve(s);const r=b.symbolToCIM(e);if(n.isSome(r)){if("CIMSymbolReference"===r.type)return s=r,this._hashToCIM.set(t,s),Promise.resolve(s);let e=this._hashToCIMSymbolPromise.get(t);return e||(e=r.fetchCIMSymbol(i).then((e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e))).catch((e=>(this._hashToCIMSymbolPromise.delete(t),a.throwIfAbortError(e),null))),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)},r._expandCIMSymbol=function(e,t,i,s){const r=this._hashToExpandedSymbol.get(i);if(r)return Promise.resolve(r);let o=this._hashToExpandedSymbolPromise.get(i);if(o)return o;const n=this.container.stage,a=this._getArcadeInfo(t),h=C.createSymbolSchemaOptions(null),l=q.createSymbolSchema(e,h);return o=D.expandSymbol(l,a,n.resourceManager,s),this._hashToExpandedSymbolPromise.set(i,o),o.then((e=>(this._hashToExpandedSymbol.set(i,e),this._hashToExpandedSymbolPromise.delete(i),e))),o},r._getSymbolResources=function(){var t=e._asyncToGenerator((function*(e,t){a.throwIfAborted(this._controller.signal);return this.container.stage?this._getSymbolForGraphic(e,t).then((i=>{const r=i.hash();return this._getCIMSymbol(i,r,t).then((i=>n.isNone(i)?null:this._expandCIMSymbol(i,e,r,t).then((e=>{const t=e.layers.filter((e=>"text"===e.type&&"string"==typeof e.text));if(t&&t.length>0){const i=new Array(t.length);for(let e=0;e<t.length;e++){const r=t[e],o=[],[n]=s.bidiText(r.text);for(let e=0;e<n.length;e++)o.push(n.charCodeAt(e));i[e]={symbol:r,id:e,glyphIds:o}}const o=new Map;return this.container.getMaterialItems(i).then((i=>{for(let e=0;e<t.length;e++){const s=t[e];o.set(s.cim,{text:s.text,mosaicItem:i[e].mosaicItem})}return{symbol:e,textInfo:o,hash:r}}))}return{symbol:e,hash:r}}))))})).catch((e=>(a.throwIfAbortError(e),null))):null}));function i(e,i){return t.apply(this,arguments)}return i}(),r._projectAndNormalizeGeometry=function(){var t=e._asyncToGenerator((function*(e,t){if(a.throwIfAborted(this._controller.signal),n.isNone(e.geometry)||"mesh"===e.geometry.type)return null;let i=e.geometry;if(_.isPolygon(i)){const e=i.rings;i.rings=e}else if(_.isPolyline(i)){const e=i.paths;i.paths=e}else if(_.isExtent(i)){const s=yield this._getSymbolForGraphic(e,t);if(a.throwIfAborted(this._controller.signal),F.isMarkerSymbol(s.type)||F.isTextSymbol(s.type)){i=i.center}else i=F.polygonFromExtent(i)}yield m.checkProjectionSupport(i.spatialReference,this.view.spatialReference);const s=y.normalizeCentralMeridianSync(i),r=m.project(s,i.spatialReference,this.view.spatialReference);return g.closeRingsAndFixWinding(r),r}));function i(e,i){return t.apply(this,arguments)}return i}(),r._onTileUpdate=function(e){const t=f.getInfo(this.view.spatialReference);if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t);if(e.removed&&e.removed.length>0)for(const i of e.removed)this._removeTile(i.key)},r._addGraphic=function(){var t=e._asyncToGenerator((function*(e){this._abortProcessingGraphic(e.uid),a.throwIfAborted(this._controller.signal);const t=new AbortController;this._graphicIdToAbortController.set(e.uid,t);const i={signal:t.signal};try{yield this._addOrUpdateGraphic(e,i),a.throwIfAborted(this._controller.signal),this._graphicIdToAbortController.delete(e.uid)}catch(s){if(this._graphicIdToAbortController.delete(e.uid),!a.isAbortError(s))throw s}}));function i(e){return t.apply(this,arguments)}return i}(),r._updateGraphic=function(e,t){a.throwIfAborted(this._controller.signal);const i=this._projectAndNormalizeGeometry(e,t),s=this._getSymbolResources(e,t);return Promise.all([i,s]).then((([t,i])=>{a.throwIfAborted(this._controller.signal),this._graphicStore.addOrModify(e,i,t)}))},r._addOrUpdateGraphic=function(e,t){a.throwIfAborted(this._controller.signal);const i=this._projectAndNormalizeGeometry(e,t),s=this._getSymbolResources(e,t);return Promise.all([i,s]).then((([t,i])=>{a.throwIfAborted(this._controller.signal),this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,i,t)}))},r._addTile=function(e){const t=this.view.featuresTilingScheme.getTileBounds(u.create(),e),i=new I.GraphicTile(e,t[0],t[3]);return this._tiles.set(e,i),this.container.addChild(i),i},r._addNewTile=function(){var t=e._asyncToGenerator((function*(e,t){const i=this._addTile(e.key),s=this._graphicStore.queryTileData(this._templateStore,e);if(0===s.length)return;if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution);for(const e of s)e.geometry&&(_.isPoint(e.geometry)||_.isMultipoint(e.geometry))&&this._wrapPoints(e,i)}const r=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating");try{const t={type:"update",clear:!1,addOrUpdate:yield this._processGraphics(e,s),remove:[],end:!0,sort:!1};i.patch(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")}catch(o){if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!a.isAbortError(o))throw o}}));function i(e,i){return t.apply(this,arguments)}return i}(),r._removeTile=function(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)},r._setFilterState=function(e,t){const i=this._displayIds.get(e),s=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(i,0,0,s|(t?T.FILTER_FLAG_0:0))},r._getGraphicsData=function(e,t,i){const s=this.view,r=f.getInfo(s.spatialReference),o=this._graphicStore.getGraphicsData(e,t,i);if(r){const e=Math.round((r.valid[1]-r.valid[0])/t.resolution);for(const t of o)t.geometry&&(_.isPoint(t.geometry)||_.isMultipoint(t.geometry))&&this._wrapPoints(t,e)}return o},r._wrapPoints=function(e,t){const i=e.geometry;_.isMultipoint(i)?this._wrapMultipoint(i,t):this._wrapPoint(e,t)},r._wrapMultipoint=function(e,t){const i=e.points,s=[];let r=0,o=0;for(const[n,a]of i){if(s.push([n+r,a]),r=0,t===F.TILE_SIZE){const e=5*F.PIXEL_BUFFER;n+o<e?(s.push([t,0]),r=-t):n+o>F.TILE_SIZE-e&&(s.push([-t,0]),r=t)}else n+o<-F.PIXEL_BUFFER?(s.push([t,0]),r=-t):n+o>F.TILE_SIZE+F.PIXEL_BUFFER&&(s.push([-t,0]),r=t);o+=n}e.points=s},r._wrapPoint=function(e,t){const i=e.geometry;if(t===F.TILE_SIZE){const s=5*F.PIXEL_BUFFER;i.x<s?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>F.TILE_SIZE-s&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}else i.x<-F.PIXEL_BUFFER?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>F.TILE_SIZE+F.PIXEL_BUFFER&&(e.geometry={points:[[i.x,i.y],[-t,0]]})},r._processGraphics=function(e,t,i){if(!(t&&t.length)||!this._meshFactory)return null;const s=x.GraphicsReader.from(t),r=this._meshFactory;return this._matcher.then((t=>r.analyzeGraphics(s,this.container.stage.resourceManager,t,null,null,i).then((()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,s))))))},r._processAnalyzedGraphics=function(e,t){const i=this._meshFactory,s=t.getSize(),r=t.getCursor(),o={features:s,records:s,metrics:0},n=new G.MeshData(e.key.id,o,{fill:"default"},!1,!1),a=[];for(;r.next();){const t=r.readGraphic();t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid]);const s=new v(t.displayId);s.insertAfter=t.insertAfter,a.push(s),i.writeGraphic(n,r,e.level,this.container.stage.resourceManager)}const h=e.tileInfoView.tileInfo.isWrappable,l=n.serialize(h);if(1!==l.length)return new w.TileData;const c=l[0].message;return w.TileData.fromVertexData(c,a)},r._abortProcessingGraphic=function(e){if(this._graphicIdToAbortController.has(e)){this._graphicIdToAbortController.get(e).abort()}},r._getNullSymbol=function(e){const t=e.geometry;return _.isPolyline(t)?S.errorPolylineSymbol2D:_.isPolygon(t)||_.isExtent(t)?S.errorPolygonSymbol2D:S.errorPointSymbol2D},r._flipUpdatingGraphics=function(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")},e._createClass(i,[{key:"updating",get:function(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}}]),i}(L.GraphicsView(r.HandleOwnerMixin(i)));t.__decorate([h.property({constructOnly:!0})],H.prototype,"requestUpdateCallback",void 0),t.__decorate([h.property()],H.prototype,"container",void 0),t.__decorate([h.property({constructOnly:!0})],H.prototype,"graphics",void 0),t.__decorate([h.property()],H.prototype,"updating",null),t.__decorate([h.property()],H.prototype,"view",void 0),t.__decorate([h.property()],H.prototype,"updateRequested",void 0),H=t.__decorate([d.subclass("esri.views.2d.layers.support.GraphicsView2D")],H);return H}));