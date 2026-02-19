(()=>{"use strict";var t={512:(t,p,g)=>{g.d(p,{w:()=>r});var u=g(7808);function r(t){return(0,u.M)({...t,state:!0,attribute:!1})}},578:(t,p,g)=>{g(3732)},696:(t,p,g)=>{g.d(p,{He:()=>o});const o=({finisher:t,descriptor:p})=>(g,u)=>{var v;if(void 0===u){const u=null!==(v=g.originalKey)&&void 0!==v?v:g.key,f=null!=p?{kind:"method",placement:"prototype",key:u,descriptor:p(g.key)}:{...g,key:u};return null!=t&&(f.finisher=function(p){t(p,u)}),f}{const v=g.constructor;void 0!==p&&Object.defineProperty(g,u,p(u)),null==t||t(v,u)}}},971:(t,p,g)=>{g.d(p,{g:()=>u});const u=g(3635).AH`
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
`},1276:(t,p,g)=>{var u,v,f,y;g.d(p,{XX:()=>V,c0:()=>B,qy:()=>F,s6:()=>W});const m=globalThis.trustedTypes,w=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,E=`<${$}>`,P=document,c=(t="")=>P.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,a=t=>{var p;return _(t)||"function"==typeof(null===(p=t)||void 0===p?void 0:p[Symbol.iterator])},Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,O=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,A=/"/g,T=/^(?:script|style|textarea)$/i,b=t=>(p,...g)=>({_$litType$:t,strings:p,values:g}),F=b(1),B=(b(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),U=new WeakMap,V=(t,p,g)=>{var u,v;const f=null!==(u=null==g?void 0:g.renderBefore)&&void 0!==u?u:p;let y=f._$litPart$;if(void 0===y){const t=null!==(v=null==g?void 0:g.renderBefore)&&void 0!==v?v:null;f._$litPart$=y=new C(p.insertBefore(c(),t),t,void 0,g)}return y.I(t),y},G=P.createTreeWalker(P,129,null,!1),M=(t,p)=>{const g=t.length-1,u=[];let v,f=2===p?"<svg>":"",y=Z;for(let p=0;p<g;p++){const g=t[p];let m,w,$=-1,P=0;for(;P<g.length&&(y.lastIndex=P,w=y.exec(g),null!==w);)P=y.lastIndex,y===Z?"!--"===w[1]?y=q:void 0!==w[1]?y=O:void 0!==w[2]?(T.test(w[2])&&(v=RegExp("</"+w[2],"g")),y=j):void 0!==w[3]&&(y=j):y===j?">"===w[0]?(y=null!=v?v:Z,$=-1):void 0===w[1]?$=-2:($=y.lastIndex-w[2].length,m=w[1],y=void 0===w[3]?j:'"'===w[3]?A:D):y===A||y===D?y=j:y===q||y===O?y=Z:(y=j,v=void 0);const _=y===j&&t[p+1].startsWith("/>")?" ":"";f+=y===Z?g+E:$>=0?(u.push(m),g.slice(0,$)+"$lit$"+g.slice($)+x+_):g+x+(-2===$?(u.push(void 0),p):_)}const m=f+(t[g]||"<?>")+(2===p?"</svg>":"");return[void 0!==w?w.createHTML(m):m,u]};class N{constructor({strings:t,_$litType$:p},g){let u;this.parts=[];let v=0,f=0;const y=t.length-1,w=this.parts,[E,P]=M(t,p);if(this.el=N.createElement(E,g),G.currentNode=this.el.content,2===p){const t=this.el.content,p=t.firstChild;p.remove(),t.append(...p.childNodes)}for(;null!==(u=G.nextNode())&&w.length<y;){if(1===u.nodeType){if(u.hasAttributes()){const t=[];for(const p of u.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(x)){const g=P[f++];if(t.push(p),void 0!==g){const t=u.getAttribute(g.toLowerCase()+"$lit$").split(x),p=/([.?@])?(.*)/.exec(g);w.push({type:1,index:v,name:p[2],strings:t,ctor:"."===p[1]?I:"?"===p[1]?L:"@"===p[1]?R:H})}else w.push({type:6,index:v})}for(const p of t)u.removeAttribute(p)}if(T.test(u.tagName)){const t=u.textContent.split(x),p=t.length-1;if(p>0){u.textContent=m?m.emptyScript:"";for(let g=0;g<p;g++)u.append(t[g],c()),G.nextNode(),w.push({type:2,index:++v});u.append(t[p],c())}}}else if(8===u.nodeType)if(u.data===$)w.push({type:2,index:v});else{let t=-1;for(;-1!==(t=u.data.indexOf(x,t+1));)w.push({type:7,index:v}),t+=x.length-1}v++}}static createElement(t,p){const g=P.createElement("template");return g.innerHTML=t,g}}function S(t,p,g=t,u){var v,f,y,m;if(p===B)return p;let w=void 0!==u?null===(v=g.Σi)||void 0===v?void 0:v[u]:g.Σo;const x=d(p)?void 0:p._$litDirective$;return(null==w?void 0:w.constructor)!==x&&(null===(f=null==w?void 0:w.O)||void 0===f||f.call(w,!1),void 0===x?w=void 0:(w=new x(t),w.T(t,g,u)),void 0!==u?(null!==(y=(m=g).Σi)&&void 0!==y?y:m.Σi=[])[u]=w:g.Σo=w),void 0!==w&&(p=S(t,w.S(t,p.values),w,u)),p}class k{constructor(t,p){this.l=[],this.N=void 0,this.D=t,this.M=p}u(t){var p;const{el:{content:g},parts:u}=this.D,v=(null!==(p=null==t?void 0:t.creationScope)&&void 0!==p?p:P).importNode(g,!0);G.currentNode=v;let f=G.nextNode(),y=0,m=0,w=u[0];for(;void 0!==w;){if(y===w.index){let p;2===w.type?p=new C(f,f.nextSibling,this,t):1===w.type?p=new w.ctor(f,w.name,w.strings,this,t):6===w.type&&(p=new z(f,this,t)),this.l.push(p),w=u[++m]}y!==(null==w?void 0:w.index)&&(f=G.nextNode(),y++)}return v}v(t){let p=0;for(const g of this.l)void 0!==g&&(void 0!==g.strings?(g.I(t,g,p),p+=g.strings.length-2):g.I(t[p])),p++}}class C{constructor(t,p,g,u){this.type=2,this.N=void 0,this.A=t,this.B=p,this.M=g,this.options=u}setConnected(t){var p;null===(p=this.P)||void 0===p||p.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,p=this){t=S(this,t,p),d(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,p=this.B){return this.A.parentNode.insertBefore(t,p)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const p=this.A.nextSibling;null!==p&&3===p.nodeType&&(null===this.B?null===p.nextSibling:p===this.B.previousSibling)?p.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var p;const{values:g,_$litType$:u}=t,v="number"==typeof u?this.C(t):(void 0===u.el&&(u.el=N.createElement(u.h,this.options)),u);if((null===(p=this.H)||void 0===p?void 0:p.D)===v)this.H.v(g);else{const t=new k(v,this),p=t.u(this.options);t.v(g),this.$(p),this.H=t}}C(t){let p=U.get(t.strings);return void 0===p&&U.set(t.strings,p=new N(t)),p}g(t){_(this.H)||(this.H=[],this.R());const p=this.H;let g,u=0;for(const v of t)u===p.length?p.push(g=new C(this.k(c()),this.k(c()),this,this.options)):g=p[u],g.I(v),u++;u<p.length&&(this.R(g&&g.B.nextSibling,u),p.length=u)}R(t=this.A.nextSibling,p){var g;for(null===(g=this.P)||void 0===g||g.call(this,!1,!0,p);t&&t!==this.B;){const p=t.nextSibling;t.remove(),t=p}}}class H{constructor(t,p,g,u,v){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=p,this.M=u,this.options=v,g.length>2||""!==g[0]||""!==g[1]?(this.H=Array(g.length-1).fill(W),this.strings=g):this.H=W}get tagName(){return this.element.tagName}I(t,p=this,g,u){const v=this.strings;let f=!1;if(void 0===v)t=S(this,t,p,0),f=!d(t)||t!==this.H&&t!==B,f&&(this.H=t);else{const u=t;let y,m;for(t=v[0],y=0;y<v.length-1;y++)m=S(this,u[g+y],p,y),m===B&&(m=this.H[y]),f||(f=!d(m)||m!==this.H[y]),m===W?t=W:t!==W&&(t+=(null!=m?m:"")+v[y+1]),this.H[y]=m}f&&!u&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,p=this){var g;if((t=null!==(g=S(this,t,p,0))&&void 0!==g?g:W)===B)return;const u=this.H,v=t===W&&u!==W||t.capture!==u.capture||t.once!==u.once||t.passive!==u.passive,f=t!==W&&(u===W||v);v&&this.element.removeEventListener(this.name,this,u),f&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var p,g;"function"==typeof this.H?this.H.call(null!==(g=null===(p=this.options)||void 0===p?void 0:p.host)&&void 0!==g?g:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,p,g){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=p,this.options=g}I(t){S(this,t)}}null===(v=(u=globalThis).litHtmlPlatformSupport)||void 0===v||v.call(u,N,C),(null!==(f=(y=globalThis).litHtmlVersions)&&void 0!==f?f:y.litHtmlVersions=[]).push("2.0.0-rc.3")},1686:(t,p,g)=>{g(9440)},2190:(t,p,g)=>{const u=Element.prototype;u.msMatchesSelector||u.webkitMatchesSelector},2705:(t,p,g)=>{g.d(p,{AH:()=>m.AH,mN:()=>a});var u,v,f,y,m=g(3005);const w={toAttribute(t,p){switch(p){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,p){let g=t;switch(p){case Boolean:g=null!==t;break;case Number:g=null===t?null:Number(t);break;case Object:case Array:try{g=JSON.parse(t)}catch(t){g=null}}return g}},n=(t,p)=>p!==t&&(p==p||t==t),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var p;null!==(p=this.v)&&void 0!==p||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((p,g)=>{const u=this.Πp(g,p);void 0!==u&&(this.Πm.set(u,g),t.push(u))}),t}static createProperty(t,p=x){if(p.state&&(p.attribute=!1),this.finalize(),this.elementProperties.set(t,p),!p.noAccessor&&!this.prototype.hasOwnProperty(t)){const g="symbol"==typeof t?Symbol():"__"+t,u=this.getPropertyDescriptor(t,g,p);void 0!==u&&Object.defineProperty(this.prototype,t,u)}}static getPropertyDescriptor(t,p,g){return{get(){return this[p]},set(u){const v=this[t];this[p]=u,this.requestUpdate(t,v,g)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||x}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,p=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const g of p)this.createProperty(g,t[g])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const p=[];if(Array.isArray(t)){const g=new Set(t.flat(1/0).reverse());for(const t of g)p.unshift((0,m.sk)(t))}else void 0!==t&&p.push((0,m.sk)(t));return p}static"Πp"(t,p){const g=p.attribute;return!1===g?void 0:"string"==typeof g?g:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var p,g;(null!==(p=this.ΠU)&&void 0!==p?p:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(g=t.hostConnected)||void 0===g||g.call(t))}removeController(t){var p;null===(p=this.ΠU)||void 0===p||p.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,p)=>{this.hasOwnProperty(p)&&(this.Πi.set(p,this[p]),delete this[p])})}createRenderRoot(){var t;const p=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,m.Rf)(p,this.constructor.elementStyles),p}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var p;return null===(p=t.hostConnected)||void 0===p?void 0:p.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var p;return null===(p=t.hostDisconnected)||void 0===p?void 0:p.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,p,g){this.K(t,g)}"Πj"(t,p,g=x){var u,v;const f=this.constructor.Πp(t,g);if(void 0!==f&&!0===g.reflect){const y=(null!==(v=null===(u=g.converter)||void 0===u?void 0:u.toAttribute)&&void 0!==v?v:w.toAttribute)(p,g.type);this.Πh=t,null==y?this.removeAttribute(f):this.setAttribute(f,y),this.Πh=null}}K(t,p){var g,u,v;const f=this.constructor,y=f.Πm.get(t);if(void 0!==y&&this.Πh!==y){const t=f.getPropertyOptions(y),m=t.converter,x=null!==(v=null!==(u=null===(g=m)||void 0===g?void 0:g.fromAttribute)&&void 0!==u?u:"function"==typeof m?m:null)&&void 0!==v?v:w.fromAttribute;this.Πh=y,this[y]=x(p,t.type),this.Πh=null}}requestUpdate(t,p,g){let u=!0;void 0!==t&&(((g=g||this.constructor.getPropertyOptions(t)).hasChanged||n)(this[t],p)?(this.L.has(t)||this.L.set(t,p),!0===g.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,g))):u=!1),!this.isUpdatePending&&u&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,p)=>this[p]=t),this.Πi=void 0);let p=!1;const g=this.L;try{p=this.shouldUpdate(g),p?(this.willUpdate(g),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var p;return null===(p=t.hostUpdate)||void 0===p?void 0:p.call(t)}),this.update(g)):this.Π$()}catch(t){throw p=!1,this.Π$(),t}p&&this.E(g)}willUpdate(t){}E(t){var p;null===(p=this.ΠU)||void 0===p||p.forEach(t=>{var p;return null===(p=t.hostUpdated)||void 0===p?void 0:p.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,p)=>this.Πj(p,this[p],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(v=(u=globalThis).reactiveElementPlatformSupport)||void 0===v||v.call(u,{ReactiveElement:a}),(null!==(f=(y=globalThis).reactiveElementVersions)&&void 0!==f?f:y.reactiveElementVersions=[]).push("1.0.0-rc.2")},2805:(t,p,g)=>{g.d(p,{P:()=>o});var u=g(696);function o(t,p){return(0,u.He)({descriptor:g=>{const u={get(){var p;return null===(p=this.renderRoot)||void 0===p?void 0:p.querySelector(t)},enumerable:!0,configurable:!0};if(p){const p="symbol"==typeof g?Symbol():"__"+g;u.get=function(){var g;return void 0===this[p]&&(this[p]=null===(g=this.renderRoot)||void 0===g?void 0:g.querySelector(t)),this[p]}}return u}})}},3005:(t,p,g)=>{g.d(p,{AH:()=>i,Rf:()=>S,sk:()=>y});const u=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol();class s{constructor(t,p){if(p!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return u&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const f=new Map,o=t=>{let p=f.get(t);return void 0===p&&f.set(t,p=new s(t,v)),p},i=(t,...p)=>{const g=1===t.length?t[0]:p.reduce((p,g,u)=>p+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(g)+t[u+1],t[0]);return o(g)},S=(t,p)=>{u?t.adoptedStyleSheets=p.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):p.forEach(p=>{const g=document.createElement("style");g.textContent=p.cssText,t.appendChild(g)})},y=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let p="";for(const g of t.cssRules)p+=g.cssText;return(t=>o("string"==typeof t?t:t+""))(p)})(t):t},3635:(t,p,g)=>{g.d(p,{AH:()=>u.AH,WF:()=>u.WF,qy:()=>u.qy});g(2705),g(1276);var u=g(4762)},3732:(t,p,g)=>{var u=g(3635),v=g(9581),f=g(971),__decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korAppBar extends u.WF{static get styles(){return[f.g,u.AH`
        :host {
          z-index: 3;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0 var(--spacing-l);
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
          gap: calc(var(--spacing-l) * 2);
          /* css properties */
          --functions-gap: var(--spacing-m);
        }
        .logo {
          height: 24px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        /* mobile */
        :host[mobile] {
          gap: var(--spacing-l);
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `]}render(){return u.qy`
      ${this.mobile?u.qy`
            <slot name="left"></slot>
            ${this.label?u.qy` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:u.qy`
            ${this.logo?u.qy`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?u.qy` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}__decorate([(0,v.MZ)({type:String,reflect:!0})],korAppBar.prototype,"label",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korAppBar.prototype,"logo",void 0),__decorate([(0,v.MZ)({type:Boolean,reflect:!0})],korAppBar.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",korAppBar)},4171:(t,p,g)=>{g.d(p,{Y:()=>e});var u=g(696);function e(t){return(0,u.He)({descriptor:p=>({get(){var p;return null===(p=this.renderRoot)||void 0===p?void 0:p.querySelectorAll(t)},enumerable:!0,configurable:!0})})}},4236:(t,p,g)=>{g(8540)},4762:(t,p,g)=>{g.d(p,{AH:()=>x.AH,WF:()=>h,qy:()=>$.qy});var u,v,f,y,m,w,x=g(2705),$=g(1276);(null!==(u=(w=globalThis).litElementVersions)&&void 0!==u?u:w.litElementVersions=[]).push("3.0.0-rc.2");class h extends x.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,p;const g=super.createRenderRoot();return null!==(t=(p=this.renderOptions).renderBefore)&&void 0!==t||(p.renderBefore=g.firstChild),g}update(t){const p=this.render();super.update(t),this.Φt=(0,$.XX)(p,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return $.c0}}h.finalized=!0,h._$litElement$=!0,null===(f=(v=globalThis).litElementHydrateSupport)||void 0===f||f.call(v,{LitElement:h}),null===(m=(y=globalThis).litElementPlatformSupport)||void 0===m||m.call(y,{LitElement:h})},6219:(t,p,g)=>{g(7914)},7736:(t,p,g)=>{g(9460)},7808:(t,p,g)=>{g.d(p,{M:()=>e});const i=(t,p)=>"method"===p.kind&&p.descriptor&&!("value"in p.descriptor)?{...p,finisher(g){g.createProperty(p.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:p.key,initializer(){"function"==typeof p.initializer&&(this[p.key]=p.initializer.call(this))},finisher(g){g.createProperty(p.key,t)}};function e(t){return(p,g)=>void 0!==g?((t,p,g)=>{p.constructor.createProperty(g,t)})(t,p,g):i(t,p)}},7914:(t,p,g)=>{var u=g(3635),v=g(9581),f=g(971),y=(g(4236),function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y});class korCard extends u.WF{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[f.g,u.AH`
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
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}y([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),y([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),y([(0,v.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),y([(0,v.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),y([(0,v.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),y([(0,v.wk)()],korCard.prototype,"emptyHeader",void 0),y([(0,v.wk)()],korCard.prototype,"emptyFunctions",void 0),y([(0,v.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},8540:(t,p,g)=>{var u=g(3635),v=g(9581),f=g(971),__decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korIcon extends u.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[f.g,u.AH`
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
      `]}render(){var t;return u.qy` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?u.qy` ${this.icon} `:""}`}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&g.indexOf("url")>-1&&this.setBackgroundImage(g)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,v.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,v.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},9239:(t,p,g)=>{g.d(p,{E:()=>n});const n=t=>p=>"function"==typeof p?((t,p)=>(window.customElements.define(t,p),p))(t,p):((t,p)=>{const{kind:g,elements:u}=p;return{kind:g,elements:u,finisher(p){window.customElements.define(t,p)}}})(t,p)},9440:(t,p,g)=>{var u=g(3635),v=g(9581),f=g(971),__decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korText extends u.WF{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[f.g,u.AH`
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
      `]}render(){return u.qy`<slot></slot>`}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,v.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,v.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},9460:(t,p,g)=>{var u=g(3635),v=g(9581),f=g(971),y=(g(6219),function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y});class korPopover extends u.WF{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[f.g,u.AH`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: var(--border-radius);
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return u.qy`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        @wheel="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target?this.targetObserver():"visible"===t&&this.visible&&this.visibleObserver()}targetObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&t.addEventListener("click",()=>this.handlePosition(t))}visibleObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&(this.handlePosition(t),!this.sticky&&this.target&&this.addDocListener(t))}handlePosition(t){if(!t)return;let p=this,g=t.getBoundingClientRect();if(p.visible=!0,p.position.startsWith("bottom"))p.style.top=g.top+g.height+8+"px";else if(p.position.startsWith("top"))p.style.top=g.top-p.clientHeight-8+"px";else{p.style.top=g.top+g.height/2-p.clientHeight/2+"px",parseInt(p.style.top)<0&&(p.style.top="8px");const t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(p.style.top)+p.clientHeight>t&&(p.style.top=t-p.clientHeight-8+"px")}p.position.startsWith("right")?p.style.left=g.left+g.width+8+"px":p.position.startsWith("left")?p.style.left=g.left-p.clientWidth-8+"px":p.style.left=g.left+g.width/2-p.clientWidth/2+"px"}addDocListener(t){let closePopover=p=>{(p.composedPath()[0]!==t&&p.target!==t&&"click"===p.type||"wheel"===p.type)&&(this.visible=!1,document.removeEventListener("click",closePopover),document.removeEventListener("wheel",closePopover))};document.addEventListener("click",closePopover),document.addEventListener("wheel",closePopover)}}y([(0,v.MZ)({type:String,reflect:!0})],korPopover.prototype,"label",void 0),y([(0,v.MZ)({type:String,reflect:!0})],korPopover.prototype,"icon",void 0),y([(0,v.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korPopover.prototype,"flexDirection",void 0),y([(0,v.MZ)({type:String,reflect:!0})],korPopover.prototype,"position",void 0),y([(0,v.MZ)({type:String,reflect:!0})],korPopover.prototype,"target",void 0),y([(0,v.MZ)({type:Boolean,reflect:!0})],korPopover.prototype,"visible",void 0),y([(0,v.MZ)({type:Boolean,reflect:!0})],korPopover.prototype,"sticky",void 0),y([(0,v.wk)()],korPopover.prototype,"emptyHeader",void 0),y([(0,v.wk)()],korPopover.prototype,"emptyFunctions",void 0),y([(0,v.wk)()],korPopover.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",korPopover)},9581:(t,p,g)=>{g.d(p,{EM:()=>u.E,MZ:()=>v.M,P:()=>y.P,YG:()=>m.Y,wk:()=>f.w});var u=g(9239),v=g(7808),f=g(512),y=g(2805),m=g(4171);g(2190)}},p={};function __webpack_require__(g){var u=p[g];if(void 0!==u)return u.exports;var v=p[g]={exports:{}};return t[g](v,v.exports,__webpack_require__),v.exports}__webpack_require__.d=(t,p)=>{for(var g in p)__webpack_require__.o(p,g)&&!__webpack_require__.o(t,g)&&Object.defineProperty(t,g,{enumerable:!0,get:p[g]})},__webpack_require__.o=(t,p)=>Object.prototype.hasOwnProperty.call(t,p);var g=__webpack_require__(3635),u=__webpack_require__(9581),v=__webpack_require__(971),f=(__webpack_require__(4236),__webpack_require__(6219),function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y});class korAccordion extends g.WF{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: var(--spacing-s) var(--spacing-l);
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        slot:not([name]) {
          transition: var(--transition-1);
          display: inherit;
          flex-direction: inherit;
          gap: inherit;
        }
        slot[name='footer'] {
          justify-content: flex-end;
        }
        /* expanded */
        :host([expanded]) slot:not([name]) {
          margin-top: var(--spacing-l);
        }
        :host(:not([expanded])) slot:not([name]) {
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: var(--spacing-s);
        }
        slot[name='header'] p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
          flex: 1;
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `]}render(){return g.qy`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${t=>this.handleCollapse(t)}"
        >
          <div class="header">
            ${this.icon?g.qy` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot name="functions" slot="functions"></slot>
        <slot></slot>
        ${this.expanded?g.qy`
              <slot
                name="footer"
                slot="${this.emptyFooter?"hidden":"footer"}"
                @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var t,p,g;const u=null===(g=null===(p=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("kor-card"))||void 0===p?void 0:p.shadowRoot)||void 0===g?void 0:g.querySelector(".top");u&&(u.style.padding="0")},0)}handleCollapse(t){this.expanded&&(this.expanded=!1,t.stopPropagation())}}f([(0,u.MZ)({type:String,reflect:!0})],korAccordion.prototype,"label",void 0),f([(0,u.MZ)({type:String,reflect:!0})],korAccordion.prototype,"icon",void 0),f([(0,u.MZ)({type:Boolean,reflect:!0})],korAccordion.prototype,"expanded",void 0),f([(0,u.MZ)({type:Boolean,reflect:!0})],korAccordion.prototype,"disabled",void 0),f([(0,u.wk)()],korAccordion.prototype,"emptyHeader",void 0),f([(0,u.wk)()],korAccordion.prototype,"emptyFunctions",void 0),f([(0,u.wk)()],korAccordion.prototype,"emptyBody",void 0),f([(0,u.wk)()],korAccordion.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",korAccordion);__webpack_require__(3732),__webpack_require__(1686);var F_Documents_HACKS_KorUI_kor_ui_components_avatar_kor_avatar_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korAvatar extends g.WF{static get styles(){return[v.g,g.AH`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: var(--spacing-s);
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `]}render(){return g.qy`
      <!-- image -->
      <div class="image">
        ${this.image?g.qy` <img src="${this.image}" /> `:g.qy`
              ${this.label?g.qy` ${this.getInitials(this.label)} `:g.qy` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?g.qy`
            <div class="text">
              ${this.label?g.qy`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?g.qy`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}getInitials(t){const p=t.match(/\b\w/g)||[];return(p.shift()||"")+(p.pop()||"").toUpperCase()}}F_Documents_HACKS_KorUI_kor_ui_components_avatar_kor_avatar_decorate([(0,u.MZ)({type:String,reflect:!0})],korAvatar.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_avatar_kor_avatar_decorate([(0,u.MZ)({type:String,reflect:!0})],korAvatar.prototype,"info",void 0),F_Documents_HACKS_KorUI_kor_ui_components_avatar_kor_avatar_decorate([(0,u.MZ)({type:String,reflect:!0})],korAvatar.prototype,"image",void 0),F_Documents_HACKS_KorUI_kor_ui_components_avatar_kor_avatar_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korAvatar.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",korAvatar);var F_Documents_HACKS_KorUI_kor_ui_components_badge_kor_badge_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korBadge extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return g.qy`
      ${this.status?g.qy`
            <!-- status -->
            ${this.status?g.qy`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:g.qy`
            ${this.label?g.qy`
                  <kor-text size="body-2">
                    ${this.label>999?g.qy` 999+ `:g.qy` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}}F_Documents_HACKS_KorUI_kor_ui_components_badge_kor_badge_decorate([(0,u.MZ)({type:Number,reflect:!0})],korBadge.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_badge_kor_badge_decorate([(0,u.MZ)({type:String,reflect:!0})],korBadge.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",korBadge);class korBreadcrumbs extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return g.qy` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",korBreadcrumbs);var F_Documents_HACKS_KorUI_kor_ui_components_breadcrumbs_kor_breadcrumb_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korBreadcrumbItem extends g.WF{constructor(){super(...arguments),this.label="Label"}static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 var(--spacing-xs);
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `]}render(){return g.qy`
      ${this.firstItem()?"":g.qy`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}firstItem(){var t;let p,g;return g=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),p=0==g.indexOf(this),p}}F_Documents_HACKS_KorUI_kor_ui_components_breadcrumbs_kor_breadcrumb_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korBreadcrumbItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_breadcrumbs_kor_breadcrumb_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korBreadcrumbItem.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",korBreadcrumbItem);var F_Documents_HACKS_KorUI_kor_ui_components_button_kor_button_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korButton extends g.WF{constructor(){super(...arguments),this.color="primary"}static get styles(){return[v.g,g.AH`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          gap: var(--spacing-xs);
          height: max-content;
          width: max-content;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([label]) {
          max-width: 160px;
          padding: var(--spacing-xs) var(--spacing-m);
        }
        :host([color='tertiary'][label]) {
          padding: 3px 11px;
        }
        :host(:not([label])) {
          padding: var(--spacing-xs);
        }
        :host([color='tertiary']:not([label])) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          background-color: rgb(var(--accent-1));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }
        :host([color='primary']) {
          color: rgba(255, 255, 255, 0.9);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background-color: rgb(var(--accent-1b));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `]}render(){return g.qy`
      <slot name="icon">
        ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      </slot>
      <slot>${this.label?g.qy`<div class="center"><label class="label">${this.label}</label></div>`:""}</slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_button_kor_button_decorate([(0,u.MZ)({type:String,reflect:!0})],korButton.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_button_kor_button_decorate([(0,u.MZ)({type:String,reflect:!0})],korButton.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_button_kor_button_decorate([(0,u.MZ)({type:String,reflect:!0})],korButton.prototype,"color",void 0),F_Documents_HACKS_KorUI_kor_ui_components_button_kor_button_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korButton.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",korButton);__webpack_require__(7914);var F_Documents_HACKS_KorUI_kor_ui_components_checkbox_kor_checkbox_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korCheckbox extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 2px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .box {
          border-color: transparent;
          background: rgb(var(--accent-1));
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
          :host(:hover:not([active]):not(:active)) .box {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return g.qy`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?g.qy` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?g.qy` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}F_Documents_HACKS_KorUI_kor_ui_components_checkbox_kor_checkbox_decorate([(0,u.MZ)({type:String,reflect:!0})],korCheckbox.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_checkbox_kor_checkbox_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korCheckbox.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_checkbox_kor_checkbox_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korCheckbox.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",korCheckbox);var F_Documents_HACKS_KorUI_kor_ui_components_divider_kor_divider_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korDivider extends g.WF{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[v.g,g.AH`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: var(--spacing-s) 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: var(--spacing-l) 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: calc(var(--spacing-l) * 2) 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 var(--spacing-s);
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 var(--spacing-l);
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 calc(var(--spacing-s) * 2);
        }
      `]}render(){return g.qy`<div class="line"></div>`}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_divider_kor_divider_decorate([(0,u.MZ)({type:String,reflect:!0})],korDivider.prototype,"spacing",void 0),F_Documents_HACKS_KorUI_kor_ui_components_divider_kor_divider_decorate([(0,u.MZ)({type:String,reflect:!0})],korDivider.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",korDivider);var F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korDrawer extends g.WF{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        kor-card {
          position: absolute;
          border-radius: 0px;
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        /* position */
        :host([position='left']) kor-card {
          left: 0;
        }
        :host([position='right']) kor-card {
          right: 0;
        }
        :host([position='top']) kor-card {
          top: 0;
        }
        :host([position='bottom']) kor-card {
          bottom: 0;
        }
        /* animations */
        :host([position='left']:not([visible])) kor-card {
          margin-left: -40px;
        }
        :host([position='right']:not([visible])) kor-card {
          margin-right: -40px;
        }
        :host([position='top']:not([visible])) kor-card {
          margin-top: -40px;
        }
        :host([position='bottom']:not([visible])) kor-card {
          margin-bottom: -40px;
        }
      `]}render(){return g.qy`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":g.qy`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let t={height:void 0,width:void 0};switch(this.position){case"left":case"right":t.height="100%",t.width=this.width;break;case"top":case"bottom":t.height=this.height,t.width="100%"}return t}}F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0})],korDrawer.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0})],korDrawer.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0})],korDrawer.prototype,"position",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0})],korDrawer.prototype,"height",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0})],korDrawer.prototype,"width",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korDrawer.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korDrawer.prototype,"visible",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korDrawer.prototype,"sticky",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.wk)()],korDrawer.prototype,"emptyHeader",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.wk)()],korDrawer.prototype,"emptyFunctions",void 0),F_Documents_HACKS_KorUI_kor_ui_components_drawer_kor_drawer_decorate([(0,u.wk)()],korDrawer.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",korDrawer);var F_Documents_HACKS_KorUI_kor_ui_components_empty_state_kor_empty_state_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korEmptyState extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* css properties */
          --footer-gap: var(--spacing-m);
        }
        slot[name='footer'] {
          display: flex;
          margin-top: var(--spacing-l);
          gap: var(--footer-gap);
        }
        kor-icon + kor-text {
          margin-top: var(--spacing-s);
        }
        kor-text {
          text-align: center;
        }
      `]}render(){return g.qy`
      ${this.icon?g.qy`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?g.qy` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_empty_state_kor_empty_state_decorate([(0,u.MZ)({type:String,reflect:!0})],korEmptyState.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_empty_state_kor_empty_state_decorate([(0,u.MZ)({type:String,reflect:!0})],korEmptyState.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",korEmptyState);var F_Documents_HACKS_KorUI_kor_ui_components_grid_kor_grid_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korGrid extends g.WF{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy`<slot></slot>`}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"columns"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}F_Documents_HACKS_KorUI_kor_ui_components_grid_kor_grid_decorate([(0,u.MZ)({type:Number,reflect:!0})],korGrid.prototype,"columns",void 0),F_Documents_HACKS_KorUI_kor_ui_components_grid_kor_grid_decorate([(0,u.MZ)({type:Number,reflect:!0})],korGrid.prototype,"rows",void 0),F_Documents_HACKS_KorUI_kor_ui_components_grid_kor_grid_decorate([(0,u.MZ)({type:String,reflect:!0})],korGrid.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",korGrid);var F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korImage extends g.WF{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?g.qy` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"src",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"alt",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"height",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"width",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"fit",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0})],korImage.prototype,"legend",void 0),F_Documents_HACKS_KorUI_kor_ui_components_image_kor_image_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"legend-position"})],korImage.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",korImage);__webpack_require__(8540);var y=__webpack_require__(1276);const l=t=>null!=t?t:y.s6;var F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};let m=class korInput extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hours,
        .minutes {
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding-top: 8px;
          width: 100%;
          background-color: rgba(var(--neutral-1), 0.05);
          min-width: 2rem;
          text-align: center;
        }
        .hours > input,
        .minutes > input {
          padding-left: 8px;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select, date and datetime */
        :host([type='date']),
        :host([type='date']) *,
        :host([type='datetime']),
        :host([type='datetime']) *,
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: var(--spacing-l) 0;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 var(--spacing-s);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){var t;return g.qy`
      ${this.icon?g.qy` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?g.qy` <label class="label">${this.label}</label> `:""}
        <input id="main_input"
          .type="${"date"===this.type||"datetime"===this.type?"text":this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step?this.step.toString():"any"}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${l(this.min)}"
          max="${l(this.max)}"
          pattern="${l(this.pattern)}"
          name="${l(this.name)}"
          @input="${t=>{t.target.value!=this.value&&this.handleChange_(t)}}"
          @focus="${t=>{this.handleFocus_(t)}}"
          @blur="${t=>{this.handleBlur_(t)}}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?g.qy`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?g.qy`
                  <kor-card
                    @click="${t=>{this.active=!1,t.stopPropagation()}}"
                    @wheel="${t=>t.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date and datetime -->
      ${"date"===this.type||"datetime"===this.type?g.qy`${this.active?this.getCalendarGrid_(null!==(t=this.value)&&void 0!==t?t:""):""}`:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":g.qy`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?g.qy`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment or month increment -->
      ${("number"===this.type&&parseFloat(String(this.step))||"date"===this.type||"datetime"===this.type)&&!this.readonly?g.qy`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${t=>this.handleIncrement_(t,"left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${t=>this.handleIncrement_(t,"right")}"
            ></kor-icon>
          `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}constructor(){if(super(),this.type="text",this.autofocus=!1,this.step=0,this.is12Hour_=!1,this.isMenuHandlerSet_=!1,this.addEventListener("click",t=>{var p;this.active?"select"===this.type?this.closeSelectMenu(t):this.active=!1:this.active||(this.active=!0,"select"===this.type||this.disabled||this.readonly||null===(p=this.main_input)||void 0===p||p.focus())}),"datetime"===this.type){const t=new Intl.DateTimeFormat(this.locale,{hour:"numeric"}).resolvedOptions().hourCycle;"h11"!==t&&"h12"!==t||(this.is12Hour_=!0)}}firstUpdated(){var t,p,g,u;"select"===this.type||this.disabled||this.readonly||null===(t=this.main_input)||void 0===t||t.focus(),null===(p=this.main_input)||void 0===p||p.addEventListener("keydown",t=>{this.step||"number"!==this.type||"ArrowUp"!==t.key&&"ArrowDown"!==t.key||t.preventDefault()}),null===(g=this.main_input)||void 0===g||g.addEventListener("wheel",t=>{this.step||"number"!==this.type||t.preventDefault()},{passive:!1}),"date"!==this.type&&"datetime"!==this.type||(this.value=this.validateAndFormatDate_(null!==(u=this.value)&&void 0!==u?u:""))}handleChange_(t){var p;t instanceof Date?this.value=this.validateAndFormatDate_(t):t instanceof Event&&"string"==typeof(null===(p=t.target)||void 0===p?void 0:p.value)&&(this.value=t.target.value),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}setDay_(t){var p,g;let u=new Date(Date.parse(null!==(p=this.value)&&void 0!==p?p:""));isNaN(u.getTime())&&(u=new Date),u.setDate(null!==(g=parseInt(t))&&void 0!==g?g:0),this.handleChange_(u),this.active=!1,this.requestUpdate()}getHour_(){var t;let p=new Date(Date.parse(null!==(t=this.value)&&void 0!==t?t:""));isNaN(p.getTime())&&(p=new Date);let g=p.getHours();return this.is12Hour_&&g>12&&(g-=12),String(g)}setHour_(t){var p,g;let u=new Date(Date.parse(null!==(p=this.value)&&void 0!==p?p:""));isNaN(u.getTime())&&(u=new Date);let v=null!==(g=parseInt(t))&&void 0!==g?g:0;this.is12Hour_&&v>0&&v<12&&"PM"===this.getAMPM_()&&(v+=12),u.setHours(v),this.handleChange_(u)}getMinute_(){var t;let p=new Date(Date.parse(null!==(t=this.value)&&void 0!==t?t:""));return isNaN(p.getTime())&&(p=new Date),String(p.getMinutes())}setMinute_(t){var p,g;let u=new Date(Date.parse(null!==(p=this.value)&&void 0!==p?p:""));isNaN(u.getTime())&&(u=new Date),u.setMinutes(null!==(g=parseInt(t))&&void 0!==g?g:0),this.handleChange_(u)}getAMPM_(){var t,p;return(null===(t=this.value)||void 0===t?void 0:t.includes("AM"))?"AM":(null===(p=this.value)||void 0===p?void 0:p.includes("PM"))?"PM":""}setAMPM_(t){var p;let g=new Date(Date.parse(null!==(p=this.main_input.value)&&void 0!==p?p:""));if(isNaN(g.getTime())&&(g=new Date),g.getHours()>=12&&"AM"===t)g.setHours(g.getHours()-12);else{if(!(g.getHours()<12&&"PM"===t))return;g.setHours(g.getHours()+12)}this.handleChange_(g)}handleClear(t){t.stopImmediatePropagation(),this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleFocus_(t){this.active||"select"===this.type||"date"===this.type||"datetime"===this.type||(this.active=!0)}handleBlur_(t){"number"===this.type&&this.validateMinMax(parseFloat(t.target.value)),"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type&&(this.active=!1)}handleIncrement_(t,p){var g,u,v,f,y,m,w;if("date"===this.type||"datetime"===this.type){t.stopImmediatePropagation();let u=new Date(Date.parse(null!==(g=this.value)&&void 0!==g?g:""));return isNaN(u.getTime())&&(u=new Date),"left"===p?u.setMonth(u.getMonth()-1):u.setMonth(u.getMonth()+1),void this.handleChange_(u)}const x=parseFloat(String(this.step));!isNaN(x)&&x&&("left"===p?this.validateMinMax((null!==(f=parseFloat(null!==(v=null!==(u=this.value)&&void 0!==u?u:this.max)&&void 0!==v?v:"0"))&&void 0!==f?f:0)-x):"right"===p&&this.validateMinMax((null!==(w=parseFloat(null!==(m=null!==(y=this.value)&&void 0!==y?y:this.min)&&void 0!==m?m:"0"))&&void 0!==w?w:0)+x))}handleItems(t){const p=t.target.assignedNodes();p.forEach(t=>{"KOR-MENU-ITEM"===t.tagName&&t.addEventListener("active-changed",g=>{g.target.active&&(p.forEach(t=>{t.active=!1}),g.target.active=!0,this.value=t.label,this.active=!1)})})}attributeChangedCallback(t,p,g){var u;if(super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"active"!==t||"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type){if("locale"==t&&("date"===this.type||"datetime"===this.type)){const t=new Intl.DateTimeFormat(g,{hour:"numeric"}).resolvedOptions().hourCycle;this.is12Hour_="h11"===t||"h12"===t;const p=this.validateAndFormatDate_(null!==(u=this.value)&&void 0!==u?u:"");p!==this.value&&(this.value=p)}}else this.active&&!this.isMenuHandlerSet_&&(this.handleMenu(),this.isMenuHandlerSet_=!0)}handleMenu(){const t=this.parentElement,closePopover=()=>{this.active=!1,null==t||t.removeEventListener("wheel",closePopover),this.isMenuHandlerSet_=!1};null==t||t.addEventListener("wheel",closePopover)}closeSelectMenu(t){"select"===this.type&&this.active&&(t.stopImmediatePropagation(),this.active=!1)}validateMinMax(t){isNaN(t)||t===parseFloat(this.value)||(this.min&&t<parseFloat(this.min)?this.value=this.min:this.max&&t>parseFloat(this.max)?this.value=this.max:this.value=t.toString(),this.handleChange_(void 0))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}validateAndFormatDate_(t){let p=t instanceof Date?t:new Date(Date.parse(null!=t?t:""));isNaN(p.getTime())&&(p=new Date);const g={dateStyle:"short"};"datetime"===this.type&&(g.timeStyle="short");return new Intl.DateTimeFormat(this.locale,g).format(p)}getLocaleDayNames_(){const t=new Intl.DateTimeFormat(this.locale,{weekday:"narrow"});return[1,2,3,4,5,6,7].map(p=>{const g=new Date(2024,0,p);return t.format(g)+"."})}getCalendarGrid_(t){var p,u;let v=new Date(Date.parse(null!=t?t:""));isNaN(v.getTime())&&(v=new Date);const f=new Intl.DateTimeFormat(this.locale,{month:"long"}).formatToParts(v).reduce((t,p)=>("literal"!==p.type&&(t[p.type]=p.value),t),{}),y=new Intl.DateTimeFormat(this.locale,{day:"numeric",month:"numeric",year:"numeric"}).formatToParts(v).reduce((t,p)=>("literal"!==p.type&&(t[p.type]=p.value),t),{}),m=null!==(p=parseInt(y.month))&&void 0!==p?p:0,w=null!==(u=parseInt(y.year))&&void 0!==u?u:0,x=f.month+" "+y.year;let $=new Date(w,m-1,1).getDay();$=0===$?6:$-1;const E=new Date(w,m,0).getDate(),P=new Date(w,m-1,0).getDate(),_=[];let Z=1,q=1;_.push(...this.getLocaleDayNames_());for(let t=0;t<6;t++)for(let p=0;p<7;p++){const g=7*t+p;g<$?_.push(P-$+g+1+"."):Z<=E?(_.push(String(Z)),Z++):(_.push(q+"."),q++)}return g.qy`
      <kor-card id="calendar_popup" class="select-menu"
        style="top: ${this.getMenuStyles().top};
               left: ${this.getMenuStyles().left};
               width: -webkit-fit-content;
               width: -moz-fit-content;
               width: fit-content;
               max-width: 100%;
               min-width: 21rem;
               height: -webkit-fit-content;
               height: fit-content;
               max-height: 24rem;
               padding-left: 0.5rem;
               overflow: hidden;
               display: flex;"
      >
        <kor-text size="body-1">
          ${x}
        <kor-text>
        <kor-switch>
          <kor-grid columns="7" spacing
            style="grid-template-columns: repeat(7, 3rem);"
          >
            ${_.map(t=>g.qy`
                <kor-switch-item
                  label="${t.includes(".")?t.slice(0,-1):t}"
                  grid-cols="1"
                  ?active="${t===y.day}"
                  ?disabled="${t.includes(".")}"
                  @click="${t=>{var p;t.stopImmediatePropagation();const g=t.target;this.setDay_(null!==(p=g.label)&&void 0!==p?p:"")}}"
                ></kor-switch-item>
              `)}
          </kor-grid>
        </kor-switch>
        ${"datetime"===this.type?g.qy`
            <kor-grid columns="${this.is12Hour_?"3":"2"}" spacing="s"
              style="display: flex;"
            >
              <!-- The hours input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="hours" type="number" step="1"
                    min="0" max="${this.is12Hour_?12:24}"
                    value="${this.getHour_()}"
                    @input="${t=>{var p;const g=t.target;g.value!==this.getHour_()&&this.setHour_(null!==(p=g.value)&&void 0!==p?p:"")}}"
                    @click="${t=>{t.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${t=>{var p,g,u,v,f;t.stopImmediatePropagation();const y=t.target.parentNode.querySelector("div > input");if(!y)return;const m=(null!==(g=parseInt(null!==(p=y.value)&&void 0!==p?p:y.max))&&void 0!==g?g:0)-(null!==(u=parseInt(y.step))&&void 0!==u?u:0);m>=(null!==(v=parseInt(y.min))&&void 0!==v?v:0)&&(y.value=String(m),this.setHour_(null!==(f=y.value)&&void 0!==f?f:""))}}"
                ></kor-icon>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${t=>{var p,g,u,v,f;t.stopImmediatePropagation();const y=t.target.parentNode.querySelector("div > input");if(!y)return;const m=(null!==(g=parseInt(null!==(p=y.value)&&void 0!==p?p:y.min))&&void 0!==g?g:0)+(null!==(u=parseInt(y.step))&&void 0!==u?u:0);m<=(null!==(v=parseInt(y.max))&&void 0!==v?v:0)&&(y.value=String(m),this.setHour_(null!==(f=y.value)&&void 0!==f?f:""))}}"
                ></kor-icon>
              </div>
              <!-- The minutes input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="minutes" type="number" step="1"
                    min="0" max="60"
                    value="${this.getMinute_()}"
                    @input="${t=>{var p;const g=t.target;g.value!==this.getMinute_()&&this.setMinute_(null!==(p=g.value)&&void 0!==p?p:"")}}"
                    @click="${t=>{t.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${t=>{var p,g,u,v,f;t.stopImmediatePropagation();const y=t.target.parentNode.querySelector("div > input");if(!y)return;const m=(null!==(g=parseInt(null!==(p=y.value)&&void 0!==p?p:y.max))&&void 0!==g?g:0)-(null!==(u=parseInt(y.step))&&void 0!==u?u:0);m>=(null!==(v=parseInt(y.min))&&void 0!==v?v:0)&&(y.value=String(m),this.setMinute_(null!==(f=y.value)&&void 0!==f?f:""))}}"
                ></kor-icon>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${t=>{var p,g,u,v,f;t.stopImmediatePropagation();const y=t.target.parentNode.querySelector("div > input");if(!y)return;const m=(null!==(g=parseInt(null!==(p=y.value)&&void 0!==p?p:y.min))&&void 0!==g?g:0)+(null!==(u=parseInt(y.step))&&void 0!==u?u:0);m<=(null!==(v=parseInt(y.max))&&void 0!==v?v:0)&&(y.value=String(m),this.setMinute_(null!==(f=y.value)&&void 0!==f?f:""))}}"
                ></kor-icon>
              </div>
              <!-- The optional AM/PM switch for 12 hour time format -->
              ${this.is12Hour_?g.qy`
                  <kor-switch grid-cols="1"
                    style="display: flex; margin: 4px 8px 0 0; max-width: 8rem;"
                  >
                    <kor-grid columns="2" spacing>
                      <kor-switch-item label="AM"
                        ?active="${"AM"===this.getAMPM_()}"
                        @click="${t=>{var p;t.stopImmediatePropagation();const g=t.target;this.setAMPM_(null!==(p=g.label)&&void 0!==p?p:"")}}"
                      ></kor-switch-item>
                      <kor-switch-item label="PM"
                        ?active="${"PM"===this.getAMPM_()}"
                        @click="${t=>{var p;t.stopImmediatePropagation();const g=t.target;this.setAMPM_(null!==(p=g.label)&&void 0!==p?p:"")}}"
                      ></kor-switch-item>
                    </kor-grid>
                  </kor-switch>
                `:""}
            </kor-grid>
          `:""}
      </kor-card>
    `}};F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"value",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"name",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"type",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"locale",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"status",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"condensed",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"readonly",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0,attribute:"no-clear"})],m.prototype,"noClear",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"autofocus",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"pattern",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"min",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:String,reflect:!0})],m.prototype,"max",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.MZ)({type:Number,reflect:!0})],m.prototype,"step",void 0),F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.P)("#main_input",!1)],m.prototype,"main_input",void 0),m=F_Documents_HACKS_KorUI_kor_ui_components_input_kor_input_decorate([(0,u.EM)("kor-input")],m);var F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korMenuItem extends g.WF{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[v.g,g.AH`
        :host {
          padding: var(--spacing-s) 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: var(--spacing-s);
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        :host([active]) {
          padding: var(--spacing-s);
          margin-left: calc(var(--spacing-s) * -1);
          margin-right: calc(var(--spacing-s) * -1);
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: var(--spacing-s);
            margin-left: calc(var(--spacing-s) * -1);
            margin-right: calc(var(--spacing-s) * -1);
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return g.qy`
      ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?g.qy` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korMenuItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korMenuItem.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"toggle",void 0),F_Documents_HACKS_KorUI_kor_ui_components_menu_item_kor_menu_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",korMenuItem);var F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korModal extends g.WF{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return g.qy`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":g.qy`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:String,reflect:!0})],korModal.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:String,reflect:!0})],korModal.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:String,reflect:!0})],korModal.prototype,"height",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:String,reflect:!0})],korModal.prototype,"width",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korModal.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korModal.prototype,"visible",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korModal.prototype,"sticky",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.wk)()],korModal.prototype,"emptyHeader",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.wk)()],korModal.prototype,"emptyFunctions",void 0),F_Documents_HACKS_KorUI_kor_ui_components_modal_kor_modal_decorate([(0,u.wk)()],korModal.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",korModal);__webpack_require__(578);class korNavbar extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return g.qy`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",korNavbar);var F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notifications_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korNotifications extends g.WF{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[v.g,g.AH`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: var(--spacing-l);
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
          /* css properties */
          --body-gap: var(--spacing-m);
        }
        slot:not([name]) {
          gap: var(--body-gap);
          display: flex;
          flex-direction: column;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
      `]}render(){return g.qy`<slot></slot>`}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notifications_decorate([(0,u.MZ)({type:String,reflect:!0})],korNotifications.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",korNotifications);var F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korNotificationItem extends g.WF{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          transition: var(--transition-1);
          opacity: 1;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `]}render(){return g.qy`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":g.qy`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korNotificationItem.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"visible",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"sticky",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.wk)()],korNotificationItem.prototype,"emptyHeader",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.wk)()],korNotificationItem.prototype,"emptyFunctions",void 0),F_Documents_HACKS_KorUI_kor_ui_components_notifications_kor_notification_item_decorate([(0,u.wk)()],korNotificationItem.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",korNotificationItem);var F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korPage extends g.WF{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[v.g,g.AH`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        :host([scrollable]) slot:not([name]) {
          overflow: auto;
        }
        slot[name='top'],
        slot[name='bottom'],
        :host([flex-direction='column']) slot:not([name]) {
          flex-direction: column;
        }
      `]}render(){return g.qy`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate([(0,u.MZ)({type:String,reflect:!0})],korPage.prototype,"theme",void 0),F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate([(0,u.MZ)({type:String,reflect:!0})],korPage.prototype,"padding",void 0),F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korPage.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korPage.prototype,"flat",void 0),F_Documents_HACKS_KorUI_kor_ui_components_page_kor_page_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korPage.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",korPage);var F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korPane extends g.WF{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-out;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return g.qy`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.MZ)({type:String,reflect:!0})],korPane.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.MZ)({type:String,reflect:!0})],korPane.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korPane.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.MZ)({type:String,reflect:!0})],korPane.prototype,"size",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.wk)()],korPane.prototype,"emptyHeader",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.wk)()],korPane.prototype,"emptyFunctions",void 0),F_Documents_HACKS_KorUI_kor_ui_components_pane_kor_pane_decorate([(0,u.wk)()],korPane.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",korPane);__webpack_require__(9460);var F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korProgressBar extends g.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[v.g,g.AH`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: var(--spacing-s);
        }
        .footer {
          margin-top: var(--spacing-s);
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return g.qy`
      <!-- header -->
      ${this.label||this.showProgress?g.qy`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?g.qy` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?g.qy`
            <!-- radial -->
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
                <circle
                  stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                  stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-(this.value?this.value/100:0))}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?g.qy` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:g.qy`
            <!-- linear -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect
                fill="rgba(var(--neutral-1), .1)"
                width="100%"
                height="100%"
                rx="4px"
              />
              <rect
                fill="${this.color?this.color:"rgb(var(--accent-1))"}"
                width="${this.value}%"
                height="100%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `}
      ${this.info||this.status?g.qy`
            <div class="footer">
              <!-- status -->
              ${this.status?g.qy`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?g.qy`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getSize(){let t;switch(this.size){case"s":t=48;break;case"m":t=64;break;case"l":t=80;break;default:t=0}return t}}F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"info",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"status",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"color",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"size",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:Number,reflect:!0})],korProgressBar.prototype,"value",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korProgressBar.prototype,"radial",void 0),F_Documents_HACKS_KorUI_kor_ui_components_progress_bar_kor_progress_bar_decorate([(0,u.MZ)({type:Boolean,reflect:!0,attribute:"show-progress"})],korProgressBar.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",korProgressBar);var F_Documents_HACKS_KorUI_kor_ui_components_radio_button_kor_radio_button_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korRadioButton extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .circle {
          transition: var(--transition-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
        }
        :host([active]) .circle {
          border-color: transparent;
          border: 5px solid rgb(var(--accent-1));
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
          :host(:hover:not([active])) .circle {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return g.qy`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?g.qy` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var t;let p=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==p||p.forEach(t=>{t.active=!1}),this.active=!0}}F_Documents_HACKS_KorUI_kor_ui_components_radio_button_kor_radio_button_decorate([(0,u.MZ)({type:String,reflect:!0})],korRadioButton.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_radio_button_kor_radio_button_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korRadioButton.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_radio_button_kor_radio_button_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korRadioButton.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",korRadioButton);var F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korSlider extends g.WF{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[v.g,g.AH`
        .track {
          width: 100%;
          height: 2px;
          margin: var(--spacing-l) 0;
          background-color: rgba(var(--neutral-1), 0.2);
          position: relative;
        }
        .thumb {
          padding: 10px;
          position: absolute;
          top: -15px;
          margin-left: calc(var(--spacing-l) * -1);
          cursor: pointer;
        }
        .thumb > div {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgb(var(--accent-1));
          transition: 0.1s all ease-out;
        }
        .thumb:hover > div {
          background-color: rgb(var(--accent-1b));
        }
        /* input */
        input {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          background-color: rgba(var(--neutral-1), 0.05);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 4px;
          width: 40px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        .label {
          display: flex;
        }
        .label kor-text {
          flex: 1;
        }
        .label > * + * {
          margin-left: var(--spacing-s);
        }
      `]}render(){return g.qy`
      ${this.label?g.qy`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?g.qy`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${t=>this.handleInput(parseFloat(t.target.value))}"
                      @keypress="${t=>"Enter"===t.key?this.handleInput(parseFloat(t.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${t=>this.handleThumbDrag(t)}"
          @touchstart="${t=>this.handleThumbDrag(t)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"value"!==t&&"min"!==t&&"max"!==t||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(t){t>=this.min&&t<=this.max?this.value=t:t<this.min?this.value=this.min:t>this.max&&(this.value=this.max)}handleThumbPosition(){var t;const p=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".thumb"),g=(this.value-this.min)/(this.max-this.min)*100;p&&g>=0&&g<=100&&(p.style.left=g+"%")}handleThumbDrag(t){const p=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let g="mousedown"===t.type?t.clientX:t.touches[0].clientX;const getDeltaX=t=>{t.preventDefault();const u="mousemove"===t.type?t.clientX:t.touches[0].clientX,v=u-g;if(v>p||-1*v>p){const t=Math.floor(v<0?-1*v:v),f=Math.round(t/p),y=v>0?this.value+this.step*f:this.value-this.step*f;y<=this.max&&y>=this.min&&(this.value=y,g=u)}},removeListeners=()=>{window.removeEventListener("mousemove",getDeltaX),window.removeEventListener("touchmove",getDeltaX),window.removeEventListener("mouseup",removeListeners),window.removeEventListener("touchend",removeListeners)};window.addEventListener("mousemove",getDeltaX),window.addEventListener("touchmove",getDeltaX),window.addEventListener("mouseup",removeListeners),window.addEventListener("touchend",removeListeners)}}F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:String,reflect:!0})],korSlider.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:Number,reflect:!0})],korSlider.prototype,"value",void 0),F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:Number,reflect:!0})],korSlider.prototype,"min",void 0),F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:Number,reflect:!0})],korSlider.prototype,"max",void 0),F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:Number,reflect:!0})],korSlider.prototype,"step",void 0),F_Documents_HACKS_KorUI_kor_ui_components_slider_kor_slider_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korSlider.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",korSlider);var F_Documents_HACKS_KorUI_kor_ui_components_spinner_kor_spinner_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korSpinner extends g.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[v.g,g.AH`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: var(--spacing-s);
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return g.qy`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?g.qy` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}getSize(){let t;switch(this.size){case"s":t=24;break;case"m":t=32;break;case"l":t=40}return t}}F_Documents_HACKS_KorUI_kor_ui_components_spinner_kor_spinner_decorate([(0,u.MZ)({type:String,reflect:!0})],korSpinner.prototype,"size",void 0),F_Documents_HACKS_KorUI_kor_ui_components_spinner_kor_spinner_decorate([(0,u.MZ)({type:String,reflect:!0})],korSpinner.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",korSpinner);var F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korStepper extends g.WF{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return g.qy`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}handleItems(){let t,p;t=Array.prototype.slice.call(this.children),p=this.children.length,t.forEach(t=>{t.first=1==t.index,t.last=t.index==p})}}F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_decorate([(0,u.MZ)({type:String,reflect:!0})],korStepper.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",korStepper);var F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korStepperItem extends g.WF{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[v.g,g.AH`
        :host {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
        }
        .circle {
          height: 40px;
          width: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-s);
          border-radius: 50%;
          background-color: rgba(var(--neutral-1), 0.1);
          transition: var(--transition-1);
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-weight: bold;
        }
        .info {
          color: var(--text-2);
        }
        .label,
        .info {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        .number,
        kor-icon {
          color: var(--text-2);
        }
        /* line */
        .line {
          background-color: rgba(var(--neutral-1), 0.1);
          position: absolute;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          justify-content: center;
          flex-direction: column;
          padding: 0 var(--spacing-l);
        }
        :host([orientation='horizontal']) .label,
        :host([orientation='horizontal']) .info {
          text-align: center;
        }
        :host([orientation='horizontal']) .circle + .text {
          margin-top: var(--spacing-xs);
        }
        :host([orientation='horizontal']) .line {
          height: 2px;
          width: calc(50% - 28px);
          top: 19px;
        }
        :host([orientation='horizontal']) .line.before {
          left: 0px;
        }
        :host([orientation='horizontal']) .line.after {
          right: 0px;
        }
        /* vertical */
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: max-content;
          padding: var(--spacing-l) 0;
        }
        :host([orientation='vertical']) .label,
        :host([orientation='vertical']) .info {
          text-align: left;
        }
        :host([orientation='vertical']) .circle + .text {
          margin-left: var(--spacing-s);
        }
        :host([orientation='vertical']) .line {
          width: 2px;
          height: calc(50% - 28px);
          left: 19px;
        }
        :host([orientation='vertical']) .line.before {
          top: 0px;
        }
        :host([orientation='vertical']) .line.after {
          bottom: 0px;
        }
        /* active */
        :host([active]) .circle {
          background-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: var(--text-1);
        }
        :host([active]) .number,
        :host([active]) kor-icon {
          color: rgba(255, 255, 255, 0.9);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
        }
        :host([disabled]) .circle,
        :host([disabled]) .text {
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) .number,
          :host(:hover:not([active])) kor-icon {
            color: var(--text-1);
          }
          :host(:not([active]):not(:active):hover) .circle {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([active]:not(:active):hover) .circle {
            background-color: rgb(var(--accent-1b));
          }
        }
      `]}render(){return g.qy`
      <!-- circle -->
      <div class="circle">
        ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:g.qy`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?g.qy` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?g.qy` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":g.qy` <div class="line before"></div> `}
      ${this.last?"":g.qy` <div class="line after"></div> `}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach(t=>{t.active=!1}),this.active=!0})}getIndex(){var t;let p;p=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),this.index=p.indexOf(this)+1}}F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"info",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:Number,reflect:!0})],korStepperItem.prototype,"index",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"disabled",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"first",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"last",void 0),F_Documents_HACKS_KorUI_kor_ui_components_stepper_kor_stepper_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",korStepperItem);class korSwipeActions extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          overflow: auto;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
        }
        slot[name] {
          display: flex;
          transition: 0.1s opacity ease-out;
        }
        slot:not([name]) {
          min-width: 100%;
          display: block;
          scroll-snap-align: start;
        }
      `]}render(){return g.qy`
      <slot
        name="left"
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(t){t.assignedNodes().length>0?t.style.minWidth="100%":t.style.minWidth="unset"}handleTouchEnd(){const t=this.scrollLeft-this.clientWidth;t<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):t>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var t,p;const g=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="left"]'),u=null===(p=this.shadowRoot)||void 0===p?void 0:p.querySelector('slot[name="right"]'),v=this.scrollLeft-this.clientWidth;g&&(g.style.opacity=-1*v/this.clientWidth*3>1?1:.5),u&&(u.style.opacity=1*v/this.clientWidth*3>1?1:.5)}getSlotOpacity(t){const p="left"===t?-1:1,g=(this.scrollLeft-this.clientWidth)*p/this.clientWidth*3;return g>1?1:g<0?0:g}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",korSwipeActions);var F_Documents_HACKS_KorUI_kor_ui_components_swipe_actions_kor_swipe_action_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korSwipeAction extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([slot='left']) {
          justify-content: flex-start;
        }
        :host([slot='right']) {
          justify-content: flex-end;
        }
        kor-icon {
          position: sticky;
        }
        :host([slot='left']) kor-icon {
          left: var(--spacing-l);
        }
        :host([slot='right']) kor-icon {
          right: var(--spacing-l);
        }
      `]}render(){return g.qy` <kor-icon .icon="${this.icon}"></kor-icon> `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"bg-color"===t&&g!==p&&(this.style.backgroundColor=g)}connectedCallback(){super.connectedCallback()}}F_Documents_HACKS_KorUI_kor_ui_components_swipe_actions_kor_swipe_action_decorate([(0,u.MZ)({reflect:!0})],korSwipeAction.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_swipe_actions_kor_swipe_action_decorate([(0,u.MZ)({reflect:!0,attribute:"bg-color"})],korSwipeAction.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",korSwipeAction);class korSwitch extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return g.qy` <slot></slot> `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",korSwitch);var F_Documents_HACKS_KorUI_kor_ui_components_switch_kor_switch_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korSwitchItem extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          width: max-content;
          min-width: 40px;
          max-width: 120px;
          padding: var(--spacing-xs) var(--spacing-m);
          border-radius: var(--border-radius);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-1);
        }
        .label {
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: var(--text-2);
        }
        /* active */
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        :host([active]) {
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host([active]:hover) {
            background: rgba(var(--neutral-1), 0.15);
          }
        }
      `]}render(){return g.qy`
      ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?g.qy` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach(t=>{t.active=!1}),this.active=!0}}F_Documents_HACKS_KorUI_kor_ui_components_switch_kor_switch_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korSwitchItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_switch_kor_switch_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korSwitchItem.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_switch_kor_switch_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korSwitchItem.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_switch_kor_switch_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korSwitchItem.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",korSwitchItem);var F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTabItem extends g.WF{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-color: transparent;
          border-style: solid;
          color: var(--text-2);
        }
        .label {
          line-height: 24px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: unset;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: max-content;
          min-width: 72px;
          max-width: 240px;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0px var(--spacing-l);
          border-width: 0px 0px 2px 0px;
        }
        :host([orientation='horizontal']) .label {
          text-align: center;
        }
        /* vertical */
        :host([orientation='vertical']) .label {
          text-align: left;
        }
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          height: max-content;
          padding: var(--spacing-s) var(--spacing-s) var(--spacing-s)
            calc(var(--spacing-l) - 2px);
          border-width: 0px 0px 0px 2px;
        }
        :host([orientation='vertical']) {
          gap: var(--spacing-s);
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover) .label {
            color: var(--text-1);
          }
        }
      `]}render(){return g.qy`
      <slot>
        ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
        ${this.label?g.qy` <kor-text class="label">${this.label}</kor-text> `:""}
      </slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var t;(null===(t=this.closest("kor-tabs"))||void 0===t?void 0:t.querySelectorAll("kor-tab-item")).forEach(t=>{t.active=!1}),this.active=!0}}F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korTabItem.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korTabItem.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTabItem.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTabItem.prototype,"disabled",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tab_item_decorate([(0,u.MZ)({type:String,reflect:!0})],korTabItem.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",korTabItem);var F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTable extends g.WF{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"readonly",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"condensed",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_decorate([(0,u.MZ)({type:String,reflect:!0})],korTable.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",korTable);var F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTableRow extends g.WF{getAllSlottedContent(){return Array.from(this.slots).flatMap(t=>t.assignedElements({flatten:!0}))}static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy` <slot></slot> `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.addEventListener("mouseenter",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))")})}),this.addEventListener("mouseleave",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.handleColumns()}handleActive(){var t;let p,g;p=this.closest("kor-table"),(null==p?void 0:p.readonly)||"header"==this.slot||(g=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes,null==g||g.forEach(t=>{t.active=!1,"header"!=t.slot&&t.getAllSlottedContent&&t.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.active=!0,this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))")}))}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,null==t||t.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=t.columns})}}F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTableRow.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_row_decorate([(0,u.YG)("slot")],korTableRow.prototype,"slots",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",korTableRow);var F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTableCell extends g.WF{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?g.qy`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"grid-cols"==t?this.style.gridColumn="span "+this.gridCols:"sortable"==t&&this.sortable?(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()})):"sticky"==t?this.sticky?(this.style.position="sticky",this.style.backgroundColor="rgb(var(--base-3))",this.style.zIndex&&"0"!==this.style.zIndex||(this.style.zIndex="1")):(this.style.removeProperty("position"),this.style.removeProperty("background-color"),"1"===this.style.zIndex&&this.style.removeProperty("z-index")):"left"==t?this.style.left=g:"top"==t?this.style.top=g:"right"==t?this.style.right=g:"bottom"==t&&(this.style.bottom=g)}handleSort(){var t;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let p=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==p||p.forEach(t=>{t.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:Number,reflect:!0,attribute:"grid-cols"})],korTableCell.prototype,"gridCols",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0})],korTableCell.prototype,"alignment",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"head",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sorted",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sortable",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"sort-direction"})],korTableCell.prototype,"sortDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sticky",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0})],korTableCell.prototype,"left",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0})],korTableCell.prototype,"top",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0})],korTableCell.prototype,"right",void 0),F_Documents_HACKS_KorUI_kor_ui_components_table_kor_table_cell_decorate([(0,u.MZ)({type:String,reflect:!0})],korTableCell.prototype,"bottom",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",korTableCell);var F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tabs_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTabs extends g.WF{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
        :host([slot='header']) {
          margin-top: calc(var(--spacing-l) * -1);
        }
        :host(:not([orientation='vertical'])) {
          border-bottom: 1px solid rgba(var(--neutral-1), 0.1);
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return g.qy`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_tabs_kor_tabs_decorate([(0,u.MZ)({type:String,reflect:!0})],korTabs.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",korTabs);var F_Documents_HACKS_KorUI_kor_ui_components_tag_kor_tag_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTag extends g.WF{constructor(){super(...arguments),this.label="Label"}static get styles(){return[v.g,g.AH`
        :host {
          padding: var(--spacing-xs);
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 var(--spacing-xs);
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return g.qy`
      <!-- icon -->
      ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?g.qy` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?g.qy`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}F_Documents_HACKS_KorUI_kor_ui_components_tag_kor_tag_decorate([(0,u.MZ)({type:String,reflect:!0})],korTag.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tag_kor_tag_decorate([(0,u.MZ)({type:String,reflect:!0})],korTag.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tag_kor_tag_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTag.prototype,"button",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tag_kor_tag_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTag.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",korTag);__webpack_require__(9440);var F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTextarea extends g.WF{static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: var(--spacing-xs) var(--spacing-s)
            calc(var(--spacing-xs) - 1px) var(--spacing-s);
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        textarea {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        textarea {
          background: none;
          border: none;
          padding: 0px;
          outline: none;
          font: var(--body-1);
          color: var(--text-1);
          resize: none;
        }
        textarea::-webkit-scrollbar {
          display: none;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        textarea,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return g.qy`
      <div class="center">
        ${this.label?g.qy` <label class="label">${this.label}</label> `:""}
        <textarea
          .value="${void 0!==this.value?this.value:""}"
          .rows="${this.rows}"
          .columns="${this.rows}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          @focus="${()=>this.active=!0}"
          @blur="${()=>this.active=!1}"
          @input="${this.handleChange}"
        ></textarea>
      </div>
    `}constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var t,p;this.active=!0,null===(p=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("textarea"))||void 0===p||p.focus()})}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}}F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:String,reflect:!0})],korTextarea.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:String,reflect:!0})],korTextarea.prototype,"value",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:Number,reflect:!0})],korTextarea.prototype,"rows",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTextarea.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTextarea.prototype,"disabled",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTextarea.prototype,"readonly",void 0),F_Documents_HACKS_KorUI_kor_ui_components_textarea_kor_textarea_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTextarea.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",korTextarea);var F_Documents_HACKS_KorUI_kor_ui_components_toggle_kor_toggle_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korToggle extends g.WF{static get styles(){return[v.g,g.AH`
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
      `]}render(){return g.qy`
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
      ${this.label?g.qy` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}F_Documents_HACKS_KorUI_kor_ui_components_toggle_kor_toggle_decorate([(0,u.MZ)({type:String,reflect:!0})],korToggle.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_toggle_kor_toggle_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korToggle.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_toggle_kor_toggle_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korToggle.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",korToggle);var F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTool extends g.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[v.g,g.AH`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-radius: var(--border-radius);
        }
        .label {
          display: -webkit-box;
          width: 100%;
          line-height: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        /* size */
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return g.qy`
      ${this.icon?g.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":g.qy` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:String,reflect:!0})],korTool.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:String,reflect:!0})],korTool.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:String,reflect:!0})],korTool.prototype,"size",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTool.prototype,"toggle",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTool.prototype,"active",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tool_kor_tool_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTool.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",korTool);__webpack_require__(7736);var F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate=function(t,p,g,u){var v,f=arguments.length,y=f<3?p:null===u?u=Object.getOwnPropertyDescriptor(p,g):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(t,p,g,u);else for(var m=t.length-1;m>=0;m--)(v=t[m])&&(y=(f<3?v(y):f>3?v(p,g,y):v(p,g))||y);return f>3&&y&&Object.defineProperty(p,g,y),y};class korTooltip extends g.WF{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[v.g,g.AH`
        :host {
          position: fixed;
          z-index: 4;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        kor-popover {
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return g.qy`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(t,p,g){super.attributeChangedCallback(t,p,g),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target&&this.targetObserver()}targetObserver(){let t;const p="string"==typeof this.target?document.querySelector(this.target):this.target;p&&(p.addEventListener("mouseover",()=>{t=setTimeout(()=>this.visible=!0,500)}),p.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(t)}))}}F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:String,reflect:!0})],korTooltip.prototype,"label",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:String,reflect:!0})],korTooltip.prototype,"icon",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korTooltip.prototype,"flexDirection",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:String,reflect:!0})],korTooltip.prototype,"position",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:String,reflect:!0})],korTooltip.prototype,"target",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.MZ)({type:Boolean,reflect:!0})],korTooltip.prototype,"visible",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.wk)()],korTooltip.prototype,"emptyHeader",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.wk)()],korTooltip.prototype,"emptyFunctions",void 0),F_Documents_HACKS_KorUI_kor_ui_components_tooltip_kor_tooltip_decorate([(0,u.wk)()],korTooltip.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",korTooltip)})();