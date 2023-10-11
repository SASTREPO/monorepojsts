/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/MultiOriginJSONSupport","../core/scheduling","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./Layer","./mixins/PortalLayer"],(function(e,r,o,t,s,i,n,p,c,u,l,a){"use strict";let d=function(r){function t(e){var o;return(o=r.call(this,e)||this).resourceInfo=null,o.type="unsupported",o}e._inheritsLoose(t,r);var i=t.prototype;return i.initialize=function(){this.addResolvingPromise(new Promise(((e,r)=>{s.schedule((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unsupported layer type";e&&(t+=" "+e),r(new o("layer:unsupported-layer-type",t,{layerType:e}))}))})))},i.read=function(e,o){const t={resourceInfo:e};null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),r.prototype.read.call(this,t,o)},i.write=function(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})},t}(a.PortalLayer(t.MultiOriginJSONMixin(l)));r.__decorate([i.property({readOnly:!0})],d.prototype,"resourceInfo",void 0),r.__decorate([i.property({type:["show","hide"]})],d.prototype,"listMode",void 0),r.__decorate([i.property({json:{read:!1},readOnly:!0,value:"unsupported"})],d.prototype,"type",void 0),d=r.__decorate([u.subclass("esri.layers.UnsupportedLayer")],d);return d}));