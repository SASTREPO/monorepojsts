/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./maybe","./PooledArray"],(function(t,e,i,s){"use strict";const n=-3;var o;t.RemoveMode=void 0,(o=t.RemoveMode||(t.RemoveMode={}))[o.ALL=0]="ALL",o[o.SOME=1]="SOME";let r=function(){function t(t,e,i){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}var i=t.prototype;return i.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null},i.resetHitRate=function(){this._hit=this._miss=0},i.put=function(t,e,i,s=0){this._storage.put(this._namespace+t,e,i,s)},i.get=function(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},i.pop=function(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},i.updateSize=function(t,e,i){this._storage.updateSize(this._namespace+t,e,i)},i.clear=function(){this._storage.clear(this._namespace)},i.clearAll=function(){this._storage.clearAll()},i.getStats=function(){return this._storage.getStats()},i.resetStats=function(){this._storage.resetStats()},e._createClass(t,[{key:"namespace",get:function(){return this._namespace.slice(0,-1)}},{key:"hitRate",get:function(){return this._hit/(this._hit+this._miss)}},{key:"size",get:function(){return this._storage.size}},{key:"maxSize",get:function(){return this._storage.maxSize}}]),t}(),h=function(){function o(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new s,this._users=new s}var r=o.prototype;return r.destroy=function(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null},r.register=function(t){this._users.push(t)},r.deregister=function(t){this._users.removeUnordered(t)},r.registerRemoveFunc=function(t,e){this._removeFuncs.push([t,e])},r.deregisterRemoveFunc=function(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))},r.put=function(e,i,s,o){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==i&&this._notifyRemove(e,r.entry,t.RemoveMode.ALL)),s>this._maxSize)return void this._notifyRemove(e,i,t.RemoveMode.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const h=1+Math.max(o,n)-n;this._db.set(e,{entry:i,size:s,lifetime:h,lives:h}),this._size+=s,this._checkSizeLimit()},r.updateSize=function(e,s,n){const o=this._db.get(e);if(o&&o.entry===s){for(this._size-=o.size;n>this._maxSize;){const o=this._notifyRemove(e,s,t.RemoveMode.SOME);if(!(i.isSome(o)&&o>0))return void this._db.delete(e);n=o}o.size=n,this._size+=n,this._checkSizeLimit()}},r.pop=function(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss},r.get=function(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss},r.getStats=function(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},i=new Array;this._db.forEach(((t,s)=>{const n=t.lifetime;i[n]=(i[n]||0)+t.size,this._users.forAll((i=>{const n=i.namespace;if(s.startsWith(n)){const i=e[n]||0;e[n]=i+t.size}}))}));const s={};this._users.forAll((t=>{const i=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const n=e[i]||0;e[i]=n,s[i]=Math.round(100*t.hitRate)+"%"}else s[i]="0%"}));const o=Object.keys(e);o.sort(((t,i)=>e[i]-e[t])),o.forEach((i=>t[i]=Math.round(e[i]/2**20)+"MB / "+s[i]));for(let r=i.length-1;r>=0;--r){const e=i[r];e&&(t["Priority "+(r+n-1)]=Math.round(e/this.size*100)+"%")}return t},r.resetStats=function(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))},r.clear=function(e){this._db.forEach(((i,s)=>{s.startsWith(e)&&(this._size-=i.size,this._db.delete(s),this._notifyRemove(s,i.entry,t.RemoveMode.ALL))}))},r.clearAll=function(){this._db.forEach(((e,i)=>this._notifyRemove(i,e.entry,t.RemoveMode.ALL))),this._size=0,this._db.clear()},r._getHitRate=function(){return this._hit/(this._hit+this._miss)},r._notifyRemove=function(t,e,i){let s;return this._removeFuncs.some((n=>{if(t.startsWith(n[0])){const t=n[1](e,i);return"number"==typeof t&&(s=t),!0}return!1})),s},r._checkSizeLimit=function(){if(!(this._size<=this._maxSize))for(const[e,s]of this._db){if(this._db.delete(e),s.lives<=1){this._size-=s.size;const n=this._notifyRemove(e,s.entry,t.RemoveMode.SOME);i.isSome(n)&&n>0&&(this._size+=n,s.lives=s.lifetime,s.size=n,this._db.set(e,s))}else--s.lives,this._db.set(e,s);if(this._size<=.9*this.maxSize)return}},e._createClass(o,[{key:"size",get:function(){return this._size}},{key:"maxSize",get:function(){return this._maxSize},set:function(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}}]),o}();t.MIN_PRIORITY=n,t.MemCache=r,t.MemCacheStorage=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));