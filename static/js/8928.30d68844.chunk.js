"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[8928],{8928:(e,t,r)=>{r.r(t),r.d(t,{default:()=>qe});var i=r(51944),n=r(84588),o=r(89096),s=r(80808),l=r(7180),a=r(92796),u=r(36844),d=r(6016),p=r(87984),y=r(9968),c=r(24704),h=(r(23512),r(43968),r(98323),r(29664)),b=r(32288),v=r(35509),f=r(27460),g=r(82364),m=r(19912),q=r(90112),w=r(91776),_=r(18592),S=r(36248),F=r(13232),O=r(81880),I=r(32436),E=r(69032),C=r(96604),j=r(37084),T=r(66084),A=r(69632),L=r(15104),x=r(74540),P=r(95716),G=r(74920),U=(r(23188),r(39950),r(30760),r(31892),r(6992)),R=r(5844),V=r(51368),k=(r(71879),r(67424)),D=r(90088),N=r(3194),Q=r(59776),M=r(68328),H=r(54448),W=r(12548),J=r(99380),B=r(99688),Y=r(14352),z=r(53460),K=r(58912),Z=r(26880),X=r(57392);const $=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],ee={key:"type",base:U.c,errorContext:"renderer",typeMap:{simple:R.c,"unique-value":V.c,"class-breaks":G.c}},te=(0,L.l)(),re=(0,W.g)({types:ee});let ie=0;function ne(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function oe(e){switch(e){case"point":case"multipoint":return X.Uz.clone();case"polyline":return X.Uj.clone();case"polygon":case"multipatch":return X.Sg.clone();default:return null}}function se(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((t=>t.code===e))}function le(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},n=se(e,t);if(null!=n){const{defaultValues:e}=n;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new B.c({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const ae="esri.layers.support.SubtypeSublayer";let ue=class extends((0,a.U)((0,n.q)((0,D.MR)(Q.c)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(ie++),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}get effectiveCapabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){var i;const{fields:n,parent:o}=this;let s;if(n){s=[];let e=0;n.forEach((t=>{var r;let{name:i,alias:n,editable:l,visible:a}=t;if(!a)return;const u=null===o||void 0===o||null===(r=o.fields)||void 0===r?void 0:r.find((e=>e.name===i));if(!u)return;const d={name:i};let p=!1;n!==u.alias&&(d.alias=n,p=!0),l!==u.editable&&(d.editable=l,p=!0),s.push(d),p&&e++})),0===e&&s.length===n.length&&(s=null)}else s=(0,N.ct)(e);(null===(i=s)||void 0===i?void 0:i.length)&&(0,M.qQ)(r,s,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;const{subtypes:n,subtypeField:o}=e,s=null===n||void 0===n?void 0:n.find((e=>e.code===r)),l=null===s||void 0===s?void 0:s.defaultValues,a=null===s||void 0===s?void 0:s.domains,u=[];for(const y of i){var d,p;const e=y.clone(),{name:i}=e,n=null===t||void 0===t?void 0:t.find((e=>e.name===i));if(e.visible=!t||!!n,n){const{alias:t,editable:r}=n;t&&(e.alias=t),!1===r&&(e.editable=!1)}const s=null!==(d=null===l||void 0===l?void 0:l[i])&&void 0!==d?d:null;e.defaultValue=i===o?r:s;const c=null!==(p=null===a||void 0===a?void 0:a[i])&&void 0!==p?p:null;e.domain=i===o?null:c?"inherited"===c.type?e.domain:c.clone():null,u.push(e)}return u}get floorInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}get geometryType(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||k.c.getLogger(ae).error(pe("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,x.Gi)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new R.c({symbol:oe(e)})}(e.geometryType):null}readRendererFromService(e,t,r){var i,n;if("Table"===t.type)return null;const o=null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer,s=re(o,t,r);let l;const{subtypeCode:a}=this;if(null!=a&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(s,t.subtypeField)){var u;const e=null===(u=s.uniqueValueInfos)||void 0===u?void 0:u.find((e=>{let{value:t}=e;return(t="number"==typeof t?String(t):t)===String(a)}));e&&(l=new R.c({symbol:e.symbol}))}else"simple"!==(null===s||void 0===s?void 0:s.type)||(null===(n=s.visualVariables)||void 0===n?void 0:n.length)||(l=s);return l}readRenderer(e,t,r){var i,n;const o=null===t||void 0===t||null===(i=t.layerDefinition)||void 0===i||null===(i=i.drawingInfo)||void 0===i?void 0:i.renderer;if(!o)return;const s=null===(n=o.visualVariables)||void 0===n?void 0:n.some((e=>"rotationInfo"!==e.type));return s?void 0:re(o,t,r)||void 0}get spatialReference(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}readTemplatesFromService(e,t){return[le(this.subtypeCode,t)]}readTitleFromService(e,t){const r=se(this.subtypeCode,t);return null!=r?r.name:null}get url(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw pe("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.c("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw pe("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s.c("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw pe("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.c("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw pe("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:n}=this;if(r){const{displayField:e,editFieldsInfo:o,objectIdField:s}=r;t={displayField:e,editFieldsInfo:o,fields:i,objectIdField:s,title:n}}return(0,Z.Ap)(t,e)}createQuery(){if(!this.parent)throw pe("createQuery");const e=(0,A.cJ)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,p._)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return $.some((e=>this.originIdOf(e)===v.sT.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw pe("queryAttachments");const i=e.clone();return i.where=de(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){var r;const i=await this.load();if(!i.parent)throw pe("queryFeatures");const n=null!==(r=K.c.from(e))&&void 0!==r?r:i.createQuery();return null!=e&&(n.where=de(n.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"capabilities",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"effectiveCapabilities",null),(0,i._)([(0,c.qq)({json:{write:{ignoreOrigin:!0}}})],ue.prototype,"charts",void 0),(0,i._)([(0,c.qq)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],ue.prototype,"editingEnabled",void 0),(0,i._)([(0,c.qq)({type:Boolean,readOnly:!0})],ue.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"elevationInfo",null),(0,i._)([(0,c.qq)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],ue.prototype,"fieldOverrides",void 0),(0,i._)([(0,H.G)("fieldOverrides")],ue.prototype,"writeFieldOverrides",null),(0,i._)([(0,c.qq)({...te.fields,readOnly:!0,json:{read:!1}})],ue.prototype,"fields",null),(0,i._)([(0,c.qq)(te.fieldsIndex)],ue.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"floorInfo",null),(0,i._)([(0,c.qq)({type:J.c,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],ue.prototype,"formTemplate",void 0),(0,i._)([(0,c.qq)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],ue.prototype,"id",void 0),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"geometryType",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"type",void 0),(0,i._)([(0,c.qq)(ne((0,N.ct)(T.Wu)))],ue.prototype,"labelsVisible",void 0),(0,i._)([(0,c.qq)({type:[Y.c],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:z.E},write:{ignoreOrigin:!0}}})],ue.prototype,"labelingInfo",void 0),(0,i._)([(0,c.qq)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],ue.prototype,"layerType",void 0),(0,i._)([(0,c.qq)(ne((0,N.ct)(T.Uj)))],ue.prototype,"legendEnabled",void 0),(0,i._)([(0,c.qq)({type:["show","hide"]})],ue.prototype,"listMode",void 0),(0,i._)([(0,c.qq)((()=>{const e=(0,N.ct)(T.Og);return e.json.origins.service.read=!1,ne(e)})())],ue.prototype,"minScale",void 0),(0,i._)([(0,c.qq)((()=>{const e=(0,N.ct)(T.ED);return e.json.origins.service.read=!1,ne(e)})())],ue.prototype,"maxScale",void 0),(0,i._)([(0,c.qq)({readOnly:!0})],ue.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"objectIdField",null),(0,i._)([(0,c.qq)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],ue.prototype,"opacity",void 0),(0,i._)([(0,c.qq)({clonable:!1})],ue.prototype,"parent",void 0),(0,i._)([(0,c.qq)(ne((0,N.ct)(T.Ou)))],ue.prototype,"popupEnabled",void 0),(0,i._)([(0,c.qq)({type:P.c,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],ue.prototype,"popupTemplate",void 0),(0,i._)([(0,c.qq)({readOnly:!0})],ue.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.qq)({types:ee,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],ue.prototype,"renderer",null),(0,i._)([(0,h.E)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],ue.prototype,"readRendererFromService",null),(0,i._)([(0,h.E)("renderer",["layerDefinition.drawingInfo.renderer"])],ue.prototype,"readRenderer",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"spatialReference",null),(0,i._)([(0,c.qq)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],ue.prototype,"subtypeCode",void 0),(0,i._)([(0,c.qq)({type:[B.c],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],ue.prototype,"templates",void 0),(0,i._)([(0,h.E)("service","templates",["geometryType","subtypeField","subtypes","type"])],ue.prototype,"readTemplatesFromService",null),(0,i._)([(0,c.qq)({type:String,json:{write:{ignoreOrigin:!0}}})],ue.prototype,"title",void 0),(0,i._)([(0,h.E)("service","title",["subtypes"])],ue.prototype,"readTitleFromService",null),(0,i._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],ue.prototype,"url",null),(0,i._)([(0,c.qq)({readOnly:!0})],ue.prototype,"userHasUpdateItemPrivileges",null),(0,i._)([(0,c.qq)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],ue.prototype,"visible",void 0),ue=(0,i._)([(0,b.c)(ae)],ue);const de=(e,t,r)=>{const i=new RegExp("".concat(t,"\\s*=\\s*\\d+")),n="".concat(t,"=").concat(r),o=null!==e&&void 0!==e?e:"";return i.test(o)?o.replace(i,n):(0,p._)(n,o)},pe=e=>new s.c("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e)),ye=ue;var ce=r(88545),he=r(18768),be=r(66012);const ve="SubtypeGroupLayer";function fe(e,t){return new s.c("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}const ge=(0,L.l)();let me=class extends((0,S.S)((0,_.CE)((0,q.W)((0,C.u)((0,E.I)((0,I.G)((0,m.u)((0,F.Y)((0,O.K)((0,a.U)((0,w.G)((0,g.C)((0,n.q)(f.c)))))))))))))){constructor(){super(...arguments),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(o.c.ofType(ye)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,u.Cu)((async(e,t,i)=>{const{save:n,saveAs:o}=await r.e(696).then(r.bind(r,90696));switch(e){case be.U.SAVE:return n(this,t);case be.U.SAVE_AS:return o(this,i,t)}})),this.addHandles((0,d.aE)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),d.du))}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(u.CE).then((async()=>{if(!this.url)throw new s.c("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s.c("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,A.oh)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,A.ig)(this)}get parsedUrl(){const e=(0,y.as)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.kn)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,t){let{name:r}=t;return this.url?(0,j.q_)(this.url,r):r}async addAttachment(e,t){return(0,A.wj)(this,e,t,ve)}async updateAttachment(e,t,r){return(0,A.kd)(this,e,t,r,ve)}async applyEdits(e,t){return(0,A.cV)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,u.Yv)(Promise.all([r.e(9064),r.e(3816),r.e(9260),r.e(392)]).then(r.bind(r,10392)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,A.cJ)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,p._)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}async deleteAttachments(e,t){return(0,A.WC)(this,e,t,ve)}async fetchRecomputedExtents(e){return(0,A.s1)(this,e,ve)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,l.A)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,A.Q1)(this,e,t,ve)}async queryFeatures(e,t){var r,i;const n=await this.load(),o=null!==(r=K.c.from(e))&&void 0!==r?r:n.createQuery(),s=null!==(i=o.outFields)&&void 0!==i?i:[];s.includes(this.subtypeField)||(s.push(this.subtypeField),o.outFields=s);const l=await n.source.queryFeatures(o,t);if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return l}async queryObjectIds(e,t){return(0,A.W2)(this,e,t,ve)}async queryFeatureCount(e,t){return(0,A.YL)(this,e,t,ve)}async queryExtent(e,t){return(0,A.iq)(this,e,t,ve)}async queryRelatedFeatures(e,t){return(0,A.ms)(this,e,t,ve)}async queryRelatedFeaturesCount(e,t){return(0,A.UN)(this,e,t,ve)}async save(e){return this._debouncedSaveOperations(be.U.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(be.U.SAVE_AS,t,e)}write(e,t){var r;const{origin:i,layerContainerType:n,messages:o}=t;if(this.isTable){if("web-scene"===i||"web-map"===i&&"tables"!==n)return null!==o&&void 0!==o&&o.push(fe(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===i&&"tables"===n)return null!==o&&void 0!==o&&o.push(fe(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?super.write(e,t):(null!==o&&void 0!==o&&o.push(new s.c("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,he.o)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var t;this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s.c("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(null===(t=this.subtypes)||void 0===t||!t.length)throw new s.c("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,x.Wc)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,A.yo)(this)}_verifyFields(){var e,t,r;const i=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+i+")"),this.isTable||-1!==i.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((e=>"geometry"===e.type)))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+i+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,this._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,this._sublayerLookup.delete(t.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,i._)([(0,c.qq)({readOnly:!0})],me.prototype,"createQueryVersion",null),(0,i._)([(0,c.qq)({readOnly:!0})],me.prototype,"editingEnabled",null),(0,i._)([(0,c.qq)({readOnly:!0})],me.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.qq)({...ge.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],me.prototype,"fields",void 0),(0,i._)([(0,c.qq)(ge.fieldsIndex)],me.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.qq)(T.id)],me.prototype,"id",void 0),(0,i._)([(0,c.qq)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],me.prototype,"listMode",void 0),(0,i._)([(0,c.qq)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],me.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.qq)(ge.outFields)],me.prototype,"outFields",void 0),(0,i._)([(0,c.qq)({readOnly:!0})],me.prototype,"parsedUrl",null),(0,i._)([(0,c.qq)({clonable:!1})],me.prototype,"source",null),(0,i._)([(0,c.qq)({type:o.c.ofType(ye),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>{let{code:i}=e;const n=new ye({subtypeCode:i});return n.read(t,r),n}));return new(o.c.ofType(ye))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),n=v.sT.PORTAL_ITEM;let o=!0;if((0,v.CQ)(i)===n&&(0,v.CQ)(r.origin)>n){const t=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||t}return{enabled:o,ignoreOrigin:!0}}}}})],me.prototype,"sublayers",void 0),(0,i._)([(0,c.qq)({type:ce.c})],me.prototype,"timeInfo",void 0),(0,i._)([(0,c.qq)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],me.prototype,"title",void 0),(0,i._)([(0,h.E)("service","title",["name"])],me.prototype,"readTitleFromService",null),(0,i._)([(0,c.qq)({json:{read:!1}})],me.prototype,"type",void 0),me=(0,i._)([(0,b.c)("esri.layers.SubtypeGroupLayer")],me);const qe=me}}]);
//# sourceMappingURL=8928.30d68844.chunk.js.map