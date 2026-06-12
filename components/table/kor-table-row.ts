import { LitElement, css, html } from 'lit';
import { property, queryAll } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 *
 * @slot - Hosts (kor-table-cells).
 */

export class korTableRow extends LitElement {
  @property({ type: Boolean, reflect: true }) active: boolean | undefined;
  @queryAll('slot') slots!: NodeListOf<HTMLSlotElement>;

  getAllSlottedContent(): Array<Element> {
    return Array.from(this.slots).flatMap(
      slot => slot.assignedElements({ flatten: true }));
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => this.handleActive());
    this.addEventListener('mouseenter', () => {
      if (this.active || this.slot == 'header') return;
      // Set highlighted background for sticky cells
      this.getAllSlottedContent().forEach(el => {
        if ((<any>el).sticky) {
          (el as HTMLElement).style.backgroundColor =
            'color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))';
        }
      });
    });
    this.addEventListener('mouseleave', () => {
      if (this.active || this.slot == 'header') return;
      // Set highlighted background for sticky cells
      this.getAllSlottedContent().forEach(el => {
        if ((<any>el).sticky) {
          (el as HTMLElement).style.backgroundColor = 'rgb(var(--base-3))';
        }
      });
    });
    this.handleColumns();
  }

  handleActive() {
    let table: HTMLElement | null, siblings: NodeList | undefined;
    table = this.closest('kor-table');
    if (!(<any>table)?.readonly && this.slot != 'header') {
      siblings = this.parentElement?.childNodes;
      siblings?.forEach((el: any) => {
        (<any>el).active = false;
        // Remove highlighted background from sticky cells
        if ((<any>el).slot == 'header' || !(<any>el).getAllSlottedContent) return;
        (<any>el).getAllSlottedContent().forEach((child: Element) => {
          if ((<any>child).sticky) {
            (child as HTMLElement).style.backgroundColor = 'rgb(var(--base-3))';
          }
        });
      });
      this.active = true;
      // Set highlighted background for sticky cells
      this.getAllSlottedContent().forEach(el => {
        if ((<any>el).sticky) {
          (el as HTMLElement).style.backgroundColor =
            'color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))';
        }
      });
    }
  }

  handleColumns() {
    const table: HTMLElement | null = this.closest('kor-table');
    // define columns on load
    this.style.gridTemplateColumns = (<any>table).columns;
    // listen to column changes
    table?.addEventListener('columns-changed', () => {
      this.style.gridTemplateColumns = (<any>table).columns;
    });
  }
}

if (!window.customElements.get('kor-table-row')) {
  window.customElements.define('kor-table-row', korTableRow);
}
