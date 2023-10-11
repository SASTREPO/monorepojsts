/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/global/ZoomStepController","../../state/controllers/local/ZoomStepController","../../../input/InputHandler","../../../input/handlers/support"],(function(e,t,o,l,n,i,r){"use strict";let a=function(e){function i(t,o){var l;return(l=e.call(this,!0)||this).view=t,l.registerIncoming("double-click",o,(e=>l._handleDoubleClick(e))),l}return t._inheritsLoose(i,e),i.prototype._handleDoubleClick=function(e){const t=e.data;if(r.eventMatchesPointerAction(t,"primary")){const i=this.view.state.isGlobal?new l.ZoomStepController({view:this.view,mode:"animation"}):new n.ZoomStepController({view:this.view,mode:"animation"});this.view.state.switchCameraController(i),i.zoomStep(Math.log(.5)/Math.log(.6),o.createScreenPointArray(t.x,t.y)),e.stopPropagation()}},i}(i.InputHandler);e.DoubleClickZoom=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));