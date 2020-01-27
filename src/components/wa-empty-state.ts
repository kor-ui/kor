import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-empty-state')
export class waEmptyState extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;

  static get styles() {
    return [sharedStyles, css`
      :host {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      slot[name="footer"] {
        display: flex;
        margin-top: 16px;
      }
      wa-icon + wa-text {
        margin-top: 8px;
      }
    `]
  }

  render() {
    return html`
      ${this.icon ? html`
        <wa-icon icon="${this.icon}" size="xl" color="var(--text-2)"></wa-icon>
      ` : ''}
      ${this.label ? html`
        <wa-text color="text-2">${this.label}</wa-text>
      ` : ''}
      <slot name="footer"></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }
  
}
