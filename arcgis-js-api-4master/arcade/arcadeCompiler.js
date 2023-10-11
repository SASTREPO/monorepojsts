/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","./ArcadePortal","./Attachment","./Dictionary","./Feature","./ImmutablePathArray","./ImmutablePointArray","../chunks/languageUtils","./treeAnalysis","../chunks/array","./functions/date","./functions/geometry","./functions/geomsync","./functions/maths","./functions/stats","./functions/string","../core/promiseUtils","../geometry/Extent","../geometry/Geometry","../geometry/Multipoint","../geometry/Point","../geometry/Polygon","../geometry/Polyline","../geometry/SpatialReference"],(function(e,t,r,n,o,a,i,l,s,c,u,p,f,g,m,h,d,y,b,S,E,w,N,v,M){"use strict";function O(e,t){const r=[];for(let n=0;n<t.arguments.length;n++)r.push(T(e,t.arguments[n]));return r}function I(e,t,r){try{return r(e,null,t.arguments)}catch(n){throw n}}function x(e){return e instanceof Error?y.reject(e):y.reject(new Error(e))}function T(e,t){try{switch(t.type){case"EmptyStatement":return"lc.voidOperation";case"VariableDeclarator":return V(e,t);case"VariableDeclaration":return Y(e,t);case"BlockStatement":return L(e,t);case"FunctionDeclaration":return B(e,t);case"ReturnStatement":return j(e,t);case"IfStatement":return D(e,t);case"ExpressionStatement":return P(e,t);case"AssignmentExpression":return U(e,t);case"UpdateExpression":return _(e,t);case"BreakStatement":return"break";case"ContinueStatement":return"continue";case"TemplateLiteral":return H(e,t);case"TemplateElement":return JSON.stringify(t.value?t.value.cooked:"");case"ForStatement":return R(e,t);case"ForInStatement":return F(e,t);case"Identifier":return X(e,t);case"MemberExpression":return q(e,t);case"Literal":return null===t.value||void 0===t.value?"null":JSON.stringify(t.value);case"ThisExpression":case"ConditionalExpression":case"Array":throw new Error(c.nodeErrorMessage(t,"RUNTIME","NOTSUPPORTED"));case"CallExpression":return Q(e,t);case"UnaryExpression":return J(e,t);case"BinaryExpression":return W(e,t);case"LogicalExpression":return K(e,t);case"ArrayExpression":return Z(e,t);case"ObjectExpression":return A(e,t);case"Property":return C(e,t);default:throw new Error(c.nodeErrorMessage(t,"RUNTIME","UNREOGNISED"))}}catch(r){throw r}}function A(e,t){let r="lang.dictionary([";for(let n=0;n<t.properties.length;n++){const o=t.properties[n];n>0&&(r+=","),r+="lang.strCheck("+("Identifier"===o.key.type?"'"+o.key.name+"'":T(e,o.key))+",'ObjectExpression'),lang.aCheck("+T(e,o.value)+", 'ObjectExpression')"}return r+="])",r}function C(e,t){throw new Error("Should not get here")}function F(e,t){const r=se(e),n=se(e),o=se(e);let a="var "+r+" = "+T(e,t.right)+";\n";"VariableDeclaration"===t.left.type&&(a+=T(e,t.left));let i="VariableDeclaration"===t.left.type?t.left.declarations[0].id.name:t.left.name;i=i.toLowerCase();let l="";return null!==e.localScope&&(void 0!==e.localScope[i]?l="lscope['"+i+"']":void 0!==e.localScope._SymbolsMap[i]&&(l="lscope['"+e.localScope._SymbolsMap[i]+"']")),""===l&&(void 0!==e.globalScope[i]?l="gscope['"+i+"']":void 0!==e.globalScope._SymbolsMap[i]&&(l="gscope['"+e.globalScope._SymbolsMap[i]+"']")),a+="if ("+r+"===null) {  lastStatement = lc.voidOperation; }\n ",a+="else if (lc.isArray("+r+") || lc.isString("+r+")) {",a+="var "+n+"="+r+".length; \n",a+="for(var "+o+"=0; "+o+"<"+n+"; "+o+"++) {\n",a+=l+"="+o+";\n",a+=T(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (lc.isImmutableArray("+r+")) {",a+="var "+n+"="+r+".length(); \n",a+="for(var "+o+"=0; "+o+"<"+n+"; "+o+"++) {\n",a+=l+"="+o+";\n",a+=T(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (( "+r+" instanceof lang.Dictionary) || ( "+r+" instanceof lang.Feature)) {",a+="var "+n+"="+r+".keys(); \n",a+="for(var "+o+"=0; "+o+"<"+n+".length; "+o+"++) {\n",a+=l+"="+n+"["+o+"];\n",a+=T(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",e.isAsync&&(a+="else if (lc.isFeatureSet("+r+")) {",a+="var "+n+"="+r+".iterator(runtimeCtx.abortSignal); \n",a+="for(var "+o+"=lang. graphicToFeature( yield "+n+".next(),"+r+"); "+o+"!=null; "+o+"=lang. graphicToFeature( yield "+n+".next(),"+r+")) {\n",a+=l+"="+o+";\n",a+=T(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n"),a+="else { lastStatement = lc.voidOperation; } \n",a}function R(e,t){let r="lastStatement = lc.voidOperation; \n";null!==t.init&&(r+=T(e,t.init)+"; ");const n=se(e),o=se(e);return r+="var "+n+" = true; ",r+="\n do { ",null!==t.update&&(r+=" if ("+n+"===false) {\n "+T(e,t.update)+"  \n}\n "+n+"=false; \n"),null!==t.test&&(r+="var "+o+" = "+T(e,t.test)+"; ",r+="if ("+o+"===false) { break; } else if ("+o+"!==true) { lang.error({type: '"+t.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"),r+=T(e,t.body),null!==t.update&&(r+="\n "+T(e,t.update)),r+="\n"+n+" = true; \n} while(true);  lastStatement = lc.voidOperation; ",r}function _(e,t){let r=null,n="";if("MemberExpression"===t.argument.type)return r=T(e,t.argument.object),n=!0===t.argument.computed?T(e,t.argument.property):"'"+t.argument.property.name+"'","lang.memberupdate("+r+","+n+",'"+t.operator+"',"+t.prefix+")";if(r=t.argument.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[r])return"lang.update(lscope, '"+r+"','"+t.operator+"',"+t.prefix+")";if(void 0!==e.localScope._SymbolsMap[r])return"lang.update(lscope, '"+e.localScope._SymbolsMap[r]+"','"+t.operator+"',"+t.prefix+")"}if(void 0!==e.globalScope[r])return"lang.update(gscope, '"+r+"','"+t.operator+"',"+t.prefix+")";if(void 0!==e.globalScope._SymbolsMap[r])return"lang.update(gscope, '"+e.globalScope._SymbolsMap[r]+"','"+t.operator+"',"+t.prefix+")";throw new Error("Variable not recognised")}function U(e,t){const r=T(e,t.right);let n=null,o="";if("MemberExpression"===t.left.type)return n=T(e,t.left.object),o=!0===t.left.computed?T(e,t.left.property):"'"+t.left.property.name+"'","lang.assignmember("+n+","+o+",'"+t.operator+"',"+r+")";if(n=t.left.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[n])return"lscope['"+n+"']=lang.assign("+r+",'"+t.operator+"', lscope['"+n+"'])";if(void 0!==e.localScope._SymbolsMap[n])return"lscope['"+e.localScope._SymbolsMap[n]+"']=lang.assign("+r+",'"+t.operator+"', lscope['"+e.localScope._SymbolsMap[n]+"'])"}if(void 0!==e.globalScope[n])return"gscope['"+n+"']=lang.assign("+r+",'"+t.operator+"', gscope['"+n+"'])";if(void 0!==e.globalScope._SymbolsMap[n])return"gscope['"+e.globalScope._SymbolsMap[n]+"']=lang.assign("+r+",'"+t.operator+"', gscope['"+e.globalScope._SymbolsMap[n]+"'])";throw new Error("Variable not recognised")}function P(e,t){return"AssignmentExpression"===t.expression.type?"lastStatement = lc.voidOperation; "+T(e,t.expression)+"; \n ":(t.expression.type,"lastStatement = "+T(e,t.expression)+"; ")}function k(e,t){return"BlockStatement"===t.type?T(e,t):"ReturnStatement"===t.type||"BreakStatement"===t.type||"ContinueStatement"===t.type?T(e,t)+"; ":"UpdateExpression"===t.type?"lastStatement = "+T(e,t)+"; ":"ExpressionStatement"===t.type?T(e,t):"ObjectExpression"===t.type?"lastStatement = "+T(e,t)+"; ":T(e,t)+"; "}function D(e,t){if("AssignmentExpression"===t.test.type||"UpdateExpression"===t.test.type)throw new Error(c.nodeErrorMessage(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const r=T(e,t.test),n=se(e);let o="var "+n+" = "+r+";\n if ("+n+" === true) {\n"+k(e,t.consequent)+"\n }\n";return null!==t.alternate?o+="else if ("+n+"===false)   { \n"+k(e,t.alternate)+"}\n":o+="else if ("+n+"===false) { \n lastStatement = lc.voidOperation;\n }\n",o+="else { lang.error({type: '"+t.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n",o}function L(e,t){let r="";for(let n=0;n<t.body.length;n++)"ReturnStatement"===t.body[n].type||"BreakStatement"===t.body[n].type||"ContinueStatement"===t.body[n].type?r+=T(e,t.body[n])+"; \n":"UpdateExpression"===t.body[n].type||"ObjectExpression"===t.body[n].type?r+="lastStatement = "+T(e,t.body[n])+"; \n":r+=T(e,t.body[n])+" \n";return r}function j(e,t){if(null===t.argument)return"return lc.voidOperation";return"return "+T(e,t.argument)}function B(e,t){const r=t.id.name.toLowerCase(),n={isAsync:e.isAsync,spatialReference:e.spatialReference,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,services:e.services,symbols:e.symbols,mangleMap:e.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:e.depthCounter+1,globalScope:e.globalScope};if(n.depthCounter>64)throw new Error("Exceeded maximum function depth");let o="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";for(let a=0;a<t.params.length;a++){const r=t.params[a].name.toLowerCase(),i=le(e);n.localScope._SymbolsMap[r]=i,n.mangleMap[r]=i,o+="lscope['"+i+"']=arguments["+a.toString()+"];\n"}if(!0===e.isAsync?(o+="return lang.__awaiter(this, void 0, void 0, function* () {\n",o+=L(n,t.body)+"\n return lastStatement; ",o+="});  }",o+=", runtimeCtx),"+t.params.length+")",o+="\n lastStatement = lc.voidOperation; \n"):(o+=L(n,t.body)+"\n return lastStatement; }, runtimeCtx),"+t.params.length+")",o+="\n lastStatement = lc.voidOperation; \n"),void 0!==e.globalScope[r])return"gscope['"+r+"']="+o;if(void 0!==e.globalScope._SymbolsMap[r])return"gscope['"+e.globalScope._SymbolsMap[r]+"']="+o;{const t=le(e);return e.globalScope._SymbolsMap[r]=t,e.mangleMap[r]=t,"gscope['"+t+"']="+o}}function Y(e,t){const r=[];for(let n=0;n<t.declarations.length;n++)r.push(T(e,t.declarations[n]));return r.join("\n")+" \n lastStatement=  lc.voidOperation; \n"}function V(e,t){let r=null===t.init?null:T(e,t.init);r===s.voidOperation&&(r=null);const n=t.id.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[n])return"lscope['"+n+"']="+r+"; ";if(void 0!==e.localScope._SymbolsMap[n])return"lscope['"+e.localScope._SymbolsMap[n]+"']="+r+"; ";{const t=le(e);return e.localScope._SymbolsMap[n]=t,e.mangleMap[n]=t,"lscope['"+t+"']="+r+"; "}}if(void 0!==e.globalScope[n])return"gscope['"+n+"']="+r+"; ";if(void 0!==e.globalScope._SymbolsMap[n])return"gscope['"+e.globalScope._SymbolsMap[n]+"']="+r+"; ";{const t=le(e);return e.globalScope._SymbolsMap[n]=t,e.mangleMap[n]=t,"gscope['"+t+"']="+r+"; "}}let G=0;function z(e,t,r){let n;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let r=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(r=!1),r&&(G++,e.spatialReference._arcadeCacheId=G,t=G)}const r=new o({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(r._arcadeCacheId="SPREF"+t.toString()),r}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const r=e[t];return void 0!==r?r:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":n=e.cache._arcadeCacheId,void 0===n&&(G++,n=G,e.cache._arcadeCacheId=n);return new i(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,n);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":n=e.cache._arcadeCacheId,void 0===n&&(G++,n=G,e.cache._arcadeCacheId=n);return new i(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,n);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":n=e.cache._arcadeCacheId,void 0===n&&(G++,n=G,e.cache._arcadeCacheId=n);return new l(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,n,1);case"type":return"Multipoint"}}throw new Error(c.nodeErrorMessage(r,"RUNTIME","PROPERTYNOTFOUND"))}function q(e,t){try{let r;return r=!0===t.computed?T(e,t.property):"'"+t.property.name+"'","lang.member("+T(e,t.object)+","+r+")"}catch(r){throw r}}function J(e,t){try{return"lang.unary("+T(e,t.argument)+",'"+t.operator+"')"}catch(r){throw r}}function Z(e,t){try{const r=[];for(let n=0;n<t.elements.length;n++)"Literal"===t.elements[n].type?r.push(T(e,t.elements[n])):r.push("lang.aCheck("+T(e,t.elements[n])+",'ArrayExpression')");return"["+r.join(",")+"]"}catch(r){throw r}}function H(e,t){try{const r=[];let n=0;for(const o of t.quasis)r.push(o.value?JSON.stringify(o.value.cooked):JSON.stringify("")),!1===o.tail&&(r.push(t.expressions[n]?"lang.castString(lang.aCheck("+T(e,t.expressions[n])+", 'TemplateLiteral'))":""),n++);return"(["+r.join(",")+"]).join('')"}catch(r){throw r}}function W(e,t){try{return"lang.binary("+T(e,t.left)+","+T(e,t.right)+",'"+t.operator+"')"}catch(r){throw r}}function K(e,t){try{if("AssignmentExpression"===t.left.type||"UpdateExpression"===t.left.type)throw new Error(c.nodeErrorMessage(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===t.right.type||"UpdateExpression"===t.right.type)throw new Error(c.nodeErrorMessage(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("&&"===t.operator||"||"===t.operator)return"(lang.logicalCheck("+T(e,t.left)+") "+t.operator+" lang.logicalCheck("+T(e,t.right)+"))";throw new Error(c.nodeErrorMessage(t,"RUNTIME","ONLYORORAND"))}catch(r){throw r}}function X(e,t){try{const r=t.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[r])return"lscope['"+r+"']";if(void 0!==e.localScope._SymbolsMap[r])return"lscope['"+e.localScope._SymbolsMap[r]+"']"}if(void 0!==e.globalScope[r])return"gscope['"+r+"']";if(void 0!==e.globalScope._SymbolsMap[r])return"gscope['"+e.globalScope._SymbolsMap[r]+"']";throw new Error(c.nodeErrorMessage(t,"RUNTIME","VARIABLENOTFOUND"))}catch(r){throw r}}function Q(e,t){try{if("Identifier"!==t.callee.type)throw new Error(c.nodeErrorMessage(t,"RUNTIME","ONLYNODESSUPPORTED"));const r=t.callee.name.toLowerCase();let n="";if(null!==e.localScope&&(void 0!==e.localScope[r]?n="lscope['"+r+"']":void 0!==e.localScope._SymbolsMap[r]&&(n="lscope['"+e.localScope._SymbolsMap[r]+"']")),""===n&&(void 0!==e.globalScope[r]?n="gscope['"+r+"']":void 0!==e.globalScope._SymbolsMap[r]&&(n="gscope['"+e.globalScope._SymbolsMap[r]+"']")),""!==n){let r="[";for(let n=0;n<t.arguments.length;n++)n>0&&(r+=", "),r+=T(e,t.arguments[n]);return r+="]",e.isAsync?"(yield lang.callfunc("+n+","+r+",runtimeCtx) )":"lang.callfunc("+n+","+r+",runtimeCtx)"}throw new Error(c.nodeErrorMessage(t,"RUNTIME","NOTFOUND"))}catch(r){throw r}}const $={};function ee(e){return null===e?"":s.isArray(e)||s.isImmutableArray(e)?"Array":s.isDate(e)?"Date":s.isString(e)?"String":s.isBoolean(e)?"Boolean":s.isNumber(e)?"Number":e instanceof n?"Attachment":e instanceof r?"Portal":e instanceof o?"Dictionary":s.isFeature(e)?"Feature":e instanceof w?"Point":e instanceof N?"Polygon":e instanceof v?"Polyline":e instanceof E?"Multipoint":e instanceof b?"Extent":s.isFunctionParameter(e)?"Function":s.isFeatureSet(e)?"FeatureSet":s.isFeatureSetCollection(e)?"FeatureSetCollection":e===s.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function te(e,t,r,n){try{const o=t[r];if(s.equalityTest(o,n))return t[r+1];{const o=t.length-r;return 1===o?t[r]:2===o?null:3===o?t[r+2]:te(e,t,r+2,n)}}catch(o){throw o}}function re(e,t,r,n){try{if(!0===n)return t[r+1];if(3===t.length-r)return t[r+2];{const n=t[r+2];if(!1===s.isBoolean(n))throw new Error("WHEN needs boolean test conditions");return re(e,t,r+2,n)}}catch(o){throw o}}function ne(e,t){const r=e.length,n=Math.floor(r/2);return 0===r?[]:1===r?[e[0]]:oe(ne(e.slice(0,n),t),ne(e.slice(n,r),t),t)}function oe(e,t,r){const n=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=r(e[0],t[0]);isNaN(o)&&(o=0),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(t[0]),t=t.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):t.length>0&&(n.push(t[0]),t=t.slice(1));return n}function ae(e,t){try{const r=e.length,n=Math.floor(r/2);if(0===r)return y.resolve([]);if(1===r)return y.resolve([e[0]]);const o=[ae(e.slice(0,n),t),ae(e.slice(n,r),t)];return y.all(o).then((e=>ie(e[0],e[1],t,[])))}catch(r){return y.reject(r)}}function ie(e,t,r,n){return y.create(((o,a)=>{const i=n;e.length>0||t.length>0?e.length>0&&t.length>0?r(e[0],t[0]).then((l=>{try{isNaN(l)&&(l=1),l<=0?(i.push(e[0]),e=e.slice(1)):(i.push(t[0]),t=t.slice(1)),ie(e,t,r,n).then((e=>{o(e)}),a)}catch(s){a(s)}}),a):e.length>0?(i.push(e[0]),ie(e=e.slice(1),t,r,n).then((e=>{o(e)}),a)):t.length>0&&(i.push(t[0]),t=t.slice(1),ie(e,t,r,n).then((e=>{o(e)}),a)):o(n)}))}function le(e){return e.symbols.symbolCounter++,"_T"+e.symbols.symbolCounter.toString()}function se(e){return e.symbols.symbolCounter++,"_Tvar"+e.symbols.symbolCounter.toString()}p.registerFunctions($,I),d.registerFunctions($,I),m.registerFunctions($,I),f.registerFunctions($,I),h.registerFunctions($,I),$.typeof=function(e,t){return I(e,t,(function(e,t,r){s.pcCheck(r,1,1);const n=ee(r[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},$.iif=function(e,t){try{return I(e,t,(function(e,t,r){if(s.pcCheck(r,3,3),!1===s.isBoolean(r[0]))throw new Error("IF Function must have a boolean test condition");return r[0]?r[1]:r[2]}))}catch(r){throw r}},$.decode=function(e,t){try{return I(e,t,(function(t,r,n){if(n.length<2)throw new Error("Missing Parameters");if(2===n.length)return n[1];{if((n.length-1)%2==0)throw new Error("Must have a default value result.");const t=n[0];return te(e,n,1,t)}}))}catch(r){throw r}},$.when=function(e,t){try{return I(e,t,(function(t,r,n){if(n.length<3)throw new Error("Missing Parameters");if(n.length%2==0)throw new Error("Must have a default value result.");const o=n[0];if(!1===s.isBoolean(o))throw new Error("WHEN needs boolean test conditions");return re(e,n,0,o)}))}catch(r){throw r}},$.top=function(e,t){return I(e,t,(function(e,t,r){if(s.pcCheck(r,2,2),s.isArray(r[0]))return s.toNumber(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,s.toNumber(r[1]));if(s.isImmutableArray(r[0]))return s.toNumber(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,s.toNumber(r[1]));throw new Error("Top cannot accept this parameter type")}))},$.first=function(e,t){return I(e,t,(function(e,t,r){return s.pcCheck(r,1,1),s.isArray(r[0])?0===r[0].length?null:r[0][0]:s.isImmutableArray(r[0])?0===r[0].length()?null:r[0].get(0):null}))},$.sort=function(e,t){return I(e,t,(function(t,r,n){s.pcCheck(n,1,2);let o=n[0];if(s.isImmutableArray(o)&&(o=o.toArray()),!1===s.isArray(o))throw new Error("Illegal Argument");if(n.length>1){if(!1===s.isFunctionParameter(n[1]))throw new Error("Illegal Argument");let r=o;const a=function(e,r){return Me.callfunc(n[1],[e,r],t)};return e.isAsync?ae(r,a):(r=ne(r,(function(e,t){return a(e,t)})),r)}{let e=o;if(0===e.length)return[];const t={};for(let o=0;o<e.length;o++){const r=ee(e[o]);""!==r&&(t[r]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return e.slice(0);let r=0,n="";for(const o in t)r++,n=o;return e=r>1||"String"===n?ne(e,(function(e,t){if(null==e||e===s.voidOperation)return null==t||t===s.voidOperation?0:1;if(null==t||t===s.voidOperation)return-1;const r=s.toString(e),n=s.toString(t);return r<n?-1:r===n?0:1})):"Number"===n?ne(e,(function(e,t){return e-t})):"Boolean"===n?ne(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===n?ne(e,(function(e,t){return t-e})):e.slice(0),e}}))};const ce={};for(const Te in $)ce[Te]=new s.NativeFunction($[Te]);g.registerFunctions($,I);for(const Te in $)$[Te]=new s.NativeFunction($[Te]);const ue=function(){};ue.prototype=$;const pe=function(){};function fe(e,t,r){const n={};e||(e={}),r||(r={}),n._SymbolsMap={},n.textformatting=1,n.infinity=1,n.pi=1;for(const o in t)n[o]=1;for(const o in r)n[o]=1;for(const o in e)n[o]=1;return n}function ge(e,t,r){const n=r?new pe:new ue;e||(e={}),t||(t={});const i=new o({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});i.immutable=!1,n._SymbolsMap={textformatting:1,infinity:1,pi:1},n.textformatting=i,n.infinity=Number.POSITIVE_INFINITY,n.pi=Math.PI;for(const o in t)n[o]=t[o],n._SymbolsMap[o]=1;for(const o in e)n._SymbolsMap[o]=1,e[o]&&"esri.Graphic"===e[o].declaredClass?n[o]=a.createFromGraphic(e[o]):n[o]=e[o];return n}pe.prototype=ce;const me={fixSpatialReference:s.fixSpatialReference,parseArguments:O,standardFunction:I};function he(e,t){const r={mode:t,compiled:!0,functions:{},signatures:[],failDefferred:x,standardFunction:I,standardFunctionAsync:I,evaluateIdentifier:Ne};for(let n=0;n<e.length;n++)e[n].registerFunctions(r);if("sync"===t){for(const e in r.functions)$[e]=new s.NativeFunction(r.functions[e]),ue.prototype[e]=$[e];for(let e=0;e<r.signatures.length;e++)c.addFunctionDeclaration(r.signatures[e],"sync")}else{for(const e in r.functions)ce[e]=new s.NativeFunction(r.functions[e]),pe.prototype[e]=ce[e];for(let e=0;e<r.signatures.length;e++)c.addFunctionDeclaration(r.signatures[e],"async")}}function de(e,t){return e(t)}function ye(e,t){return c.findFieldLiterals(e)}function be(e){return c.findExpectedFieldLiterals(e)}function Se(e,t){return c.validateScript(e,t,"sync")}function Ee(e,t){return c.referencesMember(e,t)}function we(e,t){return c.referencesFunction(e,t)}function Ne(e,t){const r=t.name;if("_SymbolsMap"===r)throw"Illegal";if(e.localStack.length>0){if("_t"!==r.substr(0,2).toLowerCase()&&void 0!==e.localStack[e.localStack.length-1][r])return e.localStack[e.localStack.length-1][r];const t=e.mangleMap[r];if(void 0!==t&&void 0!==e.localStack[e.localStack.length-1][t])return e.localStack[e.localStack.length-1][t]}if("_t"!==r.substr(0,2).toLowerCase()&&void 0!==e.globalScope[r])return e.globalScope[r];if(1===e.globalScope._SymbolsMap[r])return e.globalScope[r];const n=e.mangleMap[r];return void 0!==n?e.globalScope[n]:void 0}he([u.ArrayFunctions],"sync"),he([u.ArrayFunctions],"async");let ve=0;const Me={error(e,t,r){throw new Error(c.nodeErrorMessage(e,t,r))},__awaiter:(e,t,r,n)=>y.create(((r,o)=>{function a(e){try{l(n.next(e))}catch(t){o(t)}}function i(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){e.done?r(e.value):e.value&&e.value.then?e.value.then(a,i):(ve++,ve%100==0?setTimeout((()=>{ve=0,a(e.value)}),0):a(e.value))}l((n=n.apply(e,t||[])).next())})),functionDepthchecker:(e,t)=>function(){if(t.depthCounter++,t.localStack.push([]),t.depthCounter>64)throw new Error("Exceeded maximum function depth");const r=e.apply(this,arguments);return y.isPromiseLike(r)?r.then((e=>(t.depthCounter--,t.localStack.length=t.localStack.length-1,e))):(t.depthCounter--,t.localStack.length=t.localStack.length-1,r)},castString:e=>s.toString(e),aCheck(e,t){if(s.isFunctionParameter(e))throw new Error(c.nodeErrorMessage({type:t},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return e===s.voidOperation?null:e},Dictionary:o,Feature:a,dictionary(e){const t={};for(let n=0;n<e.length;n+=2){if(s.isFunctionParameter(e[n+1]))throw new Error("Illegal Argument");if(!1===s.isString(e[n]))throw new Error("Illegal Argument");e[n+1]===s.voidOperation?t[e[n].toString()]=null:t[e[n].toString()]=e[n+1]}const r=new o(t);return r.immutable=!1,r},strCheck(e){if(!1===s.isString(e))throw new Error("Illegal Argument");return e},unary(e,t){if(s.isBoolean(e)){if("!"===t)return!e;if("-"===t)return-1*s.toNumber(e);if("+"===t)return 1*s.toNumber(e);if("~"===t)return~s.toNumber(e);const r={type:"UnaryExpression",operator:t,prefix:null,argument:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("-"===t)return-1*s.toNumber(e);if("+"===t)return 1*s.toNumber(e);if("~"===t)return~s.toNumber(e);const r={type:"UnaryExpression",operator:t,prefix:null,argument:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))},logicalCheck(e){if(!1===s.isBoolean(e)){const e={type:"LogicalExpression",operator:null,left:null,right:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","ONLYORORAND"))}return e},logical(e,t,r){if(s.isBoolean(e)&&s.isBoolean(t))switch(r){case"||":return e||t;case"&&":return e&&t;default:{const e={type:"LogicalExpression",operator:null,left:null,right:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","ONLYORORAND"))}}const n={type:"LogicalExpression",operator:null,left:null,right:null};throw new Error(c.nodeErrorMessage(n,"RUNTIME","ONLYORORAND"))},binary(e,t,r){switch(r){case"|":case"<<":case">>":case">>>":case"^":case"&":return s.binaryOperator(s.toNumber(e),s.toNumber(t),r);case"==":case"=":return s.equalityTest(e,t);case"!=":return!s.equalityTest(e,t);case"<":case">":case"<=":case">=":return s.greaterThanLessThan(e,t,r);case"+":return s.isString(e)||s.isString(t)?s.toString(e)+s.toString(t):s.toNumber(e)+s.toNumber(t);case"-":return s.toNumber(e)-s.toNumber(t);case"*":return s.toNumber(e)*s.toNumber(t);case"/":return s.toNumber(e)/s.toNumber(t);case"%":return s.toNumber(e)%s.toNumber(t);default:{const n={type:"BinaryExpression",operator:r,left:e,right:t};throw new Error(c.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}},assign(e,t,r){switch(t){case"=":return e===s.voidOperation?null:e;case"/=":return s.toNumber(r)/s.toNumber(e);case"*=":return s.toNumber(r)*s.toNumber(e);case"-=":return s.toNumber(r)-s.toNumber(e);case"+=":return s.isString(r)||s.isString(e)?s.toString(r)+s.toString(e):s.toNumber(r)+s.toNumber(e);case"%=":return s.toNumber(r)%s.toNumber(e);default:{const e={type:"AssignmentExpression",operator:t,left:null,right:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","OPERATORNOTRECOGNISED"))}}},update(e,t,r,n){const o=s.toNumber(e[t]);return e[t]="++"===r?o+1:o-1,!1===n?o:"++"===r?o+1:o-1},graphicToFeature:(e,t)=>null===e?null:a.createFromGraphicLikeObject(e.geometry,e.attributes,t),memberupdate(e,t,r,n){let a;if(s.isArray(e)){if(!s.isNumber(t))throw new Error("Invalid Parameter");if(t<0&&(t=e.length+t),t<0||t>=e.length)throw new Error("Assignment outside of array bounds");a=s.toNumber(e[t]),e[t]="++"===r?a+1:a-1}else if(e instanceof o){if(!1===s.isString(t))throw new Error("Dictionary accessor must be a string");if(!0!==e.hasField(t))throw new Error("Invalid Parameter");a=s.toNumber(e.field(t)),e.setField(t,"++"===r?a+1:a-1)}else{if(!s.isFeature(e))throw s.isImmutableArray(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(t))throw new Error("Feature accessor must be a string");if(!0!==e.hasField(t))throw new Error("Invalid Parameter");a=s.toNumber(e.field(t)),e.setField(t,"++"===r?a+1:a-1)}return!1===n?a:"++"===r?a+1:a-1},assignmember(e,t,r,n){if(s.isArray(e)){if(!s.isNumber(t))throw new Error("Invalid Parameter");if(t<0&&(t=e.length+t),t<0||t>e.length)throw new Error("Assignment outside of array bounds");if(t===e.length){if("="!==r)throw new Error("Invalid Parameter");e[t]=this.assign(n,r,e[t])}else e[t]=this.assign(n,r,e[t])}else if(e instanceof o){if(!1===s.isString(t))throw new Error("Dictionary accessor must be a string");if(!0===e.hasField(t))e.setField(t,this.assign(n,r,e.field(t)));else{if("="!==r)throw new Error("Invalid Parameter");e.setField(t,this.assign(n,r,null))}}else{if(!s.isFeature(e))throw s.isImmutableArray(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(t))throw new Error("Feature accessor must be a string");if(!0===e.hasField(t))e.setField(t,this.assign(n,r,e.field(t)));else{if("="!==r)throw new Error("Invalid Parameter");e.setField(t,this.assign(n,r,null))}}},member(e,t){if(null===e){const e={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","NOTFOUND"))}if(e instanceof o||s.isFeature(e)){if(s.isString(t))return e.field(t);const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(e instanceof S){if(s.isString(t))return z(e,t,"MemberExpression");const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(s.isArray(e)){if(s.isNumber(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length+t),t>=e.length||t<0){const e={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","OUTOFBOUNDS"))}return e[t]}const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(s.isString(e)){if(s.isNumber(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length+t),t>=e.length||t<0){const e={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","OUTOFBOUNDS"))}return e[t]}const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(s.isImmutableArray(e)){if(s.isNumber(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length()+t),t>=e.length()||t<0){const e={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(e,"RUNTIME","OUTOFBOUNDS"))}return e.get(t)}const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}const r={type:"MemberExpression",object:null,property:null,computed:null};throw new Error(c.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))},callfunc(e,t,r){return e instanceof s.NativeFunction?e.fn(r,{arguments:t,preparsed:!0}):e instanceof s.SizzleFunction?e.fn.apply(this,t):e.apply(this,t)}};function Oe(e){console.log(e)}function Ie(e,t=null,r=!1){null===t&&(t={vars:{},customfunctions:{}});const n={isAsync:r,globalScope:fe(t.vars,r?ce:$,t.customfunctions),localScope:null,mangleMap:{},console:Oe,lrucache:t.lrucache,interceptor:t.interceptor,services:t.services,symbols:{symbolCounter:0}};let o=T(n,e.body[0].body);""===o&&(o="lc.voidOperation; ");let a="";a=r?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+o+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+o+"\n return lastStatement; } \n return this.postProcess(mainBody()); ";const i={lc:s.lc,lang:Me,mangles:n.mangleMap,postProcess(e){if(e instanceof s.ReturnResult&&(e=e.value),e instanceof s.ImplicitResult&&(e=e.value),e===s.voidOperation&&(e=null),e===s.breakResult)throw new Error("Cannot return BREAK");if(e===s.continueResult)throw new Error("Cannot return CONTINUE");if(s.isFunctionParameter(e))throw new Error("Cannot return FUNCTION");return e},prepare(e,t){let r=e.spatialReference;null==r&&(r=new M({wkid:102100}));const n=ge(e.vars,e.customfunctions,t);return{localStack:[],isAsync:t,mangleMap:this.mangles,spatialReference:r,globalScope:n,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console?e.console:Oe,lrucache:e.lrucache,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:1}}};return new Function("context","spatialReference",a).bind(i)}function xe(){return new Promise(((t,r)=>e(["./functions/geomasync"],t,r))).then((e=>(he([e],"async"),!0)))}t.compileScript=Ie,t.enableAsyncSupport=xe,t.executeScript=de,t.extend=he,t.extractExpectedFieldLiterals=be,t.extractFieldLiterals=ye,t.functionHelper=me,t.referencesFunction=we,t.referencesMember=Ee,t.validateScript=Se,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));