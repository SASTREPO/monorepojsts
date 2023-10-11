/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../symbols/cim/CIMSymbolHelper","./RectangleBinPack","../webgl/Rect","../../../webgl/enums","../../../webgl/Texture"],(function(t,i,e,s,h){"use strict";const a="dasharray-";return function(){function r(t,e,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(t<=0||e<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=e,s>0&&(this._maxItemSize=s),this._binPack=new i(t-4,e-4)}var n=r.prototype;return n.dispose=function(){this._binPack=null,this._mosaicRects={};for(const t of this._textures)t&&t.dispose();this._textures.length=0},n.getWidth=function(t){return t>=this._size.length?-1:this._size[t][0]},n.getHeight=function(t){return t>=this._size.length?-1:this._size[t][1]},n.getPageSize=function(t){return t>=this._size.length?null:this._size[t]},n.setSpriteSource=function(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new i(this._pageWidth-4,this._pageHeight-4);const t=Math.floor(this._pageWidth),e=Math.floor(this._pageHeight),s=new Uint32Array(t*e);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t},n.getSpriteItem=function(t,i=!1){let e,s,h=this._mosaicRects[t];if(h)return h;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(t&&t.startsWith(a)?([e,s]=this._rasterizeDash(t),i=!0):e=this._sprites.getSpriteInfo(t),!e||!e.width||!e.height||e.width<0||e.height<0)return null;const r=e.width,n=e.height,[o,_,c]=this._allocateImage(r,n);return o.width<=0?null:(this._copy(o,e,_,c,i,s),h={rect:o,width:r,height:n,sdf:e.sdf,simplePattern:!1,pixelRatio:e.pixelRatio,page:_},this._mosaicRects[t]=h,h)},n.getSpriteItems=function(t){const i={};for(const e of t)i[e.name]=this.getSpriteItem(e.name,e.repeat);return i},n.getMosaicItemPosition=function(t,i){const e=this.getSpriteItem(t,i),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;const h=e.width,a=e.height,r=2;return{tl:[s.x+r,s.y+r],br:[s.x+r+h,s.y+r+a],page:e.page}},n.bind=function(t,i,e=0,a=0){this._textures[e]||(this._textures[e]=new h.Texture(t,{pixelFormat:s.PixelFormat.RGBA,dataType:s.PixelType.UNSIGNED_BYTE,wrapMode:s.TextureWrapMode.CLAMP_TO_EDGE,width:this._size[e][0],height:this._size[e][1]},new Uint8Array(this._mosaicsData[e].buffer)));const r=this._textures[e];r.setSamplingMode(i),this._dirties[e]&&r.setData(new Uint8Array(this._mosaicsData[e].buffer)),t.bindTexture(r,a),this._dirties[e]=!1},r._copyBits=function(t,i,e,s,h,a,r,n,o,_,c){let u=s*i+e,g=n*a+r;if(c){g-=a;for(let r=-1;r<=_;r++,u=((r+_)%_+s)*i+e,g+=a)for(let i=-1;i<=o;i++)h[g+i]=t[u+(i+o)%o]}else for(let l=0;l<_;l++){for(let i=0;i<o;i++)h[g+i]=t[u+i];u+=i,g+=a}},n._copy=function(t,i,e,s,h,a){if(!this._sprites||"loaded"!==this._sprites.loadStatus||e>=this._mosaicsData.length)return;const n=new Uint32Array(a?a.buffer:this._sprites.image.buffer),o=this._mosaicsData[e];o&&n||console.error("Source or target images are uninitialized!");const _=2,c=a?i.width:this._sprites.width;r._copyBits(n,c,i.x,i.y,o,s[0],t.x+_,t.y+_,i.width,i.height,h),this._dirties[e]=!0},n._allocateImage=function(t,s){t+=2,s+=2;const h=Math.max(t,s);if(this._maxItemSize&&this._maxItemSize<h){const i=new e(0,0,t,s);return this._mosaicsData.push(new Uint32Array(t*s)),this._dirties.push(!0),this._size.push([t,s]),this._textures.push(void 0),[i,this._mosaicsData.length-1,[t,s]]}let a=t%4?4-t%4:4,r=s%4?4-s%4:4;1===a&&(a=5),1===r&&(r=5);const n=this._binPack.allocate(t+a,s+r);return n.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new i(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,s)):[n,this._currentPage,[this._pageWidth,this._pageHeight]]},n._rasterizeDash=function(i){const e=/\[(.*?)\]/,s=i.match(e);if(!s)return null;const h=s[1].split(",").map(Number),a=i.slice(i.lastIndexOf("-")+1),[r,n,o]=t.SymbolHelper.rasterizeDash(h,a);return[{x:0,y:0,width:n,height:o,sdf:!0,pixelRatio:1},new Uint8Array(r.buffer)]},r}()}));