"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[9532],{49532:(e,r,t)=>{t.d(r,{createLabelFunction:()=>m});var n=t(80808),a=t(67424),u=t(87984),l=t(21848),i=t(46748),s=t(81648),o=t(74540),c=t(20312),f=t(9124);const d=a.c.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},w={getAttribute:(e,r)=>e.field(r)};async function m(e,r,t){if(!e||!e.symbol||!r)return p;const a=e.where,m=(0,c.I5)(e);let g;if("arcade"===m.type){const e=await(0,f.Yj)(m.expression,t,r);if(null==e)return p;g={type:"arcade",evaluate(r,a){try{const t="attributes"in r?e.repurposeFeature(r):r;t.contextTimeZone=null!==a&&void 0!==a?a:null;const n=e.evaluate({$view:{timeZone:a},$feature:t},e.services);if(null!=n)return n.toString()}catch(t){d.error(new n.c("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:t,feature:r,expression:m}))}return null},needsHydrationToEvaluate:()=>null==(0,c.GC)(m.expression)}}else g={type:"simple",evaluate:e=>m.expression.replaceAll(/{[^}]*}/g,(t=>{const n=t.slice(1,-1),a=r.get(n);if(!a)return t;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":function(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const{max:n,min:a}=(0,s.w1)(r),u=+e;if(null!=a&&null!=n&&a<=u&&u<=n)return t.name}let n=e;return(0,o.gp)(r)?n=(0,l._m)(n,(0,l.Cg)("short-date")):(0,o.iW)(r)&&(n=(0,i.iy)(+n)),n||""}(u,a)}))};if(a){let e;try{e=await(0,u.u)(a,r)}catch(h){return d.error(new n.c("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:h})),p}const t=g.evaluate;g.evaluate=(r,u)=>{const l="attributes"in r?void 0:w;try{if(e.testFeature(r,l))return t(r,u)}catch(h){d.error(new n.c("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:r,error:h}))}return null}}return g}}}]);
//# sourceMappingURL=9532.e6858ad9.chunk.js.map