/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/mathUtils","../../../../core/maybe","../../../../core/PooledArray","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/projectionEllipsoid","../../../../geometry/support/aaBoundingRect","../../../../chunks/boundedPlane","../../../../geometry/support/ray","../../../../chunks/sphere","./deconflictorDebug","./enums","../../support/debugFlags","../../webgl-engine/lib/Camera","../../webgl-engine/lib/screenSizePerspectiveUtils","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/HUDMaterial"],(function(i,t,e,s,r,n,c,a,o,l,h,u,p,f,d,g,y,b,v,_,S,m,G,D,B,w,V,N,P,I,C){"use strict";const A=y.create(),M=v.create(),x=v.create(),O=y.create(),E=f.create(),T=D.create(),z=G.create(),F=y.create(),k=S.create();let R=function(){this.aabr=S.create(),this.distance=0,this.culled=!1,this.visible=!1},X=function(i,t,e={}){this.graphics3DGraphic=i,this.slicePlaneEnabled=t,this.info=e},L=function(){function i(){this.active=new Map,this.visible=new Map}return i.prototype.clear=function(){this.active.clear(),this.visible.clear()},i}(),Y=function(){},j=function(){this.sortArray=new c({allocator:i=>i||new Y})};var U;i.State=void 0,(U=i.State||(i.State={}))[U.Idle=0]="Idle",U[U.Process=1]="Process",U[U.Sort=2]="Sort",U[U.Deconflict=3]="Deconflict",U[U.NumStates=4]="NumStates";let W=function(){function i(){this.camera=new N.default,this.slicePlane=m.create(),this.slicePlaneEnabled=!1}return i.prototype.copyFrom=function(i){this.camera.copyFrom(i.camera),m.copy(i.slicePlane,this.slicePlane),this.slicePlaneEnabled=i.slicePlaneEnabled},i}();function H(i,t){const e=i.graphics3DGraphic;e.destroyed||e.clearVisibilityFlag(w.VisibilityFlag.DECONFLICTION,t)}function*Z(i){if(Map.prototype.entries){const t=i.entries();for(let i=t.next();!i.done;i=t.next())yield i.value[1]}else yield*i.values()}function*q(i,t,e){t.clear(),i.forEach(((i,s)=>{const r=t.pushNew();r.id=s,r.prio=i.info?-i.info[e].distance:Number.MAX_VALUE})),yield;const s=t.iterableSort(((i,t)=>t.prio-i.prio));for(let r=s.next();!r.done;r=s.next())yield;t.forAll((t=>{const e=i.get(t.id);e&&(i.delete(t.id),i.set(t.id,e))})),t.clear()}i.Deconflictor=function(e){function s(){var t;return(t=e.apply(this,arguments)||this)._dirty=!1,t._runningViewState=new W,t._state=i.State.Idle,t.graphics=new L,t.iterators=new j,t.accBinsNumX=15,t.accBinsNumY=20,t.accBinsSizeX=0,t.accBinsSizeY=0,t.accBins=null,t.accNumTests=0,t}t._inheritsLoose(s,e);var a=s.prototype;return a.destroy=function(){this.graphics.clear(),this.iterators=null},a.setDirty=function(){!this._dirty&&this.graphics.active.size>0&&(this._dirty=!0,this.notifyChange("updating"))},a.runTask=function(t){switch(this._state){case i.State.Idle:this._startUpdate(),t.madeProgress();case i.State.Process:if(this._state=i.State.Process,!this._processActiveGraphics(t))return;case i.State.Sort:if(this._state=i.State.Sort,!this._sortVisibleGraphics(t))return;case i.State.Deconflict:if(this._state=i.State.Deconflict,!this._deconflictVisibleGraphics(t))return;default:B.drawAccelerationStruct(this,this.graphics.visible),this._state=i.State.Idle,this.notifyChange("updating")}},a.modifyGraphics=function(i,t){t?i.forEach((i=>this.addToActiveGraphics(i))):i.forEach((i=>this.removeFromActiveGraphics(i))),this.setDirty()},a.layerSupportsDeconfliction=function(i){if(n.isNone(i)||"object3d"!==i.type)return!1;const t=i.stageObject;if(1!==(t?t.geometryRecords.length:0))return!1;return t.geometryRecords[0].material instanceof C.HUDMaterial},a._startUpdate=function(){B.prepare(this.view),this._dirty=!1,this._runningViewState.copyFrom(this.viewState);const{fullWidth:i,fullHeight:t}=this._runningViewState.camera;this._initBins(i,t),this._resetIterators()},a.addToActiveGraphics=function(i){i.info[this.visibilityGroup]=new R,this.graphics.active.set(i.graphics3DGraphic.graphic.uid,i),this.setDirty()},a.removeFromActiveGraphics=function(i){this._removeFromVisibleGraphics(i),H(i,this.visibilityGroup),delete i.info[this.visibilityGroup],this.graphics.active.delete(i.graphics3DGraphic.graphic.uid),this.setDirty()},a._addToVisibleGraphics=function(i){this.graphics.visible.set(i.graphics3DGraphic.graphic.uid,i)},a._removeFromVisibleGraphics=function(i){this.graphics.visible.delete(i.graphics3DGraphic.graphic.uid)},a._processActiveGraphics=function(i){const t=this._ensureActiveGraphicsIterator(),e=p.invert(E,this._runningViewState.camera.projectionMatrix),s="global"===this.view.viewingMode&&1===this.view.map.ground.opacity&&this._runningViewState.camera.relativeElevation>0?T:null;let r=0;for(n.isSome(s)&&(g.transformMat4(s,y.ZEROS,this._runningViewState.camera.viewMatrix),s[3]=_.getReferenceEllipsoid(this.view.spatialReference).radius,r=D.distanceToSilhouette(s,y.ZEROS));!i.done;){i.madeProgress();const n=t.next();if(!0===n.done)return this._resetActiveGraphicsIterator(),!0;const c=n.value,a=c&&c.info[this.visibilityGroup];a&&(this._collectGraphics3DGraphics(c,e,s,r),a.culled?this._removeFromVisibleGraphics(c):this._addToVisibleGraphics(c))}return!1},a._sortVisibleGraphics=function(i){const t=this._ensureSortGraphicsIterator();for(;!i.done;){const e=t.next();if(i.madeProgress(),!0===e.done)return this._resetSortGraphicsIterator(),!0}return!1},a._deconflictVisibleGraphics=function(i){const t=this._ensureVisibleGraphicsIterator(),e=this.visibilityGroup===w.VisibilityGroup.LABEL;for(;!i.done;){i.madeProgress();const s=t.next();if(!0===s.done)return this._resetVisibleGraphicsIterator(),!0;const r=s.value,n=r.info[this.visibilityGroup];if(!n||n.culled)continue;const c=r.graphics3DGraphic,a=(!e||c.isVisible())&&!this._isConflicted(r);a&&this._addToBins(r),n.visible=a,this._setGraphicVisibility(r,a),B.drawPoly(n,a)}return!1},a._resetIterators=function(){this.iterators.active=null,this.iterators.visible=null,this.iterators.sort=null},a._ensureActiveGraphicsIterator=function(){return this.iterators.active||(this.iterators.active=Z(this.graphics.active)),this.iterators.active},a._resetActiveGraphicsIterator=function(){this.iterators.active=null},a._ensureVisibleGraphicsIterator=function(){return this.iterators.visible||(this.iterators.visible=Z(this.graphics.visible)),this.iterators.visible},a._resetVisibleGraphicsIterator=function(){this.iterators.visible=null},a._ensureSortGraphicsIterator=function(){return this.iterators.sort||(this.iterators.sort=q(this.graphics.visible,this.iterators.sortArray,this.visibilityGroup)),this.iterators.sort},a._resetSortGraphicsIterator=function(){this.iterators.sort=null},a._collectGraphics3DGraphics=function(i,t,e,s){const r=i.graphics3DGraphic;if(r.destroyed)return;const c=i.info[this.visibilityGroup];if(!r.isVisible(w.VisibilityGroup.GRAPHIC,w.VisibilityFlag.DECONFLICTION))return void(c.culled=!0);const a=this.getGraphicsLayers(r);S.empty(c.aabr);let o=null;for(const l of a){if(!this.layerSupportsDeconfliction(l))continue;const r=l.stageObject.geometryRecords[0].material;if(n.isNone(o)){if(o=this._getProjectionInfo(l,t,K),o.isOutsideScreen||this._isCulledBySlice(i,A)||n.isSome(e)&&this._isCulledByHorizon(o,e,s))return void(c.culled=!0);!V.TESTS_DISABLE_OPTIMIZATIONS&&c.visible&&(o.distance*=.7)}this._expandBoundingRect(c,l,r,o)}n.isNone(o)?c.culled=!0:(c.distance=o.distance,c.culled=!1)},a._getProjectionInfo=function(i,t,e){const s=this._runningViewState.camera,r=i.stageObject,n=r.geometryRecords[0],c=n.material,a=D.getCenter(r.boundingVolumeWorldSpace.bounds);g.transformMat4(A,a,s.viewMatrix);const o=n.geometry.vertexAttributes,l=o.get(I.VertexAttribute.NORMAL).data,h=o.get(I.VertexAttribute.AUXPOS1).data;return c.applyShaderOffsetsView(A,l,r.transformation,h,s,e.scaleInfo,A),b.set(M,A[0],A[1],A[2],1),b.transformMat4(x,M,s.projectionMatrix),g.scale(e.positionNDC,x,1/x[3]),c.applyShaderOffsetsNDC(e.positionNDC,h,s,e.positionNDC,O),e.distanceWithoutPolygonOffset=s.depthNDCToWorld(O[2]),e.distance=O[2]===e.positionNDC[2]?e.distanceWithoutPolygonOffset:s.depthNDCToWorld(e.positionNDC[2]),b.set(x,e.positionNDC[0],e.positionNDC[1],e.positionNDC[2],1),b.transformMat4(M,x,t),b.scale(M,M,1/M[3]),g.set(e.positionView,A[0],A[1],A[2]),e},a._isCulledByHorizon=function(i,t,e){return g.copy(z.direction,i.positionView),g.set(z.origin,0,0,0),!!D.intersectRay(t,z,F)&&i.distanceWithoutPolygonOffset>e},a._isCulledBySlice=function(i,t){return i.slicePlaneEnabled&&this._runningViewState.slicePlaneEnabled&&m.extrusionContainsPoint(this._runningViewState.slicePlane,t)},a._expandBoundingRect=function(i,t,e,{positionNDC:s,scaleInfo:n}){const c=this._runningViewState.camera,a=t.getScreenSize(J);P.applyPrecomputedScaleFactor(a,n.factor,a),a[0]*=c.pixelRatio,a[1]*=c.pixelRatio;const o=S.offset(e.calculateRelativeScreenBounds(a,n.factorAlignment.scale,k),r.lerp(0,c.fullWidth,.5+.5*s[0]),r.lerp(0,c.fullHeight,.5+.5*s[1])),l=this.iconMarginFactor;if(0!==l){const i=l*Math.min(S.width(o),S.height(o));o[0]-=i,o[1]-=i,o[2]+=i,o[3]+=i}S.expand(i.aabr,o,i.aabr)},a._isConflicted=function(i){const t=i.graphics3DGraphic.graphic.uid,e=i.info[this.visibilityGroup];for(let s=Math.floor(e.aabr[0]/this.accBinsSizeX);s<=Math.floor(e.aabr[2]/this.accBinsSizeX);s++)if(!(s<0||s>=this.accBinsNumX))for(let i=Math.floor(e.aabr[1]/this.accBinsSizeY);i<=Math.floor(e.aabr[3]/this.accBinsSizeY);i++){if(i<0||i>=this.accBinsNumY)continue;const r=this.accBins[s][i];for(let i=0;i<r.length;i++){const s=r.data[i],n=s.info[this.visibilityGroup];if(n&&n.visible&&(s.graphics3DGraphic.graphic.uid!==t&&(this.accNumTests++,S.intersects(n.aabr,e.aabr))))return!0}}return!1},a._initBins=function(i,t){if(null==this.accBins){this.accBins=[];for(let i=0;i<this.accBinsNumX;i++){this.accBins.push([]);const i=this.accBins[this.accBins.length-1];for(let t=0;t<this.accBinsNumY;t++)i.push(new c)}}else for(let e=0;e<this.accBinsNumX;e++)for(let i=0;i<this.accBinsNumY;i++)this.accBins[e][i].clear();this.accBinsSizeX=i/this.accBinsNumX,this.accBinsSizeY=t/this.accBinsNumY,this.accNumTests=0},a._addToBins=function(i){const t=i.info[this.visibilityGroup],e=Math.floor(t.aabr[0]/this.accBinsSizeX),s=Math.floor(t.aabr[2]/this.accBinsSizeX),r=Math.floor(t.aabr[1]/this.accBinsSizeY),n=Math.floor(t.aabr[3]/this.accBinsSizeY);for(let c=e;c<=s;c++)if(!(c<0||c>=this.accBinsNumX))for(let t=r;t<=n;t++)t<0||t>=this.accBinsNumY||this.accBins[c][t].push(i)},a._setGraphicVisibility=function(i,t){const e=i.graphics3DGraphic;e.destroyed||(e.setVisibilityFlag(w.VisibilityFlag.DECONFLICTION,t,this.visibilityGroup),this.visibilityGroup===w.VisibilityGroup.LABEL&&this.view.labeler.setLabelGraphicVisibility(e,t))},t._createClass(s,[{key:"dirty",get:function(){return this._dirty}},{key:"state",get:function(){return this._state}},{key:"updating",get:function(){return this._state!==i.State.Idle||this._dirty}},{key:"updatingProgress",get:function(){if(!this.updating)return 1;const t=this._state/i.State.NumStates;return this._dirty?.5*t:t}},{key:"running",get:function(){return this.view.ready&&null!=this.view.state&&this.updating}}]),s}(s),e.__decorate([a.property({constructOnly:!0})],i.Deconflictor.prototype,"view",void 0),e.__decorate([a.property({type:Boolean,readOnly:!0})],i.Deconflictor.prototype,"updating",null),i.Deconflictor=e.__decorate([u.subclass("esri.views.3d.layers.graphics.Deconflictor")],i.Deconflictor);const J=d.create();const K=new(function(){function i(){this.positionView=y.create(),this.positionNDC=y.create(),this.distance=0,this.distanceWithoutPolygonOffset=0,this.scaleInfo={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}}}return t._createClass(i,[{key:"isOutsideScreen",get:function(){const i=this.positionNDC;return i[0]<-1||i[1]<-1||i[2]<-1||i[0]>=1||i[1]>=1}}]),i}());i.DeconflictorGraphic=X,i.DeconflictorViewState=W,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));