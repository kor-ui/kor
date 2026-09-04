import*as e from"lit";var t={3416(e,t,r){r.d(t,{d:()=>korAppBar});var o=r(2927),a=r(5707),l=r(4399),__decorate=function(e,t,r,o){var a,l=arguments.length,s=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(l<3?a(s):l>3?a(t,r,s):a(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s};class korAppBar extends o.LitElement{static get styles(){return[l.g,o.css`
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
      `]}render(){return o.html`
      ${this.mobile?o.html`
            <slot name="left"></slot>
            ${this.label?o.html` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:o.html`
            ${this.logo?o.html`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?o.html` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korAppBar.prototype,"label",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korAppBar.prototype,"logo",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korAppBar.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",korAppBar)},4399(e,t,r){r.d(t,{g:()=>o});const o=r(2927).css`
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
`},2927(t,r,o){t.exports=(e=>{var t={};return o.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,r){r.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,r){r(1124)},5707(e,t,r){r.d(t,{MZ:()=>o.M});var o=r(5694);r(1124),r(9896)}},r={};function __webpack_require__(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};__webpack_require__.d(o,{d:()=>a.d});var a=__webpack_require__(3416);const l=o.d;export{l as korAppBar};