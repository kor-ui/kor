import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../text';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown besides the label.
 * @prop {Boolean} button - If set to true, hover and click effects will be added.
 * @prop {Boolean} removable - If set to true, a close icon is displayed. Clicking on it dispatches a remove event.
 *
 * @fires remove - Dispatched when clicking on the close icon (removable only).
 */

export class korTag extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: Boolean, reflect: true }) button: boolean | undefined;
  @property({ type: Boolean, reflect: true }) removable: boolean | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          padding: var(--spacing-xs);
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 var(--spacing-xs);
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <!-- icon -->
      ${this.icon ? html` <kor-icon icon="${this.icon}"></kor-icon> ` : ''}
      <!-- label -->
      ${this.label
        ? html` <kor-text class="label">${this.label}</kor-text> `
        : ''}
      <!-- removable -->
      ${this.removable
        ? html`
            <kor-icon
              icon="close"
              button
              @click="${() => this.handleRemove()}"
            ></kor-icon>
          `
        : ''}
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  handleRemove() {
    this.dispatchEvent(new Event('remove'));
  }
}

if (!window.customElements.get('kor-tag')) {
  window.customElements.define('kor-tag', korTag);
}
