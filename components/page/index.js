import{LitElement as e,css as t,html as r}from"lit";const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}var o;null===(o=window.HTMLSlotElement)||void 0===o||o.prototype.assignedElements;const l=t`
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
`;var __decorate=function(e,t,r,o){var l,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};class korPage extends e{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[l,t`
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
      `]}render(){return r`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.dispatchEvent(new Event(`${e}-changed`))}}__decorate([n({type:String,reflect:!0})],korPage.prototype,"theme",void 0),__decorate([n({type:String,reflect:!0})],korPage.prototype,"padding",void 0),__decorate([n({type:String,reflect:!0,attribute:"flex-direction"})],korPage.prototype,"flexDirection",void 0),__decorate([n({type:Boolean,reflect:!0})],korPage.prototype,"flat",void 0),__decorate([n({type:Boolean,reflect:!0})],korPage.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",korPage);export{korPage};