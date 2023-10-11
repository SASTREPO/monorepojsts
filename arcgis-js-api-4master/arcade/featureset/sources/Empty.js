/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../support/FeatureSet","../support/IdSet","../support/shared","../../../core/promiseUtils"],(function(e,t,r,n,u){"use strict";return function(t){function s(e){var u;return(u=t.call(this,e)||this).declaredClass="esri.layers.featureset.sources.Empty",u._maxProcessing=1e3,u._wset=new r([],[],!1,null),u._parent=e.parentfeatureset,u._databaseType=n.FeatureServiceDatabaseType.Standardised,u}e._inheritsLoose(s,t);var a=s.prototype;return a._getSet=function(){return u.resolve(this._wset)},a.optimisePagingFeatureQueries=function(){},a._isInFeatureSet=function(){return n.IdState.NotInFeatureSet},a._getFeature=function(){return u.reject(new Error("No Feature Found in EmptySet"))},a.queryAttachments=function(){return u.resolve([])},a._getFeatures=function(){return u.resolve("success")},a._featureFromCache=function(){return null},a._fetchAndRefineFeatures=function(){return u.reject(new Error("Fetch and Refine should not be called in this featureset"))},a._getFilteredSet=function(){return u.resolve(new r([],[],!1,null))},a._stat=function(e,t,r,n,u,s,a){return this._manualStat(e,t,s,a)},a._canDoAggregates=function(){return u.resolve(!1)},s}(t)}));