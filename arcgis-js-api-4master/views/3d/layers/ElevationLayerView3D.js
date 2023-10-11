/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./LayerView3D","./TiledLayerView3D","../../layers/LayerView"],(function(e,r,i,o,a,l,t,s,n,c,y){"use strict";let d=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).type="elevation-3d",e}return e._inheritsLoose(o,r),o.prototype.initialize=function(){var e,r,o,a,l;const t=null==(e=this.view)||null==(r=e.map)?void 0:r.allLayers,s=t&&t.includes(this.layer),n=null==(o=this.view)||null==(a=o.map)||null==(l=a.ground)?void 0:l.layers,c=n&&n.includes(this.layer);if(s&&!c){const e=new i("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(e))}this._addTilingSchemeMatchPromise()},o}(c.TiledLayerView3D(n.LayerView3D(y)));r.__decorate([o.property()],d.prototype,"layer",void 0),r.__decorate([o.property({readOnly:!0,aliasOf:"layer.tileInfo"})],d.prototype,"tileInfo",void 0),d=r.__decorate([s.subclass("esri.views.3d.layers.ElevationLayerView3D")],d);return d}));