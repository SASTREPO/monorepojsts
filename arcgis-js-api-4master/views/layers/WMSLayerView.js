/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../layers/support/commonProperties","../../layers/support/ExportWMSImageParameters"],(function(e,r,t,o,s,a,p,i,n,u,c){"use strict";const l=e=>{let a=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var s=t.prototype;return s.initialize=function(){this.exportImageParameters=new c.ExportWMSImageParameters({layer:this.layer})},s.destroy=function(){this.exportImageParameters.destroy(),this.exportImageParameters=null},s.fetchPopupFeatures=function(e){const{layer:r}=this;if(!e)return Promise.reject(new o("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:t}=r;if(!t)return Promise.reject(new o("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:a,width:p,height:i,x:n,y:u}=s;if(!(a&&p&&i))throw new o("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:p,height:i});const c=r.fetchFeatureInfo(a,p,i,n,u);return Promise.resolve(c?[c]:[])},r._createClass(t,[{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}}]),t}(e);return t.__decorate([s.property()],a.prototype,"exportImageParameters",void 0),t.__decorate([s.property({readOnly:!0})],a.prototype,"exportImageVersion",null),t.__decorate([s.property()],a.prototype,"layer",void 0),t.__decorate([s.property(u.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0),a=t.__decorate([n.subclass("esri.layers.mixins.WMSLayerView")],a),a};e.WMSLayerView=l,e.default=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));