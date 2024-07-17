"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[7416],{45036:(t,e,o)=>{o.r(e),o.d(e,{default:()=>F});var r=o(51944),i=(o(99912),o(80808)),s=o(36844),n=o(9968),a=o(24704),l=(o(23512),o(43968),o(98323)),u=o(29664),p=o(32288),c=o(47520),d=o(59776),y=o(73340),h=o(55968),v=o(31004);let m=class extends d.c{constructor(t){super(t),this.type="csv",this.refresh=(0,s.Cu)((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null!==(t=this._connection)&&void 0!==t&&t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return h.c.fromJSON(o)}async queryFeaturesJSON(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:o.count,extent:v.c.fromJSON(o.extent)}}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,y.eU)("CSVSourceWorker",{strategy:(0,l.c)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:r,latitudeField:i,longitudeField:s,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:null===r||void 0===r?void 0:r.map((t=>t.toJSON())),latitudeField:i,longitudeField:s,spatialReference:null===n||void 0===n?void 0:n.toJSON(),timeInfo:null===a||void 0===a?void 0:a.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,r._)([(0,a.qq)()],m.prototype,"type",void 0),(0,r._)([(0,a.qq)()],m.prototype,"loadOptions",void 0),(0,r._)([(0,a.qq)()],m.prototype,"customParameters",void 0),(0,r._)([(0,a.qq)()],m.prototype,"locationInfo",void 0),(0,r._)([(0,a.qq)()],m.prototype,"sourceJSON",void 0),(0,r._)([(0,a.qq)()],m.prototype,"delimiter",void 0),m=(0,r._)([(0,p.c)("esri.layers.graphics.sources.CSVSource")],m);var g=o(17296),f=o(58912),q=o(83120),S=o(69599);function w(t,e){throw new i.c(e,"CSVLayer (title: ".concat(t.title,", id: ").concat(t.id,") cannot be saved to a portal item"))}let _=class extends c.default{constructor(){super(...arguments),this.geometryType="point",this.capabilities=(0,g.G4)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=S.c.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}load(t){const e=null!=t?t.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(s.CE).then((async()=>this.initLayerProperties(await this.createGraphicsSource(e))));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){var o;return null!=e.showLabels?e.showLabels:!(null===(o=e.layerDefinition)||void 0===o||null===(o=o.drawingInfo)||void 0===o||!o.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=(0,n.as)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){var e,o,r,i,s;const n=new m({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:null!==(e=this.latitudeField)&&void 0!==e?e:void 0,longitudeField:null!==(o=this.longitudeField)&&void 0!==o?o:void 0,spatialReference:null!==(r=this.spatialReference)&&void 0!==r?r:void 0,timeInfo:null!==(i=this.timeInfo)&&void 0!==i?i:void 0,url:this.url},customParameters:null!==(s=this.customParameters)&&void 0!==s?s:void 0});return this._set("source",n),await n.load({signal:t}),this.read({locationInfo:n.locationInfo,columnDelimiter:n.delimiter},{origin:"service",url:this.parsedUrl}),n}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(f.c.from(t)||this.createQuery()))).then((t=>{if(null!==t&&void 0!==t&&t.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(f.c.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(f.c.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(f.c.from(t)||this.createQuery())))}read(t,e){super.read(t,e),e&&"service"===e.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new i.c("csv-layer:clone","CSVLayer (title: ".concat(this.title,", id: ").concat(this.id,") cannot be cloned"))}async save(t){return w(this,"csv-layer:save")}async saveAs(t,e){return w(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r._)([(0,a.qq)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"capabilities",void 0),(0,r._)([(0,a.qq)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],_.prototype,"delimiter",void 0),(0,r._)([(0,a.qq)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"editingEnabled",void 0),(0,r._)([(0,a.qq)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],_.prototype,"fields",void 0),(0,r._)([(0,a.qq)({type:Boolean,readOnly:!0})],_.prototype,"isTable",null),(0,r._)([(0,u.E)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],_.prototype,"readWebMapLabelsVisible",null),(0,r._)([(0,a.qq)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"latitudeField",void 0),(0,r._)([(0,a.qq)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,r._)([(0,a.qq)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"locationType",void 0),(0,r._)([(0,a.qq)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"longitudeField",void 0),(0,r._)([(0,a.qq)({type:["CSV"]})],_.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.qq)()],_.prototype,"outFields",void 0),(0,r._)([(0,a.qq)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],_.prototype,"path",void 0),(0,r._)([(0,a.qq)({json:{read:!1},cast:null,type:m,readOnly:!0})],_.prototype,"source",void 0),(0,r._)([(0,a.qq)({json:{read:!1},value:"csv",readOnly:!0})],_.prototype,"type",void 0),(0,r._)([(0,a.qq)({json:{read:q.r,write:{isRequired:!0,ignoreOrigin:!0,writer:q.w}}})],_.prototype,"url",null),_=(0,r._)([(0,p.c)("esri.layers.CSVLayer")],_);const F=_},46800:(t,e,o)=>{o.d(e,{u:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},17296:(t,e,o)=>{o.d(e,{G4:()=>d,GA:()=>p,QD:()=>c,w7:()=>a});var r=o(98323),i=o(3194),s=o(46800),n=o(11120);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.qe:"esriGeometryPolyline"===t?n.MZ:n.yq}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(t,e){if((0,r.c)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let o="this.".concat(e," = null;");for(const e in t)o+="this".concat(l.test(e)?".".concat(e):'["'.concat(e,'"]')," = ").concat(JSON.stringify(t[e]),";");const r=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(o,";\n        }\n      }\n    "))();return()=>new r}catch(o){return()=>({[e]:null,...t})}}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.ct)(t)}}]}function d(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:s.u,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=7416.379db8d5.chunk.js.map