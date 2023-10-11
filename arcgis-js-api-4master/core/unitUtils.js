/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./has","./jsonMap","./maybe","../geometry/projectionEllipsoid","../geometry/SpatialReference","../geometry/support/Ellipsoid","../geometry/support/spatialReferenceUtils","../geometry/support/WKIDUnitConversion"],(function(e,t,s,r,i,n,a,u,c){"use strict";const o=39.37,l=a.earth.radius*Math.PI/200,m=/UNIT\[([^\]]+)\]\]$/i,f=c,U=/UNIT\[([^\]]+)\]/i,d=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=s.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),h=e=>e*e,q=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:h(.001)},"square-centimeters":{inBaseUnits:h(.01)},"square-decimeters":{inBaseUnits:h(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:h(1e3)},"square-inches":{inBaseUnits:h(.0254)},"square-feet":{inBaseUnits:h(.3048)},"square-yards":{inBaseUnits:h(.9144)},"square-miles":{inBaseUnits:h(1609.344)},"square-us-feet":{inBaseUnits:h(1200/3937)},acres:{inBaseUnits:.0015625*h(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*q(.001)},"cubic-centimeters":{inBaseUnits:1e3*q(.01)},"cubic-decimeters":{inBaseUnits:1e3*q(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*q(1e3)},"cubic-inches":{inBaseUnits:1e3*q(.0254)},"cubic-feet":{inBaseUnits:1e3*q(.3048)},"cubic-yards":{inBaseUnits:1e3*q(.9144)},"cubic-miles":{inBaseUnits:1e3*q(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},B=function(){const e={};for(const t in g)for(const s in g[t].units)e[s]=t;return e}();function y(e,t,s){return e*g[s].units[t].inBaseUnits}function b(e,t,s){return e/g[s].units[t].inBaseUnits}const k=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],S=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"];function M(e){return"imperial"===e||"metric"===e}function _(e){const t=B[e];if(t)return t;throw new Error("unknown type")}function w(e){return g[e].baseUnit}function I(e){return w(_(e))}function P(e,t=null){return t=t||_(e),g[t].baseUnit===e}function F(e,t,s){if(t===s)return e;const r=_(t);if(r!==_(s))throw new Error("incompatible units");const i=P(t,r)?e:y(e,t,r);return P(s,r)?i:b(i,s,r)}function D(e,t,s){switch(s){case"metric":return N(e,t);case"imperial":return R(e,t);default:return s}}function O(e,t,s){switch(s){case"metric":return E(e,t);case"imperial":return T(e,t);default:return s}}function N(e,t){return F(e,t,"meters")<3e3?"meters":"kilometers"}function E(e,t){return F(e,t,"meters")<1e5?"meters":"kilometers"}function R(e,t){return F(e,t,"feet")<1e3?"feet":"miles"}function T(e,t){return F(e,t,"feet")<1e5?"feet":"miles"}function v(e,t){return F(e,t,"square-meters")<3e6?"square-meters":"square-kilometers"}function J(e,t){return F(e,t,"square-feet")<1e6?"square-feet":"square-miles"}function L(e,t,s){return F(e,t,"meters")/(s*Math.PI/180)}function C(e){return p.fromJSON(e.toLowerCase())||null}function j(e){return p.toJSON(e)||null}function x(e){if(e&&"object"==typeof e&&!u.isEarth(e))return 1;const t=K(e);return t>1e5?1:t}function A(e){return K(e)>=(e instanceof n?i.getReferenceEllipsoid(e).metersPerDegree:1e5)?"meters":G(e)}function K(e,t=a.earth.metersPerDegree){return V(e,!0)||t}function V(e,t=!1){let s,r,i=null;if(null!=e&&("object"==typeof e?(s=e.wkid,r=e.wkt):"number"==typeof e?s=e:"string"==typeof e&&(r=e)),s){if(u.isWKIDFromMars(s))return a.mars.metersPerDegree;if(u.isWKIDFromMoon(s))return a.moon.metersPerDegree;i=f.values[f[s]],!i&&t&&d.has(s)&&(i=l)}else r&&($(r)?i=W(m.exec(r),i):H(r)&&(i=W(U.exec(r),i)));return i}function W(e,t){return e&&e[1]?Y(e[1]):t}function Y(e){return parseFloat(e.split(",")[1])}function G(e){let t,s,i=null;if(null!=e&&("object"==typeof e?(t=e.wkid,s=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(s=e)),t)i=f.units[f[t]];else if(s){const e=$(s)?m:H(s)?U:null;if(e){const t=e.exec(s);t&&t[1]&&(i=Q(t[1]))}}return r.isSome(i)?C(i):null}function H(e){return/^GEOCCS/i.test(e)}function $(e){return/^PROJCS/i.test(e)}const z=1e-7;function Q(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let s=t&&t[1];if(!s||-1===f.units.indexOf(s)){const t=Y(e);s=null;const r=f.values;for(let e=0;e<r.length;++e)if(Math.abs(t-r[e])<z){s=f.units[e];break}}return s}function X(e){if(!e)return null;switch(G(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null}return null}const Z={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},ee={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},te=s.strict()(Z),se=s.strict()(ee),re=s.strict()({...Z,...ee});e.areaUnitsJSONMap=te,e.baseUnitForUnit=I,e.baseUnitForUnitType=w,e.convertUnit=F,e.getDefaultUnitSystem=X,e.getMetersPerUnit=V,e.getMetersPerUnitForSR=K,e.getMetersPerVerticalUnitForSR=x,e.getUnitString=G,e.getVerticalUnitStringForSR=A,e.inchesPerMeter=o,e.isBaseUnit=P,e.isMeasurementSystem=M,e.lengthToDegrees=L,e.lengthUnitsJSONMap=se,e.measurementAreaUnits=k,e.measurementLengthUnits=S,e.preferredImperialAreaUnit=J,e.preferredImperialLengthUnit=R,e.preferredImperialVerticalLengthUnit=T,e.preferredLengthUnit=D,e.preferredMetricAreaUnit=v,e.preferredMetricLengthUnit=N,e.preferredMetricVerticalLengthUnit=E,e.preferredVerticalLengthUnit=O,e.unitFromRESTJSON=C,e.unitToRESTJSON=j,e.unitType=_,e.unitsJSONMap=re,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));