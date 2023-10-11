"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4369],{57435:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(43697),s=r(80539),o=r(3920),l=r(70586),n=(r(20102),r(92604),r(26258),r(87538)),a=r(5600),u=(r(67676),r(80442),r(75215),r(52011));let d=class extends((0,o.p)(s.Z)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add((0,n.EH)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=(0,l.pC)(this.getCollections)?this.getCollections():null;if((0,l.Wi)(e))return void this.removeAll();let t=0;for(const r of e)(0,l.pC)(r)&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e;for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,a.Cb)()],d.prototype,"getCollections",void 0),(0,i._)([(0,a.Cb)()],d.prototype,"getChildrenFunction",void 0),(0,i._)([(0,a.Cb)()],d.prototype,"itemFilterFunction",void 0),d=(0,i._)([(0,u.j)("esri.core.CollectionFlattener")],d);const p=d},23670:(e,t,r)=>{r.d(t,{G:()=>s});var i=r(20102);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),l=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(o,10);return new s(n,a,t)}}},54295:(e,t,r)=>{r.d(t,{V:()=>l});var i=r(43697),s=r(5600),o=(r(67676),r(80442),r(75215),r(52011));const l=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},7944:(e,t,r)=>{r.d(t,{O:()=>h});var i=r(43697),s=r(3172),o=r(95330),l=r(17452),n=r(23670),a=r(5600),u=(r(67676),r(80442),r(75215),r(71715)),d=r(52011),p=r(6570),y=r(82971),c=r(21506);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,t){var r,i;const s=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const o=this.type,l=s.includes("query"),a=s.includes("map"),u=!!t.exportTilesAllowed,d=s.includes("tilemap"),p="tile"!==o&&!!t.supportsDynamicLayers,y="tile"!==o&&(!t.tileInfo||p),c="tile"!==o&&(!t.tileInfo||p),h="tile"!==o,f=t.cimVersion&&n.G.parse(t.cimVersion),b=null!=(r=null==f?void 0:f.since(1,4))&&r,g=null!=(i=null==f?void 0:f.since(2,0))&&i;return{operations:{supportsQuery:l,supportsExportMap:a,supportsExportTiles:u,supportsTileMap:d},exportMap:a?{supportsArcadeExpressionForLabeling:b,supportsSublayersChanges:h,supportsDynamicLayers:p,supportsSublayerVisibility:y,supportsSublayerDefinitionExpression:c,supportsCIMSymbols:g}:null,exportTiles:u?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,l.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}}),(e=>({error:e}))));const t=await this._allLayersAndTablesPromise;if((0,o.k_)(e),"result"in t)return t.result;throw t.error}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"capabilities",void 0),(0,i._)([(0,u.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),(0,i._)([(0,a.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({type:p.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)(c.id)],t.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)(c.C_)],t.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:y.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,i._)([(0,u.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=(0,i._)([(0,d.j)("esri.layers.mixins.ArcGISMapService")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>u});var i=r(43697),s=r(92604),o=r(70586),l=r(5600),n=(r(67676),r(80442),r(75215),r(52011)),a=r(66677);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if((0,o.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,s.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,l.Cb)()],t.prototype,"title",null),(0,i._)([(0,l.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},10343:(e,t,r)=>{r.d(t,{x:()=>g});var i=r(43697),s=r(80539),o=r(57435),l=r(20102),n=r(92604),a=r(5600),u=(r(67676),r(80442),r(1153)),d=(r(75215),r(52011)),p=r(31263),y=r(49867),c=r(32073);const h=n.Z.getLogger("esri.layers.TileLayer"),f=s.Z.ofType(y.Z);function b(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&b(e.sublayers,t)}))}const g=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[p.s3.SERVICE]:{},[p.s3.PORTAL_ITEM]:{},[p.s3.WEB_SCENE]:{},[p.s3.WEB_MAP]:{}},this.handles.add(this.watch("sublayers",((e,t)=>this._handleSublayersChange(e,t)),!0))}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=(0,p.M9)(t.origin);if(i<p.s3.SERVICE)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>p.s3.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:o}=this.createSublayersForOrigin("web-document"),l=(0,u.vw)(this);l.setDefaultOrigin(o),this._set("sublayers",new f(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=(0,p.M9)("web-document"===e?"web-map":e);let r=p.s3.SERVICE,i=this.sublayersSourceJSON[p.s3.SERVICE].layers,s=this.sublayersSourceJSON[p.s3.SERVICE].context,o=null;const l=[p.s3.PORTAL_ITEM,p.s3.WEB_SCENE,p.s3.WEB_MAP].filter((e=>e<=t));for(const e of l){const t=this.sublayersSourceJSON[e];(0,c.ac)(t.layers)&&(r=e,i=t.layers,s=t.context,t.visibleLayers&&(o={visibleLayers:t.visibleLayers,context:t.context}))}const n=[p.s3.PORTAL_ITEM,p.s3.WEB_SCENE,p.s3.WEB_MAP].filter((e=>e>r&&e<=t));let a=null;for(const e of n){const{layers:t,visibleLayers:r,context:i}=this.sublayersSourceJSON[e];t&&(a={layers:t,context:i}),r&&(o={visibleLayers:r,context:i})}const u=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const s=new y.Z;if(s.read(e,t),i[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(s)}else r.unshift(s)})),r):r}(i,s),d=new Map,h=new Set;if(a)for(const e of a.layers)d.set(e.id,e);if(o)for(const e of o.visibleLayers)h.add(e);return b(u,(e=>{a&&e.read(d.get(e.id),a.context),o&&e.read({defaultVisibility:h.has(e.id)},o.context)})),{origin:(0,p.x3)(r),sublayers:new f({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{h.error(new l.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"allSublayers",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:s.Z.ofType(y.Z)})],t.prototype,"serviceSublayers",void 0),(0,i._)([(0,a.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=(0,i._)([(0,d.j)("esri.layers.mixins.SublayersOwner")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(43697),s=r(2368),o=r(35454),l=r(96674),n=r(5600),a=(r(67676),r(80442),r(75215),r(52011));const u=new o.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let d=class extends((0,s.J)(l.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,n.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],d.prototype,"description",void 0),(0,i._)([(0,n.Cb)({json:{read:u.read,write:u.write}})],d.prototype,"drawingTool",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],d.prototype,"prototype",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],d.prototype,"thumbnail",void 0),d=(0,i._)([(0,a.j)("esri.layers.support.FeatureTemplate")],d);const p=d},16451:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(43697),s=r(2368),o=r(96674),l=r(5600),n=(r(67676),r(80442),r(75215),r(71715)),a=r(52011),u=r(30556),d=r(72729),p=r(70082);let y=class extends((0,s.J)(o.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,d.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e)){var i;e[t]&&(r[t]=null==(i=e[t])?void 0:i.toJSON())}t.domains=r}};(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"id",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"name",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"domains",void 0),(0,i._)([(0,n.r)("domains")],y.prototype,"readDomains",null),(0,i._)([(0,u.c)("domains")],y.prototype,"writeDomains",null),(0,i._)([(0,l.Cb)({type:[p.Z],json:{write:!0}})],y.prototype,"templates",void 0),y=(0,i._)([(0,a.j)("esri.layers.support.FeatureType")],y);const c=y},56765:(e,t,r)=>{r.d(t,{Z:()=>d});var i,s=r(43697),o=r(80539),l=r(96674),n=r(5600),a=(r(67676),r(80442),r(75215),r(52011));let u=i=class extends l.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=i=(0,s._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],u);const d=u},49867:(e,t,r)=>{r.d(t,{Z:()=>Q});var i,s=r(43697),o=(r(66577),r(51773)),l=(r(16050),r(12501),r(95088),r(79056),r(5499),r(84382),r(30687),r(91423),r(32400)),n=r(3172),a=r(78223),u=r(80539),d=r(20102),p=r(3920),y=r(10699),c=r(22974),h=r(83379),f=r(92604),b=r(70586),g=r(16453),m=r(17452),v=r(5600),w=r(1153),S=r(90578),I=r(71715),_=r(52011),E=r(30556),C=r(75215),x=r(31263),L=r(16451),O=r(1231),F=r(99514),T=r(2319),D=r(56765),j=r(10158),A=r(42843),P=r(57444),M=r(32163),V=r(410),N=r(6570);function Z(e){return e&&"esriSMS"===e.type}function R(e,t,r){var i;const s=this.originIdOf(t)>=(0,x.M9)(r.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!r&&"map-image"===(null==(i=r.layer)?void 0:i.type)&&(r.writeSublayerStructure||s)}}function k(e,t,r){var i;return{enabled:!!r&&"tile"===(null==(i=r.layer)?void 0:i.type)&&this._isOverridden(t)}}function U(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function J(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=(0,x.M9)(r.origin))}}const $=f.Z.getLogger("esri.layers.support.Sublayer");let B=0;const q=new Set;q.add("layer"),q.add("parent"),q.add("loaded"),q.add("loadStatus"),q.add("loadError"),q.add("loadWarnings");let K=i=class extends((0,p.p)((0,g.R)((0,y.I)(h.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t;if(!this.layer&&!this.url)throw new d.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>x.s3.SERVICE||"data-layer"===(null==(t=this.source)?void 0:t.type))r=(await(0,n.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var i;let t=this.id;"map-layer"===(null==(i=this.source)?void 0:i.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new F.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=(0,C.vU)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if((0,a.dU)(t)){$.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new A.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,C.se)(u.Z.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return null}get url(){var e,t;const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,i=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==i?void 0:i.type))return`${r.path}/${i.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${(0,m.B7)(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,w.vw)(this),t=new i;return(0,w.vw)(t).store=e.clone(q),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){return new P.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,s=new(0,(await Promise.all([r.e(635),r.e(8326),r.e(7284)]).then(r.bind(r,67284))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(s.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>x.s3.SERVICE&&(s.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>x.s3.DEFAULTS&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>x.s3.DEFAULTS&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>x.s3.DEFAULTS&&(s.visible=this.visible),this.originIdOf("minScale")>x.s3.DEFAULTS&&(s.minScale=this.minScale),this.originIdOf("maxScale")>x.s3.DEFAULTS&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>x.s3.DEFAULTS&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>x.s3.DEFAULTS&&(s.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>x.s3.SERVICE&&(s.renderer=(0,c.d9)(this.renderer)),"data-layer"===(null==(t=this.source)?void 0:t.type)&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>x.s3.DEFAULTS&&(s.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>x.s3.DEFAULTS&&(s.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>x.s3.DEFAULTS&&(s.customParameters=this.layer.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let s=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(s=e),!!s)})),s}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),t){var i,s,o,l;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new d.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:n},{default:a}]=await Promise.all([Promise.resolve().then(r.bind(r,34599)),r.e(4889).then(r.bind(r,74889))]),u=await n(this.url,P.Z.from(e),null!=(i=null==(s=this.layer)?void 0:s.spatialReference)?i:null,{...t,query:{...null==(o=this.layer)?void 0:o.customParameters,token:null==(l=this.layer)?void 0:l.apiKey}}),p=a.fromJSON(u.data);if(null!=p&&p.features)for(const e of p.features)e.sourceLayer=this;return p}toExportImageJSON(e){var t;const r={id:this.id,source:(null==(t=this.source)?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const t=(0,b.pC)(e)?(0,V.Hp)(e,this):this.definitionExpression;r.definitionExpression=t}else(0,b.pC)(e)&&(r.definitionExpression=e);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{}),s=Object.keys(i).some((e=>i[e]>x.s3.SERVICE));if(s){const e=r.drawingInfo={};i.renderer>x.s3.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>x.s3.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>x.s3.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),i.opacity>x.s3.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)Z(e.symbol)&&t(e.symbol);"symbol"in e&&Z(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&Z(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,o;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",o="supportsModification"}const l=(0,w.vw)(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(o&&!1===this.get(`capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${o}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||($.error(new d.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){$.error(new d.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};K.test={isMapImageLayerOverridePolicy:e=>e===U||e===R,isTileImageLayerOverridePolicy:e=>e===k},(0,s._)([(0,v.Cb)({readOnly:!0})],K.prototype,"capabilities",void 0),(0,s._)([(0,I.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],K.prototype,"readCapabilities",null),(0,s._)([(0,v.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:R}}})],K.prototype,"definitionExpression",null),(0,s._)([(0,v.Cb)({type:[O.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],K.prototype,"fields",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],K.prototype,"fieldsIndex",null),(0,s._)([(0,v.Cb)({type:D.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:R},origins:{"web-scene":{read:!1,write:!1}}}})],K.prototype,"floorInfo",null),(0,s._)([(0,v.Cb)({type:N.Z,json:{read:{source:"layerDefinition.extent"}}})],K.prototype,"fullExtent",void 0),(0,s._)([(0,v.Cb)({type:String})],K.prototype,"globalIdField",void 0),(0,s._)([(0,I.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],K.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:C.z8,json:{write:{ignoreOrigin:!0}}})],K.prototype,"id",null),(0,s._)([(0,v.Cb)({value:null,type:[T.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:U}}})],K.prototype,"labelingInfo",null),(0,s._)([(0,E.c)("labelingInfo")],K.prototype,"writeLabelingInfo",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:U}}})],K.prototype,"labelsVisible",null),(0,s._)([(0,v.Cb)({value:null})],K.prototype,"layer",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:J}}})],K.prototype,"legendEnabled",void 0),(0,s._)([(0,v.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],K.prototype,"listMode",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],K.prototype,"minScale",null),(0,s._)([(0,I.r)("minScale",["minScale","layerDefinition.minScale"])],K.prototype,"readMinScale",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],K.prototype,"maxScale",null),(0,s._)([(0,I.r)("maxScale",["maxScale","layerDefinition.maxScale"])],K.prototype,"readMaxScale",null),(0,s._)([(0,v.Cb)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),(0,s._)([(0,v.Cb)({type:String})],K.prototype,"objectIdField",void 0),(0,s._)([(0,I.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],K.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:U}}})],K.prototype,"opacity",null),(0,s._)([(0,I.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],K.prototype,"readOpacity",null),(0,s._)([(0,E.c)("opacity")],K.prototype,"writeOpacity",null),(0,s._)([(0,v.Cb)({json:{type:C.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:U}}})],K.prototype,"parent",void 0),(0,s._)([(0,E.c)("parent")],K.prototype,"writeParent",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:J,writer(e,t,r){t[r]=!e}}}})],K.prototype,"popupEnabled",void 0),(0,s._)([(0,v.Cb)({type:o.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:J}}})],K.prototype,"popupTemplate",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,s._)([(0,v.Cb)({types:l.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U},origins:{"web-scene":{types:l.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U}}}}})],K.prototype,"renderer",null),(0,s._)([(0,v.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":j.n,"map-layer":A.R}},cast(e){if(e){if("mapLayerId"in e)return(0,C.TJ)(A.R,e);if("dataSource"in e)return(0,C.TJ)(j.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:U}}})],K.prototype,"source",null),(0,s._)([(0,v.Cb)()],K.prototype,"sourceJSON",void 0),(0,s._)([(0,v.Cb)({value:null,json:{type:[C.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:U}}})],K.prototype,"sublayers",null),(0,s._)([(0,S.p)("sublayers")],K.prototype,"castSublayers",null),(0,s._)([(0,E.c)("sublayers")],K.prototype,"writeSublayers",null),(0,s._)([(0,v.Cb)({type:String,json:{name:"name",write:{overridePolicy:J}}})],K.prototype,"title",void 0),(0,s._)([(0,v.Cb)({type:String})],K.prototype,"typeIdField",void 0),(0,s._)([(0,I.r)("typeIdField",["layerDefinition.typeIdField"])],K.prototype,"readTypeIdField",null),(0,s._)([(0,v.Cb)({type:[L.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],K.prototype,"types",void 0),(0,s._)([(0,v.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:k}}})],K.prototype,"url",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:U}}})],K.prototype,"visible",null),(0,s._)([(0,E.c)("visible")],K.prototype,"writeVisible",null),K=i=(0,s._)([(0,_.j)("esri.layers.support.Sublayer")],K);const Q=K},32073:(e,t,r)=>{r.d(t,{FN:()=>o,QV:()=>s,ac:()=>n});var i=r(31263);function s(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!l(e,t)}function o(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!l(e,t)}function l(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:t}of e){for(;i<s&&r[i]!==t;)i++;if(i>=s)return!1}return!0}function n(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}}}]);