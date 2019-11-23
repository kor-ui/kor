import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-card')
export class waCard extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) flexDirection = "column";
  @property({ type: Boolean, reflect: true }) flat = false;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 4px;
        box-sizing: border-box;
      }
      :host(:not([flat])) {
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        padding: 16px;
      }
      /* header */
      slot,
      .header-wrapper,
      .top-wrapper {
        display: flex;
      }
      .header-wrapper,
      slot[name="functions"] {
        height: fit-content;
      }
      .header-wrapper {
        flex: 1;
      }
      .top-wrapper:not(.empty) {
        padding-bottom: 16px;
      }
      slot[name="footer"]:not(.empty) {
        padding-top: 16px;
      }
      .label-wrapper {
        flex: 1;
        display: flex;
        font: bold 16px/24px 'open-sans';
        color: rgba(var(--neutral-1), .90);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .label-wrapper wa-icon {
        margin-right: 8px;
      }
      slot[name="footer"]::slotted(*), 
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      /* content */
      slot:not([name]) {
        flex: 1;
      }
      :host([flexDirection="column"]) slot:not([name]),
      .header-wrapper {
        flex-direction: column;
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
    `
  }

  render() {
    return html`
      <div class="top-wrapper ${this.emptyHeader && this.emptyFunctions && !this.label && !this.icon ? 'empty' : ''}">
        <div class="header-wrapper">
          ${this.label || this.icon ? html`
            <div class="label-wrapper">
              ${this.icon ? html` <wa-icon icon="${this.icon}"></wa-icon> ` : ''}
              ${this.label}
            </div>
            ${!this.emptyHeader && (this.label || this.icon) ? html` <div style="margin-top: 16px"></div> ` : ''}
          ` : ''}
          <!-- header -->
          <slot name="header" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0}" class="${this.emptyHeader ? 'empty' : ''}"></slot>
        </div>
        <!-- functions -->
        <slot name="functions" @slotchange="${(e) => this.emptyFunctions = e.target.assignedNodes().length === 0}"></slot>
      </div>
      <!-- content -->
      <slot></slot>
      <!-- footer -->
      <slot name="footer" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}" class="${this.emptyFooter ? 'empty' : ''}"></slot>
    `
  }
}
