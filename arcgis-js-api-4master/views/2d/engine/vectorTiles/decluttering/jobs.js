/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/mat3f32","./config","./util","../style/StyleDefinition"],(function(e,t,n,o,r){"use strict";function i(e,t,n,o,i,l){const{iconRotationAlignment:s,textRotationAlignment:a,iconTranslate:c,iconTranslateAnchor:h,textTranslate:u,textTranslateAnchor:d}=o;let y=0;for(const g of e.colliders){const[e,o]=0===g.partIndex?c:u,x=0===g.partIndex?h:d,m=g.minLod<=l&&l<=g.maxLod;y+=m?0:1,g.enabled=m,g.xScreen=g.xTile*i[0]+g.yTile*i[3]+i[6],g.yScreen=g.xTile*i[1]+g.yTile*i[4]+i[7],x===r.TranslateAnchor.MAP?(g.xScreen+=n*e-t*o,g.yScreen+=t*e+n*o):(g.xScreen+=e,g.yScreen+=o),r.RotationAlignment.VIEWPORT===(0===g.partIndex?s:a)?(g.dxScreen=g.dxPixels,g.dyScreen=g.dyPixels):(g.dxScreen=n*(g.dxPixels+g.width/2)-t*(g.dyPixels+g.height/2)-g.width/2,g.dyScreen=t*(g.dxPixels+g.width/2)+n*(g.dyPixels+g.height/2)-g.height/2)}e.colliders.length>0&&y===e.colliders.length&&(e.unique.show=!1)}let l=function(){function e(e,r,i,l,s,a){this._symbols=e,this._styleRepository=l,this._zoom=s,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new o.GridIndex(r,i,n.COLLISION_GRID_CELL_SIZE),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const n of e)for(const e of n.symbols)this._allNeededMatrices.has(e.tile)||this._allNeededMatrices.set(e.tile,t.clone(e.tile.transforms.tileUnitsToPixels))}var l=e.prototype;return l.work=function(e){const t=this._gridIndex;function n(e){const n=e.xScreen+e.dxScreen,o=e.yScreen+e.dyScreen,r=n+e.width,i=o+e.height,[l,s,a,c]=t.getCellSpan(n,o,r,i);for(let h=s;h<=c;h++)for(let e=l;e<=a;e++){const l=t.cells[h][e];for(const e of l){const t=e.xScreen+e.dxScreen,l=e.yScreen+e.dyScreen,s=t+e.width,a=l+e.height;if(!(r<t||n>s||i<l||o>a))return!0}}return!1}const o=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const t=this._symbols[this._currentLayerCursor],r=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-o>e)return!1;const l=t.symbols[this._currentSymbolCursor];if(!l.unique.show)continue;i(l,this._si,this._co,r,this._allNeededMatrices.get(l.tile),this._zoom);const s=l.unique;if(!s.show)continue;const{iconAllowOverlap:a,iconIgnorePlacement:c,textAllowOverlap:h,textIgnorePlacement:u}=r;for(const e of l.colliders){if(!e.enabled)continue;const t=s.parts[e.partIndex];if(!t.show)continue;!(e.partIndex?h:a)&&n(e)&&(e.hard?s.show=!1:t.show=!1)}if(s.show)for(const e of l.colliders){if(!e.enabled)continue;if(e.partIndex?u:c)continue;if(!s.parts[e.partIndex].show)continue;const t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,o=t+e.width,r=n+e.height,[i,l,a,h]=this._gridIndex.getCellSpan(t,n,o,r);for(let s=l;s<=h;s++)for(let t=i;t<=a;t++){this._gridIndex.cells[s][t].push(e)}}}}return!0},l._getProperties=function(e){const t=this._styleProps.get(e);if(t)return t;const n=this._zoom,o=this._styleRepository.getStyleLayerByUID(e),i=o.getLayoutValue("symbol-placement",n)!==r.SymbolPlacement.POINT;let l=o.getLayoutValue("icon-rotation-alignment",n);l===r.RotationAlignment.AUTO&&(l=i?r.RotationAlignment.MAP:r.RotationAlignment.VIEWPORT);let s=o.getLayoutValue("text-rotation-alignment",n);s===r.RotationAlignment.AUTO&&(s=i?r.RotationAlignment.MAP:r.RotationAlignment.VIEWPORT);const a=o.getPaintValue("icon-translate",n),c=o.getPaintValue("icon-translate-anchor",n),h=o.getPaintValue("text-translate",n),u=o.getPaintValue("text-translate-anchor",n),d={iconAllowOverlap:o.getLayoutValue("icon-allow-overlap",n),iconIgnorePlacement:o.getLayoutValue("icon-ignore-placement",n),textAllowOverlap:o.getLayoutValue("text-allow-overlap",n),textIgnorePlacement:o.getLayoutValue("text-ignore-placement",n),iconRotationAlignment:l,textRotationAlignment:s,iconTranslateAnchor:c,iconTranslate:a,textTranslateAnchor:u,textTranslate:h};return this._styleProps.set(e,d),d},e}();e.CollisionJob=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));