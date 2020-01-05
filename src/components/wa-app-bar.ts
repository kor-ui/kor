import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-app-bar')
export class waAppBar extends LitElement {

  @property({ type: String, reflect: true }) logo;
  @property({ type: String, reflect: true }) label;

  static get styles() {
    return [sharedStyles, css`
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
        height: 24px;
        margin-right: 32px;
      }
      .label {
        font: var(--header-1);
        color: var(--text-1);
        max-width: 320px;
        margin-right: 32px;
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
        margin-left: 12px;
      }
      ::slotted(wa-tabs) {
        border-bottom: unset;
      }
    `]
  }

  render() {
    return html`
      <link rel="stylesheet" href="../wa-styles.css">
      ${this.logo ? html` <img class="logo" src="${this.logo}"> ` : ''}
      ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
      <slot></slot>
      <slot name="functions"></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }
  
}
