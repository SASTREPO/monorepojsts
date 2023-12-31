/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderLibrary/ShaderOutputOptions","../lib/basicInterfaces","../lib/GLMaterial","../lib/GLMaterials","../lib/Material","../lib/OrderIndependentTransparency","../lib/RenderSlot","./internal/DefaultBufferWriter","./internal/MaterialUtil","../shaders/ColorMaterialTechnique"],(function(e,t,r,i,n,a,s,u,o,l,h,c){"use strict";let p=function(e){function i(t){var r;return(r=e.call(this,t,d)||this).supportsEdges=!0,r.techniqueConfig=new c.ColorMaterialTechniqueConfiguration,r}t._inheritsLoose(i,e);var n=i.prototype;return n.getTechniqueConfig=function(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<u.OITPolygonOffsetLimit,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig},n.getPassParameters=function(){return this.parameters},n.intersect=function(e,t,r,i,n,a,s){h.intersectTriangleGeometry(e,t,i,n,a,void 0,s)},n.requiresSlot=function(e,t){if(e===o.RenderSlot.DRAPED_MATERIAL)return!0;if(a.outputFromPass(t)===r.ShaderOutput.Highlight)return e===o.RenderSlot.OPAQUE_MATERIAL;return e===(this.parameters.transparent?this.parameters.writeDepth?o.RenderSlot.TRANSPARENT_MATERIAL:o.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:o.RenderSlot.OPAQUE_MATERIAL)},n.createGLMaterial=function(e){return e.output===r.ShaderOutput.Color||e.output===r.ShaderOutput.Alpha||e.output===r.ShaderOutput.Highlight||e.output===r.ShaderOutput.Depth&&this.parameters.writeLinearDepth?new f(e):null},n.createBufferWriter=function(){return new l.DefaultBufferWriter(l.PositionColorLayout)},i}(s.Material),f=function(e){function i(){return e.apply(this,arguments)||this}t._inheritsLoose(i,e);var n=i.prototype;return n.updateParameters=function(e){return this.ensureTechnique(c.ColorMaterialTechnique,e)},n._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})},n.beginSlot=function(e){return this._output!==r.ShaderOutput.Color&&this._output!==r.ShaderOutput.Alpha||this._updateOccludeeState(e),this.updateParameters(e)},n.bind=function(e,t){t.bindPass(this._material.getPassParameters(),e)},i}(n);const d={color:[1,1,1,1],transparent:!1,writeDepth:!0,writeLinearDepth:!1,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:i.CullFaceOptions.None,sceneHasOcludees:!1,...s.DefaultMaterialParameters};e.ColorMaterial=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
