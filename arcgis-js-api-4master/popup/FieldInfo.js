/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/jsonMap","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./support/FieldInfoFormat"],(function(t,e,o,r,i,p,s,a,l,n){"use strict";var c;let d=c=function(e){function o(t){var o;return(o=e.call(this,t)||this).fieldName=null,o.format=null,o.isEditable=!1,o.label=null,o.stringFieldOption="text-box",o.statisticType=null,o.tooltip=null,o.visible=!0,o}return t._inheritsLoose(o,e),o.prototype.clone=function(){return new c({fieldName:this.fieldName,format:this.format?i.clone(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})},o}(r.JSONSupport);e.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"fieldName",void 0),e.__decorate([p.property({type:n,json:{write:!0}})],d.prototype,"format",void 0),e.__decorate([p.property({type:Boolean,json:{write:!0,default:!1}})],d.prototype,"isEditable",void 0),e.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"label",void 0),e.__decorate([a.enumeration(new o.JSONMap({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],d.prototype,"stringFieldOption",void 0),e.__decorate([p.property({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],d.prototype,"statisticType",void 0),e.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"tooltip",void 0),e.__decorate([p.property({type:Boolean,json:{write:!0}})],d.prototype,"visible",void 0),d=c=e.__decorate([l.subclass("esri.popup.FieldInfo")],d);return d}));