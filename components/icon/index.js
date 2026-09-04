import*as e from"lit";var t={1098(e,t,o){o.d(t,{G:()=>korIcon});var r=o(2927),c=o(5707),a=o(4399),__decorate=function(e,t,o,r){var c,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(a<3?c(s):a>3?c(t,o,s):c(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};class korIcon extends r.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[a.g,r.css`
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
      `]}render(){var e;return r.html` ${(null===(e=this.icon)||void 0===e?void 0:e.indexOf("url"))?r.html` ${this.icon} `:""}`}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color?this.style.color=this.color:"icon"==e&&o.indexOf("url")>-1&&this.setBackgroundImage(o)}setBackgroundImage(e){this.style.backgroundImage=e}}__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,c.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,c.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},4399(e,t,o){o.d(t,{g:()=>r});const r=o(2927).css`
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
`},2927(t,o,r){t.exports=(e=>{var t={};return r.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,o){o.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function n(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,o){o(1124)},5707(e,t,o){o.d(t,{MZ:()=>r.M});var r=o(5694);o(1124),o(9896)}},o={};function __webpack_require__(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,__webpack_require__),c.exports}__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};__webpack_require__.d(r,{G:()=>c.G});var c=__webpack_require__(1098);const a=r.G;export{a as korIcon};