/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/buffer/BufferView","../../support/buffer/InterleavedLayout","../core/shaderLibrary/ShaderOutputOptions","../lib/basicInterfaces","../lib/GLMaterial","../lib/GLMaterials","../lib/Material","../lib/RenderSlot","../lib/Util","../lib/VertexAttribute","./internal/bufferWriterUtils","./internal/MaterialUtil","../shaders/ShadedColorMaterialTechnique"],(function(e,t,r,i,n,a,s,u,o,l,c,h,d,f,p,b,S,A){"use strict";let g=function(e){function i(t){var r;return(r=e.call(this,t,T)||this).supportsEdges=!0,r.techniqueConfig=new A.ShadedColorMaterialTechniqueConfiguration,r._vertexAttributeLocations=A.ShadedColorMaterialVertexAttrLocations,r}t._inheritsLoose(i,e);var a=i.prototype;return a.getTechniqueConfig=function(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.screenSizeEnabled=this.parameters.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.parameters.shadingEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig},a.getPassParameters=function(){return this.parameters},a.intersect=function(e,t,i,a,s,u,o){if(this.parameters.screenSizeEnabled){const i=e.vertexAttributes.get(p.VertexAttribute.OFFSET),l={applyToVertex:(e,t,n,s)=>{const u=r.set(P,i.data[3*s+0],i.data[3*s+1],i.data[3*s+2]),o=r.set(v,e,t,n);return r.scale(u,u,this.parameters.screenSize*a.camera.computeRenderPixelSizeAt(u)),r.add(o,o,u),[o[0],o[1],o[2]]},applyToAabb:e=>{const t=n.center(e,P);return n.scale(e,this.parameters.screenSize*a.camera.computeRenderPixelSizeAt(t))}};S.intersectTriangleGeometry(e,t,a,s,u,l,o)}else S.intersectTriangleGeometry(e,t,a,s,u,void 0,o)},a.requiresSlot=function(e,t){if(c.outputFromPass(t)===u.ShaderOutput.Highlight)return e===d.RenderSlot.OPAQUE_MATERIAL;let r=d.RenderSlot.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?d.RenderSlot.TRANSPARENT_MATERIAL:d.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r||e===d.RenderSlot.DRAPED_MATERIAL},a.createGLMaterial=function(e){return e.output===u.ShaderOutput.Color||e.output===u.ShaderOutput.Alpha||e.output===u.ShaderOutput.Highlight?new E(e):null},a.createBufferWriter=function(){return new m(this.parameters.screenSizeEnabled)},i}(h.Material),E=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var i=r.prototype;return i.updateParameters=function(e){return this.ensureTechnique(A.ShadedColorMaterialTechnique,e)},i.beginSlot=function(e){return this.updateParameters(e)},i.bind=function(e,t){t.bindPass(this._material.getPassParameters(),e)},r}(l);const T={color:[1,1,1,1],shadingTint:[0,0,0,.25],shadingDirection:r.normalize(i.create(),[.5,-.5,-.5]),transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:o.CullFaceOptions.None,screenSizeEnabled:!1,screenSize:14,shadingEnabled:!0,...h.DefaultMaterialParameters};let m=function(){function e(e){this.screenSizeEnabled=e;const t=s.newLayout().vec3f(p.VertexAttribute.POSITION).vec3f(p.VertexAttribute.NORMAL);this.screenSizeEnabled&&t.vec3f(p.VertexAttribute.OFFSET),this.vertexBufferLayout=t}var t=e.prototype;return t.allocate=function(e){return this.vertexBufferLayout.createBuffer(e)},t.elementCount=function(e){return e.indices.get(p.VertexAttribute.POSITION).length},t.write=function(e,t,r,i){if(b.writeDefaultAttributes(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i),this.screenSizeEnabled){if(!t.vertexAttributes.has(p.VertexAttribute.OFFSET))throw new Error(`${p.VertexAttribute.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const n=t.vertexAttributes.get(p.VertexAttribute.OFFSET),s=t.indices.get(p.VertexAttribute.OFFSET);f.assert(3===n.size);const u=r.getField(p.VertexAttribute.OFFSET,a.BufferViewVec3f);if(!u)throw new Error("unable to acquire view for "+p.VertexAttribute.OFFSET);b.writePosition(s,n.data,e.invTranspTransformation,u,i)}}},e}();const P=i.create(),v=i.create();e.ShadedColorMaterial=g,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));