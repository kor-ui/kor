import{LitElement as e,css as r,html as s}from"lit";const i=(e,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(s){s.createProperty(r.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(s){s.createProperty(r.key,e)}};function n(e){return(r,s)=>void 0!==s?((e,r,s)=>{r.constructor.createProperty(s,e)})(e,r,s):i(e,r)}function t(e){return n({...e,state:!0})}const o=({finisher:e,descriptor:r})=>(s,a)=>{var l;if(void 0===a){const a=null!==(l=s.originalKey)&&void 0!==l?l:s.key,c=null!=r?{kind:"method",placement:"prototype",key:a,descriptor:r(s.key)}:{...s,key:a};return null!=e&&(c.finisher=function(r){e(r,a)}),c}{const l=s.constructor;void 0!==r&&Object.defineProperty(s,a,r(a)),null==e||e(l,a)}};var a;null===(a=window.HTMLSlotElement)||void 0===a||a.prototype.assignedElements;const l=r`
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
`;var __decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korIcon extends e{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,r`
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
      `]}render(){var e;return s` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?s` ${this.icon} `:""}`}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&s.indexOf("url")>-1&&this.setBackgroundImage(s)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([n({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([n({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([n({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([n({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([n({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon);var kor_card_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korCard extends e{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.image?s` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?s`
                <div class="label">
                  ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":s` <div style="margin-top: var(--spacing-l)"></div> `}
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_card_decorate([n({type:String,reflect:!0})],korCard.prototype,"label",void 0),kor_card_decorate([n({type:String,reflect:!0})],korCard.prototype,"icon",void 0),kor_card_decorate([n({type:String,reflect:!0})],korCard.prototype,"image",void 0),kor_card_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),kor_card_decorate([n({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),kor_card_decorate([t()],korCard.prototype,"emptyHeader",void 0),kor_card_decorate([t()],korCard.prototype,"emptyFunctions",void 0),kor_card_decorate([t()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard);var kor_accordion_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korAccordion extends e{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${e=>this.handleCollapse(e)}"
        >
          <div class="header">
            ${this.icon?s` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
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
        ${this.expanded?s`
              <slot
                name="footer"
                slot="${this.emptyFooter?"hidden":"footer"}"
                @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var e,r,s;const a=null===(s=null===(r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("kor-card"))||void 0===r?void 0:r.shadowRoot)||void 0===s?void 0:s.querySelector(".top");a&&(a.style.padding="0")},0)}handleCollapse(e){this.expanded&&(this.expanded=!1,e.stopPropagation())}}kor_accordion_decorate([n({type:String,reflect:!0})],korAccordion.prototype,"label",void 0),kor_accordion_decorate([n({type:String,reflect:!0})],korAccordion.prototype,"icon",void 0),kor_accordion_decorate([n({type:Boolean,reflect:!0})],korAccordion.prototype,"expanded",void 0),kor_accordion_decorate([n({type:Boolean,reflect:!0})],korAccordion.prototype,"disabled",void 0),kor_accordion_decorate([t()],korAccordion.prototype,"emptyHeader",void 0),kor_accordion_decorate([t()],korAccordion.prototype,"emptyFunctions",void 0),kor_accordion_decorate([t()],korAccordion.prototype,"emptyBody",void 0),kor_accordion_decorate([t()],korAccordion.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",korAccordion);var kor_app_bar_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korAppBar extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.mobile?s`
            <slot name="left"></slot>
            ${this.label?s` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:s`
            ${this.logo?s`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?s` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}kor_app_bar_decorate([n({type:String,reflect:!0})],korAppBar.prototype,"label",void 0),kor_app_bar_decorate([n({type:String,reflect:!0})],korAppBar.prototype,"logo",void 0),kor_app_bar_decorate([n({type:Boolean,reflect:!0})],korAppBar.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",korAppBar);var kor_text_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korText extends e{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[l,r`
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
      `]}render(){return s`<slot></slot>`}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color&&(this.style.color=this.color)}}kor_text_decorate([n({type:String,reflect:!0})],korText.prototype,"size",void 0),kor_text_decorate([n({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText);var kor_avatar_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korAvatar extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      <!-- image -->
      <div class="image">
        ${this.image?s` <img src="${this.image}" /> `:s`
              ${this.label?s` ${this.getInitials(this.label)} `:s` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?s`
            <div class="text">
              ${this.label?s`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?s`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}getInitials(e){const r=e.match(/\b\w/g)||[];return(r.shift()||"")+(r.pop()||"").toUpperCase()}}kor_avatar_decorate([n({type:String,reflect:!0})],korAvatar.prototype,"label",void 0),kor_avatar_decorate([n({type:String,reflect:!0})],korAvatar.prototype,"info",void 0),kor_avatar_decorate([n({type:String,reflect:!0})],korAvatar.prototype,"image",void 0),kor_avatar_decorate([n({type:Boolean,reflect:!0})],korAvatar.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",korAvatar);var kor_badge_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korBadge extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.status?s`
            <!-- status -->
            ${this.status?s`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:s`
            ${this.label?s`
                  <kor-text size="body-2">
                    ${this.label>999?s` 999+ `:s` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}}kor_badge_decorate([n({type:Number,reflect:!0})],korBadge.prototype,"label",void 0),kor_badge_decorate([n({type:String,reflect:!0})],korBadge.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",korBadge);class korBreadcrumbs extends e{static get styles(){return[l,r`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return s` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",korBreadcrumbs);var kor_breadcrumb_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korBreadcrumbItem extends e{constructor(){super(...arguments),this.label="Label"}static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.firstItem()?"":s`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}firstItem(){var e;let r,s;return s=Array.prototype.slice.call(null===(e=this.parentElement)||void 0===e?void 0:e.children),r=0==s.indexOf(this),r}}kor_breadcrumb_item_decorate([n({type:String,reflect:!0})],korBreadcrumbItem.prototype,"label",void 0),kor_breadcrumb_item_decorate([n({type:Boolean,reflect:!0})],korBreadcrumbItem.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",korBreadcrumbItem);var kor_button_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korButton extends e{constructor(){super(...arguments),this.color="primary"}static get styles(){return[l,r`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          gap: var(--spacing-xs);
          height: max-content;
          width: max-content;
          border-radius: var(--btn-border-radius, --border-radius);
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
          color: var(--btn-primary-face-color, --text-1);
          background: var(--btn-primary-gradient, rgb(var(--accent-1)));
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
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background: var(--btn-primary-gradient-hover, rgb(var(--accent-1b)));
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
      `]}render(){return s`
      <slot name="icon">
        ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      </slot>
      <slot>${this.label?s`<div class="center"><label class="label">${this.label}</label></div>`:""}</slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_button_decorate([n({type:String,reflect:!0})],korButton.prototype,"label",void 0),kor_button_decorate([n({type:String,reflect:!0})],korButton.prototype,"icon",void 0),kor_button_decorate([n({type:String,reflect:!0})],korButton.prototype,"color",void 0),kor_button_decorate([n({type:Boolean,reflect:!0})],korButton.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",korButton);var kor_checkbox_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korCheckbox extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?s` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?s` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}kor_checkbox_decorate([n({type:String,reflect:!0})],korCheckbox.prototype,"label",void 0),kor_checkbox_decorate([n({type:Boolean,reflect:!0})],korCheckbox.prototype,"active",void 0),kor_checkbox_decorate([n({type:Boolean,reflect:!0})],korCheckbox.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",korCheckbox);var kor_divider_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korDivider extends e{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[l,r`
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
      `]}render(){return s`<div class="line"></div>`}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_divider_decorate([n({type:String,reflect:!0})],korDivider.prototype,"spacing",void 0),kor_divider_decorate([n({type:String,reflect:!0})],korDivider.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",korDivider);var kor_drawer_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korDrawer extends e{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
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
          ${this.sticky?"":s`
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let e={height:void 0,width:void 0};switch(this.position){case"left":case"right":e.height="100%",e.width=this.width;break;case"top":case"bottom":e.height=this.height,e.width="100%"}return e}}kor_drawer_decorate([n({type:String,reflect:!0})],korDrawer.prototype,"label",void 0),kor_drawer_decorate([n({type:String,reflect:!0})],korDrawer.prototype,"icon",void 0),kor_drawer_decorate([n({type:String,reflect:!0})],korDrawer.prototype,"position",void 0),kor_drawer_decorate([n({type:String,reflect:!0})],korDrawer.prototype,"height",void 0),kor_drawer_decorate([n({type:String,reflect:!0})],korDrawer.prototype,"width",void 0),kor_drawer_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korDrawer.prototype,"flexDirection",void 0),kor_drawer_decorate([n({type:Boolean,reflect:!0})],korDrawer.prototype,"visible",void 0),kor_drawer_decorate([n({type:Boolean,reflect:!0})],korDrawer.prototype,"sticky",void 0),kor_drawer_decorate([t()],korDrawer.prototype,"emptyHeader",void 0),kor_drawer_decorate([t()],korDrawer.prototype,"emptyFunctions",void 0),kor_drawer_decorate([t()],korDrawer.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",korDrawer);var kor_empty_state_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korEmptyState extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.icon?s`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?s` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_empty_state_decorate([n({type:String,reflect:!0})],korEmptyState.prototype,"label",void 0),kor_empty_state_decorate([n({type:String,reflect:!0})],korEmptyState.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",korEmptyState);var kor_grid_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korGrid extends e{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[l,r`
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
      `]}render(){return s`<slot></slot>`}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}kor_grid_decorate([n({type:Number,reflect:!0})],korGrid.prototype,"columns",void 0),kor_grid_decorate([n({type:Number,reflect:!0})],korGrid.prototype,"rows",void 0),kor_grid_decorate([n({type:String,reflect:!0})],korGrid.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",korGrid);var c,kor_image_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korImage extends e{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?s` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"src",void 0),kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"alt",void 0),kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"height",void 0),kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"width",void 0),kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"fit",void 0),kor_image_decorate([n({type:String,reflect:!0})],korImage.prototype,"legend",void 0),kor_image_decorate([n({type:String,reflect:!0,attribute:"legend-position"})],korImage.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",korImage);const p=window,h=p.trustedTypes,g=h?h.createPolicy("lit-html",{createHTML:e=>e}):void 0,b="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,m="?"+f,y=`<${m}>`,x=document,u=()=>x.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,v=e=>$(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),C="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,A=/>/g,j=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,O=/^(?:script|style|textarea|title)$/i,w=e=>(r,...s)=>({_$litType$:e,strings:r,values:s}),T=(w(1),w(2),Symbol.for("lit-noChange")),B=Symbol.for("lit-nothing"),F=new WeakMap,W=x.createTreeWalker(x,129,null,!1);function P(e,r){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(r):r}const V=(e,r)=>{const s=e.length-1,a=[];let l,c=2===r?"<svg>":"",p=E;for(let r=0;r<s;r++){const s=e[r];let h,g,m=-1,x=0;for(;x<s.length&&(p.lastIndex=x,g=p.exec(s),null!==g);)x=p.lastIndex,p===E?"!--"===g[1]?p=_:void 0!==g[1]?p=A:void 0!==g[2]?(O.test(g[2])&&(l=RegExp("</"+g[2],"g")),p=j):void 0!==g[3]&&(p=j):p===j?">"===g[0]?(p=null!=l?l:E,m=-1):void 0===g[1]?m=-2:(m=p.lastIndex-g[2].length,h=g[1],p=void 0===g[3]?j:'"'===g[3]?I:D):p===I||p===D?p=j:p===_||p===A?p=E:(p=j,l=void 0);const $=p===j&&e[r+1].startsWith("/>")?" ":"";c+=p===E?s+y:m>=0?(a.push(h),s.slice(0,m)+b+s.slice(m)+f+$):s+f+(-2===m?(a.push(void 0),r):$)}return[P(e,c+(e[s]||"<?>")+(2===r?"</svg>":"")),a]};class N{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let l=0,c=0;const p=e.length-1,g=this.parts,[y,x]=V(e,r);if(this.el=N.createElement(y,s),W.currentNode=this.el.content,2===r){const e=this.el.content,r=e.firstChild;r.remove(),e.append(...r.childNodes)}for(;null!==(a=W.nextNode())&&g.length<p;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const r of a.getAttributeNames())if(r.endsWith(b)||r.startsWith(f)){const s=x[c++];if(e.push(r),void 0!==s){const e=a.getAttribute(s.toLowerCase()+b).split(f),r=/([.?@])?(.*)/.exec(s);g.push({type:1,index:l,name:r[2],strings:e,ctor:"."===r[1]?H:"?"===r[1]?L:"@"===r[1]?z:k})}else g.push({type:6,index:l})}for(const r of e)a.removeAttribute(r)}if(O.test(a.tagName)){const e=a.textContent.split(f),r=e.length-1;if(r>0){a.textContent=h?h.emptyScript:"";for(let s=0;s<r;s++)a.append(e[s],u()),W.nextNode(),g.push({type:2,index:++l});a.append(e[r],u())}}}else if(8===a.nodeType)if(a.data===m)g.push({type:2,index:l});else{let e=-1;for(;-1!==(e=a.data.indexOf(f,e+1));)g.push({type:7,index:l}),e+=f.length-1}l++}}static createElement(e,r){const s=x.createElement("template");return s.innerHTML=e,s}}function S(e,r,s=e,a){var l,c,p,h;if(r===T)return r;let g=void 0!==a?null===(l=s._$Co)||void 0===l?void 0:l[a]:s._$Cl;const b=d(r)?void 0:r._$litDirective$;return(null==g?void 0:g.constructor)!==b&&(null===(c=null==g?void 0:g._$AO)||void 0===c||c.call(g,!1),void 0===b?g=void 0:(g=new b(e),g._$AT(e,s,a)),void 0!==a?(null!==(p=(h=s)._$Co)&&void 0!==p?p:h._$Co=[])[a]=g:s._$Cl=g),void 0!==g&&(r=S(e,g._$AS(e,r.values),g,a)),r}class M{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:s},parts:a}=this._$AD,l=(null!==(r=null==e?void 0:e.creationScope)&&void 0!==r?r:x).importNode(s,!0);W.currentNode=l;let c=W.nextNode(),p=0,h=0,g=a[0];for(;void 0!==g;){if(p===g.index){let r;2===g.type?r=new R(c,c.nextSibling,this,e):1===g.type?r=new g.ctor(c,g.name,g.strings,this,e):6===g.type&&(r=new Z(c,this,e)),this._$AV.push(r),g=a[++h]}p!==(null==g?void 0:g.index)&&(c=W.nextNode(),p++)}return W.currentNode=x,l}v(e){let r=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}}class R{constructor(e,r,s,a){var l;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cp=null===(l=null==a?void 0:a.isConnected)||void 0===l||l}get _$AU(){var e,r;return null!==(r=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==r?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===(null==e?void 0:e.nodeType)&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=S(this,e,r),d(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):v(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==B&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(x.createTextNode(e)),this._$AH=e}g(e){var r;const{values:s,_$litType$:a}=e,l="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=N.createElement(P(a.h,a.h[0]),this.options)),a);if((null===(r=this._$AH)||void 0===r?void 0:r._$AD)===l)this._$AH.v(s);else{const e=new M(l,this),r=e.u(this.options);e.v(s),this.$(r),this._$AH=e}}_$AC(e){let r=F.get(e.strings);return void 0===r&&F.set(e.strings,r=new N(e)),r}T(e){$(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,a=0;for(const l of e)a===r.length?r.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=r[a],s._$AI(l),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,r);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var r;void 0===this._$AM&&(this._$Cp=e,null===(r=this._$AP)||void 0===r||r.call(this,e))}}class k{constructor(e,r,s,a,l){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=l,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,s,a){const l=this.strings;let c=!1;if(void 0===l)e=S(this,e,r,0),c=!d(e)||e!==this._$AH&&e!==T,c&&(this._$AH=e);else{const a=e;let p,h;for(e=l[0],p=0;p<l.length-1;p++)h=S(this,a[s+p],r,p),h===T&&(h=this._$AH[p]),c||(c=!d(h)||h!==this._$AH[p]),h===B?e=B:e!==B&&(e+=(null!=h?h:"")+l[p+1]),this._$AH[p]=h}c&&!a&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}const q=h?h.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class z extends k{constructor(e,r,s,a,l){super(e,r,s,a,l),this.type=5}_$AI(e,r=this){var s;if((e=null!==(s=S(this,e,r,0))&&void 0!==s?s:B)===T)return;const a=this._$AH,l=e===B&&a!==B||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,c=e!==B&&(a===B||l);l&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class Z{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const U=p.litHtmlPolyfillSupport;null==U||U(N,R),(null!==(c=p.litHtmlVersions)&&void 0!==c?c:p.litHtmlVersions=[]).push("2.8.0");const if_defined_l=e=>null!=e?e:B;var kor_input_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};let G=class korInput extends e{static get styles(){return[l,r`
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
      `]}render(){var e;return s`
      ${this.icon?s` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?s` <label class="label">${this.label}</label> `:""}
        <input id="main_input"
          .type="${"date"===this.type||"datetime"===this.type?"text":this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step?this.step.toString():"any"}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${if_defined_l(this.min)}"
          max="${if_defined_l(this.max)}"
          pattern="${if_defined_l(this.pattern)}"
          name="${if_defined_l(this.name)}"
          @input="${e=>{e.target.value!=this.value&&this.handleChange_(e)}}"
          @focus="${e=>{this.handleFocus_(e)}}"
          @blur="${e=>{this.handleBlur_(e)}}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?s`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?s`
                  <kor-card
                    @click="${e=>{this.active=!1,e.stopPropagation()}}"
                    @wheel="${e=>e.stopPropagation()}"
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
      ${"date"===this.type||"datetime"===this.type?s`${this.active?this.getCalendarGrid_(null!==(e=this.value)&&void 0!==e?e:""):""}`:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":s`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?s`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment or month increment -->
      ${("number"===this.type&&parseFloat(String(this.step))||"date"===this.type||"datetime"===this.type)&&!this.readonly?s`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${e=>this.handleIncrement_(e,"left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${e=>this.handleIncrement_(e,"right")}"
            ></kor-icon>
          `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}constructor(){if(super(),this.type="text",this.autofocus=!1,this.step=0,this.is12Hour_=!1,this.isMenuHandlerSet_=!1,this.addEventListener("click",e=>{var r;this.active?"select"===this.type?this.closeSelectMenu(e):this.active=!1:this.active||(this.active=!0,"select"===this.type||this.disabled||this.readonly||null===(r=this.main_input)||void 0===r||r.focus())}),"datetime"===this.type){const e=new Intl.DateTimeFormat(this.locale,{hour:"numeric"}).resolvedOptions().hourCycle;"h11"!==e&&"h12"!==e||(this.is12Hour_=!0)}}firstUpdated(){var e,r,s,a;"select"===this.type||this.disabled||this.readonly||null===(e=this.main_input)||void 0===e||e.focus(),null===(r=this.main_input)||void 0===r||r.addEventListener("keydown",e=>{this.step||"number"!==this.type||"ArrowUp"!==e.key&&"ArrowDown"!==e.key||e.preventDefault()}),null===(s=this.main_input)||void 0===s||s.addEventListener("wheel",e=>{this.step||"number"!==this.type||e.preventDefault()},{passive:!1}),"date"!==this.type&&"datetime"!==this.type||(this.value=this.validateAndFormatDate_(null!==(a=this.value)&&void 0!==a?a:""))}handleChange_(e){var r;e instanceof Date?this.value=this.validateAndFormatDate_(e):e instanceof Event&&"string"==typeof(null===(r=e.target)||void 0===r?void 0:r.value)&&(this.value=e.target.value),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}setDay_(e){var r,s;let a=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(a.getTime())&&(a=new Date),a.setDate(null!==(s=parseInt(e))&&void 0!==s?s:0),this.handleChange_(a),this.active=!1,this.requestUpdate()}getHour_(){var e;let r=new Date(Date.parse(null!==(e=this.value)&&void 0!==e?e:""));isNaN(r.getTime())&&(r=new Date);let s=r.getHours();return this.is12Hour_&&s>12&&(s-=12),String(s)}setHour_(e){var r,s;let a=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(a.getTime())&&(a=new Date);let l=null!==(s=parseInt(e))&&void 0!==s?s:0;this.is12Hour_&&l>0&&l<12&&"PM"===this.getAMPM_()&&(l+=12),a.setHours(l),this.handleChange_(a)}getMinute_(){var e;let r=new Date(Date.parse(null!==(e=this.value)&&void 0!==e?e:""));return isNaN(r.getTime())&&(r=new Date),String(r.getMinutes())}setMinute_(e){var r,s;let a=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(a.getTime())&&(a=new Date),a.setMinutes(null!==(s=parseInt(e))&&void 0!==s?s:0),this.handleChange_(a)}getAMPM_(){var e,r;return(null===(e=this.value)||void 0===e?void 0:e.includes("AM"))?"AM":(null===(r=this.value)||void 0===r?void 0:r.includes("PM"))?"PM":""}setAMPM_(e){var r;let s=new Date(Date.parse(null!==(r=this.main_input.value)&&void 0!==r?r:""));if(isNaN(s.getTime())&&(s=new Date),s.getHours()>=12&&"AM"===e)s.setHours(s.getHours()-12);else{if(!(s.getHours()<12&&"PM"===e))return;s.setHours(s.getHours()+12)}this.handleChange_(s)}handleClear(e){e.stopImmediatePropagation(),this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleFocus_(e){this.active||"select"===this.type||"date"===this.type||"datetime"===this.type||(this.active=!0)}handleBlur_(e){"number"===this.type&&this.validateMinMax(parseFloat(e.target.value)),"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type&&(this.active=!1)}handleIncrement_(e,r){var s,a,l,c,p,h,g;if("date"===this.type||"datetime"===this.type){e.stopImmediatePropagation();let a=new Date(Date.parse(null!==(s=this.value)&&void 0!==s?s:""));return isNaN(a.getTime())&&(a=new Date),"left"===r?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1),void this.handleChange_(a)}const b=parseFloat(String(this.step));!isNaN(b)&&b&&("left"===r?this.validateMinMax((null!==(c=parseFloat(null!==(l=null!==(a=this.value)&&void 0!==a?a:this.max)&&void 0!==l?l:"0"))&&void 0!==c?c:0)-b):"right"===r&&this.validateMinMax((null!==(g=parseFloat(null!==(h=null!==(p=this.value)&&void 0!==p?p:this.min)&&void 0!==h?h:"0"))&&void 0!==g?g:0)+b))}handleItems(e){const r=e.target.assignedNodes();r.forEach(e=>{"KOR-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",s=>{s.target.active&&(r.forEach(e=>{e.active=!1}),s.target.active=!0,this.value=e.label,this.active=!1)})})}attributeChangedCallback(e,r,s){var a;if(super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"active"!==e||"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type){if("locale"==e&&("date"===this.type||"datetime"===this.type)){const e=new Intl.DateTimeFormat(s,{hour:"numeric"}).resolvedOptions().hourCycle;this.is12Hour_="h11"===e||"h12"===e;const r=this.validateAndFormatDate_(null!==(a=this.value)&&void 0!==a?a:"");r!==this.value&&(this.value=r)}}else this.active&&!this.isMenuHandlerSet_&&(this.handleMenu(),this.isMenuHandlerSet_=!0)}handleMenu(){const e=this.parentElement,closePopover=()=>{this.active=!1,null==e||e.removeEventListener("wheel",closePopover),this.isMenuHandlerSet_=!1};null==e||e.addEventListener("wheel",closePopover)}closeSelectMenu(e){"select"===this.type&&this.active&&(e.stopImmediatePropagation(),this.active=!1)}validateMinMax(e){isNaN(e)||e===parseFloat(this.value)||(this.min&&e<parseFloat(this.min)?this.value=this.min:this.max&&e>parseFloat(this.max)?this.value=this.max:this.value=e.toString(),this.handleChange_(void 0))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getMenuStyles(){return{top:`${this.getBoundingClientRect().top+this.clientHeight+1}px`,left:`${this.getBoundingClientRect().left}px`,width:`${this.clientWidth}px`}}validateAndFormatDate_(e){let r=e instanceof Date?e:new Date(Date.parse(null!=e?e:""));isNaN(r.getTime())&&(r=new Date);const s={dateStyle:"short"};"datetime"===this.type&&(s.timeStyle="short");return new Intl.DateTimeFormat(this.locale,s).format(r)}getLocaleDayNames_(){const e=new Intl.DateTimeFormat(this.locale,{weekday:"narrow"});return[1,2,3,4,5,6,7].map(r=>{const s=new Date(2024,0,r);return e.format(s)+"."})}getCalendarGrid_(e){var r,a;let l=new Date(Date.parse(null!=e?e:""));isNaN(l.getTime())&&(l=new Date);const c=new Intl.DateTimeFormat(this.locale,{month:"long"}).formatToParts(l).reduce((e,r)=>("literal"!==r.type&&(e[r.type]=r.value),e),{}),p=new Intl.DateTimeFormat(this.locale,{day:"numeric",month:"numeric",year:"numeric"}).formatToParts(l).reduce((e,r)=>("literal"!==r.type&&(e[r.type]=r.value),e),{}),h=null!==(r=parseInt(p.month))&&void 0!==r?r:0,g=null!==(a=parseInt(p.year))&&void 0!==a?a:0,b=c.month+" "+p.year;let f=new Date(g,h-1,1).getDay();f=0===f?6:f-1;const m=new Date(g,h,0).getDate(),y=new Date(g,h-1,0).getDate(),x=[];let $=1,C=1;x.push(...this.getLocaleDayNames_());for(let e=0;e<6;e++)for(let r=0;r<7;r++){const s=7*e+r;s<f?x.push(`${y-f+s+1}.`):$<=m?(x.push(String($)),$++):(x.push(`${C}.`),C++)}return s`
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
          ${b}
        <kor-text>
        <kor-switch>
          <kor-grid columns="7" spacing
            style="grid-template-columns: repeat(7, 3rem);"
          >
            ${x.map(e=>s`
                <kor-switch-item
                  label="${e.includes(".")?e.slice(0,-1):e}"
                  grid-cols="1"
                  ?active="${e===p.day}"
                  ?disabled="${e.includes(".")}"
                  @click="${e=>{var r;e.stopImmediatePropagation();const s=e.target;this.setDay_(null!==(r=s.label)&&void 0!==r?r:"")}}"
                ></kor-switch-item>
              `)}
          </kor-grid>
        </kor-switch>
        ${"datetime"===this.type?s`
            <kor-grid columns="${this.is12Hour_?"3":"2"}" spacing="s"
              style="display: flex;"
            >
              <!-- The hours input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="hours" type="number" step="1"
                    min="0" max="${this.is12Hour_?12:24}"
                    value="${this.getHour_()}"
                    @input="${e=>{var r;const s=e.target;s.value!==this.getHour_()&&this.setHour_(null!==(r=s.value)&&void 0!==r?r:"")}}"
                    @click="${e=>{e.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${e=>{var r,s,a,l,c;e.stopImmediatePropagation();const p=e.target.parentNode.querySelector("div > input");if(!p)return;const h=(null!==(s=parseInt(null!==(r=p.value)&&void 0!==r?r:p.max))&&void 0!==s?s:0)-(null!==(a=parseInt(p.step))&&void 0!==a?a:0);h>=(null!==(l=parseInt(p.min))&&void 0!==l?l:0)&&(p.value=String(h),this.setHour_(null!==(c=p.value)&&void 0!==c?c:""))}}"
                ></kor-icon>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${e=>{var r,s,a,l,c;e.stopImmediatePropagation();const p=e.target.parentNode.querySelector("div > input");if(!p)return;const h=(null!==(s=parseInt(null!==(r=p.value)&&void 0!==r?r:p.min))&&void 0!==s?s:0)+(null!==(a=parseInt(p.step))&&void 0!==a?a:0);h<=(null!==(l=parseInt(p.max))&&void 0!==l?l:0)&&(p.value=String(h),this.setHour_(null!==(c=p.value)&&void 0!==c?c:""))}}"
                ></kor-icon>
              </div>
              <!-- The minutes input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="minutes" type="number" step="1"
                    min="0" max="60"
                    value="${this.getMinute_()}"
                    @input="${e=>{var r;const s=e.target;s.value!==this.getMinute_()&&this.setMinute_(null!==(r=s.value)&&void 0!==r?r:"")}}"
                    @click="${e=>{e.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${e=>{var r,s,a,l,c;e.stopImmediatePropagation();const p=e.target.parentNode.querySelector("div > input");if(!p)return;const h=(null!==(s=parseInt(null!==(r=p.value)&&void 0!==r?r:p.max))&&void 0!==s?s:0)-(null!==(a=parseInt(p.step))&&void 0!==a?a:0);h>=(null!==(l=parseInt(p.min))&&void 0!==l?l:0)&&(p.value=String(h),this.setMinute_(null!==(c=p.value)&&void 0!==c?c:""))}}"
                ></kor-icon>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${e=>{var r,s,a,l,c;e.stopImmediatePropagation();const p=e.target.parentNode.querySelector("div > input");if(!p)return;const h=(null!==(s=parseInt(null!==(r=p.value)&&void 0!==r?r:p.min))&&void 0!==s?s:0)+(null!==(a=parseInt(p.step))&&void 0!==a?a:0);h<=(null!==(l=parseInt(p.max))&&void 0!==l?l:0)&&(p.value=String(h),this.setMinute_(null!==(c=p.value)&&void 0!==c?c:""))}}"
                ></kor-icon>
              </div>
              <!-- The optional AM/PM switch for 12 hour time format -->
              ${this.is12Hour_?s`
                  <kor-switch grid-cols="1"
                    style="display: flex; margin: 4px 8px 0 0; max-width: 8rem;"
                  >
                    <kor-grid columns="2" spacing>
                      <kor-switch-item label="AM"
                        ?active="${"AM"===this.getAMPM_()}"
                        @click="${e=>{var r;e.stopImmediatePropagation();const s=e.target;this.setAMPM_(null!==(r=s.label)&&void 0!==r?r:"")}}"
                      ></kor-switch-item>
                      <kor-switch-item label="PM"
                        ?active="${"PM"===this.getAMPM_()}"
                        @click="${e=>{var r;e.stopImmediatePropagation();const s=e.target;this.setAMPM_(null!==(r=s.label)&&void 0!==r?r:"")}}"
                      ></kor-switch-item>
                    </kor-grid>
                  </kor-switch>
                `:""}
            </kor-grid>
          `:""}
      </kor-card>
    `}};kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"label",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"icon",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"value",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"name",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"type",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"locale",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"status",void 0),kor_input_decorate([n({type:Boolean,reflect:!0})],G.prototype,"condensed",void 0),kor_input_decorate([n({type:Boolean,reflect:!0})],G.prototype,"active",void 0),kor_input_decorate([n({type:Boolean,reflect:!0})],G.prototype,"disabled",void 0),kor_input_decorate([n({type:Boolean,reflect:!0})],G.prototype,"readonly",void 0),kor_input_decorate([n({type:Boolean,reflect:!0,attribute:"no-clear"})],G.prototype,"noClear",void 0),kor_input_decorate([n({type:Boolean,reflect:!0})],G.prototype,"autofocus",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"pattern",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"min",void 0),kor_input_decorate([n({type:String,reflect:!0})],G.prototype,"max",void 0),kor_input_decorate([n({type:Number,reflect:!0})],G.prototype,"step",void 0),kor_input_decorate([function query_i(e,r){return o({descriptor:s=>{const a={get(){var r,s;return null!==(s=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(r){const r="symbol"==typeof s?Symbol():"__"+s;a.get=function(){var s,a;return void 0===this[r]&&(this[r]=null!==(a=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(e))&&void 0!==a?a:null),this[r]}}return a}})}("#main_input",!1)],G.prototype,"main_input",void 0),G=kor_input_decorate([(e=>r=>"function"==typeof r?((e,r)=>(customElements.define(e,r),r))(e,r):((e,r)=>{const{kind:s,elements:a}=r;return{kind:s,elements:a,finisher(r){customElements.define(e,r)}}})(e,r))("kor-input")],G);var kor_menu_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korMenuItem extends e{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?s` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}kor_menu_item_decorate([n({type:String,reflect:!0})],korMenuItem.prototype,"label",void 0),kor_menu_item_decorate([n({type:String,reflect:!0})],korMenuItem.prototype,"icon",void 0),kor_menu_item_decorate([n({type:Boolean,reflect:!0})],korMenuItem.prototype,"active",void 0),kor_menu_item_decorate([n({type:Boolean,reflect:!0})],korMenuItem.prototype,"toggle",void 0),kor_menu_item_decorate([n({type:Boolean,reflect:!0})],korMenuItem.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",korMenuItem);var kor_modal_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korModal extends e{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
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
          ${this.sticky?"":s`
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}kor_modal_decorate([n({type:String,reflect:!0})],korModal.prototype,"label",void 0),kor_modal_decorate([n({type:String,reflect:!0})],korModal.prototype,"icon",void 0),kor_modal_decorate([n({type:String,reflect:!0})],korModal.prototype,"height",void 0),kor_modal_decorate([n({type:String,reflect:!0})],korModal.prototype,"width",void 0),kor_modal_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korModal.prototype,"flexDirection",void 0),kor_modal_decorate([n({type:Boolean,reflect:!0})],korModal.prototype,"visible",void 0),kor_modal_decorate([n({type:Boolean,reflect:!0})],korModal.prototype,"sticky",void 0),kor_modal_decorate([t()],korModal.prototype,"emptyHeader",void 0),kor_modal_decorate([t()],korModal.prototype,"emptyFunctions",void 0),kor_modal_decorate([t()],korModal.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",korModal);class korNavbar extends e{static get styles(){return[l,r`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return s`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",korNavbar);var kor_notifications_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korNotifications extends e{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[l,r`
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
      `]}render(){return s`<slot></slot>`}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_notifications_decorate([n({type:String,reflect:!0})],korNotifications.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",korNotifications);var kor_notification_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korNotificationItem extends e{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
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
          ${this.sticky?"":s`
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_notification_item_decorate([n({type:String,reflect:!0})],korNotificationItem.prototype,"label",void 0),kor_notification_item_decorate([n({type:String,reflect:!0})],korNotificationItem.prototype,"icon",void 0),kor_notification_item_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korNotificationItem.prototype,"flexDirection",void 0),kor_notification_item_decorate([n({type:Boolean,reflect:!0})],korNotificationItem.prototype,"visible",void 0),kor_notification_item_decorate([n({type:Boolean,reflect:!0})],korNotificationItem.prototype,"sticky",void 0),kor_notification_item_decorate([t()],korNotificationItem.prototype,"emptyHeader",void 0),kor_notification_item_decorate([t()],korNotificationItem.prototype,"emptyFunctions",void 0),kor_notification_item_decorate([t()],korNotificationItem.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",korNotificationItem);var kor_page_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korPage extends e{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_page_decorate([n({type:String,reflect:!0})],korPage.prototype,"theme",void 0),kor_page_decorate([n({type:String,reflect:!0})],korPage.prototype,"padding",void 0),kor_page_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korPage.prototype,"flexDirection",void 0),kor_page_decorate([n({type:Boolean,reflect:!0})],korPage.prototype,"flat",void 0),kor_page_decorate([n({type:Boolean,reflect:!0})],korPage.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",korPage);var kor_pane_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korPane extends e{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_pane_decorate([n({type:String,reflect:!0})],korPane.prototype,"label",void 0),kor_pane_decorate([n({type:String,reflect:!0})],korPane.prototype,"icon",void 0),kor_pane_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korPane.prototype,"flexDirection",void 0),kor_pane_decorate([n({type:String,reflect:!0})],korPane.prototype,"size",void 0),kor_pane_decorate([t()],korPane.prototype,"emptyHeader",void 0),kor_pane_decorate([t()],korPane.prototype,"emptyFunctions",void 0),kor_pane_decorate([t()],korPane.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",korPane);var kor_popover_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korPopover extends e{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&(this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e))}handlePosition(e){if(!e)return;let r=this,s=e.getBoundingClientRect();if(r.visible=!0,r.position.startsWith("bottom"))r.style.top=`${s.top+s.height+8}px`;else if(r.position.startsWith("top"))r.style.top=s.top-r.clientHeight-8+"px";else{r.style.top=s.top+s.height/2-r.clientHeight/2+"px",parseInt(r.style.top)<0&&(r.style.top="8px");const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(r.style.top)+r.clientHeight>e&&(r.style.top=e-r.clientHeight-8+"px")}r.position.startsWith("right")?r.style.left=`${s.left+s.width+8}px`:r.position.startsWith("left")?r.style.left=s.left-r.clientWidth-8+"px":r.style.left=s.left+s.width/2-r.clientWidth/2+"px"}addDocListener(e){let closePopover=r=>{(r.composedPath()[0]!==e&&r.target!==e&&"click"===r.type||"wheel"===r.type)&&(this.visible=!1,document.removeEventListener("click",closePopover),document.removeEventListener("wheel",closePopover))};document.addEventListener("click",closePopover),document.addEventListener("wheel",closePopover)}}kor_popover_decorate([n({type:String,reflect:!0})],korPopover.prototype,"label",void 0),kor_popover_decorate([n({type:String,reflect:!0})],korPopover.prototype,"icon",void 0),kor_popover_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korPopover.prototype,"flexDirection",void 0),kor_popover_decorate([n({type:String,reflect:!0})],korPopover.prototype,"position",void 0),kor_popover_decorate([n({type:String,reflect:!0})],korPopover.prototype,"target",void 0),kor_popover_decorate([n({type:Boolean,reflect:!0})],korPopover.prototype,"visible",void 0),kor_popover_decorate([n({type:Boolean,reflect:!0})],korPopover.prototype,"sticky",void 0),kor_popover_decorate([t()],korPopover.prototype,"emptyHeader",void 0),kor_popover_decorate([t()],korPopover.prototype,"emptyFunctions",void 0),kor_popover_decorate([t()],korPopover.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",korPopover);var kor_progress_bar_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korProgressBar extends e{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <!-- header -->
      ${this.label||this.showProgress?s`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?s` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?s`
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
              ${this.showProgress?s` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:s`
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
      ${this.info||this.status?s`
            <div class="footer">
              <!-- status -->
              ${this.status?s`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?s`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80;break;default:e=0}return e}}kor_progress_bar_decorate([n({type:String,reflect:!0})],korProgressBar.prototype,"label",void 0),kor_progress_bar_decorate([n({type:String,reflect:!0})],korProgressBar.prototype,"info",void 0),kor_progress_bar_decorate([n({type:String,reflect:!0})],korProgressBar.prototype,"status",void 0),kor_progress_bar_decorate([n({type:String,reflect:!0})],korProgressBar.prototype,"color",void 0),kor_progress_bar_decorate([n({type:String,reflect:!0})],korProgressBar.prototype,"size",void 0),kor_progress_bar_decorate([n({type:Number,reflect:!0})],korProgressBar.prototype,"value",void 0),kor_progress_bar_decorate([n({type:Boolean,reflect:!0})],korProgressBar.prototype,"radial",void 0),kor_progress_bar_decorate([n({type:Boolean,reflect:!0,attribute:"show-progress"})],korProgressBar.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",korProgressBar);var kor_radio_button_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korRadioButton extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?s` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var e;let r=null===(e=this.parentElement)||void 0===e?void 0:e.childNodes;null==r||r.forEach(e=>{e.active=!1}),this.active=!0}}kor_radio_button_decorate([n({type:String,reflect:!0})],korRadioButton.prototype,"label",void 0),kor_radio_button_decorate([n({type:Boolean,reflect:!0})],korRadioButton.prototype,"active",void 0),kor_radio_button_decorate([n({type:Boolean,reflect:!0})],korRadioButton.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",korRadioButton);var kor_slider_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korSlider extends e{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.label?s`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?s`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${e=>this.handleInput(parseFloat(e.target.value))}"
                      @keypress="${e=>"Enter"===e.key?this.handleInput(parseFloat(e.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${e=>this.handleThumbDrag(e)}"
          @touchstart="${e=>this.handleThumbDrag(e)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"value"!==e&&"min"!==e&&"max"!==e||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(e){e>=this.min&&e<=this.max?this.value=e:e<this.min?this.value=this.min:e>this.max&&(this.value=this.max)}handleThumbPosition(){var e;const r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".thumb"),s=(this.value-this.min)/(this.max-this.min)*100;r&&s>=0&&s<=100&&(r.style.left=`${s}%`)}handleThumbDrag(e){const r=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let s="mousedown"===e.type?e.clientX:e.touches[0].clientX;const getDeltaX=e=>{e.preventDefault();const a="mousemove"===e.type?e.clientX:e.touches[0].clientX,l=a-s;if(l>r||-1*l>r){const e=Math.floor(l<0?-1*l:l),c=Math.round(e/r),p=l>0?this.value+this.step*c:this.value-this.step*c;p<=this.max&&p>=this.min&&(this.value=p,s=a)}},removeListeners=()=>{window.removeEventListener("mousemove",getDeltaX),window.removeEventListener("touchmove",getDeltaX),window.removeEventListener("mouseup",removeListeners),window.removeEventListener("touchend",removeListeners)};window.addEventListener("mousemove",getDeltaX),window.addEventListener("touchmove",getDeltaX),window.addEventListener("mouseup",removeListeners),window.addEventListener("touchend",removeListeners)}}kor_slider_decorate([n({type:String,reflect:!0})],korSlider.prototype,"label",void 0),kor_slider_decorate([n({type:Number,reflect:!0})],korSlider.prototype,"value",void 0),kor_slider_decorate([n({type:Number,reflect:!0})],korSlider.prototype,"min",void 0),kor_slider_decorate([n({type:Number,reflect:!0})],korSlider.prototype,"max",void 0),kor_slider_decorate([n({type:Number,reflect:!0})],korSlider.prototype,"step",void 0),kor_slider_decorate([n({type:Boolean,reflect:!0})],korSlider.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",korSlider);var kor_spinner_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korSpinner extends e{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,r`
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
      `]}render(){return s`
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
      ${this.label?s` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40}return e}}kor_spinner_decorate([n({type:String,reflect:!0})],korSpinner.prototype,"size",void 0),kor_spinner_decorate([n({type:String,reflect:!0})],korSpinner.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",korSpinner);var kor_stepper_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korStepper extends e{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}handleItems(){let e,r;e=Array.prototype.slice.call(this.children),r=this.children.length,e.forEach(e=>{e.first=1==e.index,e.last=e.index==r})}}kor_stepper_decorate([n({type:String,reflect:!0})],korStepper.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",korStepper);var kor_stepper_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korStepperItem extends e{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <!-- circle -->
      <div class="circle">
        ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:s`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?s` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?s` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":s` <div class="line before"></div> `}
      ${this.last?"":s` <div class="line after"></div> `}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var e;(null===(e=this.parentElement)||void 0===e?void 0:e.childNodes).forEach(e=>{e.active=!1}),this.active=!0})}getIndex(){var e;let r;r=Array.prototype.slice.call(null===(e=this.parentElement)||void 0===e?void 0:e.children),this.index=r.indexOf(this)+1}}kor_stepper_item_decorate([n({type:String,reflect:!0})],korStepperItem.prototype,"label",void 0),kor_stepper_item_decorate([n({type:String,reflect:!0})],korStepperItem.prototype,"info",void 0),kor_stepper_item_decorate([n({type:String,reflect:!0})],korStepperItem.prototype,"icon",void 0),kor_stepper_item_decorate([n({type:Number,reflect:!0})],korStepperItem.prototype,"index",void 0),kor_stepper_item_decorate([n({type:Boolean,reflect:!0})],korStepperItem.prototype,"active",void 0),kor_stepper_item_decorate([n({type:Boolean,reflect:!0})],korStepperItem.prototype,"disabled",void 0),kor_stepper_item_decorate([n({type:Boolean,reflect:!0})],korStepperItem.prototype,"first",void 0),kor_stepper_item_decorate([n({type:Boolean,reflect:!0})],korStepperItem.prototype,"last",void 0),kor_stepper_item_decorate([n({type:String,reflect:!0})],korStepperItem.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",korStepperItem);class korSwipeActions extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot
        name="left"
        @slotchange="${e=>this.setSlotWidth(e.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${e=>this.setSlotWidth(e.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(e){e.assignedNodes().length>0?e.style.minWidth="100%":e.style.minWidth="unset"}handleTouchEnd(){const e=this.scrollLeft-this.clientWidth;e<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):e>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var e,r;const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('slot[name="left"]'),a=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector('slot[name="right"]'),l=this.scrollLeft-this.clientWidth;s&&(s.style.opacity=-1*l/this.clientWidth*3>1?1:.5),a&&(a.style.opacity=1*l/this.clientWidth*3>1?1:.5)}getSlotOpacity(e){const r="left"===e?-1:1,s=(this.scrollLeft-this.clientWidth)*r/this.clientWidth*3;return s>1?1:s<0?0:s}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",korSwipeActions);var kor_swipe_action_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korSwipeAction extends e{static get styles(){return[l,r`
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
      `]}render(){return s` <kor-icon .icon="${this.icon}"></kor-icon> `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"bg-color"===e&&s!==r&&(this.style.backgroundColor=s)}connectedCallback(){super.connectedCallback()}}kor_swipe_action_decorate([n({reflect:!0})],korSwipeAction.prototype,"icon",void 0),kor_swipe_action_decorate([n({reflect:!0,attribute:"bg-color"})],korSwipeAction.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",korSwipeAction);class korSwitch extends e{static get styles(){return[l,r`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return s` <slot></slot> `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",korSwitch);var kor_switch_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korSwitchItem extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?s` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var e;(null===(e=this.parentElement)||void 0===e?void 0:e.childNodes).forEach(e=>{e.active=!1}),this.active=!0}}kor_switch_item_decorate([n({type:String,reflect:!0})],korSwitchItem.prototype,"label",void 0),kor_switch_item_decorate([n({type:String,reflect:!0})],korSwitchItem.prototype,"icon",void 0),kor_switch_item_decorate([n({type:Boolean,reflect:!0})],korSwitchItem.prototype,"active",void 0),kor_switch_item_decorate([n({type:Boolean,reflect:!0})],korSwitchItem.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",korSwitchItem);var kor_tab_item_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTabItem extends e{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot>
        ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
        ${this.label?s` <kor-text class="label">${this.label}</kor-text> `:""}
      </slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var e;(null===(e=this.closest("kor-tabs"))||void 0===e?void 0:e.querySelectorAll("kor-tab-item")).forEach(e=>{e.active=!1}),this.active=!0}}kor_tab_item_decorate([n({type:String,reflect:!0})],korTabItem.prototype,"label",void 0),kor_tab_item_decorate([n({type:String,reflect:!0})],korTabItem.prototype,"icon",void 0),kor_tab_item_decorate([n({type:Boolean,reflect:!0})],korTabItem.prototype,"active",void 0),kor_tab_item_decorate([n({type:Boolean,reflect:!0})],korTabItem.prototype,"disabled",void 0),kor_tab_item_decorate([n({type:String,reflect:!0})],korTabItem.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",korTabItem);var kor_table_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTable extends e{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_table_decorate([n({type:Boolean,reflect:!0})],korTable.prototype,"readonly",void 0),kor_table_decorate([n({type:Boolean,reflect:!0})],korTable.prototype,"condensed",void 0),kor_table_decorate([n({type:String,reflect:!0})],korTable.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",korTable);var kor_table_row_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTableRow extends e{getAllSlottedContent(){return Array.from(this.slots).flatMap(e=>e.assignedElements({flatten:!0}))}static get styles(){return[l,r`
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
      `]}render(){return s` <slot></slot> `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.addEventListener("mouseenter",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(e=>{e.sticky&&(e.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))")})}),this.addEventListener("mouseleave",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(e=>{e.sticky&&(e.style.backgroundColor="rgb(var(--base-3))")})}),this.handleColumns()}handleActive(){var e;let r,s;r=this.closest("kor-table"),(null==r?void 0:r.readonly)||"header"==this.slot||(s=null===(e=this.parentElement)||void 0===e?void 0:e.childNodes,null==s||s.forEach(e=>{e.active=!1,"header"!=e.slot&&e.getAllSlottedContent&&e.getAllSlottedContent().forEach(e=>{e.sticky&&(e.style.backgroundColor="rgb(var(--base-3))")})}),this.active=!0,this.getAllSlottedContent().forEach(e=>{e.sticky&&(e.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))")}))}handleColumns(){const e=this.closest("kor-table");this.style.gridTemplateColumns=e.columns,null==e||e.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=e.columns})}}kor_table_row_decorate([n({type:Boolean,reflect:!0})],korTableRow.prototype,"active",void 0),kor_table_row_decorate([function query_all_e(e){return o({descriptor:r=>({get(){var r,s;return null!==(s=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==s?s:[]},enumerable:!0,configurable:!0})})}("slot")],korTableRow.prototype,"slots",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",korTableRow);var kor_table_cell_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTableCell extends e{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?s`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"grid-cols"==e?this.style.gridColumn=`span ${this.gridCols}`:"sortable"==e&&this.sortable?(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()})):"sticky"==e?this.sticky?(this.style.position="sticky",this.style.backgroundColor="rgb(var(--base-3))",this.style.zIndex&&"0"!==this.style.zIndex||(this.style.zIndex="1")):(this.style.removeProperty("position"),this.style.removeProperty("background-color"),"1"===this.style.zIndex&&this.style.removeProperty("z-index")):"left"==e?this.style.left=s:"top"==e?this.style.top=s:"right"==e?this.style.right=s:"bottom"==e&&(this.style.bottom=s)}handleSort(){var e;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let r=null===(e=this.parentElement)||void 0===e?void 0:e.childNodes;null==r||r.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}kor_table_cell_decorate([n({type:Number,reflect:!0,attribute:"grid-cols"})],korTableCell.prototype,"gridCols",void 0),kor_table_cell_decorate([n({type:String,reflect:!0})],korTableCell.prototype,"alignment",void 0),kor_table_cell_decorate([n({type:Boolean,reflect:!0})],korTableCell.prototype,"head",void 0),kor_table_cell_decorate([n({type:Boolean,reflect:!0})],korTableCell.prototype,"sorted",void 0),kor_table_cell_decorate([n({type:Boolean,reflect:!0})],korTableCell.prototype,"sortable",void 0),kor_table_cell_decorate([n({type:String,reflect:!0,attribute:"sort-direction"})],korTableCell.prototype,"sortDirection",void 0),kor_table_cell_decorate([n({type:Boolean,reflect:!0})],korTableCell.prototype,"sticky",void 0),kor_table_cell_decorate([n({type:String,reflect:!0})],korTableCell.prototype,"left",void 0),kor_table_cell_decorate([n({type:String,reflect:!0})],korTableCell.prototype,"top",void 0),kor_table_cell_decorate([n({type:String,reflect:!0})],korTableCell.prototype,"right",void 0),kor_table_cell_decorate([n({type:String,reflect:!0})],korTableCell.prototype,"bottom",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",korTableCell);var kor_tabs_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTabs extends e{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_tabs_decorate([n({type:String,reflect:!0})],korTabs.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",korTabs);var kor_tag_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTag extends e{constructor(){super(...arguments),this.label="Label"}static get styles(){return[l,r`
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
      `]}render(){return s`
      <!-- icon -->
      ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?s` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?s`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}handleRemove(){this.dispatchEvent(new Event("remove"))}}kor_tag_decorate([n({type:String,reflect:!0})],korTag.prototype,"label",void 0),kor_tag_decorate([n({type:String,reflect:!0})],korTag.prototype,"icon",void 0),kor_tag_decorate([n({type:Boolean,reflect:!0})],korTag.prototype,"button",void 0),kor_tag_decorate([n({type:Boolean,reflect:!0})],korTag.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",korTag);var kor_textarea_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTextarea extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
      <div class="center">
        ${this.label?s` <label class="label">${this.label}</label> `:""}
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
    `}constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var e,r;this.active=!0,null===(r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("textarea"))||void 0===r||r.focus()})}handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}}kor_textarea_decorate([n({type:String,reflect:!0})],korTextarea.prototype,"label",void 0),kor_textarea_decorate([n({type:String,reflect:!0})],korTextarea.prototype,"value",void 0),kor_textarea_decorate([n({type:Number,reflect:!0})],korTextarea.prototype,"rows",void 0),kor_textarea_decorate([n({type:Boolean,reflect:!0})],korTextarea.prototype,"active",void 0),kor_textarea_decorate([n({type:Boolean,reflect:!0})],korTextarea.prototype,"disabled",void 0),kor_textarea_decorate([n({type:Boolean,reflect:!0})],korTextarea.prototype,"readonly",void 0),kor_textarea_decorate([n({type:Boolean,reflect:!0})],korTextarea.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",korTextarea);var kor_toggle_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korToggle extends e{static get styles(){return[l,r`
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
      `]}render(){return s`
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
      ${this.label?s` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}kor_toggle_decorate([n({type:String,reflect:!0})],korToggle.prototype,"label",void 0),kor_toggle_decorate([n({type:Boolean,reflect:!0})],korToggle.prototype,"active",void 0),kor_toggle_decorate([n({type:Boolean,reflect:!0})],korToggle.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",korToggle);var kor_tool_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTool extends e{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,r`
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
      `]}render(){return s`
      ${this.icon?s` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":s` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}kor_tool_decorate([n({type:String,reflect:!0})],korTool.prototype,"label",void 0),kor_tool_decorate([n({type:String,reflect:!0})],korTool.prototype,"icon",void 0),kor_tool_decorate([n({type:String,reflect:!0})],korTool.prototype,"size",void 0),kor_tool_decorate([n({type:Boolean,reflect:!0})],korTool.prototype,"toggle",void 0),kor_tool_decorate([n({type:Boolean,reflect:!0})],korTool.prototype,"active",void 0),kor_tool_decorate([n({type:Boolean,reflect:!0})],korTool.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",korTool);var kor_tooltip_decorate=function(e,r,s,a){var l,c=arguments.length,p=c<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,a);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(p=(c<3?l(p):c>3?l(r,s,p):l(r,s))||p);return c>3&&p&&Object.defineProperty(r,s,p),p};class korTooltip extends e{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,r`
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
      `]}render(){return s`
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
    `}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e;const r="string"==typeof this.target?document.querySelector(this.target):this.target;r&&(r.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),r.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}}kor_tooltip_decorate([n({type:String,reflect:!0})],korTooltip.prototype,"label",void 0),kor_tooltip_decorate([n({type:String,reflect:!0})],korTooltip.prototype,"icon",void 0),kor_tooltip_decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korTooltip.prototype,"flexDirection",void 0),kor_tooltip_decorate([n({type:String,reflect:!0})],korTooltip.prototype,"position",void 0),kor_tooltip_decorate([n({type:String,reflect:!0})],korTooltip.prototype,"target",void 0),kor_tooltip_decorate([n({type:Boolean,reflect:!0})],korTooltip.prototype,"visible",void 0),kor_tooltip_decorate([t()],korTooltip.prototype,"emptyHeader",void 0),kor_tooltip_decorate([t()],korTooltip.prototype,"emptyFunctions",void 0),kor_tooltip_decorate([t()],korTooltip.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",korTooltip);export{korAccordion,korAppBar,korAvatar,korBadge,korBreadcrumbItem,korBreadcrumbs,korButton,korCard,korCheckbox,korDivider,korDrawer,korEmptyState,korGrid,korIcon,korImage,G as korInput,korMenuItem,korModal,korNavbar,korNotificationItem,korNotifications,korPage,korPane,korPopover,korProgressBar,korRadioButton,korSlider,korSpinner,korStepper,korStepperItem,korSwipeAction,korSwipeActions,korSwitch,korSwitchItem,korTabItem,korTable,korTableCell,korTableRow,korTabs,korTag,korText,korTextarea,korToggle,korTool,korTooltip};