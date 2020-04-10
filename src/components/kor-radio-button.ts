import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'
import './kor-text'

@customElement('kor-radio-button')
export class korRadioButton extends LitElement {

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
      .circle {
        transition: .1s all ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin: 4px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
      }
      :host([active]) .circle {
        border-color: transparent;
        border: 5px solid rgb(var(--accent-1));
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
        :host(:hover:not([active])) .circle {
          border-color: rgba(var(--neutral-1), .30);
        }
      }
    `]
  }

  render() {
    return html`
      <input type="radio" ?checked="${this.active}" value="${this.label}" name="${this.label}">
      <div class="circle"></div>
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
    this.addEventListener("click", () => this.handleActive())
  }

  handleActive() {
    let siblings: any = this.parentElement.childNodes;
    siblings.forEach(el => { el.active = false });
    (<any>this).active = true;
  }
  
}
