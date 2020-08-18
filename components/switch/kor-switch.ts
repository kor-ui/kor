import { LitElement, css, html, customElement } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @slot - Hosts kor-switch-items.
 */

@customElement('kor-switch')
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
          border-radius: 4px;
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
