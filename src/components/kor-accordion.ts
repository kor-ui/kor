import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('kor-accordion')
export class korAccordion extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) expanded;
  @property({ type: Boolean, reflect: true }) disabled;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyBody = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [sharedStyles, css`
      kor-card {
        padding: 8px 16px;
      }
      slot:not([name]) {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        transition: .1s all ease-in-out;
      }
      /* expanded */ 
      :host(:not([expanded])) slot:not([name]) {
        margin-top: 0;
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
      }
      .header {
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex: 1;
      }
      .icon {
        margin-right: 8px;
      }
      slot[name="header"] p {
        margin-right: 8px;
        font: var(--header-1);
        color: var(--text-1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        flex: 1;
      }
      :host([expanded]) .expand {
        transform: rotate(180deg);
      }
      /* disabled */
      :host([disabled]) .header {
        opacity: .2;
        pointer-events: none;
      }
    `]
  }

  render() {
    return html`
      <kor-card>
        <slot name="header" slot="header" @click="${() => this.expanded = !this.expanded}">
          <div class="header">
            ${this.icon ? html` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `: ''}
            <p>${this.label}</p>
            <kor-icon button class="expand" icon="keyboard_arrow_down"></kor-icon>
          </div>
        </slot>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
        ${this.expanded ? html` 
          <slot name="footer" slot="${this.emptyFooter ? undefined : 'footer'}" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}"></slot>
        `: ''}
      </kor-card>
    `
  }
  
  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`)) ;
  }

  connectedCallback() {
    super.connectedCallback();
    // remove card padding
    setTimeout(() => (<any>this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top")).style.padding = "0", 0);
  }

}
