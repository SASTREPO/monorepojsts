/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Evented","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/projection","../../../../layers/graphics/dehydratedFeatures","../../../../layers/graphics/OptimizedFeature","../../../../layers/graphics/OptimizedGeometry","../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter"],(function(e,t,r,o,a,i,c,p,s,n,u,d,h,l,y,g){"use strict";e.Graphics3DFeatureStore=function(e){function r(t){var r;return(r=e.call(this,t)||this).events=new a,r.hasZ=null,r.hasM=null,r.objectIdField=null,r.spatialReference=null,r.featureAdapter={getAttribute:(e,t)=>"graphic"in e?e.graphic.attributes[t]:g.optimizedFeatureQueryEngineAdapter.getAttribute(e,t),getAttributes:e=>"graphic"in e?e.graphic.attributes:g.optimizedFeatureQueryEngineAdapter.getAttributes(e),getObjectId:e=>"graphic"in e?h.getObjectId(e.graphic,r.objectIdField):g.optimizedFeatureQueryEngineAdapter.getObjectId(e),getGeometry:e=>"graphic"in e?e.getAsOptimizedGeometry(r.hasZ,r.hasM):g.optimizedFeatureQueryEngineAdapter.getGeometry(e),getCentroid:(e,t)=>{if("graphic"in e){let o=null;i.isSome(e.centroid)?o=e.centroid:"point"===e.graphic.geometry.type&&d.projectPoint(e.graphic.geometry,f,r.spatialReference)&&(o=f);const a=new Array(2+(t.hasZ?1:0)+(t.hasM?1:0));return i.isNone(o)?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=o.x,a[1]=o.y,t.hasZ&&(a[2]=o.hasZ?o.z:0),t.hasM&&(a[t.hasZ?3:2]=o.hasM?o.m:0)),new y([],a)}return g.optimizedFeatureQueryEngineAdapter.getCentroid(e,t)},cloneWithGeometry:(e,t)=>"graphic"in e?new l.OptimizedFeature(t,r.featureAdapter.getAttributes(e),null,r.featureAdapter.getObjectId(e)):g.optimizedFeatureQueryEngineAdapter.cloneWithGeometry(e,t)},r}t._inheritsLoose(r,e);var o=r.prototype;return o.forEach=function(e){this.forAllGraphics((t=>{e(t)}))},o.forEachInBounds=function(e,t){this.getSpatialIndex().forEachInBounds(e,t)},o.forEachBounds=function(e,t,r){const o=this.getSpatialIndex();for(const a of e){const e=this.featureAdapter.getObjectId(a);i.isSome(o.getBounds(e,r))&&t(r)}},r}(o),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"getSpatialIndex",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"forAllGraphics",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"hasZ",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"hasM",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"objectIdField",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"spatialReference",void 0),r.__decorate([c.property({constructOnly:!0})],e.Graphics3DFeatureStore.prototype,"featureSpatialReference",void 0),e.Graphics3DFeatureStore=r.__decorate([u.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],e.Graphics3DFeatureStore);const f={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null},m=e.Graphics3DFeatureStore;e.default=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));