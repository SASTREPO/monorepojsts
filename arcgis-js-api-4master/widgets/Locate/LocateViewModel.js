/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../PopupTemplate","../../core/Error","../../core/Handles","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../Popup/actions","../support/GeolocationPositioning","../support/geolocationUtils","../../intl/locale","../../intl/messages"],(function(e,t,o,a,r,l,i,n,s,c,p,u,d,h,f,y){"use strict";function _(){return g.apply(this,arguments)}function g(){return(g=e._asyncToGenerator((function*(){const e=yield y.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");return new a({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[u.removeSelectedFeature.clone()],content:[{type:"fields"}]})}))).apply(this,arguments)}let m=function(t){function o(o){var a;return(a=t.call(this,o)||this)._locateController=null,a._handles=new l,a.popupEnabled=!0,a.locate=a.locate.bind(e._assertThisInitialized(a)),a}e._inheritsLoose(o,t);var a=o.prototype;return a.initialize=function(){this._handles.add([f.onLocaleChange((()=>{var e;const{graphic:t,view:o}=this;(null==o||null==(e=o.graphics)?void 0:e.includes(t))&&this._updatePopupTemplate(t)}))])},a.destroy=function(){this.cancelLocate(),this._handles.destroy(),this._handles=null},a.locate=function(){var t=e._asyncToGenerator((function*(){if(this.cancelLocate(),"disabled"===this.state)throw new r("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new r("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const e=new AbortController;this._locateController=e;try{let t=yield h.getCurrentPosition(this.geolocationOptions);return t=yield this._setPosition(t,{signal:e.signal}),this._locateController!==e?null:(this.graphic&&(this.graphic=this.graphic.clone(),yield this._updatePopupTemplate(this.graphic),this.view.graphics.push(this.graphic)),this.emit("locate",{position:t}),this._locateController=null,t)}catch(t){throw this._locateController=null,this.emit("locate-error",{error:t}),t}}));function o(){return t.apply(this,arguments)}return o}(),a.cancelLocate=function(){this._clear(),this._locateController&&this._locateController.abort(),this._locateController=null},a._updatePopupTemplate=function(){var t=e._asyncToGenerator((function*(e){if(!this.popupEnabled)return;const t=yield _(),o=e!==this.graphic;this.destroyed||o||(e.popupTemplate=t)}));function o(e){return t.apply(this,arguments)}return o}(),e._createClass(o,[{key:"state",get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}}]),o}(d);t.__decorate([i.property()],m.prototype,"_locateController",void 0),t.__decorate([i.property()],m.prototype,"popupEnabled",void 0),t.__decorate([i.property({readOnly:!0})],m.prototype,"state",null),t.__decorate([i.property()],m.prototype,"locate",null),t.__decorate([i.property()],m.prototype,"cancelLocate",null),m=t.__decorate([p.subclass("esri.widgets.Locate.LocateViewModel")],m);return m}));