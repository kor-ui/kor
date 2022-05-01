import { LitElement, css, html } from 'lit';
import { sharedStyles } from '../../shared-styles';

/**
 * @slot - The default slot. Takes `kor-breadcrumb-item`s as children.
 */

export class korBreadcrumbs extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }
}

if (!window.customElements.get('kor-breadcrumbs')) {
  window.customElements.define('kor-breadcrumbs', korBreadcrumbs);
}
