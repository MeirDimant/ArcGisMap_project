"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[7100],{968:(e,t,i)=>{function s(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,i,s,r,n,o,a,l){return[e,t,i,s,r,n,o,a,l]}function n(e,t){return new Float64Array(e,t,9)}i.d(t,{a:()=>s,c:()=>n,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:s,createView:n,fromValues:r},Symbol.toStringTag,{value:"Module"}))},66951:(e,t,i)=>{i.d(t,{a:()=>u,r:()=>c});var s=i(28200),r=i(968),n=i(49760),o=i(50948);const a=(0,i(48680).c)(),l=(0,r.a)(),h=(0,r.a)(),d=(0,r.a)();function c(e,t,i){return(0,o.s)(a,t[0],t[1],1),(0,o.t)(a,a,(0,s.t)(l,i)),0===a[2]?(0,n.s)(e,a[0],a[1]):(0,n.s)(e,a[0]/a[2],a[1]/a[2])}function u(e,t,i){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(d,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,s.m)(e,(0,s.a)(h,h),d),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,i,r,n,h,d,c,u){(0,s.s)(e,t,r,h,i,n,d,1,1,1),(0,o.s)(a,c,u,1),(0,s.a)(l,e);const[p,y,v]=(0,o.t)(a,a,(0,s.t)(l,l));return(0,s.s)(l,p,0,0,0,y,0,0,0,v),(0,s.m)(e,l,e)}},16872:(e,t,i)=>{i.d(t,{c1:()=>o,gZ:()=>l,u6:()=>a});var s=i(18668),r=i(50016);const n=96;function o(e,t){const i=t||e.extent,s=e.width,o=(0,r.k8)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*o*r.Co*n:0}function a(e,t){return e/((0,r.k8)(t)*r.Co*n)}function l(e,t,i){return function(e,t){return 0===t||(0,s.gP)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.gP)(e,t)||e>t}(e,i)}},67416:(e,t,i)=>{i.d(t,{S:()=>c});var s=i(51944),r=i(56776),n=i(24704),o=(i(23512),i(43968),i(98323),i(32288)),a=i(50968),l=i(91420),h=i(6040),d=i(4481);let c=class extends r.c{constructor(e){super(e)}get bounds(){const e=this.coords;return null==(null===e||void 0===e?void 0:e.extent)?null:(0,h.ER)(e.extent)}get coords(){var e;const t=null===(e=this.element.georeference)||void 0===e?void 0:e.coords;return(0,l.projectOrLoad)(t,this.spatialReference).geometry}get normalizedCoords(){return a.c.fromJSON((0,d.UH)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.ER)(e):null}};(0,s._)([(0,n.qq)()],c.prototype,"spatialReference",void 0),(0,s._)([(0,n.qq)()],c.prototype,"element",void 0),(0,s._)([(0,n.qq)()],c.prototype,"bounds",null),(0,s._)([(0,n.qq)()],c.prototype,"coords",null),(0,s._)([(0,n.qq)()],c.prototype,"normalizedCoords",null),(0,s._)([(0,n.qq)()],c.prototype,"normalizedBounds",null),c=(0,s._)([(0,o.c)("esri.layers.support.MediaElementView")],c)},95008:(e,t,i)=>{i.d(t,{y:()=>T});var s=i(51944),r=i(89096),n=i(10952),o=i(80808),a=i(6016),l=i(24704),h=(i(23512),i(43968),i(98323),i(32288)),d=i(16872),c=i(75520),u=i(53992),p=i(43544);let y=class extends p.am{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.qq)({readOnly:!0})],y.prototype,"version",null),y=(0,s._)([(0,h.c)("esri.views.layers.support.ClipArea")],y);const v=y;var m;let f=m=class extends v{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new m({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.qq)({type:[Number,String],json:{write:!0}})],f.prototype,"left",void 0),(0,s._)([(0,l.qq)({type:[Number,String],json:{write:!0}})],f.prototype,"right",void 0),(0,s._)([(0,l.qq)({type:[Number,String],json:{write:!0}})],f.prototype,"top",void 0),(0,s._)([(0,l.qq)({type:[Number,String],json:{write:!0}})],f.prototype,"bottom",void 0),f=m=(0,s._)([(0,h.c)("esri.views.layers.support.ClipRect")],f);const _=f;i(99912);var g,w=i(46832),q=i(1016),R=i(31004),b=i(50968);const S={base:w.c,key:"type",typeMap:{extent:R.c,polygon:b.c}};let x=g=class extends v{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new g({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.qq)({types:S,json:{read:q.h4,write:!0}})],x.prototype,"geometry",void 0),x=g=(0,s._)([(0,h.c)("esri.views.layers.support.Geometry")],x);const E=x;let V=class extends v{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.qq)({type:[[[Number]]],json:{write:!0}})],V.prototype,"path",void 0),V=(0,s._)([(0,h.c)("esri.views.layers.support.Path")],V);const C=V,M=r.c.ofType({key:"type",base:null,typeMap:{rect:_,path:C,geometry:E}}),T=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.c("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.q),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.aE)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.KG),(0,a.aE)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.KG),(0,a.aE)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.KG),(0,a.aE)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.KG),(0,a.aE)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.KG),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.KG),(0,a.aE)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),a.KG)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.gZ)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,l.qq)()],t.prototype,"attached",void 0),(0,s._)([(0,l.qq)({type:M,set(e){const t=(0,n.q)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.qq)()],t.prototype,"container",void 0),(0,s._)([(0,l.qq)()],t.prototype,"moving",void 0),(0,s._)([(0,l.qq)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.qq)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.qq)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.qq)()],t.prototype,"updating",null),(0,s._)([(0,l.qq)()],t.prototype,"view",void 0),(0,s._)([(0,l.qq)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.qq)({type:u.c})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,h.c)("esri.views.2d.layers.LayerView2D")],t),t}},97100:(e,t,i)=>{i.r(t),i.d(t,{default:()=>se});var s=i(51944),r=(i(99912),i(72400),i(74920),i(23188),i(39950),i(30760),i(31892),i(6992),i(5844),i(51368),i(71879),i(67424)),n=(i(8636),i(89096)),o=(i(98323),i(67708)),a=i(36844),l=i(6016),h=i(24704),d=(i(23512),i(43968),i(32288)),c=i(6040),u=i(76864),p=i(89956),y=i(67416),v=i(80808),m=(i(92004),i(16832),i(1316),i(17616),i(9968),i(85188),i(8676)),f=(i(39940),i(95904),i(18668)),_=i(60216),g=(i(5428),i(40076)),w=(i(3172),i(644),i(11400),i(13871),i(96940)),q=(i(9188),i(85732),i(1812),i(47632),i(65408),i(51904),i(97492),i(77696),i(33640),i(56372)),R=(i(40415),i(13376),i(73892)),b=i(58552),S=(i(22588),i(13480),i(95316),i(68080),i(75376),i(72e3),i(4440)),x=(i(75712),i(18124),i(8724),i(76956),i(66421),i(516),i(99496),i(45548),i(30096),i(82268),i(28792),i(91520),i(93960),i(83512),i(37904),i(96724),i(51764),i(37644),i(79064),i(50016),i(272),i(9508)),E=i(7048),V=(i(52140),i(61712),i(57128),i(64080),i(4240),i(40612)),C=i(5384),M=i(51952),T=i(45e3),O=i(66951),P=i(968),A=i(49760),G=i(65615),H=i(28416),I=i(59432),U=i(52740);const z=(0,P.a)(),L={none:H.aG.None,loop:H.aG.Loop,oscillate:H.aG.Oscillate};class D extends m.O{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=(0,G.a)(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,l.aE)((()=>this.elementView.element.opacity),(e=>this.opacity=e),l._8),(0,l.aE)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),l._8),(0,l.aE)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{var e;null!==(e=this._playHandle)&&void 0!==e&&e.remove(),this.texture=(0,T.yI)(this.texture),this.requestRender()}),l._8),(0,l._I)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push((0,M.on)(e.content,"play",(()=>this.requestRender())))}),l._8)),e.element.load().catch((t=>{r.c.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new v.c("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){var e;null!==(e=this._playHandle)&&void 0!==e&&e.remove(),this._handles.forEach((e=>e.remove())),this.texture=(0,T.yI)(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,s=i instanceof HTMLVideoElement,r=e?i.naturalWidth:s?i.videoWidth:i.width,n=e?i.naturalHeight:s?i.videoHeight:i.height;if(this._updatePerspectiveTransform(r,n),this.texture)s&&!i.paused&&(this.texture.setData(i),this.requestRender(),(t.type===_.cV.WEBGL2||(0,f.Ki)(r)&&(0,f.Ki)(n))&&this.texture.generateMipmap());else{const e=new U.O;if(e.wrapMode=w.Qz.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=n,"getFrame"in i){const s=i=>{this.texture?this.texture.setData(i):this.texture=new R.w(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=(0,I.Eb)(i,function(e){return e?{...e,playAnimation:e.playing,repeatType:e.repeatType?L[e.repeatType]:void 0}:{}}(this.elementView.element.animationOptions),null,s))}else this.texture=new R.w(t,e,i);(t.type===_.cV.WEBGL2||(0,f.Ki)(r)&&(0,f.Ki)(n))&&this.texture.generateMipmap(),s&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(null==i)return;const[s,r,n,o]=i.rings[0],a=this._vertices,{x:l,y:h}=e,d=0!==t;d?a.set([r[0]-l,r[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,r[0]+t-l,r[1]-h,r[0]+t-l,r[1]-h,s[0]+t-l,s[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):a.set([r[0]-l,r[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=d}getVAO(e,t,i){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=q.g.createVertex(e,w._m.DYNAMIC_DRAW,s);const r=q.g.createVertex(e,w._m.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new b._(e,i,t,{geometry:this._geometryVbo,tex:r})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,O.a)(z,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,A.s)(this.perspectiveTransform,z[6]/z[8]*e,z[7]/z[8]*t)}}var j=i(10928),k=i(28200),N=i(64548),K=i(12008),W=i(38816),B=i(46728),Q=i(27480);class F extends Q.c{constructor(){super(...arguments),this._localOrigin=(0,j.Gy)(0,0),this._viewStateId=-1,this._dvsMat3=(0,N.c)()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[B.s.overlay],target:()=>this.children,drawPhase:g.aM.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:r,resolution:n,rotation:o,viewpoint:a,displayMat3:l}=t;if(this._viewStateId===i)return;const h=Math.PI/180*o,d=r*s[0],c=r*s[1],{x:u,y:p}=a.targetGeometry,y=(0,E.Se)(u,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=p;const v=n*d,m=n*c,f=(0,k.g)(this._dvsMat3);(0,k.m)(f,f,l),(0,k.h)(f,f,(0,S.f)(d/2,c/2)),(0,k.c)(f,f,(0,x.f)(d/v,-c/m,1)),(0,k.r)(f,f,-h),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:r,worldScreenWidth:n,size:o,viewpoint:a}=i,l=this._localOrigin;let h=0;const d=(0,K.Nq)(r);if(d&&r.isWrappable){const e=o[0],c=o[1],u=180/Math.PI*s,p=Math.abs(Math.cos(u)),y=Math.abs(Math.sin(u)),v=Math.round(e*p+c*y),[m,f]=d.valid,_=(0,W.eU)(r),{x:g,y:w}=a.targetGeometry,q=[g,w],R=[0,0];i.toScreen(R,q);const b=[0,0];let S;S=v>n?.5*n:.5*v;const x=Math.floor((g+.5*_)/_),E=m+x*_,V=f+x*_,C=[R[0]+S,0];i.toMap(b,C),b[0]>V&&(h=_),C[0]=R[0]-S,i.toMap(b,C),b[0]<E&&(h=-_);for(const i of t){const e=i.elementView.bounds;if(null==e)continue;const[t,,s]=e;t<m&&s>m?i.updateDrawCoords(l,_):s>f&&t<f?i.updateDrawCoords(l,-_):i.updateDrawCoords(l,h)}}else for(const c of t)c.updateDrawCoords(l,h)}}var J=i(95008),Z=i(49128),Y=i(31004);let X=class extends((0,J.y)(Z.c)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new n.c}attach(){this.addAttachHandles([(0,l.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,l.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new F,this.container.addChild(this._overlayContainer),this._fetchQueue=new V.c({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new C.c({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var e;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),null===(e=this._debugGraphicsView)||void 0===e||e.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){var t;this._tileStrategy.update(e),null===(t=this._debugGraphicsView)||void 0===t||t.update(e)}async hitTest(e,t){const i=[],s=e.normalize(),r=[s.x,s.y];for(const{projectedElement:{normalizedCoords:n,element:o}}of this._elementReferences.values())null!=n&&(0,u.Uz)(n.rings,r)&&i.push({type:"media",element:o,layer:this.layer,mapPoint:e,sourcePoint:o.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new ie(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,s]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,s),this.requestUpdate()}),(e=>{(0,a.mA)(e)||r.c.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds($,e,!0);const s=new Y.c({xmin:$[0],ymin:$[1],xmax:$[2],ymax:$[3],spatialReference:this.view.spatialReference});return i.queryElements(s,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,o.wJ)(this._elementReferences,t.uid,(()=>{const e=new y.S({element:t,spatialReference:this.view.spatialReference}),i=new D(e);this._overlayContainer.addChild(i),this.elements.add(t);return{tiles:new Set,projectedElement:e,overlay:i,debugGraphic:null}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){var i;const s=this._elementReferences.get(t.uid);s.tiles.delete(e),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),null===(i=this._debugGraphicsView)||void 0===i||i.graphics.remove(s.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){var i,s;const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void(null===(i=this._debugGraphicsView)||void 0===i||i.graphics.remove(t.debugGraphic));const n=[],o=[];for(const e of this._tileStrategy.tiles){const i=te(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?i||o.push(e):i&&n.push(e)}for(const t of n)this._referenceElement(t,e);for(const t of o)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void((null===(s=t)||void 0===s?void 0:s.debugGraphic)&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new y.S({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const n of this._tileStrategy.tiles)te(this.view.featuresTilingScheme,n,r)&&this._referenceElement(n,e)}};(0,s._)([(0,h.qq)()],X.prototype,"layer",void 0),(0,s._)([(0,h.qq)({readOnly:!0})],X.prototype,"elements",void 0),X=(0,s._)([(0,d.c)("esri.views.2d.layers.MediaLayerView2D")],X);const $=(0,c.Su)(),ee={xmin:0,ymin:0,xmax:0,ymax:0};function te(e,t,i){return e.getTileBounds($,t.key,!0),ee.xmin=$[0],ee.ymin=$[1],ee.xmax=$[2],ee.ymax=$[3],(0,p.yu)(ee,i)}class ie{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const s of e)i.has(s)?i.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const se=X},49128:(e,t,i)=>{i.d(t,{c:()=>y});var s=i(51944),r=i(56776),n=i(95904),o=i(90088),a=i(67424),l=i(45e3),h=i(72380),d=i(24704),c=(i(23512),i(43968),i(98323),i(32288)),u=i(61312);let p=class extends((0,o.MR)((0,h.g)(n.c.EventedMixin(r.c)))){constructor(e){super(e),this._updatingHandles=new u.A,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.c.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.mG)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.qq)()],p.prototype,"fullOpacity",null),(0,s._)([(0,d.qq)()],p.prototype,"layer",void 0),(0,s._)([(0,d.qq)()],p.prototype,"parent",void 0),(0,s._)([(0,d.qq)({readOnly:!0})],p.prototype,"suspended",null),(0,s._)([(0,d.qq)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s._)([(0,d.qq)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s._)([(0,d.qq)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,d.qq)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,d.qq)()],p.prototype,"visible",null),(0,s._)([(0,d.qq)()],p.prototype,"view",void 0),p=(0,s._)([(0,c.c)("esri.views.layers.LayerView")],p);const y=p}}]);
//# sourceMappingURL=7100.24160db7.chunk.js.map