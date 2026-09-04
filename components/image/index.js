import*as e from"lit";var t={5744(e,t,o){o(9574)},9574(e,t,o){var r=o(2927),a=o(5707),s=o(4399),__decorate=function(e,t,o,r){var a,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(s<3?a(l):s>3?a(t,o,l):a(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l};class korText extends r.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[s.g,r.css`
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
      `]}render(){return r.html`<slot></slot>`}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color&&(this.style.color=this.color)}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(e,t,o){o.d(t,{g:()=>r});const r=o(2927).css`
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
`},2927(t,o,r){t.exports=(e=>{var t={};return r.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,o){o.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function n(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,o){o(1124)},5707(e,t,o){o.d(t,{MZ:()=>r.M});var r=o(5694);o(1124),o(9896)}},o={};function __webpack_require__(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=__webpack_require__(2927),a=__webpack_require__(5707),s=__webpack_require__(4399),l=(__webpack_require__(5744),function(e,t,o,r){var a,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(s<3?a(l):s>3?a(t,o,l):a(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l});class korImage extends r.LitElement{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[s.g,r.css`
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
      `]}render(){return r.html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?r.html` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}}l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"src",void 0),l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"alt",void 0),l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"height",void 0),l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"width",void 0),l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"fit",void 0),l([(0,a.MZ)({type:String,reflect:!0})],korImage.prototype,"legend",void 0),l([(0,a.MZ)({type:String,reflect:!0,attribute:"legend-position"})],korImage.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",korImage);export{korImage};