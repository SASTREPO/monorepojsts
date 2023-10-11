/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/arrayUtils","../core/lang","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Extent","./Geometry","./Point","./SpatialReference","./support/centroid","./support/contains","./support/coordsUtils","./support/extentUtils","./support/intersectsBase","./support/webMercatorUtils","./support/zmUtils"],(function(t,e,n,r,i,s,o,a,l,c,u,h,p,f,g,y,m,d,R,_){"use strict";var x;function w(t){return!Array.isArray(t[0])}let S=x=function(e){function s(...t){var n;return(n=e.call(this,...t)||this).rings=[],n.type="polygon",n}t._inheritsLoose(s,e),s.fromExtent=function(t){const e=t.clone().normalize(),n=t.spatialReference;let r=!1,i=!1;for(const o of e)o.hasZ&&(r=!0),o.hasM&&(i=!0);const s={rings:e.map((function(t){const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r&&t.hasZ){const n=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<e.length;t++)e[t].push(n)}if(i&&t.hasM){const n=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<e.length;t++)e[t].push(n)}return e})),spatialReference:n};return r&&(s.hasZ=!0),i&&(s.hasM=!0),new x(s)};var o=s.prototype;return o.normalizeCtorArgs=function(t,e){let n,r,i=null,s=null;return t&&!Array.isArray(t)?(i=t.rings?t.rings:null,e||(t.spatialReference?e=t.spatialReference:t.rings||(e=t)),n=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||p.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),s=i[0]&&i[0][0],s&&(void 0===n&&void 0===r?(n=s.length>2,r=s.length>3):void 0===n?n=r?s.length>3:s.length>2:void 0===r&&(r=n?s.length>3:s.length>2)),{rings:i,spatialReference:e,hasZ:n,hasM:r}},o.writeRings=function(t,e){e.rings=r.clone(this.rings)},o.addRing=function(t){if(!t)return;const e=this.rings,n=e.length;if(w(t)){const r=[];for(let e=0,n=t.length;e<n;e++)r[e]=t[e].toArray();e[n]=r}else e[n]=t.concat();return this.notifyChange("rings"),this},o.clone=function(){const t=new x;return t.spatialReference=this.spatialReference,t.rings=r.clone(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t},o.equals=function(t){if(this===t)return!0;if(i.isNone(t))return!1;const e=this.spatialReference,r=t.spatialReference;if(i.isSome(e)!==i.isSome(r))return!1;if(i.isSome(e)&&i.isSome(r)&&!e.equals(r))return!1;if(this.rings.length!==t.rings.length)return!1;const s=([t,e,n,r],[i,s,o,a])=>t===i&&e===s&&(null==n&&null==o||n===o)&&(null==r&&null==a||r===a);for(let i=0;i<this.rings.length;i++){const e=this.rings[i],r=t.rings[i];if(!n.equals(e,r,s))return!1}return!0},o.contains=function(t){if(!t)return!1;const e=R.project(t,this.spatialReference);return g.polygonContainsPoint(this,i.isSome(e)?e:t)},o.isClockwise=function(t){let e;return e=w(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t,y.isClockwise(e,this.hasM,this.hasZ)},o.getPoint=function(t,e){if(!this._validateInputs(t,e))return null;const n=this.rings[t][e],r=this.hasZ,i=this.hasM;return r&&!i?new h(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new h(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new h(n[0],n[1],n[2],n[3],this.spatialReference):new h(n[0],n[1],this.spatialReference)},o.insertPoint=function(t,e,n){return this._validateInputs(t,e,!0)?(_.updateSupportFromPoint(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t].splice(e,0,n),this.notifyChange("rings"),this):this},o.removePoint=function(t,e){if(!this._validateInputs(t,e))return null;const n=new h(this.rings[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("rings"),n},o.removeRing=function(t){if(!this._validateInputs(t,null))return null;const e=this.rings.splice(t,1)[0],n=this.spatialReference,r=e.map((t=>new h(t,n)));return this.notifyChange("rings"),r},o.setPoint=function(t,e,n){return this._validateInputs(t,e)?(_.updateSupportFromPoint(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t][e]=n,this.notifyChange("rings"),this):this},o._validateInputs=function(t,e,n=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=e){const r=this.rings[t];if(n&&(e<0||e>r.length))return!1;if(!n&&(e<0||e>=r.length))return!1}return!0},o.toJSON=function(t){return this.write({},t)},t._createClass(s,[{key:"cache",get:function(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}},{key:"centroid",get:function(){const t=f.polygonCentroid(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const e=new h;return e.x=t[0],e.y=t[1],e.spatialReference=this.spatialReference,this.hasZ&&(e.z=t[2]),e}},{key:"extent",get:function(){const{spatialReference:t}=this,e=m.getPolygonExtent(this);if(!e)return null;const n=new c(e);return n.spatialReference=t,n}},{key:"isSelfIntersecting",get:function(){return d.isSelfIntersecting(this.rings)}}]),s}(u);e.__decorate([s.property({readOnly:!0})],S.prototype,"cache",null),e.__decorate([s.property({readOnly:!0})],S.prototype,"centroid",null),e.__decorate([s.property({readOnly:!0})],S.prototype,"extent",null),e.__decorate([s.property({readOnly:!0})],S.prototype,"isSelfIntersecting",null),e.__decorate([s.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],S.prototype,"rings",void 0),e.__decorate([l.writer("rings")],S.prototype,"writeRings",null),S=x=e.__decorate([a.subclass("esri.geometry.Polygon")],S),S.prototype.toJSON.isDefaultToJSON=!0;return S}));