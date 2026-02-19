(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,r){if(r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const r=new Map,o=t=>{let n=r.get(t);return void 0===n&&r.set(t,n=new s(t,e)),n},i=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return o(r)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>o("string"==typeof t?t:t+""))(e)})(t):t;var l,h,u,p;const g={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_reactive_element_n=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_reactive_element_n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this.Πp(r,e);void 0!==n&&(this.Πm.set(n,r),t.push(n))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static"Πp"(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,r;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(t=>{const r=document.createElement("style");r.textContent=t.cssText,e.appendChild(r)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,r){this.K(t,r)}"Πj"(t,e,r=m){var n,l;const h=this.constructor.Πp(t,r);if(void 0!==h&&!0===r.reflect){const u=(null!==(l=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==l?l:g.toAttribute)(e,r.type);this.Πh=t,null==u?this.removeAttribute(h):this.setAttribute(h,u),this.Πh=null}}K(t,e){var r,n,l;const h=this.constructor,u=h.Πm.get(t);if(void 0!==u&&this.Πh!==u){const t=h.getPropertyOptions(u),p=t.converter,m=null!==(l=null!==(n=null===(r=p)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof p?p:null)&&void 0!==l?l:g.fromAttribute;this.Πh=u,this[u]=m(e,t.type),this.Πh=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_reactive_element_n)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===r.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const r=this.L;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(r)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(r)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var _,v,w,f;a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(h=(l=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(l,{ReactiveElement:a}),(null!==(u=(p=globalThis).reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const y=globalThis.trustedTypes,S=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,x="?"+U,A=`<${x}>`,P=document,c=(t="")=>P.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_a=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,T=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,F=/"/g,B=/^(?:script|style|textarea)$/i,b=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),j=b(1),V=(b(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),q=new WeakMap,G=P.createTreeWalker(P,129,null,!1),M=(t,e)=>{const r=t.length-1,n=[];let l,h=2===e?"<svg>":"",u=$;for(let e=0;e<r;e++){const r=t[e];let p,g,m=-1,_=0;for(;_<r.length&&(u.lastIndex=_,g=u.exec(r),null!==g);)_=u.lastIndex,u===$?"!--"===g[1]?u=K:void 0!==g[1]?u=T:void 0!==g[2]?(B.test(g[2])&&(l=RegExp("</"+g[2],"g")),u=O):void 0!==g[3]&&(u=O):u===O?">"===g[0]?(u=null!=l?l:$,m=-1):void 0===g[1]?m=-2:(m=u.lastIndex-g[2].length,p=g[1],u=void 0===g[3]?O:'"'===g[3]?F:D):u===F||u===D?u=O:u===K||u===T?u=$:(u=O,l=void 0);const v=u===O&&t[e+1].startsWith("/>")?" ":"";h+=u===$?r+A:m>=0?(n.push(p),r.slice(0,m)+"$lit$"+r.slice(m)+U+v):r+U+(-2===m?(n.push(void 0),e):v)}const p=h+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(p):p,n]};class N{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let l=0,h=0;const u=t.length-1,p=this.parts,[g,m]=M(t,e);if(this.el=N.createElement(g,r),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=G.nextNode())&&p.length<u;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(U)){const r=m[h++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(U),e=/([.?@])?(.*)/.exec(r);p.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?R:H})}else p.push({type:6,index:l})}for(const e of t)n.removeAttribute(e)}if(B.test(n.tagName)){const t=n.textContent.split(U),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],c()),G.nextNode(),p.push({type:2,index:++l});n.append(t[e],c())}}}else if(8===n.nodeType)if(n.data===x)p.push({type:2,index:l});else{let t=-1;for(;-1!==(t=n.data.indexOf(U,t+1));)p.push({type:7,index:l}),t+=U.length-1}l++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(t,e,r=t,n){var l,h,u,p;if(e===V)return e;let g=void 0!==n?null===(l=r.Σi)||void 0===l?void 0:l[n]:r.Σo;const m=d(e)?void 0:e._$litDirective$;return(null==g?void 0:g.constructor)!==m&&(null===(h=null==g?void 0:g.O)||void 0===h||h.call(g,!1),void 0===m?g=void 0:(g=new m(t),g.T(t,r,n)),void 0!==n?(null!==(u=(p=r).Σi)&&void 0!==u?u:p.Σi=[])[n]=g:r.Σo=g),void 0!==g&&(e=F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(t,g.S(t,e.values),g,n)),e}class k{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:r},parts:n}=this.D,l=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(r,!0);G.currentNode=l;let h=G.nextNode(),u=0,p=0,g=n[0];for(;void 0!==g;){if(u===g.index){let e;2===g.type?e=new C(h,h.nextSibling,this,t):1===g.type?e=new g.ctor(h,g.name,g.strings,this,t):6===g.type&&(e=new z(h,this,t)),this.l.push(e),g=n[++p]}u!==(null==g?void 0:g.index)&&(h=G.nextNode(),u++)}return l}v(t){let e=0;for(const r of this.l)void 0!==r&&(void 0!==r.strings?(r.I(t,r,e),e+=r.strings.length-2):r.I(t[e])),e++}}class C{constructor(t,e,r,n){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=r,this.options=n}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(this,t,e),d(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==V&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_a(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var e;const{values:r,_$litType$:n}=t,l="number"==typeof n?this.C(t):(void 0===n.el&&(n.el=N.createElement(n.h,this.options)),n);if((null===(e=this.H)||void 0===e?void 0:e.D)===l)this.H.v(r);else{const t=new k(l,this),e=t.u(this.options);t.v(r),this.$(e),this.H=t}}C(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new N(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let r,n=0;for(const l of t)n===e.length?e.push(r=new C(this.k(c()),this.k(c()),this,this.options)):r=e[n],r.I(l),n++;n<e.length&&(this.R(r&&r.B.nextSibling,n),e.length=n)}R(t=this.A.nextSibling,e){var r;for(null===(r=this.P)||void 0===r||r.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,r,n,l){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=n,this.options=l,r.length>2||""!==r[0]||""!==r[1]?(this.H=Array(r.length-1).fill(W),this.strings=r):this.H=W}get tagName(){return this.element.tagName}I(t,e=this,r,n){const l=this.strings;let h=!1;if(void 0===l)t=F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(this,t,e,0),h=!d(t)||t!==this.H&&t!==V,h&&(this.H=t);else{const n=t;let u,p;for(t=l[0],u=0;u<l.length-1;u++)p=F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(this,n[r+u],e,u),p===V&&(p=this.H[u]),h||(h=!d(p)||p!==this.H[u]),p===W?t=W:t!==W&&(t+=(null!=p?p:"")+l[u+1]),this.H[u]=p}h&&!n&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var r;if((t=null!==(r=F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(this,t,e,0))&&void 0!==r?r:W)===V)return;const n=this.H,l=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,h=t!==W&&(n===W||l);l&&this.element.removeEventListener(this.name,this,n),h&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,r;"function"==typeof this.H?this.H.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,e,r){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=r}I(t){F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_html_lit_html_S(this,t)}}var J,Z,Q,X,Y,tt;null===(v=(_=globalThis).litHtmlPlatformSupport)||void 0===v||v.call(_,N,C),(null!==(w=(f=globalThis).litHtmlVersions)&&void 0!==w?w:f.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(J=(tt=globalThis).litElementVersions)&&void 0!==J?J:tt.litElementVersions=[]).push("3.0.0-rc.2");class F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h extends a{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();super.update(t),this.Φt=((t,e,r)=>{var n,l;const h=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let u=h._$litPart$;if(void 0===u){const t=null!==(l=null==r?void 0:r.renderBefore)&&void 0!==l?l:null;h._$litPart$=u=new C(e.insertBefore(c(),t),t,void 0,r)}return u.I(t),u})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return V}}F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h.finalized=!0,F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h._$litElement$=!0,null===(Q=(Z=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(Z,{LitElement:F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h});const F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_e(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_i(t,e)}const et=Element.prototype;et.msMatchesSelector||et.webkitMatchesSelector;const st=i`
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
`;var __decorate=function(t,e,r,n){var l,h=arguments.length,u=h<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var p=t.length-1;p>=0;p--)(l=t[p])&&(u=(h<3?l(u):h>3?l(e,r,u):l(e,r))||u);return h>3&&u&&Object.defineProperty(e,r,u),u};class korGrid extends F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_element_lit_element_h{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[st,i`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        :host(:not([fit-content])) {
          height: 100%;
          width: 100%;
        }
        ::slotted(*) {
          width: auto;
          min-width: 0;
          min-height: 0;
        }
        /* spacing */
        :host([spacing='s']) {
          grid-gap: var(--spacing-s);
        }
        :host([spacing='m']) {
          grid-gap: var(--spacing-m);
        }
        :host([spacing='l']) {
          grid-gap: var(--spacing-l);
        }
        /* columns and rows */
        ::slotted(*[grid-cols='0']) {
          display: none;
        }
        ::slotted(*:not([grid-cols])),
        ::slotted(*[grid-cols='1']) {
          grid-column: span 1;
        }
        ::slotted(*[grid-cols='2']) {
          grid-column: span 2;
        }
        ::slotted(*[grid-cols='3']) {
          grid-column: span 3;
        }
        ::slotted(*[grid-cols='4']) {
          grid-column: span 4;
        }
        ::slotted(*[grid-cols='5']) {
          grid-column: span 5;
        }
        ::slotted(*[grid-cols='6']) {
          grid-column: span 6;
        }
        ::slotted(*[grid-cols='7']) {
          grid-column: span 7;
        }
        ::slotted(*[grid-cols='8']) {
          grid-column: span 8;
        }
        ::slotted(*[grid-cols='9']) {
          grid-column: span 9;
        }
        ::slotted(*[grid-cols='10']) {
          grid-column: span 10;
        }
        ::slotted(*[grid-cols='11']) {
          grid-column: span 11;
        }
        ::slotted(*[grid-cols='12']) {
          grid-column: span 12;
        }
        ::slotted(*:not([grid-rows])),
        ::slotted(*[grid-rows='1']) {
          grid-row: span 1;
        }
        ::slotted(*[grid-rows='2']) {
          grid-row: span 2;
        }
        ::slotted(*[grid-rows='3']) {
          grid-row: span 3;
        }
        ::slotted(*[grid-rows='4']) {
          grid-row: span 4;
        }
        ::slotted(*[grid-rows='5']) {
          grid-row: span 5;
        }
        ::slotted(*[grid-rows='6']) {
          grid-row: span 6;
        }
        ::slotted(*[grid-rows='7']) {
          grid-row: span 7;
        }
        ::slotted(*[grid-rows='8']) {
          grid-row: span 8;
        }
        ::slotted(*[grid-rows='9']) {
          grid-row: span 9;
        }
        ::slotted(*[grid-rows='10']) {
          grid-row: span 10;
        }
        ::slotted(*[grid-rows='11']) {
          grid-row: span 11;
        }
        ::slotted(*[grid-rows='12']) {
          grid-row: span 12;
        }
        /* tablet */
        @media only screen and (max-width: 1025px) {
          ::slotted(*[grid-cols-m='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-m='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-m='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-m='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-m='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-m='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-m='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-m='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-m='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-m='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-m='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-m='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-m='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-m='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-m='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-m='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-m='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-m='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-m='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-m='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-m='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-m='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-m='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-m='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-m='12']) {
            grid-row: span 12;
          }
        }
        /* tablet */
        @media only screen and (max-width: 767px) {
          ::slotted(*[grid-cols-s='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-s='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-s='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-s='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-s='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-s='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-s='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-s='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-s='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-s='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-s='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-s='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-s='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-s='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-s='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-s='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-s='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-s='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-s='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-s='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-s='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-s='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-s='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-s='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-s='12']) {
            grid-row: span 12;
          }
        }
      `]}render(){return j`<slot></slot>`}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.dispatchEvent(new Event(t+"-changed")),"columns"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}__decorate([F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_e({type:Number,reflect:!0})],korGrid.prototype,"columns",void 0),__decorate([F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_e({type:Number,reflect:!0})],korGrid.prototype,"rows",void 0),__decorate([F_Documents_HACKS_KorUI_kor_ui_node_modules_lit_reactive_element_decorators_property_e({type:String,reflect:!0})],korGrid.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",korGrid)})();