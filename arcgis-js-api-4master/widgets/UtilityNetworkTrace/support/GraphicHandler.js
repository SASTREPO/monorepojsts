/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../Graphic","./GeometryHandler"],(function(e,t,i){"use strict";const o=[227,27,21,.6],l=[21,244,21,.6],r=12,a=[{color:[255,0,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff0000"},{color:[255,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff00ff"},{color:[217,188,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#D9BCFF"},{color:[0,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#00ff00"},{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ffff00"}];let c=function(){function e(){this._geometryHandler=new i.GeometryHandler}var c=e.prototype;return c.getFlagGraphic=function(e,t,i,r){const a="starting-point"===t?l:o;if("polygon"===e.type){e=e.centroid}if(r){return this.makeGraphic(e,a,i.attributes,null,r)}return this.makeGraphic(e,a,i.attributes)},c.getHighlightColor=function(e){return a[e]},c.makeGraphic=function(e,i,o,l,a){let c,n=e;switch(e.type){case"multipoint":c={type:"simple-marker",color:i,size:r,outline:{color:i,width:0}},l&&(n=e);break;case"point":c=a||{type:"simple-marker",color:i,size:r,outline:{color:i,width:0}},l&&(n=e);break;case"polyline":c={type:"simple-line",color:i,width:r},l&&(n=e);break;case"polygon":c={type:"simple-fill",color:i,outline:{color:i,width:r}},l&&(n=e)}return new t({geometry:n,symbol:c,attributes:o||null})},e}();e.GraphicHandler=c,e.default=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));