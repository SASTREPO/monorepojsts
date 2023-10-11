/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../core/Error","../../core/unitUtils","./geodesicConstants","../Polyline","../Polygon","../Point","../SpatialReference"],(function(e,t,n,i,s,a,o,r,c){"use strict";function l(e){if(!e)return null;if(e.isGeographic&&e.wkid){const t=s.spheroids[e.wkid];if(t)return t}if(e.wkt){const t=h(e.wkt);if(t)return t}return null}function h(e){const t=s.WKT_SPHEROID_REGEX.exec(e);if(!t||2!==t.length)return null;const n=t[1].split(",");if(!n||n.length<3)return null;const i=parseFloat(n[1]),a=parseFloat(n[2]);if(isNaN(i)||isNaN(a))return null;return{a:i,f:0===a?0:1/a}}function u(e){const t=l(e||c.WGS84);if(f(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function f(e){return"b"in e&&"eSq"in e&&"radius"in e}function p(e){return e<0?e+360:e}function d(e,t,n){const{a:i,eSq:a}=u(n),o=Math.sqrt(a),r=Math.sin(t[1]*s.toRadians),c=i*t[0]*s.toRadians;let l;if(a>0){l=i*((1-a)*(r/(1-a*(r*r))-1/(2*o)*Math.log((1-o*r)/(1+o*r))))*.5}else l=i*r;return e[0]=c,e[1]=l,e}function g(e){return null!==l(e)}function m(e,t="square-meters"){if(e.some((e=>!g(e.spatialReference))))throw new n("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const s=[];for(let n=0;n<e.length;n++){const t=e[n],i=t.spatialReference,{radius:a,densificationRatio:o}=u(i),r=a*o;s.push(w(t,r))}const a=[],o=[0,0],r=[0,0];for(let n=0;n<s.length;n++){const{rings:e,spatialReference:c}=s[n];let l=0;for(let t=0;t<e.length;t++){const n=e[t];d(o,n[0],c),d(r,n[n.length-1],c);let i=r[0]*o[1]-o[0]*r[1];for(let e=0;e<n.length-1;e++)d(o,n[e+1],c),d(r,n[e],c),i+=r[0]*o[1]-o[0]*r[1];l+=i}l=i.convertUnit(l,"square-meters",t),a.push(l/-2)}return a}function M(e,t="meters"){if(!e)throw new n("geodesic-lengths:invalid-geometries","the input geometries type is not supported");const s=e.some((e=>!g(e.spatialReference)));if(s)throw new n("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<e.length;n++){const s=e[n],{spatialReference:o}=s,r="polyline"===s.type?s.paths:s.rings;let c=0;for(let e=0;e<r.length;e++){const t=r[e];let n=0;for(let e=1;e<t.length;e++){const i=t[e-1][0],s=t[e][0],a=t[e-1][1],r=t[e][1];if(a!==r||i!==s){const e={distance:null};y(e,[i,a],[s,r],o),n+=e.distance}}c+=n}c=i.convertUnit(c,"meters",t),a.push(c)}return a}function w(e,t){if("polyline"!==e.type&&"polygon"!==e.type)throw new n("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:i}=e;if(!g(i))throw new n("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const s="polyline"===e.type?e.paths:e.rings,r=[],c=[0,0],l={distance:null};for(const n of s){const e=[];r.push(e),e.push([n[0][0],n[0][1]]);let s,a,o=n[0][0],h=n[0][1];for(let r=0;r<n.length-1;r++){if(s=n[r+1][0],a=n[r+1][1],o===s&&h===a)continue;const u=[o,h];y(l,[o,h],[s,a],i);const{azimuth:f,distance:p}=l,d=p/t;if(d>1){for(let n=1;n<=d-1;n++){R(c,u,f,n*t,i),e.push(c.slice(0))}R(c,u,f,(p+Math.floor(d-1)*t)/2,i),e.push(c.slice(0))}R(c,u,f,p,i),e.push(c.slice(0)),o=c[0],h=c[1]}}return"polyline"===e.type?new a({paths:r,spatialReference:i}):new o({rings:r,spatialReference:i})}function R(e,t,n,i,a){const o=t[0],r=t[1],c=o*s.toRadians,l=r*s.toRadians,h=n*s.toRadians,{a:f,b:p,f:d}=u(a),g=Math.sin(h),m=Math.cos(h),M=(1-d)*Math.tan(l),w=1/Math.sqrt(1+M*M),R=M*w,y=Math.atan2(M,m),v=w*g,z=v*v,b=1-z,q=b*(f*f-p*p)/(p*p),S=1+q/16384*(4096+q*(q*(320-175*q)-768)),A=q/1024*(256+q*(q*(74-47*q)-128));let x,N,P,G,k=i/(p*S),D=2*Math.PI;for(;Math.abs(k-D)>1e-12;)P=Math.cos(2*y+k),x=Math.sin(k),N=Math.cos(k),G=A*x*(P+A/4*(N*(2*P*P-1)-A/6*P*(4*x*x-3)*(4*P*P-3))),D=k,k=i/(p*S)+G;const E=R*x-w*N*m,U=Math.atan2(R*N+w*x*m,(1-d)*Math.sqrt(z+E*E)),_=d/16*b*(4+d*(4-3*b)),F=Math.atan2(x*g,w*N-R*x*m)-(1-_)*d*v*(k+_*x*(P+_*N*(2*P*P-1))),O=U/s.toRadians,j=(c+F)/s.toRadians;return e[0]=j,e[1]=O,e}function y(e,t,n,i){const a=t[0]*s.toRadians,o=t[1]*s.toRadians,r=n[0]*s.toRadians,c=n[1]*s.toRadians,{a:l,b:h,f,radius:p}=u(i),d=r-a,g=Math.atan((1-f)*Math.tan(o)),m=Math.atan((1-f)*Math.tan(c)),M=Math.sin(g),w=Math.cos(g),R=Math.sin(m),y=Math.cos(m);let v,z,b,q,S,A,x,N,P,G,k=1e3,D=d;do{if(x=Math.sin(D),N=Math.cos(D),b=Math.sqrt(y*x*(y*x)+(w*R-M*y*N)*(w*R-M*y*N)),0===b)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;S=M*R+w*y*N,A=Math.atan2(b,S),P=w*y*x/b,z=1-P*P,q=S-2*M*R/z,isNaN(q)&&(q=0),G=f/16*z*(4+f*(4-3*z)),v=D,D=d+(1-G)*f*P*(A+G*b*(q+G*S*(2*q*q-1)))}while(Math.abs(D-v)>1e-12&&--k>0);if(0===k){const t=p,n=Math.acos(Math.sin(o)*Math.sin(c)+Math.cos(o)*Math.cos(c)*Math.cos(r-a))*t,i=r-a,l=Math.sin(i)*Math.cos(c),h=Math.cos(o)*Math.sin(c)-Math.sin(o)*Math.cos(c)*Math.cos(i),u=Math.atan2(l,h);return e.azimuth=u/s.toRadians,e.distance=n,e.reverseAzimuth=void 0,e}const E=z*(l*l-h*h)/(h*h),U=E/1024*(256+E*(E*(74-47*E)-128)),_=h*(1+E/16384*(4096+E*(E*(320-175*E)-768)))*(A-U*b*(q+U/4*(S*(2*q*q-1)-U/6*q*(4*b*b-3)*(4*q*q-3)))),F=Math.atan2(y*Math.sin(D),w*R-M*y*Math.cos(D)),O=Math.atan2(w*Math.sin(D),w*R*Math.cos(D)-M*y);return e.azimuth=F/s.toRadians,e.distance=_,e.reverseAzimuth=O/s.toRadians,e}function v(e,t,s="meters"){if(!e||!t)throw new n("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!e.spatialReference||!t.spatialReference)throw new n("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!e.spatialReference.equals(t.spatialReference))throw new n("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:a}=e;if(!g(a))throw new n("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(e.equals(t))return{distance:0,azimuth:0,reverseAzimuth:0};const o={distance:null};return y(o,[e.x,e.y],[t.x,t.y],a),o.distance=i.convertUnit(o.distance,"meters",s),o.azimuth=p(o.azimuth),o.reverseAzimuth=p(o.reverseAzimuth),o}function z(e,t,i){if(!e||null==t||null==i)throw new n("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(i<0||i>360)throw new n("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0° to 360° degrees");if(!e.spatialReference)throw new n("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:s}=e;if(!g(s))throw new n("geodesic-distance:not-supported","input geometry spatial reference is not supported");const a=[0,0];return R(a,[e.x,e.y],i,t,s),new r({x:a[0],y:a[1],spatialReference:s})}e.directGeodeticSolver=R,e.geodesicAreas=m,e.geodesicDensify=w,e.geodesicDistance=v,e.geodesicLengths=M,e.inverseGeodeticSolver=y,e.isSupported=g,e.pointFromDistance=z,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));