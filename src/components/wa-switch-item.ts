import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-switch-item')
export class waSwitchItem extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        width: fit-content;
        min-width: 40px;
        max-width: 120px;
        padding: 4px 12px;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        transition: .1s all ease-in-out;
      }
      .label {
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label,
      wa-icon {
        color: var(--text-2);
      }
      /* active */
      :host([active]) .label,
      :host([active]) wa-icon {
        color: var(--text-1);
      }
      :host([active]) {
        background: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:not([active]):not(:active):hover) {
          background: rgba(var(--neutral-1), .05);
        }
        :host([active]:not(:active):hover) {
          background: rgba(var(--neutral-1), .15);
        }
      }
    `]
  }

  render() {
    return html`
      ${this.icon ? html` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      ` : ''}
      ${this.label && !this.icon ? html` 
        <wa-text class="label">${this.label}</wa-text> 
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => this.handleActive())
  }

  handleActive() {
    let siblings: any = this.parentElement.childNodes;
    siblings.forEach(el => { el.active = false });
    (<any>this).active = true;
  }
  
}
