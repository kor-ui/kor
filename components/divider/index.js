import{LitElement as t,css as r,html as e}from"lit";const i=(t,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(e){e.createProperty(r.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(e){e.createProperty(r.key,t)}};function n(t){return(r,e)=>void 0!==e?((t,r,e)=>{r.constructor.createProperty(e,t)})(t,r,e):i(t,r)}var o;null===(o=window.HTMLSlotElement)||void 0===o||o.prototype.assignedElements;const a=r`
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
`;var __decorate=function(t,r,e,o){var a,c=arguments.length,l=c<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,r,e,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(c<3?a(l):c>3?a(r,e,l):a(r,e))||l);return c>3&&l&&Object.defineProperty(r,e,l),l};class korDivider extends t{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[a,r`
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
      `]}render(){return e`<div class="line"></div>`}attributeChangedCallback(t,r,e){super.attributeChangedCallback(t,r,e),this.dispatchEvent(new Event(`${t}-changed`))}}__decorate([n({type:String,reflect:!0})],korDivider.prototype,"spacing",void 0),__decorate([n({type:String,reflect:!0})],korDivider.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",korDivider);export{korDivider};