import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-notification-item')
export class waNotificationItem extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) flexDirection = "column";
  @property({ type: Boolean, reflect: true }) visible = false;
  @property({ type: Boolean, reflect: true }) sticky;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [sharedStyles, css`
      :host {
        transition: .1s all ease-in-out;
        opacity: 1;
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
        max-height: 0px;
        overflow: hidden;
        margin-top: 0;
        margin-bottom: 0;
      }
      wa-card {
        background: rgb(var(--base-4));
      }
      :host(:not([visible]):host-context([position$="right"])) { 
        margin-left: 8px; 
        margin-right: -8px; 
      }
      :host(:not([visible]):host-context([position$="left"])) { 
        margin-left: -8px; 
        margin-right: 8px; 
      }
    `]
  }

  render() {
    return html`
      <wa-card @click="${(e) => e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flexDirection="${this.flexDirection}">
        <slot name="header" slot="${this.emptyHeader ? undefined : 'header'}" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0}"></slot>
        <slot name="functions" slot="functions">
          ${!this.sticky ? html` <wa-icon button icon="close" @click="${() => this.visible = false}"></wa-icon> `: ''}
        </slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter ? undefined : 'footer'}" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}"></slot>
      </wa-card>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }
  
}
