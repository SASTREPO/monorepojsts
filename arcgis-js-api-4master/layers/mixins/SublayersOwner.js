/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/CollectionFlattener","../../core/Error","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/utils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/PropertyOrigin","../support/Sublayer","../support/sublayerUtils"],(function(e,r,s,t,a,i,o,n,l,u,c,y,d,b,p,S){"use strict";const h=o.getLogger("esri.layers.TileLayer");function f(e,r){const s=[],t={};return e?(e.forEach((e=>{const a=new p;if(a.read(e,r),t[a.id]=a,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(a)}else s.unshift(a)})),s):s}const g=t.ofType(p);function O(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&O(e.sublayers,r)}))}const E=e=>{let o=function(e){function s(...r){var s;return(s=e.call(this,...r)||this).allSublayers=new a({getCollections:()=>[s.sublayers],getChildrenFunction:e=>e.sublayers}),s.sublayersSourceJSON={[b.OriginId.SERVICE]:{},[b.OriginId.PORTAL_ITEM]:{},[b.OriginId.WEB_SCENE]:{},[b.OriginId.WEB_MAP]:{}},s.handles.add(s.watch("sublayers",((e,r)=>s._handleSublayersChange(e,r)),!0)),s}r._inheritsLoose(s,e);var t=s.prototype;return t.readSublayers=function(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t=b.nameToId(r.origin);if(t<b.OriginId.SERVICE)return;if(s[t]={context:r,visibleLayers:e.visibleLayers||s[t].visibleLayers,layers:e.layers||s[t].layers},t>b.OriginId.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:a,origin:i}=this.createSublayersForOrigin("web-document"),o=c.getProperties(this);o.setDefaultOrigin(i),this._set("sublayers",new g(a)),o.setDefaultOrigin("user")},t.findSublayerById=function(e){return this.allSublayers.find((r=>r.id===e))},t.createServiceSublayers=function(){return this.createSublayersForOrigin("service").sublayers},t.createSublayersForOrigin=function(e){const r="web-document"===e?b.nameToId("web-map"):b.nameToId(e);let s=b.OriginId.SERVICE,t=this.sublayersSourceJSON[b.OriginId.SERVICE].layers,a=this.sublayersSourceJSON[b.OriginId.SERVICE].context,i=null;const o=[b.OriginId.PORTAL_ITEM,b.OriginId.WEB_SCENE,b.OriginId.WEB_MAP].filter((e=>e<=r));for(const d of o){const e=this.sublayersSourceJSON[d];S.isSublayerOverhaul(e.layers)&&(s=d,t=e.layers,a=e.context,e.visibleLayers&&(i={visibleLayers:e.visibleLayers,context:e.context}))}const n=[b.OriginId.PORTAL_ITEM,b.OriginId.WEB_SCENE,b.OriginId.WEB_MAP].filter((e=>e>s&&e<=r));let l=null;for(const d of n){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[d];e&&(l={layers:e,context:s}),r&&(i={visibleLayers:r,context:s})}const u=f(t,a),c=new Map,y=new Set;if(l)for(const d of l.layers)c.set(d.id,d);if(i)for(const d of i.visibleLayers)y.add(d);return O(u,(e=>{l&&e.read(c.get(e.id),l.context),i&&e.read({defaultVisibility:y.has(e.id)},i.context)})),{origin:b.idToName(s),sublayers:new g({items:u})}},t.read=function(r,s){e.prototype.read.call(this,r,s),this.readSublayers(r,s)},t._handleSublayersChange=function(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{h.error(new i("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))},s}(e);return s.__decorate([n.property({readOnly:!0})],o.prototype,"allSublayers",void 0),s.__decorate([n.property({readOnly:!0,type:t.ofType(p)})],o.prototype,"serviceSublayers",void 0),s.__decorate([n.property({value:null,type:g,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s.__decorate([n.property({readOnly:!0})],o.prototype,"sublayersSourceJSON",void 0),o=s.__decorate([d.subclass("esri.layers.mixins.SublayersOwner")],o),o};e.SublayersOwner=E,e.forEachSublayer=O,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));