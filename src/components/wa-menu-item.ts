import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-menu-item')
export class waMenuItem extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) toggle = true;
  @property({ type: Boolean, reflect: true }) disabled;

  static get styles() {
    return [sharedStyles, css`
      :host {
        padding: 8px 0;
        border-radius: 4px;
        display: flex;
        cursor: pointer;
        transition: .1s all ease-in-out;
        overflow: visible;
      }
      wa-icon {
        margin-right: 8px;
      }
      .label {
        flex: 1;
      }
      /* label */
      wa-text {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      :host([active]) {
        padding: 8px;
        margin-left: -8px;
        margin-right: -8px;
        background: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        opacity: .2;
        pointer-events: none;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover) {
          padding: 8px;
          margin-left: -8px;
          margin-right: -8px;
          background: rgba(var(--neutral-1), .05);
        }
    `]
  }

  render() {
    return html`
      ${this.icon ? html` <wa-icon icon="${this.icon}"></wa-icon> ` : ''}
      ${this.label ? html` 
        <wa-text>${this.label}</wa-text> 
      ` : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `
  }
  
  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`)) ;
    // add toggle click listener
    if (name === "toggle" && this.toggle) { this.addEventListener("click", () => this.active = !this.active) }
  }

}
