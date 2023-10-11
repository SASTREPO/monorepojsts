/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/Collection","./core/collectionUtils","./core/deprecate","./core/JSONSupport","./core/lang","./core/Loadable","./core/loadAll","./core/Logger","./core/maybe","./core/promiseUtils","./core/urlUtils","./core/accessorSupport/decorators/property","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./geometry/SpatialReference","./portal/Portal","./portal/PortalItem","./support/basemapDefinitions","./webdoc/support/writeUtils"],(function(e,r,t,o,a,s,i,n,l,c,p,u,y,d,f,h,m,b,L,g,_,I,w){"use strict";var v;let S=0;const O=p.getLogger("esri.Basemap");let T=v=function(t){function i(e){var a;(a=t.call(this,e)||this).id=null,a.portalItem=null,a.spatialReference=null,a.thumbnailUrl=null,a.title="Basemap",a.id=Date.now().toString(16)+"-basemap-"+S++,a.baseLayers=new o,a.referenceLayers=new o;const s=e=>{e.parent&&e.parent!==r._assertThisInitialized(a)&&"remove"in e.parent&&e.parent.remove(e),e.parent=r._assertThisInitialized(a),"elevation"===e.type&&O.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=e=>{e.parent=null};return a.baseLayers.on("after-add",(e=>s(e.item))),a.referenceLayers.on("after-add",(e=>s(e.item))),a.baseLayers.on("after-remove",(e=>i(e.item))),a.referenceLayers.on("after-remove",(e=>i(e.item))),a}r._inheritsLoose(i,t);var l=i.prototype;return l.initialize=function(){this.when().catch((e=>{O.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)},l.destroy=function(){var e;const r=this.baseLayers.removeAll();for(const o of r)o.destroy();const t=this.referenceLayers.removeAll();for(const o of t)o.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null},l.normalizeCtorArgs=function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e},l._writeBaseLayers=function(e,r,t){const o=[];e?(t={...t,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const r=w.getLayerJSON(e,t.webmap?t.webmap.getLayerJSONFromResourceInfo(e):null,t);u.isSome(r)&&o.push(r)})),this.referenceLayers.forEach((e=>{const r=w.getLayerJSON(e,t.webmap?t.webmap.getLayerJSONFromResourceInfo(e):null,t);u.isSome(r)&&(r.isReference=!0,o.push(r))})),r.baseMapLayers=o):r.baseMapLayers=o},l.writeTitle=function(e,r){r.title=e||"Basemap"},l.load=function(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)},l.loadAll=function(){return c.loadAll(this,(e=>{e(this.baseLayers,this.referenceLayers)}))},l.clone=function(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new v({resourceInfo:this.resourceInfo}).set(e)},l.read=function(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),t.prototype.read.call(this,e,r)},l.write=function(e,r){return e=e||{},r&&r.origin||(r={origin:"web-map",...r}),t.prototype.write.call(this,e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const r=n.clone(e);return r.url&&d.isProtocolRelative(r.url)&&(r.url=`https:${r.url}`),r.templateUrl&&d.isProtocolRelative(r.templateUrl)&&(r.templateUrl=`https:${r.templateUrl}`),r}))),e},l._loadFromSource=function(){var e=r._asyncToGenerator((function*(e){const{resourceInfo:r,portalItem:t}=this;y.throwIfAborted(e);const o=[];if(r){const t=r.context?r.context.url:null;if(o.push(this._loadLayersFromJSON(r.data,t,e)),r.data.id&&!r.data.title){const e=r.data.id;o.push(I.getBasemapTitle(e).then((e=>{e&&this.read({title:e},r.context)})))}}else t&&o.push(this._loadFromItem(t,e));yield Promise.all(o)}));function t(r){return e.apply(this,arguments)}return t}(),l._loadLayersFromJSON=function(){var t=r._asyncToGenerator((function*(r,t,o){const a=this.resourceInfo&&this.resourceInfo.context,s=this.portalItem&&this.portalItem.portal||a&&a.portal||null,i=a&&"web-scene"===a.origin?"web-scene":"web-map",{populateOperationalLayers:n}=yield new Promise(((r,t)=>e(["./layers/support/layersCreator"],r,t))),l=[];if(y.throwIfAborted(o),r.baseMapLayers&&Array.isArray(r.baseMapLayers)){const e={context:{origin:i,url:t,portal:s,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},o=n(this.baseLayers,r.baseMapLayers.filter((e=>!e.isReference)),e);l.push(o);const a=n(this.referenceLayers,r.baseMapLayers.filter((e=>e.isReference)),e);l.push(a)}yield y.eachAlways(l)}));function o(e,r,o){return t.apply(this,arguments)}return o}(),l._loadFromItem=function(){var e=r._asyncToGenerator((function*(e,r){const t=yield e.load(r),o=yield t.fetchData("json",r),a=d.urlToObject(e.itemUrl);return this._set("resourceInfo",{data:o.baseMap,context:{origin:"web-map",portal:e.portal||g.getDefault(),url:a}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:o.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||g.getDefault(),url:a}),this._loadLayersFromJSON(this.resourceInfo.data,a,r)}));function t(r,t){return e.apply(this,arguments)}return t}(),i.fromId=function(e){const r=I.esriBasemapDefinitions[e];if(r){if(r.deprecated){let r=null;"dark-gray"===e?r="dark-gray-vector":"gray"===e?r="gray-vector":"streets"===e?r="streets-vector":"topo"===e&&(r="topo-vector"),s.deprecated(O,`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:r,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return v.fromJSON(r)}return null},r._createClass(i,[{key:"baseLayers",set:function(e){this._set("baseLayers",a.referenceSetter(e,this._get("baseLayers")))}},{key:"referenceLayers",set:function(e){this._set("referenceLayers",a.referenceSetter(e,this._get("referenceLayers")))}}]),i}(i.JSONSupportMixin(l));t.__decorate([f.property({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,r,t,o){this._writeBaseLayers(e,r,o)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:o}},writer(e,r,t,o){this._writeBaseLayers(e,r,o)}}}}}})],T.prototype,"baseLayers",null),t.__decorate([f.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],T.prototype,"id",void 0),t.__decorate([f.property({type:_})],T.prototype,"portalItem",void 0),t.__decorate([f.property()],T.prototype,"referenceLayers",null),t.__decorate([f.property({readOnly:!0})],T.prototype,"resourceInfo",void 0),t.__decorate([f.property({type:L})],T.prototype,"spatialReference",void 0),t.__decorate([f.property()],T.prototype,"thumbnailUrl",void 0),t.__decorate([f.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],T.prototype,"title",void 0),t.__decorate([b.writer("title")],T.prototype,"writeTitle",null),T=v=t.__decorate([m.subclass("esri.Basemap")],T);return T}));