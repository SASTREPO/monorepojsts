/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../layers/support/fieldType"],(function(e,t,r,o,c,a,p,s,n,i){"use strict";var u;let l=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).exactMatch=!1,r.name=null,r.type=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({exactMatch:this.exactMatch,type:this.type,name:this.name})},r}(r.JSONSupport);t.__decorate([o.property({type:Boolean,json:{write:!0}})],l.prototype,"exactMatch",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],l.prototype,"name",void 0),t.__decorate([s.enumeration(i.kebabDict)],l.prototype,"type",void 0),l=u=t.__decorate([n.subclass("esri.webdoc.applicationProperties.SearchTableField")],l);return l}));