/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,n,a,s,c,i){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).average=null,t.bins=null,t.max=null,t.min=null,t}return e._inheritsLoose(t,r),e._createClass(t,[{key:"binRange",get:function(){const{bins:e}=this;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0}},{key:"labelFormatFunction",set:function(e){this._set("labelFormatFunction",e)}},{key:"range",get:function(){const{max:e,min:r}=this;return o.isSome(e)&&o.isSome(r)?e-r:0}},{key:"state",get:function(){const{bins:e,range:r}=this;return r>0&&e&&e.length?"ready":"disabled"}}]),t}(t);r.__decorate([n.property()],l.prototype,"average",void 0),r.__decorate([n.property()],l.prototype,"bins",void 0),r.__decorate([n.property({readOnly:!0})],l.prototype,"binRange",null),r.__decorate([n.property()],l.prototype,"labelFormatFunction",null),r.__decorate([n.property()],l.prototype,"max",void 0),r.__decorate([n.property()],l.prototype,"min",void 0),r.__decorate([n.property({readOnly:!0})],l.prototype,"range",null),r.__decorate([n.property({readOnly:!0})],l.prototype,"state",null),l=r.__decorate([i.subclass("esri.widgets.Histogram.HistogramViewModel")],l);return l}));