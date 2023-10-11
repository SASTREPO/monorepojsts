/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../request","../../../../core/Error","../../../../core/Logger","../../../../core/number","../../../../core/promiseUtils","../../../../core/urlUtils","../../../../geometry/projection","../../../../geometry/geometryAdapters/json","../../../../geometry/support/spatialReferenceUtils","../../../../geometry/support/webMercatorUtils","../../OptimizedFeature","../../OptimizedGeometry","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","../csv/csv","./clientSideDefaults","../../../support/FieldsIndex","../../../support/fieldUtils","../../../../geometry/SpatialReference"],(function(e,t,n,i,r,o,a,s,l,u,c,d,f,p,y,m,h,g,F,_,T,I,N){"use strict";const b=_.createDrawingInfo("esriGeometryPoint"),w=["csv"],E=[0,0];let x=function(e,t){this.x=e,this.y=t},v=function(){function e(){var e=this;this._queryEngine=null,this._snapshotFeatures=function(){var n=t._asyncToGenerator((function*(t){const n=yield e._fetch(t);return e._createFeatures(n)}));return function(e){return n.apply(this,arguments)}}()}var n=e.prototype;return n.destroy=function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null},n.load=function(){var e=t._asyncToGenerator((function*(e,t={}){var n;this.loadOptions=e;const[i]=yield Promise.all([this._fetch(t.signal),this._checkProjection(null==e||null==(n=e.parsingOptions)?void 0:n.spatialReference)]),r=S(i,e);this.locationInfo=r.locationInfo,this.delimiter=r.delimiter,this._queryEngine=this._createQueryEngine(r);const o=yield this._createFeatures(i);if(this._queryEngine.featureStore.addMany(o),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;r.layerDefinition.timeInfo.timeExtent=[e,t]}return r}));function n(t){return e.apply(this,arguments)}return n}(),n.applyEdits=function(){var e=t._asyncToGenerator((function*(){throw new r("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}));function n(){return e.apply(this,arguments)}return n}(),n.queryFeatures=function(){var e=t._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}));function n(){return e.apply(this,arguments)}return n}(),n.queryFeatureCount=function(){var e=t._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}));function n(){return e.apply(this,arguments)}return n}(),n.queryObjectIds=function(){var e=t._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}));function n(){return e.apply(this,arguments)}return n}(),n.queryExtent=function(){var e=t._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}));function n(){return e.apply(this,arguments)}return n}(),n.querySnapping=function(){var e=t._asyncToGenerator((function*(e,t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}));function n(t){return e.apply(this,arguments)}return n}(),n.refresh=function(){var e=t._asyncToGenerator((function*(e){var t;return this.loadOptions.customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=s.createTask(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),s.isAbortError(e)||o.getLogger("esri.layers.CSVLayer").error(new r("csv-layer:refresh","An error occurred during refresh",{error:e}))})),yield this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}));function n(t){return e.apply(this,arguments)}return n}(),n._waitSnapshotComplete=function(){var e=t._asyncToGenerator((function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}));function n(){return e.apply(this,arguments)}return n}(),n._fetch=function(){var e=t._asyncToGenerator((function*(e){const{url:t,customParameters:n}=this.loadOptions;if(!t)throw new r("csv-layer:invalid-source","url not defined");const o=l.urlToObject(t);return(yield i(o.path,{query:{...o.query,...n},responseType:"text",signal:e})).data}));function n(t){return e.apply(this,arguments)}return n}(),n._createQueryEngine=function(e){const{objectIdField:t,fields:n,extent:i,timeInfo:r}=e.layerDefinition,o=new m({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new g.default({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:o})},n._createFeatures=function(){var e=t._asyncToGenerator((function*(e){const{latitudeFieldName:t,longitudeFieldName:n}=this.locationInfo,{objectIdField:i,fieldsIndex:r,spatialReference:o}=this._queryEngine;let a=[];const s=[],l=r.fields.filter((e=>e.name!==i)).map((e=>e.name));let m=0;const h=F.readRows(e);h.next();const g={};for(const u of r.fields)if("esriFieldTypeOID"!==u.type&&"esriFieldTypeGlobalID"!==u.type){const e=I.getFieldDefaultValue(u);void 0!==e&&(g[u.name]=e)}const T=F.parseRows(h,l,this.delimiter,_.createDefaultAttributesFunction(g,i));for(const u of T){const e=this._parseCoordinateValue(u[t]),o=this._parseCoordinateValue(u[n]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){u[t]=e,u[n]=o;for(const e in u)if(e!==t&&e!==n)if(r.isDateField(e)){const t=new Date(u[e]);u[e]=P(t,u[e])?t.getTime():null}else if(r.isNumericField(e)){const t=R(u[e]);isNaN(t)?u[e]=null:u[e]=t}u[i]=m,m++,a.push(new x(o,e)),s.push(u)}}if(!d.equals({wkid:4326},o))if(d.isWebMercator(o))for(const u of a)[u.x,u.y]=f.lngLatToXY(u.x,u.y,E);else a=u.projectMany(c.jsonAdapter,a,N.WGS84,o,null);const b=[];for(let u=0;u<a.length;u++){const{x:e,y:t}=a[u],n=s[u];n[i]=u+1,b.push(new p.OptimizedFeature(new y([],[e,t]),n,null,n[i]))}return b}));function n(t){return e.apply(this,arguments)}return n}(),n._parseCoordinateValue=function(e){if(null==e||""===e)return null;let t=R(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},n._checkProjection=function(){var e=t._asyncToGenerator((function*(e){try{yield h.checkProjectionSupport(d.WGS84,e)}catch{throw new r("csv-layer:projection-not-supported","Projection not supported")}}));function n(t){return e.apply(this,arguments)}return n}(),e}();function S(e,t){const n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},o=F.readRows(e);let a=o.next().value;if(!a)throw new r("csv-layer:empty-csv","CSV is empty",{csv:e});if(a=a.trim(),!n.delimiter){const e=F.inferDelimiter(a);if(!e)throw new r("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=e}const s=a.split(i.delimiter).filter((e=>!!e)),u=i.layerDefinition={name:l.getFilename(t.url,w)||"csv",drawingInfo:b,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=j(s);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new r("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const c=O(o,i.delimiter,s,i.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of c){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;Object.assign(t,n),t.name=e}}}u.fields=c;if(!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(u.timeInfo){const e=new T(u.fields),t=u.timeInfo;if(t.startTimeField){const n=e.get(t.startTimeField);n?(t.startTimeField=n.name,n.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const n=e.get(t.endTimeField);n?(t.endTimeField=n.name,n.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const n=e.get(t.trackIdField);t.trackIdField=n?n.name:null}t.startTimeField||t.endTimeField||(u.timeInfo=null)}return i}const q=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],D=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function j(e){const t=e.map((e=>e.toLowerCase()));return{longitudeFieldName:e[t.indexOf(D.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(q.find((e=>t.includes(e))))]}}function O(e,t,n,i){const r=[],o=F.parseRows(e,n,t),a=[];for(const s of o){if(10===a.length)break;a.push(s)}for(const s of n)if(s===i.longitudeFieldName||s===i.latitudeFieldName)r.push({name:s,type:"esriFieldTypeDouble",alias:s});else{const e=C(a.map((e=>e[s]))),t={name:s,type:null,alias:s};switch(e){case"integer":t.type="esriFieldTypeInteger";break;case"double":t.type="esriFieldTypeDouble";break;case"date":t.type="esriFieldTypeDate",t.length=36;break;default:t.type="esriFieldTypeString",t.length=255}r.push(t)}return r}function C(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=R(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){return P(new Date(e),e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,k=Number.isNaN(new Date("technology 10").getTime());function P(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if(!k&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!G.test(e[i]),i++;n=!t}}return n}const R=function(){const e=a._parseInfo(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(r){const o=t.exec(r);if(e.factor=i,!o)return NaN;let a=o[1];if(!o[1]){if(!o[2])return NaN;a=o[2],e.factor*=-1}return a=a.replace(n,"").replace(e.decimal,"."),+a*e.factor}}();e.default=v,e.inferFieldType=C,e.inferFields=O,e.inferLocationInfo=j,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));