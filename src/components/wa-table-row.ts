import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-table-row')
export class waTableRow extends LitElement {

  @property({ type: Boolean, reflect: true }) active;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: grid;
        border-bottom: 1px solid rgba(var(--neutral-1), .15);
        transition: .1s all ease-in-out;
      }
      /* header */
      :host([slot="header"]) {
        border-color: rgba(var(--neutral-1), .40);
      }
      /* active */
      :host([active]) {
        background: rgba(var(--neutral-1), .10);
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active]):not([slot="header"])) {
          background: rgba(var(--neutral-1), .05);
        }
        :host(:hover:not([active])):host-context(wa-table[readonly]) {
          background: transparent;
        }
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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => this.handleActive())
    this.handleColumns();
  }

  handleActive() {
    let table: any, siblings: any;
    table = this.closest("wa-table");
    if (!table.readonly && this.slot != "header") {
      siblings = this.parentElement.childNodes;
      siblings.forEach(el => { el.active = false });
      this.active = true;
    }
  }

  handleColumns() {
    let table: any = this.closest("wa-table");
    // define columns on load
    this.style.gridTemplateColumns = table.columns;
    // listen to column changes
    table.addEventListener("columns-changed", () => {
      this.style.gridTemplateColumns = table.columns;
    })
  }
  
}
