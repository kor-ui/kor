import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-table-cell')
export class waTableCell extends LitElement {

  @property({ type: Number, reflect: true, attribute: "grid-cols" }) gridCols;
  @property({ type: String, reflect: true }) alignment = "left";
  @property({ type: Boolean, reflect: true }) head;
  @property({ type: Boolean, reflect: true }) sorted;
  @property({ type: Boolean, reflect: true }) sortable;
  @property({ type: String, reflect: true, attribute: "sort-direction" }) sortDirection;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        align-items: center;
        padding: 12px 8px;
        font: var(--body-1);
        overflow: hidden;
        cursor: default;
      }
      wa-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* condensed */
      :host:host-context(wa-table[condensed]) {
        padding: 4px 8px;
      }
      /* head */
      :host([head]) wa-text {
        font-weight: bold;
      }
      /* align */
      :host([alignment="center"]) {
        justify-content: center;
      }
      :host([alignment="right"]) {
        justify-content: flex-end;
      }
      /* sortable */
      :host([sortable]) {
        cursor: pointer;
      }
      :host([sort-direction="desc"]) .sort {
        transform: rotate(180deg);
      }
      .sort {
        margin: 4px 0px 4px 4px;
        color: var(--text-2);
      }
    `]
  }

  render() {
    return html`
      <wa-text>
        <slot></slot>
      </wa-text>
      ${this.head && this.sorted ? html `
        <wa-icon size="s" icon="arrow_downward" class="sort"></wa-icon>
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == "grid-cols") {
      this.style.gridColumn = `span ${this.gridCols}`;
    }
    if (name == "sortable" && this.sortable) {
      if (!this.sortDirection) { this.sortDirection = "asc"; }
      this.addEventListener("click", () => { this.handleSort(); })
    }
  }

  handleSort() {
    if (this.sorted) {
      // switch direction if already sorted
      this.sortDirection = this.sortDirection == "asc" ?  "desc" : "asc";
    } else {
      // unsort other heads otherwise
      let siblings: any = this.parentElement.childNodes;
      siblings.forEach(el => { el.sorted = false });
      this.sorted = true;
      this.sortDirection = "asc";
    }
  }
  
}
