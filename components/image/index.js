(()=>{"use strict";var t={971:(t,r,l)=>{l.d(r,{g:()=>p});const p=l(3635).AH`
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
`},1276:(t,r,l)=>{var p,u,v,g;l.d(r,{XX:()=>V,c0:()=>B,qy:()=>j});const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,x=`<${w}>`,_=document,c=(t="")=>_.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,a=t=>{var r;return P(t)||"function"==typeof(null===(r=t)||void 0===r?void 0:r[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,A=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,T=/"/g,q=/^(?:script|style|textarea)$/i,b=t=>(r,...l)=>({_$litType$:t,strings:r,values:l}),j=b(1),B=(b(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),Z=new WeakMap,V=(t,r,l)=>{var p,u;const v=null!==(p=null==l?void 0:l.renderBefore)&&void 0!==p?p:r;let g=v._$litPart$;if(void 0===g){const t=null!==(u=null==l?void 0:l.renderBefore)&&void 0!==u?u:null;v._$litPart$=g=new C(r.insertBefore(c(),t),t,void 0,l)}return g.I(t),g},D=_.createTreeWalker(_,129,null,!1),M=(t,r)=>{const l=t.length-1,p=[];let u,v=2===r?"<svg>":"",g=E;for(let r=0;r<l;r++){const l=t[r];let f,m,w=-1,_=0;for(;_<l.length&&(g.lastIndex=_,m=g.exec(l),null!==m);)_=g.lastIndex,g===E?"!--"===m[1]?g=$:void 0!==m[1]?g=A:void 0!==m[2]?(q.test(m[2])&&(u=RegExp("</"+m[2],"g")),g=U):void 0!==m[3]&&(g=U):g===U?">"===m[0]?(g=null!=u?u:E,w=-1):void 0===m[1]?w=-2:(w=g.lastIndex-m[2].length,f=m[1],g=void 0===m[3]?U:'"'===m[3]?T:O):g===T||g===O?g=U:g===$||g===A?g=E:(g=U,u=void 0);const P=g===U&&t[r+1].startsWith("/>")?" ":"";v+=g===E?l+x:w>=0?(p.push(f),l.slice(0,w)+"$lit$"+l.slice(w)+y+P):l+y+(-2===w?(p.push(void 0),r):P)}const f=v+(t[l]||"<?>")+(2===r?"</svg>":"");return[void 0!==m?m.createHTML(f):f,p]};class N{constructor({strings:t,_$litType$:r},l){let p;this.parts=[];let u=0,v=0;const g=t.length-1,m=this.parts,[x,_]=M(t,r);if(this.el=N.createElement(x,l),D.currentNode=this.el.content,2===r){const t=this.el.content,r=t.firstChild;r.remove(),t.append(...r.childNodes)}for(;null!==(p=D.nextNode())&&m.length<g;){if(1===p.nodeType){if(p.hasAttributes()){const t=[];for(const r of p.getAttributeNames())if(r.endsWith("$lit$")||r.startsWith(y)){const l=_[v++];if(t.push(r),void 0!==l){const t=p.getAttribute(l.toLowerCase()+"$lit$").split(y),r=/([.?@])?(.*)/.exec(l);m.push({type:1,index:u,name:r[2],strings:t,ctor:"."===r[1]?I:"?"===r[1]?L:"@"===r[1]?R:H})}else m.push({type:6,index:u})}for(const r of t)p.removeAttribute(r)}if(q.test(p.tagName)){const t=p.textContent.split(y),r=t.length-1;if(r>0){p.textContent=f?f.emptyScript:"";for(let l=0;l<r;l++)p.append(t[l],c()),D.nextNode(),m.push({type:2,index:++u});p.append(t[r],c())}}}else if(8===p.nodeType)if(p.data===w)m.push({type:2,index:u});else{let t=-1;for(;-1!==(t=p.data.indexOf(y,t+1));)m.push({type:7,index:u}),t+=y.length-1}u++}}static createElement(t,r){const l=_.createElement("template");return l.innerHTML=t,l}}function S(t,r,l=t,p){var u,v,g,f;if(r===B)return r;let m=void 0!==p?null===(u=l.Σi)||void 0===u?void 0:u[p]:l.Σo;const y=d(r)?void 0:r._$litDirective$;return(null==m?void 0:m.constructor)!==y&&(null===(v=null==m?void 0:m.O)||void 0===v||v.call(m,!1),void 0===y?m=void 0:(m=new y(t),m.T(t,l,p)),void 0!==p?(null!==(g=(f=l).Σi)&&void 0!==g?g:f.Σi=[])[p]=m:l.Σo=m),void 0!==m&&(r=S(t,m.S(t,r.values),m,p)),r}class k{constructor(t,r){this.l=[],this.N=void 0,this.D=t,this.M=r}u(t){var r;const{el:{content:l},parts:p}=this.D,u=(null!==(r=null==t?void 0:t.creationScope)&&void 0!==r?r:_).importNode(l,!0);D.currentNode=u;let v=D.nextNode(),g=0,f=0,m=p[0];for(;void 0!==m;){if(g===m.index){let r;2===m.type?r=new C(v,v.nextSibling,this,t):1===m.type?r=new m.ctor(v,m.name,m.strings,this,t):6===m.type&&(r=new z(v,this,t)),this.l.push(r),m=p[++f]}g!==(null==m?void 0:m.index)&&(v=D.nextNode(),g++)}return u}v(t){let r=0;for(const l of this.l)void 0!==l&&(void 0!==l.strings?(l.I(t,l,r),r+=l.strings.length-2):l.I(t[r])),r++}}class C{constructor(t,r,l,p){this.type=2,this.N=void 0,this.A=t,this.B=r,this.M=l,this.options=p}setConnected(t){var r;null===(r=this.P)||void 0===r||r.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,r=this){t=S(this,t,r),d(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,r=this.B){return this.A.parentNode.insertBefore(t,r)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const r=this.A.nextSibling;null!==r&&3===r.nodeType&&(null===this.B?null===r.nextSibling:r===this.B.previousSibling)?r.data=t:this.$(_.createTextNode(t)),this.H=t}_(t){var r;const{values:l,_$litType$:p}=t,u="number"==typeof p?this.C(t):(void 0===p.el&&(p.el=N.createElement(p.h,this.options)),p);if((null===(r=this.H)||void 0===r?void 0:r.D)===u)this.H.v(l);else{const t=new k(u,this),r=t.u(this.options);t.v(l),this.$(r),this.H=t}}C(t){let r=Z.get(t.strings);return void 0===r&&Z.set(t.strings,r=new N(t)),r}g(t){P(this.H)||(this.H=[],this.R());const r=this.H;let l,p=0;for(const u of t)p===r.length?r.push(l=new C(this.k(c()),this.k(c()),this,this.options)):l=r[p],l.I(u),p++;p<r.length&&(this.R(l&&l.B.nextSibling,p),r.length=p)}R(t=this.A.nextSibling,r){var l;for(null===(l=this.P)||void 0===l||l.call(this,!1,!0,r);t&&t!==this.B;){const r=t.nextSibling;t.remove(),t=r}}}class H{constructor(t,r,l,p,u){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=r,this.M=p,this.options=u,l.length>2||""!==l[0]||""!==l[1]?(this.H=Array(l.length-1).fill(W),this.strings=l):this.H=W}get tagName(){return this.element.tagName}I(t,r=this,l,p){const u=this.strings;let v=!1;if(void 0===u)t=S(this,t,r,0),v=!d(t)||t!==this.H&&t!==B,v&&(this.H=t);else{const p=t;let g,f;for(t=u[0],g=0;g<u.length-1;g++)f=S(this,p[l+g],r,g),f===B&&(f=this.H[g]),v||(v=!d(f)||f!==this.H[g]),f===W?t=W:t!==W&&(t+=(null!=f?f:"")+u[g+1]),this.H[g]=f}v&&!p&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,r=this){var l;if((t=null!==(l=S(this,t,r,0))&&void 0!==l?l:W)===B)return;const p=this.H,u=t===W&&p!==W||t.capture!==p.capture||t.once!==p.once||t.passive!==p.passive,v=t!==W&&(p===W||u);u&&this.element.removeEventListener(this.name,this,p),v&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var r,l;"function"==typeof this.H?this.H.call(null!==(l=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==l?l:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,r,l){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=r,this.options=l}I(t){S(this,t)}}null===(u=(p=globalThis).litHtmlPlatformSupport)||void 0===u||u.call(p,N,C),(null!==(v=(g=globalThis).litHtmlVersions)&&void 0!==v?v:g.litHtmlVersions=[]).push("2.0.0-rc.3")},1686:(t,r,l)=>{l(9440)},2190:(t,r,l)=>{const p=Element.prototype;p.msMatchesSelector||p.webkitMatchesSelector},2705:(t,r,l)=>{l.d(r,{AH:()=>f.AH,mN:()=>a});var p,u,v,g,f=l(3005);const m={toAttribute(t,r){switch(r){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,r){let l=t;switch(r){case Boolean:l=null!==t;break;case Number:l=null===t?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch(t){l=null}}return l}},n=(t,r)=>r!==t&&(r==r||t==t),y={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var r;null!==(r=this.v)&&void 0!==r||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,l)=>{const p=this.Πp(l,r);void 0!==p&&(this.Πm.set(p,l),t.push(p))}),t}static createProperty(t,r=y){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const l="symbol"==typeof t?Symbol():"__"+t,p=this.getPropertyDescriptor(t,l,r);void 0!==p&&Object.defineProperty(this.prototype,t,p)}}static getPropertyDescriptor(t,r,l){return{get(){return this[r]},set(p){const u=this[t];this[r]=p,this.requestUpdate(t,u,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const l of r)this.createProperty(l,t[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const l=new Set(t.flat(1/0).reverse());for(const t of l)r.unshift((0,f.sk)(t))}else void 0!==t&&r.push((0,f.sk)(t));return r}static"Πp"(t,r){const l=r.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var r,l;(null!==(r=this.ΠU)&&void 0!==r?r:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(l=t.hostConnected)||void 0===l||l.call(t))}removeController(t){var r;null===(r=this.ΠU)||void 0===r||r.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this.Πi.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,f.Rf)(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostConnected)||void 0===r?void 0:r.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostDisconnected)||void 0===r?void 0:r.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,r,l){this.K(t,l)}"Πj"(t,r,l=y){var p,u;const v=this.constructor.Πp(t,l);if(void 0!==v&&!0===l.reflect){const g=(null!==(u=null===(p=l.converter)||void 0===p?void 0:p.toAttribute)&&void 0!==u?u:m.toAttribute)(r,l.type);this.Πh=t,null==g?this.removeAttribute(v):this.setAttribute(v,g),this.Πh=null}}K(t,r){var l,p,u;const v=this.constructor,g=v.Πm.get(t);if(void 0!==g&&this.Πh!==g){const t=v.getPropertyOptions(g),f=t.converter,y=null!==(u=null!==(p=null===(l=f)||void 0===l?void 0:l.fromAttribute)&&void 0!==p?p:"function"==typeof f?f:null)&&void 0!==u?u:m.fromAttribute;this.Πh=g,this[g]=y(r,t.type),this.Πh=null}}requestUpdate(t,r,l){let p=!0;void 0!==t&&(((l=l||this.constructor.getPropertyOptions(t)).hasChanged||n)(this[t],r)?(this.L.has(t)||this.L.set(t,r),!0===l.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,l))):p=!1),!this.isUpdatePending&&p&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,r)=>this[r]=t),this.Πi=void 0);let r=!1;const l=this.L;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var r;return null===(r=t.hostUpdate)||void 0===r?void 0:r.call(t)}),this.update(l)):this.Π$()}catch(t){throw r=!1,this.Π$(),t}r&&this.E(l)}willUpdate(t){}E(t){var r;null===(r=this.ΠU)||void 0===r||r.forEach(t=>{var r;return null===(r=t.hostUpdated)||void 0===r?void 0:r.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,r)=>this.Πj(r,this[r],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(u=(p=globalThis).reactiveElementPlatformSupport)||void 0===u||u.call(p,{ReactiveElement:a}),(null!==(v=(g=globalThis).reactiveElementVersions)&&void 0!==v?v:g.reactiveElementVersions=[]).push("1.0.0-rc.2")},3005:(t,r,l)=>{l.d(r,{AH:()=>i,Rf:()=>S,sk:()=>g});const p=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol();class s{constructor(t,r){if(r!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return p&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const v=new Map,o=t=>{let r=v.get(t);return void 0===r&&v.set(t,r=new s(t,u)),r},i=(t,...r)=>{const l=1===t.length?t[0]:r.reduce((r,l,p)=>r+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+t[p+1],t[0]);return o(l)},S=(t,r)=>{p?t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(r=>{const l=document.createElement("style");l.textContent=r.cssText,t.appendChild(l)})},g=p?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let r="";for(const l of t.cssRules)r+=l.cssText;return(t=>o("string"==typeof t?t:t+""))(r)})(t):t},3635:(t,r,l)=>{l.d(r,{AH:()=>p.AH,WF:()=>p.WF,qy:()=>p.qy});l(2705),l(1276);var p=l(4762)},4762:(t,r,l)=>{l.d(r,{AH:()=>y.AH,WF:()=>h,qy:()=>w.qy});var p,u,v,g,f,m,y=l(2705),w=l(1276);(null!==(p=(m=globalThis).litElementVersions)&&void 0!==p?p:m.litElementVersions=[]).push("3.0.0-rc.2");class h extends y.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,r;const l=super.createRenderRoot();return null!==(t=(r=this.renderOptions).renderBefore)&&void 0!==t||(r.renderBefore=l.firstChild),l}update(t){const r=this.render();super.update(t),this.Φt=(0,w.XX)(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return w.c0}}h.finalized=!0,h._$litElement$=!0,null===(v=(u=globalThis).litElementHydrateSupport)||void 0===v||v.call(u,{LitElement:h}),null===(f=(g=globalThis).litElementPlatformSupport)||void 0===f||f.call(g,{LitElement:h})},7808:(t,r,l)=>{l.d(r,{M:()=>e});const i=(t,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(l){l.createProperty(r.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(l){l.createProperty(r.key,t)}};function e(t){return(r,l)=>void 0!==l?((t,r,l)=>{r.constructor.createProperty(l,t)})(t,r,l):i(t,r)}},9440:(t,r,l)=>{var p=l(3635),u=l(9581),v=l(971),__decorate=function(t,r,l,p){var u,v=arguments.length,g=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(t,r,l,p);else for(var f=t.length-1;f>=0;f--)(u=t[f])&&(g=(v<3?u(g):v>3?u(r,l,g):u(r,l))||g);return v>3&&g&&Object.defineProperty(r,l,g),g};class korText extends p.WF{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[v.g,p.AH`
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
      `]}render(){return p.qy`<slot></slot>`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,u.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,u.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},9581:(t,r,l)=>{l.d(r,{MZ:()=>p.M});var p=l(7808);l(2190)}},r={};function __webpack_require__(l){var p=r[l];if(void 0!==p)return p.exports;var u=r[l]={exports:{}};return t[l](u,u.exports,__webpack_require__),u.exports}__webpack_require__.d=(t,r)=>{for(var l in r)__webpack_require__.o(r,l)&&!__webpack_require__.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},__webpack_require__.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var l=__webpack_require__(3635),p=__webpack_require__(9581),u=__webpack_require__(971),v=(__webpack_require__(1686),function(t,r,l,p){var u,v=arguments.length,g=v<3?r:null===p?p=Object.getOwnPropertyDescriptor(r,l):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(t,r,l,p);else for(var f=t.length-1;f>=0;f--)(u=t[f])&&(g=(v<3?u(g):v>3?u(r,l,g):u(r,l))||g);return v>3&&g&&Object.defineProperty(r,l,g),g});class korImage extends l.WF{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[u.g,l.AH`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: var(--spacing-s);
        }
        :host([legend-position^='inner-']) kor-text {
          position: absolute;
          padding: var(--spacing-s);
          box-sizing: border-box;
        }
        :host([legend-position='inner-top']) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position='inner-bottom']) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-s);
          position: absolute;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name='top'] {
          top: 0;
        }
        :host([legend][legend-position='inner-top']) slot[name='top'] {
          top: 24px;
        }
        slot[name='bottom'] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name='bottom'],
        :host([legend][legend-position='inner-bottom']) slot[name='bottom'] {
          bottom: 24px;
        }
      `]}render(){return l.qy`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?l.qy` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(t+"-changed"))}}v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"src",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"alt",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"height",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"width",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"fit",void 0),v([(0,p.MZ)({type:String,reflect:!0})],korImage.prototype,"legend",void 0),v([(0,p.MZ)({type:String,reflect:!0,attribute:"legend-position"})],korImage.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",korImage)})();