import*as t from"lit";var e={2730(t,e,o){o(1098)},1098(t,e,o){var r=o(2927),a=o(5707),c=o(4399),__decorate=function(t,e,o,r){var a,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(c<3?a(s):c>3?a(e,o,s):a(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};class korIcon extends r.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[c.g,r.css`
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
      `]}render(){var t;return r.html` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?r.html` ${this.icon} `:""}`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`)),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&o.indexOf("url")>-1&&this.setBackgroundImage(o)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},5744(t,e,o){o(9574)},9574(t,e,o){var r=o(2927),a=o(5707),c=o(4399),__decorate=function(t,e,o,r){var a,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(c<3?a(s):c>3?a(e,o,s):a(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};class korText extends r.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[c.g,r.css`
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
      `]}render(){return r.html`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`)),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(t,e,o){o.d(e,{g:()=>r});const r=o(2927).css`
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
`},2927(e,o,r){e.exports=(t=>{var e={};return r.d(e,t),e})({LitElement:()=>t.LitElement,css:()=>t.css,html:()=>t.html})},5694(t,e,o){o.d(e,{M:()=>n});const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):i(t,e)}},1124(){var t;null===(t=window.HTMLSlotElement)||void 0===t||t.prototype.assignedElements},9896(t,e,o){o(1124)},5707(t,e,o){o.d(e,{MZ:()=>r.M});var r=o(5694);o(1124),o(9896)}},o={};function __webpack_require__(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(t,e)=>{for(var o in e)__webpack_require__.o(e,o)&&!__webpack_require__.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r=__webpack_require__(2927),a=__webpack_require__(5707),c=__webpack_require__(4399),s=(__webpack_require__(2730),__webpack_require__(5744),function(t,e,o,r){var a,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(c<3?a(s):c>3?a(e,o,s):a(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s});class korTabItem extends r.LitElement{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[c.g,r.css`
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
      `]}render(){return r.html`
      <slot>
        ${this.icon?r.html` <kor-icon icon="${this.icon}"></kor-icon> `:""}
        ${this.label?r.html` <kor-text class="label">${this.label}</kor-text> `:""}
      </slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var t;(null===(t=this.closest("kor-tabs"))||void 0===t?void 0:t.querySelectorAll("kor-tab-item")).forEach(t=>{t.active=!1}),this.active=!0}}s([(0,a.MZ)({type:String,reflect:!0})],korTabItem.prototype,"label",void 0),s([(0,a.MZ)({type:String,reflect:!0})],korTabItem.prototype,"icon",void 0),s([(0,a.MZ)({type:Boolean,reflect:!0})],korTabItem.prototype,"active",void 0),s([(0,a.MZ)({type:Boolean,reflect:!0})],korTabItem.prototype,"disabled",void 0),s([(0,a.MZ)({type:String,reflect:!0})],korTabItem.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",korTabItem);var kor_tabs_decorate=function(t,e,o,r){var a,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(c<3?a(s):c>3?a(e,o,s):a(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};class korTabs extends r.LitElement{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[c.g,r.css`
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
      `]}render(){return r.html`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}}kor_tabs_decorate([(0,a.MZ)({type:String,reflect:!0})],korTabs.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",korTabs);export{korTabItem,korTabs};