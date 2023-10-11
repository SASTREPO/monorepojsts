/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./bidiEngineTables"],(function(t){"use strict";let r=function(){function t(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}var r=t.prototype;return r.bidiTransform=function(t,r,n){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(w(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(r,n))return t;r=this.inputFormat,n=this.outputFormat;let i=t;const a=y,u=R(r.charAt(1)),l=R(n.charAt(1)),f=("I"===r.charAt(0)?"L":r.charAt(0))+u,c=("I"===n.charAt(0)?"L":n.charAt(0))+l,T=r.charAt(2)+n.charAt(2);a.defInFormat=f,a.defOutFormat=c,a.defSwap=T;const A=e(t,f,c,T,a);let h=!1;return"R"===n.charAt(1)?h=!0:"C"!==n.charAt(1)&&"D"!==n.charAt(1)||(h="rtl"===this.checkContextual(A)),this.sourceToTarget=C,this.targetToSource=v(this.sourceToTarget),V=this.targetToSource,i=r.charAt(3)===n.charAt(3)?A:"S"===n.charAt(3)?o(h,A,!0):s(A,h,!0),this.sourceToTarget=C,this.targetToSource=V,this.levels=I,i},r._inputFormatSetter=function(t){if(!P.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t},r._outputFormatSetter=function(t){if(!P.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t},r.checkParameters=function(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r},r.checkContextual=function(t){let r=a(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(e){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r},r.hasBidiChar=function(t){return Y.test(t)},t}();function e(t,r,o,i,a){const u=n(t,{inFormat:r,outFormat:o,swap:i},a);if(u.inFormat===u.outFormat)return t;r=u.inFormat,o=u.outFormat,i=u.swap;const s=r.substring(0,1),f=r.substring(1,4),c=o.substring(0,1),T=o.substring(1,4);if(a.inFormat=r,a.outFormat=o,a.swap=i,"L"===s&&"VLTR"===o){if("LTR"===f)return a.dir=k,l(t,a);if("RTL"===f)return a.dir=x,l(t,a)}if("V"===s&&"V"===c)return a.dir="RTL"===f?x:k,h(t,a);if("L"===s&&"VRTL"===o)return"LTR"===f?(a.dir=k,t=l(t,a)):(a.dir=x,t=l(t,a)),h(t);if("VLTR"===r&&"LLTR"===o)return a.dir=k,l(t,a);if("V"===s&&"L"===c&&f!==T)return t=h(t),"RTL"===f?e(t,"LLTR","VLTR",i,a):e(t,"LRTL","VRTL",i,a);if("VRTL"===r&&"LRTL"===o)return e(t,"LRTL","VRTL",i,a);if("L"===s&&"L"===c){const r=a.swap;return a.swap=r.substr(0,1)+"N","RTL"===f?(a.dir=x,t=l(t,a),a.swap="N"+r.substr(1,2),a.dir=k,t=l(t,a)):(a.dir=k,t=l(t,a),a.swap="N"+r.substr(1,2),t=e(t,"VLTR","LRTL",a.swap,a)),t}return t}function n(t,r,e){if(void 0===r.inFormat&&(r.inFormat=e.defInFormat),void 0===r.outFormat&&(r.outFormat=e.defOutFormat),void 0===r.swap&&(r.swap=e.defSwap),r.inFormat===r.outFormat)return r;const n=r.inFormat.substring(0,1),o=r.outFormat.substring(0,1);let i,s=r.inFormat.substring(1,4),l=r.outFormat.substring(1,4);return"C"===s.charAt(0)&&(i=a(t),s="ltr"===i||"rtl"===i?i.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=n+s),"C"===l.charAt(0)&&(i=a(t),"rtl"===i?l="RTL":"ltr"===i?(i=u(t),l=i.toUpperCase()):l="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=o+l),r}function o(t,r,e){if(0===r.length)return"";void 0===t&&(t=!0),void 0===e&&(e=!0);const n=(r=String(r)).split("");let o=0,a=1,u=n.length;t||(o=n.length-1,a=-1,u=1);const s=i(n,o,a,u,e);let l="";for(let i=0;i<n.length;i++)e&&B(s,s.length,i)>-1?(O(V,i,!t,-1),C.splice(i,1)):l+=n[i];return l}function i(r,e,n,o,i){let a=0;const u=[];let s=0;for(let l=e;l*n<o;l+=n)if(U(r[l])||p(r[l])){if("ل"===r[l]&&_(r,l+n,n,o)){r[l]=E(r[l+n],0===a?t.LamAlefInialTableFE:t.LamAlefMedialTableFE),l+=n,S(r,l,n,o),i&&(u[s]=l,s++),a=0;continue}const e=r[l];1===a?r[l]=L(r,l+n,n,o)?F(r[l]):N(r[l],t.FinalForm):!0===L(r,l+n,n,o)?r[l]=N(r[l],t.InitialForm):r[l]=N(r[l],t.IsolatedForm),p(e)||(a=1),!0===d(e)&&(a=0)}else a=0;return u}function a(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function u(t){const r=t.split("");return r.reverse(),a(r.join(""))}function s(r,e,n){if(0===r.length)return"";void 0===n&&(n=!0),void 0===e&&(e=!0);let o="";const i=(r=String(r)).split("");for(let a=0;a<r.length;a++){let u=!1;if(i[a]>="ﹰ"&&i[a]<"\ufeff"){const s=r.charCodeAt(a);i[a]>="ﻵ"&&i[a]<="ﻼ"?(e?(a>0&&n&&" "===i[a-1]?o=o.substring(0,o.length-1)+"ل":(o+="ل",u=!0),o+=t.AlefTable[(s-65269)/2]):(o+=t.AlefTable[(s-65269)/2],o+="ل",a+1<r.length&&n&&" "===i[a+1]?a++:u=!0),u&&(O(V,a,!0,1),C.splice(a,0,C[a]))):o+=t.FETo06Table[s-65136]}else o+=i[a]}return o}function l(t,r){const e=t.split(""),n=[];return f(e,n,r),T(e,n,r),b(2,e,n,r),b(1,e,n,r),I=n,e.join("")}function f(r,e,n){const o=r.length,i=n.dir?t.impTabRtl:t.impTabLtr;let a=0,u=-1;const s=[],l=[];n.hiLevel=n.dir,n.lastArabic=!1,n.hasUbatAl=!1,n.hasUbatB=!1,n.hasUbatS=!1;for(let t=0;t<o;t++)s[t]=A(r[t]);for(let f=0;f<o;f++){const o=a,c=m(r,s,l,f,n);l[f]=c,a=i[o][c];const T=240&a;a&=15;const A=i[a][M];if(e[f]=A,T>0)if(16===T){for(let t=u;t<f;t++)e[t]=1;u=-1}else u=-1;if(i[a][j])-1===u&&(u=f);else if(u>-1){for(let t=u;t<f;t++)e[t]=A;u=-1}s[f]===t.UBAT_B&&(e[f]=0),n.hiLevel|=A}n.hasUbatS&&c(s,e,o,n)}function c(r,e,n,o){for(let i=0;i<n;i++)if(r[i]===t.UBAT_S){e[i]=o.dir;for(let n=i-1;n>=0&&r[n]===t.UBAT_WS;n--)e[n]=o.dir}}function T(t,r,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(let n=0;n<t.length;n++)1===r[n]&&(t[n]=g(t[n]))}function A(r){const e=r.charCodeAt(0),n=t.PrimaryTable[e>>8];return n<t.TBBASE?n:t.UnicodeTable[n-t.TBBASE][255&e]}function h(t,r){const e=t.split("");if(r){const t=[];f(e,t,r),I=t}return e.reverse(),C.reverse(),e.join("")}function B(t,r,e){for(let n=0;n<r;n++)if(t[n]===e)return n;return-1}function U(r){for(let e=0;e<t.ArabicAlefBetIntervalsBegine.length;e++)if(r>=t.ArabicAlefBetIntervalsBegine[e]&&r<=t.ArabicAlefBetIntervalsEnd[e])return!0;return!1}function L(t,r,e,n){for(;r*e<n&&p(t[r]);)r+=e;return!!(r*e<n&&U(t[r]))}function _(r,e,n,o){for(;e*n<o&&p(r[e]);)e+=n;let i=" ";if(!(e*n<o))return!1;i=r[e];for(let a=0;a<t.AlefTable.length;a++)if(t.AlefTable[a]===i)return!0;return!1}function b(t,r,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===x&&!n.hasUbatB)return r.reverse(),void C.reverse();const o=r.length;let i,a,u,s,l,f=0;for(;f<o;){if(e[f]>=t){for(i=f+1;i<o&&e[i]>=t;)i++;for(a=f,u=i-1;a<u;a++,u--)s=r[a],r[a]=r[u],r[u]=s,l=C[a],C[a]=C[u],C[u]=l;f=i}f++}}function m(r,e,n,o,i){const a=e[o];return{UBAT_L:()=>(i.lastArabic=!1,t.UBAT_L),UBAT_R:()=>(i.lastArabic=!1,t.UBAT_R),UBAT_ON:()=>t.UBAT_ON,UBAT_AN:()=>t.UBAT_AN,UBAT_EN:()=>i.lastArabic?t.UBAT_AN:t.UBAT_EN,UBAT_AL:()=>(i.lastArabic=!0,i.hasUbatAl=!0,t.UBAT_R),UBAT_WS:()=>t.UBAT_ON,UBAT_CS:()=>{let r,a;return o<1||o+1>=e.length||(r=n[o-1])!==t.UBAT_EN&&r!==t.UBAT_AN||(a=e[o+1])!==t.UBAT_EN&&a!==t.UBAT_AN?t.UBAT_ON:(i.lastArabic&&(a=t.UBAT_AN),a===r?a:t.UBAT_ON)},UBAT_ES:()=>(o>0?n[o-1]:t.UBAT_B)===t.UBAT_EN&&o+1<e.length&&e[o+1]===t.UBAT_EN?t.UBAT_EN:t.UBAT_ON,UBAT_ET:()=>{if(o>0&&n[o-1]===t.UBAT_EN)return t.UBAT_EN;if(i.lastArabic)return t.UBAT_ON;let r=o+1;const a=e.length;for(;r<a&&e[r]===t.UBAT_ET;)r++;return r<a&&e[r]===t.UBAT_EN?t.UBAT_EN:t.UBAT_ON},UBAT_NSM:()=>{if("VLTR"===i.inFormat){const n=e.length;let i=o+1;for(;i<n&&e[i]===t.UBAT_NSM;)i++;if(i<n){const n=r[o].charCodeAt[0],a=n>=1425&&n<=2303||64286===n,u=e[i];if(a&&(u===t.UBAT_R||u===t.UBAT_AL))return t.UBAT_R}}return o<1||e[o-1]===t.UBAT_B?t.UBAT_ON:n[o-1]},UBAT_B:()=>(i.lastArabic=!0,i.hasUbatB=!0,i.dir),UBAT_S:()=>(i.hasUbatS=!0,t.UBAT_ON),UBAT_LRE:()=>(i.lastArabic=!1,t.UBAT_ON),UBAT_RLE:()=>(i.lastArabic=!1,t.UBAT_ON),UBAT_LRO:()=>(i.lastArabic=!1,t.UBAT_ON),UBAT_RLO:()=>(i.lastArabic=!1,t.UBAT_ON),UBAT_PDF:()=>(i.lastArabic=!1,t.UBAT_ON),UBAT_BN:()=>t.UBAT_ON}[t.TYPES_NAMES[a]]()}function g(r){let e,n=0,o=t.SwapTable.length-1;for(;n<=o;)if(e=Math.floor((n+o)/2),r<t.SwapTable[e][0])o=e-1;else{if(!(r>t.SwapTable[e][0]))return t.SwapTable[e][1];n=e+1}return r}function d(r){for(let e=0;e<t.StandAlonForm.length;e++)if(t.StandAlonForm[e]===r)return!0;return!1}function F(r){for(let e=0;e<t.BaseForm.length;e++)if(r===t.BaseForm[e])return t.MedialForm[e];return r}function N(r,e){for(let n=0;n<t.BaseForm.length;n++)if(r===t.BaseForm[n])return e[n];return r}function p(t){return t>="ً"&&t<="ٕ"}function R(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function S(t,r,e,n){for(;r*e<n&&p(t[r]);)r+=e;return r*e<n&&(t[r]=" ",!0)}function E(r,e){for(let n=0;n<t.AlefTable.length;n++)if(r===t.AlefTable[n])return e[n];return r}function w(t,r,e){C=[],I=[];for(let n=0;n<e;n++)t[n]=n,r[n]=n,C[n]=n}function v(t){const r=new Array(t.length);for(let e=0;e<t.length;e++)r[t[e]]=e;return r}function O(t,r,e,n){for(let o=0;o<t.length;o++)(t[o]>r||!e&&t[o]===r)&&(t[o]+=n)}let C=[],V=[],I=[];const y={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},M=5,j=6,k=0,x=1,P=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,Y=/[\u0591-\u06ff\ufb1d-\ufefc]/;return r}));