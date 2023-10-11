/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils","./debounce","./forIn","./popper","./guid","./utils2","./label","./form","./observers","./interactive","./dom","./conditionalSlot","./icon"],(function(e,t,i,a,n,s,o,r,c,l,h,p,m,d){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const u={title:"title",close:"close",chipImageContainer:"chip-image-container",calciteChipIcon:"calcite-chip--icon"},b={close:"Close"},g={image:"image"},f={close:"x"},v="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){height:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .chip-image-container{height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .chip-image-container{height:1.5rem;width:1.5rem;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host([scale=l]){height:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .chip-image-container{height:2rem;width:2rem;padding-left:0.25rem}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;cursor:default;-ms-flex-align:center;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:-ms-inline-flexbox;display:inline-flex;height:100%;max-width:100%;-ms-flex-align:center;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding:0 var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:0 var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:-ms-inline-flexbox;display:inline-flex;max-height:100%;min-height:100%;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding:0 var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.chip-image-container{display:-ms-inline-flexbox;display:inline-flex;border-radius:50%;overflow:hidden}:host slot[name=image]::slotted(*){display:-ms-flexbox;display:flex;height:100%;width:100%;border-radius:50%;overflow:hidden}.calcite-chip--icon{position:relative;margin-top:0px;margin-bottom:0px;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:var(--calcite-chip-spacing-unit-l);margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey][appearance=solid]) button,:host([color=grey][appearance=solid]) calcite-icon{color:var(--calcite-ui-text-3)}:host([color=blue][appearance=clear]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-info)}:host([color=red][appearance=clear]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger)}:host([color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([color=grey][appearance=clear]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-3)}",x=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipDismiss=t.createEvent(this,"calciteChipDismiss",7),this.appearance="solid",this.color="grey",this.dismissible=!1,this.dismissLabel=b.close,this.iconFlipRtl=!1,this.scale="m",this.closeClickHandler=e=>{e.preventDefault(),this.calciteChipDismiss.emit(this.el)},this.guid=s.guid()}connectedCallback(){m.connectConditionalSlotComponent(this)}disconnectedCallback(){m.disconnectConditionalSlotComponent(this)}async setFocus(){var e;null===(e=this.closeButton)||void 0===e||e.focus()}renderChipImage(){const{el:e}=this;return p.getSlotted(e,g.image)?t.h("div",{class:u.chipImageContainer,key:"image"},t.h("slot",{name:g.image})):null}render(){const e=t.h("calcite-icon",{class:u.calciteChipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"}),i=t.h("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:u.close,onClick:this.closeClickHandler,ref:e=>this.closeButton=e},t.h("calcite-icon",{icon:f.close,scale:"s"}));return t.h("div",{class:"container"},this.renderChipImage(),this.icon?e:null,t.h("span",{class:u.title,id:this.guid},t.h("slot",null)),this.dismissible?i:null)}get el(){return this}static get style(){return v}},[1,"calcite-chip",{appearance:[513],color:[513],dismissible:[516],dismissLabel:[1,"dismiss-label"],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],value:[8],setFocus:[64]}]);function I(){if("undefined"==typeof customElements)return;["calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,x);break;case"calcite-icon":customElements.get(e)||d.defineCustomElement()}}))}
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */
function w(e,t){for(var i=-1,a=null==e?0:e.length,n=Array(a);++i<a;)n[i]=t(e[i],i,e);return n}I();var C=1/0,y=i.Symbol?i.Symbol.prototype:void 0,k=y?y.toString:void 0;function E(e){if("string"==typeof e)return e;if(a.isArray(e))return w(e,E)+"";if(i.isSymbol(e))return k?k.call(e):"";var t=e+"";return"0"==t&&1/e==-C?"-0":t}function D(e){return null==e?"":E(e)}var H=/[\\^$.*+?()[\]{}|]/g,S=RegExp(H.source);function L(e){return(e=D(e))&&S.test(e)?e.replace(H,"\\$&"):e}const F=(e,t)=>{const i=L(t),n=new RegExp(i,"i");0===e.length&&console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");const s=(e,t)=>{var i;if(null===(i=e)||void 0===i?void 0:i.constant)return!0;let n=!1;return a.forIn(e,(e=>{"function"!=typeof e&&(Array.isArray(e)||"object"==typeof e&&null!==e?s(e,t)&&(n=!0):t.test(e)&&(n=!0))})),n};return e.filter((e=>s(e,n)))},A="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);padding:calc(var(--calcite-combobox-item-spacing-unit-s) / 4) var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:0 var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.grid-input{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{-ms-flex-positive:1;flex-grow:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-bottom:0px;margin-top:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;width:0px;min-width:0px;opacity:0}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}.input-wrap--single{-ms-flex:1 1 0%;flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:-ms-flexbox;display:flex;max-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--spaced{padding-top:0px;padding-bottom:0px;padding-left:var(--calcite-combobox-item-spacing-unit-l);padding-right:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:-ms-flexbox;display:flex;width:1rem;cursor:pointer;-ms-flex-align:center;align-items:center}.icon-end{-ms-flex:none;flex:none}.popper-container{width:100%;display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.popper-container--active{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-height:100vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{height:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-width:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",M=e=>e.tagName===o.ComboboxItemGroup,z="combobox-item-",P="combobox-chip-",T="combobox-label-",$="combobox-listbox-",_="combobox-input-",O=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteLookupChange=t.createEvent(this,"calciteLookupChange",7),this.calciteComboboxChange=t.createEvent(this,"calciteComboboxChange",7),this.calciteComboboxFilterChange=t.createEvent(this,"calciteComboboxFilterChange",7),this.calciteComboboxChipDismiss=t.createEvent(this,"calciteComboboxChipDismiss",7),this.calciteComboboxOpen=t.createEvent(this,"calciteComboboxOpen",7),this.calciteComboboxClose=t.createEvent(this,"calciteComboboxClose",7),this.active=!1,this.disabled=!1,this.maxItems=0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multi",this.scale="m",this.value=null,this.intlRemoveTag=o.TEXT.removeTag,this.internalValueChangeFlag=!1,this.items=[],this.groupItems=[],this.selectedItems=[],this.visibleItems=[],this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.textInput=null,this.mutationObserver=l.createObserver("mutation",(()=>this.updateItems())),this.resizeObserver=l.createObserver("resize",(()=>this.setMaxScrollerHeight())),this.guid=s.guid(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.activeTransitionProp="opacity",this.getValue=()=>{const e=this.selectedItems.map((e=>null==e?void 0:e.value.toString()));return(null==e?void 0:e.length)?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keydownHandler=e=>{const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):this.active=!1;break;case"ArrowLeft":this.previousChip();break;case"ArrowRight":this.nextChip();break;case"ArrowUp":e.preventDefault(),this.active=!0,this.shiftActiveItemIndex(-1);break;case"ArrowDown":e.preventDefault(),this.active=!0,this.shiftActiveItemIndex(1);break;case"Home":this.active=!0,this.updateActiveItemIndex(0);break;case"End":this.active=!0,this.updateActiveItemIndex(this.visibleItems.length-1);break;case"Escape":this.active=!1;break;case"Enter":this.activeItemIndex>-1?this.toggleSelection(this.visibleItems[this.activeItemIndex]):this.activeChipIndex>-1?this.removeActiveChip():this.allowCustomValues&&this.text&&this.addCustomChip(this.text,!0);break;case"Delete":case"Backspace":this.activeChipIndex>-1?this.removeActiveChip():!this.text&&this.isMulti()&&this.removeLastChip();break;default:this.active||this.setFocus()}},this.toggleCloseEnd=()=>{this.active=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.active=!0,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.transitionEnd=e=>{e.propertyName===this.activeTransitionProp&&(this.active?this.calciteComboboxOpen.emit():this.calciteComboboxClose.emit())},this.setMaxScrollerHeight=()=>{const{active:e,listContainerEl:t}=this;if(!t||!e)return;this.reposition();const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:"",this.reposition()},this.calciteChipDismissHandler=(e,t)=>{this.active=!1;const i=this.items.find((e=>e===t));i&&this.toggleSelection(i,!1),this.calciteComboboxChipDismiss.emit(e.detail)},this.setFocusClick=e=>{e.composedPath().some((e=>"CALCITE-CHIP"===e.tagName))||this.setFocus()},this.setInactiveIfNotContained=e=>{const t=e.composedPath();!this.active||t.includes(this.el)||t.includes(this.referenceEl)||(this.allowCustomValues&&this.text&&this.addCustomChip(this.text),"single"===this.selectionMode&&(this.textInput&&(this.textInput.value=""),this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.active=!1)},this.setMenuEl=e=>{this.menuEl=e},this.setListContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e},this.setReferenceEl=e=>{this.referenceEl=e},this.inputHandler=e=>{const t=e.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const e=(e,t)=>e&&t.some((({label:t,value:i})=>M(e)?i===e.label||i===e.label:i===e.textLabel||i===e.value||t===e.textLabel||t===e.value));return i.debounce((t=>{const i=F(this.data,t);this.getCombinedItems().forEach((t=>{const a=!e(t,i);t.hidden=a;const[n,s]=t.ancestors;(e(n,i)||e(s,i))&&(t.hidden=!1),a||t.ancestors.forEach((e=>e.hidden=!1))})),this.visibleItems=this.getVisibleItems(),this.calciteComboboxFilterChange.emit({visibleItems:[...this.visibleItems],text:t})}),100)})(),this.internalCalciteLookupChangeEvent=()=>{this.calciteLookupChange.emit(this.selectedItems)},this.emitCalciteLookupChange=i.debounce(this.internalCalciteLookupChangeEvent,0),this.internalComboboxChangeEvent=()=>{const{selectedItems:e}=this;this.calciteComboboxChange.emit({selectedItems:e})},this.emitComboboxChange=i.debounce(this.internalComboboxChangeEvent,0),this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.visibleItems=this.getVisibleItems(),this.needsIcon=this.getNeedsIcon(),this.allowCustomValues||this.setMaxScrollerHeight()},this.comboboxFocusHandler=()=>{var e;this.active=!0,null===(e=this.textInput)||void 0===e||e.focus()},this.comboboxBlurHandler=e=>{this.setInactiveIfNotContained(e)}}activeHandler(){this.disabled?this.active=!1:this.reposition()}handleDisabledChange(e){e||(this.active=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach((t=>t.selected=e.includes(t.value))):e?t.forEach((t=>t.selected=e===t.value)):t.forEach((e=>e.selected=!1)),this.updateItems()}}documentClickHandler(e){this.setInactiveIfNotContained(e)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target;this.toggleSelection(t,t.selected)}async reposition(){const{popper:e,menuEl:t}=this,i=this.getModifiers();e?await n.updatePopper({el:t,modifiers:i,placement:n.defaultMenuPlacement,popper:e}):this.createPopper()}async setFocus(){var e;this.active=!0,null===(e=this.textInput)||void 0===e||e.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){var e;this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),this.createPopper(),r.connectLabel(this),c.connectForm(this)}componentWillLoad(){this.updateItems()}componentDidLoad(){c.afterConnectDefaultValueSet(this,this.getValue())}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(),this.inputHeight=this.el.offsetHeight),h.updateHostInteraction(this)}disconnectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),this.destroyPopper(),r.disconnectLabel(this),c.disconnectForm(this)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}textHandler(){this.updateActiveItemIndex(-1)}getModifiers(){const e={name:"flip",enabled:!0};e.options={fallbackPlacements:this.flipPlacements||n.popperMenuFlipPlacements};return[e,{name:"eventListeners",enabled:this.active}]}createPopper(){this.destroyPopper();const{menuEl:e,referenceEl:t,overlayPositioning:i}=this,a=this.getModifiers();this.popper=n.createPopper({el:e,modifiers:a,overlayPositioning:i,placement:n.defaultMenuPlacement,referenceEl:t})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}getMaxScrollerHeight(){const e=this.getCombinedItems().filter((e=>!e.hidden)),{maxItems:t}=this;let i=0,a=0;return e.length>t&&e.forEach((e=>{if(i<t&&t>0){const t=this.calculateSingleItemHeight(e);t>0&&(a+=t,i++)}})),a}calculateSingleItemHeight(e){let t=e.offsetHeight;return Array.from(e.querySelectorAll(o.ComboboxChildSelector)).map((e=>null==e?void 0:e.offsetHeight)).forEach((e=>{t-=e})),t}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(e,t=!e.selected){e&&(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitCalciteLookupChange(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach((i=>i.selected=i===e&&t)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=e.textLabel),this.active=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if("ancestors"!==this.selectionMode)return;const t=o.getItemAncestors(e),i=o.getItemChildren(e);e.selected?t.forEach((e=>{e.selected=!0})):(i.forEach((e=>e.selected=!1)),[...t].forEach((e=>{o.hasActiveChildren(e)||(e.selected=!1)})))}getVisibleItems(){return this.items.filter((e=>!e.hidden))}getSelectedItems(){if(!this.isMulti()){const e=this.items.find((({selected:e})=>e));return e?[e]:[]}return this.items.filter((e=>e.selected&&("ancestors"!==this.selectionMode||!o.hasActiveChildren(e)))).sort(((e,t)=>{const i=this.selectedItems.indexOf(e),a=this.selectedItems.indexOf(t);return i>-1&&a>-1?i-a:a-i}))}getData(){return this.items.map((e=>({constant:e.constant,value:e.value,label:e.textLabel,guid:e.guid})))}getNeedsIcon(){return"single"===this.selectionMode&&this.items.some((e=>e.icon))}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(o.ComboboxItem)).filter((e=>!e.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(o.ComboboxItemGroup))}addCustomChip(e,t){const i=this.items.find((t=>t.textLabel===e));if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const i=document.createElement(o.ComboboxItem);i.value=e,i.textLabel=e,i.selected=!0,this.el.appendChild(i),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitCalciteLookupChange(),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=-1===t?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var e;const t=null===(e=this.selectedItems[this.activeChipIndex])||void 0===e?void 0:e.guid,i=t?this.referenceEl.querySelector(`#${P}${t}`):null;null==i||i.setFocus()}shiftActiveItemIndex(e){const t=this.visibleItems.length,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i);const a=this.visibleItems[this.activeItemIndex],n=this.calculateSingleItemHeight(a),{offsetHeight:s,scrollTop:o}=this.listContainerEl;s+o<a.offsetTop+n?this.listContainerEl.scrollTop=a.offsetTop-s+n:a.offsetTop<o&&(this.listContainerEl.scrollTop=a.offsetTop)}updateActiveItemIndex(e){var t;this.activeItemIndex=e;let i=null;this.visibleItems.forEach(((t,a)=>{a===e?(t.active=!0,i=t.guid):t.active=!1})),this.activeDescendant=i,this.activeItemIndex>-1&&(this.activeChipIndex=-1,null===(t=this.textInput)||void 0===t||t.focus())}isMulti(){return"single"!==this.selectionMode}renderChips(){const{activeChipIndex:e,scale:i,selectionMode:a,intlRemoveTag:n}=this;return this.selectedItems.map(((s,r)=>{const c={chip:!0,"chip--active":e===r},l=[...[...o.getItemAncestors(s)].reverse(),s].map((e=>e.textLabel)),h="ancestors"!==a?s.textLabel:l.join(" / ");return t.h("calcite-chip",{class:c,dismissLabel:n,dismissible:!0,icon:s.icon,id:s.guid?`${P}${s.guid}`:null,key:s.textLabel,onCalciteChipDismiss:e=>this.calciteChipDismissHandler(e,s),scale:i,title:h,value:s.value},h)}))}renderInput(){const{guid:e,active:i,disabled:a,placeholder:n,selectionMode:s,needsIcon:o,selectedItems:c}=this,l="single"===s,h=c[0],p=!i&&l&&!!h;return t.h("span",{class:{"input-wrap":!0,"input-wrap--single":l}},p&&t.h("span",{class:{label:!0,"label--spaced":o},key:"label",onFocus:this.comboboxFocusHandler,tabindex:"0"},h.textLabel),t.h("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${$}${e}`,"aria-label":r.getLabelText(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":p,"input--icon":l&&o},disabled:a,id:`${_}${e}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:n,ref:e=>this.textInput=e,type:"text"}))}renderListBoxOptions(){return this.visibleItems.map((e=>t.h("li",{"aria-selected":(!!e.selected).toString(),id:e.guid?`${z}${e.guid}`:null,role:"option",tabindex:"-1"},e.textLabel)))}renderPopperContainer(){const{active:e,setMenuEl:i,setListContainerEl:a}=this,s={"list-container":!0,[n.CSS.animation]:!0,[n.CSS.animationActive]:e};return t.h("div",{"aria-hidden":"true",class:{"popper-container":!0,"popper-container--active":e},ref:i},t.h("div",{class:s,onTransitionEnd:this.transitionEnd,ref:a},t.h("ul",{class:{list:!0,"list--hide":!e}},t.h("slot",null))))}renderIconStart(){const{selectionMode:e,needsIcon:i,selectedItems:a}=this,n=a[0];return"single"===e&&i&&t.h("span",{class:"icon-start"},(null==n?void 0:n.icon)&&t.h("calcite-icon",{class:"selected-icon",icon:n.icon,scale:"s"}))}renderIconEnd(){return t.h("span",{class:"icon-end"},t.h("calcite-icon",{icon:"chevron-down",scale:"s"}))}render(){const{active:e,guid:i,label:a}=this,n="single"===this.selectionMode;return t.h(t.Host,{onKeyDown:this.keydownHandler},t.h("div",{"aria-autocomplete":"list","aria-expanded":e.toString(),"aria-haspopup":"listbox","aria-labelledby":`${T}${i}`,"aria-owns":`${$}${i}`,class:{wrapper:!0,"wrapper--single":n||!this.selectedItems.length,"wrapper--active":e},onClick:this.setFocusClick,ref:this.setReferenceEl,role:"combobox"},t.h("div",{class:"grid-input"},this.renderIconStart(),!n&&this.renderChips(),t.h("label",{class:"screen-readers-only",htmlFor:`${_}${i}`,id:`${T}${i}`},a),this.renderInput()),this.renderIconEnd()),t.h("ul",{"aria-labelledby":`${T}${i}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${$}${i}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderPopperContainer(),t.h(c.HiddenFormInputSlot,{component:this}))}get el(){return this}static get watchers(){return{active:["activeHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],value:["valueHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"]}}static get style(){return A}},[1,"calcite-combobox",{active:[1540],disabled:[516],label:[1],placeholder:[1],maxItems:[2,"max-items"],name:[513],allowCustomValues:[4,"allow-custom-values"],overlayPositioning:[1,"overlay-positioning"],required:[4],selectionMode:[513,"selection-mode"],scale:[513],value:[1025],intlRemoveTag:[1,"intl-remove-tag"],flipPlacements:[16],items:[32],groupItems:[32],selectedItems:[32],visibleItems:[32],needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],text:[32],reposition:[64],setFocus:[64]},[[4,"click","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"]]]);function V(){if("undefined"==typeof customElements)return;["calcite-combobox","calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox":customElements.get(e)||customElements.define(e,O);break;case"calcite-chip":customElements.get(e)||I();break;case"calcite-icon":customElements.get(e)||d.defineCustomElement()}}))}V();const R=O,N=V;e.CalciteCombobox=R,e.defineCustomElement=N,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));