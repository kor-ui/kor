import { LitElement, css, html, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} label - Defines the text label.
 * @prop {String} icon - If set, defines the icon shown before the label.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} toggle - If set to true, clicking on the component will toggle the active property between true and false.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 *
 * @slot - Displayed inside the content area.
 * @slot functions - Shown on the right side.
 */

export class korMenuItem extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) toggle = true;
  @property({ type: Boolean, reflect: true }) disabled;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          padding: 8px 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: 8px;
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        :host([active]) {
          padding: 8px;
          margin-left: -8px;
          margin-right: -8px;
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: 8px;
            margin-left: -8px;
            margin-right: -8px;
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.icon ? html` <kor-icon icon="${this.icon}"></kor-icon> ` : ''}
      ${this.label ? html` <kor-text>${this.label}</kor-text> ` : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    // add toggle click listener
    if (name == 'toggle' && this.toggle) {
      this.addEventListener('click', () => {
        this.active = !this.active;
      });
    }
  }
}

if (!window.customElements.get('kor-menu-item')) {
  window.customElements.define('kor-menu-item', korMenuItem);
}