import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../text';

/**
 * @prop {String} label - Defines the text label.
 * @prop {Boolean} active - Defines whether the item is currently active or not.
 */

export class korBreadcrumbItem extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: Boolean, reflect: true }) active: boolean | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 var(--spacing-xs);
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      ${!this.firstItem()
        ? html`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `
        : ''}
      <kor-text>${this.label}</kor-text>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  firstItem(): boolean {
    let firstItem: boolean, children: any;
    children = Array.prototype.slice.call(this.parentElement?.children);
    firstItem = children.indexOf(this) == 0;
    return firstItem;
  }
}

if (!window.customElements.get('kor-breadcrumb-item')) {
  window.customElements.define('kor-breadcrumb-item', korBreadcrumbItem);
}
