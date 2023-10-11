/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../symbols","../../core/Error","../../core/maybe","../Symbol3D","./symbolConversion","../WebStyleSymbol"],(function(e,o,s,n,t,r,i){"use strict";function l(e,o,s,t){const r=a(e,{},{context:t,isLabelSymbol:!1});n.isSome(r)&&(o[s]=r)}function b(e,o,s,t){const r=a(e,{},{context:t,isLabelSymbol:!0});n.isSome(r)&&(o[s]=r)}function a(e,o,l){if(n.isNone(e))return null;const{context:b,isLabelSymbol:a}=l;if(b&&"web-scene"===b.origin&&!(e instanceof t)&&!(e instanceof i)){const t=r.to3D(e,{retainCIM:!0,hasLabelingContext:a});return n.isSome(t.symbol)?t.symbol.write(o,b):(b.messages&&b.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:b,error:t.error})),null)}return b&&"web-map"===b.origin&&"web-style"===e.type?(b.messages&&b.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:b})),null):e.write(o,b)}function m(e,s){return o.readSymbol(e,null,s)}e.fromJSON=m,e.write=l,e.writeLabelSymbol=b,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));