import { LitElement, css, html } from 'lit';
import { sharedStyles } from '../../shared-styles';
import '../app-bar';

/**
 * @slot - The main content area.
 * @slot functions - Shown on the right side.
 */

export class korNavbar extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `;
  }
}

if (!window.customElements.get('kor-nav-bar')) {
  window.customElements.define('kor-nav-bar', korNavbar);
}
