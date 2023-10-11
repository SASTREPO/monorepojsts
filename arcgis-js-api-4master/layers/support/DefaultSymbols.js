/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../symbols","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../symbols/SimpleLineSymbol","../../symbols/SimpleMarkerSymbol","../../symbols/SimpleFillSymbol"],(function(o,e,r,t,l,p,s,i,n,y,c,a){"use strict";let d=function(e){function r(){var o;return(o=e.apply(this,arguments)||this).directionLines=new y({color:[0,122,194],width:6}),o.directionPoints=new c({color:[255,255,255],size:6,outline:{color:[0,122,194],width:2}}),o.pointBarriers=new c({style:"x",size:10,outline:{color:[255,0,0],width:3}}),o.polygonBarriers=new a({color:[255,170,0,.6],outline:{width:7.5,color:[255,0,0,.6]}}),o.polylineBarriers=new y({width:7.5,color:[255,85,0,.7]}),o.routeInfo=new y({width:8,color:[20,89,127]}),o.firstStop=new c({color:[0,255,0],size:20,outline:{color:[255,255,255],width:4}}),o.middleStop=new c({color:[51,51,51],size:12,outline:{color:[0,122,194],width:3}}),o.lastStop=new c({color:[255,0,0],size:20,outline:{color:[255,255,255],width:4}}),o.invalidStop=new c({color:[255,0,0],size:12,outline:{color:[255,255,255],width:3}}),o.waypointStop=new c({color:[255,255,255],size:12,outline:{color:[0,122,194],width:3}}),o.breakStop=new c({color:[255,255,255],size:12,outline:{color:[0,122,194],width:3}}),o}return o._inheritsLoose(r,e),r}(t.JSONSupport);e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"directionLines",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"directionPoints",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"pointBarriers",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"polygonBarriers",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"polylineBarriers",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"routeInfo",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"firstStop",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"middleStop",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"lastStop",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"invalidStop",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"waypointStop",void 0),e.__decorate([l.property({nonNullable:!0,types:r.symbolTypes})],d.prototype,"breakStop",void 0),d=e.__decorate([n.subclass("esri.layers.support.DefaultSymbols")],d);return d}));