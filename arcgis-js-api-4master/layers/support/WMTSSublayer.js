/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","./TileMatrixSet","./WMTSStyle"],(function(t,e,r,o,i,s,l,n,a,p,u,y,c){"use strict";var d;let h=d=function(e){function r(t){var r;return(r=e.call(this,t)||this).fullExtent=null,r.fullExtents=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}t._inheritsLoose(r,e);var o=r.prototype;return o.readFullExtent=function(t,e){return(t=e.fullExtent)?u.fromJSON(t):null},o.readFullExtents=function(t,e){var r;return null!=(r=e.fullExtents)&&r.length?e.fullExtents.map((t=>u.fromJSON(t))):e.tileMatrixSets.map((t=>u.fromJSON(t.fullExtent))).filter((t=>t))},o.clone=function(){const t=new d;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t},t._createClass(r,[{key:"description",get:function(){return this._get("description")},set:function(t){this._set("description",t)}},{key:"imageFormat",get:function(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t},set:function(t){const e=this.imageFormats;t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t)}},{key:"styleId",get:function(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t},set:function(t){this._set("styleId",t)}},{key:"title",get:function(){return this._get("title")},set:function(t){this._set("title",t)}},{key:"tileMatrixSet",get:function(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}}]),r}(o.JSONSupport);e.__decorate([i.property()],h.prototype,"description",null),e.__decorate([i.property()],h.prototype,"fullExtent",void 0),e.__decorate([a.reader("fullExtent",["fullExtent"])],h.prototype,"readFullExtent",null),e.__decorate([i.property({readOnly:!0})],h.prototype,"fullExtents",void 0),e.__decorate([a.reader("fullExtents",["fullExtents","tileMatrixSets"])],h.prototype,"readFullExtents",null),e.__decorate([i.property()],h.prototype,"imageFormat",null),e.__decorate([i.property({json:{read:{source:"formats"}}})],h.prototype,"imageFormats",void 0),e.__decorate([i.property()],h.prototype,"id",void 0),e.__decorate([i.property()],h.prototype,"layer",void 0),e.__decorate([i.property()],h.prototype,"styleId",null),e.__decorate([i.property({type:r.ofType(c),json:{read:{source:"styles"}}})],h.prototype,"styles",void 0),e.__decorate([i.property({value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),e.__decorate([i.property()],h.prototype,"tileMatrixSetId",void 0),e.__decorate([i.property({readOnly:!0})],h.prototype,"tileMatrixSet",null),e.__decorate([i.property({type:r.ofType(y),json:{read:{source:"tileMatrixSets"}}})],h.prototype,"tileMatrixSets",void 0),h=d=e.__decorate([p.subclass("esri.layers.support.WMTSSublayer")],h);return h}));