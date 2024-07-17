"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[7008],{968:(t,e,n)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function r(t,e,n,i,r,o,a,s,l){return[t,e,n,i,r,o,a,s,l]}function o(t,e){return new Float64Array(t,e,9)}n.d(e,{a:()=>i,c:()=>o,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:i,createView:o,fromValues:r},Symbol.toStringTag,{value:"Module"}))},56084:(t,e,n)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e){return new Float64Array(t,e,16)}n.d(e,{I:()=>a,a:()=>i,b:()=>r,c:()=>o});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:r,create:i,createView:o,fromValues:function(t,e,n,i,r,o,a,s,l,h,c,u,f,d,m,p){return[t,e,n,i,r,o,a,s,l,h,c,u,f,d,m,p]}},Symbol.toStringTag,{value:"Module"}))},40916:(t,e,n)=>{function i(){return[0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3]]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,{I:()=>a,a:()=>i,b:()=>r,c:()=>o});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:r,create:i,createView:o,fromValues:function(t,e,n,i){return[t,e,n,i]}},Symbol.toStringTag,{value:"Module"}))},71400:(t,e,n)=>{n.d(e,{a:()=>s,b:()=>a,c:()=>r,d:()=>c,e:()=>l,n:()=>u,s:()=>h,t:()=>o});var i=n(70088);function r(t,e,n){o(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function o(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/o))return i._.error("source and destination buffers need to have the same number of elements"),t;const a=t.length/r,s=n[0],l=n[1],h=n[2],c=n[4],u=n[5],f=n[6],d=n[8],m=n[9],p=n[10],_=n[12],x=n[13],g=n[14];let y=0,B=0;for(let i=0;i<a;i++){const n=e[y],i=e[y+1],a=e[y+2];t[B]=s*n+c*i+d*a+_,t[B+1]=l*n+u*i+m*a+x,t[B+2]=h*n+f*i+p*a+g,y+=o,B+=r}return t}function a(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/o))return void i._.error("source and destination buffers need to have the same number of elements");const a=t.length/r,s=n[0],l=n[1],h=n[2],c=n[3],u=n[4],f=n[5],d=n[6],m=n[7],p=n[8];let _=0,x=0;for(let i=0;i<a;i++){const n=e[_],i=e[_+1],a=e[_+2];t[x]=s*n+c*i+d*a,t[x+1]=l*n+u*i+m*a,t[x+2]=h*n+f*i+p*a,_+=o,x+=r}}function l(t,e,n){h(t.typedBuffer,e,n,t.typedBufferStride)}function h(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const r=Math.min(t.length/i,e.count),o=e.typedBuffer,a=e.typedBufferStride;let s=0,l=0;for(let h=0;h<r;h++)t[l]=n*o[s],t[l+1]=n*o[s+1],t[l+2]=n*o[s+2],s+=a,l+=i}function c(t,e){u(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const r=Math.min(t.length/n,e.length/i);let o=0,a=0;for(let s=0;s<r;s++){const r=e[o],s=e[o+1],l=e[o+2],h=r*r+s*s+l*l;if(h>0){const e=1/Math.sqrt(h);t[a]=e*r,t[a+1]=e*s,t[a+2]=e*l}o+=i,a+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:c,scale:h,scaleView:l,shiftRight:function(t,e,n){const i=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,a=e.typedBuffer,s=e.typedBufferStride;let l=0,h=0;for(let c=0;c<i;c++)r[h]=a[l]>>n,r[h+1]=a[l+1]>>n,r[h+2]=a[l+2]>>n,l+=s,h+=o},transformMat3:s,transformMat3View:a,transformMat4:o,transformMat4View:r},Symbol.toStringTag,{value:"Module"}))},52328:(t,e,n)=>{n.d(e,{U:()=>a});var i=n(43968),r=n(74816),o=n(87264);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),y.prune(),B.prune(),M.prune(),v.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(x(t,n))for(y.clear();n;){for(let r=0,o=n.children.length;r<o;r++){const o=n.children[r],a=n.leaf?i(o):o;x(t,a)&&(n.leaf?e(o):_(t,a)?this._all(o,e):y.push(o))}n=y.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!x(t,e))return!1;for(y.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const r=e.children[i],o=e.leaf?n(r):r;if(x(t,o)){if(e.leaf||_(t,o))return!0;y.push(r)}}e=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new X([]),this}remove(t){if(!t)return this;let e,n=this._data,r=null,o=0,a=!1;const s=this._toBBox(t);for(M.clear(),v.clear();n||M.length>0;){var l;if(n||(n=M.pop(),r=M.data[M.length-1],o=null!==(l=v.pop())&&void 0!==l?l:0,a=!0),n.leaf&&(e=(0,i.IP)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;a||n.leaf||!_(n,s)?r?(o++,n=r.children[o],a=!1):n=null:(M.push(n),v.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(B.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else B.pushArray(n.children);n=null!==(i=B.pop())&&void 0!==i?i:null}}_build(t,e,n,i){const r=n-e+1;let o=this._maxEntries;if(r<=o){const i=new X(t.slice(e,n+1));return s(i,this._toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/o**(i-1)));const a=new b([]);a.height=i;const l=Math.ceil(r/o),h=l*Math.ceil(Math.sqrt(o));g(t,e,n,h,this._compareMinX);for(let s=e;s<=n;s+=h){const e=Math.min(s+h-1,n);g(t,s,e,l,this._compareMinY);for(let n=s;n<=e;n+=l){const r=Math.min(n+l-1,e);a.children.push(this._build(t,n,r,i-1))}}return s(a,this._toBBox),a}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,r=1/0;for(let o=0,a=e.children.length;o<a;o++){const a=e.children[o],s=f(a),l=m(t,a)-s;l<r?(r=l,i=s<i?s:i,n=a):l===r&&s<i&&(i=s,n=a)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,r=n?t:i(t);M.clear();const o=this._chooseSubtree(r,this._data,e,M);for(o.children.push(t),h(o,r);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(r,M,e)}_split(t,e){const n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const o=this._chooseSplitIndex(n,r,i);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(o,n.children.length-o),l=n.leaf?new X(a):new b(a);l.height=n.height,s(n,this._toBBox),s(l,this._toBBox),e?t.data[e-1].children.push(l):this._splitRoot(n,l)}_splitRoot(t,e){this._data=new b([t,e]),this._data.height=t.height+1,s(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,r,o;i=r=1/0;for(let a=e;a<=n-e;a++){const e=l(t,0,a,this._toBBox),s=l(t,a,n,this._toBBox),h=p(e,s),c=f(e)+f(s);h<i?(i=h,o=a,r=c<r?c:r):h===i&&c<r&&(r=c,o=a)}return o}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:c,r=t.leaf?this._compareMinY:u;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const r=this._toBBox,o=l(t,0,e,r),a=l(t,n-e,n,r);let s=d(o)+d(a);for(let l=e;l<n-e;l++){const e=t.children[l];h(o,t.leaf?r(e):e),s+=d(o)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];h(a,t.leaf?r(e):e),s+=d(a)}return s}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)h(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const r=t.data[e-1],o=r.children;o.splice((0,i.IP)(o,n,o.length,r.indexHint),1)}else this.clear();else s(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function s(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,r){r||(r=new X([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let o,a=e;a<n;a++)o=t.children[a],h(r,t.leaf?i(o):o);return r}function h(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function p(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,o-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function x(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t,e,n,i,r){const a=[e,n];for(;a.length;){const e=a.pop(),n=a.pop();if(e-n<=i)continue;const s=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,s,n,e,r),a.push(n,s,s,e)}}const y=new r.c,B=new r.c,M=new r.c,v=new r.c({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Y extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i.is}}class X extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},17312:(t,e,n)=>{n.d(e,{Gg:()=>r,cp:()=>o,lL:()=>a,mw:()=>s,qW:()=>l});var i=n(75788);function r(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=i._?e?new Array(t).fill(0):new Array(t):new Float64Array(t)}function o(t){return((0,i.c7)(t)?t.length:t.byteLength/8)<=i._?Array.from(t):new Float64Array(t)}function a(t,e,n){return Array.isArray(t)?t.slice(e,e+n):t.subarray(e,e+n)}function s(t,e){for(let n=0;n<e.length;++n)t[n]=e[n];return t}function l(t){return Array.isArray(t)?new Float64Array(t):t}},38036:(t,e,n)=>{n.d(e,{c:()=>f});var i=n(51944),r=n(84588),o=n(43544),a=n(24704),s=(n(23512),n(43968),n(98323),n(78416)),l=n(32288),h=n(48680),c=n(53372);let u=class extends((0,r.q)(o.am)){constructor(t){super(t),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,h.c)()}getOriginPoint(t){const[e,n,i]=this.origin;return new c.c({x:e,y:n,z:i,spatialReference:t})}setOriginFromPoint(t){let{x:e,y:n,z:i}=t;this.origin=(0,h.f)(e,n,null!==i&&void 0!==i?i:0)}};(0,i._)([(0,s.G)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],u.prototype,"type",void 0),(0,i._)([(0,a.qq)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,i._)([(0,l.c)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],u);const f=u},24880:(t,e,n)=>{n.d(e,{c:()=>f});var i=n(51944),r=n(84588),o=n(43544),a=n(24704),s=(n(23512),n(43968),n(98323),n(78416)),l=n(32288),h=n(48680),c=n(53372);let u=class extends((0,r.q)(o.am)){constructor(t){super(t),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=(0,h.c)()}getOriginPoint(t){const[e,n,i]=this.origin;return new c.c({x:e,y:n,z:i,spatialReference:t})}setOriginFromPoint(t){let{x:e,y:n,z:i}=t;this.origin=(0,h.f)(e,n,null!==i&&void 0!==i?i:0)}};(0,i._)([(0,s.G)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,i._)([(0,a.qq)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,i._)([(0,l.c)("esri.geometry.support.MeshLocalVertexSpace")],u);const f=u},70088:(t,e,n)=>{n.d(e,{_:()=>i});const i=n(67424).c.getLogger("esri.views.3d.support.buffer.math")},99704:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var i=n(98323),r=n(52328),o=n(93968);class a{async createIndex(t,e){var n;const i=new Array;if(null===(n=t.vertexAttributes)||void 0===n||!n.position)return new r.U;const o=this._createMeshData(t),a=null!=e?await e.invoke("createIndexThread",o,{transferList:i}):this.createIndexThread(o).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let r=0;r<e.length;r+=9)n[i++]=s(e,r,r+3,r+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let i=0;for(const a of n)i+=a.length/3;const r=new Array(i);let o=0;for(const a of n)for(let t=0;t<a.length;t+=3)r[o++]=s(e,3*a[t],3*a[t+1],3*a[t+2]);return t.load(r),{result:t.toJSON()}}_createMeshData(t){const e=(t.vertexSpace.isRelative?(0,o._S)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new r.U(9,(0,i.c)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function s(t,e,n,i){return{minX:Math.min(t[e],t[n],t[i]),maxX:Math.max(t[e],t[n],t[i]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[i],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=7008.f74f3dd7.chunk.js.map