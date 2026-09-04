import*as e from"lit";var t={2730(e,t,r){r(1098)},1098(e,t,r){var o=r(2927),a=r(5707),s=r(4399),__decorate=function(e,t,r,o){var a,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(s<3?a(c):s>3?a(t,r,c):a(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};class korIcon extends o.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.g,o.css`
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
      `]}render(){var e;return o.html` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?o.html` ${this.icon} `:""}`}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&r.indexOf("url")>-1&&this.setBackgroundImage(r)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},5744(e,t,r){r(9574)},9574(e,t,r){var o=r(2927),a=r(5707),s=r(4399),__decorate=function(e,t,r,o){var a,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(s<3?a(c):s>3?a(t,r,c):a(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};class korText extends o.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[s.g,o.css`
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
      `]}render(){return o.html`<slot></slot>`}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color&&(this.style.color=this.color)}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(e,t,r){r.d(t,{g:()=>o});const o=r(2927).css`
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
`},2927(t,r,o){t.exports=(e=>{var t={};return o.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,r){r.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,r){r(1124)},5707(e,t,r){r.d(t,{MZ:()=>o.M});var o=r(5694);r(1124),r(9896)}},r={};function __webpack_require__(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o=__webpack_require__(2927),a=__webpack_require__(5707),s=__webpack_require__(4399),c=(__webpack_require__(2730),__webpack_require__(5744),function(e,t,r,o){var a,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(s<3?a(c):s>3?a(t,r,c):a(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c});class korMenuItem extends o.LitElement{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[s.g,o.css`
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
      `]}render(){return o.html`
      ${this.icon?o.html` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?o.html` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}c([(0,a.MZ)({type:String,reflect:!0})],korMenuItem.prototype,"label",void 0),c([(0,a.MZ)({type:String,reflect:!0})],korMenuItem.prototype,"icon",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"active",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"toggle",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korMenuItem.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",korMenuItem);export{korMenuItem};