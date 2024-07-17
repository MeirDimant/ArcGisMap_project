"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[8192],{23216:(e,t,i)=>{i.d(t,{U:()=>u});var s=i(6040),h=i(64548),a=i(73380),r=i(5804);class l extends r.C{constructor(e,t,i,s,h,r){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,h,r),this.bitmap=new a.SI(l),this.bitmap.coordScale=[h,r],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,h.c)(),tileMat3:(0,h.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var n=i(46728),o=i(40076),c=i(77440);class u extends c.c{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Su)(),e),i=this._tileInfoView.getTileResolution(e.level),[h,a]=this._tileInfoView.tileInfo.size;return new l(e,i,t[0],t[3],h,a)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.s.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:o.aM.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.aM.MAP&&super.doRender(e)}}},82900:(e,t,i)=>{i.d(t,{E:()=>r});var s=i(51944),h=(i(67424),i(23512),i(43968),i(98323),i(80808),i(32288)),a=i(23216);const r=e=>{let t=class extends e{attach(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new a.U(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null!==(e=this._bitmapView)&&void 0!==e&&e.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,h.c)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},8192:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var s=i(51944),h=i(77328),a=i(67424),r=i(36844),l=i(24704),n=(i(23512),i(43968),i(98323),i(32288)),o=i(12008),c=i(91960),u=(i(80808),i(92004),i(16832),i(1316),i(17616),i(9968),i(85188),i(8676),i(39940),i(95904),i(18668),i(60216),i(5428),i(40076),i(3172),i(644),i(11400),i(13871),i(96940),i(9188),i(85732),i(1812),i(47632),i(65408),i(51904),i(97492),i(77696),i(33640),i(56372),i(40415),i(13376),i(73892),i(58552),i(22588),i(13480),i(95316),i(68080),i(75376),i(72e3),i(4440),i(75712),i(18124),i(8724),i(76956),i(66421),i(516),i(99496),i(45548),i(30096),i(82268),i(28792),i(91520),i(93960),i(83512),i(37904),i(96724)),p=(i(51764),i(61712),i(89096),i(68828),i(59928),i(37644),i(79064),i(50016),i(272),i(9508),i(7048),i(52140),i(57128),i(82900)),d=i(95008),g=i(52795),f=i(28396),m=i(64080),w=i(4240),_=i(40612),y=i(5384),v=i(49128),b=i(85716),I=i(27528),V=i(14371);const T=[0,0];let H=class extends((0,b.c)((0,p.E)((0,d.y)(v.c)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c.G,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),null===(t=this._highlightView)||void 0===t||t.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new m.c(this.layer.tileInfo,this.layer.fullExtent,null===t||void 0===t?void 0:t.effectiveMinLOD,null===t||void 0===t?void 0:t.effectiveMaxLOD),this._fetchQueue=new _.c({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new y.c({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),(0,I.gB)(this,this.layer)){const e=this._highlightView=new u.c({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new g.c(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new I.y8({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,V.g)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){var e,t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),null!==(e=this._popupHighlightHelper)&&void 0!==e&&e.destroy(),null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):(0,h.uU)()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return(0,o.yK)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.tilemapCache,{signal:s,resamplingLevel:h=0}=t;if(!i)try{return await this._fetchImage(e,s)}catch(n){if(!(0,r.mA)(n)&&!this.resampling)return(0,f.u)(this._tileInfoView.tileInfo.size);if(h<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new w.c(i),a=await this.fetchTile(s,{...t,resamplingLevel:h+1});return(0,f.A)(this._tileInfoView,a,s,e)}}throw n}const a=new w.c(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return(0,f.u)(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,s)}catch(n){if((0,r.mA)(n))throw n;l=await this._fetchImage(e,s)}return this.resampling?(0,f.A)(this._tileInfoView,l,a,e):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,r.mA)(t)||a.c.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};(0,s._)([(0,l.qq)()],H.prototype,"resampling",null),(0,s._)([(0,l.qq)()],H.prototype,"tilemapCache",null),H=(0,s._)([(0,n.c)("esri.views.2d.layers.TileLayerView2D")],H);const R=H},28396:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const a=e.tileInfo.size,r=e.getTileResolution(i.level),l=e.getTileResolution(s.level);let n=e.getLODInfoAt(s.level);const o=n.getXForColumn(s.col),c=n.getYForRow(s.row);n=e.getLODInfoAt(i.level);const u=n.getXForColumn(i.col),p=n.getYForRow(i.row),d=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/a[0],g=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/a[1],f=Math.round(d*((o-u)/r)),m=Math.round(g*(-(c-p)/r)),w=Math.round(d*a[0]*(l/r)),_=Math.round(g*a[1]*(l/r)),y=h(a);return y.getContext("2d").drawImage(t,f,m,w,_,0,0,a[0],a[1]),y}function h(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{A:()=>s,u:()=>h})}}]);
//# sourceMappingURL=8192.c41b1760.chunk.js.map