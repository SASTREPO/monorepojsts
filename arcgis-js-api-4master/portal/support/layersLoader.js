/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../layers/support/lazyLayerLoader","../Portal","./jsonContext","../../renderers/support/styleUtils","../../support/requestPresets"],(function(e,t,r,n,l,a,o,u){"use strict";function i(e,t){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t){const r=e.instance.portalItem;return r&&r.id?(yield r.load(t),c(e),p(e,t)):Promise.resolve()}))).apply(this,arguments)}function c(e){const t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new r("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}function p(e,t){return y.apply(this,arguments)}function y(){return(y=t._asyncToGenerator((function*(e,t){const r=e.instance,n=r.portalItem,{url:l,title:u}=n,i=a.createForItem(n);if("group"===r.type)return r.read({title:u},i),d(r,e);l&&r.read({url:l},i);const s=yield v(e,t);return s&&r.read(s,i),r.resourceReferences={portalItem:n,paths:i.readResourcePaths},r.read({title:u},i),o.loadStyleRenderer(r,i)}))).apply(this,arguments)}function d(e,l){let a;const o=e.portalItem.type;switch(o){case"Feature Service":case"Feature Collection":a=n.layerLookupMap.FeatureLayer;break;case"Stream Service":a=n.layerLookupMap.StreamLayer;break;case"Scene Service":a=n.layerLookupMap.SceneLayer;break;default:throw new r("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}let u;return a().then((e=>(u=e,v(l)))).then(function(){var r=t._asyncToGenerator((function*(t){return"Feature Service"===o?(t=yield I(t,e.portalItem.url),m(e,u,t)):T(t)>0?m(e,u,t):f(e,u)}));return function(e){return r.apply(this,arguments)}}())}function f(e,t){return e.portalItem.url?u.requestArcGISServiceJSON(e.portalItem.url).then((r=>{var n,l;function a(e){return{id:e.id,name:e.name}}r&&m(e,t,{layers:null==(n=r.layers)?void 0:n.map(a),tables:null==(l=r.tables)?void 0:l.map(a)})})):Promise.resolve()}function m(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=h(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=h(e,t,r,n);e.tables.add(l)}))}function h(e,t,r,n){const a=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.getDefault()};a.read(n,t);const o=r.showLegend;null!=o&&a.read({showLegend:o},t)}return a}function v(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);const n=e.instance;return n.portalItem.fetchData("json",r).catch((()=>null)).then(function(){var e=t._asyncToGenerator((function*(e){if(L(n)){let t,r=!0;return e&&T(e)>0&&(null==n.layerId&&(n.layerId=g(e)),t=S(e,n.layerId),t&&(1===T(e)&&(r=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),r&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),t}return e}));return function(t){return e.apply(this,arguments)}}())}function I(e,t){return b.apply(this,arguments)}function b(){return(b=t._asyncToGenerator((function*(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=yield u.requestArcGISServiceJSON(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}))).apply(this,arguments)}function g(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function S(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}function T(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}function L(e){return"stream"!==e.type&&"layerId"in e}e.getFirstLayerOrTableId=g,e.getNumLayersAndTables=T,e.load=i,e.preprocessFSItemData=I,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));