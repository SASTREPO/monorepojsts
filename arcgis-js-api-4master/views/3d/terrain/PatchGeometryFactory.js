/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../core/maybe","../../../chunks/vec3f64","../../../chunks/vec4","../../../chunks/vec4f64","../../../geometry/support/aaBoundingBox","../../../geometry/support/Ellipsoid","../../../geometry/support/buffer/BufferPool","../support/buffer/InterleavedLayout","./ElevationData","./interfaces","./TerrainConst","../webgl-engine/lib/VertexAttribute","../webgl-engine/materials/internal/MaterialUtil"],(function(e,t,n,o,i,r,s,c,a,u,l,f,m,S,g){"use strict";const h=u.newLayout().vec3f(S.VertexAttribute.POSITION).vec2f(S.VertexAttribute.UV0),p=new a.BufferPool((e=>h.createBuffer(e)),(e=>e.count));let y=function(){this.indices=null,this.vertexAttributes=null,this.boundingBox=s.empty(),this.numSurfaceIndices=0,this.numSkirtIndices=0,this.numWithoutSkirtIndices=0,this.numVertsPerRow=0,this.skirtLength=0,this.uvOffsetAndScale=r.create()},T=function(e,t,n){this.values=e,this.numSurfaceIndices=t,this.numSkirtIndices=n};function d(){p.clear(),M.clear()}function E(e){p.release(e.vertexAttributes),e.vertexAttributes=null,e.indices=null}const P=65536;function A(e,o,r,c,a,u,S,g){const h=a[0],y=a[1],T=a[2],d=a[3],E=.1*S.radius*(d-y),P=e.numVertsPerSide-1,A=e.numVertsPerSide*e.numVertsPerSide,I=4*P,M=u&&(g===f.PatchType.HAS_SOUTH_POLE||g===f.PatchType.HAS_BOTH_POLES),O=u&&(g===f.PatchType.HAS_NORTH_POLE||g===f.PatchType.HAS_BOTH_POLES),x=p.acquire(A+I),R=x.position.typedBuffer,L=x.uv0.typedBuffer,w=c.geometryInfo.boundingBox;s.empty(w);const N=o[2]-o[0],D=o[3]-o[1],U=T-h,X=r[0],q=r[1],C=r[2];for(let t=0;t<=P;t++){const e=t/P,n=h+e*U;k[t]=Math.sin(n),H[t]=Math.cos(n),B[t]=e,G[t]=o[0]+e*N}let Y=0;const j=e.samplerData,W=n.isSome(j)&&j.some((e=>n.isSome(e)))?(e,t)=>l.sampleElevation(G[e],t,j):()=>0;for(let i=0;i<=P;i++){let e=i/P;const r=t.lerp(y,d,e),s=Math.cos(r),c=Math.sin(r);let a;u?(a=S.halfSemiMajorAxis*Math.log((1+c)/(1-c)),e=(a-o[1])/D):a=180*r/Math.PI;for(let t=0;t<=P;t++){const o=B[t],r=k[t],u=H[t],l=S.radius+W(t,a),f=u*s*l-X,g=r*s*l-q,h=c*l-C;b(f,g,h,w);const p=m.GEOMETRY_VERTEX_STRIDE*Y;R[p+0]=f,R[p+1]=g,R[p+2]=h,L[p+0]=o,L[p+1]=e;const y=V(t,i,P);if(n.isSome(y)){const t=m.GEOMETRY_VERTEX_STRIDE*(A+y),n=M&&0===i?-1:O&&i===P?1:0,r=0===n?f:-X,s=0===n?g:-q,c=0===n?h:S.radius*n-C;R[t+0]=r,R[t+1]=s,R[t+2]=c,L[t+0]=0===n?v(o,e):o,L[t+1]=0===n?E:e,0!==n&&b(r,s,c,w)}++Y}}c.geometryInfo.numVertsPerRow=e.numVertsPerSide,c.geometryInfo.vertexAttributes=x,c.geometryInfo.skirtLength=E,i.set(c.geometryInfo.uvOffsetAndScale,0,0,1,1),_(c.geometryInfo,e.numVertsPerSide,u?g:f.PatchType.REGULAR,e.wireframe),c.intersectionData=null,c.skirtIntersectionData=null}function I(e,t,o,r,a,u){const S=t[0],g=t[1],h=t[2]-S,y=t[3]-g,T=e.clippingArea,d=n.isSome(T)?Math.max(0,(T[0]-t[0])/h):0,E=n.isSome(T)?Math.max(0,(T[1]-t[1])/y):0,P=n.isSome(T)?Math.min(1,(T[2]-t[0])/h):1,A=n.isSome(T)?Math.min(1,(T[3]-t[1])/y):1,I=P>d?1/(P-d):1,M=A>E?1/(A-E):1,O=-d*I,x=-E*M,R=h*r*.1,L=e.numVertsPerSide-1,w=e.numVertsPerSide*e.numVertsPerSide,k=4*L,H=p.acquire(w+k),B=H.position.typedBuffer,G=H.uv0.typedBuffer,N=u.geometryInfo.boundingBox;s.empty(N);let D=0;const U=c.earth.radius,X=e.samplerData,q=n.isSome(X)&&X.some((e=>n.isSome(e)))?(e,t)=>l.sampleElevation(e,t,X):()=>0;for(let i=0;i<=L;i++){const e=i/L;let t=x+e*M,s=g+e*y;n.isSome(T)&&(s<T[1]?(s=T[1],t=0):s>T[3]&&(s=T[3],t=1));const c=s,u=(a?(Math.PI/2-2*Math.atan(Math.exp(-c/U)))*U:c*r)-o[1];for(let a=0;a<=L;a++){const e=a/L;let s=O+e*I,l=S+e*h;n.isSome(T)&&(l<T[0]?(l=T[0],s=0):l>T[2]&&(l=T[2],s=1));const f=q(l,c),g=l*r-o[0],p=f-o[2];b(g,u,p,N);const y=m.GEOMETRY_VERTEX_STRIDE*D;B[y+0]=g,B[y+1]=u,B[y+2]=p,G[y+0]=s,G[y+1]=t;const d=V(a,i,L);if(n.isSome(d)){const e=m.GEOMETRY_VERTEX_STRIDE*(w+d);B[e+0]=g,B[e+1]=u,B[e+2]=p,G[e+0]=v(s,t),G[e+1]=R}++D}}u.geometryInfo.numVertsPerRow=e.numVertsPerSide,u.geometryInfo.vertexAttributes=H,u.geometryInfo.skirtLength=R,i.set(u.geometryInfo.uvOffsetAndScale,d,E,P-d,A-E),_(u.geometryInfo,e.numVertsPerSide,f.PatchType.REGULAR,e.wireframe),u.intersectionData=null,u.skirtIntersectionData=null}const M=new Map;function _(e,t,n,o){const i=n===f.PatchType.HAS_NORTH_POLE||n===f.PatchType.HAS_BOTH_POLES,r=t+(o?1024:0)+(i?2048:0);let s=M.get(r);s||(s=O(t,i,o),M.set(r,s)),e.indices=s.values,e.numSurfaceIndices=s.numSurfaceIndices,e.numSkirtIndices=s.numSkirtIndices,e.numWithoutSkirtIndices=e.numSurfaceIndices+(n===f.PatchType.REGULAR?0:6*(t-1)*(o?2:1))}function O(e,t,o){const i=e-1,r=e*e,s=4*i;let c=2*r*3,a=6*s,u=6*(2*i+i-1);o&&(c*=2,a*=2,u*=2);const l=r+s>P?new Uint32Array(c+a):new Uint16Array(c+a);let f=0,m=0,S=c;for(let g=0;g<=i;g++){let e=0;t&&(e=0===g?u:g===i?-u:0),S+=e;for(let t=0;t<=i;t++){const e=V(t,g,i);if(n.isSome(e)){const n=x(t,g,i);if(0!==n){const i=f,s=r+e,c=r+(0===t&&1===g?0:e+1),a=f+n;o?(l[S++]=i,l[S++]=s,l[S++]=s,l[S++]=c,l[S++]=c,l[S++]=i,l[S++]=c,l[S++]=a,l[S++]=a,l[S++]=i,l[S++]=i,l[S++]=c):(l[S++]=i,l[S++]=s,l[S++]=c,l[S++]=c,l[S++]=a,l[S++]=i)}}if(++f,t<i&&g<i){const e=g*(i+1)+t,n=e+1,r=n+(i+1),s=r-1;o?(l[m++]=e,l[m++]=n,l[m++]=n,l[m++]=r,l[m++]=r,l[m++]=e,l[m++]=r,l[m++]=s,l[m++]=s,l[m++]=e,l[m++]=e,l[m++]=r):(l[m++]=e,l[m++]=n,l[m++]=r,l[m++]=r,l[m++]=s,l[m++]=e)}}S-=e}return new T(l,c,a)}function b(e,t,n,o){e<o[0]&&(o[0]=e),e>o[3]&&(o[3]=e),t<o[1]&&(o[1]=t),t>o[4]&&(o[4]=t),n<o[2]&&(o[2]=n),n>o[5]&&(o[5]=n)}function v(e,t){const n=t>e?1:0;return 2+4*n+(1-2*n)*(e+t)}function V(e,t,n){return 0===t?e:e===n?n+t:t===n?3*n-e:0===e&&t>0?4*n-t:null}function x(e,t,n){return 0===t&&e!==n?1:e===n&&t!==n?n+1:t===n&&0!==e?-1:0===e&&0!==t?-(n+1):0}function R(e,t,o,i,r,s,c,a,u,l){const f=s.position,m=s.uv0,S=e[0],h=e[1],p=e[2],y=t[0]-S,T=t[1]-h,d=t[2]-p;i*=3;for(let E=o*=3;E<i;E+=3){const e=r[E],t=r[E+1],o=r[E+2];let i=f.get(e,0),s=f.get(e,1),P=f.get(e,2),A=f.get(t,0),I=f.get(t,1),M=f.get(t,2),_=f.get(o,0),O=f.get(o,1),b=f.get(o,2);if(m.get(e,0)>=2){const e=i+a[0],t=s+a[1],n=P+a[2],o=c/Math.sqrt(e*e+t*t+n*n);i+=e*o,s+=t*o,P+=n*o}if(m.get(t,0)>=2){const e=A+a[0],t=I+a[1],n=M+a[2],o=c/Math.sqrt(e*e+t*t+n*n);A+=e*o,I+=t*o,M+=n*o}if(m.get(o,0)>=2){const e=_+a[0],t=O+a[1],n=b+a[2],o=c/Math.sqrt(e*e+t*t+n*n);_+=e*o,O+=t*o,b+=n*o}n.isSome(u)&&([i,s,P]=u.applyToVertex(i,s,P),[A,I,M]=u.applyToVertex(A,I,M),[_,O,b]=u.applyToVertex(_,O,b));const v=A-i,V=I-s,x=M-P,R=_-i,L=O-s,w=b-P,k=T*w-L*d,H=d*R-w*y,B=y*L-R*T,G=v*k+V*H+x*B;if(Math.abs(G)<=Number.EPSILON)continue;const D=S-i,U=h-s,X=p-P,q=D*k+U*H+X*B;if(G>0){if(q<0||q>G)continue}else if(q>0||q<G)continue;const C=U*x-V*X,Y=X*v-x*D,j=D*V-v*U,W=y*C+T*Y+d*j;if(G>0){if(W<0||q+W>G)continue}else if(W>0||q+W<G)continue;const F=(R*C+L*Y+w*j)/G;if(F>=0){l(F,g.computeNormal(v,V,x,R,L,w,N))}}}function L(e,t,n,o,i,r){const s=o.position,c=o.uv0,a=new Map,u=3*t,l=3*n-u,f=new Uint32Array(l);let m=0;for(let g=0;g<l;++g){const t=e[g+u];if(a.has(t))f[g]=a.get(t);else{const e=m++;a.set(t,e),f[g]=e}}const S=new Float64Array(3*m);return a.forEach(((e,t)=>{let n=s.get(t,0),o=s.get(t,1),a=s.get(t,2);if(c.get(t,0)>=2){const e=n+r[0],t=o+r[1],s=a+r[2],c=i/Math.sqrt(e*e+t*t+s*s);n+=e*c,o+=t*c,a+=s*c}S[3*e+0]=n,S[3*e+1]=o,S[3*e+2]=a})),{vertices:S,indices:f}}function w(e,t,o,i,r,s,c,a,u){const l=s.position,f=s.uv0,m=e[0],S=e[1],h=e[2],p=t[0]-m,y=t[1]-S,T=t[2]-h;i*=3;for(let d=o*=3;d<i;d+=3){const e=r[d],t=r[d+1],o=r[d+2];let i=l.get(e,0),s=l.get(e,1),E=l.get(e,2),P=l.get(t,0),A=l.get(t,1),I=l.get(t,2),M=l.get(o,0),_=l.get(o,1),O=l.get(o,2);f.get(e,0)>=2&&(E+=c);f.get(t,0)>=2&&(I+=c);f.get(o,0)>=2&&(O+=c),n.isSome(a)&&([i,s,E]=a.applyToVertex(i,s,E),[P,A,I]=a.applyToVertex(P,A,I),[M,_,O]=a.applyToVertex(M,_,O));const b=P-i,v=A-s,V=I-E,x=M-i,R=_-s,L=O-E,w=y*L-R*T,k=T*x-L*p,H=p*R-x*y,B=b*w+v*k+V*H;if(Math.abs(B)<=Number.EPSILON)continue;const G=m-i,D=S-s,U=h-E,X=G*w+D*k+U*H;if(B>0){if(X<0||X>B)continue}else if(X>0||X<B)continue;const q=D*V-v*U,C=U*b-V*G,Y=G*v-b*D,j=p*q+y*C+T*Y;if(B>0){if(j<0||X+j>B)continue}else if(j>0||X+j<B)continue;const W=(x*q+R*C+L*Y)/B;if(W>=0){u(W,g.computeNormal(b,v,V,x,R,L,N))}}}const k=new Array(m.MAX_PATCH_TESSELATION+1),H=new Array(m.MAX_PATCH_TESSELATION+1),B=new Array(m.MAX_PATCH_TESSELATION+1),G=new Array(m.MAX_PATCH_TESSELATION+1),N=o.create();e.PatchGeometry=y,e.clearCaches=d,e.createPlanarGlobePatch=I,e.createSphericalGlobePatch=A,e.getGlobalSkirtGeometry=L,e.intersectSkirtsGlobal=R,e.intersectSkirtsLocal=w,e.releaseGeometry=E,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));