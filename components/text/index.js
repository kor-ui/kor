import*as e from"lit";var r={9574(e,r,t){t.d(r,{o:()=>korText});var o=t(2927),a=t(5707),s=t(4399),__decorate=function(e,r,t,o){var a,s=arguments.length,c=s<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,t,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(s<3?a(c):s>3?a(r,t,c):a(r,t))||c);return s>3&&c&&Object.defineProperty(r,t,c),c};class korText extends o.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[s.g,o.css`
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
      `]}render(){return o.html`<slot></slot>`}attributeChangedCallback(e,r,t){super.attributeChangedCallback(e,r,t),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&this.color&&(this.style.color=this.color)}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(e,r,t){t.d(r,{g:()=>o});const o=t(2927).css`
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
`},2927(r,t,o){r.exports=(e=>{var r={};return o.d(r,e),r})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,r,t){t.d(r,{M:()=>n});const i=(e,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(t){t.createProperty(r.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(t){t.createProperty(r.key,e)}};function n(e){return(r,t)=>void 0!==t?((e,r,t)=>{r.constructor.createProperty(t,e)})(e,r,t):i(e,r)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,r,t){t(1124)},5707(e,r,t){t.d(r,{MZ:()=>o.M});var o=t(5694);t(1124),t(9896)}},t={};function __webpack_require__(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var o={};__webpack_require__.d(o,{o:()=>a.o});var a=__webpack_require__(9574);const s=o.o;export{s as korText};