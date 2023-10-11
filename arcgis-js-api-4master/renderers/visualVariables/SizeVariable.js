/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/jsonMap","../../core/Logger","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./VisualVariable","./support/SizeStop","./support/SizeVariableLegendOptions","./support/sizeVariableUtils","./support/visualVariableUtils"],(function(e,t,i,r,s,a,n,o,l,p,u,c,d,y,h,m,S,x){"use strict";var _;const z=s.getLogger("esri.renderers.visualVariables.SizeVariable"),v=new r.JSONMap({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),f=new r.JSONMap({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function w(e){if(null!=e)return"string"==typeof e||"number"==typeof e?a.toPt(e):"size"===e.type?S.isSizeVariable(e)?e:(delete(e={...e}).type,new b(e)):void 0}function V(e,t,i){if("object"!=typeof e)return e;const r=new b;return r.read(e,i),r}let b=_=function(t){function r(e){var i;return(i=t.call(this,e)||this).axis=null,i.legendOptions=null,i.normalizationField=null,i.scaleBy=null,i.target=null,i.type="size",i.useSymbolValue=null,i.valueExpression=null,i.valueRepresentation=null,i.valueUnit=null,i}e._inheritsLoose(r,t);var s=r.prototype;return s.castMaxSize=function(e){return w(e)},s.readMaxSize=function(e,t,i){return V(e,t,i)},s.castMinSize=function(e){return w(e)},s.readMinSize=function(e,t,i){return V(e,t,i)},s.readValueExpression=function(e,t){return e||t.expression&&"$view.scale"},s.writeValueExpressionWebScene=function(e,t,r,s){if("$view.scale"===e){if(s&&s.messages){const e=this.index,t="string"==typeof e?e:`visualVariables[${e}]`;s.messages.push(new i("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:t+".valueExpression",context:s}))}}else t[r]=e},s.readValueUnit=function(e){return e?f.read(e):null},s.clone=function(){return new _({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:S.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:S.isSizeVariable(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})},s.flipSizes=function(){if(this.transformationType===S.TransformationType.ClampedLinear){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if(this.transformationType===S.TransformationType.Stops){const e=this.stops,t=e.map((e=>e.size)).reverse(),i=e.length;for(let r=0;r<i;r++)e[r].size=t[r];return this}return this},s.getAttributeHash=function(){return`${t.prototype.getAttributeHash.call(this)}-${this.target}-${this.normalizationField}`},s._interpolateData=function(){return this.stops&&this.stops.map((e=>e.value||0))},e._createClass(r,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:x.viewScaleRE.test(this.valueExpression)}}},{key:"expression",set:function(e){z.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}},{key:"index",set:function(e){S.isSizeVariable(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),S.isSizeVariable(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}},{key:"inputValueType",get:function(){return S.getInputValueType(this)}},{key:"maxDataValue",set:function(e){e&&this.stops&&(z.warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}},{key:"maxSize",set:function(e){e&&this.stops&&(z.warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}},{key:"minDataValue",set:function(e){e&&this.stops&&(z.warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}},{key:"minSize",set:function(e){e&&this.stops&&(z.warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}},{key:"arcadeRequired",get:function(){return!!this.valueExpression||(this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)}},{key:"stops",set:function(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)):e&&(z.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}},{key:"transformationType",get:function(){return S.getTransformationType(this,this.inputValueType)}}]),r}(y);t.__decorate([n.property({readOnly:!0})],b.prototype,"cache",null),t.__decorate([n.property({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],b.prototype,"axis",void 0),t.__decorate([n.property({type:String,value:null,json:{read:!1}})],b.prototype,"expression",null),t.__decorate([n.property()],b.prototype,"index",null),t.__decorate([n.property({type:String,readOnly:!0})],b.prototype,"inputValueType",null),t.__decorate([n.property({type:m,json:{write:!0}})],b.prototype,"legendOptions",void 0),t.__decorate([n.property({type:Number,value:null,json:{write:!0}})],b.prototype,"maxDataValue",null),t.__decorate([n.property({type:Number,value:null,json:{write:!0}})],b.prototype,"maxSize",null),t.__decorate([p.cast("maxSize")],b.prototype,"castMaxSize",null),t.__decorate([u.reader("maxSize")],b.prototype,"readMaxSize",null),t.__decorate([n.property({type:Number,value:null,json:{write:!0}})],b.prototype,"minDataValue",null),t.__decorate([n.property({type:Number,value:null,json:{write:!0}})],b.prototype,"minSize",null),t.__decorate([p.cast("minSize")],b.prototype,"castMinSize",null),t.__decorate([u.reader("minSize")],b.prototype,"readMinSize",null),t.__decorate([n.property({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0),t.__decorate([n.property({readOnly:!0})],b.prototype,"arcadeRequired",null),t.__decorate([n.property({type:String})],b.prototype,"scaleBy",void 0),t.__decorate([n.property({type:[h],value:null,json:{write:!0}})],b.prototype,"stops",null),t.__decorate([n.property({type:["outline"],json:{write:!0}})],b.prototype,"target",void 0),t.__decorate([n.property({type:String,readOnly:!0})],b.prototype,"transformationType",null),t.__decorate([n.property({type:["size"],json:{type:["sizeInfo"]}})],b.prototype,"type",void 0),t.__decorate([n.property({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],b.prototype,"useSymbolValue",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],b.prototype,"valueExpression",void 0),t.__decorate([u.reader("valueExpression",["valueExpression","expression"])],b.prototype,"readValueExpression",null),t.__decorate([d.writer("web-scene","valueExpression")],b.prototype,"writeValueExpressionWebScene",null),t.__decorate([n.property({type:["radius","diameter","area","width","distance"],json:{write:!0}})],b.prototype,"valueRepresentation",void 0),t.__decorate([n.property({type:f.apiValues,json:{write:f.write,origins:{"web-map":{read:!1},"web-scene":{write:!0}}}})],b.prototype,"valueUnit",void 0),t.__decorate([u.reader("valueUnit")],b.prototype,"readValueUnit",null),b=_=t.__decorate([c.subclass("esri.renderers.visualVariables.SizeVariable")],b);return b}));