/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../chunks/languageUtils","../../../core/Accessor","../../../core/HandleOwner","../../../core/throttle","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../popup/content/AttachmentsContent","../../../popup/content/Content","../../../popup/content/CustomContent","../../../popup/content/ExpressionContent","../../../popup/content/FieldsContent","../../../popup/content/MediaContent","../../../popup/content/TextContent","../../../popup/ElementExpressionInfo","../FeatureContent/FeatureContentViewModel","../FeatureFields/FeatureFieldsViewModel","../FeatureMedia/FeatureMediaViewModel","../support/arcadeFeatureUtils"],(function(e,t,o,n,r,l,i,s,a,c,p,d,u,_,y,m,h,f,v,w,C,E,b,M,x){"use strict";const g=1;let F=function(t){function o(o){var r;return(r=t.call(this,o)||this)._abortController=null,r.expressionInfo=null,r.graphic=null,r.contentElement=null,r.contentElementViewModel=null,r.interceptor=null,r.view=null,r._cancelQuery=()=>{const{_abortController:t}=e._assertThisInitialized(r);t&&t.abort(),r._abortController=null},r._createVM=()=>{var e,t;const o=null==(e=r.contentElement)?void 0:e.type;null==(t=r.contentElementViewModel)||t.destroy();const n="fields"===o?new b:"media"===o?new M:"text"===o?new E:null;r._set("contentElementViewModel",n)},r._compile=e._asyncToGenerator((function*(){r._cancelQuery();const e=new AbortController;r._abortController=e,yield r._compileExpression(),r._abortController===e&&(r._abortController=null)})),r._compileThrottled=i.throttle(r._compile,g,e._assertThisInitialized(r)),r._compileExpression=e._asyncToGenerator((function*(){const{expressionInfo:t,graphic:o,interceptor:l,spatialReference:i,map:s,view:a,_abortController:c}=e._assertThisInitialized(r);if(!(t&&o&&i&&s))return void r._set("contentElement",null);const p=yield x.loadArcadeUtils();if(c!==r._abortController)return;const d=yield x.createCompiledExpression({arcadeUtils:p,expressionInfo:t,graphic:o,interceptor:l,map:s,spatialReference:i,view:a});if(!d||"esri.arcade.Dictionary"!==d.declaredClass)return void r._set("contentElement",null);const u=yield n.castAsJsonAsync(d,c.signal),_=null==u?void 0:u.type,y="media"===_?v.fromJSON(u):"text"===_?w.fromJSON(u):"fields"===_?f.fromJSON(u):null;r._set("contentElement",y)})),r.handles.add([s.init(e._assertThisInitialized(r),["expressionInfo","graphic","map","spatialReference","view"],r._compileThrottled),s.init(e._assertThisInitialized(r),"contentElement",r._createVM)]),r}return e._inheritsLoose(o,t),o.prototype.destroy=function(){var e;this._cancelQuery(),null==(e=this.contentElementViewModel)||e.destroy(),this._set("contentElementViewModel",null),this._set("contentElement",null)},e._createClass(o,[{key:"spatialReference",get:function(){var e;return(null==(e=this.view)?void 0:e.spatialReference)||null},set:function(e){void 0!==e?this._override("spatialReference",e):this._clearOverride("spatialReference")}},{key:"state",get:function(){const{_abortController:e,contentElement:t,contentElementViewModel:o}=this;return e?"loading":t||o?"ready":"disabled"}},{key:"map",get:function(){var e;return(null==(e=this.view)?void 0:e.map)||null},set:function(e){void 0!==e?this._override("map",e):this._clearOverride("map")}}]),o}(l.HandleOwnerMixin(r));t.__decorate([a.property()],F.prototype,"_abortController",void 0),t.__decorate([a.property({type:C})],F.prototype,"expressionInfo",void 0),t.__decorate([a.property({type:o})],F.prototype,"graphic",void 0),t.__decorate([a.property({readOnly:!0})],F.prototype,"contentElement",void 0),t.__decorate([a.property({readOnly:!0})],F.prototype,"contentElementViewModel",void 0),t.__decorate([a.property()],F.prototype,"interceptor",void 0),t.__decorate([a.property()],F.prototype,"spatialReference",null),t.__decorate([a.property({readOnly:!0})],F.prototype,"state",null),t.__decorate([a.property()],F.prototype,"map",null),t.__decorate([a.property()],F.prototype,"view",void 0),F=t.__decorate([u.subclass("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")],F);return F}));