/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../Basemap","../config","../core/Collection","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/ensureType","./basemapDefinitions"],(function(e,r,a,n,t,i,l,s,u){"use strict";const o=t.getLogger("esri.support.basemapUtils");function c(){return{}}function f(e){for(const r in e){const a=e[r];!1===(null==a?void 0:a.destroyed)&&a.destroy(),delete e[r]}}function p(e,n){var t;let i;if("string"==typeof e){if(!(e in u.esriBasemapDefinitions)){const r=Object.entries(u.esriBasemapDefinitions).filter((([e,r])=>a.apiKey&&!r.classic||!a.apiKey&&r.classic&&!r.deprecated)).map((([e])=>`"${e}"`)).join(", ");return o.warn(`Unable to find basemap definition for: ${e}. Try one of these: ${r}`),null}n&&(i=n[e]),i||(i=r.fromId(e),n&&(n[e]=i))}else i=s.ensureType(r,e);return null!=(t=i)&&t.destroyed&&(o.warn("The provided basemap is already destroyed",{basemap:i}),i=null),i}function y(e,a=null){const n=p(e);if(!n)return null;const t=new r({id:n.id,title:n.title,baseLayers:n.baseLayers.slice(),referenceLayers:n.referenceLayers.slice()});return a&&(t.baseLayers=b(t.baseLayers,a.baseLayers),t.referenceLayers=b(t.referenceLayers,a.referenceLayers)),t.load().catch((()=>{})),t.portalItem=n.portalItem,t}function d(e){let r=null;const a=R(e),n=!a.baseLayers.length;for(const t in u.esriBasemapDefinitions){const e=B(a,w(u.esriBasemapDefinitions[t]),{mustMatchReferences:n});if("equal"===e){r=t;break}"base-layers-equal"===e&&(r=t)}return r}function m(e,r){if(e===r)return!0;return"equal"===B(R(e),R(r),{mustMatchReferences:!0})}function b(e,r){const a=new n;return e.forEach((e=>{const n=r.find((r=>M(T(e),T(r))))||e;a.some((e=>e===n))?a.push(e):a.push(n)})),a}function L(e){return!(null==e||!e.baseLayers.concat(e.referenceLayers).some(v))}function v(e){if(h(e.url))return!0;if("vector-tile"===e.type)for(const r in e.sourceNameToSource){const a=e.sourceNameToSource[r];if(h(null==a?void 0:a.sourceUrl))return!0}return!1}function S(e,r){var a,n,t;if(i.isNone(r)||i.isNone(e))return{spatialReference:null,updating:!1};if("not-loaded"===r.loadStatus)return r.load(),{spatialReference:null,updating:!0};if(r.spatialReference)return{spatialReference:r.spatialReference,updating:!1};if(0===r.baseLayers.length)return{spatialReference:null,updating:!1};const l=r.baseLayers.getItemAt(0);switch(l.loadStatus){case"not-loaded":l.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}const s=(("supportedSpatialReferences"in l?l.supportedSpatialReferences:null)||["tileInfo"in l?null==(a=l.tileInfo)?void 0:a.spatialReference:l.spatialReference]).filter(Boolean);return e.spatialReference?{spatialReference:null!=(n=null!=(t=s.find((r=>e.spatialReference.equals(r))))?t:s[0])?n:null,updating:!1}:{spatialReference:s[0],updating:!1}}const g=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function h(e){if(!e)return!1;const r=new l.Url(l.makeAbsolute(e));return g.test(r.authority)}function R(e){return e?!e.loaded&&e.resourceInfo?w(e.resourceInfo.data):{baseLayers:I(e.baseLayers),referenceLayers:I(e.referenceLayers)}:null}function I(e){return(n.isCollection(e)?e.toArray():e).map(T)}function T(e){var r,a;return{type:e.type,url:D("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!i.isSome(e.sublayers)||null==(r=e.sublayers)?void 0:r.map((e=>({id:e.id,visible:e.visible}))),activeLayerId:"wmts"===e.type?null==(a=e.activeLayer)?void 0:a.id:void 0}}function w(e){return e?{baseLayers:q(e.baseMapLayers.filter((e=>!e.isReference))),referenceLayers:q(e.baseMapLayers.filter((e=>e.isReference)))}:null}function q(e){return e.map((e=>x(e)))}function x(e){let r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:D(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}function B(e,r,a){if(null!=e!=(null!=r))return"not-equal";if(!e)return"equal";if(!U(e.baseLayers,r.baseLayers))return"not-equal";return U(e.referenceLayers,r.referenceLayers)?"equal":a.mustMatchReferences?"not-equal":"base-layers-equal"}function U(e,r){if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(!M(e[a],r[a]))return!1;return!0}function M(e,r){if(e.type!==r.type||e.url!==r.url||e.minScale!==r.minScale||e.maxScale!==r.maxScale||e.visible!==r.visible||e.opacity!==r.opacity)return!1;if(i.isSome(e.activeLayerId)||i.isSome(r.activeLayerId))return e.activeLayerId===r.activeLayerId;if(i.isSome(e.sublayers)||i.isSome(r.sublayers)){if(i.isNone(e.sublayers)||i.isNone(r.sublayers)||e.sublayers.length!==r.sublayers.length)return!1;for(let a=0;a<e.sublayers.length;a++){const n=e.sublayers.at(a),t=r.sublayers.at(a);if(n.id!==t.id||n.visible!==t.visible)return!1}}return!0}function D(e){return e?l.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}e.clonePreservingTiledLayers=y,e.contentEquals=m,e.createCache=c,e.destroyCache=f,e.ensureType=p,e.findSpatialReference=S,e.getWellKnownBasemapId=d,e.hasDeveloperBasemapLayer=L,e.isDeveloperBasemapLayer=v,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));