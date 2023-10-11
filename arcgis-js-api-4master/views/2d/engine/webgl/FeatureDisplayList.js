/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","./cpuMapped/FreeList"],(function(e,t,i,n){"use strict";let a=function(){function e(e,t,i,n,a){this.target=e,this.geometryType=t,this.materialKey=i,this.indexFrom=n,this.indexCount=a}return e.prototype.extend=function(e){this.indexCount+=e},t._createClass(e,[{key:"indexEnd",get:function(){return this.indexFrom+this.indexCount}}]),e}(),o=function(){function e(e,t){this.geometryType=0,this._target=e,this.geometryType=t}e.from=function(t,n,a,o){const s=new e(t,n);if(i.isSome(o))for(const e of o)a.seekIndex(e),s.addRecord(a);else for(;a.next();)s.addRecord(a);return s};var t=e.prototype;return t.addRecord=function(e){const t=this._target,o=this.geometryType,s=e.materialKey;let d=e.indexFrom,r=e.indexCount;const h=e.vertexFrom,u=e.vertexCount;if(r||(d=h,r=u),i.isNone(this._head)){const e=new a(t,o,s,d,r);return void(this._head=new n.List(e))}let c=null,f=this._head;for(;f;){if(d<f.data.indexFrom)return this._insert(s,d,r,c,f);c=f,f=f.next}this._insert(s,d,r,c,null)},t.forEach=function(e){i.isSome(this._head)&&this._head.forEach(e)},t.infos=function*(){if(i.isSome(this._head))for(const e of this._head.values())yield e},t._insert=function(e,t,o,s,d){if(i.isNone(s)&&i.isNone(d)){const i=new a(this._target,this.geometryType,e,t,o);this._head=new n.List(i)}return i.isNone(s)&&i.isSome(d)?this._insertAtHead(e,t,o,d):i.isSome(s)&&i.isNone(d)?this._insertAtEnd(e,t,o,s):i.isSome(s)&&i.isSome(d)?this._insertAtMiddle(e,t,o,s,d):void 0},t._insertAtHead=function(e,t,i,o){const s=t+i;if(e===o.data.materialKey&&s===o.data.indexFrom)o.data.indexFrom=t,o.data.indexCount+=i;else{const s=new a(this._target,this.geometryType,e,t,i);this._head=new n.List(s),this._head.next=o}},t._insertAtEnd=function(e,t,i,o){if(o.data.materialKey===e&&o.data.indexEnd===t)o.data.indexCount+=i;else{const s=new a(this._target,this.geometryType,e,t,i),d=new n.List(s);o.next=d}},t._insertAtMiddle=function(e,t,i,o,s){const d=t+i;if(o.data.materialKey===e&&o.data.indexEnd===t)o.data.indexCount+=i,o.data.materialKey===s.data.materialKey&&o.data.indexEnd===s.data.indexFrom&&(o.data.indexCount+=s.data.indexCount,o.next=s.next);else if(e===s.data.materialKey&&d===s.data.indexFrom)s.data.indexFrom=t,s.data.indexCount+=i;else{const d=new a(this._target,this.geometryType,e,t,i),r=new n.List(d);o.next=r,r.next=s}},e}();e.FeatureDisplayList=o,e.FeatureDisplayListInfo=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));