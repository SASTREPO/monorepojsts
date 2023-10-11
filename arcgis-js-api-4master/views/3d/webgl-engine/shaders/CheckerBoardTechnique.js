/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/DefaultVertexAttributeLocations","../lib/OrderIndependentTransparency","../lib/Program","../../../../chunks/CheckerBoard.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,r,t,a,n,i,o,s,l,p,c,u,d,h,f,T){"use strict";let m=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var a=r.prototype;return a.initializeProgram=function(e){const t=r.shader.get(),a=this.configuration,n=t.build({oitEnabled:a.transparencyPassType===p.TransparencyPassType.Color,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new d.Program(e.rctx,n,c.Default3D)},a.bindPass=function(e,r){i.bindProjectionMatrix(this.program,r.camera.projectionMatrix),this.program.setUniform2fv("size",e.size),this.program.setUniform4fv("color1",e.color1),this.program.setUniform4fv("color2",e.color2),r.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),n.bindMultipassTerrainTexture(this.program,r))},a.bindDraw=function(e){i.bindView(this.program,e)},a._setPipelineState=function(e){const r=this.configuration,t=e===p.TransparencyPassType.NONE,a=e===p.TransparencyPassType.FrontFace;return T.makePipelineState({blending:r.transparent?t?y:u.oitBlending(e):null,depthTest:{func:u.oitDepthTest(e)},depthWrite:t?r.writeDepth&&T.defaultDepthWriteParams:u.oitDepthWrite(e),colorWrite:T.defaultColorWriteParams,polygonOffset:t||a?r.polygonOffset&&g:{factor:-1,units:-25}})},a.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)},r}(s.ShaderTechnique);m.shader=new o.ReloadableShaderModule(h.CheckerBoardShader,(()=>new Promise(((r,t)=>e(["./CheckerBoard.glsl"],r,t)))));const g={factor:0,units:-25},y=T.separateBlendingParams(f.BlendFactor.SRC_ALPHA,f.BlendFactor.ONE,f.BlendFactor.ONE_MINUS_SRC_ALPHA,f.BlendFactor.ONE_MINUS_SRC_ALPHA);let b=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).transparent=!1,r.writeDepth=!0,r.polygonOffset=!1,r.transparencyPassType=p.TransparencyPassType.NONE,r.multipassTerrainEnabled=!1,r.cullAboveGround=!1,r}return t._inheritsLoose(r,e),r}(l.ShaderTechniqueConfiguration);a.__decorate([l.parameter()],b.prototype,"transparent",void 0),a.__decorate([l.parameter()],b.prototype,"writeDepth",void 0),a.__decorate([l.parameter()],b.prototype,"polygonOffset",void 0),a.__decorate([l.parameter({count:p.TransparencyPassType.COUNT})],b.prototype,"transparencyPassType",void 0),a.__decorate([l.parameter()],b.prototype,"multipassTerrainEnabled",void 0),a.__decorate([l.parameter()],b.prototype,"cullAboveGround",void 0),r.CheckerBoardTechnique=m,r.CheckerBoardTechniqueConfiguration=b,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));