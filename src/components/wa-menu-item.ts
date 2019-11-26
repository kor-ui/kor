import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-menu-item')
export class waMenuItem extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) toggle;
  @property({ type: Boolean, reflect: true }) disabled;

  static get styles() {
    return css`
      :host {
        padding: 8px 0;
        display: flex;
        cursor: pointer;
        transition: .1s all ease-in-out;
        overflow: visible;
      }
      .icon {
        margin-right: 8px;
      }
      .label {
        flex: 1;
      }
      /* label */
      .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: var(--body-1);
        color: var(--text-1);
        pointer-events: none;
      }
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      :host(:hover),
      :host([active]) {
        padding: 8px;
        margin-left: -8px;
        margin-right: -8px;
      }
      :host(:hover) {
        background: rgba(var(--neutral-1), .05);
      }
      :host([active]){
        background: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        opacity: .2;
        pointer-events: none;
      }
    `
  }

  render() {
    return html`
      ${this.icon ? html` <wa-icon class="icon" icon="${this.icon}"></wa-icon> ` : ''}
      ${this.label ? html` <label class="label">${this.label}</label> ` : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `
  }
  
  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval)
    this.dispatchEvent(new Event(`${name}-changed`)) 
    let self = this
    // add toggle click listener
    if (name === "toggle" && this.toggle) { this.addEventListener("click", () => this.active = !this.active) }
  }

}
