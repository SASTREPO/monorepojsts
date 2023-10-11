/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/maybe"],(function(t,e,n,r){"use strict";function o(t){return a.apply(this,arguments)}function a(){return(a=e._asyncToGenerator((function*(t){yield t.whenReady();const e=t.basemapView.baseLayerViews.map((t=>t.layer));if(!e.length){const e=getComputedStyle(t.container).backgroundColor,r=e&&new n(e);return t.get("background.color")||(r&&0!==r.a?r:null)||null}const r=(yield t.takeScreenshot({format:"png",layers:e.toArray()})).data.data,o=r.length;let a=0,u=0,l=0,i=0,s=0,c=0;for(let n=0;n<o;n+=4){const t=r[n],e=r[n+1],o=r[n+2],d=r[n+3],h=d/255;a+=t*t*h,u+=e*e*h,l+=o*o*h,s+=h,d&&(i+=d,c++)}a=Math.round(Math.sqrt(a/s)),u=Math.round(Math.sqrt(u/s)),l=Math.round(Math.sqrt(l/s));return new n([a,u,l,i/c/255])}))).apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return(l=e._asyncToGenerator((function*(t){if(!t)return null;const e=yield o(t);return r.isSome(e)?i(e):null}))).apply(this,arguments)}function i(t){return s(t).isBright?"light":"dark"}function s(t){let{r:e,g:r,b:o,a}=t;return a<1&&(e=Math.round(a*e+255*(1-a)),r=Math.round(a*r+255*(1-a)),o=Math.round(a*o+255*(1-a))),new n({r:e,g:r,b:o})}t.getBackgroundColor=o,t.getBackgroundColorTheme=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));