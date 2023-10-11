/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Color","../../../symbols","../../../core/has","../../../core/Error","../../../core/maybe","../../../intl/date","../../../renderers/support/numberUtils","../../../renderers/support/pointCloud/PointSizeSplatAlgorithm","../../heuristics/outline","../../statistics/classBreaks","../../statistics/summaryStatistics","../../support/utils","../../../symbols/edges/SketchEdges3D","../../../symbols/edges/SolidEdges3D","../../../views/support/colorUtils","../../../symbols/MeshSymbol3D","../../../symbols/FillSymbol3DLayer","../../../symbols/SimpleFillSymbol","../../../symbols/PolygonSymbol3D","../../../symbols/ExtrudeSymbol3DLayer","../../../symbols/SimpleLineSymbol","../../../symbols/LineSymbol3D","../../../symbols/LineSymbol3DLayer","../../../symbols/PathSymbol3DLayer","../../../symbols/SimpleMarkerSymbol","../../../symbols/PointSymbol3D","../../../symbols/IconSymbol3DLayer","../../../symbols/ObjectSymbol3DLayer"],(function(e,t,n,o,l,i,s,a,r,u,c,m,d,f,y,p,h,b,g,w,S,D,v,x,V,z,B,k,F,I){"use strict";const L=/^(\d+(\.\d+)?)\s*(%)$/i,T=[0,0,0,.4],U=["hours","minutes","seconds"],A=[].concat(f.defaultBasemapGroups.light).concat(f.defaultBasemapGroups.dark);function M(e,t,n){if("string"==typeof e){const t=n.getField(e);if(t&&"date"===t.type)return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const n=U.indexOf(t)>-1?"short-date-short-time":"short-date";return a.formatDate(e,a.convertDateFormatToIntlOptions(n))}return e}function C(e,t){return new i(e,t)}function P(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function R(e,t,n,o,l=!0){const i="90-10"===n&&t?{min:t.classBreakInfos[0].maxValue,max:t.classBreakInfos[t.classBreakInfos.length-1].minValue,avg:null,stddev:null}:e,{avg:s,stddev:a,min:r,max:u}=i,c=O(i,o,l);let m=c?c[0]:r,d=c?c[1]:u;return c?{minDataValue:m,maxDataValue:d,defaultValuesUsed:!0}:("above"===n?m=P(s,a,r):"below"===n&&(d=P(s,a,r)),{minDataValue:m,maxDataValue:d,defaultValuesUsed:!1})}function O(e,t,n){let o,l;const i=E({statistics:e,isDate:t});return i.defaultValuesUsed?(o=i.min,l=i.max):!n||null!=e.avg&&e.stddev||(o=e.min,l=e.max),null!=o?[o,l]:null}function E(e){let t,n,o=e&&e.statistics;if(o||(o={}),null==o.min)if(e.isDate){const e=G();t=e[0],n=e[1]}else t=0,n=100;else if(o.min===o.max)if(e.isDate){const e=G(o.min);t=e[0],n=e[1]}else o.min<0?(t=2*o.min,n=0):o.min>0?(t=0,n=2*o.min):(t=0,n=100);return{min:null!=t?t:o.min,max:null!=n?n:o.max,defaultValuesUsed:null!=t||null!=n}}function G(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),o=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>o&&(o=e)),[n,o]}function _(e,t){const o=[],l=e.length;for(let i=0;i<t;i++)o.push(new n(e[i%l]));return o}function j(e,t,n,o=!0){const{minDataValue:l,maxDataValue:i,defaultValuesUsed:s}=e;return s||"above"===n||"below"===n||"90-10"===n?q(l,i,5):H(t,o)}function Y(e){const{avg:t,stddev:n,min:o,max:l}=e;if(null==t||null==n)return q(o,l,5);const i=P(t,n,o),s=l-i,a=i-o,u=Math.max(s,a),c=i+u,m=i-u,d=i-u/2,f=u/2+i;return r.round([m,d,i,f,c],{strictBounds:!0})}function W(e,t){const{min:n,max:o}=t,[l,i,s,a,u]=e,c=null!=n&&l<n,m=null!=o&&u>o;if(null==n||null==o||!c&&!m)return e;const d=c?n:l,f=c?d+(s-d)/2:i,y=m?o:u,p=m?s+(y-s)/2:a;return r.round([d,f,s,p,y],{strictBounds:!0})}function q(e,t,n){const o=(t-e)/(n-1),l=[e];for(let i=1;i<=n-2;i++)l.push(e+i*o);return l.push(t),r.round(l,{strictBounds:!0})}function H(e,t=!0){let n=e.avg,o=n-e.stddev,l=n+e.stddev;o<e.min&&(o=e.min),l>e.max&&(l=e.max),t&&(n=o+(l-o)/2);let i=r.round([o,l],{strictBounds:!0});return o=i[0],l=i[1],i=[o,o+(n-o)/2,n,n+(l-n)/2,l],r.round(i,{strictBounds:!0})}function N(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;default:return}}function $(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}default:return}}function J(e,t){const{type:n,size:o,color:l,outline:i}=t;let s;switch(e){case"point":case"multipoint":if("2d"===n)s=new B({color:l,size:o,outline:{color:i.color,width:i.width}});else if("3d-flat"===n)s=new k({symbolLayers:[new F({size:o,resource:{primitive:"circle"},material:{color:l},outline:{color:i.color,size:i.width}})]});else if(n.indexOf("3d-volumetric")>-1){const e="3d-volumetric-uniform"===n,i=new I({height:o,resource:{primitive:e?"sphere":"cylinder"},material:{color:l}});e||(i.width=t.widthAndDepth,i.depth=t.widthAndDepth),s=new k({symbolLayers:[i]})}break;case"polyline":"2d"===n?s=new v({color:l,width:o}):"3d-flat"===n?s=new x({symbolLayers:[new V({size:o,material:{color:l}})]}):"3d-volumetric"===n&&(s=new x({symbolLayers:[new z({width:"number"==typeof o?o:parseFloat(o),height:"number"==typeof o?o:parseFloat(o),material:{color:l}})]}));break;case"polygon":"2d"===n?s=new w({color:l,outline:{color:i.color,width:i.width}}):"3d-flat"===n?s=new S({symbolLayers:[new g({material:{color:l},outline:{color:i.color,size:i.width}})]}):"3d-volumetric"===n&&(s=new S({symbolLayers:[new D({size:o,material:{color:l}})]}));break;case"mesh":{const e=t.meshInfo&&t.meshInfo.colorMixMode,n=t.meshInfo&&t.meshInfo.edgesType;s=new b({symbolLayers:[new g({material:{color:l,colorMixMode:e||null},edges:"solid"===n?new p({color:T}):"sketch"===n?new y({color:T}):null})]});break}}return s}function K(e,t,n){const o=Q({layer:e,fields:t});if(o.length)return C(n,"Unknown fields: "+o.join(", ")+". You can only use fields defined in the layer schema");const l=X({layer:e,fields:t});return l.length?C(n,"Unsupported fields: "+l.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function Q(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function X(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}function Z(e,t){return ee.apply(this,arguments)}function ee(){return(ee=t._asyncToGenerator((function*(e,t){const n={layer:e.layer,view:e.view,signal:e.signal},[o,l]=yield Promise.all([m(e),t?c(n):null]),i=O({min:o.minValue,max:o.maxValue,avg:null,stddev:null},!1,!1);return{result:i?yield m({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:i[0],maxValue:i[1],normalizationTotal:i[0]+i[1]}):o,defaultValuesUsed:!!i,outlineResult:l}}))).apply(this,arguments)}function te(e){return d(e)}function ne(e,t){let{minSize:n,maxSize:o}=e;if("height"===t){n=((o-n)/2+n)/(2*2.3),o*=2}return{minSize:n,maxSize:o}}function oe(e){return L.test(e)}function le(e){const t=e.match(L),n=Number(t[1]);if("%"===t[3])return new u.default({scaleFactor:n/100})}function ie(e,t,n,o){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=o,e.field="string"==typeof t?t:"string"==typeof n?n:null}function se(e,t){return ae.apply(this,arguments)}function ae(){return(ae=t._asyncToGenerator((function*(e,t){let n=null,o=null;if(!e&&!t)return{basemapId:n,basemapTheme:o};var l;!e&&t&&(e=t&&(null==(l=t.map)?void 0:l.basemap));if(e&&(n=f.getBasemapId(e,A,!1),n)){const e=f.getBasemapGroup(n);s.isSome(e)&&(o=e)}return n||"2d"!==(null==t?void 0:t.type)||(o=yield h.getBackgroundColorTheme(t),s.isSome(o)&&(n="dark"===o?"dark-gray":"gray")),{basemapId:n,basemapTheme:o}}))).apply(this,arguments)}e.clampAboveAndBelowStopValues=W,e.createColors=_,e.createDataValues=j,e.createDefaultStopValues=q,e.createError=C,e.createStopValues=H,e.createStopValuesForAboveBelow=Y,e.createSymbol=J,e.formatDate=M,e.getBaseValueForAboveBelow=P,e.getBasemapInfo=se,e.getClassBreaks=Z,e.getDataRange=R,e.getDefaultDataRange=O,e.getPointSizeAlgorithm=le,e.getSizeRangeForAxis=ne,e.getSummaryStatistics=te,e.getSymbolOutlineFromScheme=$,e.getSymbolSizeFromScheme=N,e.isValidPointSize=oe,e.updateAgeRendererAuthoringInfoVV=ie,e.verifyBasicFieldValidity=K,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));