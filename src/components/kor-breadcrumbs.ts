import { LitElement, css, html, customElement } from 'lit-element';
import { sharedStyles } from './shared-styles';

@customElement('kor-breadcrumbs')
export class korBreadcrumbs extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          width: 100%;
          height: fit-content;
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }
}
