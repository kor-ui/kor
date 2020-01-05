import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-card')
export class waCard extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) image;
  @property({ type: String, reflect: true }) flexDirection = "column";
  @property({ type: Boolean, reflect: true }) flat = false;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
      }
      :host(:not([flat])) {
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        padding: 16px;
      }
      /* header */
      slot,
      .header,
      .top {
        display: flex;
        overflow: overlay;
      }
      .header,
      slot[name="functions"] {
        height: fit-content;
      }
      .header {
        flex: 1;
      }
      .top:not(.empty) {
        padding-bottom: 16px;
      }
      slot[name="footer"]:not(.empty) {
        padding-top: 16px;
      }
      .label {
        flex: 1;
        display: flex;
      }
      .label p {
        font: var(--header-1);
        color: var(--text-1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
      }
      .label wa-icon {
        margin-right: 8px;
      }
      slot[name="footer"]::slotted(*:not(:first-child)), 
      slot[name="functions"]::slotted(*) {
        margin-left: 12px;
      }
      /* content */
      slot:not([name]) {
        flex: 1;
        width: 100%;
        padding: 0 16px;
        margin-right: -16px;
        margin-left: -16px;
      }
      :host([flexDirection="column"]) slot:not([name]),
      .header {
        flex-direction: column;
      }
      :host([flexDirection="column"]) slot:not([name])::slotted(*:not(:last-child)) {
        margin-bottom: 12px;
      }
      :host([flexDirection="row"]) slot:not([name])::slotted(*:not(:last-child)) {
        margin-right: 12px;
      }
      /* footer */
      slot[name="footer"] {
        justify-content: flex-end;
      }
      slot[name="header"],
      slot[name="functions"],
      slot[name="footer"] {
        align-items: center;
      }
      /* image */
      .image {
        width: calc(100% + 32px);
        margin: -16px -16px 16px -16px;
      }
    `]
  }

  render() {
    return html`
      ${this.image ? html` <img class="image" src="${this.image}"> ` : ''}
      <div class="top ${this.emptyHeader && this.emptyFunctions && !this.label && !this.icon ? 'empty' : ''}">
        <div class="header">
          ${this.label || this.icon ? html`
            <div class="label">
              ${this.icon ? html` <wa-icon icon="${this.icon}"></wa-icon> ` : ''}
              <p>${this.label}</p>
            </div>
            ${!this.emptyHeader && (this.label || this.icon) ? html` <div style="margin-top: 16px"></div> ` : ''}
          ` : ''}
          <slot name="header" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0}" class="${this.emptyHeader ? 'empty' : ''}"></slot>
        </div>
        <slot name="functions" @slotchange="${(e) => this.emptyFunctions = e.target.assignedNodes().length === 0}"></slot>
      </div>
      <slot></slot>
      <slot name="footer" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}" class="${this.emptyFooter ? 'empty' : ''}"></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

}
