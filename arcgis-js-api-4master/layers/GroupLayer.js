/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/loadAll","../core/maybe","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/utils","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Layer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","../support/LayersMixin","../support/TablesMixin","../webdoc/support/writeUtils"],(function(e,i,t,r,s,o,a,l,n,c,y,p,u,d,h,b,v,_,f,L){"use strict";let m=function(i){function s(t){var r;return(r=i.call(this,t)||this)._visibilityHandles={},r.fullExtent=void 0,r.operationalLayerType="GroupLayer",r.spatialReference=void 0,r.type="group",r._visibilityWatcher=r._visibilityWatcher.bind(e._assertThisInitialized(r)),r}e._inheritsLoose(s,i);var o=s.prototype;return o.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},o._writeLayers=function(e,i,t,s){const o=[];if(!e)return o;e.forEach((e=>{const i=L.getLayerJSON(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);r.isSome(i)&&i.layerType&&o.push(i)})),i.layers=o},o.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)},o.loadAll=function(){return t.loadAll(this,(e=>{e(this.layers,this.tables)}))},o.layerAdded=function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)},o.layerRemoved=function(e){const i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},o._turnOffOtherLayers=function(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1)}))},o._enforceVisibility=function(e,i){if(!n.getProperties(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i}))}},o._visibleWatcher=function(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e}))},o._visibilityWatcher=function(e,i,t,r){const s=r;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(s):this._isAnyLayerVisible()||(s.visible=!0);break;case"inherited":s.visible=this.visible}},o._isAnyLayerVisible=function(){return this.layers.some((e=>e.visible))},e._createClass(s,[{key:"portalItem",set:function(e){this._set("portalItem",e)}},{key:"visibilityMode",set:function(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}}]),s}(d.BlendLayer(v.ScaleRangeLayer(h.OperationalLayer(b.PortalLayer(f.TablesMixin(_.LayersMixin(s.MultiOriginJSONMixin(u))))))));i.__decorate([o.property()],m.prototype,"fullExtent",void 0),i.__decorate([o.property({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),i.__decorate([p.writer("layers")],m.prototype,"_writeLayers",null),i.__decorate([o.property({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),i.__decorate([o.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),i.__decorate([o.property()],m.prototype,"spatialReference",void 0),i.__decorate([o.property({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),i.__decorate([o.property({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=i.__decorate([y.subclass("esri.layers.GroupLayer")],m);return m}));