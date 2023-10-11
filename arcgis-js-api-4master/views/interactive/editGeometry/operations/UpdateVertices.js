/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t,i){this.editGeometry=e,this.vertices=t,this.operation=i,this.undone=!1}var t=e.prototype;return t.apply=function(){this.vertices.forEach((e=>this.operation.apply(e))),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})},t.undo=function(){this.vertices.forEach((e=>this.operation.undo(e))),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0},t.canAccumulate=function(e){if(this.undone||e.vertices.length!==this.vertices.length)return!1;for(let t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)},t.accumulate=function(t){return!!(t instanceof e&&this.canAccumulate(t))&&(this.vertices.forEach((e=>this.operation.accumulate(e,t.operation))),this.operation.accumulateParams(t.operation),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)},e}();var i;e.AccumulationType=void 0,(i=e.AccumulationType||(e.AccumulationType={}))[i.CUMULATIVE=0]="CUMULATIVE",i[i.REPLACE=1]="REPLACE",e.UpdateVertices=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));