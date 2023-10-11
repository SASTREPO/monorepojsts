/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../core/Accessor","../../core/HandleOwner","../../core/maybe","../../core/reactiveUtils","../../core/uid","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../layers/support/CodedValueDomain","../../layers/support/Domain","../../layers/support/InheritedDomain","../../layers/support/RangeDomain","../../layers/support/domainUtils","../../layers/support/fieldUtils","../../intl/substitute"],(function(e,t,i,r,o,n,l,a,s,u,d,p,c,y,_,f,m,h,v,g){"use strict";var E,b;!function(e){e.Text="text",e.Number="number",e.Date="date",e.Unsupported="unsupported"}(E||(E={})),function(e){e.TOO_SHORT="length-validation-error::too-short"}(b||(b={}));const F={type:"number"},x={type:"number",intlOptions:{notation:"scientific"}},V={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}};function N(e){return e>=1e7||e<=-1e7}let O=function(t){function i(e){var i;return(i=t.call(this,e)||this)._storedValue=null,i.arcade=null,i.editableFunction=null,i.id=a.generateUID().toString(),i.requiredFunction=null,i.valueFunction=null,i.visibilityFunction=null,i.feature=null,i.field=null,i.fieldElement=null,i.layer=null,i.description=null,i.inputType=null,i.error=null,i.group=null,i.hint=null,i.messages=null,i.name=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this.handles.add(l.watch((()=>this.value),((e,t)=>{if(e!==t){const{feature:e,name:t,value:i}=this;e.setAttribute(t,i)}})))},r._isDomainCompatible=function(e){const{field:t}=this;if("coded-value"===(null==e?void 0:e.type)){const i=typeof e.codedValues[0].code;if("string"===i&&v.isStringField(t)||"number"===i&&v.isNumericField(t))return!0}return!!("range"===(null==e?void 0:e.type)&&v.isNumericField(t)||v.isDateField(t))},r._validate=function(){const{domain:e,field:t,initialFeature:i,minLength:r,required:o,type:n,valid:l,value:a}=this,s=o&&null===a,u=void 0!==l;return!s&&i.getAttribute(t.name)===a&&u?null:"text"===n&&r>-1&&"string"==typeof a&&a.length<r?b.TOO_SHORT:e?null!==a||o?h.validateDomainValue(e,a):null:s?v.TypeValidationError.INVALID_TYPE:v.validateFieldValue(t,a)},r._isVisibleByDefault=function(){var e;const t=null==(e=this.field)?void 0:e.type;return"oid"!==t&&"global-id"!==t&&!this._isGeometryField()},r._isEditorField=function(){return v.getFeatureEditFields(this.layer).indexOf(this.name)>-1},r._isGeometryField=function(){return v.getFeatureGeometryFields(this.layer).indexOf(this.name)>-1},r._shouldUseValueExpression=function(){return this._layerFieldAllowsEdits&&!this._configAllowsEdits&&n.isSome(this.valueFunction)},r._toErrorMessage=function(){const{domain:e,field:t,messages:i,minLength:r,value:o,required:n,type:l}=this,a=this.error;if(n&&null===o)return i.validationErrors.cannotBeNull;if(a===h.DomainValidationError.VALUE_OUT_OF_RANGE||a===v.NumericRangeValidationError.OUT_OF_RANGE){const r=h.getDomainRange(e)||v.getFieldRange(t);return g.substitute(i.validationErrors.outsideRange,r,{format:{max:"date"===l?V:N(r.max)?x:F,min:"date"===l?V:N(r.min)?x:F}})}return a===h.DomainValidationError.INVALID_CODED_VALUE?i.validationErrors.invalidCodedValue:a===v.TypeValidationError.INVALID_TYPE?i.validationErrors.invalidType:a===b.TOO_SHORT?g.substitute(i.validationErrors.tooShort,{min:r}):null},e._createClass(i,[{key:"_configAllowsEdits",get:function(){var e,t,i;const{fieldElement:r,layer:o,name:l}=this;if(n.isSome(r))return!1!==r.editable;const a="subtype-group"!==(null==o?void 0:o.type)?null==o||null==(e=o.popupTemplate)||null==(t=e.fieldInfos)?void 0:t.find((({fieldName:e})=>e===l)):null;return null==(i=null==a?void 0:a.isEditable)||i}},{key:"_layerFieldAllowsEdits",get:function(){const{field:e,layer:t}=this;return(null==t?void 0:t.capabilities.operations.supportsEditing)&&(null==e?void 0:e.editable)}},{key:"isUsingValueExpression",get:function(){return this._shouldUseValueExpression()}},{key:"evaluatedEditableExpression",get:function(){const{editableFunction:e}=this;if(n.isNone(e))return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"evaluatedRequiredExpression",get:function(){const{requiredFunction:e}=this;if(n.isNone(e))return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"evaluatedVisibilityExpression",get:function(){const{visibilityFunction:e}=this;if(n.isNone(e))return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"evaluatedValueExpression",get:function(){const{valueFunction:e}=this;if(n.isNone(e))return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"initialFeature",set:function(e){this._set("initialFeature",e),this.notifyChange("valid")}},{key:"domain",get:function(){var e;const{typeIdField:t}=this.layer,i=t===this.name,r=null==(e=this.field)?void 0:e.domain;if(i&&!r){const{layer:e}=this,t="subtype-group"===e.type?e.sublayers.map((({subtypeCode:e,title:t})=>({id:e,name:t}))):e.types.map((({id:e,name:t})=>({code:e,name:t})));return new y({name:"__internal-type-based-coded-value-domain__",codedValues:t})}const{feature:o}=this,l=t&&this.layer.getFieldDomain(this.name,{feature:o})||r,a=n.get(this.fieldElement,"domain");return n.isSome(a)&&this._isDomainCompatible(a)?a:l}},{key:"editable",get:function(){var e;return!!this._layerFieldAllowsEdits&&(null!=(e=this.evaluatedEditableExpression)?e:this._configAllowsEdits)}},{key:"errorMessage",get:function(){return this._toErrorMessage()}},{key:"includeTime",get:function(){var e;const{fieldElement:t}=this,i=n.isSome(t)&&"datetime-picker"===(null==(e=t.input)?void 0:e.type)?t.input.includeTime:void 0;return void 0===i||i}},{key:"label",get:function(){return n.isSome(this.fieldElement)&&this.fieldElement.label||this.field.alias||this.field.name}},{key:"maxLength",get:function(){const e=-1;if(this.type===E.Date)return e;const{field:t,fieldElement:i}=this,r=null==t?void 0:t.length,o=n.isSome(i)&&D(i.input)?i.input.maxLength:NaN;return!isNaN(o)&&o>=e&&(r===e||o<=r)?o:r}},{key:"minLength",get:function(){const e=-1;if(this.type===E.Date)return e;const{field:t,fieldElement:i}=this,r=null==t?void 0:t.length,o=n.isSome(i)&&D(i.input)?i.input.minLength:NaN;return!isNaN(o)&&o>=e&&(r===e||o<=r)?o:e}},{key:"required",get:function(){var e,t;return!!this.editable&&(!1===(null==(e=this.field)?void 0:e.nullable)||null!=(t=this.evaluatedRequiredExpression)&&t)}},{key:"submittable",get:function(){const{field:e,required:t,valid:i,value:r}=this;return!!i||(!t||!n.isNone(r))&&this.initialFeature.getAttribute(e.name)===r}},{key:"type",get:function(){const{field:e}=this;return v.isNumericField(e)?E.Number:v.isStringField(e)?E.Text:v.isDateField(e)?E.Date:E.Unsupported}},{key:"valid",get:function(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}},{key:"value",get:function(){return this._shouldUseValueExpression()?this.evaluatedValueExpression:this.get("_storedValue")},set:function(e){this.notifyChange("evaluatedVisibilityExpression"),this.set("_storedValue",e)}},{key:"visible",get:function(){return!this._isEditorField()&&(n.isSome(this.fieldElement)?null==(e=this.evaluatedVisibilityExpression)||e:this._isVisibleByDefault());var e}}]),i}(o.HandleOwnerMixin(r));function D(e){return!!e&&"maxLength"in e}t.__decorate([s.property()],O.prototype,"_storedValue",void 0),t.__decorate([s.property()],O.prototype,"_configAllowsEdits",null),t.__decorate([s.property()],O.prototype,"_layerFieldAllowsEdits",null),t.__decorate([s.property()],O.prototype,"arcade",void 0),t.__decorate([s.property()],O.prototype,"editableFunction",void 0),t.__decorate([s.property()],O.prototype,"requiredFunction",void 0),t.__decorate([s.property()],O.prototype,"valueFunction",void 0),t.__decorate([s.property()],O.prototype,"isUsingValueExpression",null),t.__decorate([s.property()],O.prototype,"visibilityFunction",void 0),t.__decorate([s.property()],O.prototype,"evaluatedEditableExpression",null),t.__decorate([s.property()],O.prototype,"evaluatedRequiredExpression",null),t.__decorate([s.property()],O.prototype,"evaluatedVisibilityExpression",null),t.__decorate([s.property()],O.prototype,"evaluatedValueExpression",null),t.__decorate([s.property()],O.prototype,"feature",void 0),t.__decorate([s.property()],O.prototype,"field",void 0),t.__decorate([s.property()],O.prototype,"fieldElement",void 0),t.__decorate([s.property()],O.prototype,"initialFeature",null),t.__decorate([s.property()],O.prototype,"layer",void 0),t.__decorate([s.property({aliasOf:"fieldElement.description"})],O.prototype,"description",void 0),t.__decorate([s.property()],O.prototype,"domain",null),t.__decorate([s.property()],O.prototype,"editable",null),t.__decorate([s.property({aliasOf:"fieldElement.input.type"})],O.prototype,"inputType",void 0),t.__decorate([s.property({readOnly:!0})],O.prototype,"error",void 0),t.__decorate([s.property({dependsOn:["error","messages","value"]})],O.prototype,"errorMessage",null),t.__decorate([s.property()],O.prototype,"group",void 0),t.__decorate([s.property({aliasOf:"fieldElement.hint"})],O.prototype,"hint",void 0),t.__decorate([s.property()],O.prototype,"includeTime",null),t.__decorate([s.property()],O.prototype,"label",null),t.__decorate([s.property()],O.prototype,"maxLength",null),t.__decorate([s.property()],O.prototype,"minLength",null),t.__decorate([s.property()],O.prototype,"messages",void 0),t.__decorate([s.property({aliasOf:"field.name"})],O.prototype,"name",void 0),t.__decorate([s.property()],O.prototype,"required",null),t.__decorate([s.property()],O.prototype,"submittable",null),t.__decorate([s.property()],O.prototype,"type",null),t.__decorate([s.property()],O.prototype,"valid",null),t.__decorate([s.property({value:null})],O.prototype,"value",null),t.__decorate([s.property()],O.prototype,"visible",null),O=t.__decorate([c.subclass("esri.widgets.FeatureForm.InputField")],O);return O}));