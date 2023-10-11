/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","../../core/scheduling","../../core/accessorSupport/watch"],(function(e,i,n,r,t){"use strict";function a(e){switch(e.type){case"2d":return o(e);case"3d":if(e)return t.dispatch(),r.debug.dispatch(),n.whenOnce((()=>!e.updating))}return Promise.resolve()}function o(n){const a=i.createResolver();let o=performance.now();const s=function(){var i,a,o,s,u,l,c;if(t.dispatch(),r.debug.dispatch(),!n.ready||n.updating||!n.stationary||n.rendering||!0===(null==(i=n.layerViewManager)?void 0:i.updating)||!0===(null==(a=n.labelManager)?void 0:a.updating)||!0===(null==(o=n.graphicsView)?void 0:o.updating)||!0===(null==(s=n.magnifier)?void 0:s.visible)&&e.isSome(null==(u=n.magnifier)?void 0:u.position)&&(null==(l=n._magnifierView)||!l.mask||null==(c=n._magnifierView)||!c.overlay)||n.allLayerViews.some((e=>!0===e.updating)))return!0;return!!n.allLayerViews.find((function(e){const i=!e.isFulfilled(),n=e.updating&&!e.suspended;return i||n}))};function u(){if(!n.destroyed&&s())o=null,setTimeout(u,16);else{o||(o=performance.now());performance.now()-o>=200?a():setTimeout(u,16)}}return setTimeout(u,16),a.promise}return a}));