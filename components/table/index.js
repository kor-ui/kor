import*as t from"lit";var r={2730(t,r,l){l(1098)},1098(t,r,l){var s=l(2927),a=l(5707),c=l(4399),__decorate=function(t,r,l,s){var a,c=arguments.length,d=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,r,l,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(d=(c<3?a(d):c>3?a(r,l,d):a(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d};class korIcon extends s.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[c.g,s.css`
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
      `]}render(){var t;return s.html` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?s.html` ${this.icon} `:""}`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(`${t}-changed`)),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&l.indexOf("url")>-1&&this.setBackgroundImage(l)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},5744(t,r,l){l(9574)},9574(t,r,l){var s=l(2927),a=l(5707),c=l(4399),__decorate=function(t,r,l,s){var a,c=arguments.length,d=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,r,l,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(d=(c<3?a(d):c>3?a(r,l,d):a(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d};class korText extends s.LitElement{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[c.g,s.css`
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
      `]}render(){return s.html`<slot></slot>`}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(`${t}-changed`)),"color"==t&&this.color&&(this.style.color=this.color)}}__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"size",void 0),__decorate([(0,a.MZ)({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText)},4399(t,r,l){l.d(r,{g:()=>s});const s=l(2927).css`
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
`},2927(r,l,s){r.exports=(t=>{var r={};return s.d(r,t),r})({LitElement:()=>t.LitElement,css:()=>t.css,html:()=>t.html})},1762(t,r,l){l.d(r,{He:()=>o});const o=({finisher:t,descriptor:r})=>(l,s)=>{var a;if(void 0===s){const s=null!==(a=l.originalKey)&&void 0!==a?a:l.key,c=null!=r?{kind:"method",placement:"prototype",key:s,descriptor:r(l.key)}:{...l,key:s};return null!=t&&(c.finisher=function(r){t(r,s)}),c}{const a=l.constructor;void 0!==r&&Object.defineProperty(l,s,r(s)),null==t||t(a,s)}}},5694(t,r,l){l.d(r,{M:()=>n});const i=(t,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(l){l.createProperty(r.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(l){l.createProperty(r.key,t)}};function n(t){return(r,l)=>void 0!==l?((t,r,l)=>{r.constructor.createProperty(l,t)})(t,r,l):i(t,r)}},229(t,r,l){l.d(r,{Y:()=>e});var s=l(1762);function e(t){return(0,s.He)({descriptor:r=>({get(){var r,l;return null!==(l=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(t))&&void 0!==l?l:[]},enumerable:!0,configurable:!0})})}},1124(){var t;null===(t=window.HTMLSlotElement)||void 0===t||t.prototype.assignedElements},9896(t,r,l){l(1124)},5707(t,r,l){l.d(r,{MZ:()=>s.M,YG:()=>a.Y});var s=l(5694),a=l(229);l(1124),l(9896)}},l={};function __webpack_require__(t){var s=l[t];if(void 0!==s)return s.exports;var a=l[t]={exports:{}};return r[t](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(t,r)=>{for(var l in r)__webpack_require__.o(r,l)&&!__webpack_require__.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},__webpack_require__.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var s=__webpack_require__(2927),a=__webpack_require__(5707),c=__webpack_require__(4399),d=(__webpack_require__(2730),__webpack_require__(5744),function(t,r,l,s){var a,c=arguments.length,d=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,r,l,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(d=(c<3?a(d):c>3?a(r,l,d):a(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d});class korTableCell extends s.LitElement{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[c.g,s.css`
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
      `]}render(){return s.html`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?s.html`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(`${t}-changed`)),"grid-cols"==t?this.style.gridColumn=`span ${this.gridCols}`:"sortable"==t&&this.sortable?(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()})):"sticky"==t?this.sticky?(this.style.position="sticky",this.style.backgroundColor="rgb(var(--base-3))",this.style.zIndex&&"0"!==this.style.zIndex||(this.style.zIndex="1")):(this.style.removeProperty("position"),this.style.removeProperty("background-color"),"1"===this.style.zIndex&&this.style.removeProperty("z-index")):"left"==t?this.style.left=l:"top"==t?this.style.top=l:"right"==t?this.style.right=l:"bottom"==t&&(this.style.bottom=l)}handleSort(){var t;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let r=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==r||r.forEach(t=>{t.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}d([(0,a.MZ)({type:Number,reflect:!0,attribute:"grid-cols"})],korTableCell.prototype,"gridCols",void 0),d([(0,a.MZ)({type:String,reflect:!0})],korTableCell.prototype,"alignment",void 0),d([(0,a.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"head",void 0),d([(0,a.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sorted",void 0),d([(0,a.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sortable",void 0),d([(0,a.MZ)({type:String,reflect:!0,attribute:"sort-direction"})],korTableCell.prototype,"sortDirection",void 0),d([(0,a.MZ)({type:Boolean,reflect:!0})],korTableCell.prototype,"sticky",void 0),d([(0,a.MZ)({type:String,reflect:!0})],korTableCell.prototype,"left",void 0),d([(0,a.MZ)({type:String,reflect:!0})],korTableCell.prototype,"top",void 0),d([(0,a.MZ)({type:String,reflect:!0})],korTableCell.prototype,"right",void 0),d([(0,a.MZ)({type:String,reflect:!0})],korTableCell.prototype,"bottom",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",korTableCell);var kor_table_row_decorate=function(t,r,l,s){var a,c=arguments.length,d=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,r,l,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(d=(c<3?a(d):c>3?a(r,l,d):a(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d};class korTableRow extends s.LitElement{getAllSlottedContent(){return Array.from(this.slots).flatMap(t=>t.assignedElements({flatten:!0}))}static get styles(){return[c.g,s.css`
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
      `]}render(){return s.html` <slot></slot> `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(`${t}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.addEventListener("mouseenter",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))")})}),this.addEventListener("mouseleave",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.handleColumns()}handleActive(){var t;let r,l;r=this.closest("kor-table"),(null==r?void 0:r.readonly)||"header"==this.slot||(l=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes,null==l||l.forEach(t=>{t.active=!1,"header"!=t.slot&&t.getAllSlottedContent&&t.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.active=!0,this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))")}))}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,null==t||t.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=t.columns})}}kor_table_row_decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korTableRow.prototype,"active",void 0),kor_table_row_decorate([(0,a.YG)("slot")],korTableRow.prototype,"slots",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",korTableRow);var kor_table_decorate=function(t,r,l,s){var a,c=arguments.length,d=c<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,r,l,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(d=(c<3?a(d):c>3?a(r,l,d):a(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d};class korTable extends s.LitElement{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[c.g,s.css`
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
      `]}render(){return s.html`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,r,l){super.attributeChangedCallback(t,r,l),this.dispatchEvent(new Event(`${t}-changed`))}}kor_table_decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"readonly",void 0),kor_table_decorate([(0,a.MZ)({type:Boolean,reflect:!0})],korTable.prototype,"condensed",void 0),kor_table_decorate([(0,a.MZ)({type:String,reflect:!0})],korTable.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",korTable);export{korTable};