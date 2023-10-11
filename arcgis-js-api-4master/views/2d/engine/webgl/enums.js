/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(T){"use strict";var E,L,I,A,_,S,O;T.WGLGeometryType=void 0,(E=T.WGLGeometryType||(T.WGLGeometryType={}))[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL",T.WGLGeometryTransactionStatus=void 0,(L=T.WGLGeometryTransactionStatus||(T.WGLGeometryTransactionStatus={}))[L.SUCCEEDED=0]="SUCCEEDED",L[L.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",T.WGLDrawPhase=void 0,(I=T.WGLDrawPhase||(T.WGLDrawPhase={}))[I.NONE=0]="NONE",I[I.MAP=1]="MAP",I[I.LABEL=2]="LABEL",I[I.LABEL_ALPHA=4]="LABEL_ALPHA",I[I.HITTEST=8]="HITTEST",I[I.HIGHLIGHT=16]="HIGHLIGHT",I[I.CLIP=32]="CLIP",I[I.DEBUG=64]="DEBUG",I[I.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",T.VVType=void 0,(A=T.VVType||(T.VVType={}))[A.SIZE=0]="SIZE",A[A.COLOR=1]="COLOR",A[A.OPACITY=2]="OPACITY",A[A.ROTATION=3]="ROTATION",T.WGLVVFlag=void 0,(_=T.WGLVVFlag||(T.WGLVVFlag={}))[_.NONE=0]="NONE",_[_.OPACITY=1]="OPACITY",_[_.COLOR=2]="COLOR",_[_.ROTATION=4]="ROTATION",_[_.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",_[_.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",_[_.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",_[_.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",T.WGLVVTarget=void 0,(S=T.WGLVVTarget||(T.WGLVVTarget={}))[S.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",S[S.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",S[S.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",S[S.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",T.MosaicType=void 0,(O=T.MosaicType||(T.MosaicType={}))[O.SPRITE=0]="SPRITE",O[O.GLYPH=1]="GLYPH",Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));