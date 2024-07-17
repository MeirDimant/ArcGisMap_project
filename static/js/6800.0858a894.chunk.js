"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[6800],{16872:(e,t,r)=>{r.d(t,{c1:()=>o,gZ:()=>l,u6:()=>a});var n=r(18668),i=r(50016);const s=96;function o(e,t){const r=t||e.extent,n=e.width,o=(0,i.k8)(null===r||void 0===r?void 0:r.spatialReference);return r&&n?r.width/n*o*i.Co*s:0}function a(e,t){return e/((0,i.k8)(t)*i.Co*s)}function l(e,t,r){return function(e,t){return 0===t||(0,n.gP)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,n.gP)(e,t)||e>t}(e,r)}},56800:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var n,i=r(51944),s=r(1316),o=r(72400),a=r(95716),l=r(17616),u=r(89096),c=r(68688),d=r(15088),p=r(3194),m=r(92796),y=r(36844),h=r(6016),f=r(9968),g=r(24704),v=r(23512),b=r(29664),x=r(32288),w=r(54448),q=r(27472),_=r(31004),S=r(69599),E=r(16872),N=r(12008),I=r(27460),F=r(90112),O=r(13232),R=r(81880),P=r(32436),A=r(69032),L=r(96604),U=r(40940),M=r(37084),C=r(66084),j=r(42844),T=r(32400),W=r(90088),G=r(85912),B=r(43968);r(98323);let k=0,V=n=class extends((0,W.MR)(m.S)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),h.du),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),h.du),(0,h.aE)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),h.du),(0,h.aE)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),h.du)])}get id(){const e=this._get("id");return null!==e&&void 0!==e?e:k++}set id(e){this._set("id",e)}readLegendUrl(e,t){var r,n;return null!==(r=null!==(n=t.legendUrl)&&void 0!==n?n:t.legendURL)&&void 0!==r?r:null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return(0,v.ey)(u.c.ofType(n),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var e,t,r,i;const s=new n;return this.hasOwnProperty("description")&&(s.description=this.description),this.hasOwnProperty("fullExtent")&&(s.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(s.fullExtents=null!==(e=null===(t=this.fullExtents)||void 0===t?void 0:t.map((e=>e.clone())))&&void 0!==e?e:null),this.hasOwnProperty("legendUrl")&&(s.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(s.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(s.layer=this.layer),this.hasOwnProperty("name")&&(s.name=this.name),this.hasOwnProperty("parent")&&(s.parent=this.parent),this.hasOwnProperty("queryable")&&(s.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(s.sublayers=null===(r=this.sublayers)||void 0===r?void 0:r.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(s.spatialReferences=null===(i=this.spatialReferences)||void 0===i?void 0:i.map((e=>e))),this.hasOwnProperty("visible")&&(s.visible=this.visible),this.hasOwnProperty("title")&&(s.title=this.title),s}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,i._)([(0,g.qq)()],V.prototype,"description",void 0),(0,i._)([(0,g.qq)({readOnly:!0})],V.prototype,"dimensions",void 0),(0,i._)([(0,g.qq)({type:_.c,json:{name:"extent"}})],V.prototype,"fullExtent",void 0),(0,i._)([(0,g.qq)()],V.prototype,"fullExtents",void 0),(0,i._)([(0,g.qq)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],V.prototype,"id",null),(0,i._)([(0,g.qq)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],V.prototype,"legendUrl",void 0),(0,i._)([(0,b.E)("legendUrl",["legendUrl","legendURL"])],V.prototype,"readLegendUrl",null),(0,i._)([(0,g.qq)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],V.prototype,"legendEnabled",void 0),(0,i._)([(0,g.qq)()],V.prototype,"layer",void 0),(0,i._)([(0,g.qq)()],V.prototype,"maxScale",void 0),(0,i._)([(0,g.qq)()],V.prototype,"minScale",void 0),(0,i._)([(0,g.qq)({readOnly:!0})],V.prototype,"effectiveScaleRange",null),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"name",void 0),(0,i._)([(0,g.qq)()],V.prototype,"parent",void 0),(0,i._)([(0,g.qq)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],V.prototype,"popupEnabled",void 0),(0,i._)([(0,g.qq)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],V.prototype,"queryable",void 0),(0,i._)([(0,g.qq)()],V.prototype,"sublayers",void 0),(0,i._)([(0,G.W)("sublayers")],V.prototype,"castSublayers",null),(0,i._)([(0,g.qq)({type:[Number],json:{read:{source:"spatialReferences"}}})],V.prototype,"spatialReferences",void 0),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,i._)([(0,g.qq)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],V.prototype,"visible",null),V=n=(0,i._)([(0,x.c)("esri.layers.support.WMSSublayer")],V);const D=V;var H=r(80808);const X={84:4326,83:4269,27:4267};function $(e){var t,r,n;if(!e)return null;const i={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const s=e.documentElement;if("ServiceExceptionReport"===s.nodeName){const e=Array.prototype.slice.call(s.childNodes).map((e=>e.textContent)).join("\r\n");throw new H.c("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const o=Q("Capability",s),a=Q("Service",s),l=o&&Q("Request",o);if(!o||!a||!l)return null;const u=Q("Layer",o);if(!u)return null;const c="WMS_Capabilities"===s.nodeName||"WMT_MS_Capabilities"===s.nodeName?s.getAttribute("version"):"1.3.0",d=Z("Title",a,"")||Z("Name",a,""),p=Z("AccessConstraints",a,""),m=/^none$/i.test(p)?"":p,y=Z("Abstract",a,""),h=parseInt(Z("MaxWidth",a,"5000"),10),f=parseInt(Z("MaxHeight",a,"5000"),10),g=re(l,"GetMap"),v=te(l,"GetMap"),b=ie(u,c,i);if(!b)return null;let x,w=0;const q=Array.prototype.slice.call(o.childNodes),S=null!==(t=b.sublayers)&&void 0!==t?t:[],E=e=>{null!=e&&S.push(e)};q.forEach((e=>{"Layer"===e.nodeName&&(0===w?x=e:1===w?(b.name&&(b.name="",E(ie(x,c,i))),E(ie(e,c,i))):E(ie(e,c,i)),w++)}));let N=b.sublayers,I=b.extent;const F=null!==(r=b.fullExtents)&&void 0!==r?r:[];if(N||(N=[]),0===N.length&&N.push(b),!I){const e=new _.c(N[0].extent);b.extent=e.toJSON(),I=b.extent}const O=b.spatialReferences.length>0?b.spatialReferences:J(b),R=te(l,"GetFeatureInfo"),P=R?re(l,"GetFeatureInfo"):null,A=K(N),L=b.minScale||0,U=b.maxScale||0,M=null!==(n=b.dimensions)&&void 0!==n?n:[],C=A.reduce(((e,t)=>{var r;return e.concat(null!==(r=t.dimensions)&&void 0!==r?r:[])}),[]),j=M.concat(C).filter(ae);let T=null;if(j.length){const e=j.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):null===t||void 0===t?void 0:t.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(B.G6);T={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:m,description:y,dimensions:M,extent:I,fullExtents:F,featureInfoFormats:P,featureInfoUrl:R,mapUrl:v,maxWidth:h,maxHeight:f,maxScale:U,minScale:L,layers:A,spatialReferences:O,supportedImageFormatTypes:g,timeInfo:T,title:d,version:c}}function J(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=J(t);if(e.length>0)return e}return[]}function K(e){let t=[];for(const n of e){var r;t.push(n),(null===(r=n.sublayers)||void 0===r?void 0:r.length)&&(t=t.concat(K(n.sublayers)),delete n.sublayers)}return t}function z(e,t,r){var n;return null!==(n=t.getAttribute(e))&&void 0!==n?n:r}function Q(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(se(n)&&n.nodeName===e)return n}return null}function Y(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];se(i)&&i.nodeName===e&&r.push(i)}return r}function Z(e,t,r){var n,i;return null!==(n=null===(i=Q(e,t))||void 0===i?void 0:i.textContent)&&void 0!==n?n:r}function ee(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let a,l,u,c;r?(a=isNaN(i)?-Number.MAX_VALUE:i,l=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(o)?Number.MAX_VALUE:o,c=isNaN(s)?Number.MAX_VALUE:s):(a=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(i)?-Number.MAX_VALUE:i,u=isNaN(s)?Number.MAX_VALUE:s,c=isNaN(o)?Number.MAX_VALUE:o);const d=new S.c({wkid:t});return new _.c({xmin:a,ymin:l,xmax:u,ymax:c,spatialReference:d})}function te(e,t){const r=Q(t,e);if(r){const e=Q("DCPType",r);if(e){const t=Q("HTTP",e);if(t){const e=Q("Get",t);if(e){let t=function(e,t,r,n){const i=Q(e,r);return i?z(t,i,n):n}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,f.as)(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function re(e,t){const r=Y("Operation",e);if(!r.length)return Y("Format",Q(t,e)).map((e=>{let{textContent:t}=e;return t})).filter(B.G6);const n=[];for(const i of r)if(i.getAttribute("name")===t){const e=Y("Format",i);for(const{textContent:t}of e)null!=t&&n.push(t)}return n}function ne(e,t,r){const n=Q(t,e);if(!n)return r;const{textContent:i}=n;if(null==i||""===i)return r;const s=Number(i);return isNaN(s)?r:s}function ie(e,t,r){var n;if(!e)return null;const i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=Q("LatLonBoundingBox",e),o=Q("EX_GeographicBoundingBox",e);let a=null;s&&(a=ee(s,4326)),o&&(a=new _.c(0,0,0,0,new S.c({wkid:4326})),a.xmin=parseFloat(Z("westBoundLongitude",o,"0")),a.ymin=parseFloat(Z("southBoundLatitude",o,"0")),a.xmax=parseFloat(Z("eastBoundLongitude",o,"0")),a.ymax=parseFloat(Z("northBoundLatitude",o,"0"))),s||o||(a=new _.c(-180,-90,180,90,new S.c({wkid:4326}))),i.minScale=ne(e,"MaxScaleDenominator",0),i.maxScale=ne(e,"MinScaleDenominator",0);const l=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(l);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||a||(a="1.3.0"===t?ee(e,n,(0,U.u)(n)):ee(e,n))}const s=r&&r.indexOf(":");if(s&&s>-1){var n;let o=parseInt(r.substring(s+1,r.length),10);0===o||isNaN(o)||(o=null!==(n=X[o])&&void 0!==n?n:o);const a="1.3.0"===t?ee(e,o,(0,U.u)(o)):ee(e,o);a&&i.fullExtents&&i.fullExtents.push(a)}}else if(e.nodeName===l){var s,o;(null!==(s=null===(o=e.textContent)||void 0===o?void 0:o.split(" "))&&void 0!==s?s:[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r;const e=null!==(r=X[t])&&void 0!==r?r:t;i.spatialReferences.includes(e)||i.spatialReferences.push(e)}}))}else if("Style"!==e.nodeName||i.legendUrl){if("Layer"===e.nodeName){const n=ie(e,t,r);n&&(n.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(n))}}else{const t=Q("LegendURL",e);if(t){const e=Q("OnlineResource",t);e&&(i.legendUrl=e.getAttribute("xlink:href"))}}})),i.extent=null===(n=a)||void 0===n?void 0:n.toJSON(),i.dimensions=Y("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{var t,r;const n=e.getAttribute("name"),i=e.getAttribute("units"),s=e.textContent,o=null!==(t=e.getAttribute("unitSymbol"))&&void 0!==t?t:void 0,a=null!==(r=e.getAttribute("default"))&&void 0!==r?r:void 0,l="0"!==z("default",e,"0"),u="0"!==z("nearestValue",e,"0"),c="0"!==z("current",e,"0");return ae({name:n,units:i})?{name:"time",units:"ISO8601",extent:ce(s),default:ce(a),multipleValues:l,nearestValue:u,current:c}:oe({name:n,units:i})?{name:"elevation",units:i,extent:le(s),unitSymbol:o,default:le(a),multipleValues:l,nearestValue:u}:{name:n,units:i,extent:ue(s),unitSymbol:o,default:ue(a),multipleValues:l,nearestValue:u}})),i}function se(e){return e.nodeType===Node.ELEMENT_NODE}function oe(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ae(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function le(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(B.G6):r.map((e=>parseFloat(e)))}function ue(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(B.G6):r}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?de(t[2]):void 0}})).filter(B.G6):r.map((e=>new Date(e)))}function de(e){const t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:pe(t[1]),months:pe(t[2]),days:pe(t[3]),hours:pe(t[4]),minutes:pe(t[5]),seconds:pe(t[6])}:null}function pe(e){if(!e)return 0;const t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function me(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ye=new Set([102100,3857,102113,900913]),he=new Set([3395,54004]);const fe=new d.O({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function ge(e){return"text/html"===e}function ve(e){return"text/plain"===e}let be=class extends((0,F.W)((0,L.u)((0,P.G)((0,A.I)((0,O.Y)((0,R.K)((0,m.U)(I.c)))))))){constructor(){super(...arguments),this.allSublayers=new c.c({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=t.layer=this}),h.du),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),h.du),(0,h.aE)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=r.layer=this}),h.du)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(y.CE).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new _.c({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){var e,t;return null==this.featureInfoFormats?null:null!==(e=null!==(t=this.featureInfoFormats.find(ge))&&void 0!==t?t:this.featureInfoFormats.find(ve))&&void 0!==e?e:null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(ge(e)||ve(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new S.c(t.spatialReferences[0])}writeSpatialReferences(e,t){var r;const n=null===(r=this.spatialReference)||void 0===r?void 0:r.wkid;e&&n?(t.spatialReferences=e.filter((e=>e!==n)),t.spatialReferences.unshift(n)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return xe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return xe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,s=e.flatten((e=>{let{sublayers:t}=e;return null!==t&&void 0!==t?t:[]}));for(const l of s){var o;if("number"==typeof(null===(o=l.parent)||void 0===o?void 0:o.id)){const e=i.get(l.parent.id);null!=e?e.push(l.id):i.set(l.parent.id,[l.id])}}for(const l of s){var a;const e={sublayer:l,...n},r=l.write({parentLayerId:"number"==typeof(null===(a=l.parent)||void 0===a?void 0:a.id)?l.parent.id:-1},e);if(i.has(l.id)&&(r.sublayerIds=i.get(l.id)),!l.sublayers&&l.name){const r=l.write({},e);delete r.id,t.layers.push(r)}}t.visibleLayers=s.filter((e=>{let{visible:t,sublayers:r}=e;return t&&!r})).map((e=>{let{name:t}=e;return t})).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=(0,f.as)(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=(0,f.UP)(t,null!==r&&void 0!==r?r:{});this._set("url",n)}createExportImageParameters(e,t,r,n){var i;const s=null!==(i=null===n||void 0===n?void 0:n.pixelRatio)&&void 0!==i?i:1,o=(0,E.c1)({extent:e,width:t})*s,a=new j._({layer:this,scale:o}),{xmin:l,ymin:u,xmax:c,ymax:d,spatialReference:p}=e,m=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&ye.has(r)?t.find((e=>ye.has(e)))||t.find((e=>he.has(e)))||102100:r)}(p,this.spatialReferences),y="1.3.0"===this.version&&(0,U.u)(m)?"".concat(u,",").concat(l,",").concat(d,",").concat(c):"".concat(l,",").concat(u,",").concat(c,",").concat(d),h=a.toJSON();return{bbox:y,["1.3.0"===this.version?"crs":"srs"]:null==m||isNaN(m)?void 0:"EPSG:"+m,...h}}async fetchImage(e,t,r,n){var i,s;const o=this.mapUrl,a=this.createExportImageParameters(e,t,r,n);if(!a.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const u=null===n||void 0===n||null===(i=n.timeExtent)||void 0===i?void 0:i.start,c=null===n||void 0===n||null===(s=n.timeExtent)||void 0===s?void 0:s.end,d=null!=u&&null!=c?u.getTime()===c.getTime()?me(u):"".concat(me(u),"/").concat(me(c)):void 0,p={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...a,time:d,...this.refreshParameters}),signal:null===n||void 0===n?void 0:n.signal};return(0,l.c)(null!==o&&void 0!==o?o:"",p).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){var i,s,o;const a=null!==(i=this.mapUrl)&&void 0!==i?i:"",u=this.createExportImageParameters(e,t,r,n);if(!u.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const c=null===n||void 0===n||null===(s=n.timeExtent)||void 0===s?void 0:s.start,d=null===n||void 0===n||null===(o=n.timeExtent)||void 0===o?void 0:o.end,p=null!=c&&null!=d?c.getTime()===d.getTime()?me(c):"".concat(me(c),"/").concat(me(d)):void 0,m={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...u,time:p,...this.refreshParameters}),signal:null===n||void 0===n?void 0:n.signal},{data:y}=await(0,l.c)(a,m);return(0,T.E)(y,a,null===n||void 0===n?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,i){const s=(0,E.c1)({extent:e,width:t}),o=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((e=>{let{name:t}=e;return t})).join():null}(new j._({layer:this,scale:s}).visibleSublayers);if(null==this.featureInfoUrl||null==o)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const a="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},l={query_layers:o,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...a},u={...this.createExportImageParameters(e,t,r),...l},c=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(c):this._defaultFetchFeatureInfoFunction((0,f.UP)(this.featureInfoUrl,c))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return(0,M.Ab)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?S.c.WebMercator:new S.c({wkid:t});return(0,N.yK)(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,f.uq)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new a.c({title:this.title,content:t}),n=new o.c({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&null!==(t=this.parsedUrl)&&void 0!==t&&t.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await(0,l.c)(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=$(n)}if(this.parsedUrl){const e=new f.iS(this.parsedUrl.path),{httpsDomains:t}=s.default.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function xe(e,t,r){var n;e=null!==(n=e)&&void 0!==n?n:[];const i=new Map;e.every((e=>null==e.id))&&(e=(0,p.ct)(e)).forEach(((e,t)=>e.id=t));for(const o of e){const e=new D;e.read(o,t),r&&!r.includes(e.name)&&(e.visible=!1),i.set(e.id,e)}const s=[];for(const o of e){const e=null!=o.id?i.get(o.id):null;if(e)if(null!=o.parentLayerId&&o.parentLayerId>=0){const t=i.get(o.parentLayerId);if(!t)continue;t.sublayers||(t.sublayers=new u.c),t.sublayers.push(e)}else s.push(e)}return s}(0,i._)([(0,g.qq)({readOnly:!0})],be.prototype,"allSublayers",void 0),(0,i._)([(0,g.qq)({json:{type:Object,write:!0}})],be.prototype,"customParameters",void 0),(0,i._)([(0,g.qq)({json:{type:Object,write:!0}})],be.prototype,"customLayerParameters",void 0),(0,i._)([(0,g.qq)({type:String,json:{write:!0}})],be.prototype,"copyright",void 0),(0,i._)([(0,g.qq)()],be.prototype,"description",void 0),(0,i._)([(0,g.qq)({readOnly:!0})],be.prototype,"dimensions",void 0),(0,i._)([(0,g.qq)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],be.prototype,"fullExtent",void 0),(0,i._)([(0,b.E)(["web-document","portal-item"],"fullExtent",["extent"])],be.prototype,"readFullExtentFromItemOrMap",null),(0,i._)([(0,w.G)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],be.prototype,"writeFullExtent",null),(0,i._)([(0,g.qq)()],be.prototype,"fullExtents",void 0),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],be.prototype,"featureInfoFormat",null),(0,i._)([(0,g.qq)({type:[String],readOnly:!0})],be.prototype,"featureInfoFormats",void 0),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],be.prototype,"featureInfoUrl",void 0),(0,i._)([(0,g.qq)()],be.prototype,"fetchFeatureInfoFunction",void 0),(0,i._)([(0,g.qq)({type:String,json:{origins:{"web-document":{default:"image/png",type:fe.jsonValues,read:{reader:fe.read,source:"format"},write:{writer:fe.write,target:"format"}}}}})],be.prototype,"imageFormat",void 0),(0,i._)([(0,b.E)("imageFormat",["supportedImageFormatTypes"])],be.prototype,"readImageFormat",null),(0,i._)([(0,g.qq)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],be.prototype,"imageMaxHeight",void 0),(0,i._)([(0,g.qq)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],be.prototype,"imageMaxWidth",void 0),(0,i._)([(0,g.qq)()],be.prototype,"imageTransparency",void 0),(0,i._)([(0,g.qq)(C.Uj)],be.prototype,"legendEnabled",void 0),(0,i._)([(0,g.qq)({type:["show","hide","hide-children"]})],be.prototype,"listMode",void 0),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],be.prototype,"mapUrl",void 0),(0,i._)([(0,g.qq)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],be.prototype,"isReference",void 0),(0,i._)([(0,g.qq)({type:["WMS"]})],be.prototype,"operationalLayerType",void 0),(0,i._)([(0,g.qq)()],be.prototype,"resourceInfo",void 0),(0,i._)([(0,g.qq)({type:S.c,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],be.prototype,"spatialReference",void 0),(0,i._)([(0,b.E)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],be.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,i._)([(0,g.qq)({type:[v.Ab],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],be.prototype,"spatialReferences",void 0),(0,i._)([(0,w.G)(["web-document","portal-item"],"spatialReferences")],be.prototype,"writeSpatialReferences",null),(0,i._)([(0,g.qq)({type:u.c.ofType(D),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,q.g)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],be.prototype,"sublayers",void 0),(0,i._)([(0,b.E)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],be.prototype,"readSublayersFromItemOrMap",null),(0,i._)([(0,b.E)("service","sublayers",["layers"])],be.prototype,"readSublayers",null),(0,i._)([(0,w.G)("sublayers",{layers:{type:[D]},visibleLayers:{type:[String]}})],be.prototype,"writeSublayers",null),(0,i._)([(0,g.qq)({json:{read:!1},readOnly:!0,value:"wms"})],be.prototype,"type",void 0),(0,i._)([(0,g.qq)(C.qW)],be.prototype,"url",null),(0,i._)([(0,g.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],be.prototype,"version",void 0),be=(0,i._)([(0,x.c)("esri.layers.WMSLayer")],be);const we=be},40940:(e,t,r)=>{r.d(t,{u:()=>i});const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function i(e){return null!=e&&n.some((t=>{let[r,n]=t;return e>=r&&e<=n}))}},42844:(e,t,r)=>{r.d(t,{_:()=>l});var n=r(51944),i=r(56776),s=r(24704),o=(r(23512),r(43968),r(98323),r(32288));const a={visible:"visibleSublayers"};let l=class extends i.c{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,n=[],i=e=>{const{minScale:r,maxScale:s,sublayers:o,visible:a}=e;a&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(o?o.forEach(i):n.push(e))};return null!==r&&void 0!==r&&r.forEach(i),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:i}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:i,layers:t}}};(0,n._)([(0,s.qq)()],l.prototype,"layer",null),(0,n._)([(0,s.qq)({readOnly:!0})],l.prototype,"layers",null),(0,n._)([(0,s.qq)({type:Number})],l.prototype,"scale",void 0),(0,n._)([(0,s.qq)({readOnly:!0})],l.prototype,"version",null),(0,n._)([(0,s.qq)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,n._)([(0,o.c)("esri.layers.support.ExportWMSImageParameters")],l)},32400:(e,t,r)=>{r.d(t,{E:()=>s,G:()=>o});var n=r(80808),i=r(36844);async function s(e,t,r){let s;try{s=await createImageBitmap(e)}catch(o){throw new n.c("request:server","Unable to load ".concat(t),{url:t,error:o})}return(0,i.wp)(r),s}async function o(e,t,r,s,o){let a;try{a=await createImageBitmap(e)}catch(l){throw new n.c("request:server","Unable to load tile ".concat(t,"/").concat(r,"/").concat(s),{error:l,level:t,row:r,col:s})}return(0,i.wp)(o),a}}}]);
//# sourceMappingURL=6800.0858a894.chunk.js.map