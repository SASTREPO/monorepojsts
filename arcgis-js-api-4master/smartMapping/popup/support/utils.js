/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/arrayUtils","../../../intl/messages","../../../intl/substitute","../../../layers/support/fieldUtils","../../../popup/content/AttachmentsContent","../../../popup/content/Content","../../../popup/content/CustomContent","../../../popup/content/ExpressionContent","../../../popup/content/FieldsContent","../../../popup/content/MediaContent","../../../popup/content/TextContent","../../../popup/ExpressionInfo","../../../popup/FieldInfo","../../../renderers/support/utils","../../../renderers/visualVariables/support/visualVariableUtils"],(function(e,n,t,i,s,l,a,o,r,p,u,f,d,m,c,g,b){"use strict";let x=0;const y="expression/";function F(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((e=>!b.viewScaleRE.test(e.valueExpression)&&(!("target"in e)||"outline"!==e.target))):[]}function h(e,n){let t=null;"popupTemplate"in e&&e.popupTemplate&&(t=e.popupTemplate.fieldInfos);const i=e.getField(n);let s=null;if(t&&t.some((e=>!(!e||e.fieldName.toLowerCase()!==i.name.toLowerCase())&&(s=e.clone(),!0))),!s){const e=l.numericTypes.indexOf(i.type)>-1,n="integer"===i.type||"small-integer"===i.type;s=new c({fieldName:i.name,isEditable:i.editable,visible:!0,format:e?{places:n?0:2,digitSeparator:!0}:null})}return s.label||(s.label=i.alias),s}function I(e){const{expression:n,title:t,returnType:i}=e;return new m({name:"expr"+x++,expression:n,title:t,returnType:i})}function $(e){const n="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new c({fieldName:`${y}${e.name}`,visible:!0,format:n})}function V(e){return T.apply(this,arguments)}function T(){return(T=n._asyncToGenerator((function*(e){const n=yield i.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{renderer:l,layer:a,normFieldExpressionTemplate:o}=e,r=[],p=[],u=g.getAttributes(l,F);for(const t of u)if("field"===t.type)r.push(h(a,t.field));else if("normalized-field"===t.type){const e=a.getField(t.field),i=a.getField(t.normalizationField),l=I({type:"expression",expression:`\n      $feature["${e.name}"];\n      $feature["${i.name}"];\n      ${"percentage"===o?`($feature["${e.name}"] / $feature["${i.name}"]) * 100;`:`$feature["${e.name}"] / $feature["${i.name}"];`}\n      `,title:"percentage"===o?s.substitute(n.normFieldLabelAsPercent,{expression1:e.alias,expression2:i.alias}):s.substitute(n.normFieldLabel,{expression1:e.alias,expression2:i.alias}),returnType:"number"});r.push($(l),h(a,t.field),h(a,t.normalizationField)),p.push(l)}else if("expression"===t.type){const e=I(t);r.push($(e)),p.push(e)}return{fieldInfos:t.unique(r,((e,n)=>e.fieldName===n.fieldName)),expressionInfos:t.unique(p,((e,n)=>e.expression===n.expression))}}))).apply(this,arguments)}function C(e,n){return v.apply(this,arguments)}function v(){return(v=n._asyncToGenerator((function*(e,n){const{fieldInfos:t,expressionInfos:l}=n,a=yield i.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");if(t.length>2)return[new u({fieldInfos:t})];const o=[];for(const i of t){const n=i.fieldName;let t=i.label;if(!t){const i=e.getField(n);if(i)t=i.alias||n;else if(l){const e=n.split(y)[1],i=l[l.findIndex((n=>n.name===e))];i&&(t=i.title||i.name)}}o.push(new d({text:s.substitute(a.fieldInfo,{fieldLabel:t,fieldValue:`{${n}}`})}))}return o}))).apply(this,arguments)}function E(e){return!(!("normalizationField"in e)||!e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((e=>!(!("normalizationField"in e)||!e.normalizationField)))}e.expressionFieldPrefix=y,e.getContentFromFieldInfos=C,e.getExpressionInfo=I,e.getFieldAndExpressionInfos=V,e.getFieldInfo=h,e.getFieldInfoFromExpressionInfo=$,e.getPrimaryVisualVariables=F,e.hasNormalizedField=E,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));