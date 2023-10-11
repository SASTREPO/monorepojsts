/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../layers/graphics/dehydratedFeatures","../../../../rest/query/operations/query","../../support/PBFDecoder"],(function(e,r,t,o,u,s,a,n,i,y,c,l,p,d){"use strict";let h=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},o.destroy=function(){this._decoder=u.destroyMaybe(this._decoder)},o._createRequestOptions=function(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query}}},r._createClass(t,[{key:"queryFeaturesDehydrated",get:function(){const e=this.layer.capabilities,r=e&&e.query;if(r&&r.supportsFormatPBF){var t,o;u.isNone(this._decoder)&&(this._decoder=new d.PBFDecoder(this.schedule));const e={sourceSpatialReference:null!=(t=null==(o=this.layer.spatialReference)?void 0:o.toJSON())?t:null,applyTransform:!0,maxStringAttributeLength:1024};return(r,t)=>p.runQuery(this.layer.parsedUrl,r,"pbf",this._createRequestOptions(t)).then((r=>(s.throwIfAborted(t),u.isSome(this._decoder)?this._decoder.invoke({buffer:r.data,options:e},t.signal):Promise.reject(s.createAbortError()))))}return(e,r)=>p.executeQuery(this.layer.parsedUrl,e,this.layer.spatialReference,this._createRequestOptions(r)).then((e=>l.fromFeatureSetJSON(e.data)))}}]),t}(o);t.__decorate([a.property({constructOnly:!0})],h.prototype,"layer",void 0),t.__decorate([a.property({constructOnly:!0})],h.prototype,"schedule",void 0),t.__decorate([a.property({readOnly:!0})],h.prototype,"queryFeaturesDehydrated",null),h=t.__decorate([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],h);let f=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.queryFeaturesDehydrated=function(e,r){return this.layer.queryFeatures(e,r)},o.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},t}(o);t.__decorate([a.property({constructOnly:!0})],f.prototype,"layer",void 0),t.__decorate([a.property({readOnly:!0})],f.prototype,"queryFeaturesDehydrated",null),f=t.__decorate([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],f);let _=function(e){function t(r){return e.call(this,r)||this}return r._inheritsLoose(t,e),t.prototype.queryFeaturesDehydrated=function(e,r){return this.layer.queryFeatures(e,r)},t}(o);t.__decorate([a.property({constructOnly:!0})],_.prototype,"layer",void 0),_=t.__decorate([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],_);let F=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.queryFeaturesDehydrated=function(e,r){return this.source.queryFeaturesJSON(e,r).then(l.fromFeatureSetJSON,(t=>{if(t&&"query-features-json:unsupported"===t.name)return this.layer.queryFeatures(e,r);throw t}))},o.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},t}(o);function q(e,r){return"feature"===e.type&&"feature-layer"===e.source.type?u.isSome(e.infoFor3D)?new f({layer:e}):new h({layer:e,schedule:r}):"feature"===e.type&&"memory"===e.source.type||"csv"===e.type||"geojson"===e.type||"wfs"===e.type?new F({layer:e,source:e.source}):"ogc-feature"===e.type?new _({layer:e}):null}t.__decorate([a.property({constructOnly:!0})],F.prototype,"layer",void 0),t.__decorate([a.property({constructOnly:!0})],F.prototype,"source",void 0),F=t.__decorate([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],F),e.createFeatureTileQuery3D=q,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));