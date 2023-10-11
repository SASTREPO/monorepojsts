/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/mathUtils"],(function(t,e,i){"use strict";const h=2048,n=1.5,o=8;function a(t,e){const{format:h,quality:n,rotation:o,disableDecorations:a}=t||{},r=I(t,e.padding),l=b(t,{width:e.width-r.left-r.right,height:e.height-r.top-r.bottom}),{width:g,height:u}=x(t,l),d=S(h),f=U[d];return{format:d,quality:i.clamp(null!=n?n:f,0,100),area:l,width:g,height:u,rotation:o,disableDecorations:!!a,ignoreBackground:!(!t||!t.ignoreBackground),ignorePadding:!(!t||!t.ignorePadding)}}function r(t,e){const i=a(t,e),h=i.area,n=i.width/h.width,o=I(i,e.padding),r=o.left+o.right,l=o.top+o.bottom,g=e.width-r,u=e.height-l,d=Math.floor(g*n+r),f=Math.floor(u*n+l),c=t&&t.layers?t.layers:[],s=i.ignoreBackground,w=i.ignorePadding;return{framebufferWidth:d,framebufferHeight:f,region:{x:Math.floor(h.x*n)+o.left,y:Math.floor(h.y*n)+o.top,width:i.width,height:i.height},format:i.format,quality:i.quality,rotation:i.rotation,pixelRatio:n,layers:c,disableDecorations:i.disableDecorations,ignoreBackground:s,ignorePadding:w}}function l(t,e,i,h){h.premultipliedAlpha&&R(t),i.width=t.width,i.height=t.height;const n=i.getContext("2d");n.putImageData(t,0,0),h.flipY&&q(n);const o=n.getImageData(0,0,t.width,t.height),a=g(i,e);return i.width=0,i.height=0,{dataUrl:a,data:o}}function g(t,e){const i=v[e.format],h=e.quality/100;return t.toDataURL(i,h)}function u(t,e){const h=S(t),n=U[h];return{format:h,quality:i.clamp(null!=e?e:n,0,100)}}function d(t,e){return e/Math.max(t[0],t[1])}function f(t,e,i){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(p)try{return new ImageData(t,e)}catch(h){p=!1}return m(t,e,i)}function c(t,e,i,h){if(!e||!i)throw new Error("Cannot construct image data without dimensions");if(p)try{return new ImageData(t,e,i)}catch(o){p=!1}const n=m(e,i,h);return n.data.set(t,0),n}function s(t,e,i,h=0,n=0,o=t.width-h,a=t.height-n,r=!1){const{data:l}=t,{width:g,height:u,data:d}=e,f=o/g,c=a/u,s=Math.ceil(f/2),w=Math.ceil(c/2),m=t.width;for(let M=0;M<u;M++)for(let t=0;t<g;t++){const e=4*(t+(r?u-M-1:M)*g);let o=0,a=0,p=0,y=0,x=0,b=0;const D=(M+.5)*c;for(let r=Math.floor(M*c);r<(M+1)*c;r++){const e=Math.abs(D-(r+.5))/w,g=(t+.5)*f,u=e*e;for(let d=Math.floor(t*f);d<(t+1)*f;d++){const t=Math.abs(g-(d+.5))/s,e=Math.sqrt(u+t*t);if(e>=1)continue;let f=2*e*e*e-3*e*e+1;const c=4*(h+d+(n+r)*m);b+=f*l[c+3],a+=f,!i&&l[c+3]<255&&(f=f*l[c+3]/255),p+=f*l[c],y+=f*l[c+1],x+=f*l[c+2],o+=f}}d[e]=p/o,d[e+1]=y/o,d[e+2]=x/o,d[e+3]=b/a}return e}function w(t,e,i){if(!e)return t;const{framebufferWidth:a,framebufferHeight:r,pixelRatio:l,region:g}=t,u=I(t,i),d=u.left+u.right,f=u.top+u.bottom,c=a-d,s=r-f,w=Math.min(o,Math.min((h-d)/c,(h-f)/s));return w<n?t:{...t,framebufferWidth:Math.round(c*w)+d,framebufferHeight:Math.round(s*w)+f,pixelRatio:l*w,resample:{region:{x:Math.round((g.x-u.left)*w)+u.left,y:Math.round((g.y-u.top)*w)+u.top,width:Math.round(g.width*w),height:Math.round(g.height*w)},width:a,height:r}}}function m(t,e,i){return i||(i=y()),i.getContext("2d").createImageData(t,e)}let M=null,p=!0;function y(){return M||(M=document.createElement("canvas"),M.width=1,M.height=1),M}function x(t,e){if(!t)return e;const i=t.width,h=t.height;if(null!=i&&null!=h)return{width:Math.floor(i),height:Math.floor(h)};if(null==i&&null==h)return e;const n=e.width/e.height;return null==h?{width:Math.floor(i),height:Math.floor(i/n)}:{width:Math.floor(h*n),height:Math.floor(h)}}function b(t,e){const i={x:0,y:0,width:e.width,height:e.height};if(t&&t.area){null!=t.area.x&&(i.x=Math.floor(t.area.x)),null!=t.area.y&&(i.y=Math.floor(t.area.y));const h=null!=t.area.width?Math.floor(t.area.width):null,n=null!=t.area.height?Math.floor(t.area.height):null;if(i.width=e.width-i.x,i.height=e.height-i.y,null!=h&&null!=n)i.width=Math.min(i.width,h),i.height=Math.min(i.height,n);else if(null==h&&null!=n){const t=Math.min(i.width,h);i.height=t/i.width*i.height,i.width=t}else if(null!=h&&null==n){const t=Math.min(i.height,n);i.width=t/i.height*i.width,i.height=t}}return D(j(i,t),e)}function D(t,e){const i=Math.floor(Math.max(t.x,0)),h=Math.floor(Math.max(t.y,0)),n={x:i,y:h,width:Math.floor(Math.min(t.width,e.width-i)),height:Math.floor(Math.min(t.height,e.height-h))},o=n.width/n.height,a=t.width/t.height;if(a===o)return n;if(a>o){const t=Math.floor(n.width/a),e=n.height-t;return{x:n.x,y:Math.floor(n.y+e/2),width:n.width,height:t}}const r=Math.floor(n.height*a),l=n.width-r;return{x:Math.floor(n.x+l/2),y:n.y,width:r,height:n.height}}function j(t,e){if(!e||null==e.width||null==e.height)return t;const i=e.width/e.height,h=t.width/t.height;if(h===i)return t;if(h<i){const e=Math.floor(t.height*i);return t.x-=(e-t.width)/2,t.width=e,t}const n=Math.floor(t.width/i);return t.y-=(n-t.height)/2,t.height=n,t}function I(t,e){return!e||t&&t.ignorePadding?k:e}function S(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return C}}function q(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore()}function R(t){const e=t.data,i=e.length;for(let h=0;h<i;h+=4){const t=e[h+3];if(t>0){const i=t/255;e[h+0]=e[h+0]/i,e[h+1]=e[h+1]/i,e[h+2]=e[h+2]/i}}}const v={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},P=98,C="png",U={png:100,jpg:P,jpeg:P},k={top:0,right:0,bottom:0,left:0};t.completeUserSettings=a,t.createEmptyImageData=f,t.encodeResult=l,t.getFormatAndQuality=u,t.getMaximumResolutionScale=d,t.resampleHermite=s,t.screenshotSuperSampleSettings=w,t.toDataUrl=g,t.toRenderSettings=r,t.wrapImageData=c,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));