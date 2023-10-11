/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/BidiText","../../../../../core/Error","../../../../../core/has","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/set","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/accessorSupport/diffUtils","../../../../../geometry/SpatialReference","../../../engine/webgl/DisplayId","../../../engine/webgl/mesh/MeshData","../../../engine/webgl/mesh/factories/WGLMeshFactory","../../../engine/webgl/mesh/templates/WGLTemplateStore","../../../engine/webgl/util/Matcher","../textUtils","./BaseProcessor","../support/ResourceManagerProxy"],(function(e,t,r,s,i,n,a,o,c,l,u,f,d,h,p,y,g,m,_,b,S,I){"use strict";function w(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function v(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const s in t.data){const e=t.data[s];if(r.message.data[s]=null,a.isSome(e)){const t=e.stride,i=e.indices.slice(0),n=e.vertices.slice(0),o=e.records.slice(0),c={stride:t,indices:i,vertices:n,records:o,metrics:a.applySome(e.metrics,(e=>e.slice(0)))};r.transferList.push(i,n,o),r.message.data[s]=c}}return r}n.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let T=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).type="symbol",e._matchers={feature:null,aggregate:null},e._bufferData=new Map,e._bufferIds=new Map,e}e._inheritsLoose(s,t);var n=s.prototype;return n.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new I(this.remoteClient)},n.destroy=function(){this._resourceManagerProxy.destroy()},n.forEachBufferId=function(e){this._bufferIds.forEach((t=>{t.forEach(e)}))},n.update=function(){var t=e._asyncToGenerator((function*(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const s=d.diff(this._schema,r);d.hasDiff(s,"mesh")&&(i("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",s),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}));function r(e,r){return t.apply(this,arguments)}return r}(),n.onTileMessage=function(e,t,r,s){return o.throwIfAborted(s),this._onTileData(e,t,r,s)},n.onTileClear=function(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})},n.onTileError=function(e,t,r){const s=r.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})},n.onTileUpdate=function(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,v(r),[],!1,!1,null)}))},n._addBufferData=function(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(v(t))},n._createFactory=function(e){const{geometryType:t,objectIdField:r,fields:s}=this.service,i=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),n={geometryType:t,fields:s,spatialReference:h.fromJSON(this.spatialReference)},o=new m.WGLTemplateStore(i,this.tileStore.tileScheme.tileInfo),{matcher:c,aggregateMatcher:l}=e.mesh;return this._store=o,this._matchers.feature=_.createMatcher(c,o,n,this._resourceManagerProxy),this._matchers.aggregate=a.applySome(l,(e=>_.createMatcher(e,o,n,this._resourceManagerProxy))),new g.WGLMeshFactory(t,r,o)},n._onTileData=function(){var t=e._asyncToGenerator((function*(e,t,r,s){o.throwIfAborted(s);const{type:i,addOrUpdate:n,remove:c}=t,l=t.end,u=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:c,clear:!1,end:l,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},s)}const f=this._processFeatures(e,n,r,s);try{const r=yield f;if(a.isNone(r)){const t={type:i,addOrUpdate:null,remove:c,clear:!1,end:l,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},s)}const n=[];for(const t of r){let r=!1;const s=t.message.bufferIds,i=e.key.id,o=t.message.tileKey;if(i!==o&&a.isSome(s)){if(!this.tileStore.get(o)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(o);e||(e=new Set,this._bufferIds.set(o,e));const a=Array.from(s);for(const t of a){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(i,t),n.push(t))}yield o.all(n.map((r=>{const n=e.key.id===r.message.tileKey,a=n?t.remove:[],o=n&&t.end;return this._updateTileMesh(i,e,r,a,o,t.clear,s.signal)})))}catch(d){this._handleError(e,d,s)}}));function r(e,r,s,i){return t.apply(this,arguments)}return r}(),n._updateTileMesh=function(){var t=e._asyncToGenerator((function*(e,t,r,s,i,n,c){const l=e,u=r.message.tileKey,f=!!this._schema.mesh.sortKey;u!==t.key.id&&(i=!1);const d=a.applySome(r,(e=>e.message)),h=a.applySome(r,(e=>e.transferList))||[],p={type:l,addOrUpdate:d,remove:s,clear:!1,end:i,sort:f},y={transferList:a.unwrap(h)||[],signal:c};return o.throwIfAborted(y),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:u,data:p},y)}));function r(e,r,s,i,n,a,o){return t.apply(this,arguments)}return r}(),n._processFeatures=function(){var t=e._asyncToGenerator((function*(e,t,r,s){if(a.isNone(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},n=this._factory,c={viewingMode:"",scale:e.scale},l=yield this._matchers.feature,u=yield this._matchers.aggregate;o.throwIfAborted(s);const f=this._getLabelInfos(e,t);return yield n.analyze(t.getCursor(),this._resourceManagerProxy,l,u,i,c),o.throwIfAborted(s),this._writeFeatureSet(e,t,i,f,n,r)}));function r(e,r,s,i){return t.apply(this,arguments)}return r}(),n._writeFeatureSet=function(e,t,r,s,i,n){const o=t.getSize(),c=new y.MeshData(e.key.id,{features:o,records:o,metrics:0},this._schema.mesh.matcher.stride,n,!0),l={viewingMode:"",scale:e.scale},u=t.getCursor();for(;u.next();)try{const t=u.getDisplayId(),n=a.isSome(s)?s.get(t):null;i.writeCursor(c,u,r,l,e.level,n,this._resourceManagerProxy)}catch(d){}const f=e.tileInfoView.tileInfo.isWrappable;return c.serialize(f)},n._handleError=function(e,t,r){if(!o.isAbortError(t)){const s={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}},n._getLabelingSchemaForScale=function(e){const t=this._schema.mesh.labels;if(a.isNone(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let s=!1;for(const i in t.classes){const n=t.classes[i].filter((t=>w(t,e.scale)));s=s||!!n.length,r.classes[i]=n}return s?r:null}const r=t.classes.filter((t=>w(t,e.scale)));return r.length?{type:"simple",classes:r}:null},n._getLabels=function(e,t){if("subtype"===t.type){var r;const s=this.service.subtypeField,i=a.unwrapOrThrow(s,"Expected to find subtype Field"),n=e.readAttribute(i);return null==n?[]:null!=(r=t.classes[n])?r:[]}return t.classes},n._getLabelInfos=function(e,t){const s=this._getLabelingSchemaForScale(e);if(a.isNone(s))return null;const i=new Map,n=t.getCursor();for(;n.next();){const e=n.getDisplayId(),t=[],a=p.isAggregateId(e),o=a&&1!==n.readAttribute("cluster_count")?"aggregate":"feature",c=this._getLabels(n,s);for(const s of c){if(s.target!==o)continue;const i=n.getStorage(),c=a&&"feature"===o?i.getComputedStringAtIndex(n.readAttribute("referenceId"),s.fieldIndex):i.getComputedStringAtIndex(e,s.fieldIndex);if(!c)continue;const l=r.bidiText(c.toString()),u=l[0],f=l[1];this._store.getMosaicItem(s.symbol,b.codepoints(u)).then((e=>{t[s.index]={glyphs:e.glyphMosaicItems,rtl:f,index:s.index}}))}i.set(e,t)}return i},e._createClass(s,[{key:"supportsTileUpdates",get:function(){return!0}}]),s}(S);T=t.__decorate([f.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],T);return T}));