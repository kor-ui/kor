import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-tooltip')
export class waTooltip extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: "flex-direction" }) flexDirection = "column";
  @property({ type: String, reflect: true }) position = "bottom";
  @property({ type: String, reflect: true }) target;
  @property({ type: Boolean, reflect: true }) visible = false;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [sharedStyles, css`
      :host {
        position: fixed;
        z-index: 4;
      }
    `]
  }

  render() {
    return html`
      <wa-popover .label="${this.label}" .icon="${this.icon}" flexDirection="${this.flexDirection}" .target="${this.target}" .position="${this.position}" ?visible="${this.visible}">
        <slot name="header" slot="${this.emptyHeader ? undefined : 'header'}" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0}"></slot>
        <slot name="functions" slot="${this.emptyFunctions ? undefined : 'functions'}" @slotchange="${(e) => this.emptyFunctions = e.target.assignedNodes().length === 0}"></slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter ? undefined : 'footer'}" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}"></slot>
      </wa-popover>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
    // add listener on target changed
    if (name === "target" && this.target) { this.targetObserver(); } 
  }

  targetObserver() {
    let timeout;
    let tar = document.querySelector(this.target);
    if (tar) {
      // show on mouse over
      tar.addEventListener("mouseover", () => {
        timeout = setTimeout(() => this.visible = true, 500);
      });
      // hide on mouse out
      tar.addEventListener("mouseout", () => {
        this.visible = false;
        clearTimeout(timeout);
      });
    }
  }
  
}
