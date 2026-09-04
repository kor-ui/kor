import*as e from"lit";var o={1869(e,o,r){r(3664)},3664(e,o,r){var a=r(2927),s=r(5707),c=r(4399),l=(r(2730),function(e,o,r,a){var s,c=arguments.length,l=c<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,o,r,a);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(l=(c<3?s(l):c>3?s(o,r,l):s(o,r))||l);return c>3&&l&&Object.defineProperty(o,r,l),l});class korCard extends a.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[c.g,a.css`
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
      `]}render(){return a.html`
      ${this.image?a.html` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?a.html`
                <div class="label">
                  ${this.icon?a.html` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":a.html` <div style="margin-top: var(--spacing-l)"></div> `}
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
    `}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`))}}l([(0,s.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),l([(0,s.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),l([(0,s.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),l([(0,s.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),l([(0,s.wk)()],korCard.prototype,"emptyHeader",void 0),l([(0,s.wk)()],korCard.prototype,"emptyFunctions",void 0),l([(0,s.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},2730(e,o,r){r(1098)},1098(e,o,r){var a=r(2927),s=r(5707),c=r(4399),__decorate=function(e,o,r,a){var s,c=arguments.length,l=c<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,o,r,a);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(l=(c<3?s(l):c>3?s(o,r,l):s(o,r))||l);return c>3&&l&&Object.defineProperty(o,r,l),l};class korIcon extends a.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[c.g,a.css`
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
      `]}render(){var e;return a.html` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?a.html` ${this.icon} `:""}`}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&r.indexOf("url")>-1&&this.setBackgroundImage(r)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,s.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,s.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,s.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},4399(e,o,r){r.d(o,{g:()=>a});const a=r(2927).css`
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
`},2927(o,r,a){o.exports=(e=>{var o={};return a.d(o,e),o})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,o,r){r.d(o,{M:()=>n});const i=(e,o)=>"method"===o.kind&&o.descriptor&&!("value"in o.descriptor)?{...o,finisher(r){r.createProperty(o.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:o.key,initializer(){"function"==typeof o.initializer&&(this[o.key]=o.initializer.call(this))},finisher(r){r.createProperty(o.key,e)}};function n(e){return(o,r)=>void 0!==r?((e,o,r)=>{o.constructor.createProperty(r,e)})(e,o,r):i(e,o)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,o,r){r(1124)},4290(e,o,r){r.d(o,{w:()=>t});var a=r(5694);function t(e){return(0,a.M)({...e,state:!0})}},5707(e,o,r){r.d(o,{MZ:()=>a.M,wk:()=>s.w});var a=r(5694),s=r(4290);r(1124),r(9896)}},r={};function __webpack_require__(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return o[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.d=(e,o)=>{for(var r in o)__webpack_require__.o(o,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},__webpack_require__.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var a=__webpack_require__(2927),s=__webpack_require__(5707),c=__webpack_require__(4399),l=(__webpack_require__(1869),__webpack_require__(2730),function(e,o,r,a){var s,c=arguments.length,l=c<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,o,r,a);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(l=(c<3?s(l):c>3?s(o,r,l):s(o,r))||l);return c>3&&l&&Object.defineProperty(o,r,l),l});class korNotificationItem extends a.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[c.g,a.css`
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
      `]}render(){return a.html`
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
          ${this.sticky?"":a.html`
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
    `}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`))}}l([(0,s.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"label",void 0),l([(0,s.MZ)({type:String,reflect:!0})],korNotificationItem.prototype,"icon",void 0),l([(0,s.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korNotificationItem.prototype,"flexDirection",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"visible",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0})],korNotificationItem.prototype,"sticky",void 0),l([(0,s.wk)()],korNotificationItem.prototype,"emptyHeader",void 0),l([(0,s.wk)()],korNotificationItem.prototype,"emptyFunctions",void 0),l([(0,s.wk)()],korNotificationItem.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",korNotificationItem);var kor_notifications_decorate=function(e,o,r,a){var s,c=arguments.length,l=c<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,o,r,a);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(l=(c<3?s(l):c>3?s(o,r,l):s(o,r))||l);return c>3&&l&&Object.defineProperty(o,r,l),l};class korNotifications extends a.LitElement{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[c.g,a.css`
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
      `]}render(){return a.html`<slot></slot>`}attributeChangedCallback(e,o,r){super.attributeChangedCallback(e,o,r),this.dispatchEvent(new Event(`${e}-changed`))}}kor_notifications_decorate([(0,s.MZ)({type:String,reflect:!0})],korNotifications.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",korNotifications);export{korNotificationItem,korNotifications};