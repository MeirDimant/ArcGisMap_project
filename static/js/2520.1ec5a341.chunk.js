"use strict";(self.webpackChunkmy_assignment=self.webpackChunkmy_assignment||[]).push([[2520],{92520:(t,e,n)=>{n.r(e),n.d(e,{b:()=>l});var r=n(71732);var i,o,a,u={exports:{}};i=u,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(o=o||__filename),a=function(t){var e,n,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(t,r){e=t,n=r}));var a,u={};for(a in i)i.hasOwnProperty(a)&&(u[a]=i[a]);var s,l,c=!1,f=!1;c="object"==typeof window,f="function"==typeof importScripts,s="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l=!c&&!s&&!f;var p,d,y,h,v="";s?(v=f?require("path").dirname(v)+"/":__dirname+"/",p=function(t,e){return y||(y=require("fs")),h||(h=require("path")),t=h.normalize(t),y.readFileSync(t,e?null:"utf8")},d=function(t){var e=p(t,!0);return e.buffer||(e=new Uint8Array(e)),T(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Be))throw t})),process.on("unhandledRejection",rt),i.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(T("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(c||f)&&(f?v=self.location.href:document.currentScript&&(v=document.currentScript.src),o&&(v=o),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},f&&(d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var m,g,b=i.print||console.log.bind(console),$=i.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(i[a]=u[a]);u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(m=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,"object"!=typeof WebAssembly&&rt("no native wasm support detected");var C=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),w=!1;function T(t,e){t||rt("Assertion failed: "+e)}var _="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.subarray&&_)return _.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(t,e){return t?P(D,t,e):""}var W="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function E(t,e){for(var n=t,r=n>>1,i=r+e/2;!(r>=i)&&U[r];)++r;if((n=r<<1)-t>32&&W)return W.decode(D.subarray(t,n));for(var o=0,a="";;){var u=I[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function S(t,e,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=e,i=(n-=2)<2*t.length?n/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);I[e>>1]=a,e+=2}return I[e>>1]=0,e-r}function k(t){return 2*t.length}function O(t,e){for(var n=0,r="";!(n>=e/4);){var i=M[t+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function j(t,e,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=e,i=r+n-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),M[e>>2]=a,(e+=4)+4>i)break}return M[e>>2]=0,e-r}function F(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}var R,x,D,I,U,M,V,H,z;function q(t,e){return t%e>0&&(t+=e-t%e),t}function B(t){R=t,i.HEAP8=x=new Int8Array(t),i.HEAP16=I=new Int16Array(t),i.HEAP32=M=new Int32Array(t),i.HEAPU8=D=new Uint8Array(t),i.HEAPU16=U=new Uint16Array(t),i.HEAPU32=V=new Uint32Array(t),i.HEAPF32=H=new Float32Array(t),i.HEAPF64=z=new Float64Array(t)}var N=i.INITIAL_MEMORY||16777216;function G(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var n=e.func;"number"==typeof n?void 0===e.arg?i.dynCall_v(n):i.dynCall_vi(n,e.arg):n(void 0===e.arg?null:e.arg)}else e(i)}}(g=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:N/65536,maximum:32768}))&&(R=g.buffer),N=R.byteLength,B(R),M[80624]=5565536;var L=[],X=[],J=[],Y=[];function Z(t){L.unshift(t)}function K(t){Y.unshift(t)}var Q=Math.ceil,tt=Math.floor,et=0,nt=null;function rt(t){i.onAbort&&i.onAbort(t),$(t+=""),w=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function it(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}i.preloadedImages={},i.preloadedAudios={};var ot="data:application/octet-stream;base64,";function at(t){return it(t,ot)}var ut="file://";function st(t){return it(t,ut)}var lt="basis_transcoder.wasm";function ct(){try{if(m)return new Uint8Array(m);if(d)return d(lt);throw"both async and sync fetching of the wasm failed"}catch($){rt($)}}at(lt)||(lt=function(t){return i.locateFile?i.locateFile(t,v):v+t}(lt)),X.push({func:function(){Ve()}});var ft={};function pt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function dt(t){return this.fromWireType(V[t>>2])}var yt={},ht={},vt={},mt=48,gt=57;function bt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=mt&&e<=gt?"_"+t:t}function $t(t,e){return t=bt(t),function(){return e.apply(this,arguments)}}function Ct(t,e){var n=$t(e,(function(t){this.name=e,this.message=t;var n=new Error(t).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var wt=void 0;function Tt(t){throw new wt(t)}function _t(t,e,n){function r(e){var r=n(e);r.length!==t.length&&Tt("Mismatched type converter count");for(var i=0;i<t.length;++i)kt(t[i],r[i])}t.forEach((function(t){vt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){ht.hasOwnProperty(t)?i[e]=ht[t]:(o.push(t),yt.hasOwnProperty(t)||(yt[t]=[]),yt[t].push((function(){i[e]=ht[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function Pt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var At=void 0;function Wt(t){for(var e="",n=t;D[n];)e+=At[D[n++]];return e}var Et=void 0;function St(t){throw new Et(t)}function kt(t,e,n){if(n=n||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||St('type "'+r+'" must have a positive integer typeid pointer'),ht.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;St("Cannot register type '"+r+"' twice")}if(ht[t]=e,delete vt[t],yt.hasOwnProperty(t)){var i=yt[t];delete yt[t],i.forEach((function(t){t()}))}}function Ot(t){if(!(this instanceof Nt))return!1;if(!(t instanceof Nt))return!1;for(var e=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)n=e.upcast(n),e=e.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return e===r&&n===i}function jt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Ft(t){St(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")}var Rt=!1;function xt(t){}function Dt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function It(t){return"undefined"==typeof FinalizationGroup?(It=function(t){return t},t):(Rt=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var n=e.value;n.ptr?Dt(n):console.warn("object already deleted: "+n.ptr)}})),It=function(t){return Rt.register(t,t.$$,t.$$),t},xt=function(t){Rt.unregister(t.$$)},It(t))}function Ut(){if(this.$$.ptr||Ft(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=It(Object.create(Object.getPrototypeOf(this),{$$:{value:jt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function Mt(){this.$$.ptr||Ft(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),xt(this),Dt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Vt(){return!this.$$.ptr}var Ht=void 0,zt=[];function qt(){for(;zt.length;){var t=zt.pop();t.$$.deleteScheduled=!1,t.delete()}}function Bt(){return this.$$.ptr||Ft(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),zt.push(this),1===zt.length&&Ht&&Ht(qt),this.$$.deleteScheduled=!0,this}function Nt(){}var Gt={};function Lt(t,e,n){if(void 0===t[e].overloadTable){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||St("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}function Xt(t,e,n){i.hasOwnProperty(t)?((void 0===n||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[n])&&St("Cannot register public name '"+t+"' twice"),Lt(i,t,t),i.hasOwnProperty(n)&&St("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[t].overloadTable[n]=e):(i[t]=e,void 0!==n&&(i[t].numArguments=n))}function Jt(t,e,n,r,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Yt(t,e,n){for(;e!==n;)e.upcast||St("Expected null or instance of "+n.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Zt(t,e){if(null===e)return this.isReference&&St("null is not a valid "+this.name),0;e.$$||St('Cannot pass "'+We(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name);var n=e.$$.ptrType.registeredClass;return Yt(e.$$.ptr,n,this.registeredClass)}function Kt(t,e){var n;if(null===e)return this.isReference&&St("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,n),n):0;e.$$||St('Cannot pass "'+We(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&St("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;if(n=Yt(e.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&St("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?n=e.$$.smartPtr:St("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)n=e.$$.smartPtr;else{var i=e.clone();n=this.rawShare(n,_e((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,n)}break;default:St("Unsupporting sharing policy")}return n}function Qt(t,e){if(null===e)return this.isReference&&St("null is not a valid "+this.name),0;e.$$||St('Cannot pass "'+We(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&St("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;return Yt(e.$$.ptr,n,this.registeredClass)}function te(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function ee(t){this.rawDestructor&&this.rawDestructor(t)}function ne(t){null!==t&&t.delete()}function re(t,e,n){if(e===n)return t;if(void 0===n.baseClass)return null;var r=re(t,e,n.baseClass);return null===r?null:n.downcast(r)}function ie(){return Object.keys(ue).length}function oe(){var t=[];for(var e in ue)ue.hasOwnProperty(e)&&t.push(ue[e]);return t}function ae(t){Ht=t,zt.length&&Ht&&Ht(qt)}var ue={};function se(t,e){return e=function(t,e){for(void 0===e&&St("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),ue[e]}function le(t,e){return e.ptrType&&e.ptr||Tt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&Tt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},It(Object.create(t,{$$:{value:e}}))}function ce(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var n=se(this.registeredClass,e);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=e,n.$$.smartPtr=t,n.clone();var r=n.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?le(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):le(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=Gt[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=re(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?le(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):le(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function fe(t,e,n,r,i,o,a,u,s,l,c){this.name=t,this.registeredClass=e,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==e.baseClass?this.toWireType=Kt:r?(this.toWireType=Zt,this.destructorFunction=null):(this.toWireType=Qt,this.destructorFunction=null)}function pe(t,e,n){i.hasOwnProperty(t)||Tt("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==n?i[t].overloadTable[n]=e:(i[t]=e,i[t].argCount=n)}function de(t,e){t=Wt(t);var n=function(t){var n=[e];return function(){n.length=arguments.length+1;for(var e=0;e<arguments.length;e++)n[e+1]=arguments[e];return t.apply(null,n)}}(i["dynCall_"+t]);return"function"!=typeof n&&St("unknown function pointer with signature "+t+": "+e),n}var ye=void 0;function he(t){var e=qe(t),n=Wt(e);return ze(e),n}function ve(t,e){var n=[],r={};throw e.forEach((function t(e){r[e]||ht[e]||(vt[e]?vt[e].forEach(t):(n.push(e),r[e]=!0))})),new ye(t+": "+n.map(he).join([", "]))}function me(t,e){for(var n=[],r=0;r<t;r++)n.push(M[(e>>2)+r]);return n}function ge(t,e,n,r,i){var o=e.length;o<2&&St("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==n,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var l="void"!==e[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var n;arguments.length!==c&&St("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(n=e[1].toWireType(d,this),p[1]=n);for(var o=0;o<c;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)pt(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?n:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(l)return e[0].fromWireType(s)}}var be=[],$e=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ce(t){t>4&&0==--$e[t].refcount&&($e[t]=void 0,be.push(t))}function we(){for(var t=0,e=5;e<$e.length;++e)void 0!==$e[e]&&++t;return t}function Te(){for(var t=5;t<$e.length;++t)if(void 0!==$e[t])return $e[t];return null}function _e(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=be.length?be.pop():$e.length;return $e[e]={refcount:1,value:t},e}}function Pe(t,e,n){switch(e){case 0:return function(t){var e=n?x:D;return this.fromWireType(e[t])};case 1:return function(t){var e=n?I:U;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=n?M:V;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function Ae(t,e){var n=ht[t];return void 0===n&&St(e+" has unknown type "+he(t)),n}function We(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Ee(t,e){switch(e){case 2:return function(t){return this.fromWireType(H[t>>2])};case 3:return function(t){return this.fromWireType(z[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Se(t,e,n){switch(e){case 0:return n?function(t){return x[t]}:function(t){return D[t]};case 1:return n?function(t){return I[t>>1]}:function(t){return U[t>>1]};case 2:return n?function(t){return M[t>>2]}:function(t){return V[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function ke(t){return t||St("Cannot use deleted val. handle = "+t),$e[t].value}var Oe={};function je(t){var e=Oe[t];return void 0===e?Wt(t):e}var Fe=[];function Re(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof r.c&&t(r.c)?$$$embind_global$$$=r.c:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var xe={};function De(t){try{return g.grow(t-R.byteLength+65535>>>16),B(g.buffer),1}catch(e){}}var Ie={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var n=Ie.buffers[t];0===e||10===e?((1===t?b:$)(P(n,0)),n.length=0):n.push(e)},varargs:void 0,get:function(){return Ie.varargs+=4,M[Ie.varargs-4>>2]},getStr:function(t){return A(t)},get64:function(t,e){return t}};wt=i.InternalError=Ct(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);At=t}(),Et=i.BindingError=Ct(Error,"BindingError"),Nt.prototype.isAliasOf=Ot,Nt.prototype.clone=Ut,Nt.prototype.delete=Mt,Nt.prototype.isDeleted=Vt,Nt.prototype.deleteLater=Bt,fe.prototype.getPointee=te,fe.prototype.destructor=ee,fe.prototype.argPackAdvance=8,fe.prototype.readValueFromPointer=dt,fe.prototype.deleteObject=ne,fe.prototype.fromWireType=ce,i.getInheritedInstanceCount=ie,i.getLiveInheritedInstances=oe,i.flushPendingDeletes=qt,i.setDelayFunction=ae,ye=i.UnboundTypeError=Ct(Error,"UnboundTypeError"),i.count_emval_handles=we,i.get_first_emval=Te;var Ue={u:function(t){var e=ft[t];delete ft[t];var n=e.rawConstructor,r=e.rawDestructor,i=e.fields;_t([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,n){var r=e.fieldName,a=t[n],u=e.getter,s=e.getterContext,l=t[n+i.length],c=e.setter,f=e.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var n=[];c(f,t,l.toWireType(n,e)),pt(n)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var n in o)e[n]=o[n].read(t);return r(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:r}]}))},J:function(t,e,n,r,i){var o=Pt(n);kt(t,{name:e=Wt(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===n)r=x;else if(2===n)r=I;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+e);r=M}return this.fromWireType(r[t>>o])},destructorFunction:null})},y:function(t,e,n,r,i,o,a,u,s,l,c,f,p){c=Wt(c),o=de(i,o),u&&(u=de(a,u)),l&&(l=de(s,l)),p=de(f,p);var d=bt(c);Xt(d,(function(){ve("Cannot construct "+c+" due to unbound types",[r])})),_t([t,e,n],r?[r]:[],(function(e){var n,i;e=e[0],i=r?(n=e.registeredClass).instancePrototype:Nt.prototype;var a=$t(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Et("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new Et(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Et("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Jt(c,a,s,p,n,o,u,l),y=new fe(c,f,!0,!1,!1),h=new fe(c+"*",f,!1,!1,!1),v=new fe(c+" const*",f,!1,!0,!1);return Gt[t]={pointerType:h,constPointerType:v},pe(d,a),[y,h,v]}))},x:function(t,e,n,r,i,o){T(e>0);var a=me(e,n);i=de(r,i);var u=[o],s=[];_t([],[t],(function(t){var n="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new Et("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){ve("Cannot construct "+t.name+" due to unbound types",a)},_t([],a,(function(r){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&St(n+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return pt(s),r[0].fromWireType(o)},[]})),[]}))},d:function(t,e,n,r,i,o,a,u){var s=me(n,r);e=Wt(e),o=de(i,o),_t([],[t],(function(t){var r=(t=t[0]).name+"."+e;function i(){ve("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var l=t.registeredClass.instancePrototype,c=l[e];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===n-2?(i.argCount=n-2,i.className=t.name,l[e]=i):(Lt(l,e,r),l[e].overloadTable[n-2]=i),_t([],s,(function(i){var u=ge(r,i,t,o,a);return void 0===l[e].overloadTable?(u.argCount=n-2,l[e]=u):l[e].overloadTable[n-2]=u,[]})),[]}))},k:function(t,e,n){t=Wt(t),_t([],[e],(function(e){return e=e[0],i[t]=e.fromWireType(n),[]}))},I:function(t,e){kt(t,{name:e=Wt(e),fromWireType:function(t){var e=$e[t].value;return Ce(t),e},toWireType:function(t,e){return _e(e)},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:null})},n:function(t,e,n,r){var i=Pt(n);function o(){}e=Wt(e),o.values={},kt(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:Pe(e,i,r),destructorFunction:null}),Xt(e,o)},a:function(t,e,n){var r=Ae(t,"enum");e=Wt(e);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:$t(r.name+"_"+e,(function(){}))}});i.values[n]=o,i[e]=o},B:function(t,e,n){var r=Pt(n);kt(t,{name:e=Wt(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+We(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Ee(e,r),destructorFunction:null})},i:function(t,e,n,r,i,o){var a=me(e,n);t=Wt(t),i=de(r,i),Xt(t,(function(){ve("Cannot call "+t+" due to unbound types",a)}),e-1),_t([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return pe(t,ge(t,r,null,i,o),e-1),[]}))},j:function(t,e,n,r,i){e=Wt(e),-1===i&&(i=4294967295);var o=Pt(n),a=function(t){return t};if(0===r){var u=32-8*n;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");kt(t,{name:e,fromWireType:a,toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+We(n)+'" to '+this.name);if(n<r||n>i)throw new TypeError('Passing a number "'+We(n)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+i+"]!");return s?n>>>0:0|n},argPackAdvance:8,readValueFromPointer:Se(e,o,0!==r),destructorFunction:null})},h:function(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=V,n=e[t>>=2],i=e[t+1];return new r(R,i,n)}kt(t,{name:n=Wt(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var n="std::string"===(e=Wt(e));kt(t,{name:e,fromWireType:function(t){var e,r=V[t>>2];if(n)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==D[a]){var u=A(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(D[t+4+o]);e=s.join("")}return ze(t),e},toWireType:function(t,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var r="string"==typeof e;r||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||St("Cannot pass non-string to std::string");var i=(n&&r?function(){return function(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++n)),r<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e}(e)}:function(){return e.length})(),o=He(4+i+1);if(V[o>>2]=i,n&&r)!function(t,e,n){(function(t,e,n,r){if(!(r>0))return 0;for(var i=n,o=n+r-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(n>=o)break;e[n++]=u}else if(u<=2047){if(n+1>=o)break;e[n++]=192|u>>6,e[n++]=128|63&u}else if(u<=65535){if(n+2>=o)break;e[n++]=224|u>>12,e[n++]=128|u>>6&63,e[n++]=128|63&u}else{if(n+3>=o)break;e[n++]=240|u>>18,e[n++]=128|u>>12&63,e[n++]=128|u>>6&63,e[n++]=128|63&u}}e[n]=0})(t,D,e,n)}(e,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=e.charCodeAt(a);u>255&&(ze(o),St("String has UTF-16 code units that do not fit in 8 bits")),D[o+4+a]=u}else for(a=0;a<i;++a)D[o+4+a]=e[a];return null!==t&&t.push(ze,o),o},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:function(t){ze(t)}})},w:function(t,e,n){var r,i,o,a,u;n=Wt(n),2===e?(r=E,i=S,a=k,o=function(){return U},u=1):4===e&&(r=O,i=j,a=F,o=function(){return V},u=2),kt(t,{name:n,fromWireType:function(t){for(var n,i=V[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*e;if(l==i||0==a[c>>u]){var f=r(s,c-s);void 0===n?n=f:(n+=String.fromCharCode(0),n+=f),s=c+e}}return ze(t),n},toWireType:function(t,r){"string"!=typeof r&&St("Cannot pass non-string to C++ string type "+n);var o=a(r),s=He(4+o+e);return V[s>>2]=o>>u,i(r,s+4,o+e),null!==t&&t.push(ze,s),s},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:function(t){ze(t)}})},v:function(t,e,n,r,i,o){ft[t]={name:Wt(e),rawConstructor:de(n,r),rawDestructor:de(i,o),fields:[]}},c:function(t,e,n,r,i,o,a,u,s,l){ft[t].fields.push({fieldName:Wt(e),getterReturnType:n,getter:de(r,i),getterContext:o,setterArgumentType:a,setter:de(u,s),setterContext:l})},K:function(t,e){kt(t,{isVoid:!0,name:e=Wt(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,n){t=ke(t),e=Ae(e,"emval::as");var r=[],i=_e(r);return M[n>>2]=i,e.toWireType(r,t)},s:function(t,e,n,r){(t=Fe[t])(e=ke(e),n=je(n),null,r)},b:Ce,z:function(t){return 0===t?_e(Re()):(t=je(t),_e(Re()[t]))},t:function(t,e){var n=function(t,e){for(var n=new Array(t),r=0;r<t;++r)n[r]=Ae(M[(e>>2)+r],"parameter "+r);return n}(t,e),r=n[0],i=new Array(t-1);return function(t){var e=Fe.length;return Fe.push(t),e}((function(e,o,a,u){for(var s=0,l=0;l<t-1;++l)i[l]=n[l+1].readValueFromPointer(u+s),s+=n[l+1].argPackAdvance;var c=e[o].apply(e,i);for(l=0;l<t-1;++l)n[l+1].deleteObject&&n[l+1].deleteObject(i[l]);if(!r.isVoid)return r.toWireType(a,c)}))},r:function(t){return t=je(t),_e(i[t])},e:function(t,e){return _e((t=ke(t))[e=ke(e)])},g:function(t){t>4&&($e[t].refcount+=1)},q:function(t,e,n,r){t=ke(t);var i=xe[e];return i||(i=function(t){var e=new Array(t+1);return function(n,r,i){e[0]=n;for(var o=0;o<t;++o){var a=Ae(M[(r>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return _e(new(n.bind.apply(n,e)))}}(e),xe[e]=i),i(t,n,r)},f:function(t){return _e(je(t))},l:function(t){pt($e[t].value),Ce(t)},p:function(){rt()},F:function(t,e,n){D.copyWithin(t,e,e+n)},G:function(t){t>>>=0;var e=D.length,n=2147483648;if(t>n)return!1;for(var r=1;r<=4;r*=2){var i=e*(1+.2/r);if(i=Math.min(i,t+100663296),De(Math.min(n,q(Math.max(16777216,t,i),65536))))return!0}return!1},H:function(t){return 0},D:function(t,e,n,r,i){},A:function(t,e,n,r){for(var i=0,o=0;o<n;o++){for(var a=M[e+8*o>>2],u=M[e+(8*o+4)>>2],s=0;s<u;s++)Ie.printChar(t,D[a+s]);i+=u}return M[r>>2]=i,0},memory:g,o:function(t){return(t=+t)>=0?+tt(t+.5):+Q(t-.5)},E:function(t){},table:C};!function(){var t={a:Ue};function e(t,e){var n=t.exports;i.asm=n,function(t){if(et--,i.monitorRunDependencies&&i.monitorRunDependencies(et),0==et&&nt){var e=nt;nt=null,e()}}()}function n(t){e(t.instance)}function r(e){return(m||!c&&!f||"function"!=typeof fetch||st(lt)?new Promise((function(t,e){t(ct())})):fetch(lt,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+lt+"'";return t.arrayBuffer()})).catch((function(){return ct()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){$("failed to asynchronously prepare wasm: "+t),rt(t)}))}if(et++,i.monitorRunDependencies&&i.monitorRunDependencies(et),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(a){return $("Module.instantiateWasm callback failed with error: "+a),!1}(function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||at(lt)||st(lt)||"function"!=typeof fetch)return r(n);fetch(lt,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return $("wasm streaming compile failed: "+t),$("falling back to ArrayBuffer instantiation"),r(n)}))}))})()}();var Me,Ve=i.___wasm_call_ctors=function(){return(Ve=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},He=i._malloc=function(){return(He=i._malloc=i.asm.M).apply(null,arguments)},ze=i._free=function(){return(ze=i._free=i.asm.N).apply(null,arguments)},qe=i.___getTypeName=function(){return(qe=i.___getTypeName=i.asm.O).apply(null,arguments)};function Be(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Ne(t){function n(){Me||(Me=!0,i.calledRun=!0,w||(G(X),G(J),e(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)K(i.postRun.shift());G(Y)}()))}et>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)Z(i.preRun.shift());G(L)}(),et>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),n()}),1)):n()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},nt=function t(){Me||Ne(),Me||(nt=t)},i.run=Ne,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ne(),t.ready},i.exports=a;var s=u.exports;const l=function(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,r.g)(s)},[s])}}]);
//# sourceMappingURL=2520.1ec5a341.chunk.js.map