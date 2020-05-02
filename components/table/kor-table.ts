import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} columns - Defines the column template. It accepts any value also accepted by the standard css grid-template-columns (e.g. repeat(4, 1fr), 40px 1fr auto).
 * @prop {Boolean} readonly - If set to true, disables selection on mouse clicks and the hover effects.
 * @prop {Boolean} condensed - If set to true, condensed the height of the rows and cells.
 *
 * @slot - The container where the table body is rendered (kor-table-rows).
 * @slot header - The container for the header (kor-table-row). It does not scroll with the content, but remains sticky on top.
 */

@customElement('kor-table')
export class korTable extends LitElement {
  @property({ type: Boolean, reflect: true }) readonly;
  @property({ type: Boolean, reflect: true }) condensed;
  @property({ type: String, reflect: true }) columns = 'repeat(24, 1fr)';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          max-height: 100%;
          margin: 0 !important;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
          overflow: auto;
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

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
