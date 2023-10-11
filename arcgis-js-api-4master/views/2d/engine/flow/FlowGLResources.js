/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject","../../../webgl/VertexElementDescriptor"],(function(e,t,r,n,s){"use strict";const a=new Map;a.set("a_positionAndSide",0),a.set("a_timeInfo",1),a.set("a_extrude",2),a.set("a_speed",3);const i={geometry:[new s.VertexElementDescriptor("a_positionAndSide",3,r.DataType.FLOAT,0,36),new s.VertexElementDescriptor("a_timeInfo",3,r.DataType.FLOAT,12,36),new s.VertexElementDescriptor("a_extrude",2,r.DataType.FLOAT,24,36),new s.VertexElementDescriptor("a_speed",1,r.DataType.FLOAT,32,36)]};return function(){function s(e,t,r){this.values=r,this._vertexData=e,this._indexData=t}var o=s.prototype;return o.prepareForRendering=function(e){const s=t.BufferObject.createVertex(e,r.Usage.STATIC_DRAW,this._vertexData),o=t.BufferObject.createIndex(e,r.Usage.STATIC_DRAW,this._indexData),c={geometry:s},u=new n.VertexArrayObject(e,a,i,c,o);this.vertexBuffer=s,this.indexBuffer=o,this.vertexArray=u,this._vertexData=null,this._indexData=null},o.detach=function(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()},e._createClass(s,[{key:"locations",get:function(){return a}}]),s}()}));