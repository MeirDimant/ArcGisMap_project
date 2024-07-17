"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[2536],{52536:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var r=o(51944),i=o(1316),l=o(17616),s=(o(8636),o(92796)),n=o(36844),a=o(9968),y=o(24704),p=(o(23512),o(43968),o(98323),o(29664)),u=o(32288),d=o(31004),c=o(12008),h=o(27460),v=o(90112),m=o(13232),S=o(81880),g=o(32436),f=o(69032),q=o(66084),_=o(30064),b=o(54344),C=o(42888),G=o(39392),k=o(80052);const w=["atom","xml"],P={base:_.c,key:"type",typeMap:{"simple-line":b.c},errorContext:"symbol"},x={base:_.c,key:"type",typeMap:{"picture-marker":C.c,"simple-marker":G.c},errorContext:"symbol"},E={base:_.c,key:"type",typeMap:{"simple-fill":k.c},errorContext:"symbol"};let R=class extends((0,v.W)((0,g.G)((0,m.Y)((0,S.K)((0,f.I)((0,s.U)(h.c))))))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{var t;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&(null===(t=o.outline)||void 0===t?void 0:t.style.includes("esriSFS"))&&(o.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,a.u8)(this.url,w)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n.CE).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const o=this.spatialReference,{data:r}=await(0,l.c)(i.default.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,c.__)(o)?void 0:null!==(t=o.wkid)&&void 0!==t?t:JSON.stringify(o)},signal:e});return r}_hasGeometry(e){var t,o;return null!==(t=null===(o=this.featureCollections)||void 0===o?void 0:o.some((t=>{var o,r;return(null===(o=t.featureSet)||void 0===o?void 0:o.geometryType)===e&&(null===(r=t.featureSet.features)||void 0===r?void 0:r.length)>0})))&&void 0!==t&&t}};(0,r._)([(0,y.qq)()],R.prototype,"description",void 0),(0,r._)([(0,y.qq)()],R.prototype,"featureCollections",void 0),(0,r._)([(0,p.E)("service","featureCollections",["featureCollection.layers"])],R.prototype,"readFeatureCollections",null),(0,r._)([(0,y.qq)({type:d.c,json:{name:"lookAtExtent"}})],R.prototype,"fullExtent",void 0),(0,r._)([(0,y.qq)(q.id)],R.prototype,"id",void 0),(0,r._)([(0,y.qq)(q.Uj)],R.prototype,"legendEnabled",void 0),(0,r._)([(0,y.qq)({types:P,json:{write:!0}})],R.prototype,"lineSymbol",void 0),(0,r._)([(0,y.qq)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,r._)([(0,y.qq)({types:x,json:{write:!0}})],R.prototype,"pointSymbol",void 0),(0,r._)([(0,y.qq)({types:E,json:{write:!0}})],R.prototype,"polygonSymbol",void 0),(0,r._)([(0,y.qq)({type:["GeoRSS"]})],R.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.qq)(q.qW)],R.prototype,"url",void 0),(0,r._)([(0,y.qq)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],R.prototype,"title",null),(0,r._)([(0,y.qq)({readOnly:!0,json:{read:!1},value:"geo-rss"})],R.prototype,"type",void 0),R=(0,r._)([(0,u.c)("esri.layers.GeoRSSLayer")],R);const j=R}}]);
//# sourceMappingURL=2536.a00d56c2.chunk.js.map