"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[1653],{96908:(e,t,l)=>{function n(e){return e=e||globalThis.location.hostname,c.some((t=>{var l;return null!=(null===(l=e)||void 0===l?void 0:l.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(r)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}l.d(t,{OM:()=>n,Ur:()=>a});const o=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,s,/^jsapps.esri.com$/,r,i]},1653:(e,t,l)=>{l.d(t,{K:()=>g,resolveWebStyleSymbol:()=>d});var n=l(8636),a=l(96908),o=l(80808),s=l(9968),r=l(42700),i=l(83120),c=l(11216),m=l(71728),u=l(99392),y=l(86e3);function d(e,t,l,d){const p=e.name;return null==p?Promise.reject(new o.c("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=u.wR.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:r.c.getDefault();return(0,u.W8)(n,l).then((e=>{const t=(0,u.sj)(e.data);return(0,c.h4)(t,{portal:a,url:(0,s.as)((0,s.iu)(n)),origin:"portal-item"})}))}(p,t,d):(0,u.yo)(e,t,d).then((e=>function(e,t,l,d,p,h){var b,f,v,w;const N=null!=(null===l||void 0===l?void 0:l.portal)?l.portal:r.c.getDefault(),U={portal:N,url:(0,s.as)(e.baseUrl),origin:"portal-item"},$=g(t,e.data);if(!$){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new o.c("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let j=(0,i.f)(p($,d),U),S=null!==(b=null===(f=$.thumbnail)||void 0===f?void 0:f.href)&&void 0!==b?b:null;const k=null===(v=$.thumbnail)||void 0===v?void 0:v.imageData;(0,a.OM)()&&(j=null!==(w=(0,a.Ur)(j))&&void 0!==w?w:"",S=(0,a.Ur)(S));const D={portal:N,url:(0,s.as)((0,s.iu)(j)),origin:"portal-item"};return(0,u.W8)(j,h).then((a=>{const o="cimRef"===d?(0,u.sj)(a.data):a.data,s=(0,c.h4)(o,D);if(s&&(0,n._8)(s)){if(S){const e=(0,i.f)(S,U);s.thumbnail=new y.u({url:e})}else k&&(s.thumbnail=new y.u({url:"data:image/png;base64,".concat(k)}));e.styleUrl?s.styleOrigin=new m.c({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new m.c({portal:l.portal,styleName:e.styleName,name:t}))}return s}))}(e,p,t,l,u.uY,d)))}function g(e,t){return t.items.find((t=>t.name===e))}}}]);
//# sourceMappingURL=1653.c23c0753.chunk.js.map