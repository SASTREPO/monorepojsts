/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./LayerView2D","./graphics/GraphicContainer","./graphics/GraphicsView2D","../../layers/LayerView"],(function(i,e,t,h,r,s,a,n,c,o,p,g,l){"use strict";const u={remove(){},pause(){},resume(){}};let d=function(e){function r(){var i;return(i=e.apply(this,arguments)||this)._highlightIds=new Map,i}i._inheritsLoose(r,e);var s=r.prototype;return s.attach=function(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new p(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},s.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")},s.hitTest=function(){var e=i._asyncToGenerator((function*(i){return this.graphicsView?this.graphicsView.hitTest(i):null}));function t(i){return e.apply(this,arguments)}return t}(),s.fetchPopupFeatures=function(){var e=i._asyncToGenerator((function*(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}));function t(i){return e.apply(this,arguments)}return t}(),s.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)},s.update=function(i){this.graphicsView.processUpdate(i)},s.moveStart=function(){},s.viewChange=function(){this.graphicsView.viewChange()},s.moveEnd=function(){},s.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},s.highlight=function(i){var e;let r;return"number"==typeof i?r=[i]:i instanceof t?r=[i.uid]:Array.isArray(i)&&i.length>0?r="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):h.isCollection(i)&&i.length>0&&(r=i.map((i=>i&&i.uid)).toArray()),r=null==(e=r)?void 0:e.filter((i=>null!=i)),r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):u},s._addHighlight=function(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()},s._removeHighlight=function(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()},s._updateHighlight=function(){var i;null==(i=this.graphicsView)||i.setHighlight(Array.from(this._highlightIds.keys()))},r}(o.LayerView2DMixin(l));e.__decorate([r.property()],d.prototype,"graphicsView",void 0),d=e.__decorate([c.subclass("esri.views.2d.layers.GraphicsLayerView2D")],d);return d}));