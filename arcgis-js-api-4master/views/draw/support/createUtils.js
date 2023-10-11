/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../core/arrayUtils","../../../core/lang","../../../core/maybe","../../../core/unitUtils","../../../geometry/Circle","../../../geometry/geometryEngine","../../../geometry/support/coordsUtils","../../../geometry/support/spatialReferenceUtils","./surfaceCoordinateSystems","../../../geometry/Multipoint","../../../geometry/Point","../../../geometry/Polyline","../../../geometry/Polygon"],(function(e,t,a,n,o,r,i,c,s,l,u,y,f,m,x){"use strict";const p="DrawAction-snapping-graphics-layer";function h(e,t,a=null){return o.isSome(a)?[e,t,a]:[e,t]}function M(e,t){const a=new f({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(a.z=e[2]),a}function P(e,t){return new y({points:e,spatialReference:t})}function S(e,t,a){const n=new m({paths:e,spatialReference:t});return a&&s.unnormalizeGeometryOnDatelineCrossing(n),n}function g(e,t,o,r=!0){const i=n.clone(e);i.forEach((e=>{const t=e[0],n=e[e.length-1];a.equals(t,n)&&1!==e.length||e.push(e[0])}));let u=new x({rings:i,spatialReference:t});return u.rings.forEach((e=>{s.isClockwise(e,!1,!1)||e.reverse()})),o&&s.unnormalizeGeometryOnDatelineCrossing(u),r&&u.isSelfIntersecting&&l.isValid(t)&&(u=c.simplify(u)),u}function k(e,t,a){const n=t.mapToLocalMultiple(e),r=[],i={x:n[0].x,y:n[0].y},c={x:n[1].x,y:n[1].y},s=Math.round(c.x-i.x),l=Math.round(c.y-i.y),y=Math.max(Math.abs(s),Math.abs(l));if(a){const e={x:i.x+y,y:i.y+y},t={x:i.x-y,y:i.y-y};r.push(u.makeSurfacePoint(e.x,t.y),u.makeSurfacePoint(t.x,t.y),u.makeSurfacePoint(t.x,e.y),u.makeSurfacePoint(e.x,e.y))}else{const e={x:s>0?i.x+y:i.x-y,y:l>0?i.y+y:i.y-y};r.push(u.makeSurfacePoint(i.x,i.y),u.makeSurfacePoint(e.x,i.y),u.makeSurfacePoint(e.x,e.y),u.makeSurfacePoint(i.x,e.y))}return g([o.filterNones(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0)}function d(e,t,a){let n=t.mapToLocalMultiple(e);if(1===n.length){const e=48,t=n[0];n=[u.makeSurfacePoint(t.x-e,t.y+e),u.makeSurfacePoint(t.x+e,t.y-e),u.makeSurfacePoint(t.x+e,t.y-e),u.makeSurfacePoint(t.x-e,t.y+e)]}const r=[],i={x:n[0].x,y:n[0].y},c={x:n[1].x,y:n[1].y};if(a){const e=Math.round(c.x-i.x),t=Math.round(c.y-i.y);r.push(u.makeSurfacePoint(i.x-e,i.y-t),u.makeSurfacePoint(c.x,i.y-t),u.makeSurfacePoint(c.x,c.y),u.makeSurfacePoint(i.x-e,c.y))}else r.push(u.makeSurfacePoint(i.x,i.y),u.makeSurfacePoint(c.x,i.y),u.makeSurfacePoint(c.x,c.y),u.makeSurfacePoint(i.x,c.y));return g([o.filterNones(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0)}function R(e,t,a,n){const y=t.mapToLocalMultiple(e);let f=null,m=null;if(a)f=y[0],m=y[1];else{const e=y[0],t=y[1],a=Math.round(t.x-e.x),n=Math.round(t.y-e.y),o=Math.max(Math.abs(a),Math.abs(n));f=u.makeSurfacePoint(a>0?e.x+o/2:e.x-o/2,n>0?e.y+o/2:e.y-o/2),m=u.makeSurfacePoint(Math.abs(a)>Math.abs(n)?f.x-o/2:f.x,Math.abs(a)>Math.abs(n)?f.y:f.y-o/2)}const x=t.localToMap(f),p=t.localToMap(m);if(o.isNone(x)||o.isNone(p))return null;t.doUnnormalization&&s.unnormalizeVerticesOnDatelineCrossing([[x,p]],t.spatialReference);const h=M(x,t.spatialReference),P=M(p,t.spatialReference),S=r.getMetersPerUnitForSR(t.spatialReference);let k=0;if(l.isValid(t.spatialReference))k=S*c.distance(h,P,null);else{const e=f.x-m.x,t=f.y-m.y;k=S*Math.sqrt(e*e+t*t)*(n||1)}const d=new i({center:h,radius:k,radiusUnit:"meters",spatialReference:t.spatialReference});return g(d.rings,d.spatialReference,!1)}function b(e,t,a){const n=t.mapToLocalMultiple(e),r=n[0],i=n[1],c=Math.round(i.x-r.x),s=Math.round(i.y-r.y),l=u.makeSurfacePoint(a?r.x:r.x+c/2,a?r.y:r.y+s/2),y=a?c:c/2,f=a?s:s/2,m=60,x=[],p=2*Math.PI/m;for(let o=0;o<m;o++){const e=Math.cos(o*p),t=Math.sin(o*p),a=u.makeSurfacePoint(y*e+l.x,f*t+l.y);x.push(a)}return x.push(x[0]),g([o.filterNones(x.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!1)}e.SNAPPING_GRAPHICS_LAYER_ID=p,e.createCircle=R,e.createEllipse=b,e.createMultipoint=P,e.createPoint=M,e.createPolygon=g,e.createPolyline=S,e.createRectangle=d,e.createSquare=k,e.makeMapPoint=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));