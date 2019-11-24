import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-app-bar')
export class waAppBar extends LitElement {

  @property({ type: String, reflect: true }) logo;
  @property({ type: String, reflect: true }) label;

  static get styles() {
    return css`
      :host {
        z-index: 3;
        height: 56px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background-color: rgb(var(--base-0));
        box-shadow: var(--shadow-1);
        transition: .1s all ease-in-out;
      }
      .logo {
        height: 32px;
        margin-right: 24px;
      }
      .label {
        font: var(--header-1);
        color: var(--text-1);
        max-width: 320px;
        margin-right: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      /* slots */
      slot {
        display: flex;
        align-items: center;
      }
      slot:not([name]) {
        flex: 1;
      }
      slot[name="functions"]::slotted(*) {
        margin-left: 16px;
      }
      ::slotted(wa-tabs) {
        border-bottom: unset;
      }
    `
  }

  render() {
    return html`
      <!-- logo -->
      ${this.logo ? html` <img class="logo" src="${this.logo}"> ` : ''}
      <!-- label -->
      ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
      <!-- unnamed -->
      <slot></slot>
      <!-- functions -->
      <slot name="functions"></slot>
    `
  }
}
