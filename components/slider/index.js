import*as e from"lit";var t={5744(e,t,r){r(9574)},9574(e,t,r){var o=r(2927),a=r(5707),s=r(4399),__decorate=function(e,t,r,o){var a,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(s<3?a(l):s>3?a(t,r,l):a(t,r))||l);return s>3&&l&&Object.defineProperty(t,r,l),l};class korText extends o.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[s.g,o.css`
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
`},2927(t,r,o){t.exports=(e=>{var t={};return o.d(t,e),t})({LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html})},5694(e,t,r){r.d(t,{M:()=>n});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}},1124(){var e;null===(e=window.HTMLSlotElement)||void 0===e||e.prototype.assignedElements},9896(e,t,r){r(1124)},5707(e,t,r){r.d(t,{MZ:()=>o.M});var o=r(5694);r(1124),r(9896)}},r={};function __webpack_require__(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o=__webpack_require__(2927),a=__webpack_require__(5707),s=__webpack_require__(4399),l=(__webpack_require__(5744),function(e,t,r,o){var a,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(s<3?a(l):s>3?a(t,r,l):a(t,r))||l);return s>3&&l&&Object.defineProperty(t,r,l),l});class korSlider extends o.LitElement{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[s.g,o.css`
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
      `]}render(){return o.html`
      ${this.label?o.html`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?o.html`
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
    `}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`)),"value"!==e&&"min"!==e&&"max"!==e||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(e){e>=this.min&&e<=this.max?this.value=e:e<this.min?this.value=this.min:e>this.max&&(this.value=this.max)}handleThumbPosition(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".thumb"),r=(this.value-this.min)/(this.max-this.min)*100;t&&r>=0&&r<=100&&(t.style.left=`${r}%`)}handleThumbDrag(e){const t=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let r="mousedown"===e.type?e.clientX:e.touches[0].clientX;const getDeltaX=e=>{e.preventDefault();const o="mousemove"===e.type?e.clientX:e.touches[0].clientX,a=o-r;if(a>t||-1*a>t){const e=Math.floor(a<0?-1*a:a),s=Math.round(e/t),l=a>0?this.value+this.step*s:this.value-this.step*s;l<=this.max&&l>=this.min&&(this.value=l,r=o)}},removeListeners=()=>{window.removeEventListener("mousemove",getDeltaX),window.removeEventListener("touchmove",getDeltaX),window.removeEventListener("mouseup",removeListeners),window.removeEventListener("touchend",removeListeners)};window.addEventListener("mousemove",getDeltaX),window.addEventListener("touchmove",getDeltaX),window.addEventListener("mouseup",removeListeners),window.addEventListener("touchend",removeListeners)}}l([(0,a.MZ)({type:String,reflect:!0})],korSlider.prototype,"label",void 0),l([(0,a.MZ)({type:Number,reflect:!0})],korSlider.prototype,"value",void 0),l([(0,a.MZ)({type:Number,reflect:!0})],korSlider.prototype,"min",void 0),l([(0,a.MZ)({type:Number,reflect:!0})],korSlider.prototype,"max",void 0),l([(0,a.MZ)({type:Number,reflect:!0})],korSlider.prototype,"step",void 0),l([(0,a.MZ)({type:Boolean,reflect:!0})],korSlider.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",korSlider);export{korSlider};