import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-nav-bar')
export class waNavbar extends LitElement {

  static get styles() {
    return [sharedStyles, css`
      :host {
        z-index: 2;
      }
      wa-app-bar {
        background-color: rgb(var(--base-2));
      }
    `]
  }

  render() {
    return html`
      <wa-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </wa-app-bar>
    `
  }
  
}
