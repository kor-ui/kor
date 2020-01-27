import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-checkbox')
export class waCheckbox extends LitElement {

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
      /* box */
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin: 4px;
        border-radius: 2px;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
        transition: .1s all ease-in-out;
      }
      :host([active]) .box {
        border-color: transparent;
        background: rgb(var(--accent-1));
      }
      /* label */
      wa-text {
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
        :host(:hover:not([active])) .box {
          border-color: rgba(var(--neutral-1), .30);
        }
      }
    `]
  }

  render() {
    return html`
      <input type="checkbox" ?checked="${this.active}" ?readonly="${this.disabled}" value="${this.label}" name="${this.label}">
      <div class="box">
        ${this.active ? html`
          <wa-icon icon="check" size="s" color="white"></wa-icon>
        ` : ''}
      </div>
      ${this.label ? html` 
        <wa-text>${this.label}</wa-text> 
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
