import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} columns - Defines the column template. It accepts any value also accepted by the standard css grid-template-columns (e.g. repeat(4, 1fr), 40px 1fr auto).
 * @prop {Boolean} readonly - If set to true, disables selection on mouse clicks and the hover effects.
 * @prop {Boolean} condensed - If set to true, condensed the height of the rows and cells.
 *
 * @slot - The container where the table body is rendered (kor-table-rows).
 * @slot header - The container for the header (kor-table-row). It does not scroll with the content, but remains sticky on top.
 * kor-table itself does not overflow (nor its content), but the table has to be placed into kor-card to be scrolled.
 * That reduces additional scrollbars and provides an ability to stick header on top and to stick any cells or column in any way,
 * see kor-table-cell sticky and related attributes
 */

export class korTable extends LitElement {
  @property({ type: Boolean, reflect: true }) readonly: boolean | undefined;
  @property({ type: Boolean, reflect: true }) condensed: boolean | undefined;
  @property({ type: String, reflect: true }) columns = 'repeat(24, 1fr)';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          height: fit-content;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name="header"] {
          position: sticky;
          top: 0;
          z-index: 4;
          background-color: rgb(var(--base-3));
        }
      `,
    ];
  }

  render() {
    return html`
      <slot name="header"></slot>
      <slot></slot>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-table')) {
  window.customElements.define('kor-table', korTable);
}
