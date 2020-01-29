import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-drawer')
export class waDrawer extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) position = "left";
  @property({ type: String, reflect: true }) height = "320px";
  @property({ type: String, reflect: true }) width = "320px";
  @property({ type: String, reflect: true, attribute: "flex-direction" }) flexDirection = "column";
  @property({ type: Boolean, reflect: true }) visible = false;
  @property({ type: Boolean, reflect: true }) sticky;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [sharedStyles, css`
      :host {
        transition: .1s all ease-in-out, 0s top, 0s left;
        position: fixed;
        opacity: 1;
        z-index: 5;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
      }
      wa-card {
        position: absolute;
        border-radius: 0px;
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        transition: .2s all ease-in-out, 0s top, 0s left;
      }
      /* position */
      :host([position="left"]) wa-card {
        left: 0;
      }
      :host([position="right"]) wa-card {
        right: 0;
      }
      :host([position="top"]) wa-card {
        top: 0;
      }
      :host([position="bottom"]) wa-card {
        bottom: 0;
      }
      /* animations */
      :host([position="left"]:not([visible])) wa-card {
        margin-left: -40px;
      }
      :host([position="right"]:not([visible])) wa-card {
        margin-right: -40px;
      }
      :host([position="top"]:not([visible])) wa-card {
        margin-top: -40px;
      }
      :host([position="bottom"]:not([visible])) wa-card {
        margin-bottom: -40px;
      }
    `]
  }

  render() {
    return html`
      <wa-card @click="${(e) => e.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}">
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
    if (name === "visible" && this.visible) {
      this.addEventListener("click", () => !this.sticky ? this.visible = false : '');
    }
  }

  getCardSize(): any {
    let size: any = {
      height: undefined,
      width: undefined
    }
    switch (this.position) {
      case 'left':
      case 'right': size.height = '100%'; size.width = this.width; break;
      case 'top':
      case 'bottom': size.height = this.height; size.width = '100%'; break;
    }
    return size;
  }

}
