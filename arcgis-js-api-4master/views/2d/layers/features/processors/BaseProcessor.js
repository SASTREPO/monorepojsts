/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p,n){"use strict";let i=function(r){function t(){return r.apply(this,arguments)||this}e._inheritsLoose(t,r);var o=t.prototype;return o.initialize=function(){},o.destroy=function(){},e._createClass(t,[{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),t}(t.HandleOwner);r.__decorate([o.property({readOnly:!0})],i.prototype,"supportsTileUpdates",null),r.__decorate([o.property({constructOnly:!0})],i.prototype,"remoteClient",void 0),r.__decorate([o.property({constructOnly:!0})],i.prototype,"service",void 0),r.__decorate([o.property()],i.prototype,"spatialReference",null),r.__decorate([o.property({constructOnly:!0})],i.prototype,"tileInfo",void 0),r.__decorate([o.property({constructOnly:!0})],i.prototype,"tileStore",void 0),i=r.__decorate([n.subclass("esri.views.2d.layers.features.processors.BaseProcessor")],i);return i}));