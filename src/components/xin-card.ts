import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('xin-card')
export class xinCard extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) flexDirection = "row";

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return css`
      :host {
        background-color: rgb(var(--base-3));
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 4px;
      }
      /* header */
      slot,
      .header-wrapper {
        display: flex;
      }
      slot:not([name="functions"]) {
        padding: 16px;
      }
      slot:not([name]):not(.emptyHeader) {
        padding-top: 0;
      }
      slot:not([name]):not(.emptyFooter) {
        padding-bottom: 0;
      }
      slot[name="footer"].emptyFooter,
      slot[name="header"].emptyHeader {
        padding: 0;
      }
      slot[name="footer"]::slotted(*), 
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
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
      .label-wrapper xin-icon {
        margin-right: 8px;
      }
      /* content */
      slot:not([name]) {
        flex: 1;
      }
      :host([flexDirection="column"]) slot:not([name]) {
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
      <!-- header -->
      <slot name="header" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0 && !this.label}" class="${this.emptyHeader ? 'emptyHeader' : ''}">
        <div class="label-wrapper">
          ${this.icon ? html` <xin-icon icon="${this.icon}"></xin-icon> ` : ''}
          ${this.label}
        </div>
        <slot name="functions"></slot>
      </slot>
      <!-- content -->
      <slot class="${this.emptyHeader ? 'emptyHeader' : ''} ${this.emptyFooter ? 'emptyFooter' : ''}"></slot>
      <!-- footer -->
      <slot name="footer" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}" class="${this.emptyFooter ? 'emptyFooter' : ''}"></slot>
    `
  }
}
