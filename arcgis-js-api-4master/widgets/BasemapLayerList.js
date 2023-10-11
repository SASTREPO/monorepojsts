/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/events","../core/HandleOwner","../core/has","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./BasemapLayerList/BasemapLayerListViewModel","./LayerList/ListItem","./LayerList/support/layerListUtils","./support/Heading","./support/decorators/accessibleHandler","./support/decorators/messageBundle","../core/Logger","./support/decorators/vmEvent","./support/jsxFactory","./support/widgetUtils","../chunks/sortable.esm"],(function(e,t,i,s,n,r,a,o,l,c,d,u,h,m,g,p,b,_,y,f,v,I,L,w){"use strict";const A=i.ofType(g);function C(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const T=".*\\S+.*",x="esri-basemaplayerlist-new-ui",E="root-layers",S="data-layer-uid",k="layerUid",B={base:"esri-basemap-layer-list esri-widget esri-widget--panel",newUI:"esri-basemap-layer-list--new-ui",titleContainer:"esri-basemap-layer-list__title-container",mainHeading:"esri-basemap-layer-list__main-heading",editingCard:"esri-basemap-layer-list__editing-card",editingInput:"esri-basemap-layer-list__editing-input",editingActions:"esri-basemap-layer-list__editing-actions",editButton:"esri-basemap-layer-list__edit-button",editButtonIcon:"esri-basemap-layer-list__edit-button-icon",submitButton:"esri-basemap-layer-list__submit-button",cancelButton:"esri-basemap-layer-list__cancel-button",noItems:"esri-basemap-layer-list__no-items",horizontalRule:"esri-basemap-layer-list__hr",listHeading:"esri-basemap-layer-list__list-heading",list:"esri-basemap-layer-list__list",listRoot:"esri-basemap-layer-list__list--root",listExclusive:"esri-basemap-layer-list__list--exclusive",listInherited:"esri-basemap-layer-list__list--inherited",listIndependent:"esri-basemap-layer-list__list--independent",item:"esri-basemap-layer-list__item",itemOnlyChild:"esri-basemap-layer-list__item--only-child",itemContent:"esri-basemap-layer-list__item-content",itemError:"esri-basemap-layer-list__item--error",itemInvisible:"esri-basemap-layer-list__item--invisible",itemInvisibleAtScale:"esri-basemap-layer-list__item--invisible-at-scale",itemUpdating:"esri-basemap-layer-list__item--updating",itemChildren:"esri-basemap-layer-list__item--has-children",itemSelectable:"esri-basemap-layer-list__item--selectable",itemContainer:"esri-basemap-layer-list__item-container",actionsMenu:"esri-basemap-layer-list__item-actions-menu",actionsMenuItem:"esri-basemap-layer-list__item-actions-menu-item",actionsMenuItemActive:"esri-basemap-layer-list__item-actions-menu-item--active",actions:"esri-basemap-layer-list__item-actions",actionsList:"esri-basemap-layer-list__item-actions-list",action:"esri-basemap-layer-list__item-action",actionIcon:"esri-basemap-layer-list__item-action-icon",actionImage:"esri-basemap-layer-list__item-action-image",actionTitle:"esri-basemap-layer-list__item-action-title",actionToggle:"esri-basemap-layer-list__action-toggle",actionToggleOn:"esri-basemap-layer-list__action-toggle--on",label:"esri-basemap-layer-list__item-label",errorMessage:"esri-basemap-layer-list__item-error-message",title:"esri-basemap-layer-list__item-title",toggleVisible:"esri-basemap-layer-list__item-toggle",toggleVisibleIcon:"esri-basemap-layer-list__item-toggle-icon",toggleIcon:"esri-basemap-layer-list__item-toggle-icon",radioIcon:"esri-basemap-layer-list__item-radio-icon",childToggle:"esri-basemap-layer-list__child-toggle",childToggleOpen:"esri-basemap-layer-list__child-toggle--open",childOpened:"esri-basemap-layer-list__child-toggle-icon--opened",childClosed:"esri-basemap-layer-list__child-toggle-icon--closed",childClosed_RTL:"esri-basemap-layer-list__child-toggle-icon--closed-rtl",sortableChosen:"esri-basemap-layer-list--chosen",button:"esri-button",buttonTertiary:"esri-button--tertiary",input:"esri-input",disabled:"esri-disabled",disabledElement:"esri-disabled-element",hidden:"esri-hidden",rotating:"esri-rotating",heading:"esri-widget__heading",iconEdit:"esri-icon-edit",iconCheckMark:"esri-icon-check-mark",iconClose:"esri-icon-close",iconEllipses:"esri-icon-handle-horizontal",iconVisible:"esri-icon-visible",iconInvisible:"esri-icon-non-visible",iconRadioSelected:"esri-icon-radio-checked",iconRadioUnselected:"esri-icon-radio-unchecked",iconNoticeTriangle:"esri-icon-notice-triangle",iconChildrenOpen:"esri-icon-down-arrow",iconDownArrow:"esri-icon-down-arrow",iconRightArrow:"esri-icon-right-triangle-arrow",iconLeftArrow:"esri-icon-left-triangle-arrow",iconLoading:"esri-icon-loading-indicator",iconDefaultAction:"esri-icon-default-action",widgetIcon:"esri-icon-layers"},O={actions:"actions",actionSection:"action-section",baseItems:"base-items",referenceItems:"reference-items"},R={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function M(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>M(e)))}const U={baseLayers:!0,referenceLayers:!0,statusIndicators:!0};let H=function(t){function i(e,i){var s;return(s=t.call(this,e,i)||this)._editingTitle=!1,s._editTitleInput=null,s._editTitleButton=null,s._focusOnElement=null,s._sortableBaseLayers=null,s._sortableReferenceLayers=null,s._sortableBaseLayersNode=null,s._sortableReferenceLayersNode=null,s._focusSortUid=null,s._newUI=r(x),s.basemapTitle=null,s.baseListItemCreatedFunction=null,s.editingEnabled=!1,s.headingLevel=2,s.iconClass=B.widgetIcon,s.label=void 0,s.messages=null,s.messagesCommon=null,s.multipleSelectionEnabled=!1,s.referenceListItemCreatedFunction=null,s.baseItems=null,s.referenceItems=null,s.selectedItems=new A,s.view=null,s.viewModel=new m,s.visibleElements={...U},s}e._inheritsLoose(i,t);var n=i.prototype;return n.initialize=function(){const{baseItems:e,referenceItems:t}=this;this.own([a.on(this,"baseItems","change",(()=>{this._itemsChanged(e,O.baseItems),this._toggleSortingBaseLayers()})),a.on(this,"referenceItems","change",(()=>this._itemsChanged(t,O.referenceItems))),a.init(this,"editingEnabled",(()=>this._toggleSorting()))])},n.destroy=function(){this._destroyBaseSortable(),this._destroyReferenceSortable()},n.castVisibleElements=function(e){return{...U,...e}},n.triggerAction=function(e,t){this.viewModel.triggerAction(e,t)},n.render=function(){const{state:e}=this.viewModel,t={[B.newUI]:this._newUI,[B.hidden]:"loading"===e,[B.disabled]:"disabled"===e},i=this.renderReferenceSection(),s=this.renderBaseSection(),n=i&&s?I.tsx("hr",{class:B.horizontalRule}):null;return I.tsx("div",{class:this.classes(B.base,t)},this.renderTitleContainer(),i,n,s)},n.renderEditingInput=function(){const{messages:e}=this,{basemapTitle:t}=this.viewModel;return I.tsx("label",{class:B.editingInput},e.basemapTitle,I.tsx("input",{bind:this,class:B.input,title:e.basemapTitle,"aria-label":e.basemapTitle,placeholder:e.basemapTitle,type:"text",role:"textbox",required:!0,pattern:T,value:t,afterCreate:this._storeEditTitleInput,afterUpdate:this._focusEditElement}))},n.renderCancelButton=function(){const{messagesCommon:e}=this;return I.tsx("button",{title:e.cancel,"aria-label":e.cancel,type:"button",bind:this,class:this.classes(B.button,B.buttonTertiary),onclick:this._toggleEditingTitle},e.cancel)},n.renderSubmitButton=function(){const{messagesCommon:e}=this;return I.tsx("button",{title:e.form.submit,"aria-label":e.form.submit,type:"submit",bind:this,class:B.button},e.form.ok)},n.renderEditingForm=function(){return I.tsx("div",{class:B.editingCard},I.tsx("form",{bind:this,onsubmit:this._formSubmit},this.renderEditingInput(),I.tsx("div",{class:B.editingActions},this.renderCancelButton(),this.renderSubmitButton())))},n.renderBasemapTitle=function(){const{basemapTitle:e}=this.viewModel;return I.tsx(b.Heading,{level:this.headingLevel,class:this.classes(B.heading,B.mainHeading)},e)},n.renderEditTitleButton=function(){const{_editingTitle:e,editingEnabled:t,messagesCommon:i}=this;return t&&!e?I.tsx("button",{bind:this,class:B.editButton,title:i.edit,"aria-label":i.edit,onclick:this._toggleEditingTitle,afterCreate:this._storeEditTitleButton,afterUpdate:this._focusEditElement,"data-node-ref":"_editButtonNode",type:"button"},I.tsx("span",{"aria-hidden":"true",class:this.classes(B.iconEdit,B.editButtonIcon)})):null},n.renderTitleContainer=function(){return I.tsx("div",{class:B.titleContainer},this._editingTitle?this.renderEditingForm():this.renderBasemapTitle(),this.renderEditTitleButton())},n.renderNoLayersInfo=function(e,t){return I.tsx("div",{key:t,class:B.noItems},e)},n.renderList=function(e,t){const{messages:i}=this,s="reference"===t?this._destroyReferenceSortable:this._destroyBaseSortable;return I.tsx("ul",{key:t,"aria-label":i.widgetLabel,role:this.editingEnabled&&e.length?"listbox":void 0,afterCreate:this._sortNodeCreated,afterRemoved:s,"data-node-ref":t,bind:this,class:this.classes(B.list,B.listRoot,B.listIndependent)},e.map((i=>this.renderItem({item:i,parent:null,itemType:t,isOnlyChild:1===e.length}))))},n.renderBaseHeader=function(){return I.tsx(b.Heading,{key:"base-heading",level:b.incrementHeadingLevel(this.headingLevel),class:this.classes(B.heading,B.listHeading)},this.messages.baseHeading)},n.renderBaseSection=function(){const{baseItems:e,messages:t,visibleElements:i}=this;if(!i.baseLayers)return null;const s=this._getItems(e),n="base";return[this.renderBaseHeader(),[0===s.length?this.renderNoLayersInfo(t.noBaseLayers,n):null,this.renderList(s,n)]]},n.renderReferenceHeader=function(){return I.tsx(b.Heading,{key:"reference-heading",level:b.incrementHeadingLevel(this.headingLevel),class:this.classes(B.heading,B.listHeading)},this.messages.referenceHeading)},n.renderReferenceSection=function(){const{referenceItems:e,messages:t,visibleElements:i}=this;if(!i.referenceLayers)return null;const s=this._getItems(e),n="reference";return[this.renderReferenceHeader(),[0===s.length?this.renderNoLayersInfo(t.noReferenceLayers,n):null,this.renderList(s,n)]]},n.renderChildrenToggle=function(e,t){const{messagesCommon:i}=this,{children:s}=e,n=!!e.error,r=!!s.length&&!n,a={[B.childToggleOpen]:e.open},o=e.open?i.collapse:i.expand;return r?I.tsx("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(B.childToggle,a),tabindex:"0",role:"button","aria-controls":t,"aria-label":o,title:o},I.tsx("span",{"aria-hidden":"true",class:this.classes(B.childClosed,B.iconRightArrow)}),I.tsx("span",{"aria-hidden":"true",class:this.classes(B.childOpened,B.iconDownArrow)}),I.tsx("span",{"aria-hidden":"true",class:this.classes(B.childClosed_RTL,B.iconLeftArrow)})):null},n.renderError=function(e){return e.error?I.tsx("div",{key:"error",class:B.errorMessage,role:"alert"},I.tsx("span",null,this.messages.layerError)):null},n.renderActionsMenuIcon=function(e,t){const{messagesCommon:i}=this,s={[B.actionsMenuItemActive]:e.actionsOpen};return I.tsx("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(B.actionsMenuItem,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},I.tsx("span",{"aria-hidden":"true",class:B.iconEllipses}))},n.renderActionsMenu=function(e,t,i,s){const{panel:n}=e,r=n&&n.visible?this.renderPanelButton(n):null,a=1===i&&this._getSingleActionButton(t),o=a?this.renderAction({item:e,action:a,singleAction:!0}):null,l=!a&&i?this.renderActionsMenuIcon(e,s):null;return l||r||a?I.tsx("div",{key:"actions-menu",class:B.actionsMenu},r,o,l):null},n.renderChildList=function(e,t){const{editingEnabled:i}=this,{visibilityMode:s,children:n}=e,r=!!e.error,a=!!n.length&&!r,{exclusive:o,inherited:l}=R,c={[B.listExclusive]:s===o,[B.listInherited]:s===l,[B.listIndependent]:s!==l&&s!==o};return a?I.tsx("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,class:this.classes(B.list,c),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===o?"radiogroup":"group",hidden:!e.open||null},null==n?void 0:n.map((t=>this.renderItem({item:t,parent:e}))).toArray()):null},n.renderItemContent=function(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,r=`${n}_actions`,a=`${n}__list`,{panel:o}=e,l=this._filterActions(e.actionsSections),c=this._countActions(l);return[I.tsx("div",{key:"list-item-container",class:B.itemContainer},this.renderChildrenToggle(e,a),this.renderLabel(e,t,i),this.renderActionsMenu(e,l,c,r)),this.renderError(e),c?this.renderActionsSections(e,l,r):null,o&&o.open?o.render():null,this.renderChildList(e,a)]},n.renderItem=function({item:e,parent:t,itemType:i,isOnlyChild:s}){const{_newUI:n,id:r,editingEnabled:a,selectedItems:o,visibleElements:l}=this,{children:c}=e,d=`${`${r}_${e.uid}`}__title`,u=!!e.error,h=!!c.length&&!u,m={[B.itemChildren]:h,[B.itemError]:!!u,[B.itemUpdating]:e.updating&&!t&&l.statusIndicators,[B.itemInvisible]:n&&!e.visible,[B.itemInvisibleAtScale]:!e.visibleAtCurrentScale,[B.itemSelectable]:a};if(a){var g;const n={[S]:null==(g=e.layer)?void 0:g.uid};return I.tsx("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(B.item,m,{[B.itemOnlyChild]:s}),"aria-labelledby":d,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item-type":i,"data-item":e,tabIndex:0,"aria-selected":p.findSelectedItem(e,o)?"true":"false",role:"option",...n},this.renderItemContent(e,t,d))}return I.tsx("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(B.item,m),"aria-labelledby":d},this.renderItemContent(e,t,d))},n.renderItemTitle=function(e,t){const{messages:i}=this,s=e.title||i.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return I.tsx("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:B.title},s)},n.renderItemToggleIcon=function(e,t){const{_newUI:i}=this,{exclusive:s}=R,n=t&&t.visibilityMode,r={[B.toggleVisibleIcon]:i,[B.toggleIcon]:i&&n!==s,[B.radioIcon]:i&&n===s,[B.iconRadioSelected]:n===s&&e.visible,[B.iconRadioUnselected]:n===s&&!e.visible,[B.iconVisible]:n!==s&&e.visible,[B.iconInvisible]:n!==s&&!e.visible};return I.tsx("span",{key:"item-toggle-icon",class:this.classes(r),"aria-hidden":"true"})},n.renderItemToggle=function(e,t,i){const{editingEnabled:s}=this,{exclusive:n}=R,r=t&&t.visibilityMode,a=r===n?"radio":"switch";return s?I.tsx("span",{key:"item-toggle-selection-enabled",class:B.toggleVisible,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":r,tabIndex:0,"aria-checked":e.visible?"true":"false",role:a,"aria-labelledby":i},this.renderItemToggleIcon(e,t)):I.tsx("span",{key:"item-toggle",class:B.toggleVisible},this.renderItemToggleIcon(e,t))},n.renderItemError=function(e){return e.error?I.tsx("span",{key:"notice-triangle","aria-hidden":"true",class:B.iconNoticeTriangle}):null},n.renderLabel=function(e,t,i){const{editingEnabled:s,_newUI:n}=this,{inherited:r,exclusive:a}=R,o=null==t?void 0:t.visibilityMode,l=o===a?"radio":"switch",c=[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i)];n&&c.reverse();const d=s?I.tsx("div",{key:`item-label-no-selection-${e.uid}`,class:B.label},c):I.tsx("div",{key:`item-label-with-selection-${e.uid}`,class:B.label,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":o,tabIndex:0,"aria-checked":e.visible?"true":"false",role:l,"aria-labelledby":i},c);return o===r||e.error?I.tsx("div",{key:`item-label-container-${e.uid}`,class:B.label},this.renderItemError(e),this.renderItemTitle(e,i)):d},n.renderPanelButton=function(e){const{className:t,open:i,title:s,image:n}=e,r=n||t?t:B.iconDefaultAction,a=this._getIconImageStyles(e),o={[B.actionsMenuItemActive]:i},l={[B.actionImage]:!!a["background-image"]};return r&&(l[r]=!!r),I.tsx("div",{key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(B.actionsMenuItem,o),role:"button",tabindex:"0",title:s,"aria-label":s},I.tsx("span",{class:this.classes(l),styles:a}))},n.renderActionsSections=function(e,t,i){const s=t.toArray().map(((t,i)=>I.tsx("ul",{key:`${e}-action-section-${i}`,class:B.actionsList},this.renderActionSection(e,t))));return I.tsx("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:B.actions,hidden:!e.actionsOpen||null},s)},n.renderActionSection=function(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))},n.renderActionIcon=function(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:B.iconDefaultAction,r={[B.actionImage]:!t&&!!s["background-image"],[B.iconLoading]:t,[B.rotating]:t};return n&&!t&&(r[n]=!0),I.tsx("span",{key:"action-icon","aria-hidden":"true",class:this.classes(B.actionIcon,r),styles:s})},n.renderActionTitle=function(e,t){return t?null:I.tsx("span",{key:"action-title",class:B.actionTitle},e)},n.renderAction=function(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:r,title:a}=i,o={[B.actionsMenuItem]:s&&"button"===i.type,[B.action]:n||!s&&"toggle"!==i.type,[B.actionToggle]:!n&&"toggle"===i.type,[B.actionToggleOn]:!n&&"toggle"===i.type&&i.value,[B.disabledElement]:r},l=[this.renderActionIcon(i),this.renderActionTitle(a,s)];return s?I.tsx("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:o,tabindex:"0",title:a,"aria-label":a},l):I.tsx("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:o,tabindex:"0",role:"button",title:a,"aria-label":a},l)},n._filterActions=function(e){return e.map((e=>e.filter((e=>e.visible))))},n._destroyReferenceSortable=function(){const{_sortableReferenceLayers:e}=this;(null==e?void 0:e.el)&&e.destroy(),this._sortableReferenceLayersNode=null},n._destroyBaseSortable=function(){const{_sortableBaseLayers:e}=this;(null==e?void 0:e.el)&&e.destroy(),this._sortableBaseLayersNode=null},n._toggleEditingTitle=function(){const{_editingTitle:e}=this,t=!e;this._editingTitle=t,this._focusOnElement=t?"edit-input":"edit-button",this.scheduleRender()},n._storeEditTitleInput=function(e){this._editTitleInput=e,this._focusEditElement()},n._focusEditElement=function(){this._editTitleInput&&"edit-input"===this._focusOnElement&&(this._focusOnElement=null,this._editTitleInput.focus()),this._editTitleButton&&"edit-button"===this._focusOnElement&&(this._focusOnElement=null,this._editTitleButton.focus())},n._storeEditTitleButton=function(e){this._editTitleButton=e,this._focusEditElement()},n._formSubmit=function(e){var t;e.preventDefault();const i=null==(t=this._editTitleInput)?void 0:t.value;null!=i&&i.trim()&&(this.basemapTitle=i),this._toggleEditingTitle()},n._itemMovedList=function(e){const t=e.item["data-item"],i=e.to.dataset.nodeRef,s=e.from.dataset.nodeRef,{newIndex:n}=e;this.viewModel.transferListItem({listItem:t,from:s,to:i,newIndex:n})},n._toggleSortingBaseLayers=function(){const{_sortableBaseLayers:e,_sortableBaseLayersNode:t,editingEnabled:i}=this;if(!t)return;const s=!i;if(e)e.option("disabled",s);else{const e=w.Sortable.create(t,{dataIdAttr:S,group:E,filter:`.${B.itemOnlyChild}`,fallbackTolerance:4,disabled:s,onSort:()=>this._sortLayersToItems({type:"base",itemIds:e.toArray()}),onAdd:e=>this._itemMovedList(e),chosenClass:B.sortableChosen});this._sortableBaseLayers=e}},n._toggleSortingReferenceLayers=function(){const{_sortableReferenceLayers:e,_sortableReferenceLayersNode:t,editingEnabled:i}=this;if(!t)return;const s=!i;if(e)e.option("disabled",s);else{const e=w.Sortable.create(t,{dataIdAttr:S,group:E,disabled:s,fallbackTolerance:4,onSort:()=>this._sortLayersToItems({type:"reference",itemIds:e.toArray()}),onAdd:e=>this._itemMovedList(e),chosenClass:B.sortableChosen});this._sortableReferenceLayers=e}},n._toggleSorting=function(){this._toggleSortingBaseLayers(),this._toggleSortingReferenceLayers()},n._sortNodeCreated=function(e){const t=e.getAttribute("data-node-ref");"base"===t&&(this._sortableBaseLayersNode=e),"reference"===t&&(this._sortableReferenceLayersNode=e),this._toggleSorting()},n._getItems=function(e){return e.toArray().filter((e=>this.errorsVisible||!e.error))},n._getSingleActionButton=function(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)},n._sortLayersToItems=function({type:e,itemIds:t}){const i="base"===e?this.get("view.map.basemap.baseLayers"):"reference"===e?this.get("view.map.basemap.referenceLayers"):null;i&&i.sort(((e,i)=>{const s=t.indexOf(e.uid),n=t.indexOf(i.uid);return s>n?-1:s<n?1:0}))},n._focusListItem=function(e){var t;const{_focusSortUid:i}=this;if(!e||!i)return;(null==(t=e["data-item"].layer)?void 0:t.uid)===i&&(e.focus(),this._focusSortUid=null)},n._selectionKeydown=function(e){const t=["ArrowDown","ArrowUp"],i=s.eventKey(e);if(-1===t.indexOf(i))return void this._toggleSelection(e);e.stopPropagation();const n=e.currentTarget,r=n["data-item"],a=n.dataset.itemType,{_sortableBaseLayers:o,_sortableReferenceLayers:l,selectedItems:c}=this,d="base"===a?o:"reference"===a?l:null;if(!d)return;const u=p.findSelectedItem(r,c),h=d.toArray(),m=e.target,g=h.indexOf(m.dataset[k]),{baseItems:b,referenceItems:_}=this.viewModel;if(-1!==g){if("ArrowDown"===i){var y;const e=g+1,t=e>=h.length;if(t&&"reference"===a&&u){var f;const e=b.length;return this.viewModel.transferListItem({listItem:r,from:"reference",to:"base",newIndex:e}),this._focusSortUid=null==(f=r.layer)?void 0:f.uid,void this.scheduleRender()}if(t&&"reference"===a){var v;const e=b.getItemAt(0);return this._focusSortUid=null==e||null==(v=e.layer)?void 0:v.uid,void this.scheduleRender()}if(t)return;return u&&(C(h,g,e),d.sort(h),this._sortLayersToItems({type:a,itemIds:d.toArray()})),this._focusSortUid=null==(y=r.layer)?void 0:y.uid,void this.scheduleRender()}if("ArrowUp"===i){var I;const e=g-1,t=e<0;if(t&&"base"===a&&u){var L;if(1===b.length)return;const e=0;return this.viewModel.transferListItem({listItem:r,from:"base",to:"reference",newIndex:e}),this._focusSortUid=null==(L=r.layer)?void 0:L.uid,void this.scheduleRender()}if(t&&"base"===a){var w;const e=_.getItemAt(_.length-1);return this._focusSortUid=null==e||null==(w=e.layer)?void 0:w.uid,void this.scheduleRender()}if(t)return;u&&(C(h,g,e),d.sort(h),this._sortLayersToItems({type:a,itemIds:d.toArray()})),this._focusSortUid=null==(I=r.layer)?void 0:I.uid,this.scheduleRender()}}},n._watchActionSectionChanges=function(e,t){this.handles.add(e.on("change",(()=>this.scheduleRender())),t),e.forEach((e=>this._renderOnActionChanges(e,t)))},n._renderOnActionChanges=function(e,t){"toggle"!==e.type?"slider"!==e.type?this.handles.add([a.init(e,["className","image","id","title","visible"],(()=>this.scheduleRender()))],t):this.handles.add([a.init(e,["className","id","title","visible","value","displayValueEnabled","max","min","step"],(()=>this.scheduleRender()))],t):this.handles.add([a.init(e,["className","image","id","title","visible","value"],(()=>this.scheduleRender()))],t)},n._renderOnItemChanges=function(e,t){this.handles.add([a.init(e,["actionsOpen","visible","open","updating","title","visibleAtCurrentScale","error","visibilityMode","panel","panel.title","panel.content","panel.className"],(()=>this.scheduleRender())),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],t),e.children.forEach((e=>this._renderOnItemChanges(e,t))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))},n._itemsChanged=function(e,t){this.handles.remove(t),e.forEach((e=>this._renderOnItemChanges(e,t))),this.scheduleRender()},n._countActions=function(e){return e.reduce(((e,t)=>e+t.length),0)},n._getIconImageStyles=function(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}},n._toggleActionsOpen=function(e){e.stopPropagation();const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i,{baseItems:n,referenceItems:r}=this;s&&(n.forEach((e=>M(e))),r.forEach((e=>M(e)))),t.actionsOpen=s},n._triggerPanel=function(e){e.stopPropagation();const t=e.currentTarget["data-panel"];t&&(t.open=!t.open)},n._triggerAction=function(e){e.stopPropagation();const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s)},n._toggleVisibility=function(e){e.stopPropagation();const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===R.exclusive&&s.visible||(s.visible=!s.visible)},n._toggleChildrenClick=function(e){e.stopPropagation();const t=e.currentTarget["data-item"];t.open=!t.open},n._toggleSelection=function(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=t&&(e.metaKey||e.ctrlKey),n=e.currentTarget["data-item"],r=p.findSelectedItem(n,i),{length:a}=i;if(!s)return a&&!(r&&1===a)?(i.removeAll(),void i.add(n)):void(r?i.remove(r):i.add(n));r?i.remove(r):i.add(n)},i}(n.HandleOwnerMixin(h));t.__decorate([o.aliasOf("viewModel.basemapTitle")],H.prototype,"basemapTitle",void 0),t.__decorate([o.aliasOf("viewModel.baseListItemCreatedFunction")],H.prototype,"baseListItemCreatedFunction",void 0),t.__decorate([d.property()],H.prototype,"editingEnabled",void 0),t.__decorate([d.property()],H.prototype,"errorsVisible",void 0),t.__decorate([d.property()],H.prototype,"headingLevel",void 0),t.__decorate([d.property()],H.prototype,"iconClass",void 0),t.__decorate([d.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],H.prototype,"label",void 0),t.__decorate([d.property(),y.messageBundle("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")],H.prototype,"messages",void 0),t.__decorate([d.property(),y.messageBundle("esri/t9n/common")],H.prototype,"messagesCommon",void 0),t.__decorate([d.property()],H.prototype,"multipleSelectionEnabled",void 0),t.__decorate([o.aliasOf("viewModel.referenceListItemCreatedFunction")],H.prototype,"referenceListItemCreatedFunction",void 0),t.__decorate([o.aliasOf("viewModel.baseItems")],H.prototype,"baseItems",void 0),t.__decorate([o.aliasOf("viewModel.referenceItems")],H.prototype,"referenceItems",void 0),t.__decorate([d.property()],H.prototype,"selectedItems",void 0),t.__decorate([o.aliasOf("viewModel.view")],H.prototype,"view",void 0),t.__decorate([v.vmEvent("trigger-action"),d.property({type:m})],H.prototype,"viewModel",void 0),t.__decorate([d.property()],H.prototype,"visibleElements",void 0),t.__decorate([c.cast("visibleElements")],H.prototype,"castVisibleElements",null),t.__decorate([_.accessibleHandler()],H.prototype,"_toggleActionsOpen",null),t.__decorate([_.accessibleHandler()],H.prototype,"_triggerPanel",null),t.__decorate([_.accessibleHandler()],H.prototype,"_triggerAction",null),t.__decorate([_.accessibleHandler()],H.prototype,"_toggleVisibility",null),t.__decorate([_.accessibleHandler()],H.prototype,"_toggleChildrenClick",null),t.__decorate([_.accessibleHandler()],H.prototype,"_toggleSelection",null),H=t.__decorate([u.subclass("esri.widgets.BasemapLayerList")],H);return H}));