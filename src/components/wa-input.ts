import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-input')
export class waInput extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) value;
  @property({ type: String, reflect: true }) type = 'text';
  @property({ type: String, reflect: true }) status;
  @property({ type: Boolean, reflect: true }) condensed;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled;
  @property({ type: Boolean, reflect: true }) readonly;
  // input number properties
  @property({ type: String, reflect: true }) pattern;
  @property({ type: Number, reflect: true }) min;
  @property({ type: Number, reflect: true }) max;
  @property({ type: Number, reflect: true }) step = 1;

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
        width: 100%;
        overflow: hidden;
        background-color: rgba(var(--neutral-1), .05);
      }
      :host,
      .label,
      input {
        transition: .1s all ease-in-out;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
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
      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
      }
      /* active */
      :host([active]) {
        border-color: rgba(var(--neutral-1), .4);
      }
      :host([active]) .label {
        color: rgb(var(--accent-1));
      }
      /* condensed */
      :host([condensed]) {
        height: 32px;
      }
      :host([condensed][value]) .label {
        display: none;
      }
      /* readonly */
      :host([readonly]) {
        background: transparent;
      }
      /* icon */
      :host([icon]) .icon {
        margin-right: 8px;
      }
      /* label */
      .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: var(--body-1);
        color: var(--text-2);
      }
      :host([value]) .label {
        font: var(--body-2);
      }
      :host([label]:not([value])) .label {
        margin-bottom: -16px;
      }
      input, 
      .label {
        line-height: 16px;
      }
      /* clear */
      .clear {
        margin-left: 8px;
        transition: .1s all ease-in-out, .1s opacity ease-in-out .1s;
      }
      :host(:not(:hover):not([active])) .clear {
        transition: .1s all ease-in-out, .1s width ease-in-out .1s, .1s margin ease-in-out .1s;
        width: 0px;
        opacity: 0;
        margin-left: 0;
      }
      /* status */
      .status {
        margin-left: 8px;
      }
      .status[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
      /* increments */
      .increment {
        margin-left: 8px;
      }
    `
  }

  render() {
    return html`
      <link rel="stylesheet" href="../wa-styles.css">
      ${this.icon ? html` <wa-icon class="icon" icon="${this.icon}"></wa-icon> ` : ''}
      <div class="center">
        ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
        <input 
          type="${this.type}" 
          ?readonly="${this.readonly || this.disabled}"
          min="${this.min}" max="${this.max}" step="${this.step}" pattern="${this.pattern}" 
          .value="${this.value !== undefined ? this.value : ''}"
          value="${this.value !== undefined ? this.value : ''}"
          @input=${(e) => e.target.value ? this.value = e.target.value : this.removeAttribute('value')}
          @focus="${() => this.active = true}"
          @blur="${() => this.active = false}"
        >
      </div>
      <!-- clear -->
      ${!this.disabled && !this.readonly && this.value ? html` <wa-icon button class="clear" icon="close" @click="${() => this.clearInput()}"></wa-icon> ` : ''}
      <!-- status -->
      ${this.status === "error" ? html` <wa-icon class="status" icon="cancel"></wa-icon> ` : ''}
      ${this.status === "alert" ? html` <wa-icon class="status" icon="error"></wa-icon> ` : ''}
      ${this.status === "success" ? html` <wa-icon class="status" icon="check_circle" color="rgb(var(--functional-green))"></wa-icon> ` : ''}
      <!-- number increment -->
      ${this.type === "number" && !this.readonly ? html` 
        <wa-icon button class="increment" icon="keyboard_arrow_left" @click="${() => this.handleIncrement('left')}"></wa-icon>
        <wa-icon button class="increment" icon="keyboard_arrow_right" @click="${() => this.handleIncrement('right')}"></wa-icon>
      ` : ''}
      <!-- select box -->
      ${this.type === "select" ? html` <slot></slot> ` : ''}
    `
  }

  clearInput() {
    this.value = undefined
    this.removeAttribute('value')
  }

  handleIncrement(dir) {
    if (dir === "left") { this.value = parseInt(this.value) - this.step } 
    else if (dir === "right") { this.value = parseInt(this.value) + this.step }
  }
}
