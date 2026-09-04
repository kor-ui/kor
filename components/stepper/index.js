import*as t from"lit";var e={2730(t,e,o){o(1098)},1098(t,e,o){var r=o(2927),a=o(5707),l=o(4399),__decorate=function(t,e,o,r){var a,l=arguments.length,c=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(c=(l<3?a(c):l>3?a(e,o,c):a(e,o))||c);return l>3&&c&&Object.defineProperty(e,o,c),c};class korIcon extends r.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[l.g,r.css`
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
      `]}render(){var t;return r.html` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?r.html` ${this.icon} `:""}`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`)),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&o.indexOf("url")>-1&&this.setBackgroundImage(o)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},5744(t,e,o){o(9574)},9574(t,e,o){var r=o(2927),a=o(5707),l=o(4399),__decorate=function(t,e,o,r){var a,l=arguments.length,c=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(c=(l<3?a(c):l>3?a(e,o,c):a(e,o))||c);return l>3&&c&&Object.defineProperty(e,o,c),c};class korText extends r.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[l.g,r.css`
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
`},2927(e,o,r){e.exports=(t=>{var e={};return r.d(e,t),e})({LitElement:()=>t.LitElement,css:()=>t.css,html:()=>t.html})},5694(t,e,o){o.d(e,{M:()=>n});const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):i(t,e)}},1124(){var t;null===(t=window.HTMLSlotElement)||void 0===t||t.prototype.assignedElements},9896(t,e,o){o(1124)},5707(t,e,o){o.d(e,{MZ:()=>r.M});var r=o(5694);o(1124),o(9896)}},o={};function __webpack_require__(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(t,e)=>{for(var o in e)__webpack_require__.o(e,o)&&!__webpack_require__.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r=__webpack_require__(2927),a=__webpack_require__(5707),l=__webpack_require__(4399),c=(__webpack_require__(2730),__webpack_require__(5744),function(t,e,o,r){var a,l=arguments.length,c=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(c=(l<3?a(c):l>3?a(e,o,c):a(e,o))||c);return l>3&&c&&Object.defineProperty(e,o,c),c});class korStepperItem extends r.LitElement{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l.g,r.css`
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
      `]}render(){return r.html`
      <!-- circle -->
      <div class="circle">
        ${this.icon?r.html` <kor-icon icon="${this.icon}"></kor-icon> `:r.html`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?r.html` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?r.html` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":r.html` <div class="line before"></div> `}
      ${this.last?"":r.html` <div class="line after"></div> `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach(t=>{t.active=!1}),this.active=!0})}getIndex(){var t;let e;e=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),this.index=e.indexOf(this)+1}}c([(0,a.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"label",void 0),c([(0,a.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"info",void 0),c([(0,a.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"icon",void 0),c([(0,a.MZ)({type:Number,reflect:!0})],korStepperItem.prototype,"index",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"active",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"disabled",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"first",void 0),c([(0,a.MZ)({type:Boolean,reflect:!0})],korStepperItem.prototype,"last",void 0),c([(0,a.MZ)({type:String,reflect:!0})],korStepperItem.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",korStepperItem);var kor_stepper_decorate=function(t,e,o,r){var a,l=arguments.length,c=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(c=(l<3?a(c):l>3?a(e,o,c):a(e,o))||c);return l>3&&c&&Object.defineProperty(e,o,c),c};class korStepper extends r.LitElement{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l.g,r.css`
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
      `]}render(){return r.html`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}handleItems(){let t,e;t=Array.prototype.slice.call(this.children),e=this.children.length,t.forEach(t=>{t.first=1==t.index,t.last=t.index==e})}}kor_stepper_decorate([(0,a.MZ)({type:String,reflect:!0})],korStepper.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",korStepper);export{korStepper,korStepperItem};