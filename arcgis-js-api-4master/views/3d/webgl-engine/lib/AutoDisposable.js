/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(s,e){"use strict";const i=s=>{let i=function(s){function i(){var e;return(e=s.apply(this,arguments)||this)._isDisposed=!1,e}return e._inheritsLoose(i,s),i.prototype.dispose=function(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose()}this._isDisposed=!0},e._createClass(i,[{key:"isDisposed",get:function(){return this._isDisposed}}]),i}(s);return i};let n=function(s){function i(){return s.apply(this,arguments)||this}return e._inheritsLoose(i,s),i}(i(function(){function s(){}return s}()));function t(){return(s,e)=>{var i,n;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!=(i=null==(n=s._managedDisposables)?void 0:n.slice())?i:[]);s._managedDisposables.unshift(e)}}s.AutoDisposable=n,s.AutoDisposableMixin=i,s.autoDispose=t,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));