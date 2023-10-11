/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../kernel","../kernel","../../chunks/languageUtils","./centroid","../../geometry/Extent","../../geometry/Geometry","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/support/jsonUtils","../../core/unitUtils"],(function(e,n,t,r,o,i,l,u,a,f,s,c,g){"use strict";let m=null;function d(e){return 0===n.version.indexOf("4.")?f.fromExtent(e):new f({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function h(e){m=e}function y(e,n){if("polygon"!==e.type&&"polyline"!==e.type&&"extent"!==e.type)return 0;let t=1;if(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid){t=o.getMetersPerVerticalUnitForSR(e.spatialReference)/g.getMetersPerUnitForSR(e.spatialReference)}let i=0;if("polyline"===e.type)for(const r of e.paths)for(let e=1;e<r.length;e++)i+=o.segmentLength3d(r[e],r[e-1],t);else if("polygon"===e.type)for(const r of e.rings){for(let e=1;e<r.length;e++)i+=o.segmentLength3d(r[e],r[e-1],t);(r[0][0]!==r[r.length-1][0]||r[0][1]!==r[r.length-1][1]||void 0!==r[0][2]&&r[0][2]!==r[r.length-1][2])&&(i+=o.segmentLength3d(r[0],r[r.length-1],t))}else"extent"===e.type&&(i+=2*o.segmentLength3d([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],t),i+=2*o.segmentLength3d([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],t),i*=2,i+=4*Math.abs(r.defaultUndefined(e.zmax,0)*t-r.defaultUndefined(e.zmin,0)*t));const l=new s({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,i]]});return m.planarLength(l,n)}function p(e,n){function g(e){if(r.pcCheck(e,2,2),e[0]instanceof l&&e[1]instanceof l);else if(e[0]instanceof l&&null===e[1]);else if(e[1]instanceof l&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}e.disjoint=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]||m.disjoint(t[0],t[1])}))},e.intersects=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.intersects(t[0],t[1])}))},e.touches=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.touches(t[0],t[1])}))},e.crosses=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.crosses(t[0],t[1])}))},e.within=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.within(t[0],t[1])}))},e.contains=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.contains(t[0],t[1])}))},e.overlaps=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.overlaps(t[0],t[1])}))},e.equals=function(e,t){return n(e,t,(function(e,n,t){return r.pcCheck(t,2,2),t[0]===t[1]||(t[0]instanceof l&&t[1]instanceof l?m.equals(t[0],t[1]):!(!r.isDate(t[0])||!r.isDate(t[1]))&&t[0].getTime()===t[1].getTime())}))},e.relate=function(e,t){return n(e,t,(function(e,n,t){if(t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,3,3),t[0]instanceof l&&t[1]instanceof l)return m.relate(t[0],t[1],r.toString(t[2]));if(t[0]instanceof l&&null===t[1])return!1;if(t[1]instanceof l&&null===t[0])return!1;if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))},e.intersection=function(e,t){return n(e,t,(function(e,n,t){return g(t=r.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]?null:m.intersect(t[0],t[1])}))},e.union=function(e,o){return n(e,o,(function(n,o,i){const u=[];if(0===(i=r.autoCastFeatureToGeometry(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(r.isArray(i[0])){const e=r.autoCastFeatureToGeometry(i[0]);for(let n=0;n<e.length;n++)if(null!==e[n]){if(!(e[n]instanceof l))throw new Error("Illegal Argument");u.push(e[n])}}else{if(!r.isImmutableArray(i[0])){if(i[0]instanceof l)return r.fixSpatialReference(t.cloneGeometry(i[0]),e.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const e=r.autoCastFeatureToGeometry(i[0].toArray());for(let n=0;n<e.length;n++)if(null!==e[n]){if(!(e[n]instanceof l))throw new Error("Illegal Argument");u.push(e[n])}}}else for(let e=0;e<i.length;e++)if(null!==i[e]){if(!(i[e]instanceof l))throw new Error("Illegal Argument");u.push(i[e])}return 0===u.length?null:m.union(u)}))},e.difference=function(e,o){return n(e,o,(function(e,n,o){return g(o=r.autoCastFeatureToGeometry(o)),null!==o[0]&&null===o[1]?t.cloneGeometry(o[0]):null===o[0]?null:m.difference(o[0],o[1])}))},e.symmetricdifference=function(e,o){return n(e,o,(function(e,n,o){return g(o=r.autoCastFeatureToGeometry(o)),null===o[0]&&null===o[1]?null:null===o[0]?t.cloneGeometry(o[1]):null===o[1]?t.cloneGeometry(o[0]):m.symmetricDifference(o[0],o[1])}))},e.clip=function(e,t){return n(e,t,(function(e,n,t){if(t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,2,2),!(t[1]instanceof i)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return null;if(!(t[0]instanceof l))throw new Error("Illegal Argument");return null===t[1]?null:m.clip(t[0],t[1])}))},e.cut=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,2),!(o[1]instanceof s)&&null!==o[1])throw new Error("Illegal Argument");if(null===o[0])return[];if(!(o[0]instanceof l))throw new Error("Illegal Argument");return null===o[1]?[t.cloneGeometry(o[0])]:m.cut(o[0],o[1])}))},e.area=function(e,o){return n(e,o,(function(n,o,i){if(r.pcCheck(i,1,2),null===(i=r.autoCastFeatureToGeometry(i))[0])return 0;if(r.isArray(i[0])||r.isImmutableArray(i[0])){const n=r.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===n?0:m.planarArea(n,t.convertSquareUnitsToCode(r.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof l))throw new Error("Illegal Argument");return m.planarArea(i[0],t.convertSquareUnitsToCode(r.defaultUndefined(i[1],-1)))}))},e.areageodetic=function(e,o){return n(e,o,(function(n,o,i){if(r.pcCheck(i,1,2),null===(i=r.autoCastFeatureToGeometry(i))[0])return 0;if(r.isArray(i[0])||r.isImmutableArray(i[0])){const n=r.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===n?0:m.geodesicArea(n,t.convertSquareUnitsToCode(r.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof l))throw new Error("Illegal Argument");return m.geodesicArea(i[0],t.convertSquareUnitsToCode(r.defaultUndefined(i[1],-1)))}))},e.length=function(e,o){return n(e,o,(function(n,o,i){if(r.pcCheck(i,1,2),null===(i=r.autoCastFeatureToGeometry(i))[0])return 0;if(r.isArray(i[0])||r.isImmutableArray(i[0])){const n=r.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===n?0:m.planarLength(n,t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof l))throw new Error("Illegal Argument");return m.planarLength(i[0],t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}))},e.length3d=function(e,o){return n(e,o,(function(n,o,i){if(r.pcCheck(i,1,2),null===(i=r.autoCastFeatureToGeometry(i))[0])return 0;if(r.isArray(i[0])||r.isImmutableArray(i[0])){const n=r.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===n?0:!0===n.hasZ?y(n,t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1))):m.planarLength(n,t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof l))throw new Error("Illegal Argument");return!0===i[0].hasZ?y(i[0],t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1))):m.planarLength(i[0],t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}))},e.lengthgeodetic=function(e,o){return n(e,o,(function(n,o,i){if(r.pcCheck(i,1,2),null===(i=r.autoCastFeatureToGeometry(i))[0])return 0;if(r.isArray(i[0])||r.isImmutableArray(i[0])){const n=r.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===n?0:m.geodesicLength(n,t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof l))throw new Error("Illegal Argument");return m.geodesicLength(i[0],t.convertLinearUnitsToCode(r.defaultUndefined(i[1],-1)))}))},e.distance=function(e,o){return n(e,o,(function(n,o,i){i=r.autoCastFeatureToGeometry(i),r.pcCheck(i,2,3);let u=i[0];(r.isArray(i[0])||r.isImmutableArray(i[0]))&&(u=r.autoCastArrayOfPointsToMultiPoint(i[0],e.spatialReference));let a=i[1];if((r.isArray(i[1])||r.isImmutableArray(i[1]))&&(a=r.autoCastArrayOfPointsToMultiPoint(i[1],e.spatialReference)),!(u instanceof l))throw new Error("Illegal Argument");if(!(a instanceof l))throw new Error("Illegal Argument");return m.distance(u,a,t.convertLinearUnitsToCode(r.defaultUndefined(i[2],-1)))}))},e.distancegeodetic=function(e,o){return n(e,o,(function(e,n,o){o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,3);const i=o[0],l=o[1];if(!(i instanceof a))throw new Error("Illegal Argument");if(!(l instanceof a))throw new Error("Illegal Argument");const u=new s({paths:[],spatialReference:i.spatialReference});return u.addPath([i,l]),m.geodesicLength(u,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1)))}))},e.densify=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,3),null===o[0])return null;if(!(o[0]instanceof l))throw new Error("Illegal Argument");const u=r.toNumber(o[1]);if(isNaN(u))throw new Error("Illegal Argument");if(u<=0)throw new Error("Illegal Argument");return o[0]instanceof f||o[0]instanceof s?m.densify(o[0],u,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1))):o[0]instanceof i?m.densify(d(o[0]),u,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1))):o[0]}))},e.densifygeodetic=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,3),null===o[0])return null;if(!(o[0]instanceof l))throw new Error("Illegal Argument");const u=r.toNumber(o[1]);if(isNaN(u))throw new Error("Illegal Argument");if(u<=0)throw new Error("Illegal Argument");return o[0]instanceof f||o[0]instanceof s?m.geodesicDensify(o[0],u,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1))):o[0]instanceof i?m.geodesicDensify(d(o[0]),u,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1))):o[0]}))},e.generalize=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,4),null===o[0])return null;if(!(o[0]instanceof l))throw new Error("Illegal Argument");const i=r.toNumber(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return m.generalize(o[0],i,r.toBoolean(r.defaultUndefined(o[2],!0)),t.convertLinearUnitsToCode(r.defaultUndefined(o[3],-1)))}))},e.buffer=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,3),null===o[0])return null;if(!(o[0]instanceof l))throw new Error("Illegal Argument");const i=r.toNumber(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?t.cloneGeometry(o[0]):m.buffer(o[0],i,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1)))}))},e.buffergeodetic=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,3),null===o[0])return null;if(!(o[0]instanceof l))throw new Error("Illegal Argument");const i=r.toNumber(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?t.cloneGeometry(o[0]):m.geodesicBuffer(o[0],i,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1)))}))},e.offset=function(e,o){return n(e,o,(function(e,n,o){if(o=r.autoCastFeatureToGeometry(o),r.pcCheck(o,2,6),null===o[0])return null;if(!(o[0]instanceof f||o[0]instanceof s))throw new Error("Illegal Argument");const i=r.toNumber(o[1]);if(isNaN(i))throw new Error("Illegal Argument");const l=r.toNumber(r.defaultUndefined(o[4],10));if(isNaN(l))throw new Error("Illegal Argument");const u=r.toNumber(r.defaultUndefined(o[5],0));if(isNaN(u))throw new Error("Illegal Argument");return m.offset(o[0],i,t.convertLinearUnitsToCode(r.defaultUndefined(o[2],-1)),r.toString(r.defaultUndefined(o[3],"round")).toLowerCase(),l,u)}))},e.rotate=function(e,t){return n(e,t,(function(e,n,t){t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,2,3);let o=t[0];if(null===o)return null;if(!(o instanceof l))throw new Error("Illegal Argument");o instanceof i&&(o=f.fromExtent(o));const u=r.toNumber(t[1]);if(isNaN(u))throw new Error("Illegal Argument");const s=r.defaultUndefined(t[2],null);if(null===s)return m.rotate(o,u);if(s instanceof a)return m.rotate(o,u,s);throw new Error("Illegal Argument")}))},e.centroid=function(e,c){return n(e,c,(function(n,c,g){if(g=r.autoCastFeatureToGeometry(g),r.pcCheck(g,1,1),null===g[0])return null;let m=g[0];if((r.isArray(g[0])||r.isImmutableArray(g[0]))&&(m=r.autoCastArrayOfPointsToMultiPoint(g[0],e.spatialReference)),null===m)return null;if(!(m instanceof l))throw new Error("Illegal Argument");return m instanceof a?r.fixSpatialReference(t.cloneGeometry(g[0]),e.spatialReference):m instanceof f?m.centroid:m instanceof s?o.centroidPolyline(m):m instanceof u?o.centroidMultiPoint(m):m instanceof i?m.center:null}))},e.multiparttosinglepart=function(e,o){return n(e,o,(function(n,o,g){g=r.autoCastFeatureToGeometry(g),r.pcCheck(g,1,1);const d=[];if(null===g[0])return null;if(!(g[0]instanceof l))throw new Error("Illegal Argument");if(g[0]instanceof a)return[r.fixSpatialReference(t.cloneGeometry(g[0]),e.spatialReference)];if(g[0]instanceof i)return[r.fixSpatialReference(t.cloneGeometry(g[0]),e.spatialReference)];const h=m.simplify(g[0]);if(h instanceof f){const e=[],n=[];for(let t=0;t<h.rings.length;t++)if(h.isClockwise(h.rings[t])){const n=c.fromJSON({rings:[h.rings[t]],hasZ:!0===h.hasZ,hasM:!0===h.hasM,spatialReference:h.spatialReference.toJSON()});e.push(n)}else n.push({ring:h.rings[t],pt:h.getPoint(t,0)});for(let t=0;t<n.length;t++)for(let r=0;r<e.length;r++)if(e[r].contains(n[t].pt)){e[r].addRing(n[t].ring);break}return e}if(h instanceof s){const e=[];for(let n=0;n<h.paths.length;n++){const t=c.fromJSON({paths:[h.paths[n]],hasZ:!0===h.hasZ,hasM:!0===h.hasM,spatialReference:h.spatialReference.toJSON()});e.push(t)}return e}if(g[0]instanceof u){const n=r.fixSpatialReference(t.cloneGeometry(g[0]),e.spatialReference);for(let e=0;e<n.points.length;e++)d.push(n.getPoint(e));return d}return null}))},e.issimple=function(e,t){return n(e,t,(function(e,n,t){if(t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,1,1),null===t[0])return!0;if(!(t[0]instanceof l))throw new Error("Illegal Argument");return m.isSimple(t[0])}))},e.simplify=function(e,t){return n(e,t,(function(e,n,t){if(t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,1,1),null===t[0])return null;if(!(t[0]instanceof l))throw new Error("Illegal Argument");return m.simplify(t[0])}))}}e.registerFunctions=p,e.setGeometryEngine=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));