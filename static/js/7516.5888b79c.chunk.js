"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[7516],{4080:(e,t,r)=>{r.d(t,{O:()=>y});var i=r(80808),o=r(20812),s=r(97240),a=r(9968),n=r(18440),l=r(32588),d=r(35509),p=r(24704),c=r(84552),u=r(83120);function y(e){var t;const r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,i)=>{const o=function(e,t,r){var i;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){const i=(0,l.EF)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,u.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,n,l){if(null===l||void 0===l||!l.resources)return"string"==typeof t?void(o[n]=(0,u.t)(t,l)):void(o[n]=t.write({},l));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,u.t)(p,{...l,verifyItemRelativeUrls:null!==l&&void 0!==l&&l.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},u.M.NO),g=i.type!==String&&(!(0,s.w)(this)||(null===l||void 0===l?void 0:l.origin)&&this.originIdOf(r)>(0,d.CQ)(l.origin)),m={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:n,context:l,params:e};null!==l&&void 0!==l&&l.portalItem&&y&&!(0,a.ic)(y)?g&&null!==e&&void 0!==e&&e.contentAddressed?h(m):g?function(e){var t;const{context:r,targetUrl:i,params:o,value:s,dest:n,targetPropertyName:l}=e;if(!r.portalItem)return;const d=r.portalItem.resourceFromPath(i),p=v(s,i,r),u=(0,c.e)(p),y=(0,a.wt)(d.path),g=null!==(t=null===o||void 0===o?void 0:o.compress)&&void 0!==t&&t;u===y?(r.resources&&f({...e,resource:d,content:p,compress:g,updates:r.resources.toUpdate}),n[l]=i):h(e)}(m):function(e){let{context:t,targetUrl:r,dest:i,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),i[o]=r)}(m):null!==l&&void 0!==l&&l.portalItem&&(null==y||null!=(0,u.i)(y)||(0,a.ue)(y)||g)?h(m):o[n]=y}}}}(e,t,r);switch(null!==(i=null===e||void 0===e?void 0:e.type)&&void 0!==i?i:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.a;return{read:e,write:t}}}}(e,t,i);for(const e of r){const r=(0,p.aq)(t,e,i);for(const e in o)r[e]=o[e]}}}function h(e){var t,r,s,l;const{targetUrl:d,params:p,value:y,context:h,dest:g,targetPropertyName:m}=e;if(!h.portalItem)return;const w=(0,u.p)(d),b=v(y,d,h);if(null!==p&&void 0!==p&&p.contentAddressed&&"json"!==b.type)return void(null===(t=h.messages)||void 0===t||t.push(new i.c("persistable:contentAddressingUnsupported",'Property "'.concat(m,'" is trying to serializing a resource with content of type ').concat(b.type," with content addressing. Content addressing is only supported for json resources."),{content:b})));const q=null!==p&&void 0!==p&&p.contentAddressed&&"json"===b.type?(0,o.I)(b.jsonString):null!==(r=null===w||void 0===w?void 0:w.filename)&&void 0!==r?r:(0,n.g1)(),I=(0,a.kn)(null!==(s=null===p||void 0===p?void 0:p.prefix)&&void 0!==s?s:null===w||void 0===w?void 0:w.prefix,q),_="".concat(I,".").concat((0,c.e)(b));if(null!==p&&void 0!==p&&p.contentAddressed&&h.resources&&"json"===b.type){var L;const e=null!==(L=h.resources.toKeep.find((e=>e.resource.path===_)))&&void 0!==L?L:h.resources.toAdd.find((e=>e.resource.path===_));if(e)return void(g[m]=e.resource.itemRelativeUrl)}const S=h.portalItem.resourceFromPath(_);(0,a.ue)(d)&&h.resources&&h.resources.pendingOperations.push((0,a.SW)(d).then((e=>{S.path="".concat(I,".").concat((0,c.e)({type:"blob",blob:e})),g[m]=S.itemRelativeUrl})).catch((()=>{})));const F=null!==(l=null===p||void 0===p?void 0:p.compress)&&void 0!==l&&l;h.resources&&f({...e,resource:S,content:b,compress:F,updates:h.resources.toAdd}),g[m]=S.itemRelativeUrl}function f(e){let{object:t,propertyName:r,updates:i,resource:o,content:s,compress:a}=e;i.push({resource:o,content:s,compress:a,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function v(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},37516:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ge});var i=r(51944),o=r(72400),s=r(95716),a=(r(74920),r(23188),r(39950),r(30760),r(31892),r(6992),r(5844),r(51368),r(71879),r(6272)),n=r(17616),l=r(84588),d=r(89096),p=r(80808),c=r(67424),u=r(92796),y=r(36844),h=r(6016),f=r(9968),v=r(24704),g=(r(23512),r(43968),r(98323),r(75752)),m=r(29664),w=r(32288),b=r(35509),q=r(27460),I=r(82364),_=r(19912),L=r(18592),S=r(13232),F=r(81880),j=r(69032),E=r(30480),O=r(37084),A=r(9200),x=r(17260),P=r(66084),T=r(69632),R=r(22236),U=r(54160),D=r(15104),N=r(1336),C=r(74540),G=r(84228),Q=r(14352),k=r(53460),J=r(82e3),K=r(52416),V=r(43544);let W=class extends V.am{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,v.qq)({type:String,json:{read:!0,write:!0}})],W.prototype,"name",void 0),(0,i._)([(0,v.qq)({type:String,json:{read:!0,write:!0}})],W.prototype,"field",void 0),(0,i._)([(0,v.qq)({type:[Number],json:{read:!0,write:!0}})],W.prototype,"currentRangeExtent",void 0),(0,i._)([(0,v.qq)({type:[Number],json:{read:!0,write:!0}})],W.prototype,"fullRangeExtent",void 0),(0,i._)([(0,v.qq)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],W.prototype,"type",void 0),W=(0,i._)([(0,w.c)("esri.layers.support.RangeInfo")],W);var z,M=r(3194),H=r(4080),Z=r(61056),$=r(50968),B=r(91420);let Y=z=class extends((0,V.Ib)(d.c.ofType($.c))){constructor(e){super(e)}clone(){return new z(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){var t;const r=null===e||void 0===e||null===(t=e.layer)||void 0===t?void 0:t.spatialReference;return r?this.toArray().map((t=>{if(!r.equals(t.spatialReference)){if(!(0,B.canProjectWithoutEngine)(t.spatialReference,r))return null!==e&&void 0!==e&&e.messages&&e.messages.push(new Z.c("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new $.c;(0,B.projectPolygon)(t,i,r),t=i}const i=t.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(null!==e&&void 0!==e&&e.messages&&e.messages.push(new Z.c("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new z;return e.forEach((e=>r.add($.c.fromJSON(e,t)))),r}};Y=z=(0,i._)([(0,w.c)("esri.layers.support.PolygonCollection")],Y);const X=Y;var ee,te=r(83120);let re=ee=class extends V.am{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new X,this._geometriesSource=null}initialize(){this.addHandles((0,h.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),h.du))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=X.fromJSON(e,r):this._geometriesSource={url:(0,te.f)(e,r),context:r}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:r,context:i}=this._geometriesSource,o=await(0,n.c)(r,{responseType:"json",signal:null===t||void 0===t?void 0:t.signal}),s=e.toJSON(),a=o.data.map((e=>({...e,spatialReference:s})));this.geometries=X.fromJSON(a,i),this._geometriesSource=null}clone(){const e=new ee({geometries:(0,M.ct)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,i._)([(0,v.qq)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],re.prototype,"spatialRelationship",void 0),(0,i._)([(0,v.qq)({type:X,nonNullable:!0,json:{write:!0}}),(0,H.O)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],re.prototype,"geometries",void 0),(0,i._)([(0,m.E)(["web-scene","portal-item"],"geometries")],re.prototype,"readGeometries",null),re=ee=(0,i._)([(0,w.c)("esri.layers.support.SceneFilter")],re);const ie=re;var oe=r(48776),se=r(58912),ae=r(46224),ne=r(50268),le=r(26880),de=r(35216),pe=r(40963),ce=r(79928);const ue=new Set(["3DObject","Point"]),ye=(0,D.l)();let he=class extends((0,L.CE)((0,E.G6)((0,_.u)((0,S.Y)((0,F.K)((0,j.I)((0,u.U)((0,I.C)((0,l.q)(q.c)))))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new d.c,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,o;const s=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return s&&"inherited"!==s.type?s:null!==(i=null===(o=this.getField(e))||void 0===o?void 0:o.domain)&&void 0!==i?i:null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.types)&&void 0!==e?e:[]}get typeIdField(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.typeIdField)&&void 0!==e?e:null}get templates(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.templates)&&void 0!==e?e:null}get formTemplate(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.formTemplate)&&void 0!==e?e:null}get fieldsIndex(){return new N.c(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:G.yq.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer(null===(e=this.associatedLayer)||void 0===e?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&(0,T.ig)(this.associatedLayer)}get geometryType(){return ve[this.profile]||"mesh"}set renderer(e){(0,C.Gi)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer(null===(e=this.associatedLayer)||void 0===e?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var t;e=null!=e?e:x.u;const{query:r,queryRelated:i,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsUploadWithItemId:a,supportsGeometryUpdate:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:d,supportsM:p,isVersioned:c,supportsAttachment:u},operations:{supportsEditing:y,supportsAdd:h,supportsUpdate:f,supportsDelete:v,supportsQuery:g,supportsQueryAttachments:m,supportsAsyncConvert3D:w}}=e,b=e.operations.supportsChangeTracking,q=!(null===(t=this.associatedLayer)||void 0===t||!t.infoFor3D)&&(0,ne.g1)();return{query:r,queryRelated:i,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:s,supportsGeometryUpdate:q&&n,supportsUploadWithItemId:a},data:{supportsAttachment:u,supportsZ:d,supportsM:p,isVersioned:c},operations:{supportsQuery:g,supportsQueryAttachments:m,supportsEditing:y&&b,supportsAdd:q&&h&&b,supportsDelete:q&&v&&b,supportsUpdate:f&&b,supportsAsyncConvert3D:w}}}get editingEnabled(){var e,t;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.editingEnabled)&&void 0!==e&&e}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.infoFor3D)&&void 0!==e?e:null}get relationships(){var e;return null===(e=this.associatedLayer)||void 0===e?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.displayField)&&void 0!==e?e:null}readProfile(e,t){const r=t.store.profile;return null!=r&&fe[r]?fe[r]:(c.c.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.CE),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await(0,oe.M)(this,{origin:"service"},t),(0,C.Gi)(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){c.c.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new se.c;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p.c("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p.c("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){var r;const i=(0,C.k7)(this.fieldsIndex,await(0,pe.W_)(this,(0,pe.M$)(this)));return(0,de.cx)(this.parsedUrl.path,null!==(r=this.attributeStorageInfo)&&void 0!==r?r:[],e,t,i)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new p.c("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new o.c;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.c.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,le.Ap)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!==e&&void 0!==e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p.c("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.c("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p.c("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p.c("scenelayer:field-unexisting","Field '".concat(e,"' does not exist on the layer"));for(const i of this.statisticsInfo)if(i.name===r.name){const e=(0,f.kn)(this.parsedUrl.path,i.href);return(0,n.c)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p.c("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(E.UJ.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(E.UJ.SAVE,e)}async applyEdits(e,t){var i,o;const{applyEdits:s}=await r.e(248).then(r.bind(r,50248));let a=t;await this.load();const n=this.associatedLayer;if(!n)throw new p.c("".concat(this.type,"-layer:not-editable"),"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,c=null===(i=null===(o=a)||void 0===o?void 0:o.globalIdUsed)||void 0===i||i;if(d&&null==l)throw new p.c("".concat(this.type,"-layer:not-editable"),"Valid globalIdField expected on editable SceneLayer");if(d&&!c)throw new p.c("".concat(this.type,"-layer:globalid-required"),"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return(0,O.Wq)(n.url)&&d&&null!=e.deleteFeatures&&null!=l&&(a={...a,globalIdToObjectId:await(0,T.wl)(n,e.deleteFeatures,l)}),s(this,n.source,e,a)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new p.c("".concat(this.type,"-layer:not-editable"),"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ue.has(e.layerType))throw new p.c("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=o;break;case"vertex-reference-frame":r=!0,i=!o;break;default:r=!1}}if(!r)throw new p.c("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new p.c("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.c("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const t of this.fields){var e;const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((e=>e.name===t.name))),i=!(null===(e=this.associatedLayer)||void 0===e||null===(e=e.fields)||void 0===e||!e.some((e=>e&&t.name===e.name))),o={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||i,supportsLayerQuery:i};this._fieldUsageInfo[t.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var e;if(null===(e=this.associatedLayer)||void 0===e||!e.fields)return;let t=null;for(const r of this.associatedLayer.fields){const e=this.getField(r.name);e?(!e.domain&&r.domain&&(e.domain=r.domain.clone()),e.editable=r.editable,e.nullable=r.nullable,e.length=r.length):(t||(t=this.fields?this.fields.slice():[]),t.push(r.clone()))}t&&this._set("fields",t)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=(0,g.m6)(this);for(let r=0;r<e.length;r++){const i=e[r],o=this.originIdOf(i),s=this.associatedLayer.originIdOf(i);o<s&&(s===b.sT.SERVICE||s===b.sT.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],s)}}_applyAssociatedLayerExtentOverride(){var e,t,r,i,o,s;const a=null===(e=this.associatedLayer)||void 0===e||null===(e=e.editingInfo)||void 0===e?void 0:e.lastEditDate,n=null===(t=this.associatedLayer)||void 0===t?void 0:t.serverGens,l=null===(r=this.associatedLayer)||void 0===r?void 0:r.getAtOrigin("fullExtent","service");(0,ne.g1)()&&null!=(null===(i=this.associatedLayer)||void 0===i?void 0:i.infoFor3D)&&l&&(0,O.Wq)(null===(o=this.associatedLayer)||void 0===o?void 0:o.url)&&a&&(null===(s=this.serviceUpdateTimeStamp)||void 0===s?void 0:s.lastUpdate)!==a.getTime()&&(this.serviceUpdateTimeStamp||(null===n||void 0===n?void 0:n.minServerGen)!==(null===n||void 0===n?void 0:n.serverGen))&&(0,g.m6)(this).setAtOrigin("fullExtent",l.clone(),b.sT.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:i}=await(0,A.S)("".concat(this.url,"/layers/").concat(this.layerId),{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e}),o=await K.q.FeatureLayer();this.associatedLayer=new o({url:t,layerId:r,portalItem:i}),await this.associatedLayer.load()}catch(t){(0,y.mA)(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,h.Eq)((()=>this.popupEnabled&&null!=this.popupTemplate));const e="this SceneLayer: ".concat(this.title);null==this.attributeStorageInfo?c.c.getLogger(this).warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(e)):c.c.getLogger(this).info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(e))}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&(0,ae.A$)(c.c.getLogger(this),(0,ae.ay)("Mesh scene layers","relative-to-scene",e)),(0,ae.A$)(c.c.getLogger(this),(0,ae.W8)("Scene layers",e))}};(0,i._)([(0,v.qq)({types:{key:"type",base:R.E,typeMap:{selection:U.c}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],he.prototype,"featureReduction",void 0),(0,i._)([(0,v.qq)({type:[W],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],he.prototype,"rangeInfos",void 0),(0,i._)([(0,v.qq)({json:{read:!1}})],he.prototype,"associatedLayer",void 0),(0,i._)([(0,v.qq)({type:["show","hide"]})],he.prototype,"listMode",void 0),(0,i._)([(0,v.qq)({type:["ArcGISSceneServiceLayer"]})],he.prototype,"operationalLayerType",void 0),(0,i._)([(0,v.qq)({json:{read:!1},readOnly:!0})],he.prototype,"type",void 0),(0,i._)([(0,v.qq)({...ye.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"fields",void 0),(0,i._)([(0,v.qq)()],he.prototype,"types",null),(0,i._)([(0,v.qq)()],he.prototype,"typeIdField",null),(0,i._)([(0,v.qq)()],he.prototype,"templates",null),(0,i._)([(0,v.qq)()],he.prototype,"formTemplate",null),(0,i._)([(0,v.qq)({readOnly:!0,clonable:!1})],he.prototype,"fieldsIndex",null),(0,i._)([(0,v.qq)({type:J.c,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],he.prototype,"floorInfo",void 0),(0,i._)([(0,v.qq)(ye.outFields)],he.prototype,"outFields",void 0),(0,i._)([(0,v.qq)({type:G.yq,readOnly:!0,json:{read:!1}})],he.prototype,"nodePages",void 0),(0,i._)([(0,m.E)("service","nodePages",["nodePages","pointNodePages"])],he.prototype,"readNodePages",null),(0,i._)([(0,v.qq)({type:[G.a],readOnly:!0})],he.prototype,"materialDefinitions",void 0),(0,i._)([(0,v.qq)({type:[G.G4],readOnly:!0})],he.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,v.qq)({type:[G.iK],readOnly:!0})],he.prototype,"geometryDefinitions",void 0),(0,i._)([(0,v.qq)({readOnly:!0})],he.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,v.qq)({readOnly:!0})],he.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,v.qq)({readOnly:!0})],he.prototype,"statisticsInfo",void 0),(0,i._)([(0,v.qq)({type:d.c.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],he.prototype,"excludeObjectIds",void 0),(0,i._)([(0,v.qq)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],he.prototype,"definitionExpression",void 0),(0,i._)([(0,v.qq)({type:ie,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],he.prototype,"filter",void 0),(0,i._)([(0,v.qq)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],he.prototype,"path",void 0),(0,i._)([(0,v.qq)(P.Kg)],he.prototype,"elevationInfo",null),(0,i._)([(0,v.qq)({readOnly:!0,json:{read:!1}})],he.prototype,"effectiveCapabilities",null),(0,i._)([(0,v.qq)({readOnly:!0})],he.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,v.qq)({type:String})],he.prototype,"geometryType",null),(0,i._)([(0,v.qq)(P.Wu)],he.prototype,"labelsVisible",void 0),(0,i._)([(0,v.qq)({type:[Q.c],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:k.E},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:k.E},write:!0}})],he.prototype,"labelingInfo",void 0),(0,i._)([(0,v.qq)(P.Uj)],he.prototype,"legendEnabled",void 0),(0,i._)([(0,v.qq)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r;if("number"==typeof e&&e>=0&&e<=1)return e;const i=null===(r=t.layerDefinition)||void 0===r||null===(r=r.drawingInfo)||void 0===r?void 0:r.transparency;return void 0!==i?(0,ce.u)(i):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],he.prototype,"opacity",void 0),(0,i._)([(0,v.qq)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"priority",void 0),(0,i._)([(0,v.qq)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"semantic",void 0),(0,i._)([(0,v.qq)({types:a.Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],he.prototype,"renderer",null),(0,i._)([(0,v.qq)({json:{read:!1}})],he.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,m.E)("service","cachedDrawingInfo")],he.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,v.qq)({readOnly:!0,json:{read:!1}})],he.prototype,"capabilities",null),(0,i._)([(0,v.qq)({type:Boolean,json:{read:!1}})],he.prototype,"editingEnabled",null),(0,i._)([(0,v.qq)({readOnly:!0,json:{write:!1,read:!1}})],he.prototype,"infoFor3D",null),(0,i._)([(0,v.qq)({readOnly:!0,json:{write:!1,read:!1}})],he.prototype,"relationships",null),(0,i._)([(0,v.qq)(P.Ou)],he.prototype,"popupEnabled",void 0),(0,i._)([(0,v.qq)({type:s.c,json:{name:"popupInfo",write:!0}})],he.prototype,"popupTemplate",void 0),(0,i._)([(0,v.qq)({readOnly:!0,json:{read:!1}})],he.prototype,"defaultPopupTemplate",null),(0,i._)([(0,v.qq)({type:String,json:{read:!1}})],he.prototype,"objectIdField",void 0),(0,i._)([(0,m.E)("service","objectIdField",["objectIdField","fields"])],he.prototype,"readObjectIdField",null),(0,i._)([(0,v.qq)({type:String,json:{read:!1}})],he.prototype,"globalIdField",void 0),(0,i._)([(0,m.E)("service","globalIdField",["globalIdField","fields"])],he.prototype,"readGlobalIdField",null),(0,i._)([(0,v.qq)({readOnly:!0,type:String,json:{read:!1}})],he.prototype,"displayField",null),(0,i._)([(0,v.qq)({type:String,json:{read:!1}})],he.prototype,"profile",void 0),(0,i._)([(0,m.E)("service","profile",["store.profile"])],he.prototype,"readProfile",null),(0,i._)([(0,v.qq)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],he.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,v.qq)(P.Q9)],he.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,v.qq)({json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"serviceItemId",void 0),he=(0,i._)([(0,w.c)("esri.layers.SceneLayer")],he);const fe={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ve={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ge=he},84552:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(9968);function o(e){return s[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,i.wt)(e);return l[t]||a}(e.url)}(e)]||n}const s={},a="text/plain",n=s[a],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const d in l)s[l[d]]=d}}]);
//# sourceMappingURL=7516.5888b79c.chunk.js.map