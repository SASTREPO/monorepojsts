/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./materialUtils"],(function(o,e,r,t,s,l,c,p,n,a){"use strict";var i;o.Symbol3DHalo=i=function(o){function r(){var e;return(e=o.apply(this,arguments)||this).color=new t([0,0,0,1]),e.size=0,e}return e._inheritsLoose(r,o),r.prototype.clone=function(){const o={color:l.clone(this.color),size:this.size};return new i(o)},r}(s.JSONSupport),r.__decorate([c.property(a.colorAndTransparencyProperty)],o.Symbol3DHalo.prototype,"color",void 0),r.__decorate([c.property(a.screenSizeProperty)],o.Symbol3DHalo.prototype,"size",void 0),o.Symbol3DHalo=i=r.__decorate([n.subclass("esri.symbols.support.Symbol3DHalo")],o.Symbol3DHalo),Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));