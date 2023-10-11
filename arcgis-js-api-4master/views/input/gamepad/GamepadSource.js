/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],(function(e,t,n,i,a){"use strict";let s=function(){function e(e,t){this.element=e,this.input=t,this._hasEventListeners=!1,this._onConnectGamepad=e=>{this._connectGamepad(e.gamepad)},this._onDisconnectGamepad=e=>{const t=e.gamepad,n=t.index,i=this.inputDevices[n];i&&(this._emitGamepadEvent(t,a.extractState(i),!1),this.inputDevices.splice(n,1),this.latestUpdate.splice(n,1),this.input.gamepad.devices.remove(i),this.ensurePollingState())},this.frameTask=null,this.latestUpdate=new Array,this.inputDevices=new Array,this.callback=null;const n="getGamepads"in window.navigator,i=window.isSecureContext;this.supported=n&&i,this.supported&&(this._forEachGamepad((e=>this._connectGamepad(e))),window.addEventListener("gamepadconnected",this._onConnectGamepad),window.addEventListener("gamepaddisconnected",this._onDisconnectGamepad),this.ensurePollingState())}var s=e.prototype;return s.destroy=function(){this.hasEventListeners=!1,this.supported&&(window.removeEventListener("gamepadconnected",this._onConnectGamepad),window.removeEventListener("gamepaddisconnected",this._onDisconnectGamepad))},s._connectGamepad=function(e){const t=new i(e);"unknown"!==t.deviceType&&(this.inputDevices[e.index]=t,this.input.gamepad.devices.add(t)),this.ensurePollingState()},s.ensurePollingState=function(){this.eventsEnabled?this._startPolling():this._stopPolling()},s._startPolling=function(){null==this.frameTask&&(this.frameTask=n.addFrameTask({update:()=>this._readGamepadState()}))},s._stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=new Array)},s._readGamepadState=function(){const e=document.hasFocus(),t=this.element.contains(document.activeElement),n="document"===this.input.gamepad.enabledFocusMode&&!e||"view"===this.input.gamepad.enabledFocusMode&&!t;this._forEachGamepad((e=>{const t=this.inputDevices[e.index];if(!t)return;const i=this.latestUpdate[e.index],s=a.extractState(t),o=n||a.stateIdle(s);if(i){if(i.timestamp===e.timestamp)return;if(!i.active&&o)return;if(a.stateEqual(i.state,s))return}this._emitGamepadEvent(e,s,!o)}))},s._forEachGamepad=function(e){const t=window.navigator.getGamepads();for(let n=0;n<t.length;n++){const i=t[n];this._validate(i)&&e(i)}},s._emitGamepadEvent=function(e,t,n){const i=this.latestUpdate[e.index],a=i&&i.active;if(!a&&!n)return;const s=!a&&n?"start":a&&n?"update":"end";this.latestUpdate[e.index]={timestamp:e.timestamp,state:t,active:n},this.callback&&this.callback({device:this.inputDevices[e.index],state:t,action:s})},s._validate=function(e){if(!e)return!1;if(!e.connected)return!1;for(let t=0;t<e.axes.length;t++)if(isNaN(e.axes[t]))return!1;return!0},t._createClass(e,[{key:"hasEventListeners",set:function(e){this._hasEventListeners!==e&&(this._hasEventListeners=e,this.ensurePollingState())}},{key:"eventsEnabled",get:function(){return this.supported&&this.inputDevices.length>0&&this._hasEventListeners}},{key:"onEvent",set:function(e){this.callback=e}}]),e}();e.GamepadSource=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));