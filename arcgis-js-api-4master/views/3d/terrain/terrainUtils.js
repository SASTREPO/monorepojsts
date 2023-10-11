/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/Collection","../../../core/maybe","../../../geometry/support/spatialReferenceUtils","../../../layers/support/layerUtils","../../ViewingMode","../support/StreamDataLoader","../../../chunks/terrainUtilsPlanar","../../../chunks/terrainUtilsSpherical"],(function(e,t,n,i,l,r,o,a,u){"use strict";const s={[r.ViewingMode.Global]:u.terrainUtilsSpherical,[r.ViewingMode.Local]:a.terrainUtilsPlanar};function c(e,t){e||console.warn("Terrain: "+t)}const f=1.2,d=80/180*Math.PI,y=110/180*Math.PI;function p(e,t,i){const l=s[e.viewingMode];let r;if(l.isInsideExtent(e,t))r=n.unwrapOr(e.getElevation(t[0],t[1],t[1],e.spatialReference),0);else{if(!l.isInsideExtent(e,t,f))return 0;const i=e.getTileWithElevation(t[0],t[1],t[1],e.spatialReference);r=.5*((n.isSome(i)?i.elevationBounds[0]:e.elevationBounds.min)+(n.isSome(i)?i.elevationBounds[1]:e.elevationBounds.max));const o=l.tiltToExtentEdge(e,t,r);if(o>d&&o<y)return 0}const o=t[2]-r;return Math.abs(o)<i?0:o<0?-1:1}function m(e){return S(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer}function I(e){return"vector-tile"===(null==e?void 0:e.type)}function v(e){return"imagery-tile"===(null==e?void 0:e.type)||"wcs"===(null==e?void 0:e.type)}function S(e){return"imagery-tile-3d"===(null==e?void 0:e.type)}function T(e){return"tile-3d"===(null==e?void 0:e.type)}function g(e){return"vector-tile-3d"===(null==e?void 0:e.type)}function x(e){return"wmts-3d"===(null==e?void 0:e.type)}function L(e){return"elevation-3d"===(null==e?void 0:e.type)}function E(e){return e&&(T(e)||S(e)||L(e)||g(e)||x(e))}function h(e){var t;const i=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return n.isSome(i)&&"type"in i&&"raster-tile"===i.type}function w(e){var t;const i=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return n.isSome(i)&&"type"in i&&"vector-tile"===i.type}function M(e){var t;const i=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return n.isSome(i)&&"type"in i&&"tile-texture"===i.type}function V(e){var t;const n=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return n instanceof HTMLImageElement||n instanceof o.ImageWithType||n instanceof HTMLCanvasElement||n instanceof ImageData}function R(e){return n.isSome(e)&&"release"in e&&e.release(),null}function b(e){return e.fetchTile&&!1!==e.hasOverriddenFetchTile}function C(e,t,n,i){return s[i].checkIfTileInfoSupportedForViewSR(e,n,t)}function F(e,t,i){let o=null,a=null;if(l.isWMTSLayer(e)){const n=W(e,t,i);o=n.tileInfo,a=n.fullExtent}else{a=v(e)?e.getCompatibleFullExtent(t):e.fullExtent;const n=i===r.ViewingMode.Local;if(v(e))o=e.getCompatibleTileInfo(t,a,n);else if(I(e)){const i=n&&!P(t)||k.force512VTL,l=e.tileInfo.spatialReference.isGeographic;o=i?e.tileInfo:e.tileInfo.getOrCreateCompatible(256,l?1:2)}else o=e.tileInfo}return n.isSome(o)&&n.isSome(a)&&null==C(o,a,t,i)?{tileInfo:o,fullExtent:a}:null}function W(e,i,r){const o=l.getTileMaxtrixSetFromActiveLayer(e);if(n.isSome(o)){if(!t.isCollection(o))return{tileInfo:o.tileInfo,fullExtent:o.fullExtent};{const e=o.find((e=>null==C(e.tileInfo,e.fullExtent,i,r)));if(e)return{tileInfo:e.tileInfo,fullExtent:e.fullExtent}}}return{tileInfo:null,fullExtent:null}}function P(e){return e.isWGS84||e.isWebMercator||i.isCGCS2000(e)||!i.isEarth(e)}const k={force512VTL:!1};e.checkIfTileInfoSupportedForView=C,e.computeSkirtScale=p,e.getLayerWithExtentRange=m,e.getTileInfoAndExtentFromWMTSLayer=W,e.getTiledLayerInfo=F,e.isElevationLayerView=L,e.isImageryTileLayerView=S,e.isImageryTileRenderInfo=h,e.isProjectableRasterLayer=v,e.isRasterTileRenderInfo=V,e.isSurfaceLayerView=E,e.isTextureTileRenderInfo=M,e.isTileLayerView=T,e.isVectorTileLayer=I,e.isVectorTileLayerView=g,e.isVectorTileRenderInfo=w,e.isWMTSLayerView=x,e.releaseTileData=R,e.test=k,e.useFetchTileForLayer=b,e.vtlAssumes256PixelSizeAsDefault=P,e.weakAssert=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));