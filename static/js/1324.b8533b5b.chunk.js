"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[1324],{968:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,e,n,r,i,o,s,c,u){return[t,e,n,r,i,o,s,c,u]}function o(t,e){return new Float64Array(t,e,9)}n.d(e,{a:()=>r,c:()=>o,f:()=>i});Object.freeze(Object.defineProperty({__proto__:null,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},56084:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e){return new Float64Array(t,e,16)}n.d(e,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(t,e,n,r,i,o,s,c,u,a,f,l,h,E,I,T){return[t,e,n,r,i,o,s,c,u,a,f,l,h,E,I,T]}},Symbol.toStringTag,{value:"Module"}))},40916:(t,e,n)=>{function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(t,e,n,r){return[t,e,n,r]}},Symbol.toStringTag,{value:"Module"}))},76388:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>g,f:()=>m,g:()=>N,h:()=>_,j:()=>p,n:()=>y});n(98323);var r=n(67424),i=n(18668),o=n(60112),s=n(50948),c=n(48680),u=n(91068),a=n(42092),f=n(67696),l=n(82200),h=n(64088),E=n(14992),I=n(73688);const T=g();function g(){return(0,a.c)()}const A=u.e,O=u.e;function _(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g();return(0,u.c)(e,t)}function d(t){return t[3]}function N(t){return t}function m(t,e,n,r){return(0,a.f)(t,e,n,r)}function S(t,e,n){if(null==e)return!1;if(!R(t,e,M))return!1;let{t0:r,t1:i}=M;if((r<0||i<r&&i>0)&&(r=i),r<0)return!1;if(n){const{origin:t,direction:i}=e;n[0]=t[0]+i[0]*r,n[1]=t[1]+i[1]*r,n[2]=t[2]+i[2]*r}return!0}const M={t0:0,t1:0};function R(t,e,n){const{origin:r,direction:i}=e,o=P;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),u=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const P=(0,c.c)();function p(t,e){return S(t,e,null)}function L(t,e,n){const r=I.Wq.get(),i=I.SW.get();(0,s.b)(r,e.origin,e.direction);const c=d(t);(0,s.b)(n,r,e.origin),(0,s.i)(n,n,1/(0,s.l)(n)*c);const u=C(t,e.origin),a=(0,E.i4)(e.origin,n);return(0,o.c)(i,a+u,r),(0,s.e)(n,n,i),n}function b(t,e,n){const r=(0,s.f)(I.Wq.get(),e,t),i=(0,s.i)(I.Wq.get(),r,t[3]/(0,s.l)(r));return(0,s.g)(n,i,t)}function C(t,e){const n=(0,s.f)(I.Wq.get(),e,t),r=(0,s.l)(n),o=d(t),c=o+Math.abs(o-r);return(0,i.Uj)(o/c)}const v=(0,c.c)();function B(t,e,n,r){const o=(0,s.f)(v,e,t);switch(n){case l.k.X:{const t=(0,i.Iv)(o,v)[2];return(0,s.s)(r,-Math.sin(t),Math.cos(t),0)}case l.k.Y:{const t=(0,i.Iv)(o,v),e=t[1],n=t[2],c=Math.sin(e);return(0,s.s)(r,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case l.k.Z:return(0,s.n)(r,o);default:return}}function F(t,e){const n=(0,s.f)(V,e,t);return(0,s.l)(n)-t[3]}function y(t,e){const n=(0,s.a)(t,e),r=d(t);return n<=r*r}const V=(0,c.c)(),D=g();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:T,altitudeAt:F,angleToSilhouette:C,axisAt:B,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return S(t,e,n)?n:((0,h.CE)(e,t,n),b(t,n,n))},closestPointOnSilhouette:L,containsPoint:y,copy:_,create:g,distanceToSilhouette:function(t,e){const n=(0,s.f)(I.Wq.get(),e,t),r=(0,s.m)(n),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},elevate:function(t,e,n){return t!==n&&(0,s.c)(n,t),n[3]=t[3]+e,n},equals:O,exactEquals:A,fromCenterAndRadius:function(t,e){return(0,a.f)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:m,getCenter:N,getRadius:d,intersectLine:function(t,e,n){const r=(0,h.i_)(e,n);if(!R(t,r,M))return[];const{origin:i,direction:o}=r,{t0:u,t1:a}=M,l=e=>{const n=(0,c.c)();return(0,s.q)(n,i,o,e),b(t,n,n)};return Math.abs(u-a)<(0,f.g)()?[l(u)]:[l(u),l(a)]},intersectRay:S,intersectRayClosestSilhouette:function(t,e,n){if(S(t,e,n))return n;const r=L(t,e,I.Wq.get());return(0,s.g)(n,e.origin,(0,s.i)(I.Wq.get(),e.direction,(0,s.o)(e.origin,r)/(0,s.l)(e.direction))),n},intersectsRay:p,projectPoint:b,setAltitudeAt:function(t,e,n,r){const i=F(t,e),o=B(t,e,l.k.Z,V),c=(0,s.i)(V,o,n-i);return(0,s.g)(r,e,c)},setExtent:function(t,e,n){return r.c.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)},tmpSphere:D,union:function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g();const r=(0,s.o)(t,e),i=t[3],o=e[3];return r+o<i?((0,u.c)(n,t),n):r+i<o?((0,u.c)(n,e),n):((0,s.p)(n,t,e,(r+o-i)/(2*r)),n[3]=(r+i+o)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},38760:(t,e,n)=>{var r;n.d(e,{M:()=>r}),function(t){t[t.KILOBYTES=1024]="KILOBYTES",t[t.MEGABYTES=1048576]="MEGABYTES",t[t.GIGABYTES=1073741824]="GIGABYTES"}(r||(r={}))},79872:(t,e,n)=>{n.d(e,{o:()=>i});var r=n(72656);class i{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.o)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},81663:(t,e,n)=>{n.d(e,{Su:()=>s,XX:()=>c,i4:()=>I});n(18668);var r=n(50948),i=n(48680),o=(n(91068),n(67696));n(76388),n(14992),n(73688);(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)();function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return[t[0],t[1],t[2],t[3]]}function c(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.floor(n*(1/3)),I=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.floor(n*(2/3));if(n<3)return!1;e(a,i);let T=o,g=!1;for(;T<n-1&&!g;)e(f,T),T++,g=!(0,r.h)(a,f);if(!g)return!1;for(T=Math.max(T,I),g=!1;T<n&&!g;)e(l,T),T++,(0,r.f)(h,a,f),(0,r.n)(h,h),(0,r.f)(E,f,l),(0,r.n)(E,E),g=!(0,r.h)(a,l)&&!(0,r.h)(f,l)&&Math.abs((0,r.j)(h,E))<u;return g?(function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s();const i=n[0]-e[0],o=n[1]-e[1],c=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],f=t[2]-e[2],l=o*f-c*a,h=c*u-i*f,E=i*a-o*u,I=l*l+h*h+E*E,T=Math.abs(I-1)>1e-5&&I>1e-12?1/Math.sqrt(I):1;r[0]=l*T,r[1]=h*T,r[2]=E*T,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])}(a,f,l,t),!0):(0!==i||1!==o||2!==I)&&c(t,e,n,0,1,2)}const u=.99619469809,a=(0,i.c)(),f=(0,i.c)(),l=(0,i.c)(),h=(0,i.c)(),E=(0,i.c)();(()=>{const t=(0,i.c)()})();function I(t){return t}const T=[0,0,1,0];var g;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(g||(g={}));g.INFINITE_MIN,g.INFINITE_MAX,g.INFINITE_MAX},64088:(t,e,n)=>{n.d(e,{CE:()=>f,Su:()=>s,em:()=>u,i_:()=>a});n(43968);var r=n(79872),i=n(50948),o=n(48680);n(73688);function s(t){return t?c((0,o.g)(t.origin),(0,o.g)(t.direction)):c((0,o.c)(),(0,o.c)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=l.get();return n.origin=t,n.direction=e,n}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.f)(n.direction,e,t),n}function f(t,e,n){const r=(0,i.j)(t.direction,(0,i.f)(n,e,t.origin));return(0,i.g)(n,t.origin,(0,i.i)(n,t.direction,r)),n}const l=new r.o((()=>s()))},14992:(t,e,n)=>{n.d(e,{i4:()=>s});var r=n(18668),i=n(50948),o=n(48680);function s(t,e){const n=(0,i.j)(t,e)/((0,i.l)(t)*(0,i.l)(e));return-(0,r.Uj)(n)}(0,o.c)(),(0,o.c)()},73688:(t,e,n)=>{n.d(e,{SW:()=>I,Wq:()=>E});var r=n(38760),i=n(72656),o=n(968),s=n(56084),c=n(40916),u=n(65615),a=n(48680),f=n(42092);class l{constructor(t,e,n){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.o)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(16,u.c,t)}static createVec3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(24,a.a,t)}static createVec4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,f.a,t)}static createMat3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(72,o.c,t)}static createMat4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(128,s.c,t)}static createQuatf64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,c.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*r.M.KILOBYTES,E=(l.createVec2f64(),l.createVec3f64()),I=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},8944:(t,e,n)=>{var r;n.d(e,{K:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))}}]);
//# sourceMappingURL=1324.b8533b5b.chunk.js.map