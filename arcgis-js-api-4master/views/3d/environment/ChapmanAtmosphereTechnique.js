/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../chunks/ChapmanAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,n,r,t,a,i,o,l,u,h,s,c){"use strict";let d=function(e){function n(){return e.apply(this,arguments)||this}r._inheritsLoose(n,e);var t=n.prototype;return t.initializeProgram=function(e){const r=n.shader.get(),t=this.configuration,a=r.build({haze:t.haze});return new h.Program(e.rctx,a,u.Default3D)},t.initializePipeline=function(){return this.configuration.haze?c.makePipelineState({blending:c.separateBlendingParams(s.BlendFactor.ONE,s.BlendFactor.ZERO,s.BlendFactor.ONE_MINUS_SRC_COLOR,s.BlendFactor.ONE),colorWrite:c.defaultColorWriteParams}):c.makePipelineState({blending:c.separateBlendingParams(s.BlendFactor.SRC_ALPHA,s.BlendFactor.ONE,s.BlendFactor.ONE_MINUS_SRC_ALPHA,s.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:s.CompareFunction.LEQUAL},colorWrite:c.defaultColorWriteParams})},n}(o.ShaderTechnique);d.shader=new i.ReloadableShaderModule(a.ChapmanAtmosphereShader,(()=>new Promise(((n,r)=>e(["./ChapmanAtmosphere.glsl"],n,r)))));let g=function(e){function n(){var n;return(n=e.apply(this,arguments)||this).haze=!1,n}return r._inheritsLoose(n,e),n}(l.ShaderTechniqueConfiguration);t.__decorate([l.parameter()],g.prototype,"haze",void 0),n.ChapmanAtmosphereTechnique=d,n.ChapmanAtmosphereTechniqueConfiguration=g,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));