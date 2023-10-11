/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../geometry","../../../core/Error","../../../core/unitUtils","../../../geometry/projectionEllipsoid","../../../portal/support/geometryServiceUtils","../../../rest/geometryService/project","../../../rest/support/ProjectParameters","../../../geometry/Point","../../../geometry/SpatialReference"],(function(e,t,r,o,i,n,s,c,p,a,l){"use strict";let u=function(){function e(e,t){this.spatialReference=t,this.unitInMeters=i.getMetersPerUnitForSR(this.spatialReference,n.getReferenceEllipsoid(this.spatialReference).metersPerDegree),this._geometryServiceURLPromise=s.getGeometryServiceURL(e&&e.get("portalItem")).catch((()=>{throw new o("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config")}))}return e.prototype.toGeographic=function(){var e=t._asyncToGenerator((function*(e){const t=yield this._geometryServiceURLPromise;let r,o=!0;Array.isArray(e[0])&&"number"!=typeof e[0]?r=e:(r=[e],o=!1);const i=r.map((e=>e instanceof a?e:new a(e,this.spatialReference))),n=new p({geometries:i,outSpatialReference:l.WGS84}),s=(yield c.project(t,n)).map((e=>"point"===e.type?[e.x,e.y]:void 0));return o?s:s[0]}));function r(t){return e.apply(this,arguments)}return r}(),e}();e.MapCoordsHelper=u,e.default=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));