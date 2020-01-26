import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-notifications')
export class waNotifications extends LitElement {

  @property({ type: String, reflect: true }) position = 'top-right';

  static get styles() {
    return [sharedStyles, css`
      :host {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        box-sizing: border-box;
        padding: 16px;
        margin: 0;
        width: 320px;
        z-index: 6;
      }
      :host([position^="top"]) {
        top: 0px;
      }
      :host([position^="bottom"]) {
        flex-flow: column-reverse;
        bottom: 0px;
      }
      :host([position$="left"]) {
        left: 0px;
      }
      :host([position$="right"]) {
        right: 0px;
      }
      :host([position^="top"]) ::slotted(wa-notification-item[visible]) {
        margin-bottom: 12px;
      }
      :host([position^="bottom"]) ::slotted(wa-notification-item[visible]) {
        margin-top: 12px;
      }
    `]
  }

  render() {
    return html`
      <slot></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }
  
}
