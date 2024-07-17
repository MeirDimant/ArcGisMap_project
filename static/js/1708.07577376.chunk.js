"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[1708],{91708:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s,i=r(51944),l=(r(99912),r(89096)),o=r(68688),n=r(92796),a=r(36844),u=r(6016),y=r(9968),d=r(24704),p=r(23512),c=(r(43968),r(98323),r(29664)),f=r(32288),h=r(54448),v=r(69599),b=r(27460),m=r(90112),g=r(13232),q=r(81880),S=r(32436),_=r(69032),w=r(66084),E=r(95904),k=r(43544),x=r(59776),I=r(73704),M=r(12300),P=r(31004);let G=s=class extends(E.c.EventedMixin((0,k.Ib)(x.c))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,u.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),u.du),(0,u.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),u.du),(0,u.aE)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),u.du),(0,u.aE)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),u.du)])}initialize(){(0,u.Eq)((()=>this.networkLink)).then((()=>(0,u.Eq)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const i=null!=e?e.signal:null,o=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",i).then((e=>{var t;const r=(0,M.EZ)(e.sublayers);this.fullExtent=P.c.fromJSON(r),this.sourceJSON=e;const i=(0,p.ey)(l.c.ofType(s),(0,M.cZ)(s,e));this.sublayers?this.sublayers.addMany(i):this.sublayers=i,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(o),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return(0,M.qW)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,M.Mj)(e.data)))}};(0,i._)([(0,d.qq)()],G.prototype,"description",void 0),(0,i._)([(0,d.qq)({type:P.c})],G.prototype,"fullExtent",void 0),(0,i._)([(0,d.qq)()],G.prototype,"id",void 0),(0,i._)([(0,d.qq)({readOnly:!0,value:null})],G.prototype,"networkLink",void 0),(0,i._)([(0,d.qq)({json:{write:{allowNull:!0}}})],G.prototype,"parent",void 0),(0,i._)([(0,d.qq)({type:l.c.ofType(G),json:{write:{allowNull:!0}}})],G.prototype,"sublayers",void 0),(0,i._)([(0,d.qq)({value:null,json:{read:{source:"name",reader:e=>(0,I._U)(e)}}})],G.prototype,"title",void 0),(0,i._)([(0,d.qq)({value:!0})],G.prototype,"visible",null),(0,i._)([(0,c.E)("visible",["visibility"])],G.prototype,"readVisible",null),(0,i._)([(0,d.qq)()],G.prototype,"sourceJSON",void 0),(0,i._)([(0,d.qq)()],G.prototype,"layer",void 0),G=s=(0,i._)([(0,f.c)("esri.layers.support.KMLSublayer")],G);const O=G,L=["kml","xml"];let F=class extends((0,m.W)((0,S.G)((0,_.I)((0,g.Y)((0,q.K)((0,n.U)(b.c))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new o.c({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=v.c.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,u.aE)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),u.du),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,M.cZ)(O,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.u8)(this.url,L)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a.CE).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,M.qW)(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)})),r=(0,M.Mj)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,i._)([(0,d.qq)({readOnly:!0})],F.prototype,"allSublayers",void 0),(0,i._)([(0,d.qq)({type:v.c})],F.prototype,"outSpatialReference",void 0),(0,i._)([(0,d.qq)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),(0,i._)([(0,d.qq)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"legendEnabled",void 0),(0,i._)([(0,d.qq)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,i._)([(0,d.qq)({type:["KML"]})],F.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.qq)({})],F.prototype,"resourceInfo",void 0),(0,i._)([(0,d.qq)({type:l.c.ofType(O),json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,i._)([(0,c.E)(["web-map","portal-item"],"sublayers",["visibleFolders"])],F.prototype,"readSublayersFromItemOrWebMap",null),(0,i._)([(0,c.E)("service","sublayers",["sublayers"])],F.prototype,"readSublayers",null),(0,i._)([(0,h.G)("sublayers")],F.prototype,"writeSublayers",null),(0,i._)([(0,d.qq)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),(0,i._)([(0,d.qq)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],F.prototype,"title",null),(0,i._)([(0,d.qq)(w.qW)],F.prototype,"url",void 0),(0,i._)([(0,d.qq)({readOnly:!0})],F.prototype,"visibleSublayers",null),(0,i._)([(0,d.qq)({type:P.c})],F.prototype,"extent",void 0),(0,i._)([(0,d.qq)()],F.prototype,"fullExtent",null),F=(0,i._)([(0,f.c)("esri.layers.KMLLayer")],F);const j=F},12300:(e,t,r)=>{r.d(t,{EZ:()=>q,Mj:()=>h,cZ:()=>b,gI:()=>g,qW:()=>v});var s=r(1316),i=r(29096),l=r(95716),o=r(17616),n=r(3194),a=r(9968),u=r(69599),y=r(20200),d=r(49524),p=r(71879),c=r(55968);const f={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function h(e){var t;const r=e.folders||[],s=r.slice(),i=new Map,l=new Map,o=new Map,a=new Map,u=new Map,y={esriGeometryPoint:l,esriGeometryPolyline:o,esriGeometryPolygon:a};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,n.ct)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;i.set(r,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(l,s,e.featureSet.features):"esriGeometryPolyline"===r?m(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&m(a,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{u.set(e.id,e)})),r.forEach((t=>{t.networkLinkIds.forEach((r=>{const i=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(r,t.id,e.networkLinks);i&&s.push(i)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,n.ct)(i.get("esriGeometryPoint")),e.polylines=(0,n.ct)(i.get("esriGeometryPolyline")),e.polygons=(0,n.ct)(i.get("esriGeometryPolygon")),e.mapImages=[];for(const r of e.featureInfos)switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=y[r.type].get(r.id);s&&(null===(t=e[f[r.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=u.get(r.id);t&&e.mapImages.push(t);break}}e.fullExtent=q([e])}}));const d=q(s);return{folders:r,sublayers:s,extent:d}}function v(e,t,r,l){const n=null===i.id||void 0===i.id?void 0:i.id.findCredential(e);e=(0,a.UP)(e,{token:null===n||void 0===n?void 0:n.token});const u=s.default.kmlServiceUrl;return(0,o.c)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:l})}function b(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const i=[],l={},o=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return o.forEach((t=>{const o=new e;if(r?o.read(t,r):o.read(t),s.length&&n.has(o.id)&&(o.visible=s.includes(o.id)),l[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var a;const e=l[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(a=e.sublayers)||void 0===a||a.unshift(o)}else i.unshift(o)})),i}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=c.c.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,p.h)(r.drawingInfo.renderer),i=l.c.fromJSON(e.popupInfo),o=[];for(const l of t){const e=await s.getSymbolAsync(l);l.symbol=e,l.popupTemplate=i,l.visible=!0,o.push(l)}return o}function q(e){const t=(0,y.Su)(y.K),r=(0,y.Su)(y.K);for(const o of e){var s,i,l;if(null!==(s=o.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of o.polygons.featureSet.features)(0,d.kz)(t,e.geometry),(0,y.MZ)(r,t);if(null!==(i=o.polylines)&&void 0!==i&&null!==(i=i.featureSet)&&void 0!==i&&i.features)for(const e of o.polylines.featureSet.features)(0,d.kz)(t,e.geometry),(0,y.MZ)(r,t);if(null!==(l=o.points)&&void 0!==l&&null!==(l=l.featureSet)&&void 0!==l&&l.features)for(const e of o.points.featureSet.features)(0,d.kz)(t,e.geometry),(0,y.MZ)(r,t);if(o.mapImages)for(const e of o.mapImages)(0,d.kz)(t,e.extent),(0,y.MZ)(r,t)}return(0,y.yK)(r,y.K)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.c.WGS84}}}}]);
//# sourceMappingURL=1708.07577376.chunk.js.map