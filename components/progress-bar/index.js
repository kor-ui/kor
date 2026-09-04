import*as e from"lit";var t={2730(e,t,r){r(1098)},1098(e,t,r){var o=r(2927),s=r(5707),a=r(4399),__decorate=function(e,t,r,o){var s,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(c=(a<3?s(c):a>3?s(t,r,c):s(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};class korIcon extends o.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[a.g,o.css`
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
      `]}render(){var e;return o.html` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?o.html` ${this.icon} `:""}`}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&r.indexOf("url")>-1&&this.setBackgroundImage(r)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,s.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,s.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},5744(e,t,r){r(9574)},9574(e,t,r){var o=r(2927),s=r(5707),a=r(4399),__decorate=function(e,t,r,o){var s,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(c=(a<3?s(c):a>3?s(t,r,c):s(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};class korText extends o.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[a.g,o.css`
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
      `]}render(){return o.html`<slot></slot>`}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color&&(this.style.color=this.color)}}__decorate([(0,s.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,s.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(e,t,r){r.d(t,{g:()=>o});const o=r(2927).css`
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
`},2927(t,r,o){t.exports=(e=>{var t={};return o.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,r){r.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,r){r(1124)},5707(e,t,r){r.d(t,{MZ:()=>o.M});var o=r(5694);r(1124),r(9896)}},r={};function __webpack_require__(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o=__webpack_require__(2927),s=__webpack_require__(5707),a=__webpack_require__(4399),c=(__webpack_require__(2730),__webpack_require__(5744),function(e,t,r,o){var s,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(c=(a<3?s(c):a>3?s(t,r,c):s(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c});class korProgressBar extends o.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[a.g,o.css`
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
      `]}render(){return o.html`
      <!-- header -->
      ${this.label||this.showProgress?o.html`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?o.html` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?o.html`
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
              ${this.showProgress?o.html` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:o.html`
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
      ${this.info||this.status?o.html`
            <div class="footer">
              <!-- status -->
              ${this.status?o.html`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?o.html`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80;break;default:e=0}return e}}c([(0,s.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"label",void 0),c([(0,s.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"info",void 0),c([(0,s.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"status",void 0),c([(0,s.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"color",void 0),c([(0,s.MZ)({type:String,reflect:!0})],korProgressBar.prototype,"size",void 0),c([(0,s.MZ)({type:Number,reflect:!0})],korProgressBar.prototype,"value",void 0),c([(0,s.MZ)({type:Boolean,reflect:!0})],korProgressBar.prototype,"radial",void 0),c([(0,s.MZ)({type:Boolean,reflect:!0,attribute:"show-progress"})],korProgressBar.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",korProgressBar);export{korProgressBar};