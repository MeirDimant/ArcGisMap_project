"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[9748,6341],{39748:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ve});var r,l=i(51944),o=i(17616),s=i(43968),n=i(89096),a=i(80808),c=i(3194),u=i(92796),p=i(68328),d=i(36844),h=i(6016),m=i(9968),y=i(24704),f=(i(23512),i(29664)),v=i(32288),g=i(54448),w=i(31004),x=i(27460),S=i(46341),q=i(90112),I=i(13232),T=i(81880),M=i(32436),b=i(69032),_=i(32400),L=i(79596),E=i(36224),P=i(1772),C=i(43544);i(98323);let R=r=class extends C.am{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new r;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,l._)([(0,y.qq)({type:w.c,json:{read:{source:"fullExtent"}}})],R.prototype,"fullExtent",void 0),(0,l._)([(0,y.qq)({type:String,json:{read:{source:"id"}}})],R.prototype,"id",void 0),(0,l._)([(0,y.qq)({type:L.c,json:{read:{source:"tileInfo"}}})],R.prototype,"tileInfo",void 0),R=r=(0,l._)([(0,v.c)("esri.layer.support.TileMatrixSet")],R);const O=R;var A;let F=A=class extends C.am{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new A;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.qq)({json:{read:{source:"id"}}})],F.prototype,"id",void 0),(0,l._)([(0,y.qq)({json:{read:{source:"title"}}})],F.prototype,"title",void 0),(0,l._)([(0,y.qq)({json:{read:{source:"abstract"}}})],F.prototype,"description",void 0),(0,l._)([(0,y.qq)({json:{read:{source:"legendUrl"}}})],F.prototype,"legendUrl",void 0),(0,l._)([(0,y.qq)({json:{read:{source:"isDefault"}}})],F.prototype,"isDefault",void 0),(0,l._)([(0,y.qq)({json:{read:{source:"keywords"}}})],F.prototype,"keywords",void 0),F=A=(0,l._)([(0,v.c)("esri.layer.support.WMTSStyle")],F);const U=F;var j;let V=j=class extends C.am{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?w.c.fromJSON(e):null}readFullExtents(e,t){var i,r,l;return null!==(i=t.fullExtents)&&void 0!==i&&i.length?t.fullExtents.map((e=>w.c.fromJSON(e))):null!==(r=null===(l=t.tileMatrixSets)||void 0===l?void 0:l.map((e=>w.c.fromJSON(e.fullExtent))).filter((e=>e)))&&void 0!==r?r:[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var e,t;let i=this._get("styleId");return i||(i=null!==(e=null===(t=this.styles)||void 0===t||null===(t=t.at(0))||void 0===t?void 0:t.id)&&void 0!==e?e:""),i}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){var e,t,i;const r=new j;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("imageFormats")&&(r.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(r.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(r.fullExtent=null===(e=this.fullExtent)||void 0===e?void 0:e.clone()),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("layer")&&(r.layer=this.layer),this.hasOwnProperty("styleId")&&(r.styleId=this.styleId),this.hasOwnProperty("styles")&&(r.styles=null===(t=this.styles)||void 0===t?void 0:t.clone()),this.hasOwnProperty("tileMatrixSetId")&&(r.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(r.tileMatrixSets=null===(i=this.tileMatrixSets)||void 0===i?void 0:i.clone()),this.hasOwnProperty("title")&&(r.title=this.title),r}};(0,l._)([(0,y.qq)()],V.prototype,"description",void 0),(0,l._)([(0,y.qq)()],V.prototype,"fullExtent",void 0),(0,l._)([(0,f.E)("fullExtent",["fullExtent"])],V.prototype,"readFullExtent",null),(0,l._)([(0,y.qq)({readOnly:!0})],V.prototype,"fullExtents",void 0),(0,l._)([(0,f.E)("fullExtents",["fullExtents","tileMatrixSets"])],V.prototype,"readFullExtents",null),(0,l._)([(0,y.qq)()],V.prototype,"id",void 0),(0,l._)([(0,y.qq)()],V.prototype,"imageFormat",null),(0,l._)([(0,y.qq)({json:{read:{source:"formats"}}})],V.prototype,"imageFormats",void 0),(0,l._)([(0,y.qq)()],V.prototype,"layer",void 0),(0,l._)([(0,y.qq)()],V.prototype,"parent",void 0),(0,l._)([(0,y.qq)()],V.prototype,"styleId",null),(0,l._)([(0,y.qq)({type:n.c.ofType(U),json:{read:{source:"styles"}}})],V.prototype,"styles",void 0),(0,l._)([(0,y.qq)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,l._)([(0,y.qq)()],V.prototype,"tileMatrixSetId",void 0),(0,l._)([(0,y.qq)({readOnly:!0})],V.prototype,"tileMatrixSet",null),(0,l._)([(0,y.qq)({type:n.c.ofType(O),json:{read:{source:"tileMatrixSets"}}})],V.prototype,"tileMatrixSets",void 0),V=j=(0,l._)([(0,v.c)("esri.layers.support.WMTSSublayer")],V);const D=V;var W=i(86004),N=i(53372),k=i(41488),K=i(40940),G=i(584),B=i(35276);const z=90.71428571428571;function J(e){const t=e.replaceAll(/ows:/gi,"");if(!H("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.c("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Y(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];if(Y(r)&&r.nodeName===e)return r}return null}function Q(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];Y(l)&&l.nodeName===e&&i.push(l)}return i}function X(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];Y(l)&&l.nodeName===e&&i.push(l)}return i.map((e=>e.textContent)).filter(s.G6)}function $(e,t){return e.split(">").forEach((e=>{t&&(t=H(e,t))})),t&&t.textContent}function Z(e,t,i,r){let l;return Array.prototype.slice.call(r.childNodes).some((r=>{if(r.nodeName.includes(e)){const e=H(t,r),o=null===e||void 0===e?void 0:e.textContent;if(o===i||i.split(":")&&i.split(":")[1]===o)return l=r,!0}return!1})),l}function ee(e,t,i,r,l){const o=$("Abstract",t),s=X("Format",t);return{id:e,fullExtent:re(t),fullExtents:le(t),description:o,formats:s,styles:oe(t,r),title:$("Title",t),tileMatrixSets:se(l,t,i)}}function te(e,t){var i;const r=[],l=null===(i=e.layerMap)||void 0===i?void 0:i.get(t);if(!l)return null;const o=Q("ResourceURL",l),s=Q("Dimension",l);let n,a,c,u;return s.length&&(n=$("Identifier",s[0]),a=X("Default",s[0])||X("Value",s[0])),s.length>1&&(c=$("Identifier",s[1]),u=X("Default",s[1])||X("Value",s[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:u}),o.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.includes("{"+n+"}"))t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(c&&u.length)if(t.includes("{"+c+"}"))t=t.replace("{"+c+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+c.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+c.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function ie(e,t,i,r,l,o,s,n){var a,c;const u=function(e,t,i){var r;const l=te(e,t),o=null===l||void 0===l?void 0:l.filter((e=>e.format===i));return null!==(r=null!==o&&void 0!==o&&o.length?o:l)&&void 0!==r?r:[]}(e,t,r);if(!((null===u||void 0===u?void 0:u.length)>0))return"";const{dimensionMap:p}=e,d=null===(a=p.get(t).dimensions)||void 0===a?void 0:a[0],h=null===(c=p.get(t).dimensions2)||void 0===c?void 0:c[0];return u[s%u.length].template.replaceAll(/\{Style\}/gi,null!==l&&void 0!==l?l:"").replaceAll(/\{TileMatrixSet\}/gi,null!==i&&void 0!==i?i:"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+s).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,d).replaceAll(/\{dimensionValue2\}/gi,h)}function re(e){const t=H("WGS84BoundingBox",e),i=t?$("LowerCorner",t).split(" "):["-180","-90"],r=t?$("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(r[0]),ymax:parseFloat(r[1]),spatialReference:{wkid:4326}}}function le(e){const t=[];return(0,G.K)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const i=e.getAttribute("crs").toLowerCase(),r=ne(i),l=i.includes("epsg")&&(0,K.u)(r.wkid);let o,s,n,a;(0,G.K)(e,{LowerCorner:e=>{[o,s]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([o,s]=[s,o])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:o,ymin:s,xmax:n,ymax:a,spatialReference:r})}}),t}function oe(e,t){return Q("Style",e).map((e=>{const i=H("LegendURL",e),r=H("Keywords",e),l=r?X("Keyword",r):[];let o=i&&i.getAttribute("xlink:href");return t&&(o=o&&o.replace(/^http:/i,"https:")),{abstract:$("Abstract",e),id:$("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:l,legendUrl:o,title:$("Title",e)}}))}function se(e,t,i){return Q("TileMatrixSetLink",t).map((t=>function(e,t,i){const r=H("TileMatrixSet",t).textContent,l=X("TileMatrix",t),o=i.find((e=>{const t=H("Identifier",e),i=null===t||void 0===t?void 0:t.textContent;return!!(i===r||r.split(":")&&r.split(":")[1]===i)})),s=H("TileMatrixSetLimits",t),n=s&&Q("TileMatrixLimits",s),a=new Map;if(null!==n&&void 0!==n&&n.length)for(const v of n){const e=H("TileMatrix",v).textContent,t=+H("MinTileRow",v).textContent,i=+H("MaxTileRow",v).textContent,r=+H("MinTileCol",v).textContent,l=+H("MaxTileCol",v).textContent;a.set(e,{minCol:r,maxCol:l,minRow:t,maxRow:i})}const c=$("SupportedCRS",o).toLowerCase(),u=function(e,t){return ae(H("TileMatrix",e),t)}(o,c),p=u.spatialReference,d=H("TileMatrix",o),h=[parseInt($("TileWidth",d),10),parseInt($("TileHeight",d),10)],m=[];l.length?l.forEach(((e,t)=>{const i=Z("TileMatrix","Identifier",e,o);m.push(de(i,c,t,r,a))})):Q("TileMatrix",o).forEach(((e,t)=>{m.push(de(e,c,t,r,a))}));const y=function(e,t,i,r,l){const o=H("BoundingBox",t);let s,n,a,c,u,p;if(o&&(s=$("LowerCorner",o).split(" "),n=$("UpperCorner",o).split(" ")),s&&s.length>1&&n&&n.length>1)a=parseFloat(s[0]),u=parseFloat(s[1]),c=parseFloat(n[0]),p=parseFloat(n[1]);else{const e=H("TileMatrix",t),o=parseInt($("MatrixWidth",e),10),s=parseInt($("MatrixHeight",e),10);a=i.x,p=i.y,c=a+o*r[0]*l.resolution,u=p-s*r[1]*l.resolution}return function(e,t,i){return"1.0.0"===e&&(0,K.u)(t.wkid)&&!(i.spatialReference.isGeographic&&i.x<-90&&i.y>=-90)}(e,i.spatialReference,i)?new w.c(u,a,p,c,i.spatialReference):new w.c(a,u,c,p,i.spatialReference)}(e,o,u,h,m[0]).toJSON(),f=new L.c({dpi:96,spatialReference:p,size:h,origin:u,lods:m}).toJSON();return{id:r,fullExtent:y,tileInfo:f}}(e,t,i)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const i=function(e){return e.includes("crs84")||e.includes("crs:84")?ce.CRS84:e.includes("crs83")||e.includes("crs:83")?ce.CRS83:e.includes("crs27")||e.includes("crs:27")?ce.CRS27:null}(e);return null!=i&&(t=i),{wkid:t}}function ae(e,t){const i=ne(t),[r,l]=$("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),o=t.includes("epsg")&&(0,K.u)(i.wkid);return new N.c(o?{x:l,y:r,spatialReference:i}:{x:r,y:l,spatialReference:i})}var ce,ue,pe;function de(e,t,i,r,l){var o;const s=ne(t),n=$("Identifier",e);let a=parseFloat($("ScaleDenominator",e));const c=he(s.wkid,a,r);a*=96/z;const u=+$("MatrixWidth",e),p=+$("MatrixHeight",e),{maxCol:d=u-1,maxRow:h=p-1,minCol:m=0,minRow:y=0}=null!==(o=l.get(n))&&void 0!==o?o:{},{x:f,y:v}=ae(e,t);return new B.c({cols:[m,d],level:i,levelValue:n,origin:[f,v],scale:a,resolution:c,rows:[y,h]})}function he(e,t,i){let r;return r=k.c.hasOwnProperty(""+e)?k.c.values[k.c[e]]:"default028mm"===i?6370997*Math.PI/180:(0,W.sz)(e).metersPerDegree,7*t/25e3/r}(ue=ce||(ce={}))[ue.CRS84=4326]="CRS84",ue[ue.CRS83=4269]="CRS83",ue[ue.CRS27=4267]="CRS27";const me={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let fe=pe=class extends((0,q.W)((0,M.G)((0,b.I)((0,I.Y)((0,T.K)((0,u.U)(x.c))))))){constructor(){super(...arguments),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,h.aE)((()=>this.activeLayer),((e,t)=>{var i;t&&!(null!==(i=this.sublayers)&&void 0!==i&&i.includes(t))&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),h.du),(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.layer=this,t.parent=this}),h.du),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=null,t.parent=null}),h.du),(0,h.aE)((()=>this.sublayers),((e,t)=>{if(t)for(const i of t)i.layer=null,i.parent=null;if(e)for(const i of e)i.layer=this,i.parent=this}),h.du)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(d.CE).then((()=>this._fetchService(e))).catch((e=>{throw(0,d.CE)(e),new a.c("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,i){this.activeLayer||(this.activeLayer=new D);let r=t.layers.find((e=>e.id===this.activeLayer.id));return r||(r=t.layers[0]),this.activeLayer.read(r,i),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:i,wmtsInfo:r}=t,l=i?this._getLowerCasedUrlParams(i):null,o=null===r||void 0===r?void 0:r.layerIdentifier;let s=null;const n=null===r||void 0===r?void 0:r.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(s=n[0]):s=n);const a=null===l||void 0===l?void 0:l.format,c=null===l||void 0===l?void 0:l.style;return new D({id:o,imageFormat:a,styleId:c,tileMatrixSetId:s})}writeActiveLayer(e,t,i,r){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const o=(0,p.YT)("tileMatrixSet.tileInfo",l);t.tileInfo=o?o.toJSON(r):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const i=t.wmtsInfo;return i?this._mergeParams(i.customParameters,i.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,i){return function(e,t){return e.map((e=>{const i=new D;return i.read(e,t),i}))}(t.layers,i)}get supportedSpatialReferences(){var e,t;return null!==(e=null===(t=this.activeLayer.tileMatrixSets)||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.tileInfo)||void 0===t?void 0:t.spatialReference})).toArray().filter(s.G6))&&void 0!==e?e:[]}get tilemapCache(){var e;const t=null===(e=this.activeLayer)||void 0===e||null===(e=e.tileMatrixSet)||void 0===e?void 0:e.tileInfo;return t?new E.c(t):void 0}get title(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),i=this._getTileMatrixSetById(e.tileMatrixSetId),r=null===i||void 0===i?void 0:i.tileInfo,l=e.fullExtent,o=new P.K({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new S.default({fullExtent:l,urlTemplate:t,tileInfo:r,wmtsInfo:o})}async fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,s=this.getTileUrl(e,t,i),{data:n}=await(0,o.c)(s,{responseType:"image",signal:l});return n}async fetchImageBitmapTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r;if(this.fetchTile!==pe.prototype.fetchTile){const o=await this.fetchTile(e,t,i,r);return(0,_.G)(o,e,t,i,l)}const s=this.getTileUrl(e,t,i),{data:n}=await(0,o.c)(s,{responseType:"blob",signal:l});return(0,_.G)(n,e,t,i,l)}findSublayerById(e){var t;return null===(t=this.sublayers)||void 0===t?void 0:t.find((t=>t.id===e))}getTileUrl(e,t,i){var r;const l=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),o=null===l||void 0===l||null===(r=l.tileInfo)||void 0===r?void 0:r.lods[e],s=o?o.levelValue||"".concat(o.level):"".concat(e);let n=this.resourceInfo?"":ie({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,i);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,s).replaceAll(/\{row\}/gi,"".concat(t)).replaceAll(/\{col\}/gi,"".concat(i))),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,i,r){if(!this.resourceInfo){const i=function(e,t,i,r){const{dimensionMap:l}=e,o=te(e,t);let s="";if(o&&o.length>0){var n,a;const e=null===(n=l.get(t).dimensions)||void 0===n?void 0:n[0],c=null===(a=l.get(t).dimensions2)||void 0===a?void 0:a[0];s=o[0].template,s.indexOf(".xxx")===s.length-4&&(s=s.slice(0,-4)),s=s.replaceAll(/\{Style\}/gi,r),s=s.replaceAll(/\{TileMatrixSet\}/gi,i),s=s.replaceAll(/\{TileMatrix\}/gi,"{level}"),s=s.replaceAll(/\{TileRow\}/gi,"{row}"),s=s.replaceAll(/\{TileCol\}/gi,"{col}"),s=s.replaceAll(/\{dimensionValue\}/gi,e),s=s.replaceAll(/\{dimensionValue2\}/gi,c)}return s}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,r);if(i)return i}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+r+"&FORMAT="+i+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return me[i.toLowerCase()]&&(l=me[i.toLowerCase()]),this.url+e+"/"+r+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),J(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),J(t.data),this.serviceMode=r}catch(i){throw new a.c("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{var t;null===(t=e.tileMatrixSets)||void 0===t||t.forEach((e=>{var t;const i=e.tileInfo;i&&96!==i.dpi&&(null!==(t=i.lods)&&void 0!==t&&t.forEach((t=>{var r;t.scale=96*t.scale/i.dpi,t.resolution=he(null===(r=i.spatialReference)||void 0===r?void 0:r.wkid,t.scale*z/96,e.id)})),i.dpi=96)}))})),e}(t.data):t.data=function(e,t){var i;e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,l=new Map,o=new Map,s=H("Contents",r);if(!s)throw new a.c("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=H("OperationsMetadata",r),c=null===n||void 0===n?void 0:n.querySelector("[name='GetTile']"),u=null===c||void 0===c?void 0:c.getElementsByTagName("Get"),p=u&&Array.prototype.slice.call(u),d=null===(i=t.url)||void 0===i?void 0:i.indexOf("https"),h=void 0!==d&&d>-1;let m,y,f=t.serviceMode,v=null===t||void 0===t?void 0:t.url;if(null!==p&&void 0!==p&&p.length&&p.some((e=>{const t=H("Constraint",e);return!t||Z("AllowedValues","Value",f,t)?(v=e.attributes[0].nodeValue,!0):(!t||Z("AllowedValues","Value","RESTful",t)||Z("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!Z("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!v)if(y)v=y,f="RESTful";else if(m)v=m,f="KVP";else{const e=H("ServiceMetadataURL",r);v=null===e||void 0===e?void 0:e.getAttribute("xlink:href")}const g=v.indexOf("1.0.0/");-1===g&&"RESTful"===f?v+="/":g>-1&&(v=v.substring(0,g)),"KVP"===f&&(v+=g>-1?"":"?"),h&&(v=v.replace(/^http:/i,"https:"));const w=$("ServiceIdentification>ServiceTypeVersion",r),x=$("ServiceIdentification>AccessConstraints",r),S=x&&/^none$/i.test(x)?null:x,q=Q("Layer",s),I=Q("TileMatrixSet",s),T=q.map((e=>{const t=$("Identifier",e);return l.set(t,e),ee(t,e,I,h,w)}));return{copyright:S,dimensionMap:o,layerMap:l,layers:T,serviceMode:f,tileUrl:v}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const i=this._getCapabilitiesUrl(e);return await(0,o.c)(i,{...t,responseType:"text"})}_getTileMatrixSetById(e){var t;const i=this.findSublayerById(this.activeLayer.id),r=null===i||void 0===i||null===(t=i.tileMatrixSets)||void 0===t?void 0:t.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,c.ct)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const i=(0,m.as)(e),r={...i.query,...t},l=(0,m.GK)(r);return""===l?i.path:"".concat(i.path,"?").concat(l)}_getCapabilitiesUrl(e){this.url=(0,m.as)(this.url).path;let t=this.url;switch(e){case"KVP":t+="?request=GetCapabilities&service=WMTS&version=".concat(this.version);break;case"RESTful":{const e="/".concat(this.version,"/WMTSCapabilities.xml"),i=new RegExp(e,"i");t=t.replace(i,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,m.as)(e).query;if(!t)return null;const i={};return Object.keys(t).forEach((e=>{i[e.toLowerCase()]=t[e]})),i}_mergeParams(e,t){const i=this._getLowerCasedUrlParams(t);if(i){const t=Object.keys(i);t.length&&(e=e?(0,c.ct)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ye.has(t)||(e[t]=i[t])})))}return e}};(0,l._)([(0,y.qq)()],fe.prototype,"dimensionMap",void 0),(0,l._)([(0,y.qq)()],fe.prototype,"layerMap",void 0),(0,l._)([(0,y.qq)({type:D,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],fe.prototype,"activeLayer",void 0),(0,l._)([(0,f.E)("service","activeLayer",["layers"])],fe.prototype,"readActiveLayerFromService",null),(0,l._)([(0,f.E)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],fe.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,l._)([(0,g.G)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:L.c},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],fe.prototype,"writeActiveLayer",null),(0,l._)([(0,y.qq)({type:String,value:"",json:{write:!0}})],fe.prototype,"copyright",void 0),(0,l._)([(0,y.qq)({type:["show","hide"]})],fe.prototype,"listMode",void 0),(0,l._)([(0,y.qq)({json:{read:!0,write:!0}})],fe.prototype,"blendMode",void 0),(0,l._)([(0,y.qq)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],fe.prototype,"customParameters",void 0),(0,l._)([(0,f.E)(["portal-item","web-document"],"customParameters")],fe.prototype,"readCustomParameters",null),(0,l._)([(0,y.qq)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],fe.prototype,"customLayerParameters",void 0),(0,l._)([(0,y.qq)({type:w.c,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],fe.prototype,"fullExtent",void 0),(0,l._)([(0,y.qq)({readOnly:!0})],fe.prototype,"fullExtents",null),(0,l._)([(0,y.qq)({type:["WebTiledLayer"]})],fe.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.qq)()],fe.prototype,"resourceInfo",void 0),(0,l._)([(0,y.qq)()],fe.prototype,"serviceMode",void 0),(0,l._)([(0,f.E)(["portal-item","web-document"],"serviceMode",["templateUrl"])],fe.prototype,"readServiceMode",null),(0,l._)([(0,y.qq)({type:n.c.ofType(D)})],fe.prototype,"sublayers",void 0),(0,l._)([(0,f.E)("service","sublayers",["layers"])],fe.prototype,"readSublayersFromService",null),(0,l._)([(0,y.qq)({readOnly:!0})],fe.prototype,"supportedSpatialReferences",null),(0,l._)([(0,y.qq)({readOnly:!0})],fe.prototype,"tilemapCache",null),(0,l._)([(0,y.qq)({json:{read:{source:"title"}}})],fe.prototype,"title",null),(0,l._)([(0,y.qq)({json:{read:!1},readOnly:!0,value:"wmts"})],fe.prototype,"type",void 0),(0,l._)([(0,y.qq)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],fe.prototype,"url",null),(0,l._)([(0,y.qq)()],fe.prototype,"version",void 0),fe=pe=(0,l._)([(0,v.c)("esri.layers.WMTSLayer")],fe);const ve=fe},46341:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r,l=i(51944),o=(i(99912),i(17616)),s=i(80808),n=i(92796),a=i(73704),c=i(9968),u=i(24704),p=(i(23512),i(43968),i(98323),i(29664)),d=i(32288),h=i(54448),m=i(27460),y=i(90112),f=i(13232),v=i(81880),g=i(32436),w=i(69032),x=i(32400),S=i(35276),q=i(79596),I=i(1772),T=i(31004),M=i(69599),b=i(53372);let _=r=class extends((0,y.W)((0,g.G)((0,w.I)((0,f.Y)((0,v.K)((0,n.U)(m.c))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new T.c(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,M.c.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=M.c.WebMercator,this.subDomains=null,this.tileInfo=new q.c({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b.c({x:-20037508.342787,y:20037508.342787,spatialReference:M.c.WebMercator}),spatialReference:M.c.WebMercator,lods:[new S.c({level:0,scale:591657527.591555,resolution:156543.033928}),new S.c({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S.c({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S.c({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S.c({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S.c({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S.c({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S.c({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S.c({level:8,scale:2311162.217155,resolution:611.49622628138}),new S.c({level:9,scale:1155581.108577,resolution:305.748113140558}),new S.c({level:10,scale:577790.554289,resolution:152.874056570411}),new S.c({level:11,scale:288895.277144,resolution:76.4370282850732}),new S.c({level:12,scale:144447.638572,resolution:38.2185141425366}),new S.c({level:13,scale:72223.819286,resolution:19.1092570712683}),new S.c({level:14,scale:36111.909643,resolution:9.55462853563415}),new S.c({level:15,scale:18055.954822,resolution:4.77731426794937}),new S.c({level:16,scale:9027.977411,resolution:2.38865713397468}),new S.c({level:17,scale:4513.988705,resolution:1.19432856685505}),new S.c({level:18,scale:2256.994353,resolution:.597164283559817}),new S.c({level:19,scale:1128.497176,resolution:.298582141647617}),new S.c({level:20,scale:564.248588,resolution:.14929107082380833}),new S.c({level:21,scale:282.124294,resolution:.07464553541190416}),new S.c({level:22,scale:141.062147,resolution:.03732276770595208}),new S.c({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){var t;const i=new c.iS(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&(null===(t=i.authority)||void 0===t?void 0:t.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s.c("web-tile-layer:load","WebTileLayer (title: '".concat(this.title,"', id: '").concat(this.id,"') ").concat(e))}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var i;return e||M.c.fromJSON(null===(i=t.fullExtent)||void 0===i?void 0:i.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:i}=this,r=new c.iS(t),l=r.scheme?r.scheme+"://":"//",o=l+r.authority+"/",s=r.authority;if(null!==s&&void 0!==s&&s.includes("{subDomain}")){if(i&&i.length>0&&s.split(".").length>1)for(const n of i)e.push(l+s.replaceAll(/\{subDomain\}/gi,n)+"/")}else e.push(o);return e.map(c.KW)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new c.iS(e),i=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(i.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,c.eC)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,c.k7)(e)),t.templateUrl=e}fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,s=this.getTileUrl(e,t,i),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,o.c)(s,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=l;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,i,l);return(0,x.G)(r,e,t,i,s)}const n=this.getTileUrl(e,t,i),a={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:c}=await(0,o.c)(n,a);return(0,x.G)(c,e,t,i,s)}getTileUrl(e,t,i){const{levelValues:r,tileServers:l,urlPath:o}=this;if(!r||!l||!o)return"";const s=r[e];return l[t%l.length]+(0,a.qq)(o,{level:s,z:s,col:i,x:i,row:t,y:t})}};(0,l._)([(0,u.qq)({type:String,value:"",json:{write:!0}})],_.prototype,"copyright",void 0),(0,l._)([(0,u.qq)({type:T.c,json:{write:!0},nonNullable:!0})],_.prototype,"fullExtent",void 0),(0,l._)([(0,u.qq)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"legendEnabled",void 0),(0,l._)([(0,u.qq)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,l._)([(0,u.qq)({json:{read:!0,write:!0}})],_.prototype,"blendMode",void 0),(0,l._)([(0,u.qq)()],_.prototype,"levelValues",null),(0,l._)([(0,u.qq)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],_.prototype,"isReference",void 0),(0,l._)([(0,u.qq)({type:["WebTiledLayer"],value:"WebTiledLayer"})],_.prototype,"operationalLayerType",void 0),(0,l._)([(0,u.qq)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"popupEnabled",void 0),(0,l._)([(0,u.qq)({type:M.c})],_.prototype,"spatialReference",void 0),(0,l._)([(0,p.E)("spatialReference",["spatialReference","fullExtent.spatialReference"])],_.prototype,"readSpatialReference",null),(0,l._)([(0,u.qq)({type:[String],json:{write:!0}})],_.prototype,"subDomains",void 0),(0,l._)([(0,u.qq)({type:q.c,json:{write:!0}})],_.prototype,"tileInfo",void 0),(0,l._)([(0,u.qq)({readOnly:!0})],_.prototype,"tileServers",null),(0,l._)([(0,u.qq)({json:{read:!1}})],_.prototype,"type",void 0),(0,l._)([(0,u.qq)()],_.prototype,"urlPath",null),(0,l._)([(0,u.qq)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],_.prototype,"urlTemplate",void 0),(0,l._)([(0,p.E)("urlTemplate",["urlTemplate","templateUrl"])],_.prototype,"readUrlTemplate",null),(0,l._)([(0,h.G)("urlTemplate",{templateUrl:{type:String}})],_.prototype,"writeUrlTemplate",null),(0,l._)([(0,u.qq)({type:I.K,json:{write:!0}})],_.prototype,"wmtsInfo",void 0),_=r=(0,l._)([(0,d.c)("esri.layers.WebTileLayer")],_);const L=_},40940:(e,t,i)=>{i.d(t,{u:()=>l});const r=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return null!=e&&r.some((t=>{let[i,r]=t;return e>=i&&e<=r}))}},584:(e,t,i)=>{function r(e,t){if(e&&t)for(const i of e.children)if(i.localName in t){const e=t[i.localName];if("function"==typeof e){const t=e(i);t&&r(i,t)}else r(i,e)}}function*l(e,t){for(const i of e.children)if(i.localName in t){const e=t[i.localName];"function"==typeof e?yield e(i):yield*l(i,e)}}i.d(t,{A:()=>l,K:()=>r})},36224:(e,t,i)=>{i.d(t,{c:()=>o});var r=i(80808),l=i(36844);class o{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var r;const l=null===(r=this.tileInfo)||void 0===r?void 0:r.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,o){await(0,l.wP)(o);const s=this.getAvailability(e,t,i);if("unavailable"===s)throw new r.c("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}async fetchAvailabilityUpsample(e,t,i,r,o){await(0,l.wP)(o),r.level=e,r.row=t,r.col=i;const s=this.tileInfo;return s.updateTileInfo(r),this.fetchAvailability(e,t,i,o).catch((e=>{if((0,l.mA)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,o);throw e}))}}},1772:(e,t,i)=>{i.d(t,{K:()=>c});var r,l=i(51944),o=i(43544),s=i(3194),n=i(24704),a=(i(23512),i(32288));let c=r=class extends o.am{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,s.ct)(this.customLayerParameters),customParameters:(0,s.ct)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,l._)([(0,n.qq)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),(0,l._)([(0,n.qq)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),(0,l._)([(0,n.qq)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),(0,l._)([(0,n.qq)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),(0,l._)([(0,n.qq)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=r=(0,l._)([(0,a.c)("esri.layer.support.WMTSLayerInfo")],c)},32400:(e,t,i)=>{i.d(t,{E:()=>o,G:()=>s});var r=i(80808),l=i(36844);async function o(e,t,i){let o;try{o=await createImageBitmap(e)}catch(s){throw new r.c("request:server","Unable to load ".concat(t),{url:t,error:s})}return(0,l.wp)(i),o}async function s(e,t,i,o,s){let n;try{n=await createImageBitmap(e)}catch(a){throw new r.c("request:server","Unable to load tile ".concat(t,"/").concat(i,"/").concat(o),{error:a,level:t,row:i,col:o})}return(0,l.wp)(s),n}}}]);
//# sourceMappingURL=9748.0b341084.chunk.js.map