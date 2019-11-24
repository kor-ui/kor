import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-input')
export class waInput extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) value;
  @property({ type: String, reflect: true }) type = 'text';
  @property({ type: Boolean, reflect: true }) condensed;
  @property({ type: Boolean, reflect: true }) active;

  static get styles() {
    return css`
      :host {
        display: flex;    
        align-items: center;
        height: 40px;
        border-width: 0px 0px 1px 0px;
        border-style: solid;
        border-color: rgba(var(--neutral-1), .2);
        box-sizing: border-box;
        padding: 0 8px;
        background-color: rgba(var(--neutral-1), .05);
      }
      :host,
      .label,
      input {
        transition: .1s all ease-in-out;
      }
      :host([active]) {
        border-color: rgb(var(--accent-1));
      }
      :host([condensed]) {
        height: 32px;
      }
      :host([condensed][value]) .label {
        display: none;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      input {
        background: none;
        border: none;
        padding: 0px;
        outline: none;
        -webkit-appearance: none;
        font: var(--body-1);
        color: var(--text-1);
      }
      :host([label]:not([value])) .label {
        margin-bottom: -16px;
      }
      /* icon */
      :host([icon]) .icon {
        margin-right: 8px;
      }
      /* label */
      .label {
        font: var(--body-1);
        color: var(--text-2);
      }
      :host([value]) .label {
        font: var(--body-2);
      }
      input, 
      .label {
        line-height: 16px;
      }
    `
  }

  render() {
    return html`
      ${this.icon ? html` <wa-icon class="icon" icon="${this.icon}"></wa-icon> ` : ''}
      <div class="center">
        ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
        <input 
          type="${this.type}" 
          value="${this.value !== undefined ? this.value : ''}"
          @input=${(e) => e.target.value ? this.value = e.target.value : this.removeAttribute('value')}
          @focus="${() => this.active = true}"
          @blur="${() => this.active = false}"
        >
      </div>
      <!-- dropdown container -->
      ${this.type === "select" ? html` <slot></slot> ` : ''}
    `
  }
}
