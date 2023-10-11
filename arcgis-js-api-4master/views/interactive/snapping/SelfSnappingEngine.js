/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./LineSnapper","./ParallelLineSnapper","./RightAngleSnapper","./RightAngleTriangleSnapper","./snappingUtils"],(function(e,n,t,i,r,p,s,o,a,c,l,u,g,S,h){"use strict";e.SelfSnappingEngine=function(e){function t(n){var t;return(t=e.call(this,n)||this).updating=!1,t._snappers=new r,t}n._inheritsLoose(t,e);var i=t.prototype;return i.initialize=function(){this._snappers.push(new u.ParallelLineSnapper(this.view,this.options),new l.LineSnapper(this.view,this.options),new g.RightAngleSnapper(this.view,this.options),new S.RightAngleTriangleSnapper(this.view,this.options))},i.fetchCandidates=function(){var e=n._asyncToGenerator((function*(e,n){if(!this.options.effectiveSelfEnabled)return[];const t=[];for(const i of this._snappers.items)t.push(...i.snap(e,n));return h.sortCandidatesInPlace(e,t),t}));function t(n,t){return e.apply(this,arguments)}return t}(),n._createClass(t,[{key:"options",set:function(e){this._set("options",e);for(const n of this._snappers)n.options=e}}]),t}(i),t.__decorate([p.property({readOnly:!0})],e.SelfSnappingEngine.prototype,"updating",void 0),t.__decorate([p.property({constructOnly:!0})],e.SelfSnappingEngine.prototype,"view",void 0),t.__decorate([p.property()],e.SelfSnappingEngine.prototype,"options",null),e.SelfSnappingEngine=t.__decorate([c.subclass("esri.views.interactive.snapping.SelfSnappingEngine")],e.SelfSnappingEngine),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));