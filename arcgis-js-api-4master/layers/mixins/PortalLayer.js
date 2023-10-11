/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../kernel","../../request","../../core/asyncUtils","../../core/Error","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../portal/Portal","../../portal/PortalItem","../../portal/PortalUser"],(function(e,t,r,o,s,i,a,l,n,u,c,p,d,h,y,m,f,g,I,v,_,P){"use strict";const w=n.getLogger("esri.layers.mixins.PortalLayer"),b=t=>{let n=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).resourceReferences={portalItem:null,paths:[]},e.userHasEditingPrivileges=!0,e}r._inheritsLoose(o,t);var n=o.prototype;return n.destroy=function(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null},n.readPortalItem=function(e,t,r){if(t.itemId)return new _({id:t.itemId,portal:r&&r.portal})},n.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},n.loadFromPortal=function(){var t=r._asyncToGenerator((function*(t,r){if(this.portalItem&&this.portalItem.id)try{const o=yield new Promise(((t,r)=>e(["../../portal/support/layersLoader"],t,r)));return c.throwIfAborted(r),yield o.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},r)}catch(o){throw c.isAbortError(o)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${o}`),o}}));function o(e,r){return t.apply(this,arguments)}return o}(),n.finishLoadEditablePortalLayer=function(){var e=r._asyncToGenerator((function*(e){this._set("userHasEditingPrivileges",yield this._fetchUserHasEditingPrivileges(e).catch((e=>(c.throwIfAbortError(e),!0))))}));function t(t){return e.apply(this,arguments)}return t}(),n._fetchUserHasEditingPrivileges=function(){var e=r._asyncToGenerator((function*(e){const t=this.url?null==s.id?void 0:s.id.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:yield this._fetchEditingUser(e);return S.credential=t,S.user=r,u.isNone(r)||null==r.privileges||r.privileges.includes("features:user:edit")}));function t(t){return e.apply(this,arguments)}return t}(),n._fetchEditingUser=function(){var e=r._asyncToGenerator((function*(e){var t,r;const o=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user;if(o)return o;const l=s.id.findServerInfo(this.url);if(null==l||!l.owningSystemUrl)return null;const n=`${l.owningSystemUrl}/sharing/rest`,c=v.getDefault();if(c&&c.loaded&&p.normalize(c.restUrl)===p.normalize(n))return c.user;const d=`${n}/community/self`,h=u.isSome(e)?e.signal:null,y=yield a.result(i(d,{authMode:"no-prompt",query:{f:"json"},signal:h}));return y.ok?P.fromJSON(y.value.data):null}));function t(t){return e.apply(this,arguments)}return t}(),n.read=function(e,r){r&&(r.layer=this),t.prototype.read.call(this,e,r)},n.write=function(e,r){const o=r&&r.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||v.getDefault());return o&&s&&!p.hasSamePortal(s.restUrl,o.restUrl)?(r.messages&&r.messages.push(new l("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):t.prototype.write.call(this,e,{...r,layer:this})},r._createClass(o,[{key:"portalItem",set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}}]),o}(t);return o.__decorate([d.property({type:_})],n.prototype,"portalItem",null),o.__decorate([f.reader("web-document","portalItem",["itemId"])],n.prototype,"readPortalItem",null),o.__decorate([I.writer("web-document","portalItem",{itemId:{type:String}})],n.prototype,"writePortalItem",null),o.__decorate([d.property({clonable:!1})],n.prototype,"resourceReferences",void 0),o.__decorate([d.property({readOnly:!0})],n.prototype,"userHasEditingPrivileges",void 0),n=o.__decorate([g.subclass("esri.layers.mixins.PortalLayer")],n),n},S={credential:null,user:null};t.PortalLayer=b,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));