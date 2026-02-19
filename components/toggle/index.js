(()=>{"use strict";var t={971:(t,r,l)=>{l.d(r,{g:()=>u});const u=l(3635).AH`
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
`},1276:(t,r,l)=>{var u,p,v,g;l.d(r,{XX:()=>V,c0:()=>B,qy:()=>j});const f=globalThis.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,w="?"+m,x=`<${w}>`,_=document,c=(t="")=>_.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,a=t=>{var r;return E(t)||"function"==typeof(null===(r=t)||void 0===r?void 0:r[Symbol.iterator])},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,A=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,O=/"/g,q=/^(?:script|style|textarea)$/i,b=t=>(r,...l)=>({_$litType$:t,strings:r,values:l}),j=b(1),B=(b(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),D=new WeakMap,V=(t,r,l)=>{var u,p;const v=null!==(u=null==l?void 0:l.renderBefore)&&void 0!==u?u:r;let g=v._$litPart$;if(void 0===g){const t=null!==(p=null==l?void 0:l.renderBefore)&&void 0!==p?p:null;v._$litPart$=g=new C(r.insertBefore(c(),t),t,void 0,l)}return g.I(t),g},Z=_.createTreeWalker(_,129,null,!1),M=(t,r)=>{const l=t.length-1,u=[];let p,v=2===r?"<svg>":"",g=P;for(let r=0;r<l;r++){const l=t[r];let f,y,w=-1,_=0;for(;_<l.length&&(g.lastIndex=_,y=g.exec(l),null!==y);)_=g.lastIndex,g===P?"!--"===y[1]?g=$:void 0!==y[1]?g=A:void 0!==y[2]?(q.test(y[2])&&(p=RegExp("</"+y[2],"g")),g=T):void 0!==y[3]&&(g=T):g===T?">"===y[0]?(g=null!=p?p:P,w=-1):void 0===y[1]?w=-2:(w=g.lastIndex-y[2].length,f=y[1],g=void 0===y[3]?T:'"'===y[3]?O:U):g===O||g===U?g=T:g===$||g===A?g=P:(g=T,p=void 0);const E=g===T&&t[r+1].startsWith("/>")?" ":"";v+=g===P?l+x:w>=0?(u.push(f),l.slice(0,w)+"$lit$"+l.slice(w)+m+E):l+m+(-2===w?(u.push(void 0),r):E)}const f=v+(t[l]||"<?>")+(2===r?"</svg>":"");return[void 0!==y?y.createHTML(f):f,u]};class N{constructor({strings:t,_$litType$:r},l){let u;this.parts=[];let p=0,v=0;const g=t.length-1,y=this.parts,[x,_]=M(t,r);if(this.el=N.createElement(x,l),Z.currentNode=this.el.content,2===r){const t=this.el.content,r=t.firstChild;r.remove(),t.append(...r.childNodes)}for(;null!==(u=Z.nextNode())&&y.length<g;){if(1===u.nodeType){if(u.hasAttributes()){const t=[];for(const r of u.getAttributeNames())if(r.endsWith("$lit$")||r.startsWith(m)){const l=_[v++];if(t.push(r),void 0!==l){const t=u.getAttribute(l.toLowerCase()+"$lit$").split(m),r=/([.?@])?(.*)/.exec(l);y.push({type:1,index:p,name:r[2],strings:t,ctor:"."===r[1]?I:"?"===r[1]?L:"@"===r[1]?R:H})}else y.push({type:6,index:p})}for(const r of t)u.removeAttribute(r)}if(q.test(u.tagName)){const t=u.textContent.split(m),r=t.length-1;if(r>0){u.textContent=f?f.emptyScript:"";for(let l=0;l<r;l++)u.append(t[l],c()),Z.nextNode(),y.push({type:2,index:++p});u.append(t[r],c())}}}else if(8===u.nodeType)if(u.data===w)y.push({type:2,index:p});else{let t=-1;for(;-1!==(t=u.data.indexOf(m,t+1));)y.push({type:7,index:p}),t+=m.length-1}p++}}static createElement(t,r){const l=_.createElement("template");return l.innerHTML=t,l}}function S(t,r,l=t,u){var p,v,g,f;if(r===B)return r;let y=void 0!==u?null===(p=l.Σi)||void 0===p?void 0:p[u]:l.Σo;const m=d(r)?void 0:r._$litDirective$;return(null==y?void 0:y.constructor)!==m&&(null===(v=null==y?void 0:y.O)||void 0===v||v.call(y,!1),void 0===m?y=void 0:(y=new m(t),y.T(t,l,u)),void 0!==u?(null!==(g=(f=l).Σi)&&void 0!==g?g:f.Σi=[])[u]=y:l.Σo=y),void 0!==y&&(r=S(t,y.S(t,r.values),y,u)),r}class k{constructor(t,r){this.l=[],this.N=void 0,this.D=t,this.M=r}u(t){var r;const{el:{content:l},parts:u}=this.D,p=(null!==(r=null==t?void 0:t.creationScope)&&void 0!==r?r:_).importNode(l,!0);Z.currentNode=p;let v=Z.nextNode(),g=0,f=0,y=u[0];for(;void 0!==y;){if(g===y.index){let r;2===y.type?r=new C(v,v.nextSibling,this,t):1===y.type?r=new y.ctor(v,y.name,y.strings,this,t):6===y.type&&(r=new z(v,this,t)),this.l.push(r),y=u[++f]}g!==(null==y?void 0:y.index)&&(v=Z.nextNode(),g++)}return p}v(t){let r=0;for(const l of this.l)void 0!==l&&(void 0!==l.strings?(l.I(t,l,r),r+=l.strings.length-2):l.I(t[r])),r++}}class C{constructor(t,r,l,u){this.type=2,this.N=void 0,this.A=t,this.B=r,this.M=l,this.options=u}setConnected(t){var r;null===(r=this.P)||void 0===r||r.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,r=this){t=S(this,t,r),d(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,r=this.B){return this.A.parentNode.insertBefore(t,r)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const r=this.A.nextSibling;null!==r&&3===r.nodeType&&(null===this.B?null===r.nextSibling:r===this.B.previousSibling)?r.data=t:this.$(_.createTextNode(t)),this.H=t}_(t){var r;const{values:l,_$litType$:u}=t,p="number"==typeof u?this.C(t):(void 0===u.el&&(u.el=N.createElement(u.h,this.options)),u);if((null===(r=this.H)||void 0===r?void 0:r.D)===p)this.H.v(l);else{const t=new k(p,this),r=t.u(this.options);t.v(l),this.$(r),this.H=t}}C(t){let r=D.get(t.strings);return void 0===r&&D.set(t.strings,r=new N(t)),r}g(t){E(this.H)||(this.H=[],this.R());const r=this.H;let l,u=0;for(const p of t)u===r.length?r.push(l=new C(this.k(c()),this.k(c()),this,this.options)):l=r[u],l.I(p),u++;u<r.length&&(this.R(l&&l.B.nextSibling,u),r.length=u)}R(t=this.A.nextSibling,r){var l;for(null===(l=this.P)||void 0===l||l.call(this,!1,!0,r);t&&t!==this.B;){const r=t.nextSibling;t.remove(),t=r}}}class H{constructor(t,r,l,u,p){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=r,this.M=u,this.options=p,l.length>2||""!==l[0]||""!==l[1]?(this.H=Array(l.length-1).fill(W),this.strings=l):this.H=W}get tagName(){return this.element.tagName}I(t,r=this,l,u){const p=this.strings;let v=!1;if(void 0===p)t=S(this,t,r,0),v=!d(t)||t!==this.H&&t!==B,v&&(this.H=t);else{const u=t;let g,f;for(t=p[0],g=0;g<p.length-1;g++)f=S(this,u[l+g],r,g),f===B&&(f=this.H[g]),v||(v=!d(f)||f!==this.H[g]),f===W?t=W:t!==W&&(t+=(null!=f?f:"")+p[g+1]),this.H[g]=f}v&&!u&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,r=this){var l;if((t=null!==(l=S(this,t,r,0))&&void 0!==l?l:W)===B)return;const u=this.H,p=t===W&&u!==W||t.capture!==u.capture||t.once!==u.once||t.passive!==u.passive,v=t!==W&&(u===W||p);p&&this.element.removeEventListener(this.name,this,u),v&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var r,l;"function"==typeof this.H?this.H.call(null!==(l=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==l?l:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,r,l){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=r,this.options=l}I(t){S(this,t)}}null===(p=(u=globalThis).litHtmlPlatformSupport)||void 0===p||p.call(u,N,C),(null!==(v=(g=globalThis).litHtmlVersions)&&void 0!==v?v:g.litHtmlVersions=[]).push("2.0.0-rc.3")},1686:(t,r,l)=>{l(9440)},2190:(t,r,l)=>{const u=Element.prototype;u.msMatchesSelector||u.webkitMatchesSelector},2705:(t,r,l)=>{l.d(r,{AH:()=>f.AH,mN:()=>a});var u,p,v,g,f=l(3005);const y={toAttribute(t,r){switch(r){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,r){let l=t;switch(r){case Boolean:l=null!==t;break;case Number:l=null===t?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch(t){l=null}}return l}},n=(t,r)=>r!==t&&(r==r||t==t),m={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var r;null!==(r=this.v)&&void 0!==r||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,l)=>{const u=this.Πp(l,r);void 0!==u&&(this.Πm.set(u,l),t.push(u))}),t}static createProperty(t,r=m){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const l="symbol"==typeof t?Symbol():"__"+t,u=this.getPropertyDescriptor(t,l,r);void 0!==u&&Object.defineProperty(this.prototype,t,u)}}static getPropertyDescriptor(t,r,l){return{get(){return this[r]},set(u){const p=this[t];this[r]=u,this.requestUpdate(t,p,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const l of r)this.createProperty(l,t[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const l=new Set(t.flat(1/0).reverse());for(const t of l)r.unshift((0,f.sk)(t))}else void 0!==t&&r.push((0,f.sk)(t));return r}static"Πp"(t,r){const l=r.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var r,l;(null!==(r=this.ΠU)&&void 0!==r?r:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(l=t.hostConnected)||void 0===l||l.call(t))}removeController(t){var r;null===(r=this.ΠU)||void 0===r||r.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this.Πi.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,f.Rf)(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostConnected)||void 0===r?void 0:r.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostDisconnected)||void 0===r?void 0:r.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,r,l){this.K(t,l)}"Πj"(t,r,l=m){var u,p;const v=this.constructor.Πp(t,l);if(void 0!==v&&!0===l.reflect){const g=(null!==(p=null===(u=l.converter)||void 0===u?void 0:u.toAttribute)&&void 0!==p?p:y.toAttribute)(r,l.type);this.Πh=t,null==g?this.removeAttribute(v):this.setAttribute(v,g),this.Πh=null}}K(t,r){var l,u,p;const v=this.constructor,g=v.Πm.get(t);if(void 0!==g&&this.Πh!==g){const t=v.getPropertyOptions(g),f=t.converter,m=null!==(p=null!==(u=null===(l=f)||void 0===l?void 0:l.fromAttribute)&&void 0!==u?u:"function"==typeof f?f:null)&&void 0!==p?p:y.fromAttribute;this.Πh=g,this[g]=m(r,t.type),this.Πh=null}}requestUpdate(t,r,l){let u=!0;void 0!==t&&(((l=l||this.constructor.getPropertyOptions(t)).hasChanged||n)(this[t],r)?(this.L.has(t)||this.L.set(t,r),!0===l.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,l))):u=!1),!this.isUpdatePending&&u&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,r)=>this[r]=t),this.Πi=void 0);let r=!1;const l=this.L;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostUpdate)||void 0===r?void 0:r.call(t)}),this.update(l)):this.Π$()}catch(t){throw r=!1,this.Π$(),t}r&&this.E(l)}willUpdate(t){}E(t){var r;null===(r=this.ΠU)||void 0===r||r.forEach(t=>{var r;return null===(r=t.hostUpdated)||void 0===r?void 0:r.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,r)=>this.Πj(r,this[r],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(p=(u=globalThis).reactiveElementPlatformSupport)||void 0===p||p.call(u,{ReactiveElement:a}),(null!==(v=(g=globalThis).reactiveElementVersions)&&void 0!==v?v:g.reactiveElementVersions=[]).push("1.0.0-rc.2")},3005:(t,r,l)=>{l.d(r,{AH:()=>i,Rf:()=>S,sk:()=>g});const u=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol();class s{constructor(t,r){if(r!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return u&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const v=new Map,o=t=>{let r=v.get(t);return void 0===r&&v.set(t,r=new s(t,p)),r},i=(t,...r)=>{const l=1===t.length?t[0]:r.reduce((r,l,u)=>r+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+t[u+1],t[0]);return o(l)},S=(t,r)=>{u?t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(r=>{const l=document.createElement("style");l.textContent=r.cssText,t.appendChild(l)})},g=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let r="";for(const l of t.cssRules)r+=l.cssText;return(t=>o("string"==typeof t?t:t+""))(r)})(t):t},3635:(t,r,l)=>{l.d(r,{AH:()=>u.AH,WF:()=>u.WF,qy:()=>u.qy});l(2705),l(1276);var u=l(4762)},4762:(t,r,l)=>{l.d(r,{AH:()=>m.AH,WF:()=>h,qy:()=>w.qy});var u,p,v,g,f,y,m=l(2705),w=l(1276);(null!==(u=(y=globalThis).litElementVersions)&&void 0!==u?u:y.litElementVersions=[]).push("3.0.0-rc.2");class h extends m.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,r;const l=super.createRenderRoot();return null!==(t=(r=this.renderOptions).renderBefore)&&void 0!==t||(r.renderBefore=l.firstChild),l}update(t){const r=this.render();super.update(t),this.Φt=(0,w.XX)(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return w.c0}}h.finalized=!0,h._$litElement$=!0,null===(v=(p=globalThis).litElementHydrateSupport)||void 0===v||v.call(p,{LitElement:h}),null===(f=(g=globalThis).litElementPlatformSupport)||void 0===f||f.call(g,{LitElement:h})},7808:(t,r,l)=>{l.d(r,{M:()=>e});const i=(t,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(l){l.createProperty(r.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(l){l.createProperty(r.key,t)}};function e(t){return(r,l)=>void 0!==l?((t,r,l)=>{r.constructor.createProperty(l,t)})(t,r,l):i(t,r)}},9440:(t,r,l)=>{var u=l(3635),p=l(9581),v=l(971),__decorate=function(t,r,l,u){var p,v=arguments.length,g=v<3?r:null===u?u=Object.getOwnPropertyDescriptor(r,l):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(t,r,l,u);else for(var f=t.length-1;f>=0;f--)(p=t[f])&&(g=(v<3?p(g):v>3?p(r,l,g):p(r,l))||g);return v>3&&g&&Object.defineProperty(r,l,g),g};class korText extends u.WF{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[v.g,u.AH`
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
      `]}render(){return u.qy`<slot></slot>`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,p.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,p.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},9581:(t,r,l)=>{l.d(r,{MZ:()=>u.M});var u=l(7808);l(2190)}},r={};function __webpack_require__(l){var u=r[l];if(void 0!==u)return u.exports;var p=r[l]={exports:{}};return t[l](p,p.exports,__webpack_require__),p.exports}__webpack_require__.d=(t,r)=>{for(var l in r)__webpack_require__.o(r,l)&&!__webpack_require__.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},__webpack_require__.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var l=__webpack_require__(3635),u=__webpack_require__(9581),p=__webpack_require__(971),v=(__webpack_require__(1686),function(t,r,l,u){var p,v=arguments.length,g=v<3?r:null===u?u=Object.getOwnPropertyDescriptor(r,l):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(t,r,l,u);else for(var f=t.length-1;f>=0;f--)(p=t[f])&&(g=(v<3?p(g):v>3?p(r,l,g):p(r,l))||g);return v>3&&g&&Object.defineProperty(r,l,g),g});class korToggle extends l.WF{static get styles(){return[p.g,l.AH`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* toggle */
        .bg {
          width: 32px;
          height: 20px;
          margin: 2px;
          padding: 2px;
          border-radius: 12px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .bg {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        .dot {
          display: flex;
          transition: var(--transition-1);
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .dot {
          transform: translateX(12px);
          background: white;
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not(:active):not([active])) .bg {
            border-color: rgba(var(--neutral-1), 0.3);
          }
          :host(:hover:not(:active):not([active])) .dot {
            background: rgba(var(--neutral-1), 0.9);
          }
        }
      `]}render(){return l.qy`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?l.qy` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}v([(0,u.MZ)({type:String,reflect:!0})],korToggle.prototype,"label",void 0),v([(0,u.MZ)({type:Boolean,reflect:!0})],korToggle.prototype,"active",void 0),v([(0,u.MZ)({type:Boolean,reflect:!0})],korToggle.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",korToggle)})();