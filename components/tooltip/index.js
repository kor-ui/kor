import*as e from"lit";var o={1869(e,o,r){r(3664)},3664(e,o,r){var s=r(2927),a=r(5707),l=r(4399),p=(r(2730),function(e,o,r,s){var a,l=arguments.length,p=l<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,r,s);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(p=(l<3?a(p):l>3?a(o,r,p):a(o,r))||p);return l>3&&p&&Object.defineProperty(o,r,p),p});class korCard extends s.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l.g,s.css`
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
      `]}render(){return s.html`
      ${this.image?s.html` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?s.html`
                <div class="label">
                  ${this.icon?s.html` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":s.html` <div style="margin-top: var(--spacing-l)"></div> `}
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
    `}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`))}}p([(0,a.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),p([(0,a.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),p([(0,a.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),p([(0,a.wk)()],korCard.prototype,"emptyHeader",void 0),p([(0,a.wk)()],korCard.prototype,"emptyFunctions",void 0),p([(0,a.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},2730(e,o,r){r(1098)},1098(e,o,r){var s=r(2927),a=r(5707),l=r(4399),__decorate=function(e,o,r,s){var a,l=arguments.length,p=l<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,r,s);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(p=(l<3?a(p):l>3?a(o,r,p):a(o,r))||p);return l>3&&p&&Object.defineProperty(o,r,p),p};class korIcon extends s.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[l.g,s.css`
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
      `]}render(){var e;return s.html` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?s.html` ${this.icon} `:""}`}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&r.indexOf("url")>-1&&this.setBackgroundImage(r)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},796(e,o,r){r(8928)},8928(e,o,r){var s=r(2927),a=r(5707),l=r(4399),p=(r(1869),function(e,o,r,s){var a,l=arguments.length,p=l<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,r,s);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(p=(l<3?a(p):l>3?a(o,r,p):a(o,r))||p);return l>3&&p&&Object.defineProperty(o,r,p),p});class korPopover extends s.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l.g,s.css`
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
      `]}render(){return s.html`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        @wheel="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&(this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e))}handlePosition(e){if(!e)return;let o=this,r=e.getBoundingClientRect();if(o.visible=!0,o.position.startsWith("bottom"))o.style.top=`${r.top+r.height+8}px`;else if(o.position.startsWith("top"))o.style.top=r.top-o.clientHeight-8+"px";else{o.style.top=r.top+r.height/2-o.clientHeight/2+"px",parseInt(o.style.top)<0&&(o.style.top="8px");const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(o.style.top)+o.clientHeight>e&&(o.style.top=e-o.clientHeight-8+"px")}o.position.startsWith("right")?o.style.left=`${r.left+r.width+8}px`:o.position.startsWith("left")?o.style.left=r.left-o.clientWidth-8+"px":o.style.left=r.left+r.width/2-o.clientWidth/2+"px"}addDocListener(e){let closePopover=o=>{(o.composedPath()[0]!==e&&o.target!==e&&"click"===o.type||"wheel"===o.type)&&(this.visible=!1,document.removeEventListener("click",closePopover),document.removeEventListener("wheel",closePopover))};document.addEventListener("click",closePopover),document.addEventListener("wheel",closePopover)}}p([(0,a.MZ)({type:String,reflect:!0})],korPopover.prototype,"label",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korPopover.prototype,"icon",void 0),p([(0,a.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korPopover.prototype,"flexDirection",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korPopover.prototype,"position",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korPopover.prototype,"target",void 0),p([(0,a.MZ)({type:Boolean,reflect:!0})],korPopover.prototype,"visible",void 0),p([(0,a.MZ)({type:Boolean,reflect:!0})],korPopover.prototype,"sticky",void 0),p([(0,a.wk)()],korPopover.prototype,"emptyHeader",void 0),p([(0,a.wk)()],korPopover.prototype,"emptyFunctions",void 0),p([(0,a.wk)()],korPopover.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",korPopover)},4399(e,o,r){r.d(o,{g:()=>s});const s=r(2927).css`
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
`},2927(o,r,s){o.exports=(e=>{var o={};return s.d(o,e),o})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,o,r){r.d(o,{M:()=>n});const i=(e,o)=>"method"===o.kind&&o.descriptor&&!("value"in o.descriptor)?{...o,finisher(r){r.createProperty(o.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:o.key,initializer(){"function"==typeof o.initializer&&(this[o.key]=o.initializer.call(this))},finisher(r){r.createProperty(o.key,e)}};function n(e){return(o,r)=>void 0!==r?((e,o,r)=>{o.constructor.createProperty(r,e)})(e,o,r):i(e,o)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,o,r){r(1124)},4290(e,o,r){r.d(o,{w:()=>t});var s=r(5694);function t(e){return(0,s.M)({...e,state:!0})}},5707(e,o,r){r.d(o,{MZ:()=>s.M,wk:()=>a.w});var s=r(5694),a=r(4290);r(1124),r(9896)}},r={};function __webpack_require__(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,o)=>{for(var r in o)__webpack_require__.o(o,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},__webpack_require__.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var s=__webpack_require__(2927),a=__webpack_require__(5707),l=__webpack_require__(4399),p=(__webpack_require__(796),function(e,o,r,s){var a,l=arguments.length,p=l<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,r,s);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(p=(l<3?a(p):l>3?a(o,r,p):a(o,r))||p);return l>3&&p&&Object.defineProperty(o,r,p),p});class korTooltip extends s.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l.g,s.css`
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
      `]}render(){return s.html`
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
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e;const o="string"==typeof this.target?document.querySelector(this.target):this.target;o&&(o.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),o.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}}p([(0,a.MZ)({type:String,reflect:!0})],korTooltip.prototype,"label",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korTooltip.prototype,"icon",void 0),p([(0,a.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korTooltip.prototype,"flexDirection",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korTooltip.prototype,"position",void 0),p([(0,a.MZ)({type:String,reflect:!0})],korTooltip.prototype,"target",void 0),p([(0,a.MZ)({type:Boolean,reflect:!0})],korTooltip.prototype,"visible",void 0),p([(0,a.wk)()],korTooltip.prototype,"emptyHeader",void 0),p([(0,a.wk)()],korTooltip.prototype,"emptyFunctions",void 0),p([(0,a.wk)()],korTooltip.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",korTooltip);export{korTooltip};