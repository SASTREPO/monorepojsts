/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./MomentumController","../../utils/navigationUtils","../../../camera/constraintUtils/common"],(function(e,o,t,r,n,s,c,a,i,m,l,u,p){"use strict";const h=m.create(),y=m.create();e.PanSphericalMomentumController=function(e){function t(o){var t;return(t=e.call(this,o)||this).interactionType=p.InteractionType.PAN,t}return o._inheritsLoose(t,e),t.prototype.momentumStep=function(e,o){const t=this.momentum.value1(e),r=this.momentum.value2(e);i.copy(y,o.eye),i.normalize(y,y),i.cross(this.momentum.axis2,y,this.momentum.axis1),u.applyRotationWithTwoAxes(o,h,this.momentum.axis1,t,this.momentum.axis2,r)},t}(l.MomentumController),t.__decorate([r.property({constructOnly:!0})],e.PanSphericalMomentumController.prototype,"momentum",void 0),e.PanSphericalMomentumController=t.__decorate([a.subclass("esri.views.3d.state.controllers.momentum.PanSphericalMomentumController")],e.PanSphericalMomentumController),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));