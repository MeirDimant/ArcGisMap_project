"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[4332],{52120:(e,t,r)=>{r.d(t,{c:()=>i});class i{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(null!=t&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;null!=t;)e&&e(t),t=this.dequeue()}}},97424:(e,t,r)=>{r.d(t,{AT:()=>u,C6:()=>c,uo:()=>d});var i=r(79064),s=r(38268);const n=new s.c,a=new s.c,o=new s.c,l={esriGeometryPoint:i.a,esriGeometryPolyline:i.GE,esriGeometryPolygon:i.Y5,esriGeometryMultipoint:i.i};function u(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(null==t)return null;const a=e.hasZ&&s,l=e.hasM&&n;if(r){const u=(0,i.iC)(o,t,e.hasZ,e.hasM,"esriGeometryPoint",r,s,n);return(0,i.a)(u,a,l)}return(0,i.a)(t,a,l)}function d(e,t,r,s,u,d){var c,h;let _=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r;const f=t&&_,m=r&&p,g=null!=s?"coords"in s?s:s.geometry:null;if(null==g)return null;if(u){var y,I;let s=(0,i.WY)(a,g,t,r,e,u,_,p);return d&&(s=(0,i.iC)(o,s,f,m,e,d)),null!==(y=null===(I=l[e])||void 0===I?void 0:I.call(l,s,f,m))&&void 0!==y?y:null}if(d){var x,b;const s=(0,i.iC)(o,g,t,r,e,d,_,p);return null!==(x=null===(b=l[e])||void 0===b?void 0:b.call(l,s,f,m))&&void 0!==x?x:null}return(0,i.Sk)(n,g,t,r,_,p),null!==(c=null===(h=l[e])||void 0===h?void 0:h.call(l,n,f,m))&&void 0!==c?c:null}function c(e){return e&&h in e?JSON.parse(JSON.stringify(e,_)):e}const h="_geVersion",_=(e,t)=>e!==h?t:void 0},34568:(e,t,r)=>{r.d(t,{_8:()=>p,gl:()=>h,on:()=>_});var i=r(15088),s=r(50016),n=r(91420),a=r(2344),o=r(1016),l=r(7048),u=r(12008),d=r(73384);const c=new i.O({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({});async function _(e,t,r){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),p(e,t,r)}async function p(e,t,i){var n;if(!e)return null;let{where:_}=e;if(e.where=_=null===(n=_)||void 0===n?void 0:n.trim(),(!_||/^1 *= *1$/.test(_)||t&&t===_)&&(e.where=null),!e.geometry)return e;let p=await async function(e){const{distance:t,units:i}=e,n=e.geometry;if(null==t||"vertexAttributes"in n)return n;const a=n.spatialReference,o=i?c.fromJSON(i):(0,s.PE)(a),l=a&&((0,u.Eb)(a)||(0,u.kn)(a))?n:await(0,d.Qv)(a,u.Q1).then((()=>(0,d.yU)(n,u.Q1)));return(await async function(){return(await Promise.all([r.e(5104),r.e(4092)]).then(r.bind(r,46472))).geodesicBuffer}())(l.spatialReference,l,t,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;p=(0,a.GQ)(p),p.spatialReference=t}if(p){var m;await(0,d.Qv)(p.spatialReference,i),p=function(e,t){const r=e.spatialReference;return f(e,t)&&(0,o.Ul)(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(p,i);const t=(await(0,l.WW)((0,o.h4)(p)))[0];if(null==t)throw h;const r="quantizationParameters"in e&&(null===(m=e.quantizationParameters)||void 0===m?void 0:m.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,s=r&&f(p,i)?{densificationStep:8*r}:void 0,n=t.toJSON(),a=(0,d.yU)(n,n.spatialReference,i,s);if(!a)throw h;a.spatialReference=i,e.geometry=a}return e}function f(e,t){if(!e)return!1;const r=e.spatialReference;return((0,o.Ul)(e)||(0,o.Cs)(e)||(0,o.cZ)(e))&&!(0,u.yK)(r,t)&&!(0,n.canProjectWithoutEngine)(r,t)}},38508:(e,t,r)=>{r.d(t,{aS:()=>b,a:()=>x,q0:()=>I});var i=r(80808),s=r(76864),n=r(89956);var a=r(1016),o=r(12008);function l(e,t){return e?t?4:3:t?3:2}function u(e,t,r,i,s,n){const a=l(s,n),{coords:o,lengths:u}=i;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=a)if(!d(e,t,r,o[c],o[c+1]))return!1;return!0}function d(e,t,r,i,s){if(!e)return!1;const n=l(t,r),{coords:a,lengths:o}=e;let u=!1,d=0;for(const l of o)u=c(u,a,n,d,l,i,s),d+=l*n;return u}function c(e,t,r,i,s,n,a){let o=e,l=i;for(let u=i,d=i+s*r;u<d;u+=r){l=u+r,l===d&&(l=i);const e=t[u],s=t[u+1],c=t[l],h=t[l+1];(s<a&&h>=a||h<a&&s>=a)&&e+(a-s)/(h-s)*(c-e)<n&&(o=!o)}return o}var h=r(79064),_=r(38268),p=r(97424),f=r(73384);const m="unsupported-query",g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},y={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function I(e,t,i,o,l){if((0,a.Cs)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,h.Uh)(new _.c,t,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return d(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if((0,a.Cs)(t)&&"esriGeometryMultipoint"===i){const r=(0,h.Uh)(new _.c,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>u(r,!1,!1,e,o,l)))}if((0,a.Ul)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,s.o1)(t,(0,p.uo)(i,o,l,e))));if((0,a.Ul)(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,s.k)(t,(0,p.uo)(i,o,l,e))));if((0,a.Ul)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?n.ac:(0,n.Qz)(e)}(i);return Promise.resolve((r=>e(t,(0,p.uo)(i,o,l,r))))}return Promise.all([r.e(5104),r.e(4092)]).then(r.bind(r,46472)).then((r=>{const s=r[g[e]].bind(null,t.spatialReference,t);return e=>s((0,p.uo)(i,o,l,e))}))}async function x(e,t,r){const{spatialRel:s,geometry:n}=e;if(n){if(!function(e){return null!=e&&!0===y.spatialRelationship[e]}(s))throw new i.c(m,"Unsupported query spatial relationship",{query:e});if((0,o.U3)(n.spatialReference)&&(0,o.U3)(r)){var l;if(!function(e){return null!=e&&!0===y.queryGeometry[(0,a.Ce)(e)]}(n))throw new i.c(m,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===y.layerGeometry[e]}(t))throw new i.c(m,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,f.Qv)(null===(l=e.geometry)||void 0===l?void 0:l.spatialReference,e.outSR)}}}function b(e){if((0,a.Ul)(e))return!0;if((0,a.Cs)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},88432:(e,t,r)=>{async function i(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&s)await t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,s);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=i||s;await t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(n=Math.min(n,i),a=Math.max(a,i))}))}return{start:n,end:a}}function s(e,t,r){var i,s;if(!t||!e)return null;const{startTimeField:n,endTimeField:a}=e;if(!n&&!a)return null;const{start:o,end:l}=t;if(null===o&&null===l)return null;if(void 0===o&&void 0===l)return()=>!1;const u=null!==(i=null===(s=r.getAttributeAsTimestamp)||void 0===s?void 0:s.bind(r))&&void 0!==i?i:r.getAttribute.bind(r);return n&&a?function(e,t,r,i,s){return null!=i&&null!=s?n=>{const a=e(n,t),o=e(n,r);return(null==a||a<=s)&&(null==o||o>=i)}:null!=i?t=>{const s=e(t,r);return null==s||s>=i}:null!=s?r=>{const i=e(r,t);return null==i||i<=s}:void 0}(u,n,a,o,l):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e(i,t)===r:null!=r&&null!=i?s=>{const n=e(s,t);return null!=n&&n>=r&&n<=i}:null!=r?i=>{const s=e(i,t);return null!=s&&s>=r}:null!=i?r=>{const s=e(r,t);return null!=s&&s<=i}:void 0}(u,n||a,o,l)}r.d(t,{k:()=>s,y:()=>i})},56160:(e,t,r)=>{r.d(t,{S:()=>_,w:()=>p});var i=r(52120),s=r(95904),n=(r(98323),r(96951)),a=r(20200),o=r(76946),l=r(32060);const u=(0,a.Su)();function d(e,t){return e<<16|t}function c(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const _={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),getAttributeAsTimestamp:(e,t)=>e.readAttributeAsTimestamp(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class p extends o.A{constructor(e,t,r){super(e,t),this.featureAdapter=_,this.events=new s.c,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new i.c(50),this._index=(0,n.r)(9,(e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))),this.mode=r}get storeStatistics(){let e=0,t=0,r=0;return this.forEach((i=>{const s=i.readGeometry();s&&(t+=s.isPoint?1:s.lengths.reduce(((e,t)=>e+t),0),r+=s.isPoint?1:s.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t,r){if(null==t.addOrUpdate)return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const i=t.addOrUpdate.getCursor();for(;i.next();){const t=i.getDisplayId();this.setComputedAttributes(this._storage,i,t,e.scale,r)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const i=t.addOrUpdate.getCursor();for(;i.next();)this._insertFeature(i,e.scale,r);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find((e=>e.tileId===t));if(null!=r)return r.readers;const i=new Map,s=this._searchIndex(e.bounds),n=[];for(const a of s){const e=this._storage.getInstanceId(a),t=c(e),r=h(e);i.has(t)||i.set(t,[]),i.get(t).push(r)}return i.forEach(((e,t)=>{const r=this._featureSetsByInstance.get(t);n.push(l.c.from(r,e))})),this._indexSearchCache.enqueue({tileId:t,readers:n}),n}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var i;const e=d(t.instance,t.getIndex()),s=t.getObjectId(),n=null!==(i=this._objectIdToDisplayId.get(s))&&void 0!==i?i:this._storage.createDisplayId();t.setDisplayId(n),r.setInstanceId(n,e),this._objectIdToDisplayId.set(s,n)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),i=h(r),s=c(r),n=this._featureSetsByInstance.get(s);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),n.removeAtIndex(i),n.isEmpty&&this._featureSetsByInstance.delete(s),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=this._lookupFeature(r);e(i)}))}forEachUnsafe(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=c(r),s=h(r),n=this._getFeatureSet(i);n.setIndex(s),e(n)}))}forEachInBounds(e,t){const r=this._searchIndex(e);for(const i of r)t(this.lookupFeatureByDisplayId(i,this._storage))}forEachBounds(e,t){this._rebuildIndex();for(const r of e){if(!r.readGeometry())continue;const e=r.getDisplayId();(0,a.qy)(u,this._storage.getXMin(e),this._storage.getYMin(e),this._storage.getXMax(e),this._storage.getYMax(e)),t(u)}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((i,s)=>{e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),this._objectIdToDisplayId.delete(s))})),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)}))}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return null==r?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=c(t),i=h(t),s=this._getFeatureSet(r);return s?(s.setIndex(i),s):null}_insertFeature(e,t,r){const i=this._storage,s=e.getObjectId(),n=d(e.instance,e.getIndex());i.getInstanceId(e.getDisplayId());let a=this._objectIdToDisplayId.get(s);a||(a=i.createDisplayId(),this._objectIdToDisplayId.set(s,a),this._spatialIndexInvalid=!0),e.setDisplayId(a),i.setInstanceId(a,n),this.setComputedAttributes(i,e,a,t,r)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}})):this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)})),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=c(e),r=this._getFeatureSet(t);if(!r)return;const i=r.getCursor(),s=h(e);return i.setIndex(s),i}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},76946:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(98323),s=r(66440),n=r(9124),a=r(67424);class o{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._storage=t,this._bitsets={computed:t.getBitset(t.createBitset())}}get storage(){return this._storage}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=(0,s.qq)(this._schema,t);if(this._schema=t,!t||null==r||!(0,s.Y5)(r,"attributes"))return;(0,i.c)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const n=t.attributes,a=[],o=[];for(const i in n){const e=n[i];switch(e.type){case"field":break;case"expression":a.push(this._createArcadeComputedField(e));break;case"label-expression":a.push(this._createLabelArcadeComputedField(e));break;case"statistic":o.push(e)}}this._computedFields=await Promise.all(a),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&null!=e.expression&&e.expression.referencesScale())),this._statisticFields=o}setComputedAttributes(e,t,r,i,s){const n=this._bitsets.computed;if(!this._canCacheExpressionValue||!n.has(r)){n.set(r);for(const n of this._computedFields){const a=this._evaluateField(t,n,i,s);switch(n.resultType){case"numeric":e.setComputedNumericAtIndex(r,n.fieldIndex,a);break;case"string":e.setComputedStringAtIndex(r,n.fieldIndex,a)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await(0,n.kr)(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex,{createLabelFunction:s}=await r.e(9532).then(r.bind(r,49532)),n=await s(e.label,i,t);return{...e,builder:n}}_evaluateField(e,t,r,i){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r,i)||""}case"expression":{const{expression:s}=t;return function(e,t,r){var i;if(null==e)return null;const s=t.readArcadeFeature();t.contextTimeZone=null===(i=r.$view)||void 0===i?void 0:i.timeZone;try{return e.evaluate({...r,$feature:s},e.services)}catch(n){return a.c.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",n),null}}(s,e,{$view:{scale:r,timeZone:i}})}}}}},4332:(e,t,r)=>{r.d(t,{default:()=>f});var i=r(80808),s=r(67424),n=r(6040),a=r(49524),o=r(34568),l=r(38508),u=r(88432),d=r(58912),c=r(56160),h=r(87984);const _=s.c.getLogger("esri.views.2d.layers.features.support.whereUtils"),p={getAttribute:(e,t)=>e.readAttribute(t)};class f{constructor(e){this._geometryBounds=(0,n.Su)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],r=[],i=new Set(e);return this._idToVisibility.forEach(((e,s)=>{const n=!!(1&this._idToVisibility.get(s)),a=i.has(s);!n&&a?t.push(s):n&&!a&&r.push(s),this._idToVisibility.set(s,a?3:0)})),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s}=this;return d.c.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s})}async update(e,t){this._hash=JSON.stringify(e);const r=await(0,o._8)(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(null===e||void 0===e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,t){try{const r=await(0,h.u)(e,t);if(!r.isStandardized){const e=new i.c("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);_.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,p)}}catch(r){return _.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=(null===e||void 0===e?void 0:e.objectIds)&&new Set(e.objectIds),this._idsToHide=(null===e||void 0===e?void 0:e.hiddenIds)&&new Set(e.hiddenIds),this.objectIds=null===e||void 0===e?void 0:e.objectIds}async _setGeometryFilter(e){if(null===e||void 0===e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",i=await(0,l.q0)(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,a.ac)(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,null!==e&&void 0!==e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,u.k)(this._serviceInfo.timeInfo,e.timeExtent,c.S);else{const t=new i.c("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);s.c.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){var t,r;return(!(null!==(t=this._idsToHide)&&void 0!==t&&t.size)||!this._idsToHide.has(e.getObjectId()))&&(!(null!==(r=this._idsToShow)&&void 0!==r&&r.size)||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return null==this._timeOperator||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,r)=>{1&t||(this._idToVisibility.set(r,1),e.push(r))})),e}}},32060:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(1848);class s extends i.w{static from(e,t){return new s(e.copy(),t)}constructor(e,t){super(i.w.createInstance(),e.fullSchema()),this._currentIndex=-1,this._reader=e,this._indices=t}get fields(){return this._reader.fields}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new s(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}get contextTimeZone(){return this._reader.contextTimeZone}set contextTimeZone(e){this._reader.contextTimeZone=e}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,i){const s=this.copy();return s._reader=this._reader.transform(e,t,r,i),s}readAttribute(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._reader.castToText(e)}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}}}]);
//# sourceMappingURL=4332.59aff78b.chunk.js.map