import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../text';

/**
 * @prop {String} alignment - Defines the alignment of items inside the cell. Possible values are left, center and right.
 * @prop {String} sortDirection - (If head, sortable and sorted are true) Defines the direction of sorting. Possible values are asc and desc.
 * @prop {Number} gridCols - Defines how many columns the cell occupies. The sum of all cells in a given row should not surpass the total number of columns in the table (which is 24 by default).
 * @prop {Boolean} head - If set to true, the cell will behave like a table head (use if the parent kor-table-row is placed on the header slot of the table).
 * @prop {Boolean} sortable - (If head is true) If set to true, upon clicking on the cell it will toggle the sorted property.
 * @prop {Boolean} sorted - (If head and sortable are true) If set to true, an arrow will be shown to indicate that the column is sorted.
 * @property({ type: Boolean, reflect: true }) sticky: boolean | undefined - If the table cell should have "position: sticky;" style, i.e. pinned cells implementation
 * @property({ type: String, reflect: true }) left: string | undefined - Works together with sticky attribute only - stick at the position from the left
 * @property({ type: String, reflect: true }) top: string | undefined - Works together with sticky attribute only - stick at the position from the top
 * @property({ type: String, reflect: true }) right: string | undefined - Works together with sticky attribute only - stick at the position from the right
 * @property({ type: String, reflect: true }) bottom: string | undefined  - Works together with sticky attribute only - stick at the position from the bottom
 *
 * @slot - Hosts plain text or other elements.
 */

export class korTableCell extends LitElement {
  @property({ type: Number, reflect: true, attribute: 'grid-cols' }) gridCols:
    | number
    | undefined;
  @property({ type: String, reflect: true }) alignment = 'left';
  @property({ type: Boolean, reflect: true }) head: boolean | undefined;
  @property({ type: Boolean, reflect: true }) sorted: boolean | undefined;
  @property({ type: Boolean, reflect: true }) sortable: boolean | undefined;
  @property({ type: String, reflect: true, attribute: 'sort-direction' })
  sortDirection: string | undefined;
  @property({ type: Boolean, reflect: true }) sticky: boolean | undefined;
  @property({ type: String, reflect: true }) left: string | undefined;
  @property({ type: String, reflect: true }) top: string | undefined;
  @property({ type: String, reflect: true }) right: string | undefined;
  @property({ type: String, reflect: true }) bottom: string | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          align-items: center;
          padding: var(--spacing-m) var(--spacing-s);
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: var(--spacing-s);
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: var(--spacing-xs) 0px var(--spacing-xs) var(--spacing-xs);
          color: var(--text-2);
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head && this.sorted
        ? html`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `
        : ''}
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == 'grid-cols') {
      this.style.gridColumn = `span ${this.gridCols}`;
    } else
    if (name == 'sortable' && this.sortable) {
      if (!this.sortDirection) {
        this.sortDirection = 'asc';
      }
      this.addEventListener('click', () => {
        this.handleSort();
      });
    } else if (name == 'sticky') {
      if (this.sticky) {
        this.style.position = "sticky";
        this.style.backgroundColor = "rgb(var(--base-3))";
        if (!this.style.zIndex || this.style.zIndex === "0") {
          // Above other body cells
          this.style.zIndex = "1";
        }
      } else { // Non-sticky
        this.style.removeProperty('position');
        this.style.removeProperty('background-color');
        if (this.style.zIndex === "1") {
          this.style.removeProperty('z-index');
        }
      }
    } else if (name == 'left') {
      this.style.left = newval;
    } else if (name == 'top') {
      this.style.top = newval;
    } else if (name == 'right') {
      this.style.right = newval;
    } else if (name == 'bottom') {
      this.style.bottom = newval;
    }
  }

  handleSort() {
    if (this.sorted) {
      // switch direction if already sorted
      this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    } else {
      // unsort other heads otherwise
      let siblings: NodeList | undefined = this.parentElement?.childNodes;
      siblings?.forEach((el: any) => {
        el.sorted = false;
      });
      this.sorted = true;
      this.sortDirection = 'asc';
    }
  }
}

if (!window.customElements.get('kor-table-cell')) {
  window.customElements.define('kor-table-cell', korTableCell);
}
