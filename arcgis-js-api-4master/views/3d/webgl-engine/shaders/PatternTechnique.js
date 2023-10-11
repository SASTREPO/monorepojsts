/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutputOptions","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../lib/VertexAttribute","../materials/PatternStyle","../../../../chunks/Pattern.glsl","../../../webgl/renderState"],(function(e,t,r,a,i,o,n,s,l,p,u,c,d,h,g,m,f,b,y,T){"use strict";let P=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var a=t.prototype;return a.initializeProgram=function(e){const r=t.shader.get(),a=this.configuration,i=r.build({output:a.output,attributeColor:a.vertexColors,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,style:a.style,patternSpacing:a.patternSpacing,lineWidth:a.lineWidth,draped:a.draped,oitEnabled:a.transparencyPassType===d.TransparencyPassType.Color,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new g.Program(e.rctx,i,_)},a.bindPass=function(e,t){l.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("uColor",e.color),this.configuration.draped?(this.program.setUniform1f("worldToScreenRatio",1/t.screenToPCSRatio),this.program.setUniform1f("texelSize",1/t.camera.pixelRatio)):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/t.camera.perScreenPixelRatio),this.configuration.output===i.ShaderOutput.Highlight&&n.bindOutputHighlight(this.program,t),(this.configuration.output===i.ShaderOutput.Depth||t.multipassTerrainEnabled)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),s.bindMultipassTerrainTexture(this.program,t))},a.bindDraw=function(e){l.bindView(this.program,e),l.bindCameraPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),o.bindSliceUniformsWithOrigin(this.program,this.configuration,e),this.program.rebindTextures()},a._setPipelineState=function(e,t){const r=this.configuration,a=e===d.TransparencyPassType.NONE,o=e===d.TransparencyPassType.FrontFace;return T.makePipelineState({blending:r.output===i.ShaderOutput.Color||r.output===i.ShaderOutput.Alpha?a?h.blendingDefault:h.oitBlending(e):null,culling:T.cullingParams(r.cullFace),depthTest:{func:h.oitDepthTest(e)},depthWrite:a?r.writeDepth&&T.defaultDepthWriteParams:h.oitDepthWrite(e),colorWrite:T.defaultColorWriteParams,stencilWrite:r.sceneHasOcludees?m.stencilWriteMaskOn:null,stencilTest:r.sceneHasOcludees?t?m.stencilToolMaskBaseParams:m.stencilBaseAllZerosParams:null,polygonOffset:a||o?r.polygonOffset&&O:h.getOITPolygonOffset(r.enableOffset)})},a.initializePipeline=function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)},a.getPipelineState=function(t,r){return r?this._occludeePipelineState:e.prototype.getPipelineState.call(this,t,r)},t}(u.ShaderTechnique);P.shader=new p.ReloadableShaderModule(y.PatternShader,(()=>new Promise(((t,r)=>e(["./Pattern.glsl"],t,r)))));const O={factor:1,units:1};let S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=i.ShaderOutput.Color,t.cullFace=d.CullFaceOptions.None,t.slicePlaneEnabled=!1,t.vertexColors=!1,t.polygonOffset=!1,t.writeDepth=!0,t.sceneHasOcludees=!1,t.enableOffset=!0,t.transparencyPassType=d.TransparencyPassType.NONE,t.multipassTerrainEnabled=!1,t.cullAboveGround=!1,t}return r._inheritsLoose(t,e),t}(c.ShaderTechniqueConfiguration);a.__decorate([c.parameter({count:i.ShaderOutput.COUNT})],S.prototype,"output",void 0),a.__decorate([c.parameter({count:d.CullFaceOptions.COUNT})],S.prototype,"cullFace",void 0),a.__decorate([c.parameter()],S.prototype,"slicePlaneEnabled",void 0),a.__decorate([c.parameter()],S.prototype,"vertexColors",void 0),a.__decorate([c.parameter()],S.prototype,"polygonOffset",void 0),a.__decorate([c.parameter()],S.prototype,"writeDepth",void 0),a.__decorate([c.parameter()],S.prototype,"sceneHasOcludees",void 0),a.__decorate([c.parameter({count:b.Style.COUNT})],S.prototype,"style",void 0),a.__decorate([c.parameter()],S.prototype,"patternSpacing",void 0),a.__decorate([c.parameter()],S.prototype,"lineWidth",void 0),a.__decorate([c.parameter()],S.prototype,"enableOffset",void 0),a.__decorate([c.parameter()],S.prototype,"draped",void 0),a.__decorate([c.parameter({count:d.TransparencyPassType.COUNT})],S.prototype,"transparencyPassType",void 0),a.__decorate([c.parameter()],S.prototype,"multipassTerrainEnabled",void 0),a.__decorate([c.parameter()],S.prototype,"cullAboveGround",void 0);const _=new Map([[f.VertexAttribute.POSITION,0],[f.VertexAttribute.COLOR,3],[f.VertexAttribute.UVMAPSPACE,4],[f.VertexAttribute.BOUNDINGRECT,5]]);t.PatternTechnique=P,t.PatternTechniqueConfiguration=S,t.patternVertexAttributeLocations=_,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));