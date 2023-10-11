/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../patterns/utils","./materialUtils","./symbolLayerUtils3D"],(function(e,t,r,o,s,l,p,n,i,a,c,u,y,b,S){"use strict";var d;e.Symbol3DOutline=d=function(e){function r(t){var r;return(r=e.call(this,t)||this).color=new o([0,0,0,1]),r.size=p.px2pt(1),r.pattern=null,r.patternCap="butt",r}return t._inheritsLoose(r,e),r.prototype.clone=function(){const e={color:l.isSome(this.color)?this.color.clone():null,size:this.size,pattern:l.isSome(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap};return new d(e)},r}(s.JSONSupport),r.__decorate([n.property(b.colorAndTransparencyProperty)],e.Symbol3DOutline.prototype,"color",void 0),r.__decorate([n.property(b.screenSizeProperty)],e.Symbol3DOutline.prototype,"size",void 0),r.__decorate([n.property(y.symbol3dLinePatternProperty)],e.Symbol3DOutline.prototype,"pattern",void 0),r.__decorate([n.property({type:S.lineCaps,json:{default:"butt",write:{overridePolicy(){return{enabled:l.isSome(this.pattern)}}}}})],e.Symbol3DOutline.prototype,"patternCap",void 0),e.Symbol3DOutline=d=r.__decorate([u.subclass("esri.symbols.support.Symbol3DOutline")],e.Symbol3DOutline),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));