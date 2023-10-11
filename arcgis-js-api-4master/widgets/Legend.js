/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Legend/LegendViewModel","./Legend/styles/Card","./Legend/styles/Classic","./support/widgetUtils","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory"],(function(e,t,r,s,i,o,n,a,d,l,c,p,y,h,v,u,g,f){"use strict";const _={base:"esri-legend",widget:"esri-widget",panel:"esri-widget--panel",widgetIcon:"esri-icon-layer-list"};let L=function(t){function i(e,s){var i;return(i=t.call(this,e,s)||this)._handles=new r,i.activeLayerInfos=null,i.basemapLegendVisible=!1,i.groundLegendVisible=!1,i.headingLevel=3,i.hideLayersNotInCurrentView=!1,i.keepCacheOnDestroy=!1,i.respectLayerVisibility=!0,i.iconClass=_.widgetIcon,i.label=void 0,i.layerInfos=null,i.messages=null,i.style=new h,i.view=null,i.viewModel=new p,i}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this.own(s.on(this,"view","resize",(()=>this.scheduleRender())),s.on(this,"activeLayerInfos","change",(()=>this._refreshActiveLayerInfos(this.activeLayerInfos))),s.watch(this,"headingLevel",(e=>{const{style:t}=this;t&&(t.headingLevel=e)})),s.init(this,"style",((e,t)=>{t&&e!==t&&t.destroy(),e&&(e.activeLayerInfos=this.activeLayerInfos,"card"===e.type&&(e.view=this.view),e.headingLevel=this.headingLevel)})))},o.destroy=function(){this._handles.destroy(),this._handles=null},o.castStyle=function(e){if(e instanceof y||e instanceof h)return e;if("string"==typeof e)return"card"===e?new y:new h;if(e&&"string"==typeof e.type){const t={...e};delete t.type;return new("card"===e.type?y:h)(t)}return new h},o.render=function(){return f.tsx("div",{class:this.classes(_.base,_.widget,this.style instanceof h?_.panel:null)},this.style.render())},o._refreshActiveLayerInfos=function(e){this._handles.removeAll(),e.forEach((e=>this._renderOnActiveLayerInfoChange(e))),this.scheduleRender()},o._renderOnActiveLayerInfoChange=function(e){const t=s.init(e,"version",(()=>this.scheduleRender()));this._handles.add(t,`version_${e.layer.uid}`);const r=s.on(e,"children","change",(()=>{e.children.forEach((e=>this._renderOnActiveLayerInfoChange(e)))}));this._handles.add(r,`children_${e.layer.uid}`),e.children.forEach((e=>this._renderOnActiveLayerInfoChange(e)))},i}(c);t.__decorate([i.aliasOf("viewModel.activeLayerInfos")],L.prototype,"activeLayerInfos",void 0),t.__decorate([i.aliasOf("viewModel.basemapLegendVisible")],L.prototype,"basemapLegendVisible",void 0),t.__decorate([i.aliasOf("viewModel.groundLegendVisible")],L.prototype,"groundLegendVisible",void 0),t.__decorate([d.property()],L.prototype,"headingLevel",void 0),t.__decorate([i.aliasOf("viewModel.hideLayersNotInCurrentView")],L.prototype,"hideLayersNotInCurrentView",void 0),t.__decorate([i.aliasOf("viewModel.keepCacheOnDestroy")],L.prototype,"keepCacheOnDestroy",void 0),t.__decorate([i.aliasOf("viewModel.respectLayerVisibility")],L.prototype,"respectLayerVisibility",void 0),t.__decorate([d.property()],L.prototype,"iconClass",void 0),t.__decorate([d.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],L.prototype,"label",void 0),t.__decorate([i.aliasOf("viewModel.layerInfos")],L.prototype,"layerInfos",void 0),t.__decorate([d.property(),u.messageBundle("esri/widgets/Legend/t9n/Legend")],L.prototype,"messages",void 0),t.__decorate([d.property()],L.prototype,"style",void 0),t.__decorate([a.cast("style")],L.prototype,"castStyle",null),t.__decorate([i.aliasOf("viewModel.view")],L.prototype,"view",void 0),t.__decorate([d.property()],L.prototype,"viewModel",void 0),L=t.__decorate([l.subclass("esri.widgets.Legend")],L);return L}));