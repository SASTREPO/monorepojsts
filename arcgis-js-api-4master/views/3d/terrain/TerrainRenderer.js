/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/Accessor","../../../core/maybe","../../../core/ObjectPool","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../chunks/vec4f64","../../../geometry/support/aaBoundingBox","../../../geometry/support/buffer/BufferView","../../../support/requestImageUtils","../../ViewingMode","./interfaces","./LayerClass","./Overlay","./OverlayRenderer","./PatchGeometryFactory","./PatchRenderData","./RenderOrder","./ScaleRangeQueries","./TerrainConst","./TileRenderer","./TileUpdate","./tileUtils","../webgl-engine/collections/Component/ComponentIntersectionData","../webgl-engine/core/shaderLibrary/ShaderOutputOptions","../webgl-engine/core/shaderLibrary/Slice.glsl","../webgl-engine/core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../webgl-engine/core/shaderLibrary/util/View.glsl","../webgl-engine/lib/basicInterfaces","../webgl-engine/lib/glUtil3D","../webgl-engine/lib/Intersector","../webgl-engine/lib/IntersectorInterfaces","../webgl-engine/lib/Material","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","../webgl-engine/lib/screenSizePerspectiveUtils","../webgl-engine/lib/VertexAttribute","../webgl-engine/lib/verticalOffsetUtils","../webgl-engine/materials/internal/MaterialUtil","../webgl-engine/shaders/TerrainTechnique","../../webgl/enums"],(function(e,t,r,i,n,s,a,o,l,d,c,u,h,p,f,g,T,R,y,_,b,v,O,m,S,x,D,A,E,P,I,k,C,N,M,q,w,L,U,G,B,F,H,z,V,W,Q,j,Y,Z,K){"use strict";const X=7,J=10,$=T.create(),ee=g.create();let te=function(t){function i(e){var r;return(r=t.call(this,e)||this).type=F.IntersectorType.TERRAIN,r.isGround=!0,r.tileSize=256,r.rctx=null,r._isTransparent=!1,r._scaleRangeQueries=new A.ScaleRangeQueries,r.renderDataPool=new s(x.PatchRenderData),r._patchGroups=new Map,r.patchGroupsDirty=!0,r.tileIterator=new k.IteratorPreorder,r.highestVisibleLODTile=null,r.visible=!0,r._opaque=!0,r._skirtScale=1,r._velvetOverground=!0,r.castShadows=!0,r._ssrEnabled=!1,r.emptyTex=null,r.tileRenderer=null,r.tileBackgroundInitialized=!1,r.tileBackgroundUpdating=!1,r.stencilEnabledLayerExtents=[],r.numTilesRendered=0,r.numTilesCulled=0,r.numOriginsRendered=0,r.overlayOpacity=1,r.needsHighlight=!1,r.renderOccludedFlags=H.RenderOccludedFlag.Occlude,r}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){const e=[V.RenderSlot.OPAQUE_TERRAIN,V.RenderSlot.TRANSPARENT_TERRAIN,V.RenderSlot.OCCLUDED_TERRAIN];this.stage.addRenderPlugin(e,this)},a.destroy=function(){this.stage.removeRenderPlugin(this),S.clearCaches()},a.setDebugScreenSizePerspective=function(e){this.shaderTechniqueConfig.screenSizePerspective!==e&&(this.shaderTechniqueConfig.screenSizePerspective=e,this.setNeedsRender())},a.setRootTiles=function(e){this._rootTiles=e,this.setNeedsRender()},a.setNeedsHighlight=function(e){this.needsHighlight=e,this.setNeedsRender()},a.setRenderOccludedOverlay=function(e){this.renderOccludedFlags=e?m.overlayRenderOccludedFlag:H.RenderOccludedFlag.Occlude,this.setNeedsRender()},a.setStencilEnabledLayerExtents=function(e){this.stencilEnabledLayerExtents=e,this.setNeedsRender()},a.setTileSize=function(e){this.tileSize=e,this.tileRenderer&&(this.tileRenderer.tileSize=e),this.setNeedsRender()},a.loadTile=function(e){e.renderData||(e.renderData=this.renderDataPool.acquire(),e.renderData.init(e),e.renderData.localOrigin=this._getLocalOriginOfTile(e)),this.updateTileGeometry(e),this.updateTileTexture(e,I.TileUpdate.TEXTURE_FADING)},a.queryVisibleLevelRange=function(e,t,r,i){this._scaleRangeQueries.queryVisibleLevelRange(e,t,r,i),this.setNeedsRender()},a.updateTileTexture=function(e,t){this.tileRenderer&&this.tileBackgroundInitialized&&(this.tileRenderer.updateTileTexture(e,t===I.TileUpdate.TEXTURE_FADING?b.TextureUpdate.FADING:b.TextureUpdate.UNFADED),this.setNeedsRender(),e.resetPendingUpdate(t))},a.updateTileGeometry=function(e){for(const t of e.layerInfo[v.LayerClass.ELEVATION])t.pendingUpdates&=~I.TileUpdate.GEOMETRY;e.resetPendingUpdate(I.TileUpdate.GEOMETRY),e.renderData.updateGeometry(this.rctx,this.wireframe)&&this.setNeedsRender()},a.unloadTile=function(e){e.renderData&&(e.renderData.releaseGeometry()&&this.setNeedsRender(),this.renderDataPool.release(e.renderData),e.renderData.clear(),e.renderData=null,e.setMemoryDirty(),this.setNeedsRender())},a._getLocalOriginOfTile=function(e){const t=J-X,r=Math.max(0,Math.floor((e.level-t)/X)*X);if(this.isGlobal&&0===r)return f.ZEROS;for(;e.parent&&e.level>r;)e=e.parent;return e.centerAtSeaLevel},a.setVisibility=function(e){this.visible=e,this.setNeedsRender()},a.getStats=function(){return{numTilesRendered:this.numTilesRendered,numTilesCulled:this.numTilesCulled,numOriginsRendered:this.numOriginsRendered}},a.setNeedsRender=function(e=U.RenderRequestType.UPDATE){this.patchGroupsDirty=!0,this.context.requestRender(e)},a.setTileBackground=function(e){this.tileBackground=e,this._updateTileBackground()},a.initializeRenderContext=function(e){this.context=e,this.rctx=e.renderContext.rctx,this.shaderTechniques=e.shaderTechniqueRepository,this.shaderTechniqueConfig=new Z.TerrainTechniqueConfiguration,this.tileRenderer=new P.TileRenderer(this.rctx,this.tileSize,this.shaderTechniques),this.tileBackground&&this._updateTileBackground(),this.emptyTex=G.createEmptyTexture(this.rctx)},a.uninitializeRenderContext=function(){null!=this.emptyTex&&(this.emptyTex.dispose(),this.emptyTex=null),this.tileRenderer&&(this.tileRenderer.dispose(),this.tileRenderer=null)},a.intersect=function(e,t,r,i){if(!this._rootTiles||e.options.selectOpaqueTerrainOnly&&e.options.selectionMode&&!this._opaque)return;const s=ae,a=oe;p.subtract(s,i,r),p.set(a,1/s[0],1/s[1],1/s[2]);const o=e.results.min,l=e.results.max,d=e.results.ground,c=e.options.store===F.StoreResults.MIN,u=!!e.results.ground.target,f=j.getVerticalOffsetTerrain(e.verticalOffset),g=this._skirtScale,y=e.tolerance;let _,b=c&&n.isSome(o.dist)?o.dist:1/0;const v=u=>{const v=u.renderData;if(null==v)return;const O=v.geometryInfo;T.set($,O.boundingBox);const m=v.localOrigin;n.isSome(f)&&(f.localOrigin=m,f.applyToAabb($));const x=-g*O.skirtLength;if(0!==x){const e=u.up;T.expandWithOffset($,x*e[0],x*e[1],x*e[2])}const D=$;if(le[0]=r[0]-m[0],le[1]=r[1]-m[1],le[2]=r[2]-m[2],!Y.intersectAabbInvDirBefore(D,le,a,y,b))return;const A=(e,t,r)=>{e.set(this.type,u,t,r,h.IDENTITY),b=c&&n.isSome(o.dist)?o.dist:1/0},E=(a,c)=>{if(n.isSome(c)&&a>=0&&(e.options.backfacesTerrain||p.dot(c,s)<0)&&(e.options.invisibleTerrain||!e.options.selectionMode||null==t||t(r,i,a))){if((null==d.dist||a<d.dist)&&A(d,a,c),e.options.isFiltered)return;e.options.store===F.StoreResults.ALL&&(n.isNone(_)?(_=B.newIntersectorResult(e.ray),A(_,a,c),e.results.all.push(_)):a<_.dist&&A(_,a,c)),(null==o.dist||a<o.dist)&&A(o,a,c),e.options.store!==F.StoreResults.MIN&&(null==l.dist||a>l.dist)&&A(l,a,c)}},P=de;p.subtract(P,i,m);const I=O.indices,k=O.vertexAttributes,N={data:k.getField(Q.VertexAttribute.POSITION,R.BufferViewVec3f).typedBuffer,size:3,stride:k.stride/4},M=O.numWithoutSkirtIndices/3;if(!n.isSome(f)&&M>C.componentMinimalSizeForIntersectionData){const e=u.renderData;n.isSome(e.intersectionData)||(e.intersectionData=new C.ComponentIntersectionData(I,0,M,N)),e.intersectionData.intersectRay({r0:le,r1:P},E)}else Y.intersectTriangles(le,P,0,M,I,N,null,f,E);if(0!==x){const e=I.length/3;if(this.isGlobal){const t=e-M;if(!n.isSome(f)&&t>C.componentMinimalSizeForIntersectionData){const r=u.renderData;if(!n.isSome(r.skirtIntersectionData)){const i=S.getGlobalSkirtGeometry(I,M,e,k,x,m);r.skirtIntersectionData=new C.ComponentIntersectionData(i.indices,0,t,{data:i.vertices,stride:3})}r.skirtIntersectionData.intersectRay({r0:le,r1:P},E)}else S.intersectSkirtsGlobal(le,P,M,e,I,k,x,m,f,E)}else S.intersectSkirtsLocal(le,P,M,e,I,k,x,f,E)}},O=this._rootTiles;if(n.isSome(O)){(()=>{const t=this.tileIterator;t.reset(O);const i=e.options.invisibleTerrain;for(;!t.done;){const e=t.next();!(e.visible||i&&e.intersectsClippingArea)||!n.isSome(f)&&!e.intersectsRay(r,s,y,b,g)||u&&this._useStencilForTile(e)?t.skipSubtree():v(e)}})()}},a.prepareTechnique=function(e){if(e.slot===V.RenderSlot.OCCLUDED_TERRAIN){if(0==(e.renderOccludedMask&m.overlayRenderOccludedFlag))return null}else{const t=this.opaque?V.RenderSlot.OPAQUE_TERRAIN:V.RenderSlot.TRANSPARENT_TERRAIN;if(e.slot!==t)return null}switch(e.pass){case z.RenderPass.MATERIAL:{const t=e.shadowMap&&e.shadowMap.enabled;this.shaderTechniqueConfig.receiveShadows!==t&&(this.shaderTechniqueConfig.receiveShadows=t);const r=this.overlayRenderer.isEmpty()?w.OverlayMode.Disabled:this.overlayRenderer.hasWater?w.OverlayMode.EnabledWithWater:w.OverlayMode.Enabled;this.shaderTechniqueConfig.overlayMode!==r&&(this.shaderTechniqueConfig.overlayMode=r);const i=e.slot===V.RenderSlot.OCCLUDED_TERRAIN?O.OverlaySource.Occluded:O.OverlaySource.ColorAndWater;return this._updateTechnique(N.ShaderOutput.Color,i===O.OverlaySource.Occluded)}case z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL:case z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:return this.castShadows&&1===e.scenelightingData.globalFactor?this._updateTechnique(N.ShaderOutput.Shadow,!1):null;case z.RenderPass.MATERIAL_DEPTH:return this.isTransparent&&this.overlayRenderer.isEmpty()?null:this._updateTechnique(N.ShaderOutput.Depth,!1);case z.RenderPass.MATERIAL_NORMAL:return this._updateTechnique(N.ShaderOutput.Normal,!1);case z.RenderPass.MATERIAL_HIGHLIGHT:return this.needsHighlight?this._updateTechnique(N.ShaderOutput.Highlight,!1):null}return null},a.render=function(e,t){const r=e.pass,i=1===e.scenelightingData.globalFactor;switch(this._updatePatchGroups(),t.useStencil=!1,r){case z.RenderPass.MATERIAL:{const r=e.slot===V.RenderSlot.OCCLUDED_TERRAIN?O.OverlaySource.Occluded:O.OverlaySource.ColorAndWater;this._renderMaterialPass(e,t,r);break}case z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL:case z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:this.castShadows&&i&&this._renderAuxiliaryPass(e,t,O.OverlaySource.None);break;case z.RenderPass.MATERIAL_DEPTH:this.isTransparent&&this.overlayRenderer.isEmpty()||this._renderAuxiliaryPass(e,t,O.OverlaySource.None);break;case z.RenderPass.MATERIAL_NORMAL:this._renderAuxiliaryPass(e,t,O.OverlaySource.None);break;case z.RenderPass.MATERIAL_HIGHLIGHT:this.needsHighlight&&(this._renderAuxiliaryPass(e,t,O.OverlaySource.Highlight),e.rctx.clearSafe(K.ClearBufferBit.DEPTH_BUFFER_BIT))}this._scaleRangeQueries.hasPendingQueries()&&this.setNeedsRender()},a._renderMaterialPass=function(e,t,r){const{rctx:i,camera:n}=e;this._ssrEnabled=e.ssrParams.ssrEnabled;const s=i.useTechnique(t,e.slot);this.shaderTechniqueConfig.overlayMode!==w.OverlayMode.Disabled&&r===O.OverlaySource.ColorAndWater&&e.ssrParams&&q.bindSSRUniforms(s,e.ssrParams),e.shadowMap.bind(s),e.ssaoHelper.bind(s,e.camera),this._bindOverlayData(s,r),s.setUniformMatrix4fv("viewNormal",n.viewInverseTransposeMatrix),L.bindProjectionMatrix(s,n.projectionMatrix),e.scenelightingData.setUniforms(s,!0,!1);const a=n.viewMatrix;p.set(se,a[12],a[13],a[14]),p.normalize(se,se),s.setUniform3fv("viewDirection",se),this.numTilesRendered=0,this.numTilesCulled=0,this.numOriginsRendered=0,this._scaleRangeQueries.prepareQueries(),this.opaque?this._renderPatchGroups(e,t,r):e.offscreenRenderingHelper.renderToTargets((()=>this._renderPatchGroups(e,t,r)),e.offscreenRenderingHelper.tmpColor,e.offscreenRenderingHelper.mainDepth,[0,0,0,0]),this._scaleRangeQueries.processQueries()},a._renderAuxiliaryPass=function(e,t,r){const i=e.rctx.useTechnique(t,e.slot);if(e.pass===z.RenderPass.MATERIAL_HIGHLIGHT){const t=e.offscreenRenderingHelper;i.bindTexture(t.depthTexture,"depthTex"),i.setUniform4f("highlightViewportPixelSz",0,0,1/t.width,1/t.height)}else i.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),e.pass!==z.RenderPass.MATERIAL_DEPTH&&e.pass!==z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL&&e.pass!==z.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT||i.setUniform2fv("nearFar",e.camera.nearFar);this._renderPatchGroupsAuxiliary(e,t,r)},a._updateTileBackground=function(){if(!this.tileRenderer)return;this.tileBackgroundUpdating=!0;const e=()=>{this.tileBackgroundInitialized=!0,this.tileBackgroundUpdating=!1,this.shaderTechniqueConfig.useGrid=this.tileRenderer.backgroundIsGrid,this.shaderTechniqueConfig.hasBackgroundColor=!this.tileRenderer.backgroundIsGrid&&!!n.isSome(this.tileRenderer.backgroundColor),this.allTiles.forAll((e=>this.tileRenderer.updateTileTexture(e,b.TextureUpdate.FADING))),this.setNeedsRender()};if("string"==typeof this.tileBackground){const t=this.tileBackground;y.requestImage(t).then((r=>{t===this.tileBackground&&this.tileRenderer&&(this.tileRenderer.setBackground(r,this.tileBackground===E.DEFAULT_TILE_BACKGROUND),e())}))}else{const t=this.tileBackground?r.toUnitRGBA(this.tileBackground):[0,0,0,0];this.tileRenderer.setBackground(t,!1),e()}},a._updatePatchGroups=function(){if(this.patchGroupsDirty){if(this.highestVisibleLODTile=null,this._rebuildPatchGroups(),this.renderOrder!==D.RenderOrder.NONE){const e=Array.from(this._patchGroups.values());e.forEach((e=>k.sortTiles(this.renderOrder,e))),e.sort(((e,t)=>k.compareTiles(e[0],t[0],this.renderOrder))),this._patchGroups=new Map(e.map((e=>[e[0].renderData.localOrigin,e])))}this.patchGroupsDirty=!1}},a._rebuildPatchGroups=function(){const e=this._rootTiles;if(!n.isNone(e)){this._patchGroups.clear();for(const t of e)this._rebuildPatchGroupsForRootTile(t)}},a._rebuildPatchGroupsForRootTile=function(e){const t=this.tileIterator;for(t.resetOne(e);!t.done;){const e=t.next(),r=e.renderData;if(!r||e.visible)if(e.rendered){if(r){const i=this._patchGroups.get(r.localOrigin)||new Array;this._patchGroups.set(r.localOrigin,i),i.push(e),(!this.highestVisibleLODTile||e.vlevel>this.highestVisibleLODTile.vlevel)&&(this.highestVisibleLODTile=e),t.skipSubtree()}}else this.numTilesCulled++;else this.numTilesCulled++,t.skipSubtree()}},a._useStencilForTile=function(e){for(const t of this.stencilEnabledLayerExtents)if(e.intersectsExtent(t))return!0;return!1},a._renderPatchGroupsAuxiliary=function(e,t,r){t.program.setUniformMatrix4fv("proj",e.camera.projectionMatrix),t.program.setUniform1f("skirtScale",this._skirtScale),r!==O.OverlaySource.None&&this._bindOverlayData(t.program,r);const i=this.stencilEnabledLayerExtents.length>0;this._patchGroups.forEach((n=>{const s=n[0].renderData.localOrigin;this._bindPatchGroupData(t.program,s,e.camera.eye,e.camera.viewMatrix);for(let a=0;a<n.length;a++)this._renderPatch(e,t,n[a],K.PrimitiveType.TRIANGLES,i,r)})),e.rctx.bindVAO(null)},a._renderPatchGroups=function(e,t,r){const i=e.rctx,s=e.camera,a=s.viewMatrix,o=t.program;if(this.shaderTechniqueConfig.screenSizePerspective&&this.pointsOfInterest){const e=W.getSettings(this.stage.viewingMode,this.ellipsoidRadius),t=this.pointsOfInterest.centerOnSurfaceFrequent.distance;e.update({distance:t,fovY:s.fovY}),Y.bindScreenSizePerspective(e,o,"screenSizePerspective")}const l=this.stencilEnabledLayerExtents.length>0,d=r===O.OverlaySource.Occluded;d&&(o.bindTexture(this.emptyTex,"tex"),o.setUniform1f("blend",1),o.setUniform4fv("texOffsetAndScale",g.ZEROS));const c=n.isSome(this.tileRenderer.backgroundColor)?this.tileRenderer.backgroundColor:f.ZEROS;this.shaderTechniqueConfig.hasBackgroundColor&&o.setUniform3fv("backgroundColor",c);const u=d?0:this._skirtScale;o.setUniform1f("skirtScale",u);const h=this.wireframe?K.PrimitiveType.LINES:K.PrimitiveType.TRIANGLES;this.shaderTechniqueConfig.textureFadingEnabled&&o.bindTexture(this.emptyTex,"texNext"),this._patchGroups.forEach((i=>{const c=i[0].renderData.localOrigin;this._bindPatchGroupData(o,c,s.eye,a);const u=e.sliceHelper&&e.sliceHelper.plane;M.bindSliceUniforms(o,t.configuration,u,{origin:c}),e.shadowMap&&e.shadowMap.bindView(o,c),this.numOriginsRendered++;for(let s=0;s<i.length;s++){const a=i[s],c=a.renderData.textureReference;if(!n.isNone(c)){if(!d){this._scaleRangeQueries.scaleQueriesForTile(a),ie(a.renderData.geometryInfo.uvOffsetAndScale,c.offsetAndScale,ee),o.setUniform4fv("texOffsetAndScale",ee),o.bindTexture(c.texture.texture,"tex");const e=a.renderData.textureFadeFactor,t=e<1?a.renderData.nextTextureReference:null;this.shaderTechniqueConfig.textureFadingEnabled&&n.isSome(t)&&e<1?(ie(a.renderData.geometryInfo.uvOffsetAndScale,t.offsetAndScale,ee),o.setUniform1f("fadeFactor",e),o.setUniform4fv("nextTexOffsetAndScale",ee),o.setUniform3fv("nextTexOpacities",t.opacities),o.bindTexture(t.texture.texture,"texNext")):o.setUniform1f("fadeFactor",1),a.renderData.textureIsFading&&this.setNeedsRender(),o.setUniform3fv("textureOpacities",c.opacities)}this._renderPatch(e,t,a,h,l,r),a.renderOrder=this.numTilesRendered,this.numTilesRendered++}}})),i.bindVAO(null)},a._renderPatch=function(e,t,r,i,s,a){if(n.isNone(r.renderData.vao.indexBuffer))return;const o=t.program;a!==O.OverlaySource.None&&this._bindOverlayPatchData(o,r.renderData.overlay),s&&(t.useStencil=this._useStencilForTile(r),t.bindPipelineState(e.rctx,e.slot));const l=0===this._skirtScale?r.renderData.geometryInfo.numWithoutSkirtIndices:r.renderData.vao.indexBuffer.size;e.rctx.bindVAO(r.renderData.vao),o.assertCompatibleVertexAttributeLocations(r.renderData.vao),e.rctx.drawElements(i,l,r.renderData.vao.indexBuffer.indexType,0)},a._bindPatchGroupData=function(e,t,r,i){e.setUniform3fv("origin",t),u.translate(ne,i,t),e.setUniformMatrix4fv("view",ne),e.setUniform3f("cameraPosition",r[0]-t[0],r[1]-t[1],r[2]-t[2])},a._bindOverlayData=function(e,t){if(this.shaderTechniqueConfig.overlayMode===w.OverlayMode.Disabled)return;e.setUniform1f("overlayOpacity",this.overlayOpacity);const r=this.overlayRenderer.overlays;if(r.length>b.OverlayIndex.INNER){const i=r[b.OverlayIndex.INNER],s=i.getColorTexture(t);if(e.bindTexture(n.isSome(s)?s:this.emptyTex,"ovColorTex"),this.shaderTechniqueConfig.overlayMode===w.OverlayMode.EnabledWithWater){const r=i.getNormalTexture(t);e.bindTexture(n.isSome(r)?r:this.emptyTex,"ovWaterTex")}}},a._bindOverlayPatchData=function(e,t){e.setUniform4fv("overlayTexOffset",t.offsets),e.setUniform4fv("overlayTexScale",t.scales)},a._updateTechnique=function(e,t){return this.shaderTechniqueConfig.output=e,e===N.ShaderOutput.Color&&(this.shaderTechniqueConfig.atmosphere=this.isGlobal&&this._velvetOverground,this.shaderTechniqueConfig.ssrEnabled=this._ssrEnabled),this.shaderTechniqueConfig.renderOccluded=t,this.shaderTechniqueConfig.stencilEnabled=!1,this._shaderTechnique=this.shaderTechniques.releaseAndAcquire(Z.TerrainTechnique,this.shaderTechniqueConfig,this._shaderTechnique),this._shaderTechnique},e._createClass(i,[{key:"isGlobal",get:function(){return this.stage.viewingMode===_.ViewingMode.Global}},{key:"updating",get:function(){return!this.tileBackgroundInitialized||this.tileBackgroundUpdating}},{key:"canRender",get:function(){return this.visible&&!!this._rootTiles&&this.tileBackgroundInitialized&&!this.renderingDisabled}},{key:"renderingDisabled",set:function(e){this._set("renderingDisabled",!!e),this.setNeedsRender()}},{key:"opaque",get:function(){return this._opaque&&!this.shaderTechniqueConfig.slicePlaneEnabled},set:function(e){this._opaque!==e&&(this._opaque=e,this.setNeedsRender())}},{key:"needsLinearDepth",get:function(){return this.overlayRenderer.hasWater}},{key:"isTransparent",get:function(){return this._isTransparent},set:function(e){this._isTransparent!==e&&(this._isTransparent=e,this.setNeedsRender())}},{key:"skirtScale",get:function(){return this._skirtScale},set:function(e){e!==this._skirtScale&&(this._skirtScale=e,this.setNeedsRender())}},{key:"renderPatchBorders",get:function(){return!!this.shaderTechniqueConfig.tileBorders},set:function(e){this.shaderTechniqueConfig.tileBorders!==e&&(this.shaderTechniqueConfig.tileBorders=e,this.setNeedsRender(),this.notifyChange("renderPatchBorders"))}},{key:"cullBackFaces",get:function(){return this.shaderTechniqueConfig.backfaceCullingEnabled},set:function(e){this.shaderTechniqueConfig.backfaceCullingEnabled!==e&&(this.shaderTechniqueConfig.backfaceCullingEnabled=e,this.notifyChange("cullBackFaces"),this.setNeedsRender())}},{key:"renderOrder",set:function(e){this._set("renderOrder",e),this.setNeedsRender()}},{key:"velvetOverground",set:function(e){this._velvetOverground!==e&&(this._velvetOverground=e,this.setNeedsRender())}},{key:"layerUid",get:function(){return j.TERRAIN_ID}},{key:"slicePlaneEnabled",get:function(){return this.shaderTechniqueConfig.slicePlaneEnabled},set:function(e){this.shaderTechniqueConfig.slicePlaneEnabled!==e&&(this.shaderTechniqueConfig.slicePlaneEnabled=e,this.setNeedsRender())}},{key:"textureFadingEnabled",set:function(e){this.shaderTechniqueConfig.textureFadingEnabled!==e&&(this.shaderTechniqueConfig.textureFadingEnabled=e,this.setNeedsRender())}},{key:"wireframe",set:function(e){this._get("wireframe")!==e&&(this._set("wireframe",e),this.allTiles.forAll((t=>{var r;return null==(r=t.renderData)?void 0:r.updateGeometry(this.rctx,e)})),this.setNeedsRender())}},{key:"test",get:function(){return{tileRenderer:this.tileRenderer}}}]),i}(i);t.__decorate([a.property()],te.prototype,"tileBackgroundInitialized",void 0),t.__decorate([a.property()],te.prototype,"tileBackgroundUpdating",void 0),t.__decorate([a.property({constructOnly:!0})],te.prototype,"overlayRenderer",void 0),t.__decorate([a.property({constructOnly:!0})],te.prototype,"stage",void 0),t.__decorate([a.property({readOnly:!0})],te.prototype,"isGlobal",null),t.__decorate([a.property({constructOnly:!0})],te.prototype,"allTiles",void 0),t.__decorate([a.property({constructOnly:!0})],te.prototype,"ellipsoidRadius",void 0),t.__decorate([a.property({readOnly:!0})],te.prototype,"updating",null),t.__decorate([a.property({value:!1})],te.prototype,"renderingDisabled",null),t.__decorate([a.property()],te.prototype,"renderPatchBorders",null),t.__decorate([a.property()],te.prototype,"cullBackFaces",null),t.__decorate([a.property({value:D.RenderOrder.FRONT_TO_BACK})],te.prototype,"renderOrder",null),t.__decorate([a.property()],te.prototype,"wireframe",null),te=t.__decorate([c.subclass("esri.views.3d.terrain.TerrainRenderer")],te);const re=te;function ie(e,t,r){r[0]=e[0]*t[2]+t[0],r[1]=e[1]*t[3]+t[1],r[2]=e[2]*t[2],r[3]=e[3]*t[3]}const ne=h.create(),se=f.create(),ae=f.create(),oe=f.create(),le=f.create(),de=f.create();return re}));