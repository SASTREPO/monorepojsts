/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./assert","./character","./messages","./token"],(function(e,t,i,s,n){"use strict";function r(e){return"0123456789abcdef".indexOf(e.toLowerCase())}function h(e){return"01234567".indexOf(e)}let a=function(){function e(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=e.length>0?1:0,this.lineStart=0,this.curlyStack=[]}var a=e.prototype;return a.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}},a.restoreState=function(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart,this.curlyStack=e.curlyStack},a.eof=function(){return this.index>=this.length},a.throwUnexpectedToken=function(e=s.Messages.UnexpectedTokenIllegal){return this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},a._tolerateUnexpectedToken=function(e=s.Messages.UnexpectedTokenIllegal){this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},a._skipSingleLineComment=function(e){let t=[],s=0,n=null;for(this.trackComment&&(t=[],s=this.index-e,n={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{line:0,column:0}});!this.eof();){const r=this.source.charCodeAt(this.index);if(++this.index,i.Character.isLineTerminator(r)){if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart-1};const i={multiLine:!1,slice:[s+e,this.index-1],range:[s,this.index-1],loc:n};t.push(i)}return 13===r&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t}}if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!1,slice:[s+e,this.index],range:[s,this.index],loc:n};t.push(i)}return t},a._skipMultiLineComment=function(){const e=[];let t=0,s=null;for(this.trackComment&&(t=this.index-2,s={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{line:0,column:0}});!this.eof();){const n=this.source.charCodeAt(this.index);if(i.Character.isLineTerminator(n))13===n&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===n){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!0,slice:[t+2,this.index-2],range:[t,this.index],loc:s};e.push(i)}return e}++this.index}else++this.index}if(s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!0,slice:[t+2,this.index],range:[t,this.index],loc:s};e.push(i)}return this._tolerateUnexpectedToken(),e},a.scanComments=function(){let e=null;this.trackComment&&(e=[]);let t=0===this.index;for(;!this.eof();){let s=this.source.charCodeAt(this.index);if(i.Character.isWhiteSpace(s))++this.index;else if(i.Character.isLineTerminator(s))++this.index,13===s&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t=!0;else if(47===s)if(s=this.source.charCodeAt(this.index+1),47===s){this.index+=2;const i=this._skipSingleLineComment(2);e&&(e=e.concat(i)),t=!0}else{if(42!==s)break;{this.index+=2;const t=this._skipMultiLineComment();e&&(e=e.concat(t))}}else if(t&&45===s){if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break;{this.index+=3;const t=this._skipSingleLineComment(3);e&&(e=e.concat(t))}}else{if(60!==s||this.isModule)break;if("!--"!==this.source.slice(this.index+1,this.index+4))break;{this.index+=4;const t=this._skipSingleLineComment(4);e&&(e=e.concat(t))}}}return e},a._isKeyword=function(e){switch((e=e.toLowerCase()).length){case 2:return"if"===e||"in"===e;case 3:return"var"===e||"for"===e;case 4:return"else"===e;case 5:return"break"===e;case 6:return"return"===e;case 8:return"function"===e||"continue"===e;default:return!1}},a._codePointAt=function(e){let t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){const i=this.source.charCodeAt(e+1);if(i>=56320&&i<=57343){t=1024*(t-55296)+i-56320+65536}}return t},a._scanHexEscape=function(e){const t="u"===e?4:2;let s=0;for(let n=0;n<t;++n){if(this.eof()||!i.Character.isHexDigit(this.source.charCodeAt(this.index)))return null;s=16*s+r(this.source[this.index++])}return String.fromCharCode(s)},a._scanUnicodeCodePointEscape=function(){let e=this.source[this.index],t=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],i.Character.isHexDigit(e.charCodeAt(0)));)t=16*t+r(e);return(t>1114111||"}"!==e)&&this.throwUnexpectedToken(),i.Character.fromCodePoint(t)},a._getIdentifier=function(){const e=this.index++;for(;!this.eof();){const t=this.source.charCodeAt(this.index);if(92===t)return this.index=e,this._getComplexIdentifier();if(t>=55296&&t<57343)return this.index=e,this._getComplexIdentifier();if(!i.Character.isIdentifierPart(t))break;++this.index}return this.source.slice(e,this.index)},a._getComplexIdentifier=function(){let e,t=this._codePointAt(this.index),s=i.Character.fromCodePoint(t);for(this.index+=s.length,92===t&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this._scanUnicodeCodePointEscape()):(e=this._scanHexEscape("u"),null!==e&&"\\"!==e&&i.Character.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken()),s=e);!this.eof()&&(t=this._codePointAt(this.index),i.Character.isIdentifierPart(t));)e=i.Character.fromCodePoint(t),s+=e,this.index+=e.length,92===t&&(s=s.substr(0,s.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this._scanUnicodeCodePointEscape()):(e=this._scanHexEscape("u"),null!==e&&"\\"!==e&&i.Character.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken()),s+=e);return s},a._octalToDecimal=function(e){let t="0"!==e,s=h(e);return!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(t=!0,s=8*s+h(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(s=8*s+h(this.source[this.index++]))),{code:s,octal:t}},a._scanIdentifier=function(){let e;const t=this.index,i=92===this.source.charCodeAt(t)?this._getComplexIdentifier():this._getIdentifier();if(e=1===i.length?n.TokenType.Identifier:this._isKeyword(i)?n.TokenType.Keyword:"null"===i.toLowerCase()?n.TokenType.NullLiteral:"true"===i.toLowerCase()||"false"===i.toLowerCase()?n.TokenType.BooleanLiteral:n.TokenType.Identifier,e!==n.TokenType.Identifier&&t+i.length!==this.index){const e=this.index;this.index=t,this._tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord),this.index=e}return{type:e,value:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},a._scanPunctuator=function(){const e=this.index;let t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;case"}":++this.index,this.curlyStack.pop();break;default:t=this.source.substr(this.index,4),">>>="===t?this.index+=4:(t=t.substr(0,3),"==="===t||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:(t=t.substr(0,2),"&&"===t||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)))}return this.index===e&&this.throwUnexpectedToken(),{type:n.TokenType.Punctuator,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a._scanHexLiteral=function(e){let t="";for(;!this.eof()&&i.Character.isHexDigit(this.source.charCodeAt(this.index));)t+=this.source[this.index++];return 0===t.length&&this.throwUnexpectedToken(),i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:n.TokenType.NumericLiteral,value:parseInt("0x"+t,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a._scanBinaryLiteral=function(e){let t="";for(;!this.eof();){const e=this.source[this.index];if("0"!==e&&"1"!==e)break;t+=this.source[this.index++]}if(0===t.length&&this.throwUnexpectedToken(),!this.eof()){const e=this.source.charCodeAt(this.index);(i.Character.isIdentifierStart(e)||i.Character.isDecimalDigit(e))&&this.throwUnexpectedToken()}return{type:n.TokenType.NumericLiteral,value:parseInt(t,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a._scanOctalLiteral=function(e,t){let s="",r=!1;for(i.Character.isOctalDigit(e.charCodeAt(0))?(r=!0,s="0"+this.source[this.index++]):++this.index;!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index));)s+=this.source[this.index++];return r||0!==s.length||this.throwUnexpectedToken(),(i.Character.isIdentifierStart(this.source.charCodeAt(this.index))||i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:n.TokenType.NumericLiteral,value:parseInt(s,8),octal:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},a._scanNumericLiteral=function(){const e=this.index;let s=this.source[e];t.assert(i.Character.isDecimalDigit(s.charCodeAt(0))||"."===s,"Numeric literal must start with a decimal digit or a decimal point");let r="";if("."!==s){if(r=this.source[this.index++],s=this.source[this.index],"0"===r){if("x"===s||"X"===s)return++this.index,this._scanHexLiteral(e);if("b"===s||"B"===s)return++this.index,this._scanBinaryLiteral(e);if("o"===s||"O"===s)return this._scanOctalLiteral(s,e)}for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];s=this.source[this.index]}if("."===s){for(r+=this.source[this.index++];i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];s=this.source[this.index]}if("e"===s||"E"===s)if(r+=this.source[this.index++],s=this.source[this.index],"+"!==s&&"-"!==s||(r+=this.source[this.index++]),i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];else this.throwUnexpectedToken();return i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:n.TokenType.NumericLiteral,value:parseFloat(r),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a._scanStringLiteral=function(){const e=this.index;let r=this.source[e];t.assert("'"===r||'"'===r,"String literal must starts with a quote"),++this.index;let h=!1,a="";for(;!this.eof();){let e=this.source[this.index++];if(e===r){r="";break}if("\\"===e)if(e=this.source[this.index++],e&&i.Character.isLineTerminator(e.charCodeAt(0)))++this.lineNumber,"\r"===e&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(e){case"u":if("{"===this.source[this.index])++this.index,a+=this._scanUnicodeCodePointEscape();else{const t=this._scanHexEscape(e);null===t&&this.throwUnexpectedToken(),a+=t}break;case"x":{const t=this._scanHexEscape(e);null===t&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),a+=t;break}case"n":a+="\n";break;case"r":a+="\r";break;case"t":a+="\t";break;case"b":a+="\b";break;case"f":a+="\f";break;case"v":a+="\v";break;case"8":case"9":a+=e,this._tolerateUnexpectedToken();break;default:if(e&&i.Character.isOctalDigit(e.charCodeAt(0))){const t=this._octalToDecimal(e);h=t.octal||h,a+=String.fromCharCode(t.code)}else a+=e}else{if(i.Character.isLineTerminator(e.charCodeAt(0)))break;a+=e}}return""!==r&&(this.index=e,this.throwUnexpectedToken()),{type:n.TokenType.StringLiteral,value:a,octal:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a._scanTemplate=function(){let e="",t=!1;const r=this.index,h="`"===this.source[r];let a=!1,c=2;for(++this.index;!this.eof();){let n=this.source[this.index++];if("`"===n){c=1,a=!0,t=!0;break}if("$"===n){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,t=!0;break}e+=n}else if("\\"===n)if(n=this.source[this.index++],i.Character.isLineTerminator(n.charCodeAt(0)))++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(n){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="\t";break;case"u":if("{"===this.source[this.index])++this.index,e+=this._scanUnicodeCodePointEscape();else{const t=this.index,i=this._scanHexEscape(n);null!==i?e+=i:(this.index=t,e+=n)}break;case"x":{const t=this._scanHexEscape(n);null===t&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),e+=t;break}case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===n?(i.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral),e+="\0"):i.Character.isOctalDigit(n.charCodeAt(0))?this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral):e+=n}else i.Character.isLineTerminator(n.charCodeAt(0))?(++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=n}return t||this.throwUnexpectedToken(),h||this.curlyStack.pop(),{type:n.TokenType.Template,value:this.source.slice(r+1,this.index-c),cooked:e,head:h,tail:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:r,end:this.index}},a._testRegExp=function(e,t){const i="￿";let n=e;t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,((e,t,n)=>{const r=parseInt(t||n,16);return r>1114111&&this.throwUnexpectedToken(s.Messages.InvalidRegExp),r<=65535?String.fromCharCode(r):i})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,i));try{RegExp(n)}catch(r){this.throwUnexpectedToken(s.Messages.InvalidRegExp)}try{return new RegExp(e,t)}catch(h){return null}},a._scanRegExpBody=function(){let e=this.source[this.index];t.assert("/"===e,"Regular expression literal must start with a slash");let n=this.source[this.index++],r=!1,h=!1;for(;!this.eof();)if(e=this.source[this.index++],n+=e,"\\"===e)e=this.source[this.index++],i.Character.isLineTerminator(e.charCodeAt(0))&&this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),n+=e;else if(i.Character.isLineTerminator(e.charCodeAt(0)))this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);else if(r)"]"===e&&(r=!1);else{if("/"===e){h=!0;break}"["===e&&(r=!0)}return h||this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),n.substr(1,n.length-2)},a._scanRegExpFlags=function(){let e="",t="";for(;!this.eof();){let s=this.source[this.index];if(!i.Character.isIdentifierPart(s.charCodeAt(0)))break;if(++this.index,"\\"!==s||this.eof())t+=s,e+=s;else if(s=this.source[this.index],"u"===s){++this.index;let i=this.index;const s=this._scanHexEscape("u");if(null!==s)for(t+=s,e+="\\u";i<this.index;++i)e+=this.source[i];else this.index=i,t+="u",e+="\\u";this._tolerateUnexpectedToken()}else e+="\\",this._tolerateUnexpectedToken()}return t},a.scanRegExp=function(){const e=this.index,t=this._scanRegExpBody(),i=this._scanRegExpFlags(),s=this._testRegExp(t,i);return{type:n.TokenType.RegularExpression,value:"",pattern:t,flags:i,regex:s,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},a.lex=function(){if(this.eof())return{type:n.TokenType.EOF,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};const e=this.source.charCodeAt(this.index);return i.Character.isIdentifierStart(e)?this._scanIdentifier():40===e||41===e||59===e?this._scanPunctuator():39===e||34===e?this._scanStringLiteral():46===e?i.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this._scanNumericLiteral():this._scanPunctuator():i.Character.isDecimalDigit(e)?this._scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this._scanTemplate():e>=55296&&e<57343&&i.Character.isIdentifierStart(this._codePointAt(this.index))?this._scanIdentifier():this._scanPunctuator()},e}();e.Scanner=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));