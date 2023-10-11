/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Accessor","../core/Collection","../core/watchUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,a,o,i,n,p,l,c){"use strict";e.BasemapView=function(e){function s(s){var t;return(t=e.call(this,s)||this).view=null,t.baseLayerViews=new a,t.referenceLayerViews=new a,t._loadingHandle=o.init(r._assertThisInitialized(t),"view.map.basemap",(e=>{e&&e.load().catch((()=>{}))})),t}return r._inheritsLoose(s,e),s.prototype.destroy=function(){this._set("view",null),this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null)},r._createClass(s,[{key:"suspended",get:function(){return!this.view||this.view.suspended}},{key:"updating",get:function(){var e,r;if(this.view&&this.view.suspended)return!1;const s=null==(e=this.view)||null==(r=e.map)?void 0:r.basemap;return!!s&&(!!s.loaded&&(this.baseLayerViews.some((e=>e.updating))||this.referenceLayerViews.some((e=>e.updating))))}}]),s}(t),s.__decorate([i.property({constructOnly:!0})],e.BasemapView.prototype,"view",void 0),s.__decorate([i.property({readOnly:!0})],e.BasemapView.prototype,"baseLayerViews",void 0),s.__decorate([i.property({readOnly:!0})],e.BasemapView.prototype,"referenceLayerViews",void 0),s.__decorate([i.property({readOnly:!0})],e.BasemapView.prototype,"suspended",null),s.__decorate([i.property({type:Boolean,readOnly:!0})],e.BasemapView.prototype,"updating",null),e.BasemapView=s.__decorate([c.subclass("esri.views.BasemapView")],e.BasemapView),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));