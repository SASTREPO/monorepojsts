/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../geometry","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/reactiveUtils","../../../../../core/screenUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3f64","../../../../../layers/graphics/hydratedFeatures","../../../analysis/support/measurementUtils","../../editingTools/dragEventPipeline3D","./DirectLineMeasurement3DView","./PickRequest","../../../support/ElevationProvider","../../../webgl-engine/lib/Intersector","../../../webgl-engine/lib/IntersectorInterfaces","../../../../interactive/dragEventPipeline","../../../../interactive/InteractiveToolBase","../../../../support/screenUtils","../../../../../geometry/Point"],(function(e,t,i,n,s,r,a,o,c,l,u,h,d,p,y,P,v,_,m,w,f,g,S,M,b){"use strict";let k=function(t){function i(e){var i;return(i=t.call(this,e)||this)._handles=new n,i._cachedPickRequest=null,i._isAnyPointerDown=!1,i.lineState="initial",i.analysisView=null,i.startPointSurfaceLocation=null,i.endPointSurfaceLocation=null,i.startManipulator=null,i.endManipulator=null,i}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this.measurementView=new v.DirectLineMeasurement3DView({toolState:this,view:this.view,analysis:this.analysis,analysisView:this.analysisView,cursorPoint:this.cursorPoint,visible:this.visible}),this._intersector=w.newIntersector(this.view.state.viewingMode),this._intersector.options.store=f.StoreResults.MIN;const{start:e,end:t}=this.measurementView.createManipulators(),i=(e,t,i)=>g.createManipulatorDragEventPipeline(e,((e,n,r)=>{const a=P.hideManipulatorWhileDragging(e);n.next(a).next(P.screenToMap3D(this.view)).next((e=>"start"!==e.action?e:null)).next((n=>{const s=p.clonePoint(n.mapEnd,new b);this.analysis[t]=s,e.location=s,this[i]=this._surfaceLocation(s,n.surfaceType)})),r.next(a).next(g.resetProperties(this.analysis,[t])).next(g.resetProperties(this,[i])).next((()=>{e.location=s.unwrap(this.analysis[t])}))})),n=i=>i.events.on("grab-changed",(()=>{const i=e.grabbing||t.grabbing;this.lineState=i?"editing":"measured"}));this._handles.add([i(e,"startPoint","startPointSurfaceLocation"),i(t,"endPoint","endPointSurfaceLocation"),n(e),n(t)]),this.manipulators.add(e),this.manipulators.add(t),this.startManipulator=e,this.endManipulator=t,this.startToolCreation(),this._handles.add(r.watch((()=>this.state),(e=>{"measured"===e&&this.finishToolCreation()}),r.syncAndInitial))},o.destroy=function(){this.measurementView=s.destroyMaybe(this.measurementView),this._handles=s.destroyMaybe(this._handles)},o.onShow=function(){this.measurementView.show(),this._updateManipulatorAvailability()},o.onHide=function(){this.measurementView.hide()},o.onInputEvent=function(e){switch(e.type){case"immediate-click":this._handleImmediateClick(e);break;case"pointer-move":this._handlePointerMove(e);break;case"pointer-down":this._handlePointerDown();break;case"pointer-up":this._handlePointerUp()}this._updateManipulatorAvailability()},o._handlePointerMove=function(e){this._clearCachedPickRequest();const t=M.createScreenPointFromEvent(e);"mouse"===e.pointerType&&(this._hoverAt(t),"drawing"===this.lineState&&(this.endManipulator.events.emit("drag",{action:"update",start:t,screenPoint:t}),e.stopPropagation()))},o._handlePointerDown=function(){this._isAnyPointerDown=!0},o._handlePointerUp=function(){this._isAnyPointerDown=!1},o._handleImmediateClick=function(e){if(this._clearCachedPickRequest(),!y.isPrimaryPointerAction(e))return;const t=M.createScreenPointFromEvent(e),i=e.pointerType;let n=!1;if(this.active)switch(this.lineState){case"initial":this.startManipulator.events.emit("drag",{action:"start",pointerType:i,start:t,screenPoint:t}),this.startManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),s.isSome(this.analysis.startPoint)&&(this.startManipulator.interactive=!1,this.endManipulator.interactive=!1,this.lineState="drawing",this.endManipulator.events.emit("drag",{action:"start",pointerType:i,start:t,screenPoint:t}),n=!0);break;case"drawing":this.endManipulator.events.emit("drag",{action:"update",start:t,screenPoint:t}),s.isSome(this.analysis.endPoint)&&(this.endManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),this.startManipulator.interactive=!0,this.endManipulator.interactive=!0,this.lineState="measured",n=!0)}n&&e.stopPropagation(),"mouse"===e.pointerType&&this._hoverAt(t)},o._hoverAt=function(e){const t=this._isAnyPointerDown&&"drawing"!==this.lineState&&"editing"!==this.lineState;if((s.isNone(this.analysis.startPoint)||s.isNone(this.analysis.endPoint))&&this.active&&!t){const t=this._pick(e);s.isSome(t)&&(this.cursorPoint=t)}else this.cursorPoint=null},o._pick=function(e){if(s.isSome(this._cachedPickRequest)&&s.isSome(this._cachedPickRequest.result)){const t=this._cachedPickRequest.screenPoint;if(t.x===e.x&&t.y===e.y)return this._cachedPickRequest.result.mapPoint}else this._cachedPickRequest=new _.PickRequest(e);const t=a.screenPointObjectToArray(e);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector);const i=this._intersector.results.min,n=T;if(!i.getIntersectionPoint(n))return null;const r=this.view.renderCoordsHelper.fromRenderCoords(n,this.view.spatialReference);return this._cachedPickRequest.result=new _.PickResult(n,r),r},o._clearCachedPickRequest=function(){this._cachedPickRequest=null},o._surfaceLocation=function(e,t){return t===P.SurfaceType.GROUND?"on-the-surface":e.z>=this._getElevation(e)?"above-the-surface":"below-the-surface"},o._updateManipulatorAvailability=function(){this.startManipulator.available=s.isSome(this.analysis.startPoint),this.endManipulator.available=s.isSome(this.analysis.endPoint)},o._getElevation=function(e){return this.view.basemapTerrain.ready?s.unwrapOr(m.getElevationAtPoint(this.view.elevationProvider,e),0):0},e._createClass(i,[{key:"state",get:function(){return s.isNone(this.analysis.startPoint)&&s.isNone(this.analysis.endPoint)?"ready":this.validMeasurement&&"editing"!==this.lineState&&"drawing"!==this.lineState?"measured":"measuring"}},{key:"cursor",get:function(){return"ready"===this.state||"drawing"===this.lineState?"crosshair":null}},{key:"cursorPoint",set:function(e){this._set("cursorPoint",e),this.measurementView.cursorPoint=e}},{key:"validMeasurement",get:function(){return s.isSome(this.analysis.startPoint)&&s.isSome(this.analysis.endPoint)}}]),i}(S.InteractiveToolBase);t.__decorate([o.property({readOnly:!0})],k.prototype,"state",null),t.__decorate([o.property()],k.prototype,"lineState",void 0),t.__decorate([o.property({readOnly:!0})],k.prototype,"cursor",null),t.__decorate([o.property()],k.prototype,"cursorPoint",null),t.__decorate([o.property({constructOnly:!0})],k.prototype,"analysis",void 0),t.__decorate([o.property({constructOnly:!0})],k.prototype,"analysisView",void 0),t.__decorate([o.property()],k.prototype,"measurementView",void 0),t.__decorate([o.property({constructOnly:!0})],k.prototype,"view",void 0),t.__decorate([o.property({readOnly:!0})],k.prototype,"validMeasurement",null),t.__decorate([o.property({value:null})],k.prototype,"startPointSurfaceLocation",void 0),t.__decorate([o.property({value:null})],k.prototype,"endPointSurfaceLocation",void 0),k=t.__decorate([h.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],k);const T=d.create();return k}));