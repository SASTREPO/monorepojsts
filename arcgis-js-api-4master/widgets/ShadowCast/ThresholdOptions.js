/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/Accessor","../../core/timeUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,c,p,i,a,l){"use strict";let u=function(o){function t(){var e;return(e=o.apply(this,arguments)||this).color=new r([255,0,0,.7]),e.value=s.convertTime(4,"hours","milliseconds"),e.minValue=0,e.maxValue=s.convertTime(8,"hours","milliseconds"),e}return e._inheritsLoose(t,o),t}(t);o.__decorate([c.property({type:r})],u.prototype,"color",void 0),o.__decorate([c.property()],u.prototype,"value",void 0),o.__decorate([c.property()],u.prototype,"minValue",void 0),o.__decorate([c.property()],u.prototype,"maxValue",void 0),u=o.__decorate([l.subclass("esri.widgets.ShadowCast.ThresholdOptions")],u);return u}));