import { LitElement, css, html } from 'lit';
import { sharedStyles } from '../../shared-styles';

/**
 * @slot - Hosts kor-switch-items.
 */

export class korSwitch extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
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
}

if (!window.customElements.get('kor-switch')) {
  window.customElements.define('kor-switch', korSwitch);
}
