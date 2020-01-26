import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-tag')
export class waTag extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) removable;
  @property({ type: Boolean, reflect: true }) button;

  static get styles() {
    return [sharedStyles, css`
      :host {
        padding: 4px;
        display: flex;
        width: fit-content;
        max-width: 160px;
        border-radius: 4px;
        border: 1px solid rgba(var(--neutral-1), .25);
        transition: .1s ease-in-out;
      }
      .label {
        margin: 0 4px;
      }
      /* button */
      :host([button]) {
        cursor: pointer;
      }
      :host([button]:active) {
        border-color: rgba(var(--neutral-1), .20);
      }
      /* hover inputs */
      @media (hover: hover) {
        :host([button]:not(:active):hover) {
          border-color: rgba(var(--neutral-1), .30);
          background-color: rgba(var(--neutral-1), .05);
        }
      }
    `]
  }

  render() {
    return html`
      <!-- icon -->
      ${this.icon ? html` <wa-icon icon="${this.icon}"></wa-icon> ` : ''}
      <!-- label -->
      ${this.label ? html` <wa-text class="label">${this.label}</wa-text> ` : ''}
      <!-- removable -->
      ${this.removable ? html` <wa-icon icon="close" button @click="${() => this.handleRemove()}"></wa-icon> ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  handleRemove() { 
    this.dispatchEvent(new Event('remove'));
  }
  
}
