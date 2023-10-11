/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../Color","../../../../../core/colorUtils","../../../unitBezier","../GeometryUtils","./types","../../webgl/Geometry"],(function(t,e,r,n,o,i,a,s){"use strict";let u=function(){function t(t){this.parent=t,this.vars={}}var e=t.prototype;return e.add=function(t,e){this.vars[t]=e},e.get=function(t){return this.vars[t]?this.vars[t]:this.parent?this.parent.get(t):null},t}(),l=function(){function t(){this.type=a.ValueType}return t.parse=function(e){if(e.length>1)throw new Error('"id" does not expect arguments');return new t},t.prototype.evaluate=function(t,e){return null==t?void 0:t.id},t}(),p=function(){function t(){this.type=a.StringType}return t.parse=function(e){if(e.length>1)throw new Error('"geometry-type" does not expect arguments');return new t},t.prototype.evaluate=function(t,e){if(!t)return null;switch(t.type){case s.GeometryType.Point:return"Point";case s.GeometryType.LineString:return"LineString";case s.GeometryType.Polygon:return"Polygon";default:return null}},t}(),c=function(){function t(){this.type=a.ObjectType}return t.parse=function(e){if(e.length>1)throw new Error('"properties" does not expect arguments');return new t},t.prototype.evaluate=function(t,e){return null==t?void 0:t.values},t}(),h=function(){function t(){this.type=a.NumberType}return t.parse=function(e){if(e.length>1)throw new Error('"zoom" does not expect arguments');return new t},t.prototype.evaluate=function(t,e){return e},t}(),f=function(){function t(t,e,r){this.lhs=t,this.rhs=e,this.compare=r,this.type=a.BooleanType}return t.parse=function(e,r,n){if(3!==e.length&&4!==e.length)throw new Error(`"${e[0]}" expects 2 or 3 arguments`);if(4===e.length)throw new Error(`"${e[0]}" collator not supported`);return new t(rt(e[1],r),rt(e[2],r),n)},t.prototype.evaluate=function(t,e){return this.compare(this.lhs.evaluate(t,e),this.rhs.evaluate(t,e))},t}(),g=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t===e))},r}(f),y=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t!==e))},r}(f),w=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t<e))},r}(f),m=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t<=e))},r}(f),b=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t>e))},r}(f),v=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return f.parse(t,e,((t,e)=>t>=e))},r}(f),d=function(){function t(t){this.arg=t,this.type=a.BooleanType}return t.parse=function(e,r){if(2!==e.length)throw new Error('"!" expects 1 argument');return new t(rt(e[1],r))},t.prototype.evaluate=function(t,e){return!this.arg.evaluate(t,e)},t}(),E=function(){function t(t){this.args=t,this.type=a.BooleanType}return t.parse=function(e,r){const n=[];for(let t=1;t<e.length;t++)n.push(rt(e[t],r));return new t(n)},t.prototype.evaluate=function(t,e){for(const r of this.args)if(!r.evaluate(t,e))return!1;return!0},t}(),T=function(){function t(t){this.args=t,this.type=a.BooleanType}return t.parse=function(e,r){const n=[];for(let t=1;t<e.length;t++)n.push(rt(e[t],r));return new t(n)},t.prototype.evaluate=function(t,e){for(const r of this.args)if(r.evaluate(t,e))return!0;return!1},t}(),x=function(){function t(t){this.args=t,this.type=a.BooleanType}return t.parse=function(e,r){const n=[];for(let t=1;t<e.length;t++)n.push(rt(e[t],r));return new t(n)},t.prototype.evaluate=function(t,e){for(const r of this.args)if(r.evaluate(t,e))return!1;return!0},t}(),N=function(){function t(t,e,r){this.type=t,this.args=e,this.fallback=r}return t.parse=function(e,r,n){if(e.length<4)throw new Error('"case" expects at least 3 arguments');if(e.length%2==1)throw new Error('"case" expects an odd number of arguments');let o;const i=[];for(let t=1;t<e.length-1;t+=2){const a=rt(e[t],r),s=rt(e[t+1],r,n);o||(o=s.type),i.push({condition:a,output:s})}const a=rt(e[e.length-1],r,n);return o||(o=a.type),new t(o,i,a)},t.prototype.evaluate=function(t,e){for(const r of this.args)if(r.condition.evaluate(t,e))return r.output.evaluate(t,e);return this.fallback.evaluate(t,e)},t}(),M=function(){function t(t,e){this.type=t,this.args=e}return t.parse=function(e,r){if(e.length<2)throw new Error('"coalesce" expects at least 1 argument');let n;const o=[];for(let t=1;t<e.length;t++){const i=rt(e[t],r);n||(n=i.type),o.push(i)}return new t(n,o)},t.prototype.evaluate=function(t,e){for(const r of this.args){const n=r.evaluate(t,e);if(null!==n)return n}return null},t}(),L=function(){function t(t,e,r,n,o){this.type=t,this.input=e,this.labels=r,this.outputs=n,this.fallback=o}return t.parse=function(e,r){if(e.length<3)throw new Error('"match" expects at least 3 arguments');if(e.length%2==0)throw new Error('"case" expects an even number of arguments');let n;const o=rt(e[1],r),i=[],a={};let s;for(let t=2;t<e.length-1;t+=2){let o=e[t];Array.isArray(o)||(o=[o]);for(const t of o){const e=typeof t;if("string"!==e&&"number"!==e)throw new Error('"match" requires string or number literal as labels');if(s){if(e!==s)throw new Error('"match" requires labels to have the same type')}else s=e;a[t]=i.length}const u=rt(e[t+1],r);n||(n=u.type),i.push(u)}return new t(n,o,a,i,rt(e[e.length-1],r))},t.prototype.evaluate=function(t,e){const r=this.input.evaluate(t,e);return(this.outputs[this.labels[r]]||this.fallback).evaluate(t,e)},t}(),$=function(){function t(t,e,r,n,o){this.operator=t,this.type=e,this.interpolation=r,this.input=n,this.stops=o}t.parse=function(e,r,n){const o=e[0];if(e.length<5)throw new Error(`"${o}" expects at least 4 arguments`);const i=e[1];if(!Array.isArray(i)||0===i.length)throw new Error(`"${i}" is not a valid interpolation`);switch(i[0]){case"linear":if(1!==i.length)throw new Error("Linear interpolation cannot have parameters");break;case"exponential":if(2!==i.length||"number"!=typeof i[1])throw new Error("Exponential interpolation requires one numeric argument");break;case"cubic-bezier":if(5!==i.length)throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");for(let t=1;t<5;t++){const e=i[t];if("number"!=typeof e||e<0||e>1)throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1")}break;default:throw new Error(`"${e[0]}" unknown interpolation type "${i[0]}"`)}if(e.length%2!=1)throw new Error(`"${o}" expects an even number of arguments`);const s=rt(e[2],r,a.NumberType);let u;"interpolate-hcl"===o||"interpolate-lab"===o?u=a.ColorType:n&&"value"!==n.kind&&(u=n);const l=[];for(let t=3;t<e.length;t+=2){const n=e[t];if("number"!=typeof n)throw new Error(`"${o}" requires stop inputs as literal numbers`);if(l.length&&l[l.length-1][0]>=n)throw new Error(`"${o}" requires strictly ascending stop inputs`);const i=rt(e[t+1],r,u);u||(u=i.type),l.push([n,i])}if(u&&u!==a.ColorType&&u!==a.NumberType&&("array"!==u.kind||u.itemType!==a.NumberType))throw new Error(`"${o}" cannot interpolate type ${a.typeToString(u)}`);return new t(o,u,i,s,l)};var e=t.prototype;return e.evaluate=function(e,o){const s=this.stops;if(1===s.length)return s[0][1].evaluate(e,o);const u=this.input.evaluate(e,o);if(u<=s[0][0])return s[0][1].evaluate(e,o);if(u>=s[s.length-1][0])return s[s.length-1][1].evaluate(e,o);let l=0;for(;++l<s.length&&!(u<s[l][0]););const p=s[l-1][0],c=s[l][0],h=t.interpolationRatio(this.interpolation,u,p,c),f=s[l-1][1].evaluate(e,o),g=s[l][1].evaluate(e,o);if("interpolate"===this.operator){if("array"===this.type.kind&&Array.isArray(f)&&Array.isArray(g))return f.map(((t,e)=>i.interpolate(t,g[e],h)));if("color"===this.type.kind&&f instanceof r&&g instanceof r){const t=new r(f),e=new r(g);return new r([i.interpolate(t.r,e.r,h),i.interpolate(t.g,e.g,h),i.interpolate(t.b,e.b,h),i.interpolate(t.a,e.a,h)])}if("number"===this.type.kind&&"number"==typeof f&&"number"==typeof g)return i.interpolate(f,g,h);throw new Error(`"${this.operator}" cannot interpolate type ${a.typeToString(this.type)}`)}if("interpolate-hcl"===this.operator){const t=n.toLCH(f),e=n.toLCH(g),o=e.h-t.h,a=n.toRGB({h:t.h+h*(o>180||o<-180?o-360*Math.round(o/360):o),c:i.interpolate(t.c,e.c,h),l:i.interpolate(t.l,e.l,h)});return new r({a:i.interpolate(f.a,g.a,h),...a})}if("interpolate-lab"===this.operator){const t=n.toLAB(f),e=n.toLAB(g),o=n.toRGB({l:i.interpolate(t.l,e.l,h),a:i.interpolate(t.a,e.a,h),b:i.interpolate(t.b,e.b,h)});return new r({a:i.interpolate(f.a,g.a,h),...o})}throw new Error(`Unexpected operator "${this.operator}"`)},e.interpolationUniformValue=function(e,r){const n=this.stops;if(1===n.length)return 0;if(e>=n[n.length-1][0])return 0;let o=0;for(;++o<n.length&&!(e<n[o][0]););const i=n[o-1][0],a=n[o][0];return t.interpolationRatio(this.interpolation,r,i,a)},e.getInterpolationRange=function(t){const e=this.stops;if(1===e.length){const t=e[0][0];return[t,t]}const r=e[e.length-1][0];if(t>=r)return[r,r];let n=0;for(;++n<e.length&&!(t<e[n][0]););return[e[n-1][0],e[n][0]]},t.interpolationRatio=function(e,r,n,i){let a=0;if("linear"===e[0])a=t._exponentialInterpolationRatio(r,1,n,i);else if("exponential"===e[0])a=t._exponentialInterpolationRatio(r,e[1],n,i);else if("cubic-bezier"===e[0]){a=o.unitBezier(e[1],e[2],e[3],e[4])(t._exponentialInterpolationRatio(r,1,n,i),1e-5)}return a<0?a=0:a>1&&(a=1),a},t._exponentialInterpolationRatio=function(t,e,r,n){const o=n-r;if(0===o)return 0;const i=t-r;return 1===e?i/o:(e**i-1)/(e**o-1)},t}(),k=function(){function t(t,e,r){this.type=t,this.input=e,this.stops=r}return t.parse=function(e,r){if(e.length<5)throw new Error('"step" expects at least 4 arguments');if(e.length%2!=1)throw new Error('"step" expects an even number of arguments');const n=rt(e[1],r,a.NumberType);let o;const i=[];i.push([-1/0,rt(e[2],r)]);for(let t=3;t<e.length;t+=2){const n=e[t];if("number"!=typeof n)throw new Error('"step" requires stop inputs as literal numbers');if(i.length&&i[i.length-1][0]>=n)throw new Error('"step" requires strictly ascending stop inputs');const a=rt(e[t+1],r);o||(o=a.type),i.push([n,a])}return new t(o,n,i)},t.prototype.evaluate=function(t,e){const r=this.stops;if(1===r.length)return r[0][1].evaluate(t,e);const n=this.input.evaluate(t,e);let o=0;for(;++o<r.length&&!(n<r[o][0]););return this.stops[o-1][1].evaluate(t,e)},t}(),_=function(){function t(t,e){this.type=t,this.output=e}return t.parse=function(e,r,n){if(e.length<4)throw new Error('"let" expects at least 3 arguments');if(e.length%2==1)throw new Error('"let" expects an odd number of arguments');const o=new u(r);for(let t=1;t<e.length-1;t+=2){const n=e[t];if("string"!=typeof n)throw new Error(`"let" requires a string to define variable names - found ${n}`);o.add(n,rt(e[t+1],r))}const i=rt(e[e.length-1],o,n);return new t(i.type,i)},t.prototype.evaluate=function(t,e){return this.output.evaluate(t,e)},t}(),S=function(){function t(t,e){this.type=t,this.output=e}return t.parse=function(e,r,n){if(2!==e.length||"string"!=typeof e[1])throw new Error('"var" requires just one literal string argument');const o=r.get(e[1]);if(!o)throw new Error(`${e[1]} must be defined before being used in a "var" expression`);return new t(n||a.ValueType,o)},t.prototype.evaluate=function(t,e){return this.output.evaluate(t,e)},t}(),A=function(){function t(t,e,r){this.type=t,this.index=e,this.array=r}return t.parse=function(e,r){if(3!==e.length)throw new Error('"at" expects 2 arguments');const n=rt(e[1],r,a.NumberType),o=rt(e[2],r);return new t(o.type.itemType,n,o)},t.prototype.evaluate=function(t,e){const r=this.index.evaluate(t,e),n=this.array.evaluate(t,e);if(r<0||r>=n.length)throw new Error('"at" index out of bounds');if(r!==Math.floor(r))throw new Error('"at" index must be an integer');return n[r]},t}(),B=function(){function t(t,e){this.key=t,this.obj=e,this.type=a.ValueType}return t.parse=function(e,r){let n,o;switch(e.length){case 2:return n=rt(e[1],r),new t(n);case 3:return n=rt(e[1],r),o=rt(e[2],r),new t(n,o);default:throw new Error('"get" expects 1 or 2 arguments')}},t.prototype.evaluate=function(t,e){const r=this.key.evaluate(t,e);if(this.obj){return this.obj.evaluate(t,e)[r]}return null==t?void 0:t.values[r]},t}(),C=function(){function t(t,e){this.key=t,this.obj=e,this.type=a.BooleanType}return t.parse=function(e,r){let n,o;switch(e.length){case 2:return n=rt(e[1],r),new t(n);case 3:return n=rt(e[1],r),o=rt(e[2],r),new t(n,o);default:throw new Error('"has" expects 1 or 2 arguments')}},t.prototype.evaluate=function(t,e){const r=this.key.evaluate(t,e);if(this.obj){return r in this.obj.evaluate(t,e)}return!(null==t||!t.values[r])},t}(),q=function(){function t(t,e){this.key=t,this.vals=e,this.type=a.BooleanType}return t.parse=function(e,r){if(3!==e.length)throw new Error('"in" expects 2 arguments');return new t(rt(e[1],r),rt(e[2],r))},t.prototype.evaluate=function(t,e){const r=this.key.evaluate(t,e);return-1!==this.vals.evaluate(t,e).indexOf(r)},t}(),R=function(){function t(t,e,r){this.item=t,this.array=e,this.from=r,this.type=a.NumberType}return t.parse=function(e,r){if(e.length<3||e.length>4)throw new Error('"index-of" expects 3 or 4 arguments');const n=rt(e[1],r),o=rt(e[2],r);if(4===e.length){return new t(n,o,rt(e[3],r,a.NumberType))}return new t(n,o)},t.prototype.evaluate=function(t,e){const r=this.item.evaluate(t,e),n=this.array.evaluate(t,e);if(this.from){const o=this.from.evaluate(t,e);if(o!==Math.floor(o))throw new Error('"index-of" index must be an integer');return n.indexOf(r,o)}return n.indexOf(r)},t}(),j=function(){function t(t){this.arg=t,this.type=a.NumberType}return t.parse=function(e,r){if(2!==e.length)throw new Error('"length" expects 2 arguments');return new t(rt(e[1],r))},t.prototype.evaluate=function(t,e){const r=this.arg.evaluate(t,e);if("string"==typeof r)return r.length;if(Array.isArray(r))return r.length;throw new Error('"length" expects string or array')},t}(),I=function(){function t(t,e,r,n){this.type=t,this.array=e,this.from=r,this.to=n}return t.parse=function(e,r){if(e.length<3||e.length>4)throw new Error('"slice" expects 2 or 3 arguments');const n=rt(e[1],r),o=rt(e[2],r,a.NumberType);if(o.type!==a.NumberType)throw new Error('"slice" index must return a number');if(4===e.length){const i=rt(e[3],r,a.NumberType);if(i.type!==a.NumberType)throw new Error('"slice" index must return a number');return new t(n.type,n,o,i)}return new t(n.type,n,o)},t.prototype.evaluate=function(t,e){const r=this.array.evaluate(t,e);if(!Array.isArray(r)&&"string"!=typeof r)throw new Error('"slice" input must be an array or a string');const n=this.from.evaluate(t,e);if(n<0||n>=r.length)throw new Error('"slice" index out of bounds');if(n!==Math.floor(n))throw new Error('"slice" index must be an integer');if(this.to){const o=this.to.evaluate(t,e);if(o<0||o>=r.length)throw new Error('"slice" index out of bounds');if(o!==Math.floor(o))throw new Error('"slice" index must be an integer');return r.slice(n,o)}return r.slice(n)},t}(),G=function(){function t(){this.type=a.BooleanType}return t.parse=function(e){if(1!==e.length)throw new Error('"has-id" expects no arguments');return new t},t.prototype.evaluate=function(t,e){return t&&void 0!==t.id},t}(),O=function(){function t(t,e){this.args=t,this.calculate=e,this.type=a.NumberType}return t.parse=function(e,r,n){return new t(e.slice(1).map((t=>rt(t,r))),n)},t.prototype.evaluate=function(t,e){let r;return this.args&&(r=this.args.map((r=>r.evaluate(t,e)))),this.calculate(r)},t}(),P=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){switch(t.length){case 2:return O.parse(t,e,(t=>-t[0]));case 3:return O.parse(t,e,(t=>t[0]-t[1]));default:throw new Error('"-" expects 1 or 2 arguments')}},r}(O),z=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return O.parse(t,e,(t=>{let e=1;for(const r of t)e*=r;return e}))},r}(O),U=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){if(3===t.length)return O.parse(t,e,(t=>t[0]/t[1]));throw new Error('"/" expects 2 arguments')},r}(O),V=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){if(3===t.length)return O.parse(t,e,(t=>t[0]%t[1]));throw new Error('"%" expects 2 arguments')},r}(O),H=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){if(3===t.length)return O.parse(t,e,(t=>t[0]**t[1]));throw new Error('"^" expects 1 or 2 arguments')},r}(O),D=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.parse=function(t,e){return O.parse(t,e,(t=>{let e=0;for(const r of t)e+=r;return e}))},r}(O),F=function(){function t(t,e){this.args=t,this.calculate=e,this.type=a.NumberType}return t.parse=function(e,r){return new t(e.slice(1).map((t=>rt(t,r))),t.ops[e[0]])},t.prototype.evaluate=function(t,e){let r;return this.args&&(r=this.args.map((r=>r.evaluate(t,e)))),this.calculate(r)},t}();F.ops={abs:t=>Math.abs(t[0]),acos:t=>Math.acos(t[0]),asin:t=>Math.asin(t[0]),atan:t=>Math.atan(t[0]),ceil:t=>Math.ceil(t[0]),cos:t=>Math.cos(t[0]),e:()=>Math.E,floor:t=>Math.floor(t[0]),ln:t=>Math.log(t[0]),ln2:()=>Math.LN2,log10:t=>Math.log(t[0])/Math.LN10,log2:t=>Math.log(t[0])/Math.LN2,max:t=>Math.max(...t),min:t=>Math.min(...t),pi:()=>Math.PI,round:t=>Math.round(t[0]),sin:t=>Math.sin(t[0]),sqrt:t=>Math.sqrt(t[0]),tan:t=>Math.tan(t[0])};let Q=function(){function t(t){this.args=t,this.type=a.StringType}return t.parse=function(e,r){return new t(e.slice(1).map((t=>rt(t,r))))},t.prototype.evaluate=function(t,e){return this.args.map((r=>r.evaluate(t,e))).join("")},t}(),Y=function(){function t(t,e){this.arg=t,this.calculate=e,this.type=a.StringType}return t.parse=function(e,r){if(2!==e.length)throw new Error(`${e[0]} expects 1 argument`);return new t(rt(e[1],r),t.ops[e[0]])},t.prototype.evaluate=function(t,e){return this.calculate(this.arg.evaluate(t,e))},t}();Y.ops={downcase:t=>t.toLowerCase(),upcase:t=>t.toUpperCase()};let Z=function(){function t(t){this.args=t,this.type=a.ColorType}t.parse=function(e,r){if(4!==e.length)throw new Error('"rgb" expects 3 arguments');return new t(e.slice(1).map((t=>rt(t,r))))};var e=t.prototype;return e.evaluate=function(t,e){const n=this._validate(this.args[0].evaluate(t,e)),o=this._validate(this.args[1].evaluate(t,e)),i=this._validate(this.args[2].evaluate(t,e));return new r({r:n,g:o,b:i})},e._validate=function(t){if("number"!=typeof t||t<0||t>255)throw new Error(`${t}: invalid color component`);return Math.round(t)},t}(),J=function(){function t(t){this.args=t,this.type=a.ColorType}t.parse=function(e,r){if(5!==e.length)throw new Error('"rgba" expects 4 arguments');return new t(e.slice(1).map((t=>rt(t,r))))};var e=t.prototype;return e.evaluate=function(t,e){const n=this._validate(this.args[0].evaluate(t,e)),o=this._validate(this.args[1].evaluate(t,e)),i=this._validate(this.args[2].evaluate(t,e)),a=this._validateAlpha(this.args[3].evaluate(t,e));return new r({r:n,g:o,b:i,a})},e._validate=function(t){if("number"!=typeof t||t<0||t>255)throw new Error(`${t}: invalid color component`);return Math.round(t)},e._validateAlpha=function(t){if("number"!=typeof t||t<0||t>1)throw new Error(`${t}: invalid alpha color component`);return t},t}(),K=function(){function t(t){this.color=t,this.type=a.arrayType(a.NumberType,4)}return t.parse=function(e,r){if(2!==e.length)throw new Error('"to-rgba" expects 1 argument');return new t(rt(e[1],r))},t.prototype.evaluate=function(t,e){return new r(this.color.evaluate(t,e)).toRgba()},t}(),W=function(){function t(t,e){this.type=t,this.args=e}return t.parse=function(e,r){const n=e[0];if(e.length<2)throw new Error(`${n} expects at least one argument`);let o,i=1;if("array"===n){if(e.length>2){switch(e[1]){case"string":o=a.StringType;break;case"number":o=a.NumberType;break;case"boolean":o=a.BooleanType;break;default:throw new Error('"array" type argument must be string, number or boolean')}i++}else o=a.ValueType;let t;if(e.length>3){if(t=e[2],null!==t&&("number"!=typeof t||t<0||t!==Math.floor(t)))throw new Error('"array" length argument must be a positive integer literal');i++}o=a.arrayType(o,t)}else switch(n){case"string":o=a.StringType;break;case"number":o=a.NumberType;break;case"boolean":o=a.BooleanType;break;case"object":o=a.ObjectType}const s=[];for(;i<e.length;i++){const t=rt(e[i],r);s.push(t)}return new t(o,s)},t.prototype.evaluate=function(t,e){let r;for(const n of this.args){const o=n.evaluate(t,e);if(r=a.getType(o),a.matchType(r,this.type))return o}throw new Error(`Expected ${a.typeToString(this.type)} but got ${a.typeToString(r)}`)},t}(),X=function(){function t(t,e){this.type=t,this.args=e}return t.parse=function(e,r){const n=e[0],o=t.types[n];if(o===a.BooleanType||o===a.StringType){if(2!==e.length)throw new Error(`${n} expects one argument`)}else if(e.length<2)throw new Error(`${n} expects at least one argument`);const i=[];for(let t=1;t<e.length;t++){const n=rt(e[t],r);i.push(n)}return new t(o,i)},t.prototype.evaluate=function(e,n){if(this.type===a.BooleanType)return Boolean(this.args[0].evaluate(e,n));if(this.type===a.StringType)return a.valueToString(this.args[0].evaluate(e,n));if(this.type===a.NumberType){for(const t of this.args){const r=Number(t.evaluate(e,n));if(!isNaN(r))return r}return null}if(this.type===a.ColorType){for(const o of this.args)try{const i=t.toColor(o.evaluate(e,n));if(i instanceof r)return i}catch{}return null}},t.toBoolean=function(t){return Boolean(t)},t.toString=function(t){return a.valueToString(t)},t.toNumber=function(t){const e=Number(t);if(isNaN(e))throw new Error(`"${t}" is not a number`);return e},t.toColor=function(t){if(t instanceof r)return t;if("string"==typeof t){const e=r.fromString(t);if(e)return e;throw new Error(`"${t}" is not a color`)}if(Array.isArray(t))return r.fromArray(t);throw new Error(`"${t}" is not a color`)},t}();X.types={"to-boolean":a.BooleanType,"to-color":a.ColorType,"to-number":a.NumberType,"to-string":a.StringType};let tt=function(){function t(t){this.val=t,this.type=a.getType(t)}return t.parse=function(e){if(2!==e.length)throw new Error('"literal" expects 1 argument');return new t(e[1])},t.prototype.evaluate=function(t,e){return this.val},t}(),et=function(){function t(t){this.arg=t,this.type=a.StringType}return t.parse=function(e,r){if(2!==e.length)throw new Error('"typeof" expects 1 argument');return new t(rt(e[1],r))},t.prototype.evaluate=function(t,e){return a.typeToString(a.getType(this.arg.evaluate(t,e)))},t}();function rt(t,e,r){const n=typeof t;if("string"===n||"boolean"===n||"number"===n||null===t){if(r)switch(r.kind){case"string":"string"!==n&&(t=X.toString(t));break;case"number":"number"!==n&&(t=X.toNumber(t));break;case"color":t=X.toColor(t)}t=["literal",t]}if(!Array.isArray(t)||0===t.length)throw new Error("Expression must be a non empty array");const o=t[0];if("string"!=typeof o)throw new Error("First element of expression must be a string");const i=nt[o];if(void 0===i)throw new Error(`Invalid expression operator "${o}"`);if(!i)throw new Error(`Unimplemented expression operator "${o}"`);return i.parse(t,e,r)}const nt={array:W,boolean:W,collator:null,format:null,image:null,literal:tt,number:W,"number-format":null,object:W,string:W,"to-boolean":X,"to-color":X,"to-number":X,"to-string":X,typeof:et,accumulated:null,"feature-state":null,"geometry-type":p,id:l,"line-progress":null,properties:c,at:A,get:B,has:C,in:q,"index-of":R,length:j,slice:I,"!":d,"!=":y,"<":w,"<=":m,"==":g,">":b,">=":v,all:E,any:T,case:N,coalesce:M,match:L,within:null,interpolate:$,"interpolate-hcl":$,"interpolate-lab":$,step:k,let:_,var:S,concat:Q,downcase:Y,"is-supported-script":null,"resolved-locale":null,upcase:Y,rgb:Z,rgba:J,"to-rgba":K,"-":P,"*":z,"/":U,"%":V,"^":H,"+":D,abs:F,acos:F,asin:F,atan:F,ceil:F,cos:F,e:F,floor:F,ln:F,ln2:F,log10:F,log2:F,max:F,min:F,pi:F,round:F,sin:F,sqrt:F,tan:F,zoom:h,"heatmap-density":null,"has-id":G,none:x};t.ALL=E,t.ANY=T,t.Add=D,t.Assert=W,t.At=A,t.Calculate=F,t.Case=N,t.Coalesce=M,t.Coerce=X,t.Concat=Q,t.Div=U,t.EQ=g,t.GE=v,t.GT=b,t.GeomType=p,t.Get=B,t.Has=C,t.HasID=G,t.ID=l,t.In=q,t.IndexOf=R,t.Interpolate=$,t.LE=m,t.LT=w,t.Length=j,t.Let=_,t.Literal=tt,t.Match=L,t.Mod=V,t.Mul=z,t.NE=y,t.NONE=x,t.NOT=d,t.Pow=H,t.Properties=c,t.Rgb=Z,t.Rgba=J,t.Slice=I,t.Step=k,t.String=Y,t.Sub=P,t.ToRgba=K,t.TypeOf=et,t.Var=S,t.Zoom=h,t.createExpression=rt,t.ops=nt,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));