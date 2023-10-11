/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Accessor","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/coordinateFormatter","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils","./coordinateConversionUtils","../../../geometry/SpatialReference"],(function(e,t,r,o,n,i,s,a,c,l,p,u,d,f,h,m,g){"use strict";let v=function(t){function r(e){var r;return(r=t.call(this,e)||this).conversionInfo=null,r.coordinateSegments=null,r.defaultPattern=null,r.name=null,r.viewModel=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.convert=function(e){if(!m.isValidPoint(e))return Promise.reject(new n("format:invalid-point","Could not convert invalid point.",{point:e}));const t=this.get("conversionInfo.convert");return t?Promise.resolve().then((()=>t(e))):this._project(e,this.spatialReference).then((e=>this._getCoordinate(e).then((t=>({location:e,coordinate:t})))))},o.getConversionStrategy=function(){const e=this._viewSpatialReference;return this.get("conversionInfo.convert")||this.get("viewModel.formatterAvailable")||"xy"===this.name&&(e.isWebMercator||e.isWGS84)||"basemap"===this.name?"client":"server"},o.getDisplayCoordinate=function(e){if(!e)return null;if(!this.coordinateSegments||!this.currentPattern)return e;let t=this.currentPattern;const r=this._getSegmentMatches(e,!1);for(let o=this.coordinateSegments.length-1;o>=0;o--){const e=this.coordinateSegments[o];t=t.replace(e.alias,r[o])}return t},o.parseUserInput=function(e){let t=this.defaultPattern.replace(this._additionalCharactersPattern,"");e=e.replace(this._additionalCharactersPattern,"");const r=this._getSegmentMatches(e,!0);for(let o=this.coordinateSegments.length-1;o>=0;o--){const e=this.coordinateSegments[o];t=t.replace(e.alias,r[o])}return t},o._getSegmentMatches=function(e,t){const r=[];for(let o=0;o<this.coordinateSegments.length;o++){const n=this.coordinateSegments[o],i=e.match(n.searchPattern);if(!i){r.push("");continue}let s=i[0];if(e=e.replace(s,"").trim(),n.substitution){const e=t?n.substitution.input(s):n.substitution.output(s);e&&(s=e)}r.push(s)}return r},o.reverseConvert=function(e){const t=this.parseUserInput(e),r=this.get("conversionInfo.reverseConvert");let o;if(r)o=r(t);else if("xy"===this.name||"basemap"===this.name)o=m.fromXY(t,this.spatialReference);else if(this.viewModel.formatterAvailable)switch(this.name){case"dd":case"ddm":case"dms":o=u.fromLatitudeLongitude(t,this.spatialReference);break;case"mgrs":{const e="automatic";o=u.fromMgrs(t,this.spatialReference,e);break}case"utm":{const e="latitude-band-indicators";o=u.fromUtm(t,this.spatialReference,e);break}case"usng":o=u.fromUsng(t,this.spatialReference);break;default:o=null}return o?this._project(o,this._viewSpatialReference):Promise.reject(new n("format:invalid-input","Could not parse input into point.",{userInput:e}))},o._getCoordinate=function(e){const t=this.get("viewModel.view.scale");if(!m.isValidPoint(e))return Promise.reject(new n("format:invalid-point","Could not transform invalid point into coordinate.",{point:e}));if(this.get("viewModel.formatterAvailable")||"basemap"===this.name||"xy"===this.name)switch(this.name){case"dd":case"ddm":case"dms":{const r=m.getDegreePrecision(t);return Promise.resolve(u.toLatitudeLongitude(e,this.name,r))}case"mgrs":{const t=!1,r=5,o="automatic";return Promise.resolve(u.toMgrs(e,o,r,t))}case"usng":{const t=!1,r=5;return Promise.resolve(u.toUsng(e,r,t))}case"utm":{const t=!0,r="latitude-band-indicators";return Promise.resolve(u.toUtm(e,r,t))}default:return Promise.resolve(m.pointToCoordinate(e,t))}return Promise.resolve(m.pointToCoordinate(e,t))},o._project=function(e,t){var r,o;if(f.equals(e.spatialReference,t)||!t)return Promise.resolve(e);if(null!=(r=this.viewModel)&&r.formatterAvailable&&d.isLoaded())return Promise.resolve(d.project(e,t));if(null==(o=this.viewModel)||!o.formatterAvailable){const r=h.project(e,t);if(i.isSome(r))return Promise.resolve(r)}return null},e._createClass(r,[{key:"currentPattern",get:function(){return this._get("currentPattern")||this._get("defaultPattern")},set:function(e){this._set("currentPattern",e)}},{key:"hasDisplayProperties",get:function(){return!(!this.defaultPattern||!this.coordinateSegments)}},{key:"spatialReference",get:function(){const e=this.get("conversionInfo.spatialReference")||g.WGS84;return"basemap"===this.name?this._viewSpatialReference:e},set:function(e){void 0===e&&this._clearOverride("spatialReference"),this._override("spatialReference",e)}},{key:"_viewSpatialReference",get:function(){return this.get("viewModel.view.spatialReference")||g.WGS84}},{key:"_additionalCharactersPattern",get:function(){const e=this.get("coordinateSegments");if(!e)return null;const t=e.map((e=>e.alias)),r=this.currentPattern.replace(new RegExp(`["nsew${t.join()}]`,"gi"),"").replace(/\ /g,"");return new RegExp(`[${r}]`,"g")}}]),r}(o);t.__decorate([s.property()],v.prototype,"conversionInfo",void 0),t.__decorate([s.property()],v.prototype,"coordinateSegments",void 0),t.__decorate([s.property()],v.prototype,"currentPattern",null),t.__decorate([s.property()],v.prototype,"defaultPattern",void 0),t.__decorate([s.property({readOnly:!0})],v.prototype,"hasDisplayProperties",null),t.__decorate([s.property()],v.prototype,"name",void 0),t.__decorate([s.property({type:g})],v.prototype,"spatialReference",null),t.__decorate([s.property()],v.prototype,"viewModel",void 0),t.__decorate([s.property({readOnly:!0})],v.prototype,"_viewSpatialReference",null),t.__decorate([s.property({readOnly:!0})],v.prototype,"_additionalCharactersPattern",null),v=t.__decorate([p.subclass("esri.widgets.CoordinateConversion.support.Format")],v);return v}));