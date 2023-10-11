/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./enums","./VTLMaterial","../../../../webgl/enums","../../../../webgl/VertexElementDescriptor"],(function(e,t,o,n,i,l){"use strict";let r=function(e){function o(t){return e.call(this,t)||this}t._inheritsLoose(o,e);var n=o.prototype;return n.geometryInfo=function(){return o.GEOMETRY_LAYOUT},n.opacityInfo=function(){return null},n.attributes=function(){return o.ATTRIBUTES},n.attributesInfo=function(){return o.ATTRIBUTES_INFO},o}(n.VTLMaterial);r.ATTRIBUTES=["fill-color","fill-opacity","fill-pattern"],r.GEOMETRY_LAYOUT=[new l.VertexElementDescriptor("a_pos",2,i.DataType.SHORT,0,4)],r.ATTRIBUTES_INFO={"fill-color":{name:"color",type:o.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:o.EncodingType.R8_UNSIGNED,precisionFactor:100},"fill-pattern":{name:"tlbr",type:o.EncodingType.R16G16B16A16_PATTERN,isOptional:!0}};let T=function(e){function o(t,o){var n;return(n=e.call(this,t)||this).usefillColor=o,n}t._inheritsLoose(o,e);var n=o.prototype;return n.geometryInfo=function(){return o.GEOMETRY_LAYOUT},n.opacityInfo=function(){return null},n.attributes=function(){return this.usefillColor?o.ATTRIBUTES_FILL:o.ATTRIBUTES_OUTLINE},n.attributesInfo=function(){return this.usefillColor?o.ATTRIBUTES_INFO_FILL:o.ATTRIBUTES_INFO_OUTLINE},o}(n.VTLMaterial);T.ATTRIBUTES_OUTLINE=["fill-outline-color","fill-opacity"],T.ATTRIBUTES_FILL=["fill-color","fill-opacity"],T.GEOMETRY_LAYOUT=[new l.VertexElementDescriptor("a_pos",2,i.DataType.SHORT,0,8),new l.VertexElementDescriptor("a_offset",2,i.DataType.BYTE,4,8),new l.VertexElementDescriptor("a_xnormal",2,i.DataType.BYTE,6,8)],T.ATTRIBUTES_INFO_OUTLINE={"fill-outline-color":{name:"color",type:o.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:o.EncodingType.R8_UNSIGNED,precisionFactor:100}},T.ATTRIBUTES_INFO_FILL={"fill-color":{name:"color",type:o.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:o.EncodingType.R8_UNSIGNED,precisionFactor:100}},e.VTLFillMaterial=r,e.VTLOutlineMaterial=T,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));