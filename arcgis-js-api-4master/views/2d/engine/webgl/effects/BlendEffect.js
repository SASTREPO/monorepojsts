/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../enums","../VertexStream","../shaders/BlendPrograms","../../../../webgl/enums","../../../../webgl/Texture"],(function(e,t,r,i,n,a,s,o,d){"use strict";const u=r.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");let c=function(){function e(){this._size=[0,0]}var r=e.prototype;return r.dispose=function(e){this._backBufferTexture=i.disposeMaybe(this._backBufferTexture),this._quad=i.disposeMaybe(this._quad)},r.draw=function(e,r,i,a,d){const{context:c,drawPhase:l}=e;if(this._setupShader(c),a&&"normal"!==a&&l!==n.WGLDrawPhase.LABEL)return void this._drawBlended(e,r,i,a,d);const f=s.createProgramTemplate("normal"),h=c.programCache.acquire(f.shaders.vertexShader,f.shaders.fragmentShader,f.attributes);if(!h)return void u.error(new t("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));c.useProgram(h),r.setSamplingMode(i),c.bindTexture(r,0),h.setUniform1i("u_layerTexture",0),h.setUniform1f("u_opacity",d),c.setBlendingEnabled(!0),c.setBlendFunction(o.BlendFactor.ONE,o.BlendFactor.ONE_MINUS_SRC_ALPHA);const m=this._quad;m.draw(),m.unbind(),h.dispose()},r._drawBlended=function(e,r,n,a,d){const{context:c,state:l,pixelRatio:f,inFadeTransition:h}=e,{size:m}=l,_=c.getBoundFramebufferObject();let p,g;if(i.isSome(_)){const e=_.descriptor;p=e.width,g=e.height}else p=Math.round(f*m[0]),g=Math.round(f*m[1]);this._createOrResizeTexture(e,p,g);const T=this._backBufferTexture;_.copyToTexture(0,0,p,g,0,0,T),c.setStencilTestEnabled(!1),c.setStencilWriteMask(0),c.setBlendingEnabled(!0),c.setDepthTestEnabled(!1),c.setDepthWriteEnabled(!1);const b=s.createProgramTemplate(a),x=c.programCache.acquire(b.shaders.vertexShader,b.shaders.fragmentShader,b.attributes);if(!x)return void u.error(new t("mapview-BlendEffect",`Error creating shader program for blend mode ${a}`));c.useProgram(x),T.setSamplingMode(n),c.bindTexture(T,0),x.setUniform1i("u_backbufferTexture",0),r.setSamplingMode(n),c.bindTexture(r,1),x.setUniform1i("u_layerTexture",1),x.setUniform1f("u_opacity",d),x.setUniform1f("u_inFadeOpacity",h?1:0),c.setBlendFunction(o.BlendFactor.ONE,o.BlendFactor.ZERO);const B=this._quad;B.draw(),B.unbind(),x.dispose(),c.setBlendFunction(o.BlendFactor.ONE,o.BlendFactor.ONE_MINUS_SRC_ALPHA)},r._setupShader=function(e){this._quad||(this._quad=new a(e,[-1,-1,1,-1,-1,1,1,1]))},r._createOrResizeTexture=function(e,t,r){const{context:i}=e;null!==this._backBufferTexture&&t===this._size[0]&&r===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(t,r):this._backBufferTexture=new d.Texture(i,{target:o.TextureType.TEXTURE_2D,pixelFormat:o.PixelFormat.RGBA,internalFormat:o.PixelFormat.RGBA,dataType:o.PixelType.UNSIGNED_BYTE,wrapMode:o.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:o.TextureSamplingMode.LINEAR,flipped:!1,width:t,height:r}),this._size[0]=t,this._size[1]=r)},e}();e.BlendEffect=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));