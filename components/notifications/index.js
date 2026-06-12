(()=>{"use strict";var e={1869(e,r,l){l(3664)},3664(e,r,l){var c=l(6161),h=l(5707),p=l(4399),g=(l(2730),function(e,r,l,c){var h,p=arguments.length,g=p<3?r:null===c?c=Object.getOwnPropertyDescriptor(r,l):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(e,r,l,c);else for(var f=e.length-1;f>=0;f--)(h=e[f])&&(g=(p<3?h(g):p>3?h(r,l,g):h(r,l))||g);return p>3&&g&&Object.defineProperty(r,l,g),g});class korCard extends c.WF{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[p.g,c.AH`
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
      `]}render(){return c.qy`
      ${this.image?c.qy` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?c.qy`
                <div class="label">
                  ${this.icon?c.qy` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":c.qy` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(e,r,l){super.attributeChangedCallback(e,r,l),this.dispatchEvent(new Event(`${e}-changed`))}}g([(0,h.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),g([(0,h.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),g([(0,h.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),g([(0,h.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),g([(0,h.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),g([(0,h.wk)()],korCard.prototype,"emptyHeader",void 0),g([(0,h.wk)()],korCard.prototype,"emptyFunctions",void 0),g([(0,h.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},2730(e,r,l){l(1098)},1098(e,r,l){var c=l(6161),h=l(5707),p=l(4399),__decorate=function(e,r,l,c){var h,p=arguments.length,g=p<3?r:null===c?c=Object.getOwnPropertyDescriptor(r,l):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(e,r,l,c);else for(var f=e.length-1;f>=0;f--)(h=e[f])&&(g=(p<3?h(g):p>3?h(r,l,g):h(r,l))||g);return p>3&&g&&Object.defineProperty(r,l,g),g};class korIcon extends c.WF{constructor(){super(...arguments),this.size="m"}static get styles(){return[p.g,c.AH`
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
      `]}render(){var e;return c.qy` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?c.qy` ${this.icon} `:""}`}attributeChangedCallback(e,r,l){super.attributeChangedCallback(e,r,l),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&l.indexOf("url")>-1&&this.setBackgroundImage(l)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,h.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,h.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,h.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,h.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,h.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},4399(e,r,l){l.d(r,{g:()=>c});const c=l(6161).AH`
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
`},3826(e,r,l){l.d(r,{AH:()=>i,Rf:()=>S,sk:()=>f});const c=window,h=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),g=new WeakMap;class o{constructor(e,r,l){if(this._$cssResult$=!0,l!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(h&&void 0===e){const l=void 0!==r&&1===r.length;l&&(e=g.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),l&&g.set(r,e))}return e}toString(){return this.cssText}}const i=(e,...r)=>{const l=1===e.length?e[0]:r.reduce((r,l,c)=>r+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+e[c+1],e[0]);return new o(l,e,p)},S=(e,r)=>{h?e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):r.forEach(r=>{const l=document.createElement("style"),h=c.litNonce;void 0!==h&&l.setAttribute("nonce",h),l.textContent=r.cssText,e.appendChild(l)})},f=h?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let r="";for(const l of e.cssRules)r+=l.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,p))(r)})(e):e},5694(e,r,l){l.d(r,{M:()=>n});const i=(e,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(l){l.createProperty(r.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(l){l.createProperty(r.key,e)}};function n(e){return(r,l)=>void 0!==l?((e,r,l)=>{r.constructor.createProperty(l,e)})(e,r,l):i(e,r)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,r,l){l(1124)},4290(e,r,l){l.d(r,{w:()=>t});var c=l(5694);function t(e){return(0,c.M)({...e,state:!0})}},8760(e,r,l){l.d(r,{AH:()=>h.AH,mN:()=>u});var c,h=l(3826);const p=window,g=p.trustedTypes,f=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,y={toAttribute(e,r){switch(r){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,r){let l=e;switch(r){case Boolean:l=null!==e;break;case Number:l=null===e?null:Number(e);break;case Object:case Array:try{l=JSON.parse(e)}catch(e){l=null}}return l}},a=(e,r)=>r!==e&&(r==r||e==e),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:a},$="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var r;this.finalize(),(null!==(r=this.h)&&void 0!==r?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,l)=>{const c=this._$Ep(l,r);void 0!==c&&(this._$Ev.set(c,l),e.push(c))}),e}static createProperty(e,r=_){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const l="symbol"==typeof e?Symbol():"__"+e,c=this.getPropertyDescriptor(e,l,r);void 0!==c&&Object.defineProperty(this.prototype,e,c)}}static getPropertyDescriptor(e,r,l){return{get(){return this[r]},set(c){const h=this[e];this[r]=c,this.requestUpdate(e,h,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const l of r)this.createProperty(l,e[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const l=new Set(e.flat(1/0).reverse());for(const e of l)r.unshift((0,h.sk)(e))}else void 0!==e&&r.push((0,h.sk)(e));return r}static _$Ep(e,r){const l=r.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var r,l;(null!==(r=this._$ES)&&void 0!==r?r:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(l=e.hostConnected)||void 0===l||l.call(e))}removeController(e){var r;null===(r=this._$ES)||void 0===r||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return(0,h.Rf)(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var r;return null===(r=e.hostConnected)||void 0===r?void 0:r.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var r;return null===(r=e.hostDisconnected)||void 0===r?void 0:r.call(e)})}attributeChangedCallback(e,r,l){this._$AK(e,l)}_$EO(e,r,l=_){var c;const h=this.constructor._$Ep(e,l);if(void 0!==h&&!0===l.reflect){const p=(void 0!==(null===(c=l.converter)||void 0===c?void 0:c.toAttribute)?l.converter:y).toAttribute(r,l.type);this._$El=e,null==p?this.removeAttribute(h):this.setAttribute(h,p),this._$El=null}}_$AK(e,r){var l;const c=this.constructor,h=c._$Ev.get(e);if(void 0!==h&&this._$El!==h){const e=c.getPropertyOptions(h),p="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(l=e.converter)||void 0===l?void 0:l.fromAttribute)?e.converter:y;this._$El=h,this[h]=p.fromAttribute(r,e.type),this._$El=null}}requestUpdate(e,r,l){let c=!0;void 0!==e&&(((l=l||this.constructor.getPropertyOptions(e)).hasChanged||a)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),!0===l.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,l))):c=!1),!this.isUpdatePending&&c&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,r)=>this[r]=e),this._$Ei=void 0);let r=!1;const l=this._$AL;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var r;return null===(r=e.hostUpdate)||void 0===r?void 0:r.call(e)}),this.update(l)):this._$Ek()}catch(e){throw r=!1,this._$Ek(),e}r&&this._$AE(l)}willUpdate(e){}_$AE(e){var r;null===(r=this._$ES)||void 0===r||r.forEach(e=>{var r;return null===(r=e.hostUpdated)||void 0===r?void 0:r.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}u[$]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:u}),(null!==(c=p.reactiveElementVersions)&&void 0!==c?c:p.reactiveElementVersions=[]).push("1.6.3")},5228(e,r,l){l.d(r,{AH:()=>p.AH,WF:()=>s,qy:()=>g.qy});var c,h,p=l(8760),g=l(6752);class s extends p.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const l=super.createRenderRoot();return null!==(e=(r=this.renderOptions).renderBefore)&&void 0!==e||(r.renderBefore=l.firstChild),l}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,g.XX)(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return g.c0}}s.finalized=!0,s._$litElement$=!0,null===(c=globalThis.litElementHydrateSupport)||void 0===c||c.call(globalThis,{LitElement:s});const f=globalThis.litElementPolyfillSupport;null==f||f({LitElement:s});(null!==(h=globalThis.litElementVersions)&&void 0!==h?h:globalThis.litElementVersions=[]).push("3.3.3")},6752(e,r,l){var c;l.d(r,{XX:()=>D,c0:()=>q,qy:()=>j});const h=window,p=h.trustedTypes,g=p?p.createPolicy("lit-html",{createHTML:e=>e}):void 0,f="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,_=`<${y}>`,$=document,u=()=>$.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,b=Array.isArray,v=e=>b(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),A="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,C=/>/g,O=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,I=/"/g,T=/^(?:script|style|textarea|title)$/i,w=e=>(r,...l)=>({_$litType$:e,strings:r,values:l}),j=w(1),q=(w(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),B=new WeakMap,W=$.createTreeWalker($,129,null,!1);function P(e,r){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(r):r}const V=(e,r)=>{const l=e.length-1,c=[];let h,p=2===r?"<svg>":"",g=x;for(let r=0;r<l;r++){const l=e[r];let y,$,b=-1,A=0;for(;A<l.length&&(g.lastIndex=A,$=g.exec(l),null!==$);)A=g.lastIndex,g===x?"!--"===$[1]?g=E:void 0!==$[1]?g=C:void 0!==$[2]?(T.test($[2])&&(h=RegExp("</"+$[2],"g")),g=O):void 0!==$[3]&&(g=O):g===O?">"===$[0]?(g=null!=h?h:x,b=-1):void 0===$[1]?b=-2:(b=g.lastIndex-$[2].length,y=$[1],g=void 0===$[3]?O:'"'===$[3]?I:U):g===I||g===U?g=O:g===E||g===C?g=x:(g=O,h=void 0);const j=g===O&&e[r+1].startsWith("/>")?" ":"";p+=g===x?l+_:b>=0?(c.push(y),l.slice(0,b)+f+l.slice(b)+m+j):l+m+(-2===b?(c.push(void 0),r):j)}return[P(e,p+(e[l]||"<?>")+(2===r?"</svg>":"")),c]};class N{constructor({strings:e,_$litType$:r},l){let c;this.parts=[];let h=0,g=0;const _=e.length-1,$=this.parts,[b,A]=V(e,r);if(this.el=N.createElement(b,l),W.currentNode=this.el.content,2===r){const e=this.el.content,r=e.firstChild;r.remove(),e.append(...r.childNodes)}for(;null!==(c=W.nextNode())&&$.length<_;){if(1===c.nodeType){if(c.hasAttributes()){const e=[];for(const r of c.getAttributeNames())if(r.endsWith(f)||r.startsWith(m)){const l=A[g++];if(e.push(r),void 0!==l){const e=c.getAttribute(l.toLowerCase()+f).split(m),r=/([.?@])?(.*)/.exec(l);$.push({type:1,index:h,name:r[2],strings:e,ctor:"."===r[1]?H:"?"===r[1]?L:"@"===r[1]?z:k})}else $.push({type:6,index:h})}for(const r of e)c.removeAttribute(r)}if(T.test(c.tagName)){const e=c.textContent.split(m),r=e.length-1;if(r>0){c.textContent=p?p.emptyScript:"";for(let l=0;l<r;l++)c.append(e[l],u()),W.nextNode(),$.push({type:2,index:++h});c.append(e[r],u())}}}else if(8===c.nodeType)if(c.data===y)$.push({type:2,index:h});else{let e=-1;for(;-1!==(e=c.data.indexOf(m,e+1));)$.push({type:7,index:h}),e+=m.length-1}h++}}static createElement(e,r){const l=$.createElement("template");return l.innerHTML=e,l}}function S(e,r,l=e,c){var h,p,g,f;if(r===q)return r;let m=void 0!==c?null===(h=l._$Co)||void 0===h?void 0:h[c]:l._$Cl;const y=d(r)?void 0:r._$litDirective$;return(null==m?void 0:m.constructor)!==y&&(null===(p=null==m?void 0:m._$AO)||void 0===p||p.call(m,!1),void 0===y?m=void 0:(m=new y(e),m._$AT(e,l,c)),void 0!==c?(null!==(g=(f=l)._$Co)&&void 0!==g?g:f._$Co=[])[c]=m:l._$Cl=m),void 0!==m&&(r=S(e,m._$AS(e,r.values),m,c)),r}class M{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:l},parts:c}=this._$AD,h=(null!==(r=null==e?void 0:e.creationScope)&&void 0!==r?r:$).importNode(l,!0);W.currentNode=h;let p=W.nextNode(),g=0,f=0,m=c[0];for(;void 0!==m;){if(g===m.index){let r;2===m.type?r=new R(p,p.nextSibling,this,e):1===m.type?r=new m.ctor(p,m.name,m.strings,this,e):6===m.type&&(r=new Z(p,this,e)),this._$AV.push(r),m=c[++f]}g!==(null==m?void 0:m.index)&&(p=W.nextNode(),g++)}return W.currentNode=$,h}v(e){let r=0;for(const l of this._$AV)void 0!==l&&(void 0!==l.strings?(l._$AI(e,l,r),r+=l.strings.length-2):l._$AI(e[r])),r++}}class R{constructor(e,r,l,c){var h;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=l,this.options=c,this._$Cp=null===(h=null==c?void 0:c.isConnected)||void 0===h||h}get _$AU(){var e,r;return null!==(r=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==r?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===(null==e?void 0:e.nodeType)&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=S(this,e,r),d(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):v(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$($.createTextNode(e)),this._$AH=e}g(e){var r;const{values:l,_$litType$:c}=e,h="number"==typeof c?this._$AC(e):(void 0===c.el&&(c.el=N.createElement(P(c.h,c.h[0]),this.options)),c);if((null===(r=this._$AH)||void 0===r?void 0:r._$AD)===h)this._$AH.v(l);else{const e=new M(h,this),r=e.u(this.options);e.v(l),this.$(r),this._$AH=e}}_$AC(e){let r=B.get(e.strings);return void 0===r&&B.set(e.strings,r=new N(e)),r}T(e){b(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let l,c=0;for(const h of e)c===r.length?r.push(l=new R(this.k(u()),this.k(u()),this,this.options)):l=r[c],l._$AI(h),c++;c<r.length&&(this._$AR(l&&l._$AB.nextSibling,c),r.length=c)}_$AR(e=this._$AA.nextSibling,r){var l;for(null===(l=this._$AP)||void 0===l||l.call(this,!1,!0,r);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var r;void 0===this._$AM&&(this._$Cp=e,null===(r=this._$AP)||void 0===r||r.call(this,e))}}class k{constructor(e,r,l,c,h){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=r,this._$AM=c,this.options=h,l.length>2||""!==l[0]||""!==l[1]?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,l,c){const h=this.strings;let p=!1;if(void 0===h)e=S(this,e,r,0),p=!d(e)||e!==this._$AH&&e!==q,p&&(this._$AH=e);else{const c=e;let g,f;for(e=h[0],g=0;g<h.length-1;g++)f=S(this,c[l+g],r,g),f===q&&(f=this._$AH[g]),p||(p=!d(f)||f!==this._$AH[g]),f===F?e=F:e!==F&&(e+=(null!=f?f:"")+h[g+1]),this._$AH[g]=f}p&&!c&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}const X=p?p.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(e){e&&e!==F?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class z extends k{constructor(e,r,l,c,h){super(e,r,l,c,h),this.type=5}_$AI(e,r=this){var l;if((e=null!==(l=S(this,e,r,0))&&void 0!==l?l:F)===q)return;const c=this._$AH,h=e===F&&c!==F||e.capture!==c.capture||e.once!==c.once||e.passive!==c.passive,p=e!==F&&(c===F||h);h&&this.element.removeEventListener(this.name,this,c),p&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,l;"function"==typeof this._$AH?this._$AH.call(null!==(l=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==l?l:this.element,e):this._$AH.handleEvent(e)}}class Z{constructor(e,r,l){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const K=h.litHtmlPolyfillSupport;null==K||K(N,R),(null!==(c=h.litHtmlVersions)&&void 0!==c?c:h.litHtmlVersions=[]).push("2.8.0");const D=(e,r,l)=>{var c,h;const p=null!==(c=null==l?void 0:l.renderBefore)&&void 0!==c?c:r;let g=p._$litPart$;if(void 0===g){const e=null!==(h=null==l?void 0:l.renderBefore)&&void 0!==h?h:null;p._$litPart$=g=new R(r.insertBefore(u(),e),e,void 0,null!=l?l:{})}return g._$AI(e),g}},5707(e,r,l){l.d(r,{MZ:()=>c.M,wk:()=>h.w});var c=l(5694),h=l(4290);l(1124),l(9896)},6161(e,r,l){l.d(r,{AH:()=>c.AH,WF:()=>c.WF,qy:()=>c.qy});l(8760),l(6752);var c=l(5228)}},r={};function __webpack_require__(l){var c=r[l];if(void 0!==c)return c.exports;var h=r[l]={exports:{}};return e[l](h,h.exports,__webpack_require__),h.exports}__webpack_require__.d=(e,r)=>{for(var l in r)__webpack_require__.o(r,l)&&!__webpack_require__.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var l=__webpack_require__(6161),c=__webpack_require__(5707),h=__webpack_require__(4399),p=(__webpack_require__(1869),__webpack_require__(2730),function(e,r,l,c){var h,p=arguments.length,g=p<3?r:null===c?c=Object.getOwnPropertyDescriptor(r,l):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(e,r,l,c);else for(var f=e.length-1;f>=0;f--)(h=e[f])&&(g=(p<3?h(g):p>3?h(r,l,g):h(r,l))||g);return p>3&&g&&Object.defineProperty(r,l,g),g});class korNotificationItem extends l.WF{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[h.g,l.AH`
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
      `]}render(){return l.qy`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":l.qy`
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
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,r,l){super.attributeChangedCallback(e,r,l),this.dispatchEvent(new Event(`${e}-changed`))}}p([(0,c.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"label",void 0),p([(0,c.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"icon",void 0),p([(0,c.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korNotificationItem.prototype,"flexDirection",void 0),p([(0,c.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"visible",void 0),p([(0,c.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"sticky",void 0),p([(0,c.wk)()],korNotificationItem.prototype,"emptyHeader",void 0),p([(0,c.wk)()],korNotificationItem.prototype,"emptyFunctions",void 0),p([(0,c.wk)()],korNotificationItem.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",korNotificationItem);var kor_notifications_decorate=function(e,r,l,c){var h,p=arguments.length,g=p<3?r:null===c?c=Object.getOwnPropertyDescriptor(r,l):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(e,r,l,c);else for(var f=e.length-1;f>=0;f--)(h=e[f])&&(g=(p<3?h(g):p>3?h(r,l,g):h(r,l))||g);return p>3&&g&&Object.defineProperty(r,l,g),g};class korNotifications extends l.WF{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[h.g,l.AH`
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
      `]}render(){return l.qy`<slot></slot>`}attributeChangedCallback(e,r,l){super.attributeChangedCallback(e,r,l),this.dispatchEvent(new Event(`${e}-changed`))}}kor_notifications_decorate([(0,c.MZ)({type:String,reflect:!0})],korNotifications.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",korNotifications)})();