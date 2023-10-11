/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/support/frustum"],(function(t,e,i,n,s){"use strict";let r=function(){function t(t){this.renderCoordsHelper=t,this.frustum=s.create(),this._points=s.createPoints(),this.lines=new Array(12),this._origin=n.create(),this._direction=n.create(),this._altitude=null;for(let e=0;e<12;e++)this.lines[e]={origin:null,direction:n.create(),endpoint:null}}var r=t.prototype;return r.update=function(t){s.fromMatrix(t.viewMatrix,t.projectionMatrix,this.frustum,this._points),i.copy(this._origin,t.eye),i.copy(this._direction,t.viewForward),this._altitude=this.renderCoordsHelper.getAltitude(this._origin),this._updateLines()},r.updatePoints=function(t){for(let e=0;e<this._points.length;e++)i.copy(this._points[e],t[e]);s.computePlanes(this.frustum,this._points),this._updateLines()},r.intersectsSphere=function(t){return s.intersectsSphere(this.frustum,t)},r.intersectsRay=function(t){return s.intersectsRay(this.frustum,t)},r.intersectsLineSegment=function(t,e){return s.intersectsLineSegment(this.frustum,t,e)},r.intersectsPoint=function(t){return s.intersectsPoint(this.frustum,t)},r._updateLines=function(){const t=this._points;for(let e=0;e<4;e++){const i=e+4;o(this.lines[e],t[e],t[i]),o(this.lines[e+4],t[e],3===e?t[0]:t[e+1]),o(this.lines[e+8],t[i],3===e?t[4]:t[i+1])}},e._createClass(t,[{key:"planes",get:function(){return this.frustum}},{key:"points",get:function(){return this._points}},{key:"mutablePoints",get:function(){return this._points}},{key:"direction",get:function(){return this._direction}},{key:"altitude",get:function(){return this._altitude}}]),t}();function o(t,e,n){t.origin=e,t.endpoint=n,i.direction(t.direction,e,n)}r.planePointIndices=s.planePointIndices,r.nearFarLineIndices=[[s.PointIndex.NEAR_BOTTOM_LEFT,s.PointIndex.FAR_BOTTOM_LEFT],[s.PointIndex.NEAR_BOTTOM_RIGHT,s.PointIndex.FAR_BOTTOM_RIGHT],[s.PointIndex.NEAR_TOP_RIGHT,s.PointIndex.FAR_TOP_RIGHT],[s.PointIndex.NEAR_TOP_LEFT,s.PointIndex.FAR_TOP_LEFT]],t.Frustum=r,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));