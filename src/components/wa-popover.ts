import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-popover')
export class waPopover extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) flexDirection = "column";
  @property({ type: String, reflect: true }) position = "bottom";
  @property({ type: String, reflect: true }) target;
  @property({ type: Boolean, reflect: true }) visible = false;
  @property({ type: Boolean, reflect: true }) sticky

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return css`
      :host {
        background-color: rgb(var(--base-4));
        border-radius: 4px;
        display: flex;
        box-shadow: var(--shadow-1);
        transition: .1s all ease-in-out, 0s top, 0s left;
        position: fixed;
        opacity: 1;
        z-index: 4;
        width: 240px;
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
      }
      :host([position^="bottom"]:not([visible])) { margin-top: -8px; }
      :host([position^="top"]:not([visible])) { margin-top: 8px; }
      :host([position^="right"]:not([visible])) { margin-left: -8px; }
      :host([position^="left"]:not([visible])) { margin-left: 8px; }
      wa-card {
        background-color: transparent;
        box-shadow: none;
      }
    `
  }

  render() {
    return html`
      <link rel="stylesheet" href="../wa-styles.css">
      <wa-card @click="${(e) => e.stopPropagation()}"
        label="${this.label ? this.label : ''}"
        icon="${this.icon ? this.icon : ''}"
        flexDirection="${this.flexDirection}">
        <slot></slot>
        <slot name="header" slot="${this.emptyHeader ? '' : 'header'}" @slotchange="${(e) => this.emptyHeader = e.target.assignedNodes().length === 0}"></slot>
        <slot name="functions" slot="${this.emptyFunctions ? '' : 'functions'}" @slotchange="${(e) => this.emptyFunctions = e.target.assignedNodes().length === 0}"></slot>
        <slot name="footer" slot="${this.emptyFooter ? '' : 'footer'}" @slotchange="${(e) => this.emptyFooter = e.target.assignedNodes().length === 0}"></slot>
      </wa-card>
    `
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      // add target to listener
      if (propName === "target" && this.target) {
        let tar = document.querySelector(this.target)
        if (tar) {
          tar.addEventListener("click", () => this.handlePosition(tar))
        }
      } 
      // handle position if visibility changes
      else if (propName === "visible" && this.visible) {
        let tar = document.querySelector(this.target)
        if (tar) { this.handlePosition(tar) }
      }
    });
  }

  handlePosition(tar) {
    if (!tar) { return }
    let self = this
    let rect = tar.getBoundingClientRect()
    self.visible = true
    // get y axis
    if (self.position.startsWith("bottom")) {
      self.style.top = `${rect.top + rect.height + 8}px`
    } else if (self.position.startsWith("top")) {
      self.style.top = `${rect.top - self.clientHeight - 8}px`
    } else {
      self.style.top = `${rect.top + (rect.height / 2) - (self.clientHeight / 2)}px`
    }
    // get x axis
    if (self.position.startsWith("right")) {
      self.style.left = `${rect.left + rect.width + 8}px`
    } else if (self.position.startsWith("left")) {
      self.style.left = `${rect.left - self.clientWidth - 8}px`
    } else {
      self.style.left = `${rect.left + (rect.width / 2) - (self.clientWidth / 2)}px`
    }
    !self.sticky ? self.addDocListener(tar) : ''
  }

  addDocListener(tar) {
    let self = this
    let closePopover = function(e) {
      if (e.target !== tar) {
        self.visible = false
        document.removeEventListener("click", closePopover)
      }
    }
    document.addEventListener("click", closePopover)
  }

  attributeChangedCallback(name, oldval, newval) { super.attributeChangedCallback(name, oldval, newval); this.dispatchEvent(new Event(`${name}-changed`)) }

}
