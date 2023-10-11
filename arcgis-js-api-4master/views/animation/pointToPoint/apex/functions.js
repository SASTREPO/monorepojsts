/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function e(o,e,n){const a=e-o.compared.sourceZoom,t=o.halfWindowPanAtZoom(a);return-o.halfWindowSize*(n.ascensionFactor*Math.LN2*o.compared.pan+t)*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2*t)}function n(o,e,n){const a=1/e,t=Math.log(o.compared.sourceZoom*a),i=1/o.desiredPixelFlow,d=1/Math.LN2,r=e-o.compared.sourceZoom,c=1/r,l=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(r))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*a*i*d*c*l-o.halfWindowSize*t*i*d*c+o.halfWindowSize*t*i*d*l/(r*r)}function a(o,e,n){const a=e-o.compared.sourceZoom,t=1/a,i=1/e,d=Math.log(o.compared.sourceZoom*i),r=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(a))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*t*(-2*t*i*r+2*t*d+2*i-2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)}function t(o,e){return-o.halfWindowSize*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2)}function i(o,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)}function d(o,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)}function r(o,e,n){return-o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e))}function c(o,e,n){return o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e))}function l(o,e,n){return-2*o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e*e))}function m(o,e,n){return o.halfWindowSize*(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*o.halfWindowPanAtZoom(-e+o.compared.targetZoom))}function s(o,e,n){const a=Math.log(e/o.compared.targetZoom),t=1/o.desiredPixelFlow,i=1/Math.LN2,d=-e+o.compared.targetZoom,r=1/d,c=(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return-o.halfWindowSize*a*t*i*r+o.halfWindowSize*a*t*i*c/(d*d)+o.halfWindowSize*t*i*r*c/e}function h(o,e,n){const a=e-o.compared.targetZoom,t=1/a,i=1/e,d=Math.log(e/o.compared.targetZoom),r=(o.halfWindowPanAtZoom(e)+n.descensionFactor*Math.LN2*o.compared.pan-o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*t*(-2*t*i*r-2*t*d+2*i+2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)}function f(o,e){return o.halfWindowSize*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2)}function w(o,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)}function Z(o,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)}function u(o){const e=Math.LN2*o.compared.pan,n=o.compared.sourceZoom-o.compared.targetZoom,a=o.halfWindowPanAtZoom(n),t=o.halfWindowSize*Math.log(o.compared.sourceZoom/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*a);return o.compared.sourceZoom<=o.compared.targetZoom?t*(e-a):t*(e+a)}o.ddtAscensionZoomOnly=d,o.ddtAscensionZoomPan=a,o.ddtDescensionZoomOnly=Z,o.ddtDescensionZoomPan=h,o.ddtPanion=l,o.dtAscensionZoomOnly=i,o.dtAscensionZoomPan=n,o.dtDescensionZoomOnly=w,o.dtDescensionZoomPan=s,o.dtPanion=c,o.tAscensionZoomOnly=t,o.tAscensionZoomPan=e,o.tBaseLine=u,o.tDescensionZoomOnly=f,o.tDescensionZoomPan=m,o.tPanion=r,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));