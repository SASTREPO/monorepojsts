/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/domUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass"],(function(e,t,o,r,n,s,c,i,d){"use strict";function p(e){return e&&"nodeType"in e}function u(e){return e&&"function"==typeof e.render}const l={component:"esri-component"};let a=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).widget=null,e}e._inheritsLoose(o,t);var n=o.prototype;return n.destroy=function(){this.widget&&this.widget.destroy(),this.node=null},n.castNode=function(e){return e?"string"==typeof e||p(e)?(this._set("widget",null),r.byId(e)):(u(e)&&!e.domNode&&(e.domNode=document.createElement("div")),this._set("widget",e),e.domNode):(this._set("widget",null),null)},e._createClass(o,[{key:"id",get:function(){return this.get("widget.id")||this.get("node.id")}},{key:"node",set:function(e){const t=this._get("node");e!==t&&(e&&e.classList.add(l.component),t&&t.classList.remove(l.component),this._set("node",e))}}]),o}(o);t.__decorate([n.property({dependsOn:[]})],a.prototype,"id",null),t.__decorate([n.property()],a.prototype,"node",null),t.__decorate([i.cast("node")],a.prototype,"castNode",null),t.__decorate([n.property({readOnly:!0})],a.prototype,"widget",void 0),a=t.__decorate([d.subclass("esri.views.ui.Component")],a);return a}));