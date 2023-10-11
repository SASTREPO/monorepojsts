/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./gamepad/GamepadSettings"],(function(e,o,r,t,a,s,n,p,c){"use strict";let l=function(o){function r(e){var r;return(r=o.call(this,e)||this).browserTouchPanEnabled=!0,r.gamepad=new c,r.momentumEnabled=!0,r.mouseWheelZoomEnabled=!0,r}return e._inheritsLoose(r,o),r}(r);o.__decorate([t.property({type:Boolean})],l.prototype,"browserTouchPanEnabled",void 0),o.__decorate([t.property({type:c,nonNullable:!0})],l.prototype,"gamepad",void 0),o.__decorate([t.property({type:Boolean})],l.prototype,"momentumEnabled",void 0),o.__decorate([t.property({type:Boolean})],l.prototype,"mouseWheelZoomEnabled",void 0),l=o.__decorate([p.subclass("esri.views.navigation.Navigation")],l);return l}));