/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./BarChartMediaInfo","./ColumnChartMediaInfo","./Content","./ImageMediaInfo","./LineChartMediaInfo","./PieChartMediaInfo","./support/mediaInfoTypes"],(function(e,t,o,r,i,n,a,p,s,d,c,u,l,f,y){"use strict";var I;let m=I=function(t){function r(e){var o;return(o=t.call(this,e)||this).activeMediaInfoIndex=null,o.attributes=null,o.description=null,o.mediaInfos=null,o.title=null,o.type="media",o}e._inheritsLoose(r,t);var i=r.prototype;return i.readMediaInfos=function(e){return e&&e.map((e=>"image"===e.type?u.fromJSON(e):"barchart"===e.type?s.fromJSON(e):"columnchart"===e.type?d.fromJSON(e):"linechart"===e.type?l.fromJSON(e):"piechart"===e.type?f.fromJSON(e):void 0)).filter(Boolean)},i.writeMediaInfos=function(e,t){t.mediaInfos=e&&e.map((e=>e.toJSON()))},i.clone=function(){return new I(o.clone({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))},r}(c);t.__decorate([r.property()],m.prototype,"activeMediaInfoIndex",void 0),t.__decorate([r.property({type:Object,json:{write:!0}})],m.prototype,"attributes",void 0),t.__decorate([r.property({type:String,json:{write:!0}})],m.prototype,"description",void 0),t.__decorate([r.property({types:[y.types]})],m.prototype,"mediaInfos",void 0),t.__decorate([n.reader("mediaInfos")],m.prototype,"readMediaInfos",null),t.__decorate([p.writer("mediaInfos")],m.prototype,"writeMediaInfos",null),t.__decorate([r.property({type:String,json:{write:!0}})],m.prototype,"title",void 0),t.__decorate([r.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=I=t.__decorate([a.subclass("esri.popup.content.MediaContent")],m);return m}));