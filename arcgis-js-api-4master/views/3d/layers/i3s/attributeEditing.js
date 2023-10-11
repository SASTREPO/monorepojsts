/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/lang","../../../../core/maybe","../support/attributeUtils"],(function(t,e,n,r){"use strict";const o={setAttribute(){},rollback(){},commit(){}};var s;function i(t,r){const i=r.attributes[t.objectIdField],a=t.sessions.get(i);if(a)return a;const u=e.clone(r.attributes),c=new Set;if(null==i)return o;const f=t.attributeOverrides.createInteractiveEditSession(i),l=new Map,d=(t,e)=>{const n=l.get(t);if(null==n){const n=e.indexOf(i);return l.set(t,n),n}return n};let b=s.EDITING;const I={setAttribute(e,o){if(b!==s.EDITING)return;const i=t.fieldsIndex.get(e);if(n.isNone(i))return;const a=t.attributeStorageInfo.findIndex((t=>t.name===i.name));if(a<0)return;f.set(a,o);const u=t.attributeStorageInfo[a];let l=!1;c.add(e),t.forEachNode(((e,n)=>{const s=d(e,n);if(-1===s)return;const i=t.getAttributeData(e.index);if(i){const n=i[u.name];n&&(n[s]=o,t.setAttributeData(e.index,i,r),l=!0)}})),l&&t.clearMemCache()},rollback(){if(b===s.EDITING){for(const t of c)this.setAttribute(t,u[t]);f.rollback(),b=s.ROLLED_BACK,t.sessions.delete(i)}},commit(){b===s.EDITING&&(f.commit(),b=s.COMMITTED,t.sessions.delete(i))}};return t.sessions.set(i,I),I}function a(t,e){const r=u(t,e);if(0===r.size)return;const o=new Map;for(let n=0;n<t.attributeStorageInfo.length;n++)o.set(t.attributeStorageInfo[n].name,n);let s=!1;r.forEach(((e,r)=>{const i=t.getAttributeData(r);let a=!1;e.forEach(((e,r)=>{const u=n.isSome(i)?i[r]:null,c=o.get(r);for(const{featureIndex:n,value:o,featureId:i}of e)u&&(u[n]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o)})),a&&t.setAttributeData(r,i,null)})),s&&t.clearMemCache()}function u(t,e){const n=e.edits.updateFeatures;if(!n||0===n.length)return new b;const o=l(e),s=new b,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,u=t.objectIdField,f=n.filter((t=>{const e=r.attributeLookup(a,t.attributes,u);return o.has(e)}));return t.forEachNode(((e,n)=>{const o=new Set(n);for(const i of f){const f=r.attributeLookup(a,i.attributes,u);if(!o.has(f))continue;const l=n.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=c(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a})}}})),s}function c(t,e,n){const r=f(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function f(t,e){const n=t.get(e);if(n)return n;const r=new d;return t.set(e,r),r}function l(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}!function(t){t[t.EDITING=0]="EDITING",t[t.ROLLED_BACK=1]="ROLLED_BACK",t[t.COMMITTED=2]="COMMITTED"}(s||(s={}));const d=Map,b=Map;t.createInteractiveEditSession=i,t.processAttributeEdits=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));