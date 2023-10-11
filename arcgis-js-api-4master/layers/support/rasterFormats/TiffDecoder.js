/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../rasterDatasets/byteStreamUtils","../../../chunks/Jpg","./Lerc","./Lzw","./TiffTags","./utils","../../../chunks/Zlib"],(function(e,t,n,i,a,s,l,r,o){"use strict";const f=[0,1,1,2,4,8,1,1,2,4,8,4,8,-1,-1,-1,8,8,8],u=4294967296,c=new Set([1,5,6,7,8,34712,34887]);function h(e,t){let n="unknown";return 3===e?n="f32":1===e?1===t?n="u1":2===t?n="u2":4===t?n="u4":t<=8?n="u8":t<=16?n="u16":t<=32&&(n="u32"):2===e&&(t<=8?n="s8":t<=16?n="s16":t<=32&&(n="s32")),n}function g(e){let t=null;switch(e?e.toLowerCase():"f32"){case"u1":case"u2":case"u4":case"u8":t=Uint8Array;break;case"u16":t=Uint16Array;break;case"u32":t=Uint32Array;break;case"s8":t=Int8Array;break;case"s16":t=Int16Array;break;case"s32":t=Int32Array;break;default:t=Float32Array}return t}function d(e,t){return{x:t[0]*e.x+t[1]*e.y+t[2],y:t[3]*e.x+t[4]*e.y+t[5]}}function p(e,t){var n;return null==(n=e.get(t))?void 0:n.values}function w(e,t){var n;return null==(n=e.get(t))?void 0:n.values}function T(e,t){var n;return null==(n=e.get(t))?void 0:n.values[0]}function y(e,t){var n;return null==(n=e.get(t))?void 0:n.values[0]}function I(e,t,n,i=0,a=l.TIFF_TAGS,s=4){const r=8===s,o=r?L(new DataView(e,n,8),0,t):new DataView(e,n,2).getUint16(0,t),f=4+2*s,u=r?8:2,c=u+o*f;if(n+c>e.byteLength)return{success:!1,ifd:null,nextIFD:null,requiredBufferSize:c};const h=n+c+4<=e.byteLength?k(new DataView(e,n+c,8===s?8:4),0,t,8===s):null,g=n+u,d=new Map;let p,w,T,y,I,E,S;for(let A=0;A<o;A++){w=new DataView(e,g+f*A,f),T=w.getUint16(0,t),I=w.getUint16(2,t),y=l.getTagName(T,a);const n=[];2===s?(E=w.getUint16(4,t),S=w.getUint16(6,t)):4===s?(E=w.getUint32(4,t),S=w.getUint32(8,t)):8===s&&(E=k(w,4,t,!0),S=k(w,12,t,!0),n.push(w.getUint32(12,t)),n.push(w.getUint32(16,t))),p={id:T,type:I,valueCount:E,valueOffset:S,valueOffsets:n,values:null},D(e,t,p,i,!1,s),d.set(y,p)}return{success:!0,ifd:d,nextIFD:h,requiredBufferSize:c}}const E=function(e,t){return a.decode(e,{inputOffset:t}).pixels[0]};function S(e,t,n,i,a){return A.apply(this,arguments)}function A(){return(A=t._asyncToGenerator((function*(e,t,n,l,f){var u,c;const d=r.isPlatformLittleEndian===t,p=y(n,"BITSPERSAMPLE"),w=h(null!=(u=y(n,"SAMPLEFORMAT"))?u:1,p),T=null!=(c=y(n,"COMPRESSION"))?c:1,I=g(w);let S,A,m,M,b,x,O;if(34887===T)return yield a.load(),E(e,l);if(1===T)m=e.slice(l,l+f),M=new Uint8Array(m);else if(8===T||32946===T)M=new Uint8Array(e,l,f),x=new o.Zlib(M),O=x.getBytes(),m=new ArrayBuffer(O.length),M=new Uint8Array(m),M.set(O);else if(6===T){M=new Uint8Array(e,l,f);const t=new i.JpegImage;t.parse(M);const n=t.getData(t.width,t.height,!0);m=new ArrayBuffer(n.length),M=new Uint8Array(m),M.set(n)}else if(7===T){const t=n.get("JPEGTABLES").values,a=t.length-2;M=new Uint8Array(a+f-2);for(let e=0;e<a;e++)M[e]=t[e];const s=new Uint8Array(e,l+2,f-2);for(let e=0;e<s.length;e++)M[a+e]=s[e];const r=new i.JpegImage;r.parse(M);const o=r.getData(r.width,r.height,!0);m=new ArrayBuffer(o.length),M=new Uint8Array(m),M.set(o)}else 5===T&&(M=s.decode(e,l,f,t),m=M.buffer);if("u8"===w||"s8"===w||d)A=new I(m);else{switch(m=new ArrayBuffer(M.length),b=new Uint8Array(m),w){case"u16":case"s16":for(S=0;S<M.length;S+=2)b[S]=M[S+1],b[S+1]=M[S];break;case"u32":case"s32":case"f32":for(S=0;S<M.length;S+=4)b[S]=M[S+3],b[S+1]=M[S+2],b[S+2]=M[S+1],b[S+3]=M[S]}A=new I(m)}return A}))).apply(this,arguments)}function m(e,t,n){return M.apply(this,arguments)}function M(){return(M=t._asyncToGenerator((function*(e,t,n){var i;const a=w(n,"TILEOFFSETS");if(void 0===a)return null;const s=w(n,"TILEBYTECOUNTS"),{width:l,height:r,pixelType:o,tileWidth:f,tileHeight:u}=U([n]),c=v(n,t),h=t.planes,d=l*r,p=y(n,"BITSPERSAMPLE"),T=34887===(null!=(i=y(n,"COMPRESSION"))?i:1),I=g(o),E=[];for(let g=0;g<h;g++)E.push(new I(d));let A,m,M,b,x,O,D,P,L,G,k,N,R;const F=Math.ceil(l/f);if(p%8==0)if(T&&c&&h>1){const i=Math.round(a.length/h);for(A=0;A<i;A++){O=Math.floor(A/F)*u,D=A%F*f,P=O*l+D;for(let i=0;i<h;i++){const o=A*h+i;for(M=yield S(e,t.littleEndian,n,a[o],s[o]),G=0,L=P,N=Math.min(f,l-D),k=Math.min(u,r-O),R=E[i],b=0;b<k;b++)for(L=P+b*l,G=b*f,x=0;x<N;x++,L++,G++)R[L]=M[G]}}}else for(A=0;A<a.length;A++)for(O=Math.floor(A/F)*u,D=A%F*f,P=O*l+D,M=yield S(e,t.littleEndian,n,a[A],s[A]),G=0,L=P,N=Math.min(f,l-D),k=Math.min(u,r-O),m=0;m<h;m++)if(R=E[m],c||T)for(b=0;b<k;b++)for(L=P+b*l,G=f*u*m+b*f,x=0;x<N;x++,L++,G++)R[L]=M[G];else for(b=0;b<k;b++)for(L=P+b*l,G=b*f*h+m,x=0;x<N;x++,L++,G+=h)R[L]=M[G];return{width:l,height:r,pixelType:o,pixels:E}}))).apply(this,arguments)}const b=function(e,t,n){var a;const l=r.isPlatformLittleEndian===t.littleEndian,f=w(n,"STRIPOFFSETS");if(void 0===f)return null;const{width:u,height:c,pixelType:h}=U([n]),d=t.planes,p=u*c,T=y(n,"BITSPERSAMPLE"),I=g(h),E=new I(p*d),S=w(n,"STRIPBYTECOUNTS"),A=y(n,"ROWSPERSTRIP"),m=null!=(a=y(n,"COMPRESSION"))?a:1;let M,b,x,O,D,v,P,L,G,k,N,R=A;if(T%8==0)for(M=0;M<f.length;M++){if(D=M*(A*u)*d,R=(M+1)*A>c?c-M*A:A,"u8"===h||"s8"===h||l){if(8===m||32946===m)P=new Uint8Array(e,f[M],S[M]),k=new o.Zlib(P),N=k.getBytes(),v=new ArrayBuffer(N.length),P=new Uint8Array(v),P.set(N),P.length!==R*u*d*T/8&&console.log("strip byte counts is different than expected");else if(6===m){P=new Uint8Array(e,f[M],S[M]);const t=new i.JpegImage;t.parse(P);const n=t.getData(t.width,t.height,!0);v=new ArrayBuffer(n.length),P=new Uint8Array(v),P.set(n)}else 5===m?(P=s.decode(e,f[M],S[M],t.littleEndian),v=P.buffer):1===m&&(S[M]!==R*u*d*T/8&&console.log("strip byte counts is different than expected"),v=e.slice(f[M],f[M]+S[M]));O=new I(v)}else{switch(6===m||8===m||32946===m?(P=new Uint8Array(e,f[M],S[M]),k=new o.Zlib(P),P=k.getBytes(),v=new ArrayBuffer(P.length),L=new Uint8Array(v),P.length!==R*u*d*T/8&&console.log("strip byte counts is different than expected")):1===m&&(S[M]!==R*u*d*T/8&&console.log("strip byte counts is different than expected"),v=new ArrayBuffer(S[M]),P=new Uint8Array(e,f[M],S[M]),L=new Uint8Array(v)),h){case"u16":case"s16":for(x=0;x<P.length;x+=2)L[x]=P[x+1],L[x+1]=P[x];break;case"u32":case"s32":case"f32":for(x=0;x<P.length;x+=4)L[x]=P[x+3],L[x+1]=P[x+2],L[x+2]=P[x+1],L[x+3]=P[x]}O=new I(v)}E.set(O,D)}const F=[];if(1===d)F.push(E);else for(M=0;M<d;M++){for(G=new I(p),b=0;b<p;b++)G[b]=E[b*d+M];F.push(G)}return{width:u,height:c,pixelType:h,pixels:F}},x=function(e,t,n){if(!(e&&e.length>0&&t&&n))return null;let i,a,s;const l=e[0].length,r=e.length,o=new Uint8Array(l);for(let f=0;f<r;f++)if(i=e[f],a=t[f],s=n[f],0===f)for(let e=0;e<l;e++)o[e]=i[e]<a||i[e]>s?0:1;else for(let e=0;e<l;e++)o[e]&&(o[e]=i[e]<a||i[e]>s?0:1);return o},O=function(e){if(!e)return null;const t=e.match(/<Item(.*?)Item>/gi);if(!t||0===t.length)return null;const n=new Map;let i,a,s,l,r;for(let T=0;T<t.length;T++)i=t[T],a=i.slice("<Item ".length,i.indexOf(">")),l=i.indexOf("sample="),l>-1&&(r=i.slice(l+'sample="'.length,i.indexOf('"',l+'sample="'.length))),l=i.indexOf("name="),l>-1&&(a=i.slice(l+'name="'.length,i.indexOf('"',l+'name="'.length))),a&&(s=i.slice(i.indexOf(">")+1,i.indexOf("</Item>")).trim(),null!=r?n.has(a)?n.get(a)[r]=s:n.set(a,[s]):n.set(a,s)),r=null;const o=n.get("STATISTICS_MINIMUM"),f=n.get("STATISTICS_MAXIMUM"),u=n.get("STATISTICS_MEAN"),c=n.get("STATISTICS_STDDEV");let h=null;if(o&&f){h=[];for(let e=0;e<o.length;e++)h.push({min:parseFloat(o[e]),max:parseFloat(f[e]),avg:u&&parseFloat(u[e]),stddev:c&&parseFloat(c[e])})}const g=n.get("BandName"),d=n.get("WavelengthMin"),p=n.get("WavelengthMax");let w=null;if(g){w=[];for(let e=0;e<g.length;e++)w.push({BandName:g[e],WavelengthMin:d&&parseFloat(d[e]),WavelengthMax:p&&parseFloat(p[e])})}return{statistics:h,bandProperties:w,dataType:n.get("DataType"),rawMetadata:n}};function D(e,t,n,i=0,a=!1,s=4){if(n.values)return!0;const l=n.type,r=n.valueCount;let o=n.valueOffset,c=[];const h=f[l],g=8*h,d=r*h,p=r*f[l]*8;let w,T;const y=8===s?64:32,I=n.valueOffsets;if(p>y){if(d>(a?e.byteLength:e?e.byteLength-o+i:0))return n.offlineOffsetSize=[o,d],n.values=null,!1}if(p<=y){if(!t)if(y<=32)o>>>=32-p;else{const e=null!=I&&I.length?I[0]:o>>>0,t=null!=I&&I.length?I[1]:Math.round((o-e)/u);p<=32?(o=e>>>32-p,I[0]=o):(o=e*2**(32-p)+(t>>>32-p),I[0]=e,I[1]=t>>>32-p)}if(1===r&&g===y)c=[o];else if(64===y){const e=null!=I&&I.length?I[0]:o>>>0,t=null!=I&&I.length?I[1]:Math.round((o-e)/u);let n=e,i=32;for(T=1;T<=r;T++){const e=32-g*T%32;if(i<g){const a=n<<e>>>32-i,s=t<<32-i>>>32-i;n=t,c.push(a+s*2**(g-i)),i-=32-(g-i)}else c.push(n<<e>>>32-g),i-=g;0===i&&(i=32,n=t)}}else for(T=1;T<=r;T++){const e=32-g*T;c.push(o<<e>>>32-g)}}else{o-=i,a&&(o=0);for(let n=o;n<o+d;n+=h){switch(l){case 1:case 2:case 7:w=new DataView(e,n,1).getUint8(0);break;case 3:w=new DataView(e,n,2).getUint16(0,t);break;case 4:case 13:w=new DataView(e,n,4).getUint32(0,t);break;case 5:w=new DataView(e,n,4).getUint32(0,t)/new DataView(e,n+4,4).getUint32(0,t);break;case 6:w=new DataView(e,n,1).getInt8(0);break;case 8:w=new DataView(e,n,2).getInt16(0,t);break;case 9:w=new DataView(e,n,4).getInt32(0,t);break;case 10:w=new DataView(e,n,4).getInt32(0,t)/new DataView(e,n+4,4).getInt32(0,t);break;case 11:w=new DataView(e,n,4).getFloat32(0,t);break;case 12:w=new DataView(e,n,8).getFloat64(0,t);break;case 16:case 18:w=L(new DataView(e,n,8),0,t);break;case 17:w=G(new DataView(e,n,8),0,t);break;default:w=null}c.push(w)}}if(2===l){let e="";const t=c;for(c=[],T=0;T<t.length;T++)0===t[T]&&""!==e?(c.push(e),e=""):e+=String.fromCharCode(t[T]);""===e&&0!==c.length||c.push(e)}return n.values=c,!0}function U(e){var t,n;const i=e[0],a=y(i,"TILEWIDTH"),s=y(i,"TILELENGTH"),l=y(i,"IMAGEWIDTH"),r=y(i,"IMAGELENGTH"),o=y(i,"BITSPERSAMPLE"),f=y(i,"SAMPLESPERPIXEL"),u=null!=(t=y(i,"SAMPLEFORMAT"))?t:1,g=h(u,o),I=v(i),E=p(i,"GDAL_NODATA");let S;null!=E&&E.length&&(S=E.map((e=>parseFloat(e))),S.some((e=>isNaN(e)))&&(S=null));const A=null!=(n=y(i,"COMPRESSION"))?n:1;let m;switch(A){case 1:m="NONE";break;case 2:case 3:case 4:case 32771:m="CCITT";break;case 5:m="LZW";break;case 6:case 7:m="JPEG";break;case 32773:m="PACKBITS";break;case 8:case 32946:m="DEFLATE";break;case 34712:m="JPEG2000";break;case 34887:m="LERC";break;default:m=String(A)}let M=!0,b="";c.has(A)||(M=!1,b+="unsupported tag compression "+A),u>3&&(M=!1,b+="unsupported tag sampleFormat "+u),o%8!=0&&(M=!1,b+="unsupported tag bitsPerSample "+o);const x=T(i,"GEOASCIIPARAMS");let D;if(x){const e=x.split("|").find((e=>e.indexOf("ESRI PE String = ")>-1)),t=e?e.replace("ESRI PE String = ",""):"";D=t.startsWith("COMPD_CS")||t.startsWith("PROJCS")||t.startsWith("GEOGCS")?{wkid:null,wkt:t}:null}const U=w(i,"GEOTIEPOINTS"),P=w(i,"GEOPIXELSCALE"),L=w(i,"GEOTRANSMATRIX"),G=i.has("GEOKEYDIRECTORY")?i.get("GEOKEYDIRECTORY").data:null;let k,N,R=!1;if(G){R=2===y(G,"GTRasterTypeGeoKey");const e=y(G,"GTModelTypeGeoKey");if(2===e){const e=y(G,"GeographicTypeGeoKey");e>=1024&&e<=32766&&(D={wkid:e})}else if(1===e){const e=y(G,"ProjectedCSTypeGeoKey");e>=1024&&e<=32766&&(D={wkid:e})}}if(P&&U&&U.length>=6?(k=[P[0],0,U[3]-U[0]*P[0],0,-Math.abs(P[1]),U[4]-U[1]*P[1]],R&&(k[2]-=.5*k[0]+.5*k[1],k[5]-=.5*k[3]+.5*k[4])):L&&16===L.length&&(k=R?[L[0],L[1],L[3]-.5*L[0],L[4],L[5],L[7]-.5*L[5]]:[L[0],L[1],L[3],L[4],L[5],L[7]]),k){const e=[{x:0,y:r},{x:0,y:0},{x:l,y:r},{x:l,y:0}];let t,n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(let l=0;l<e.length;l++)t=d(e[l],k),n=t.x>n?n:t.x,a=t.x<a?a:t.x,i=t.y>i?i:t.y,s=t.y<s?s:t.y;N={xmin:n,xmax:a,ymin:i,ymax:s,spatialReference:D}}else N={xmin:-.5,ymin:.5-r,xmax:l-.5,ymax:.5,spatialReference:D};const C=e.filter((e=>1===T(e,"NEWSUBFILETYPE")));let B,V,W,_,H;if(C.length>0){B=Math.round(Math.log(l/y(C[0],"IMAGEWIDTH"))/Math.LN2);const e=C[C.length-1];V=Math.round(Math.log(l/y(e,"IMAGEWIDTH"))/Math.LN2),W=y(e,"TILEWIDTH"),_=y(e,"TILELENGTH")}W=V>0?W||a:null,_=V>0?_||s:null,a&&(H=[{maxCol:Math.ceil(l/a)-1,maxRow:Math.ceil(r/s)-1,minRow:0,minCol:0}],C.forEach((e=>{H.push({maxCol:Math.ceil(y(e,"IMAGEWIDTH")/y(e,"TILEWIDTH"))-1,maxRow:Math.ceil(y(e,"IMAGELENGTH")/y(e,"TILELENGTH"))-1,minRow:0,minCol:0})})));const Y=T(e[0],"GDAL_METADATA"),K=O(Y);return b+=" "+F({width:l,height:r,tileWidth:a,tileHeight:s,planes:f,ifds:e}),{width:l,height:r,tileWidth:a,tileHeight:s,planes:f,isBSQ:I,pixelType:g,compression:m,noData:S,isSupported:M,message:b,extent:N,affine:P?null:k,firstPyramidLevel:B,maximumPyramidLevel:V,pyramidBlockWidth:W,pyramidBlockHeight:_,tileBoundary:H,metadata:K}}function v(e,t){const n=p(e,"PLANARCONFIGURATION");return n?2===n[0]:!!t&&t.isBSQ}function P(e){const{littleEndian:t,isBigTiff:n,firstIFD:i}=N(e);let a=i;const s=[];do{const i=R(e,t,a,0,l.TIFF_TAGS,n?8:4);if(!i.success)break;s.push(i.ifd),a=i.nextIFD}while(a>0);return{...U(s),littleEndian:t,isBigTiff:n,ifds:s}}function L(e,t,n){const i=e.getUint32(t,n),a=e.getUint32(t+4,n);return n?a*u+i:i*u+a}function G(e,t,n){let i=n?e.getInt32(t,n):e.getUint32(t,n),a=n?e.getUint32(t+4,n):e.getInt32(t+4,n);const s=(n?i:a)>=0?1:-1;n?i*=s:a*=s;return s*(n?a*u+i:i*u+a)}function k(e,t,n,i){return i?L(e,t,n):e.getUint32(t,n)}function N(e){const t=new DataView(e,0,16),n=t.getUint16(0,!1);let i=null;if(18761===n)i=!0;else{if(19789!==n)throw"unexpected endianess byte";i=!1}const a=t.getUint16(2,i);if(42!==a&&43!==a)throw"unexpected tiff identifier";let s=4;const l=43===a;if(l){const e=t.getUint16(s,i);if(s+=2,8!==e)throw"unsupported bigtiff version";if(0!==t.getUint16(s,i))throw"unsupported bigtiff version";s+=2}return{littleEndian:i,isBigTiff:l,firstIFD:k(t,s,i,l)}}function R(e,t,i,a=0,s=l.TIFF_TAGS,r=4){const o=I(e,t,i,a,s,r);let f;const u=o.ifd;if(u){if(l.ifdTags.forEach(((n,i)=>{u.has(i)&&(f=u.get(i),f.data=I(e,t,f.valueOffset-a,a,n).ifd)})),u.has("GEOKEYDIRECTORY")){f=u.get("GEOKEYDIRECTORY");const n=f.values;if(n&&n.length>4){const i=n[0]+"."+n[1]+"."+n[2];f.data=I(e,t,f.valueOffset+6-a,a,l.GEO_KEYS,2).ifd,f.data&&f.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,values:[i]})}}if(u.has("XMP")){f=u.get("XMP");const e=f.values;"number"==typeof e[0]&&7===f.type&&(f.values=[n.bytesToUTF8(new Uint8Array(e))])}}return o}function F(e){const{width:t,height:n,tileHeight:i,tileWidth:a}=e,s=e.planes,l=a?a*i:t*n,r=y(e.ifds[0],"BITSPERSAMPLE");let o="";return l*s>2**30/(r>8?r/8:1)&&(o=a?"tiled tiff exceeding 1 gigabits per tile is not supported":"scanline tiff exceeding 1 gigabits is not supported"),o}function C(e,t){return B.apply(this,arguments)}function B(){return(B=t._asyncToGenerator((function*(e,t){var n;const{headerInfo:i,ifd:a,offsets:s,sizes:l}=t,r=[];for(let g=0;g<s.length;g++){const t=yield S(e,i.littleEndian,a,s[g],l[g]||e.byteLength);r.push(t)}const o=v(a,i),{pixelType:f,planes:u}=i,c=g(f),h=y(a,"TILEWIDTH"),d=y(a,"TILELENGTH"),p=null!=(n=y(a,"COMPRESSION"))?n:1,w=h*d;let T;const I=[];let E=r[0];const A=34887===p;for(let g=0;g<u;g++){if(T=new c(w),o&&A){E=r[g];for(let e=0;e<w;e++)T[e]=E[g][e+g]}else if(o||A&&!o)T=E.slice(w*g,w*(g+1));else for(let e=0;e<w;e++)T[e]=E[e*u+g];I.push(T)}const m=i.noData?i.noData[0]:null,M=i.metadata?i.metadata.statistics:null,b=M?M.map((e=>e.min)):null,O=M?M.map((e=>e.max)):null;let D,U;if(null!=m)if(D=new Uint8Array(w),Math.abs(m)>1e24)for(U=0;U<w;U++)Math.abs((I[0][U]-m)/m)<1e-6?D[U]=0:D[U]=1;else for(U=0;U<w;U++)I[0][U]===m?D[U]=0:D[U]=1;else b&&O&&t.applyMinMaxConstraint&&(D=x(I,b,O));return{pixelType:f,width:h,height:d,pixels:I,mask:D,noDataValue:m}}))).apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return(W=t._asyncToGenerator((function*(e,t=0,n){n=n||P(e);const{ifds:i,noData:a}=n;if(0===i.length)throw"no valid image file directory";const s=F(n);if(s)throw s;let l,r;const o=-1===t?i[i.length-1]:i[t],f=a?a[0]:null;if(r=n.tileWidth?yield m(e,n,o):yield b(e,n,o),null!==f){if(r.mask=new Uint8Array(r.width*r.height),Math.abs(f)>1e24)for(l=0;l<r.width*r.height;l++)Math.abs((r.pixels[0][l]-f)/f)<1e-6?r.mask[l]=0:r.mask[l]=1;else for(l=0;l<r.width*r.height;l++)r.pixels[0][l]===f?r.mask[l]=0:r.mask[l]=1;r.noDataValue=f}return r}))).apply(this,arguments)}e.decode=V,e.decodeTileOrStrip=C,e.getImageInfo=U,e.isBSQConfig=v,e.parseFieldValues=D,e.parseHeader=P,e.parseIFD=R,e.parseSignature=N,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));