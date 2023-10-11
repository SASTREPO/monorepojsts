/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Collection","../../core/maybe"],(function(t,i,a,e){"use strict";var n;t.ManipulatorVisibilityPredicate=void 0,(n=t.ManipulatorVisibilityPredicate||(t.ManipulatorVisibilityPredicate={}))[n.WhenToolEditable=0]="WhenToolEditable",n[n.WhenToolNotEditable=1]="WhenToolNotEditable",n[n.Always=2]="Always";let o=function(){function n(){this._isToolEditable=!0,this._manipulators=new a,this._nextManipulatorId=0,this._resourceContexts={manipulator3D:{}},this._attached=!1}var o=n.prototype;return o.add=function(i,a=t.ManipulatorVisibilityPredicate.WhenToolEditable){return this.addMany([i],a)[0]},o.addMany=function(i,a=t.ManipulatorVisibilityPredicate.WhenToolEditable){return i.map((t=>{const i=this._nextManipulatorId++,e={id:i,manipulator:t,visibilityPredicate:a,attached:!1};return this._manipulators.add(e),this._attached&&this._updateManipulatorAttachment(e),i}))},o.remove=function(t){if("number"==typeof t){const i=t;for(let t=0;t<this._manipulators.length;t++)if(this._manipulators.getItemAt(t).id===i){const i=this._manipulators.splice(t,1)[0];return this._detachManipulator(i),i.id}return null}const i=t;for(let a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).manipulator===i){const t=this._manipulators.splice(a,1)[0];return this._detachManipulator(t),t.id}return null},o.removeAll=function(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._manipulators.removeAll()},o.attach=function(){this._manipulators.forEach((t=>{this._updateManipulatorAttachment(t)})),this._attached=!0},o.detach=function(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._attached=!1},o.destroy=function(){this._manipulators.forEach((({manipulator:t})=>{t.destroy&&t.destroy()})),this._manipulators.destroy(),this._resourceContexts=null},o.on=function(t,i){return this._manipulators.on(t,(t=>{i(t)}))},o.forEach=function(t){for(const i of this._manipulators.items)t(i)},o.some=function(t){return this._manipulators.items.some(t)},o.toArray=function(){const t=[];return this.forEach((i=>t.push(i.manipulator))),t},o.intersect=function(t,i){let a=null,n=Number.MAX_VALUE;return this._manipulators.forEach((({id:o,manipulator:r,attached:l})=>{if(!l||!r.interactive)return;const s=r.intersectionDistance(t,i);e.isSome(s)&&s<n&&(n=s,a={id:o,manipulator:r})})),a},o.findById=function(t){if(e.isNone(t))return null;for(const i of this._manipulators.items)if(t===i.id)return i.manipulator;return null},o._updateManipulatorAttachment=function(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)},o._attachManipulator=function(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)},o._detachManipulator=function(t){if(!t.attached)return;const i=t.manipulator;i.grabbing=!1,i.dragging=!1,i.hovering=!1,i.selected=!1,i.detach&&i.detach(this._resourceContexts),t.attached=!1},o._isManipulatorItemVisible=function(i){return i.visibilityPredicate===t.ManipulatorVisibilityPredicate.Always||(this._isToolEditable?i.visibilityPredicate===t.ManipulatorVisibilityPredicate.WhenToolEditable:i.visibilityPredicate===t.ManipulatorVisibilityPredicate.WhenToolNotEditable)},i._createClass(n,[{key:"isToolEditable",set:function(t){this._isToolEditable=t}},{key:"length",get:function(){return this._manipulators.length}}]),n}();t.ManipulatorCollection=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));