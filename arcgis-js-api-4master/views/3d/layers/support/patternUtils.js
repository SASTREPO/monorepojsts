/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/maybe","../../../../chunks/vec4f64","../../../../geometry/support/buffer/BufferView","../graphics/ElevationAligners","./uvUtils","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/ColorMaterial","../../webgl-engine/materials/PatternMaterial","../../webgl-engine/materials/PatternStyle"],(function(e,t,r,a,n,i,o,l,s,u,c){"use strict";function f(e,t,r){return g(d(e),t,r)}function d(e){return e&&e.pattern||null}function g(e,t,n){return r.isSome(e)?"none"===e.style||"solid"===e.style?("none"===e.style&&(t.color=a.fromValues(0,0,0,0),t.transparent=!0),new s.ColorMaterial(t)):(t.style=y(e.style),t.draped=n.isDraped,new u.PatternMaterial(t)):new s.ColorMaterial(t)}function y(e){switch(e){case"horizontal":return c.Style.Horizontal;case"vertical":return c.Style.Vertical;case"cross":return c.Style.Cross;case"forward-diagonal":return c.Style.ForwardDiagonal;case"backward-diagonal":return c.Style.BackwardDiagonal;case"diagonal-cross":return c.Style.DiagonalCross;default:return}}function p(e){return e.material instanceof u.PatternMaterial&&!e.material.parameters.draped}function m(e,t){if(p(e)){const r=e.geometry.vertexAttributes,a=r.get(l.VertexAttribute.POSITION).data,i=r.get(l.VertexAttribute.UVMAPSPACE).data,s=r.get(l.VertexAttribute.BOUNDINGRECT).data;o.createMapSpaceUVCoords(n.BufferViewVec4f.fromTypedArray(i),n.BufferViewVec3f64.fromTypedArray(a),t,n.BufferViewMat3f64.fromTypedArray(s))}}function V(e,t,r,a){const n=i.perVertexElevationAligner(e,t,r,a),o=e.stageObject.geometryRecords;for(let i=0;i<o.length;i++)m(o[i],a);return n}e.createMaterial=f,e.createMaterialFromPattern=g,e.parsePatternStyle=y,e.requiresUVUpdates=p,e.updateMapSpaceUVCoords=m,e.uvElevationAligner=V,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));