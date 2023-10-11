/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../rest/support/FeatureSet","./FeatureLayerView2D","./support/util"],(function(e,t,r,n,o,i,s,a,c,l,p,u){"use strict";function y(e,t){if(n.isNone(e)&&n.isNone(t))return null;const r={};return n.isSome(t)&&(r.geometry=t.toJSON()),n.isSome(e)&&(r.where=e),r}let d=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._enabledDataReceived=!1,e.errorString=null,e.connectionStatus="disconnected",e}e._inheritsLoose(n,t);var o=n.prototype;return o.initialize=function(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update())),this.watch("suspended",(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()}))])},o.on=function(e,r){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const n=t.prototype.on.call(this,e,r),o=this;return{remove(){n.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1))}}},o.queryLatestObservations=function(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new r("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=l.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))},o.detach=function(){t.prototype.detach.call(this),this.connectionStatus="disconnected"},o._createClientOptions=function(){return{...t.prototype._createClientOptions.call(this),setProperty:e=>{this.set(e.propertyName,e.value)}}},o._createTileRendererHash=function(e){const r=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(y(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return t.prototype._createTileRendererHash.call(this,e)+r},o._createServiceOptions=function(){var t=e._asyncToGenerator((function*(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),n=u.toJSONGeometryType(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:n,objectIdField:t,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:y(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}));function r(){return t.apply(this,arguments)}return r}(),e._createClass(n,[{key:"connectionError",get:function(){if(this.errorString)return new r("stream-controller",this.errorString)}}]),n}(p);t.__decorate([o.property()],d.prototype,"errorString",void 0),t.__decorate([o.property({readOnly:!0})],d.prototype,"connectionError",null),t.__decorate([o.property()],d.prototype,"connectionStatus",void 0),d=t.__decorate([c.subclass("esri.views.2d.layers.StreamLayerView2D")],d);return d}));