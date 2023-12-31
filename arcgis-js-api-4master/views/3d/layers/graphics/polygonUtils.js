/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry","../../../../core/maybe","../../../../geometry/projection","../../../../geometry/support/triangulationUtils","./elevationAlignmentUtils","../../terrain/OverlayRenderer","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/VertexAttribute","../../../../geometry/Extent","../../../../geometry/Polygon"],(function(t,e,i,o,n,r,s,a,u,c,p){"use strict";function l(t){const e=[[u.VertexAttribute.POSITION,t.indices]],o=[[u.VertexAttribute.POSITION,{size:3,data:t.attributeData.position,exclusive:!0}]];return i.isSome(t.attributeData.color)&&(o.push([u.VertexAttribute.COLOR,{size:4,data:t.attributeData.color,exclusive:!0}]),e.push([u.VertexAttribute.COLOR,new Uint32Array(t.indices.length)])),i.isSome(t.attributeData.uvMapSpace)&&(o.push([u.VertexAttribute.UVMAPSPACE,{size:4,data:t.attributeData.uvMapSpace,exclusive:!0}]),e.push([u.VertexAttribute.UVMAPSPACE,t.indices])),i.isSome(t.attributeData.boundingRect)&&(o.push([u.VertexAttribute.BOUNDINGRECT,{size:9,data:t.attributeData.boundingRect,exclusive:!0}]),e.push([u.VertexAttribute.BOUNDINGRECT,t.indices])),i.isSome(t.attributeData.mapPosition)&&(o.push([u.VertexAttribute.MAPPOS,{size:3,data:t.attributeData.mapPosition,exclusive:!0}]),e.push([u.VertexAttribute.MAPPOS,t.indices])),new a.Geometry(o,e)}function b(t){const e=[[u.VertexAttribute.POSITION,t.indices],[u.VertexAttribute.UV0,t.indices]],o=[[u.VertexAttribute.POSITION,{size:3,data:t.attributeData.position,exclusive:!0}],[u.VertexAttribute.UV0,{size:2,data:t.attributeData.uv0,exclusive:!0}]];return i.isSome(t.attributeData.mapPosition)&&(o.push([u.VertexAttribute.MAPPOS,{size:3,data:t.attributeData.mapPosition,exclusive:!0}]),e.push([u.VertexAttribute.MAPPOS,t.indices])),new a.Geometry(o,e)}function d(t){switch(t.type){case"extent":if(t instanceof c)return p.fromExtent(t);break;case"polygon":return t}return null}function g(t,e,i,o){const s=n.pathsToTriangulationInfo(t.rings,t.hasZ,n.CounterClockwiseMode.CCW_IS_HOLE),a=new Float64Array(s.position.length),u=r.applyPerVertexElevationAlignment(s.position,t.spatialReference,0,a,0,s.position,0,s.position.length/3,e,i,o),c=null!=u;return{position:s.position,mapPosition:a,polygons:A(s.polygons,s.position,a),outlines:y(s.outlines,s.position,a),projectionSuccess:c,sampledElevation:u}}function x(t,e){const i=n.pathsToTriangulationInfo(t.rings,!1,n.CounterClockwiseMode.CCW_IS_HOLE),r=o.projectBuffer(i.position,t.spatialReference,0,i.position,e,0,i.position.length/3);for(let o=2;o<i.position.length;o+=3)i.position[o]=s.DRAPED_Z;return{position:i.position,polygons:A(i.polygons,i.position),outlines:y(i.outlines,i.position),projectionSuccess:r}}function y(t,e,i){const o=new Array;for(const{index:n,count:r}of t){if(r<=1)continue;const t=3*n,s=t+3*r;o.push({index:n,count:r,position:e.subarray(t,s),mapPosition:i?i.subarray(t,s):void 0})}return o}function A(t,e,i){const o=new Array;for(const{index:n,count:r,holeIndices:s,pathLengths:a}of t){if(r<=1)continue;const t=3*n,u=t+3*r,c=s.map((t=>t-n));o.push({index:n,count:r,holeIndices:c,pathLengths:a,position:e.subarray(t,u),mapPosition:i?i.subarray(t,u):void 0})}return o}t.createColorGeometry=l,t.createWaterGeometry=b,t.geometryAsPolygon=d,t.geometryToRenderInfo=g,t.geometryToRenderInfoDraped=x,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
