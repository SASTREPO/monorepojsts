/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/handleUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../widgets/Widget","../widgets/support/widget","../widgets/support/decorators/messageBundle","../widgets/support/jsxFactory"],(function(e,t,n,r,o,a,i,c,s,u,l,d){"use strict";var f=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],p=f.join(","),v="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,b=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(p));return t&&v.call(e,p)&&r.unshift(e),r=r.filter(n)},m=function(e){return"true"===e.contentEditable},h=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?m(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},y=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},g=function(e){return"INPUT"===e.tagName},w=function(e){return g(e)&&"hidden"===e.type},T=function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))},E=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},_=function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var o=E(t,e.form);return!o||o===e},F=function(e){return g(e)&&"radio"===e.type},N=function(e){return F(e)&&!_(e)},O=function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=v.call(e,"details>summary:first-of-type")?e.parentElement:e;if(v.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),o=r.width,a=r.height;return 0===o&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},S=function(e){if(g(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1},k=function(e,t){return!(t.disabled||w(t)||O(t,e.displayCheck)||T(t)||S(t))},C=function(e,t){return!(!k(e,t)||N(t)||h(t)<0)},D=function(e,t){var n=[],r=[];return b(e,(t=t||{}).includeContainer,C.bind(null,t)).forEach((function(e,t){var o=h(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(y).map((function(e){return e.node})).concat(n)},x=function(e,t){return b(e,(t=t||{}).includeContainer,k.bind(null,t))},I=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==v.call(e,p)&&C(t,e)},A=f.concat("iframe").join(","),L=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==v.call(e,A)&&k(t,e)};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B,R=(B=[],{activateTrap:function(e){if(B.length>0){var t=B[B.length-1];t!==e&&t.pause()}var n=B.indexOf(e);-1===n||B.splice(n,1),B.push(e)},deactivateTrap:function(e){var t=B.indexOf(e);-1!==t&&B.splice(t,1),B.length>0&&B[B.length-1].unpause()}}),M=function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select},U=function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode},q=function(e){return"Tab"===e.key||9===e.keyCode},H=function(e){return setTimeout(e,0)},Y=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},K=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},W=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},$=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=P({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},c=function(e){return!(!e||!a.containers.some((function(t){return t.contains(e)})))},s=function(e){var t=o[e];if("function"==typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},u=function(){var e=s("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(r.activeElement))e=r.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},l=function(){if(a.tabbableGroups=a.containers.map((function(e){var t=D(e),n=x(e);if(t.length>0)return{container:e,firstTabbableNode:t[0],lastTabbableNode:t[t.length-1],nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n.findIndex((function(t){return t===e}));return t?n.slice(r+1).find((function(e){return I(e)})):n.slice(0,r).reverse().find((function(e){return I(e)}))}}})).filter((function(e){return!!e})),a.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=t,M(t)&&t.select()):e(u()))},f=function(e){var t=s("setReturnFocus",e);return t||!1!==t&&e},p=function(e){var t=W(e);c(t)||(K(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!L(t)}):K(o.allowOutsideClick,e)||e.preventDefault())},v=function(e){var t=W(e),n=c(t);n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(a.mostRecentlyFocusedNode||u()))},b=function(e){var t=W(e);l();var n=null;if(a.tabbableGroups.length>0){var r=Y(a.tabbableGroups,(function(e){return e.container.contains(t)})),o=r>=0?a.tabbableGroups[r]:void 0;if(r<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var i=Y(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(i<0&&(o.container===t||L(t)&&!I(t)&&!o.nextTabbableNode(t,!1))&&(i=r),i>=0){var c=0===i?a.tabbableGroups.length-1:i-1;n=a.tabbableGroups[c].lastTabbableNode}}else{var u=Y(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(u<0&&(o.container===t||L(t)&&!I(t)&&!o.nextTabbableNode(t))&&(u=r),u>=0){var f=u===a.tabbableGroups.length-1?0:u+1;n=a.tabbableGroups[f].firstTabbableNode}}}else n=s("fallbackFocus");n&&(e.preventDefault(),d(n))},m=function(e){if(U(e)&&!1!==K(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();q(e)&&b(e)},h=function(e){if(!K(o.clickOutsideDeactivates,e)){var t=W(e);c(t)||K(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},y=function(){if(a.active)return R.activateTrap(n),a.delayInitialFocusTimer=o.delayInitialFocus?H((function(){d(u())})):d(u()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",p,{capture:!0,passive:!1}),r.addEventListener("touchstart",p,{capture:!0,passive:!1}),r.addEventListener("click",h,{capture:!0,passive:!1}),r.addEventListener("keydown",m,{capture:!0,passive:!1}),n},g=function(){if(a.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",p,!0),r.removeEventListener("touchstart",p,!0),r.removeEventListener("click",h,!0),r.removeEventListener("keydown",m,!0),n};return(n={activate:function(e){if(a.active)return this;var t=i(e,"onActivate"),n=i(e,"onPostActivate"),o=i(e,"checkCanFocusTrap");o||l(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,t&&t();var c=function(){o&&l(),y(),n&&n()};return o?(o(a.containers.concat()).then(c,c),this):(c(),this)},deactivate:function(e){if(!a.active)return this;clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,g(),a.active=!1,a.paused=!1,R.deactivateTrap(n);var t=i(e,"onDeactivate"),r=i(e,"onPostDeactivate"),o=i(e,"checkCanReturnFocus");t&&t();var c=i(e,"returnFocus","returnFocusOnDeactivate"),s=function(){H((function(){c&&d(f(a.nodeFocusedBeforeActivation)),r&&r()}))};return c&&o?(o(f(a.nodeFocusedBeforeActivation)).then(s,s),this):(s(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,g()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,l(),y(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),a.active&&l(),this}}).updateContainerElements(e),n};const z={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let V=function(t){function r(e,n){var r;return(r=t.call(this,e,n)||this).container=document.createElement("div"),r.content=null,r.open=!1,r._close=()=>{r.open=!1},document.body.appendChild(r.container),r.own(r.watch("open",(()=>r._toggleFocusTrap()))),r}e._inheritsLoose(r,t);var o=r.prototype;return o.destroy=function(){this._destroyFocusTrap()},o.render=function(){const e=this.id,{open:t,content:n,title:r,messages:o}=this,a=t&&!!n,i={[z.open]:a,[z.closed]:!a},c=d.tsx("button",{class:z.closeButton,"aria-label":o.close,title:o.close,bind:this,onclick:this._close},d.tsx("span",{"aria-hidden":"true",class:z.iconClose})),s=`${e}_title`,u=`${e}_content`,l=r?d.tsx("h1",{id:s,class:z.title},r):null,f=a?d.tsx("div",{bind:this,class:z.dialog,role:"dialog","aria-labelledby":s,"aria-describedby":u,afterCreate:this._createFocusTrap},c,l,this._renderContent(u)):null;return d.tsx("div",{tabIndex:-1,class:this.classes(z.base,i)},f)},o._destroyFocusTrap=function(){var e;null==(e=this._focusTrap)||e.deactivate({onDeactivate:null}),this._focusTrap=null},o._toggleFocusTrap=function(){const{_focusTrap:e,open:t}=this;e&&(t?e.activate():e.deactivate())},o._createFocusTrap=function(e){this._destroyFocusTrap();const t=requestAnimationFrame((()=>{this._focusTrap=$(e,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.own(n.makeHandle((()=>cancelAnimationFrame(t))))},o._renderContent=function(e){const t=this.content;return"string"==typeof t?d.tsx("div",{class:z.content,id:e,innerHTML:t}):u.isWidget(t)?d.tsx("div",{class:z.content,id:e},t.render()):t instanceof HTMLElement?d.tsx("div",{class:z.content,id:e,bind:t,afterCreate:this._attachToNode}):null},o._attachToNode=function(e){const t=this;e.appendChild(t)},r}(s);t.__decorate([r.property({readOnly:!0})],V.prototype,"container",void 0),t.__decorate([r.property()],V.prototype,"content",void 0),t.__decorate([r.property()],V.prototype,"open",void 0),t.__decorate([r.property(),l.messageBundle("esri/t9n/common")],V.prototype,"messages",void 0),t.__decorate([r.property({aliasOf:"messages.auth.signIn"})],V.prototype,"title",void 0),V=t.__decorate([c.subclass("esri.identity.IdentityModal")],V);return V}));