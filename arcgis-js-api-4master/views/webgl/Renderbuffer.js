/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./context-util","./enums"],(function(e,t,n,r){"use strict";let i=function(){function e(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(r.ResourceType.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:s,height:o,internalFormat:u,multisampled:h}=t;if(h){if(this._context.type!==n.ContextType.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,u,s,o)}else i.renderbufferStorage(i.RENDERBUFFER,u,s,o)}var i=e.prototype;return i.resize=function(e,t){const n=this._desc;if(n.width===e&&n.height===t)return;n.width=e,n.height=t;const r=this._context.gl;if(this._context.bindRenderbuffer(this),n.multisampled){r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n.internalFormat,n.width,n.height)}else r.renderbufferStorage(r.RENDERBUFFER,n.internalFormat,n.width,n.height)},i.dispose=function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(r.ResourceType.Renderbuffer,this),this._context=null)},t._createClass(e,[{key:"descriptor",get:function(){return this._desc}},{key:"samples",get:function(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}}]),e}();e.Renderbuffer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));