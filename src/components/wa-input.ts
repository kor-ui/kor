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
        min-height: 40px;
        border-width: 0px 0px 1px 0px;
        border-style: solid;
        border-color: rgba(var(--neutral-1), .2);
        box-sizing: border-box;
        padding: 0 8px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: visible;
        background-color: rgba(var(--neutral-1), .05);
        position: relative;
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
      :host(:hover) {
        border-color: rgba(var(--neutral-1), .4);
      }
      :host([active]) {
        border-color: rgba(var(--neutral-1), .6);
      }
      :host([active]) .label {
        color: rgb(var(--accent-1));
      }
      /* disabled */
      :host([disabled]) {
        opacity: .2;
      }
      :host([disabled]),
      :host([readonly]) {
        pointer-events: none;
      }
      /* readonly */
      :host([readonly]) {
        background: transparent;
      }
      /* condensed */
      :host([condensed]) {
        height: 32px;
      }
      :host([condensed][value]) .label,
      :host([condensed][active]) .label {
        display: none;
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
        pointer-events: none;
      }
      :host([value]) .label,
      :host([active]) .label {
        font: var(--body-2);
      }
      :host([label]:not([value]):not([active])) .label {
        margin-bottom: -16px;
      }
      input, 
      .label {
        line-height: 16px;
      }
      /* clear */
      .clear-icon {
        transition: .1s all ease-in-out, .1s opacity ease-in-out .1s;
      }
      :host(:not(:hover):not([active])) .clear-icon {
        transition: .1s all ease-in-out, .1s width ease-in-out .1s, .1s margin ease-in-out .1s;
        width: 0px;
        opacity: 0;
        margin-left: 0;
      }
      /* status */
      .clear-icon,
      .status-icon,
      .increment-icon,
      .select-icon,
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      .status-icon[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status-icon[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status-icon[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
      /* select */
      :host([type="select"]),
      :host([type="select"]) * {
        cursor: pointer !important;
      }
      :host([type="select"][active]) .select-icon {
        transform: rotate(180deg)
      }
    `
  }

  render() {
    return html`  
      <link rel="stylesheet" href="../wa-styles.css">
      ${this.icon ? html` <wa-icon class="icon" icon="${this.icon}"></wa-icon> ` : ''}
      <div class="center">
        ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
        <input id="input"
          type="${this.type}" 
          ?readonly="${this.readonly || this.disabled || this.type === "select"}"
          min="${this.min}" max="${this.max}" step="${this.step}" pattern="${this.pattern}" 
          .value="${this.value !== undefined ? this.value : ''}"
          value="${this.value !== undefined ? this.value : ''}"
          @input=${(e) => e.target.value ? (this.type !== 'number' ? this.value = e.target.value : '') : this.removeAttribute('value')}
          @focus="${(e) => this.active = true}"
          @blur="${(e) => this.handleBlur(e)}"
        >
      </div>
      <!-- clear -->
      ${!this.disabled && !this.readonly && this.value ? html` <wa-icon button class="clear-icon" icon="close" @click="${() => this.handleClear()}"></wa-icon> ` : ''}
      <!-- status -->
      ${this.status === "error" ? html` <wa-icon class="status-icon" icon="cancel"></wa-icon> ` : ''}
      ${this.status === "alert" ? html` <wa-icon class="status-icon" icon="error"></wa-icon> ` : ''}
      ${this.status === "success" ? html` <wa-icon class="status-icon" icon="check_circle" color="rgb(var(--functional-green))"></wa-icon> ` : ''}
      <!-- number increment -->
      ${this.type === "number" && !this.readonly ? html` 
        <wa-icon button class="increment-icon" icon="keyboard_arrow_left" @click="${() => this.handleIncrement('left')}"></wa-icon>
        <wa-icon button class="increment-icon" icon="keyboard_arrow_right" @click="${() => this.handleIncrement('right')}"></wa-icon>
      ` : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
      <!-- select -->
      ${this.type === "select" ? html` <wa-icon button class="select-icon" icon="arrow_drop_down"></wa-icon> ` : ''}
      ${this.type === "select" && this.active ? html` <wa-popover class="select-popover" visible @visiblechanged="${() => this.handlePopover()}"> <slot></slot> </wa-popover> ` : ''}
    `
  }  
  
  constructor() {
    super()
    this.addEventListener("click", () => this.shadowRoot.querySelector("input").focus())
  }

  handleClear() {
    this.value = undefined
    this.removeAttribute('value')
  }
  
  handleBlur(e) {
    this.type === 'number' ? this.validateMinMax(e.target.value) : ''
    this.active = false
  }

  handleIncrement(dir) {
    if (dir === "left") { this.validateMinMax(parseInt(this.value ? this.value : (this.min ? this.min : 0)) - this.step) }
    else if (dir === "right") { this.validateMinMax(parseInt(this.value ? this.value : (this.min ? this.min : 0)) + this.step) }
  }

  handlePopover() {
    console.log("hi")
    let popover: any = this.shadowRoot.querySelector(".select-popover")
    let rect = this.getBoundingClientRect()
    popover.style.top = rect.top + this.clientHeight
    popover.style.left = rect.left
    popover.style.width = this.clientWidth
  }

  validateMinMax(val) {
    if (val) {
      if (this.min && val < this.min) { this.value = this.min } 
      else if (val > this.max) { this.value = this.max } 
      else { this.value = val }
    }
  }

  attributeChangedCallback(name, oldval, newval) { super.attributeChangedCallback(name, oldval, newval); this.dispatchEvent(new Event(`${name}-changed`)) }

}
