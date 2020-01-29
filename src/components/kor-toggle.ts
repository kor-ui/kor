import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('kor-toggle')
export class korToggle extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        cursor: pointer;
      }
      input {
        display: none;
      }
      /* toggle */
      .bg {
        width: 32px;
        height: 20px;
        margin: 2px;
        padding: 2px;
        border-radius: 12px;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
        transition: .1s all ease-in-out;
      }
      :host([active]) .bg {
        border-color: transparent;
        background: rgb(var(--accent-1));
      }
      .dot {
        display: flex;
        transition: .1s all ease-in-out;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: rgba(var(--neutral-1), .60);
      }
      :host([active]) .dot {
        transform: translateX(12px);
        background: white;
      }
      /* label */
      kor-text {
        flex: 1;
        margin-left: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .2;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not(:active):not([active])) .bg {
          border-color: rgba(var(--neutral-1), .30);
        }
        :host(:hover:not(:active):not([active])) .dot {
          background: rgba(var(--neutral-1), .90);
        }
      }
    `]
  }

  render() {
    return html`
      <input type="checkbox" ?checked="${this.active}" ?readonly="${this.disabled}" value="${this.label}" name="${this.label}">
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label ? html` 
        <kor-text>${this.label}</kor-text> 
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => {
      this.active = !this.active;
    })
  }
  
}
