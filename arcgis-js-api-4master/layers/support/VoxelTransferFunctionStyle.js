/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/collectionUtils","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./VoxelAlphaStop","./VoxelColorStop","./VoxelRangeFilter"],(function(e,o,t,r,p,s,l,n,a,c,i,u,y){"use strict";let h=function(o){function p(e){var r;return(r=o.call(this,e)||this).interpolation=null,r.stretchRange=null,r.rangeFilter=null,r.colorStops=new t,r.alphaStops=new t,r}return e._inheritsLoose(p,o),e._createClass(p,[{key:"colorStops",set:function(e){this._set("colorStops",r.referenceSetter(e,this._get("colorStops"),t.ofType(u)))}},{key:"alphaStops",set:function(e){this._set("alphaStops",r.referenceSetter(e,this._get("alphaStops"),t.ofType(i)))}}]),p}(p.JSONSupport);o.__decorate([s.property({type:["linear","nearest"],json:{write:!0}})],h.prototype,"interpolation",void 0),o.__decorate([s.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"stretchRange",void 0),o.__decorate([s.property({type:t.ofType(u),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],h.prototype,"colorStops",null),o.__decorate([s.property({type:t.ofType(i),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],h.prototype,"alphaStops",null),o.__decorate([s.property({type:y,json:{write:!0}})],h.prototype,"rangeFilter",void 0),h=o.__decorate([c.subclass("esri.layers.support.VoxelTransferFunctionStyle")],h);return h}));