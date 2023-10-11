/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./ActionBase"],(function(e,t,r,i,s,o,a,p){"use strict";var l;let c=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).displayValueEnabled=!1,r.max=1,r.min=0,r.step=.1,r.type="slider",r.value=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new l({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})},r}(p);t.__decorate([r.property()],c.prototype,"displayValueEnabled",void 0),t.__decorate([r.property()],c.prototype,"max",void 0),t.__decorate([r.property()],c.prototype,"min",void 0),t.__decorate([r.property()],c.prototype,"step",void 0),t.__decorate([r.property()],c.prototype,"value",void 0),c=l=t.__decorate([a.subclass("esri.support.Action.ActionSlider")],c);return c}));