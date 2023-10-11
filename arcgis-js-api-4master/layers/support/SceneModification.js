/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/lang","../../core/Warning","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/accessorSupport/decorators/persistable","../../geometry/projection","../../geometry/Polygon"],(function(e,r,t,o,s,c,a,p,i,n,l,u,y){"use strict";var f;let d=f=function(r){function t(e){var t;return(t=r.call(this,e)||this).geometry=null,t.type="clip",t}e._inheritsLoose(t,r);var o=t.prototype;return o.writeGeometry=function(e,r,t,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!u.canProjectWithoutEngine(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new c("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const s=new y;u.projectPolygon(e,s,o.layer.spatialReference),r[t]=s.toJSON(o)}else r[t]=e.toJSON(o);delete r[t].spatialReference},o.clone=function(){return new f({geometry:s.clone(this.geometry),type:this.type})},t}(o.JSONSupport);r.__decorate([a.property({type:y}),l.persistable()],d.prototype,"geometry",void 0),r.__decorate([n.writer(["web-scene","portal-item"],"geometry")],d.prototype,"writeGeometry",null),r.__decorate([a.property({type:["clip","mask","replace"],nonNullable:!0}),l.persistable()],d.prototype,"type",void 0),d=f=r.__decorate([i.subclass("esri.layers.support.SceneModification")],d);return d}));