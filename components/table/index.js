(()=>{"use strict";var t={696:(t,r,l)=>{l.d(r,{He:()=>o});const o=({finisher:t,descriptor:r})=>(l,p)=>{var u;if(void 0===p){const p=null!==(u=l.originalKey)&&void 0!==u?u:l.key,v=null!=r?{kind:"method",placement:"prototype",key:p,descriptor:r(l.key)}:{...l,key:p};return null!=t&&(v.finisher=function(r){t(r,p)}),v}{const u=l.constructor;void 0!==r&&Object.defineProperty(l,p,r(p)),null==t||t(u,p)}}},971:(t,r,l)=>{l.d(r,{g:()=>p});const p=l(3635).AH`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},1276:(t,r,l)=>{var p,u,v,f;l.d(r,{XX:()=>V,c0:()=>B,qy:()=>q});const y=globalThis.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,w="?"+m,x=`<${w}>`,E=document,c=(t="")=>E.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,a=t=>{var r;return _(t)||"function"==typeof(null===(r=t)||void 0===r?void 0:r[Symbol.iterator])},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,A=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,U=/"/g,j=/^(?:script|style|textarea)$/i,b=t=>(r,...l)=>({_$litType$:t,strings:r,values:l}),q=b(1),B=(b(2),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),D=new WeakMap,V=(t,r,l)=>{var p,u;const v=null!==(p=null==l?void 0:l.renderBefore)&&void 0!==p?p:r;let f=v._$litPart$;if(void 0===f){const t=null!==(u=null==l?void 0:l.renderBefore)&&void 0!==u?u:null;v._$litPart$=f=new C(r.insertBefore(c(),t),t,void 0,l)}return f.I(t),f},W=E.createTreeWalker(E,129,null,!1),M=(t,r)=>{const l=t.length-1,p=[];let u,v=2===r?"<svg>":"",f=P;for(let r=0;r<l;r++){const l=t[r];let y,g,w=-1,E=0;for(;E<l.length&&(f.lastIndex=E,g=f.exec(l),null!==g);)E=f.lastIndex,f===P?"!--"===g[1]?f=T:void 0!==g[1]?f=A:void 0!==g[2]?(j.test(g[2])&&(u=RegExp("</"+g[2],"g")),f=O):void 0!==g[3]&&(f=O):f===O?">"===g[0]?(f=null!=u?u:P,w=-1):void 0===g[1]?w=-2:(w=f.lastIndex-g[2].length,y=g[1],f=void 0===g[3]?O:'"'===g[3]?U:$):f===U||f===$?f=O:f===T||f===A?f=P:(f=O,u=void 0);const _=f===O&&t[r+1].startsWith("/>")?" ":"";v+=f===P?l+x:w>=0?(p.push(y),l.slice(0,w)+"$lit$"+l.slice(w)+m+_):l+m+(-2===w?(p.push(void 0),r):_)}const y=v+(t[l]||"<?>")+(2===r?"</svg>":"");return[void 0!==g?g.createHTML(y):y,p]};class N{constructor({strings:t,_$litType$:r},l){let p;this.parts=[];let u=0,v=0;const f=t.length-1,g=this.parts,[x,E]=M(t,r);if(this.el=N.createElement(x,l),W.currentNode=this.el.content,2===r){const t=this.el.content,r=t.firstChild;r.remove(),t.append(...r.childNodes)}for(;null!==(p=W.nextNode())&&g.length<f;){if(1===p.nodeType){if(p.hasAttributes()){const t=[];for(const r of p.getAttributeNames())if(r.endsWith("$lit$")||r.startsWith(m)){const l=E[v++];if(t.push(r),void 0!==l){const t=p.getAttribute(l.toLowerCase()+"$lit$").split(m),r=/([.?@])?(.*)/.exec(l);g.push({type:1,index:u,name:r[2],strings:t,ctor:"."===r[1]?I:"?"===r[1]?L:"@"===r[1]?R:H})}else g.push({type:6,index:u})}for(const r of t)p.removeAttribute(r)}if(j.test(p.tagName)){const t=p.textContent.split(m),r=t.length-1;if(r>0){p.textContent=y?y.emptyScript:"";for(let l=0;l<r;l++)p.append(t[l],c()),W.nextNode(),g.push({type:2,index:++u});p.append(t[r],c())}}}else if(8===p.nodeType)if(p.data===w)g.push({type:2,index:u});else{let t=-1;for(;-1!==(t=p.data.indexOf(m,t+1));)g.push({type:7,index:u}),t+=m.length-1}u++}}static createElement(t,r){const l=E.createElement("template");return l.innerHTML=t,l}}function S(t,r,l=t,p){var u,v,f,y;if(r===B)return r;let g=void 0!==p?null===(u=l.Σi)||void 0===u?void 0:u[p]:l.Σo;const m=d(r)?void 0:r._$litDirective$;return(null==g?void 0:g.constructor)!==m&&(null===(v=null==g?void 0:g.O)||void 0===v||v.call(g,!1),void 0===m?g=void 0:(g=new m(t),g.T(t,l,p)),void 0!==p?(null!==(f=(y=l).Σi)&&void 0!==f?f:y.Σi=[])[p]=g:l.Σo=g),void 0!==g&&(r=S(t,g.S(t,r.values),g,p)),r}class k{constructor(t,r){this.l=[],this.N=void 0,this.D=t,this.M=r}u(t){var r;const{el:{content:l},parts:p}=this.D,u=(null!==(r=null==t?void 0:t.creationScope)&&void 0!==r?r:E).importNode(l,!0);W.currentNode=u;let v=W.nextNode(),f=0,y=0,g=p[0];for(;void 0!==g;){if(f===g.index){let r;2===g.type?r=new C(v,v.nextSibling,this,t):1===g.type?r=new g.ctor(v,g.name,g.strings,this,t):6===g.type&&(r=new z(v,this,t)),this.l.push(r),g=p[++y]}f!==(null==g?void 0:g.index)&&(v=W.nextNode(),f++)}return u}v(t){let r=0;for(const l of this.l)void 0!==l&&(void 0!==l.strings?(l.I(t,l,r),r+=l.strings.length-2):l.I(t[r])),r++}}class C{constructor(t,r,l,p){this.type=2,this.N=void 0,this.A=t,this.B=r,this.M=l,this.options=p}setConnected(t){var r;null===(r=this.P)||void 0===r||r.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,r=this){t=S(this,t,r),d(t)?t===Z||null==t||""===t?(this.H!==Z&&this.R(),this.H=Z):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,r=this.B){return this.A.parentNode.insertBefore(t,r)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const r=this.A.nextSibling;null!==r&&3===r.nodeType&&(null===this.B?null===r.nextSibling:r===this.B.previousSibling)?r.data=t:this.$(E.createTextNode(t)),this.H=t}_(t){var r;const{values:l,_$litType$:p}=t,u="number"==typeof p?this.C(t):(void 0===p.el&&(p.el=N.createElement(p.h,this.options)),p);if((null===(r=this.H)||void 0===r?void 0:r.D)===u)this.H.v(l);else{const t=new k(u,this),r=t.u(this.options);t.v(l),this.$(r),this.H=t}}C(t){let r=D.get(t.strings);return void 0===r&&D.set(t.strings,r=new N(t)),r}g(t){_(this.H)||(this.H=[],this.R());const r=this.H;let l,p=0;for(const u of t)p===r.length?r.push(l=new C(this.k(c()),this.k(c()),this,this.options)):l=r[p],l.I(u),p++;p<r.length&&(this.R(l&&l.B.nextSibling,p),r.length=p)}R(t=this.A.nextSibling,r){var l;for(null===(l=this.P)||void 0===l||l.call(this,!1,!0,r);t&&t!==this.B;){const r=t.nextSibling;t.remove(),t=r}}}class H{constructor(t,r,l,p,u){this.type=1,this.H=Z,this.N=void 0,this.V=void 0,this.element=t,this.name=r,this.M=p,this.options=u,l.length>2||""!==l[0]||""!==l[1]?(this.H=Array(l.length-1).fill(Z),this.strings=l):this.H=Z}get tagName(){return this.element.tagName}I(t,r=this,l,p){const u=this.strings;let v=!1;if(void 0===u)t=S(this,t,r,0),v=!d(t)||t!==this.H&&t!==B,v&&(this.H=t);else{const p=t;let f,y;for(t=u[0],f=0;f<u.length-1;f++)y=S(this,p[l+f],r,f),y===B&&(y=this.H[f]),v||(v=!d(y)||y!==this.H[f]),y===Z?t=Z:t!==Z&&(t+=(null!=y?y:"")+u[f+1]),this.H[f]=y}v&&!p&&this.W(t)}W(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===Z?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==Z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,r=this){var l;if((t=null!==(l=S(this,t,r,0))&&void 0!==l?l:Z)===B)return;const p=this.H,u=t===Z&&p!==Z||t.capture!==p.capture||t.once!==p.once||t.passive!==p.passive,v=t!==Z&&(p===Z||u);u&&this.element.removeEventListener(this.name,this,p),v&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var r,l;"function"==typeof this.H?this.H.call(null!==(l=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==l?l:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,r,l){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=r,this.options=l}I(t){S(this,t)}}null===(u=(p=globalThis).litHtmlPlatformSupport)||void 0===u||u.call(p,N,C),(null!==(v=(f=globalThis).litHtmlVersions)&&void 0!==v?v:f.litHtmlVersions=[]).push("2.0.0-rc.3")},1686:(t,r,l)=>{l(9440)},2190:(t,r,l)=>{const p=Element.prototype;p.msMatchesSelector||p.webkitMatchesSelector},2705:(t,r,l)=>{l.d(r,{AH:()=>y.AH,mN:()=>a});var p,u,v,f,y=l(3005);const g={toAttribute(t,r){switch(r){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,r){let l=t;switch(r){case Boolean:l=null!==t;break;case Number:l=null===t?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch(t){l=null}}return l}},n=(t,r)=>r!==t&&(r==r||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var r;null!==(r=this.v)&&void 0!==r||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,l)=>{const p=this.Πp(l,r);void 0!==p&&(this.Πm.set(p,l),t.push(p))}),t}static createProperty(t,r=m){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const l="symbol"==typeof t?Symbol():"__"+t,p=this.getPropertyDescriptor(t,l,r);void 0!==p&&Object.defineProperty(this.prototype,t,p)}}static getPropertyDescriptor(t,r,l){return{get(){return this[r]},set(p){const u=this[t];this[r]=p,this.requestUpdate(t,u,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const l of r)this.createProperty(l,t[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const l=new Set(t.flat(1/0).reverse());for(const t of l)r.unshift((0,y.sk)(t))}else void 0!==t&&r.push((0,y.sk)(t));return r}static"Πp"(t,r){const l=r.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var r,l;(null!==(r=this.ΠU)&&void 0!==r?r:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(l=t.hostConnected)||void 0===l||l.call(t))}removeController(t){var r;null===(r=this.ΠU)||void 0===r||r.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this.Πi.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,y.Rf)(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostConnected)||void 0===r?void 0:r.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostDisconnected)||void 0===r?void 0:r.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,r,l){this.K(t,l)}"Πj"(t,r,l=m){var p,u;const v=this.constructor.Πp(t,l);if(void 0!==v&&!0===l.reflect){const f=(null!==(u=null===(p=l.converter)||void 0===p?void 0:p.toAttribute)&&void 0!==u?u:g.toAttribute)(r,l.type);this.Πh=t,null==f?this.removeAttribute(v):this.setAttribute(v,f),this.Πh=null}}K(t,r){var l,p,u;const v=this.constructor,f=v.Πm.get(t);if(void 0!==f&&this.Πh!==f){const t=v.getPropertyOptions(f),y=t.converter,m=null!==(u=null!==(p=null===(l=y)||void 0===l?void 0:l.fromAttribute)&&void 0!==p?p:"function"==typeof y?y:null)&&void 0!==u?u:g.fromAttribute;this.Πh=f,this[f]=m(r,t.type),this.Πh=null}}requestUpdate(t,r,l){let p=!0;void 0!==t&&(((l=l||this.constructor.getPropertyOptions(t)).hasChanged||n)(this[t],r)?(this.L.has(t)||this.L.set(t,r),!0===l.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,l))):p=!1),!this.isUpdatePending&&p&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,r)=>this[r]=t),this.Πi=void 0);let r=!1;const l=this.L;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostUpdate)||void 0===r?void 0:r.call(t)}),this.update(l)):this.Π$()}catch(t){throw r=!1,this.Π$(),t}r&&this.E(l)}willUpdate(t){}E(t){var r;null===(r=this.ΠU)||void 0===r||r.forEach(t=>{var r;return null===(r=t.hostUpdated)||void 0===r?void 0:r.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,r)=>this.Πj(r,this[r],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(u=(p=globalThis).reactiveElementPlatformSupport)||void 0===u||u.call(p,{ReactiveElement:a}),(null!==(v=(f=globalThis).reactiveElementVersions)&&void 0!==v?v:f.reactiveElementVersions=[]).push("1.0.0-rc.2")},3005:(t,r,l)=>{l.d(r,{AH:()=>i,Rf:()=>S,sk:()=>f});const p=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol();class s{constructor(t,r){if(r!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return p&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const v=new Map,o=t=>{let r=v.get(t);return void 0===r&&v.set(t,r=new s(t,u)),r},i=(t,...r)=>{const l=1===t.length?t[0]:r.reduce((r,l,p)=>r+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+t[p+1],t[0]);return o(l)},S=(t,r)=>{p?t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(r=>{const l=document.createElement("style");l.textContent=r.cssText,t.appendChild(l)})},f=p?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let r="";for(const l of t.cssRules)r+=l.cssText;return(t=>o("string"==typeof t?t:t+""))(r)})(t):t},3635:(t,r,l)=>{l.d(r,{AH:()=>p.AH,WF:()=>p.WF,qy:()=>p.qy});l(2705),l(1276);var p=l(4762)},4171:(t,r,l)=>{l.d(r,{Y:()=>e});var p=l(696);function e(t){return(0,p.He)({descriptor:r=>({get(){var r;return null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(t)},enumerable:!0,configurable:!0})})}},4236:(t,r,l)=>{l(8540)},4762:(t,r,l)=>{l.d(r,{AH:()=>m.AH,WF:()=>h,qy:()=>w.qy});var p,u,v,f,y,g,m=l(2705),w=l(1276);(null!==(p=(g=globalThis).litElementVersions)&&void 0!==p?p:g.litElementVersions=[]).push("3.0.0-rc.2");class h extends m.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,r;const l=super.createRenderRoot();return null!==(t=(r=this.renderOptions).renderBefore)&&void 0!==t||(r.renderBefore=l.firstChild),l}update(t){const r=this.render();super.update(t),this.Φt=(0,w.XX)(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return w.c0}}h.finalized=!0,h._$litElement$=!0,null===(v=(u=globalThis).litElementHydrateSupport)||void 0===v||v.call(u,{LitElement:h}),null===(y=(f=globalThis).litElementPlatformSupport)||void 0===y||y.call(f,{LitElement:h})},7808:(t,r,l)=>{l.d(r,{M:()=>e});const i=(t,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(l){l.createProperty(r.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(l){l.createProperty(r.key,t)}};function e(t){return(r,l)=>void 0!==l?((t,r,l)=>{r.constructor.createProperty(l,t)})(t,r,l):i(t,r)}},8540:(t,r,l)=>{var p=l(3635),u=l(9581),v=l(971),__decorate=function(t,r,l,p){var u,v=arguments.length,f=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,r,l,p);else for(var y=t.length-1;y>=0;y--)(u=t[y])&&(f=(v<3?u(f):v>3?u(r,l,f):u(r,l))||f);return v>3&&f&&Object.defineProperty(r,l,f),f};class korIcon extends p.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[v.g,p.AH`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){var t;return p.qy` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?p.qy` ${this.icon} `:""}`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&l.indexOf("url")>-1&&this.setBackgroundImage(l)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,u.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,u.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,u.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},9440:(t,r,l)=>{var p=l(3635),u=l(9581),v=l(971),__decorate=function(t,r,l,p){var u,v=arguments.length,f=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,r,l,p);else for(var y=t.length-1;y>=0;y--)(u=t[y])&&(f=(v<3?u(f):v>3?u(r,l,f):u(r,l))||f);return v>3&&f&&Object.defineProperty(r,l,f),f};class korText extends p.WF{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[v.g,p.AH`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return p.qy`<slot></slot>`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,u.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,u.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},9581:(t,r,l)=>{l.d(r,{MZ:()=>p.M,YG:()=>u.Y});var p=l(7808),u=l(4171);l(2190)}},r={};function __webpack_require__(l){var p=r[l];if(void 0!==p)return p.exports;var u=r[l]={exports:{}};return t[l](u,u.exports,__webpack_require__),u.exports}__webpack_require__.d=(t,r)=>{for(var l in r)__webpack_require__.o(r,l)&&!__webpack_require__.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},__webpack_require__.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var l=__webpack_require__(3635),p=__webpack_require__(9581),u=__webpack_require__(971),v=(__webpack_require__(4236),__webpack_require__(1686),function(t,r,l,p){var u,v=arguments.length,f=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,r,l,p);else for(var y=t.length-1;y>=0;y--)(u=t[y])&&(f=(v<3?u(f):v>3?u(r,l,f):u(r,l))||f);return v>3&&f&&Object.defineProperty(r,l,f),f});class korTableCell extends l.WF{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[u.g,l.AH`
        :host {
          display: flex;
          align-items: center;
          padding: var(--spacing-m) var(--spacing-s);
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: var(--spacing-s);
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: var(--spacing-xs) 0px var(--spacing-xs) var(--spacing-xs);
          color: var(--text-2);
        }
      `]}render(){return l.qy`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?l.qy`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed")),"grid-cols"==t?this.style.gridColumn="span "+this.gridCols:"sortable"==t&&this.sortable?(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()})):"sticky"==t?this.sticky?(this.style.position="sticky",this.style.backgroundColor="rgb(var(--base-3))",this.style.zIndex&&"0"!==this.style.zIndex||(this.style.zIndex="1")):(this.style.removeProperty("position"),this.style.removeProperty("background-color"),"1"===this.style.zIndex&&this.style.removeProperty("z-index")):"left"==t?this.style.left=l:"top"==t?this.style.top=l:"right"==t?this.style.right=l:"bottom"==t&&(this.style.bottom=l)}handleSort(){var t;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let r=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==r||r.forEach(t=>{t.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}v([(0,p.MZ)({type:Number,reflect:!0,attribute:"grid-cols"})],korTableCell.prototype,"gridCols",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korTableCell.prototype,"alignment",void 0),v([(0,p.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"head",void 0),v([(0,p.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sorted",void 0),v([(0,p.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sortable",void 0),v([(0,p.MZ)({type:String,reflect:!0,attribute:"sort-direction"})],korTableCell.prototype,"sortDirection",void 0),v([(0,p.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sticky",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korTableCell.prototype,"left",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korTableCell.prototype,"top",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korTableCell.prototype,"right",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korTableCell.prototype,"bottom",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",korTableCell);var F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate=function(t,r,l,p){var u,v=arguments.length,f=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,r,l,p);else for(var y=t.length-1;y>=0;y--)(u=t[y])&&(f=(v<3?u(f):v>3?u(r,l,f):u(r,l))||f);return v>3&&f&&Object.defineProperty(r,l,f),f};class korTableRow extends l.WF{getAllSlottedContent(){return Array.from(this.slots).flatMap(t=>t.assignedElements({flatten:!0}))}static get styles(){return[u.g,l.AH`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `]}render(){return l.qy` <slot></slot> `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.addEventListener("mouseenter",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))")})}),this.addEventListener("mouseleave",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.handleColumns()}handleActive(){var t;let r,l;r=this.closest("kor-table"),(null==r?void 0:r.readonly)||"header"==this.slot||(l=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes,null==l||l.forEach(t=>{t.active=!1,"header"!=t.slot&&t.getAllSlottedContent&&t.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.active=!0,this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))")}))}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,null==t||t.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=t.columns})}}F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate([(0,p.MZ)({type:Boolean,reflect:!0})],korTableRow.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate([(0,p.YG)("slot")],korTableRow.prototype,"slots",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",korTableRow);var F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate=function(t,r,l,p){var u,v=arguments.length,f=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,r,l,p);else for(var y=t.length-1;y>=0;y--)(u=t[y])&&(f=(v<3?u(f):v>3?u(r,l,f):u(r,l))||f);return v>3&&f&&Object.defineProperty(r,l,f),f};class korTable extends l.WF{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[u.g,l.AH`
        :host {
          display: flex;
          flex-direction: column;
          height: fit-content;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name="header"] {
          position: sticky;
          top: 0;
          z-index: 4;
          background-color: rgb(var(--base-3));
        }
      `]}render(){return l.qy`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,p.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"readonly",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,p.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"condensed",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,p.MZ)({type:String,reflect:!0})],korTable.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",korTable)})();