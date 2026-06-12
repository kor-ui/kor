(()=>{"use strict";var t={512:(t,l,p)=>{p.d(l,{w:()=>r});var u=p(7808);function r(t){return(0,u.M)({...t,state:!0,attribute:!1})}},971:(t,l,p)=>{p.d(l,{g:()=>u});const u=p(3635).AH`
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
`},1276:(t,l,p)=>{var u,v,g,f;p.d(l,{XX:()=>V,c0:()=>W,qy:()=>j});const m=globalThis.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,$=`<${x}>`,_=document,c=(t="")=>_.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,a=t=>{var l;return P(t)||"function"==typeof(null===(l=t)||void 0===l?void 0:l[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,U=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,q=/"/g,B=/^(?:script|style|textarea)$/i,b=t=>(l,...p)=>({_$litType$:t,strings:l,values:p}),j=b(1),W=(b(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),F=new WeakMap,V=(t,l,p)=>{var u,v;const g=null!==(u=null==p?void 0:p.renderBefore)&&void 0!==u?u:l;let f=g._$litPart$;if(void 0===f){const t=null!==(v=null==p?void 0:p.renderBefore)&&void 0!==v?v:null;g._$litPart$=f=new C(l.insertBefore(c(),t),t,void 0,p)}return f.I(t),f},Z=_.createTreeWalker(_,129,null,!1),M=(t,l)=>{const p=t.length-1,u=[];let v,g=2===l?"<svg>":"",f=E;for(let l=0;l<p;l++){const p=t[l];let m,y,x=-1,_=0;for(;_<p.length&&(f.lastIndex=_,y=f.exec(p),null!==y);)_=f.lastIndex,f===E?"!--"===y[1]?f=A:void 0!==y[1]?f=U:void 0!==y[2]?(B.test(y[2])&&(v=RegExp("</"+y[2],"g")),f=O):void 0!==y[3]&&(f=O):f===O?">"===y[0]?(f=null!=v?v:E,x=-1):void 0===y[1]?x=-2:(x=f.lastIndex-y[2].length,m=y[1],f=void 0===y[3]?O:'"'===y[3]?q:T):f===q||f===T?f=O:f===A||f===U?f=E:(f=O,v=void 0);const P=f===O&&t[l+1].startsWith("/>")?" ":"";g+=f===E?p+$:x>=0?(u.push(m),p.slice(0,x)+"$lit$"+p.slice(x)+w+P):p+w+(-2===x?(u.push(void 0),l):P)}const m=g+(t[p]||"<?>")+(2===l?"</svg>":"");return[void 0!==y?y.createHTML(m):m,u]};class N{constructor({strings:t,_$litType$:l},p){let u;this.parts=[];let v=0,g=0;const f=t.length-1,y=this.parts,[$,_]=M(t,l);if(this.el=N.createElement($,p),Z.currentNode=this.el.content,2===l){const t=this.el.content,l=t.firstChild;l.remove(),t.append(...l.childNodes)}for(;null!==(u=Z.nextNode())&&y.length<f;){if(1===u.nodeType){if(u.hasAttributes()){const t=[];for(const l of u.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(w)){const p=_[g++];if(t.push(l),void 0!==p){const t=u.getAttribute(p.toLowerCase()+"$lit$").split(w),l=/([.?@])?(.*)/.exec(p);y.push({type:1,index:v,name:l[2],strings:t,ctor:"."===l[1]?I:"?"===l[1]?L:"@"===l[1]?R:H})}else y.push({type:6,index:v})}for(const l of t)u.removeAttribute(l)}if(B.test(u.tagName)){const t=u.textContent.split(w),l=t.length-1;if(l>0){u.textContent=m?m.emptyScript:"";for(let p=0;p<l;p++)u.append(t[p],c()),Z.nextNode(),y.push({type:2,index:++v});u.append(t[l],c())}}}else if(8===u.nodeType)if(u.data===x)y.push({type:2,index:v});else{let t=-1;for(;-1!==(t=u.data.indexOf(w,t+1));)y.push({type:7,index:v}),t+=w.length-1}v++}}static createElement(t,l){const p=_.createElement("template");return p.innerHTML=t,p}}function S(t,l,p=t,u){var v,g,f,m;if(l===W)return l;let y=void 0!==u?null===(v=p.Σi)||void 0===v?void 0:v[u]:p.Σo;const w=d(l)?void 0:l._$litDirective$;return(null==y?void 0:y.constructor)!==w&&(null===(g=null==y?void 0:y.O)||void 0===g||g.call(y,!1),void 0===w?y=void 0:(y=new w(t),y.T(t,p,u)),void 0!==u?(null!==(f=(m=p).Σi)&&void 0!==f?f:m.Σi=[])[u]=y:p.Σo=y),void 0!==y&&(l=S(t,y.S(t,l.values),y,u)),l}class k{constructor(t,l){this.l=[],this.N=void 0,this.D=t,this.M=l}u(t){var l;const{el:{content:p},parts:u}=this.D,v=(null!==(l=null==t?void 0:t.creationScope)&&void 0!==l?l:_).importNode(p,!0);Z.currentNode=v;let g=Z.nextNode(),f=0,m=0,y=u[0];for(;void 0!==y;){if(f===y.index){let l;2===y.type?l=new C(g,g.nextSibling,this,t):1===y.type?l=new y.ctor(g,y.name,y.strings,this,t):6===y.type&&(l=new z(g,this,t)),this.l.push(l),y=u[++m]}f!==(null==y?void 0:y.index)&&(g=Z.nextNode(),f++)}return v}v(t){let l=0;for(const p of this.l)void 0!==p&&(void 0!==p.strings?(p.I(t,p,l),l+=p.strings.length-2):p.I(t[l])),l++}}class C{constructor(t,l,p,u){this.type=2,this.N=void 0,this.A=t,this.B=l,this.M=p,this.options=u}setConnected(t){var l;null===(l=this.P)||void 0===l||l.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,l=this){t=S(this,t,l),d(t)?t===D||null==t||""===t?(this.H!==D&&this.R(),this.H=D):t!==this.H&&t!==W&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,l=this.B){return this.A.parentNode.insertBefore(t,l)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const l=this.A.nextSibling;null!==l&&3===l.nodeType&&(null===this.B?null===l.nextSibling:l===this.B.previousSibling)?l.data=t:this.$(_.createTextNode(t)),this.H=t}_(t){var l;const{values:p,_$litType$:u}=t,v="number"==typeof u?this.C(t):(void 0===u.el&&(u.el=N.createElement(u.h,this.options)),u);if((null===(l=this.H)||void 0===l?void 0:l.D)===v)this.H.v(p);else{const t=new k(v,this),l=t.u(this.options);t.v(p),this.$(l),this.H=t}}C(t){let l=F.get(t.strings);return void 0===l&&F.set(t.strings,l=new N(t)),l}g(t){P(this.H)||(this.H=[],this.R());const l=this.H;let p,u=0;for(const v of t)u===l.length?l.push(p=new C(this.k(c()),this.k(c()),this,this.options)):p=l[u],p.I(v),u++;u<l.length&&(this.R(p&&p.B.nextSibling,u),l.length=u)}R(t=this.A.nextSibling,l){var p;for(null===(p=this.P)||void 0===p||p.call(this,!1,!0,l);t&&t!==this.B;){const l=t.nextSibling;t.remove(),t=l}}}class H{constructor(t,l,p,u,v){this.type=1,this.H=D,this.N=void 0,this.V=void 0,this.element=t,this.name=l,this.M=u,this.options=v,p.length>2||""!==p[0]||""!==p[1]?(this.H=Array(p.length-1).fill(D),this.strings=p):this.H=D}get tagName(){return this.element.tagName}I(t,l=this,p,u){const v=this.strings;let g=!1;if(void 0===v)t=S(this,t,l,0),g=!d(t)||t!==this.H&&t!==W,g&&(this.H=t);else{const u=t;let f,m;for(t=v[0],f=0;f<v.length-1;f++)m=S(this,u[p+f],l,f),m===W&&(m=this.H[f]),g||(g=!d(m)||m!==this.H[f]),m===D?t=D:t!==D&&(t+=(null!=m?m:"")+v[f+1]),this.H[f]=m}g&&!u&&this.W(t)}W(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===D?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,l=this){var p;if((t=null!==(p=S(this,t,l,0))&&void 0!==p?p:D)===W)return;const u=this.H,v=t===D&&u!==D||t.capture!==u.capture||t.once!==u.once||t.passive!==u.passive,g=t!==D&&(u===D||v);v&&this.element.removeEventListener(this.name,this,u),g&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var l,p;"function"==typeof this.H?this.H.call(null!==(p=null===(l=this.options)||void 0===l?void 0:l.host)&&void 0!==p?p:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,l,p){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=l,this.options=p}I(t){S(this,t)}}null===(v=(u=globalThis).litHtmlPlatformSupport)||void 0===v||v.call(u,N,C),(null!==(g=(f=globalThis).litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.0.0-rc.3")},2190:(t,l,p)=>{const u=Element.prototype;u.msMatchesSelector||u.webkitMatchesSelector},2705:(t,l,p)=>{p.d(l,{AH:()=>m.AH,mN:()=>a});var u,v,g,f,m=p(3005);const y={toAttribute(t,l){switch(l){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,l){let p=t;switch(l){case Boolean:p=null!==t;break;case Number:p=null===t?null:Number(t);break;case Object:case Array:try{p=JSON.parse(t)}catch(t){p=null}}return p}},n=(t,l)=>l!==t&&(l==l||t==t),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var l;null!==(l=this.v)&&void 0!==l||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((l,p)=>{const u=this.Πp(p,l);void 0!==u&&(this.Πm.set(u,p),t.push(u))}),t}static createProperty(t,l=w){if(l.state&&(l.attribute=!1),this.finalize(),this.elementProperties.set(t,l),!l.noAccessor&&!this.prototype.hasOwnProperty(t)){const p="symbol"==typeof t?Symbol():"__"+t,u=this.getPropertyDescriptor(t,p,l);void 0!==u&&Object.defineProperty(this.prototype,t,u)}}static getPropertyDescriptor(t,l,p){return{get(){return this[l]},set(u){const v=this[t];this[l]=u,this.requestUpdate(t,v,p)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,l=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const p of l)this.createProperty(p,t[p])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const l=[];if(Array.isArray(t)){const p=new Set(t.flat(1/0).reverse());for(const t of p)l.unshift((0,m.sk)(t))}else void 0!==t&&l.push((0,m.sk)(t));return l}static"Πp"(t,l){const p=l.attribute;return!1===p?void 0:"string"==typeof p?p:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var l,p;(null!==(l=this.ΠU)&&void 0!==l?l:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(p=t.hostConnected)||void 0===p||p.call(t))}removeController(t){var l;null===(l=this.ΠU)||void 0===l||l.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,l)=>{this.hasOwnProperty(l)&&(this.Πi.set(l,this[l]),delete this[l])})}createRenderRoot(){var t;const l=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,m.Rf)(l,this.constructor.elementStyles),l}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var l;return null===(l=t.hostConnected)||void 0===l?void 0:l.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var l;return null===(l=t.hostDisconnected)||void 0===l?void 0:l.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,l,p){this.K(t,p)}"Πj"(t,l,p=w){var u,v;const g=this.constructor.Πp(t,p);if(void 0!==g&&!0===p.reflect){const f=(null!==(v=null===(u=p.converter)||void 0===u?void 0:u.toAttribute)&&void 0!==v?v:y.toAttribute)(l,p.type);this.Πh=t,null==f?this.removeAttribute(g):this.setAttribute(g,f),this.Πh=null}}K(t,l){var p,u,v;const g=this.constructor,f=g.Πm.get(t);if(void 0!==f&&this.Πh!==f){const t=g.getPropertyOptions(f),m=t.converter,w=null!==(v=null!==(u=null===(p=m)||void 0===p?void 0:p.fromAttribute)&&void 0!==u?u:"function"==typeof m?m:null)&&void 0!==v?v:y.fromAttribute;this.Πh=f,this[f]=w(l,t.type),this.Πh=null}}requestUpdate(t,l,p){let u=!0;void 0!==t&&(((p=p||this.constructor.getPropertyOptions(t)).hasChanged||n)(this[t],l)?(this.L.has(t)||this.L.set(t,l),!0===p.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,p))):u=!1),!this.isUpdatePending&&u&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,l)=>this[l]=t),this.Πi=void 0);let l=!1;const p=this.L;try{l=this.shouldUpdate(p),l?(this.willUpdate(p),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var l;return null===(l=t.hostUpdate)||void 0===l?void 0:l.call(t)}),this.update(p)):this.Π$()}catch(t){throw l=!1,this.Π$(),t}l&&this.E(p)}willUpdate(t){}E(t){var l;null===(l=this.ΠU)||void 0===l||l.forEach(t=>{var l;return null===(l=t.hostUpdated)||void 0===l?void 0:l.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,l)=>this.Πj(l,this[l],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(v=(u=globalThis).reactiveElementPlatformSupport)||void 0===v||v.call(u,{ReactiveElement:a}),(null!==(g=(f=globalThis).reactiveElementVersions)&&void 0!==g?g:f.reactiveElementVersions=[]).push("1.0.0-rc.2")},3005:(t,l,p)=>{p.d(l,{AH:()=>i,Rf:()=>S,sk:()=>f});const u=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol();class s{constructor(t,l){if(l!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return u&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const g=new Map,o=t=>{let l=g.get(t);return void 0===l&&g.set(t,l=new s(t,v)),l},i=(t,...l)=>{const p=1===t.length?t[0]:l.reduce((l,p,u)=>l+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(p)+t[u+1],t[0]);return o(p)},S=(t,l)=>{u?t.adoptedStyleSheets=l.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):l.forEach(l=>{const p=document.createElement("style");p.textContent=l.cssText,t.appendChild(p)})},f=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let l="";for(const p of t.cssRules)l+=p.cssText;return(t=>o("string"==typeof t?t:t+""))(l)})(t):t},3635:(t,l,p)=>{p.d(l,{AH:()=>u.AH,WF:()=>u.WF,qy:()=>u.qy});p(2705),p(1276);var u=p(4762)},4236:(t,l,p)=>{p(8540)},4762:(t,l,p)=>{p.d(l,{AH:()=>w.AH,WF:()=>h,qy:()=>x.qy});var u,v,g,f,m,y,w=p(2705),x=p(1276);(null!==(u=(y=globalThis).litElementVersions)&&void 0!==u?u:y.litElementVersions=[]).push("3.0.0-rc.2");class h extends w.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,l;const p=super.createRenderRoot();return null!==(t=(l=this.renderOptions).renderBefore)&&void 0!==t||(l.renderBefore=p.firstChild),p}update(t){const l=this.render();super.update(t),this.Φt=(0,x.XX)(l,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x.c0}}h.finalized=!0,h._$litElement$=!0,null===(g=(v=globalThis).litElementHydrateSupport)||void 0===g||g.call(v,{LitElement:h}),null===(m=(f=globalThis).litElementPlatformSupport)||void 0===m||m.call(f,{LitElement:h})},7808:(t,l,p)=>{p.d(l,{M:()=>e});const i=(t,l)=>"method"===l.kind&&l.descriptor&&!("value"in l.descriptor)?{...l,finisher(p){p.createProperty(l.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:l.key,initializer(){"function"==typeof l.initializer&&(this[l.key]=l.initializer.call(this))},finisher(p){p.createProperty(l.key,t)}};function e(t){return(l,p)=>void 0!==p?((t,l,p)=>{l.constructor.createProperty(p,t)})(t,l,p):i(t,l)}},7914:(t,l,p)=>{var u=p(3635),v=p(9581),g=p(971),f=(p(4236),function(t,l,p,u){var v,g=arguments.length,f=g<3?l:null===u?u=Object.getOwnPropertyDescriptor(l,p):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,l,p,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(f=(g<3?v(f):g>3?v(l,p,f):v(l,p))||f);return g>3&&f&&Object.defineProperty(l,p,f),f});class korCard extends u.WF{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[g.g,u.AH`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          /* Don't set the right padding to have a vertical scrollbar for overflows */
          padding: 0 0 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return u.qy`
      ${this.image?u.qy` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?u.qy`
                <div class="label">
                  ${this.icon?u.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":u.qy` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(t,l,p){super.attributeChangedCallback(t,l,p),this.dispatchEvent(new Event(t+"-changed"))}}f([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),f([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),f([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),f([(0,v.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),f([(0,v.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),f([(0,v.wk)()],korCard.prototype,"emptyHeader",void 0),f([(0,v.wk)()],korCard.prototype,"emptyFunctions",void 0),f([(0,v.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},8540:(t,l,p)=>{var u=p(3635),v=p(9581),g=p(971),__decorate=function(t,l,p,u){var v,g=arguments.length,f=g<3?l:null===u?u=Object.getOwnPropertyDescriptor(l,p):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,l,p,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(f=(g<3?v(f):g>3?v(l,p,f):v(l,p))||f);return g>3&&f&&Object.defineProperty(l,p,f),f};class korIcon extends u.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[g.g,u.AH`
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
      `]}render(){var t;return u.qy` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?u.qy` ${this.icon} `:""}`}attributeChangedCallback(t,l,p){super.attributeChangedCallback(t,l,p),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&p.indexOf("url")>-1&&this.setBackgroundImage(p)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,v.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,v.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},9581:(t,l,p)=>{p.d(l,{MZ:()=>u.M,wk:()=>v.w});var u=p(7808),v=p(512);p(2190)}},l={};function __webpack_require__(p){var u=l[p];if(void 0!==u)return u.exports;var v=l[p]={exports:{}};return t[p](v,v.exports,__webpack_require__),v.exports}__webpack_require__.d=(t,l)=>{for(var p in l)__webpack_require__.o(l,p)&&!__webpack_require__.o(t,p)&&Object.defineProperty(t,p,{enumerable:!0,get:l[p]})},__webpack_require__.o=(t,l)=>Object.prototype.hasOwnProperty.call(t,l);__webpack_require__(7914)})();