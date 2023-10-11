/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/lang","../../geometry/support/jsonUtils","./CIMPlacements"],(function(t,i,n,e){"use strict";function s(t){const n=i.clone(t);return f(n),n}function o(t){if(!t)return null;n.isPoint(t)?t.y=-t.y:n.isPolygon(t)?l(t.rings):n.isPolyline(t)?l(t.paths):n.isMultipoint(t)&&h(t.points)}function h(t){if(t){const i=t.length;for(let n=0;n<i;n++)t[n][1]=-t[n][1]}}function l(t){if(t)for(const i of t)h(i)}function r(t){if(t){for(let i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}}function a(t){if(t)for(const i of t)r(i)}function u(t){if(t){const i=t.length;for(let n=1;n<i;++n)t[n][0]+=t[n-1][0],t[n][1]+=t[n-1][1]}}function c(t){if(t)for(const i of t)u(i)}function f(t){t&&(n.isPolygon(t)?c(t.rings):n.isPolyline(t)?c(t.paths):n.isMultipoint(t)&&u(t.points),o(t))}function P(t){t&&(o(t),n.isPolygon(t)?a(t.rings):n.isPolyline(t)?a(t.paths):n.isMultipoint(t)&&r(t.points))}function p(t){if(t)for(const i of t)m(i)}function m(t){t&&t.reverse()}function g(t,i,n){return[t[0]+(i[0]-t[0])*n,t[1]+(i[1]-t[1])*n]}function y(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])}function d(t){return t[4]}function x(t,i){t[4]=i}let C=function(){function t(t,i,s,o){this.acceptPolygon=i,this.acceptPolyline=s,this.geomUnitsPerPoint=o,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(n.isPolygon(t)?i&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?s&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&i&&(this.multiPath=G(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new e.Placement}return t.prototype.next=function(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null},t}(),I=function(){function t(t,i,n,e){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=n,this.geomUnitsPerPoint=e,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}return t.prototype.next=function(){for(;;){if(!this.multiPath){let t=this.inputGeometries.next();for(;t;){if(n.isPolygon(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):n.isPolyline(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):n.isExtent(t)&&this.acceptPolygon&&(this.multiPath=G(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}},t}();function G(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}t.PathGeometryCursor=I,t.PathTransformationCursor=C,t.cloneAndDecodeGeometry=s,t.deltaDecodeGeometry=f,t.deltaEncodeGeometry=P,t.getCoord2D=g,t.getId=d,t.isClosedPath=y,t.reverseMultipath=p,t.reversePath=m,t.setId=x,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));