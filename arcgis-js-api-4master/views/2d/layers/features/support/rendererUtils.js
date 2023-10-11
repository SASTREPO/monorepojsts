/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/Logger","../../../../../core/screenUtils"],(function(e,l,t){"use strict";const o=8,s=o-2,a=l.getLogger("esri.renderers.visualVariables.support.utils"),r=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),t=l.visualVariables.map((e=>n(e)?u(e):e));return l.visualVariables=t,l};function i(e){return e.map((e=>n(e)?u(e.clone()):e))}function n(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function u(e){return e.stops=v(e.type,e.stops),e}function c(e,l,t){return(1-t)*e+t*l}function p(e,l){const[o,...a]=l,r=a.pop(),i=a[0].value,n=a[a.length-1].value,u=(n-i)/s,p=[];for(let s=i;s<n;s+=u){let o=0;for(;s>=a[o].value;)o++;const r=a[o],i=l[o-1],n=s-i.value,u=r.value===i.value?1:n/(r.value-i.value);if("color"===e){const e=a[o],t=l[o-1],r=e.color.clone();r.r=c(t.color.r,r.r,u),r.g=c(t.color.g,r.g,u),r.b=c(t.color.b,r.b,u),r.a=c(t.color.a,r.a,u),p.push({value:s,color:r,label:e.label})}else if("size"===e){const e=a[o],r=l[o-1],i=t.toPt(e.size),n=c(t.toPt(r.size),i,u);p.push({value:s,size:n,label:e.label})}else{const e=a[o],t=c(l[o-1].opacity,e.opacity,u);p.push({value:s,opacity:t,label:e.label})}}return[o,...p,r]}function b(e){const[l,...t]=e,o=t.pop();for(;t.length>s;){let e=0,l=0;for(let o=1;o<t.length;o++){const s=t[o-1],a=t[o],r=Math.abs(a.value-s.value);r>l&&(l=r,e=o)}t.splice(e,1)}return[l,...t,o]}function v(e,l){return l.length<=o?l:(a.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o}. Displayed stops will be simplified.`),l.length>2*o?p(e,l):b(l))}e.simplifyVVRenderer=r,e.simplifyVisualVariables=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));