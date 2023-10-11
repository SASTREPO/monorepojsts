/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./clock","./Error","./events","./Logger","./maybe"],(function(e,r,t,o,n,i){"use strict";function u(e){return Promise.all(e)}function s(e,r){const t=e.slice();return Promise.all(e.map(((e,t)=>r(e,t)))).then((e=>t.filter(((r,t)=>e[t]))))}function c(e){return new Promise(((r,t)=>{try{e(r,t)}catch(o){Promise.resolve().then((()=>t(o)))}}))}function l(e="Aborted"){return new t("AbortError",e)}function f(e,r="Aborted"){if(m(e))throw l(r)}function a(e){return i.isSome(e)?"aborted"in e?e:e.signal:e}function m(e){const r=a(e);return i.isSome(r)&&r.aborted}function h(e){if(A(e))throw e}function b(e){if(!A(e))throw e}function w(e,r){const t=a(e);if(!i.isNone(t)){if(!t.aborted)return o.once(t,"abort",(()=>r()));r()}}function d(e,r){const t=a(e);if(!i.isNone(t))return f(t),o.once(t,"abort",(()=>r(l())))}function v(e,r){const t=a(r);return i.isNone(t)?e:new Promise(((t,o)=>{let n=w(r,(()=>o(l())));const u=()=>n=i.removeMaybe(n);e.then(u,u),e.then(t,o)}))}function p(e,r,o){return Promise.race([e,k(r).then((()=>{throw new t("timeout",`Did not resolve within ${r} milliseconds (${null!=o?o:"timeout"})`)}))])}function A(e){return e&&"AbortError"===e.name}function P(e){return e.catch((e=>{if(!A(e))throw e}))}function g(e,r=n.getLogger("esri")){return e.catch((e=>{A(e)||r.error(e)}))}function E(){let e=null;const r=new Promise(((r,t)=>{e={promise:void 0,resolve:r,reject:t}}));return e.promise=r,e}function T(e){if(!e)return;if("function"!=typeof e.forEach){const r=Object.keys(e);return T(r.map((r=>e[r]))).then((e=>{const t={};return r.forEach(((r,o)=>t[r]=e[o])),t}))}const r=e;return c((e=>{const t=[];let o=r.length;0===o&&e(t),r.forEach((r=>{const n={promise:r||Promise.resolve(r)};t.push(n),n.promise.then((e=>{n.value=e})).catch((e=>{n.error=e})).then((()=>{--o,0===o&&e(t)}))}))}))}function y(e){return T(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function j(e){return Promise.reject(e)}function N(e){return Promise.resolve(e)}function k(e,r,t){const o=new AbortController;return w(t,(()=>o.abort())),new Promise(((t,n)=>{let i=setTimeout((()=>{i=0,t(r)}),e);w(o,(()=>{i&&(clearTimeout(i),n(l()))}))}))}function O(e,r,o,n){const i=o&&"abort"in o?o:null;null!=n||i||(n=o);let u=setTimeout((()=>{u=0,i&&i.abort()}),r);const s=()=>n||new t("promiseUtils:timeout","The wrapped promise did not resolve within "+r+" ms");return e.then((e=>{if(0===u)throw s();return clearTimeout(u),e}),(e=>{throw clearTimeout(u),0===u?s():e}))}function S(e){return e&&"function"==typeof e.then}function C(e){return S(e)?e:Promise.resolve(e)}function I(e,r=-1){let t,o,n,u,s=null;const c=(...f)=>{if(t){o=f,u&&u.reject(l()),u=E();const e=i.assumeNonNull(u.promise);if(s){const e=s;s=null,e.abort()}return e}if(n=u||E(),u=null,r>0){const o=new AbortController;t=C(e(...f,o.signal));const n=t;k(r).then((()=>{t===n&&(u?o.abort():s=o)}))}else t=1,t=C(e(...f));const a=()=>{const e=o;o=n=t=s=null,null!=e&&c(...e)},m=t,h=n;return m.then(a,a),m.then(h.resolve,h.reject),i.assumeNonNull(h.promise)};return c}function L(){let e,t;const o=new Promise(((r,o)=>{e=r,t=o})),n=r=>{e(r)};return n.resolve=r=>e(r),n.reject=e=>t(e),n.timeout=(e,t)=>r.clock.setTimeout((()=>n.reject(t)),e),n.promise=o,n}function M(e,r){return e.then(r,r)}function D(e,r){let t,o=new AbortController;const n=e(o.signal);let u={promise:n,finished:!1,abort:()=>{o&&(o.abort(),o=null)}};const s=()=>{u&&(u.finished=!0,u=null),i.isSome(t)&&(t.remove(),t=null),o=null};return n.then(s,s),t=w(r,(()=>{i.isSome(u)&&u.abort()})),u}function $(e){return Promise.resolve().then((()=>{f(e)}))}e.after=k,e.all=u,e.always=M,e.create=c,e.createAbortError=l,e.createDeferred=E,e.createResolver=L,e.createTask=D,e.debounce=I,e.eachAlways=T,e.eachAlwaysValues=y,e.filter=s,e.ignoreAbortErrors=P,e.isAbortError=A,e.isAborted=m,e.isPromiseLike=S,e.logOnError=g,e.onAbort=w,e.onAbortOrThrow=d,e.reject=j,e.resolve=N,e.throwIfAbortError=h,e.throwIfAborted=f,e.throwIfNotAbortError=b,e.timeout=O,e.waitTick=$,e.when=C,e.whenOrAbort=v,e.whenOrTimeout=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));