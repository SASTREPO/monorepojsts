/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/promiseUtils","../../core/time","./BufferObject","./FramebufferObject","../../core/has","./checkWebGLError","./context-util","./enums","./ShaderTranspiler","./ProgramCache","./Texture","./VertexArrayObject","./ContextState","./InstanceCounter","./renderState","./Util","./WebGLDriverTest","./capabilities/Capabilities","./capabilities/isWebGL2Context"],(function(t,e,s,i,a,n,r,l,f,h,u,o,c,_,d,b,g,F,p,B,T,E){"use strict";let R=function(){function t(t,e){this.gl=t,this.instanceCounter=new g.InstanceCounter,this.programCache=new c.ProgramCache(this),this._state=new b.ContextState,this._numOfDrawCalls=0,this._numOfTriangles=0,this.type=E(t)?h.ContextType.WEBGL2:h.ContextType.WEBGL1,this._loadExtensions(),this.configure(e)}var n=t.prototype;return n.configure=function(t){this._capabilities=new T.Capabilities(this.gl,t),this._parameters=this._loadParameters(t);const e=this.gl.getParameter(this.gl.VIEWPORT);this._state=new b.ContextState,this._state.viewport={x:e[0],y:e[1],width:e[2],height:e[3]},this._stateTracker=new F.StateTracker({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const s=t.operation;this.setStencilOp(s.fail,s.zFail,s.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState(),this._driverTest=new B.WebGLDriverTest(this)},n.dispose=function(){this.programCache.dispose(),this.bindVAO(null),this.unbindBuffer(u.BufferType.ARRAY_BUFFER),this.unbindBuffer(u.BufferType.ELEMENT_ARRAY_BUFFER),E(this.gl)&&(this.unbindBuffer(u.BufferType.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(u.BufferType.PIXEL_PACK_BUFFER),this.unbindBuffer(u.BufferType.PIXEL_UNPACK_BUFFER),this.unbindBuffer(u.BufferType.COPY_READ_BUFFER),this.unbindBuffer(u.BufferType.COPY_WRITE_BUFFER)),this._state.textureUnitMap.length=0,f.webglDebugEnabled()&&this.instanceCounter.printResourceCount()},n.setPipelineState=function(t){this._stateTracker.setPipeline(t)},n.setBlendingEnabled=function(t){this._state.blend!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._state.blend=t,this._stateTracker.invalidateBlending())},n.externalProgramUpdate=function(){var t;null==(t=this._state.program)||t.stop(),this._state.program=null},n.externalTextureUnitUpdate=function(t,e){for(let s=0;s<t.length;++s)this._state.textureUnitMap[t[s]]=null;e>=0&&(this._state.activeTexture=e)},n.externalVertexArrayObjectUpdate=function(){const t=this.capabilities.vao;t&&(t.bindVertexArray(null),this._state.vertexArrayObject=null),this._state.vertexBuffer=null,this._state.indexBuffer=null},n.externalVertexBufferUpdate=function(){this._state.vertexBuffer=null},n.externalIndexBufferUpdate=function(){this._state.indexBuffer=null},n.setBlendColor=function(t,e,s,i){t===this._state.blendColor.r&&e===this._state.blendColor.g&&s===this._state.blendColor.b&&i===this._state.blendColor.a||(this.gl.blendColor(t,e,s,i),this._state.blendColor.r=t,this._state.blendColor.g=e,this._state.blendColor.b=s,this._state.blendColor.a=i,this._stateTracker.invalidateBlending())},n.setBlendFunction=function(t,e){t===this._state.blendFunction.srcRGB&&e===this._state.blendFunction.dstRGB||(this.gl.blendFunc(t,e),this._state.blendFunction.srcRGB=t,this._state.blendFunction.srcAlpha=t,this._state.blendFunction.dstRGB=e,this._state.blendFunction.dstAlpha=e,this._stateTracker.invalidateBlending())},n.setBlendFunctionSeparate=function(t,e,s,i){this._state.blendFunction.srcRGB===t&&this._state.blendFunction.srcAlpha===s&&this._state.blendFunction.dstRGB===e&&this._state.blendFunction.dstAlpha===i||(this.gl.blendFuncSeparate(t,e,s,i),this._state.blendFunction.srcRGB=t,this._state.blendFunction.srcAlpha=s,this._state.blendFunction.dstRGB=e,this._state.blendFunction.dstAlpha=i,this._stateTracker.invalidateBlending())},n.setBlendEquation=function(t){this._state.blendEquation.mode!==t&&(this.gl.blendEquation(t),this._state.blendEquation.mode=t,this._state.blendEquation.modeAlpha=t,this._stateTracker.invalidateBlending())},n.setBlendEquationSeparate=function(t,e){this._state.blendEquation.mode===t&&this._state.blendEquation.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._state.blendEquation.mode=t,this._state.blendEquation.modeAlpha=e,this._stateTracker.invalidateBlending())},n.setColorMask=function(t,e,s,i){this._state.colorMask.r===t&&this._state.colorMask.g===e&&this._state.colorMask.b===s&&this._state.colorMask.a===i||(this.gl.colorMask(t,e,s,i),this._state.colorMask.r=t,this._state.colorMask.g=e,this._state.colorMask.b=s,this._state.colorMask.a=i,this._stateTracker.invalidateColorWrite())},n.setClearColor=function(t,e,s,i){this._state.clearColor.r===t&&this._state.clearColor.g===e&&this._state.clearColor.b===s&&this._state.clearColor.a===i||(this.gl.clearColor(t,e,s,i),this._state.clearColor.r=t,this._state.clearColor.g=e,this._state.clearColor.b=s,this._state.clearColor.a=i)},n.setFaceCullingEnabled=function(t){this._state.faceCulling!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._state.faceCulling=t,this._stateTracker.invalidateCulling())},n.setPolygonOffsetFillEnabled=function(t){this._state.polygonOffsetFill!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._state.polygonOffsetFill=t,this._stateTracker.invalidatePolygonOffset())},n.setPolygonOffset=function(t,e){this._state.polygonOffset[0]===t&&this._state.polygonOffset[1]===e||(this._state.polygonOffset[0]=t,this._state.polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())},n.setCullFace=function(t){this._state.cullFace!==t&&(this.gl.cullFace(t),this._state.cullFace=t,this._stateTracker.invalidateCulling())},n.setFrontFace=function(t){this._state.frontFace!==t&&(this.gl.frontFace(t),this._state.frontFace=t,this._stateTracker.invalidateCulling())},n.setScissorTestEnabled=function(t){this._state.scissorTest!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._state.scissorTest=t)},n.setScissorRect=function(t,e,s,i){this._state.scissorRect.x===t&&this._state.scissorRect.y===e&&this._state.scissorRect.width===s&&this._state.scissorRect.height===i||(this.gl.scissor(t,e,s,i),this._state.scissorRect.x=t,this._state.scissorRect.y=e,this._state.scissorRect.width=s,this._state.scissorRect.height=i)},n.setDepthTestEnabled=function(t){this._state.depthTest!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._state.depthTest=t,this._stateTracker.invalidateDepthTest())},n.setClearDepth=function(t){this._state.clearDepth!==t&&(this.gl.clearDepth(t),this._state.clearDepth=t)},n.setDepthFunction=function(t){this._state.depthFunction!==t&&(this.gl.depthFunc(t),this._state.depthFunction=t,this._stateTracker.invalidateDepthTest())},n.setDepthWriteEnabled=function(t){this._state.depthWrite!==t&&(this.gl.depthMask(t),this._state.depthWrite=t,this._stateTracker.invalidateDepthWrite())},n.setDepthRange=function(t,e){this._state.depthRange.zNear===t&&this._state.depthRange.zFar===e||(this.gl.depthRange(t,e),this._state.depthRange.zNear=t,this._state.depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())},n.setStencilTestEnabled=function(t){this._state.stencilTest!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._state.stencilTest=t,this._stateTracker.invalidateStencilTest())},n.setClearStencil=function(t){t!==this._state.clearStencil&&(this.gl.clearStencil(t),this._state.clearStencil=t)},n.setStencilFunction=function(t,e,s){this._state.stencilFunction.func===t&&this._state.stencilFunction.ref===e&&this._state.stencilFunction.mask===s||(this.gl.stencilFunc(t,e,s),this._state.stencilFunction.face=u.Face.FRONT_AND_BACK,this._state.stencilFunction.func=t,this._state.stencilFunction.ref=e,this._state.stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())},n.setStencilFunctionSeparate=function(t,e,s,i){this._state.stencilFunction.face===t&&this._state.stencilFunction.func===e&&this._state.stencilFunction.ref===s&&this._state.stencilFunction.mask===i||(this.gl.stencilFuncSeparate(t,e,s,i),this._state.stencilFunction.face=t,this._state.stencilFunction.func=e,this._state.stencilFunction.ref=s,this._state.stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())},n.setStencilWriteMask=function(t){this._state.stencilWriteMask!==t&&(this.gl.stencilMask(t),this._state.stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())},n.setStencilOp=function(t,e,s){this._state.stencilOperation.face===u.Face.FRONT_AND_BACK&&this._state.stencilOperation.fail===t&&this._state.stencilOperation.zFail===e&&this._state.stencilOperation.zPass===s||(this.gl.stencilOp(t,e,s),this._state.stencilOperation.face=u.Face.FRONT_AND_BACK,this._state.stencilOperation.fail=t,this._state.stencilOperation.zFail=e,this._state.stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())},n.setStencilOpSeparate=function(t,e,s,i){this._state.stencilOperation.face===t&&this._state.stencilOperation.fail===e&&this._state.stencilOperation.zFail===s&&this._state.stencilOperation.zPass===i||(this.gl.stencilOpSeparate(t,e,s,i),this._state.stencilOperation.face=t,this._state.stencilOperation.fail=e,this._state.stencilOperation.zFail=s,this._state.stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())},n.setActiveTexture=function(t,e=!1){const s=this._state.activeTexture;return t>=0&&(e||t!==this._state.activeTexture)&&(this.gl.activeTexture(u.BASE_TEXTURE_UNIT+t),this._state.activeTexture=t),s},n.clear=function(t){t&&this.gl.clear(t)},n.clearSafe=function(t,e=255){t&&(t&u.ClearBufferBit.COLOR_BUFFER_BIT&&this.setColorMask(!0,!0,!0,!0),t&u.ClearBufferBit.DEPTH_BUFFER_BIT&&this.setDepthWriteEnabled(!0),t&u.ClearBufferBit.STENCIL_BUFFER_BIT&&this.setStencilWriteMask(e),this.gl.clear(t))},n.drawArrays=function(t,e,s){if(f.webglDebugEnabled()&&(this._numOfDrawCalls++,this._numOfTriangles+=A(t,s)),this.gl.drawArrays(t,e,s),f.webglDebugEnabled()){const t=p.getErrorString(this);t&&console.error("drawArrays:",t)}},n.drawElements=function(t,e,i,a){if(f.webglDebugEnabled()&&(this._numOfDrawCalls++,this._numOfTriangles+=A(t,e)),this.gl.drawElements(t,e,i,a),f.webglDebugEnabled()){const r=p.getErrorString(this);if(r){var n;const l=this.getBoundVAO(),f=null==l?void 0:l.indexBuffer,h={indexBuffer:f,vertexBuffers:null==l?void 0:l.vertexBuffers},u={mode:t,count:e,type:i,offset:a},o=null!=(n=s.applySome(f,(t=>t.size)))?n:0,c=a+e,_=o<c?`. Buffer is too small. Attempted to draw index ${c} of ${o}`:"";console.error(`drawElements: ${r}${_}`,{args:u,vao:h})}}},n.logIno=function(){f.webglDebugEnabled()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)},n.setViewport=function(t,e,s,i){s=Math.max(Math.round(s),1),i=Math.max(Math.round(i),1);const a=this._state.viewport;a.x===t&&a.y===e&&a.width===s&&a.height===i||(a.x=t,a.y=e,a.width=s,a.height=i,this.gl.viewport(t,e,s,i))},n.getViewport=function(){return{x:this._state.viewport.x,y:this._state.viewport.y,width:this._state.viewport.width,height:this._state.viewport.height}},n.useProgram=function(t){var e,s;this._state.program!==t&&(null==(e=this._state.program)||e.stop(),this._state.program=t,this.gl.useProgram(null!=(s=null==t?void 0:t.glName)?s:null))},n.bindTexture=function(t,e,i=!1){(e>=this.parameters.maxTextureImageUnits||e<0)&&console.error("Input texture unit is out of range of available units!");const a=this._state.textureUnitMap[e];return s.isNone(t)||null==t.glName?(s.isSome(a)&&(this.setActiveTexture(e,i),this.gl.bindTexture(a.descriptor.target,null)),this._state.textureUnitMap[e]=null,a):i||a!==t?(this.setActiveTexture(e,i),this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._state.textureUnitMap[e]=t,a):(t.isDirty&&(this.setActiveTexture(e,i),t.applyChanges()),a)},n.unbindTextureAllUnits=function(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._state.textureUnitMap[e]===t&&(this.bindTexture(null,e),this._state.textureUnitMap[e]=null)},n.bindFramebuffer=function(t,e=!1){if(e||this._state.readFramebuffer!==t||this._state.drawFramebuffer!==t){if(s.isNone(t))return this.gl.bindFramebuffer(u.FramebufferTarget.FRAMEBUFFER,null),this._state.readFramebuffer=null,void(this._state.drawFramebuffer=null);t.initializeAndBind(u.FramebufferTarget.FRAMEBUFFER),this._state.readFramebuffer=t,this._state.drawFramebuffer=t}},n.bindFramebufferSeparate=function(t,e,i=!1){const a=e===u.FramebufferTarget.READ_FRAMEBUFFER,n=a?this._state.readFramebuffer:this._state.drawFramebuffer;(i||n!==t)&&(s.isNone(t)?this.gl.bindFramebuffer(e,null):t.initializeAndBind(e),a?this._state.readFramebuffer=s.unwrapOr(t,null):this._state.drawFramebuffer=s.unwrapOr(t,null))},n.blitFramebuffer=function(t,e,s=0,i=0,a=t.width,n=t.height,r=0,l=0,f=e.width,h=e.height,o=u.ClearBufferBit.COLOR_BUFFER_BIT,c=u.TextureSamplingMode.NEAREST){this.bindFramebufferSeparate(t,u.FramebufferTarget.READ_FRAMEBUFFER),this.bindFramebufferSeparate(e,u.FramebufferTarget.DRAW_FRAMEBUFFER);this.gl.blitFramebuffer(s,i,a,n,r,l,f,h,o,c)},n.bindBuffer=function(t,e){if(t)switch(null!=e||(e=t.bufferType),e){case u.BufferType.ARRAY_BUFFER:this._state.vertexBuffer=m(this.gl,t,e,this._state.vertexBuffer);break;case u.BufferType.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=m(this.gl,t,e,this._state.indexBuffer);break;case u.BufferType.UNIFORM_BUFFER:this._state.uniformBuffer=m(this.gl,t,e,this._state.uniformBuffer);break;case u.BufferType.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=m(this.gl,t,e,this._state.pixelPackBuffer);break;case u.BufferType.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=m(this.gl,t,e,this._state.pixelUnpackBuffer);break;case u.BufferType.COPY_READ_BUFFER:this._state.copyReadBuffer=m(this.gl,t,e,this._state.copyReadBuffer);break;case u.BufferType.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=m(this.gl,t,e,this._state.copyWriteBuffer)}},n.bindRenderbuffer=function(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._state.renderbuffer=null),this._state.renderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._state.renderbuffer=t)},n._getBufferBinding=function(t,e){if(e>=this.parameters.maxUniformBufferBindings||e<0)return console.error("Uniform buffer binding point is out of range!"),null;const i=this._state.uniformBufferBindingPoints;let a=i[e];return s.isNone(a)&&(a={buffer:null,offset:0,size:0},i[e]=a),a},n.bindBufferBase=function(t,e,i){const a=this._getBufferBinding(t,e);if(s.isNone(a))return;if(a.buffer===i&&0===a.offset&&0===a.size)return;this.gl.bindBufferBase(t,e,i?i.glName:null),a.buffer=i,a.offset=0,a.size=0},n.bindBufferRange=function(t,e,i,a,n){const r=this._getBufferBinding(t,e);if(s.isNone(r))return;if(r.buffer===i&&r.offset===a&&r.size===n)return;if(a%this._parameters.uniformBufferOffsetAlignment!=0)return void console.error("Uniform buffer binding offset is not a multiple of the context offset alignment");this.gl.bindBufferRange(t,e,i.glName,a,n),r.buffer=i,r.offset=a,r.size=n},n.bindUBO=function(t,e,i,a){s.isNone(e)?this.bindBufferBase(u.BufferType.UNIFORM_BUFFER,t,null):(f.webglDebugEnabled()&&(null!=a?a:e.byteLength)>this._parameters.maxUniformBlockSize&&console.error("Attempting to bind more data than the maximum uniform block size"),e.initialize(),void 0!==i&&void 0!==a?this.bindBufferRange(u.BufferType.UNIFORM_BUFFER,t,e.buffer,i,a):this.bindBufferBase(u.BufferType.UNIFORM_BUFFER,t,e.buffer))},n.unbindUBO=function(t){for(let e=0,i=this._state.uniformBufferBindingPoints.length;e<i;e++){const i=this._state.uniformBufferBindingPoints[e];s.isSome(i)&&i.buffer===t.buffer&&this.bindBufferBase(u.BufferType.UNIFORM_BUFFER,e,null)}},n.unbindBuffer=function(t){switch(t){case u.BufferType.ARRAY_BUFFER:this._state.vertexBuffer=m(this.gl,null,t,this._state.vertexBuffer);break;case u.BufferType.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=m(this.gl,null,t,this._state.indexBuffer);break;case u.BufferType.UNIFORM_BUFFER:this._state.uniformBuffer=m(this.gl,null,t,this._state.uniformBuffer);break;case u.BufferType.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=m(this.gl,null,t,this._state.pixelPackBuffer);break;case u.BufferType.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=m(this.gl,null,t,this._state.pixelUnpackBuffer);break;case u.BufferType.COPY_READ_BUFFER:this._state.copyReadBuffer=m(this.gl,null,t,this._state.copyReadBuffer);break;case u.BufferType.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=m(this.gl,null,t,this._state.copyWriteBuffer)}},n.bindVAO=function(t=null){s.isNone(t)?this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null):this._state.vertexArrayObject!==t&&(t.bind(),this._state.vertexArrayObject=t)},n.clientWaitAsync=function(){var t=e._asyncToGenerator((function*(t=a.Milliseconds(10)){const e={};this.instanceCounter.increment(u.ResourceType.Sync,e);const s=this.gl,n=s.fenceSync(u.SyncCondition.SYNC_GPU_COMMANDS_COMPLETE,0);let r;s.flush();do{yield i.after(t),r=s.clientWaitSync(n,0,0)}while(r===u.ClientWaitSyncStatus.TIMEOUT_EXPIRED);if(s.deleteSync(n),this.instanceCounter.decrement(u.ResourceType.Sync,e),r===u.ClientWaitSyncStatus.WAIT_FAILED)throw new Error("Client wait failed")}));function s(){return t.apply(this,arguments)}return s}(),n.getBoundFramebufferObject=function(t=u.FramebufferTarget.FRAMEBUFFER){return t===u.FramebufferTarget.READ_FRAMEBUFFER?this._state.readFramebuffer:this._state.drawFramebuffer},n.getBoundVAO=function(){return this._state.vertexArrayObject},n.resetState=function(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null,!0),this.unbindBuffer(u.BufferType.ARRAY_BUFFER),this.unbindBuffer(u.BufferType.ELEMENT_ARRAY_BUFFER),E(this.gl)&&(this.unbindBuffer(u.BufferType.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(u.BufferType.PIXEL_PACK_BUFFER),this.unbindBuffer(u.BufferType.PIXEL_UNPACK_BUFFER),this.unbindBuffer(u.BufferType.COPY_READ_BUFFER),this.unbindBuffer(u.BufferType.COPY_WRITE_BUFFER));for(let t=0;t<this.parameters.maxTextureImageUnits;++t)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(u.BlendFactor.ONE,u.BlendFactor.ZERO),this.setBlendEquation(u.BlendOperation.ADD),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(u.Face.BACK),this.setFrontFace(u.CullMode.CCW),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(u.CompareFunction.LESS),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(u.CompareFunction.ALWAYS,0,0),this.setStencilOp(u.StencilOperation.KEEP,u.StencilOperation.KEEP,u.StencilOperation.KEEP),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)},n.enforceState=function(){var t,e;const i=this.gl,a=this.capabilities.vao;a&&a.bindVertexArray(null);for(let s=0;s<this.parameters.maxVertexAttributes;s++)i.disableVertexAttribArray(s);if(this._state.vertexBuffer?i.bindBuffer(this._state.vertexBuffer.bufferType,this._state.vertexBuffer.glName):i.bindBuffer(u.BufferType.ARRAY_BUFFER,null),this._state.indexBuffer?i.bindBuffer(this._state.indexBuffer.bufferType,this._state.indexBuffer.glName):i.bindBuffer(u.BufferType.ELEMENT_ARRAY_BUFFER,null),E(i)){var n,r;this._state.uniformBuffer?i.bindBuffer(this._state.uniformBuffer.bufferType,this._state.uniformBuffer.glName):i.bindBuffer(u.BufferType.UNIFORM_BUFFER,null);for(let t=0;t<this._parameters.maxUniformBufferBindings;t++){const e=this._state.uniformBufferBindingPoints[t];if(s.isSome(e)&&null!==e.buffer){const{buffer:s,offset:a,size:n}=e;0===a&&0===n?i.bindBufferBase(u.BufferType.UNIFORM_BUFFER,t,s.glName):i.bindBufferRange(u.BufferType.UNIFORM_BUFFER,t,s.glName,a,n)}else i.bindBufferBase(u.BufferType.UNIFORM_BUFFER,t,null)}this._state.pixelPackBuffer?i.bindBuffer(this._state.pixelPackBuffer.bufferType,this._state.pixelPackBuffer.glName):i.bindBuffer(u.BufferType.PIXEL_PACK_BUFFER,null),this._state.pixelUnpackBuffer?i.bindBuffer(this._state.pixelUnpackBuffer.bufferType,this._state.pixelUnpackBuffer.glName):i.bindBuffer(u.BufferType.PIXEL_UNPACK_BUFFER,null),this._state.copyReadBuffer?i.bindBuffer(this._state.copyReadBuffer.bufferType,this._state.copyReadBuffer.glName):i.bindBuffer(u.BufferType.COPY_READ_BUFFER,null),this._state.copyWriteBuffer?i.bindBuffer(this._state.copyWriteBuffer.bufferType,this._state.copyWriteBuffer.glName):i.bindBuffer(u.BufferType.COPY_WRITE_BUFFER,null),i.bindFramebuffer(u.FramebufferTarget.READ_FRAMEBUFFER,null),i.readBuffer(i.BACK),this._state.readFramebuffer&&(i.bindFramebuffer(u.FramebufferTarget.READ_FRAMEBUFFER,this._state.readFramebuffer.glName),i.readBuffer(u.ColorAttachment.COLOR_ATTACHMENT0)),i.bindFramebuffer(u.FramebufferTarget.DRAW_FRAMEBUFFER,null!=(n=null==(r=this._state.drawFramebuffer)?void 0:r.glName)?n:null)}else{var l,h;this._state.readFramebuffer=this._state.drawFramebuffer,i.bindFramebuffer(u.FramebufferTarget.FRAMEBUFFER,null!=(l=null==(h=this._state.drawFramebuffer)?void 0:h.glName)?l:null)}if(a&&this._state.vertexArrayObject){const t=this._state.vertexArrayObject;this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null),this.bindVAO(t)}i.useProgram(null!=(t=null==(e=this._state.program)?void 0:e.glName)?t:null),i.blendColor(this._state.blendColor.r,this._state.blendColor.g,this._state.blendColor.b,this._state.blendColor.a),i.bindRenderbuffer(i.RENDERBUFFER,this._state.renderbuffer?this._state.renderbuffer.glName:null),!0===this._state.blend?i.enable(this.gl.BLEND):i.disable(this.gl.BLEND),i.blendEquationSeparate(this._state.blendEquation.mode,this._state.blendEquation.modeAlpha),i.blendFuncSeparate(this._state.blendFunction.srcRGB,this._state.blendFunction.dstRGB,this._state.blendFunction.srcAlpha,this._state.blendFunction.dstAlpha),i.clearColor(this._state.clearColor.r,this._state.clearColor.g,this._state.clearColor.b,this._state.clearColor.a),i.clearDepth(this._state.clearDepth),i.clearStencil(this._state.clearStencil),i.colorMask(this._state.colorMask.r,this._state.colorMask.g,this._state.colorMask.b,this._state.colorMask.a),i.cullFace(this._state.cullFace),i.depthFunc(this._state.depthFunction),i.depthRange(this._state.depthRange.zNear,this._state.depthRange.zFar),!0===this._state.depthTest?i.enable(i.DEPTH_TEST):i.disable(i.DEPTH_TEST),i.depthMask(this._state.depthWrite),i.frontFace(this._state.frontFace),i.lineWidth(1),!0===this._state.faceCulling?i.enable(i.CULL_FACE):i.disable(i.CULL_FACE),i.polygonOffset(this._state.polygonOffset[0],this._state.polygonOffset[1]),!0===this._state.polygonOffsetFill?i.enable(i.POLYGON_OFFSET_FILL):i.disable(i.POLYGON_OFFSET_FILL),i.scissor(this._state.scissorRect.x,this._state.scissorRect.y,this._state.scissorRect.width,this._state.scissorRect.height),!0===this._state.scissorTest?i.enable(i.SCISSOR_TEST):i.disable(i.SCISSOR_TEST),i.stencilFunc(this._state.stencilFunction.func,this._state.stencilFunction.ref,this._state.stencilFunction.mask),i.stencilOpSeparate(this._state.stencilOperation.face,this._state.stencilOperation.fail,this._state.stencilOperation.zFail,this._state.stencilOperation.zPass),!0===this._state.stencilTest?i.enable(i.STENCIL_TEST):i.disable(i.STENCIL_TEST),i.stencilMask(this._state.stencilWriteMask);for(let f=0;f<this.parameters.maxTextureImageUnits;f++){i.activeTexture(u.BASE_TEXTURE_UNIT+f),i.bindTexture(u.TextureType.TEXTURE_2D,null),i.bindTexture(u.TextureType.TEXTURE_CUBE_MAP,null),E(i)&&(i.bindTexture(u.TextureType.TEXTURE_3D,null),i.bindTexture(u.TextureType.TEXTURE_2D_ARRAY,null));const t=this._state.textureUnitMap[f];s.isSome(t)&&i.bindTexture(t.descriptor.target,t.glName)}i.activeTexture(u.BASE_TEXTURE_UNIT+this._state.activeTexture),i.viewport(this._state.viewport.x,this._state.viewport.y,this._state.viewport.width,this._state.viewport.height),f.webglDebugEnabled()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)},n._loadExtensions=function(){this.type===h.ContextType.WEBGL1&&this.gl.getExtension("OES_element_index_uint"),this.gl.getExtension("KHR_parallel_shader_compile")},n._loadParameters=function(t){var e;const s=this.capabilities.textureFilterAnisotropic,i=null!=(e=t.maxAnisotropy)?e:1/0,a=E(this.gl),n=this.gl,r={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:s?Math.min(this.gl.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY),i):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),maxUniformBufferBindings:a?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0,maxVertexUniformBlocks:a?n.getParameter(n.MAX_VERTEX_UNIFORM_BLOCKS):0,maxFragmentUniformBlocks:a?n.getParameter(n.MAX_FRAGMENT_UNIFORM_BLOCKS):0,maxUniformBlockSize:a?n.getParameter(n.MAX_UNIFORM_BLOCK_SIZE):0,uniformBufferOffsetAlignment:a?n.getParameter(n.UNIFORM_BUFFER_OFFSET_ALIGNMENT):1,maxArrayTextureLayers:a?n.getParameter(n.MAX_ARRAY_TEXTURE_LAYERS):1,maxSamples:a?n.getParameter(n.MAX_SAMPLES):1};return _.Texture.TEXTURE_UNIT_FOR_UPDATES=r.maxTextureImageUnits-1,r},e._createClass(t,[{key:"driverTest",get:function(){return this._driverTest}},{key:"contextAttributes",get:function(){return this.gl.getContextAttributes()}},{key:"parameters",get:function(){return this._parameters}},{key:"capabilities",get:function(){return this._capabilities}}]),t}();function m(t,e,s,i){return e?i!==e&&t.bindBuffer(s,e.glName):t.bindBuffer(s,null),e}function A(t,e){switch(t){case u.PrimitiveType.POINTS:return 2*e;case u.PrimitiveType.TRIANGLES:return e/3;case u.PrimitiveType.TRIANGLE_STRIP:case u.PrimitiveType.TRIANGLE_FAN:return e-2;default:return 0}}t.RenderingContext=R,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));