/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,o,t,i,l,u){"use strict";var a;e.SlideVisibleLayer=a=function(e){function s(r){var s;return(s=e.call(this,r)||this).id="",s.sublayerIds=null,s}return r._inheritsLoose(s,e),s.prototype.clone=function(){return new a({id:this.id,sublayerIds:t.clone(this.sublayerIds)})},s}(o.JSONSupport),s.__decorate([i.property({type:String,json:{write:!0}})],e.SlideVisibleLayer.prototype,"id",void 0),s.__decorate([i.property({type:[l.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],e.SlideVisibleLayer.prototype,"sublayerIds",void 0),e.SlideVisibleLayer=a=s.__decorate([u.subclass("esri.webscene.support.SlideVisibleLayer")],e.SlideVisibleLayer),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));