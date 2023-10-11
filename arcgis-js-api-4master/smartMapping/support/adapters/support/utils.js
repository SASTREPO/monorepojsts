/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils","../../../../renderers/support/heatmapUtils","../../../statistics/support/predominanceUtils","../../utils","../../../../statistics/utils"],(function(t,e,n,o,a,r,i){"use strict";const l=/_value$/i,u=Math.LOG10E;function s(t){return t.map((t=>t.toJSON()))}function c(t,e,n){return m.apply(this,arguments)}function m(){return(m=e._asyncToGenerator((function*(t,e,n){const o=[];if(e)for(const a of e){const e=t.getField(a);"availableFields"in n&&-1===n.availableFields.indexOf(e.name)&&o.push(e.name)}return o}))).apply(this,arguments)}function f(t,e){const n=t&&t.features,o=n&&n[0]&&n[0].attributes,a={};for(const r in o)a[r.replace(l,"").toLowerCase()]=o[r];return null!=a.totalcount&&a.totalcount>=a.count&&(a.nullcount=a.totalcount-a.count),delete a.totalcount,a.min===a.max&&null!=a.min&&null==a.stddev&&(a.stddev=a.variance=0),e&&(["min","max","avg","stddev","sum","variance"].forEach((t=>{null!=a[t]&&(a[t]=Math.ceil(a[t]))})),a.min===a.max&&null!=a.min&&(a.avg=a.min,a.stddev=a.variance=0)),a}function d(t,e=10,n,a,r,i){const l=new Float64Array(r*i),u=o.createKernel(e),s=Math.round(3*e);let c=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY,f=0,d=0,p=0,g=0;const F=o.createValueFunction(a,n);for(const{geometry:o,attributes:h}of t){const t=o.x-s,e=o.y-s,n=Math.max(0,t),a=Math.max(0,e),v=Math.min(i,o.y+s),x=Math.min(r,o.x+s),y=+F(h);for(let o=a;o<v;o++){const a=u[o-e];for(let e=n;e<x;e++){const n=u[e-t],i=o*r+e,s=l[i];f=l[i]+=a*n*y;const F=f-s;d+=F,p+=F*F,f<c&&(c=f),f>m&&(m=f),g++}}}if(!g)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const v=(m-c)/2;return{mean:d/g,stdDev:Math.sqrt((p-d*d/g)/g),min:c,max:m,mid:v,count:g}}function p(t){const e=[],n=t.classBreaks,o=n[0].minValue,a=n[n.length-1].maxValue;n.forEach((t=>{e.push([t.minValue,t.maxValue])}));const r={field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,layer:t.layer};return{min:o,max:a,intervals:e,sqlExpr:g(r),excludeZerosExpr:t.where,normTotal:t.normalizationTotal}}function g(t){const{field:e,normalizationType:n,normalizationField:o,normalizationTotal:a,layer:i}=t,l=r.isIntegerField(i,e);let s=e;return"percent-of-total"===n?s=`((${l?r.castIntegerFieldToFloat(e):e} / ${a}) * 100)`:"log"===n?s=`(log(${e}) * ${u})`:"field"===n?s=`(${l?r.castIntegerFieldToFloat(e):e} / ${o})`:"natural-log"===n?s=`(log(${l?r.castIntegerFieldToFloat(e):e}))`:"square-root"===n&&(s=`(power(${l?r.castIntegerFieldToFloat(e):e}, 0.5))`),s}function F(t,e){let n;if(e=e.toLowerCase(),t)for(const o in t)if(o.toLowerCase()!==e){n=t[o];break}return n}function v(t,e){let n;if(e=e.toLowerCase(),t)for(const o in t)if(o.toLowerCase()===e){n=t[o];break}return n}function h(t,e,n,o,a){const r={},l="countOFExpr";t&&t.features&&t.features.forEach((t=>{const e=t.attributes,n=F(e,l),o=v(e,l);0!==n&&(r[n]=o)}));const u=[];return i.getEqualIntervalBins(e,n,o).forEach(((t,e)=>{const n=(e+1).toString();u.push({minValue:t[0],maxValue:t[1],count:r.hasOwnProperty(n)?r[n]:0})})),{bins:u,minValue:e,maxValue:n,normalizationTotal:a}}function x(t,e,o,a,r,i){const l=t&&t.features,u="countOF"+(o||"Expr"),s={};let c=!1;if(l.forEach((t=>{const e=t.attributes,n=v(e,u);let a=o?v(e,o):F(e,u);null===a&&0===n&&(c=!0),(null==a||"string"==typeof a&&""===a.trim())&&(a=null),null==s[a]?s[a]={count:n,data:a}:s[a].count=s[a].count+n})),o&&c){const t=o+" is NULL";return e.queryFeatureCount({whereClause:t,view:a,signal:i}).then((t=>(t=t||0,s.null.count=s.null.count+t,y(s,r)))).catch((()=>(n.throwIfAborted(i),y(s,r))))}return Promise.resolve(y(s,r))}function y(t,e){if(e)for(const n in t)t[n].label=e[n];return{count:t}}function I(t,e){return r.getDateDiffSQL(t,new Date(0),e,"milliseconds").sqlExpression}function T(t){var e;return{viewingMode:"2d"===t.type?"map":t.viewingMode,scale:t.scale,spatialReference:null==(e=t.spatialReference)?void 0:e.toJSON()}}function E(t,e){const n=t.map((t=>t.value)),o=e.filter((t=>-1===n.indexOf(t)));for(const a of o)t.push({value:a,count:0});t.sort(((t,n)=>e.indexOf(t.value)-e.indexOf(n.value)));for(const r of t)r.value===a.noDominantCategoryField&&(r.value=null);return{predominantCategoryInfos:t}}t.calculateHeatmapStats=d,t.ensureFeaturesJSON=s,t.generateBinParams=p,t.getFieldExpr=g,t.getHistogramFromFeatureSet=h,t.getMissingFields=c,t.getPredominantCategoriesFromUVInfos=E,t.getSummaryStatisticsFromFeatureSet=f,t.getUniqueValuesFromFeatureSet=x,t.getViewInfoParams=T,t.msSinceUnixEpochSQL=I,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));