/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./VisualVariable","./support/OpacityStop"],(function(e,t,r,s,o,i,a,n,p){"use strict";var l;let c=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="opacity",r.normalizationField=null,r}e._inheritsLoose(r,t);var s=r.prototype;return s.clone=function(){return new l({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((e=>e.clone())),legendOptions:this.legendOptions&&this.legendOptions.clone()})},s.getAttributeHash=function(){return`${t.prototype.getAttributeHash.call(this)}-${this.normalizationField}`},s._interpolateData=function(){return this.stops&&this.stops.map((e=>e.value||0))},e._createClass(r,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"stops",set:function(e){e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)),this._set("stops",e)}}]),r}(n);t.__decorate([r.property({readOnly:!0})],c.prototype,"cache",null),t.__decorate([r.property({type:["opacity"],json:{type:["transparencyInfo"]}})],c.prototype,"type",void 0),t.__decorate([r.property({type:String,json:{write:!0}})],c.prototype,"normalizationField",void 0),t.__decorate([r.property({type:[p],json:{write:!0}})],c.prototype,"stops",null),c=l=t.__decorate([a.subclass("esri.renderers.visualVariables.OpacityVariable")],c);return c}));