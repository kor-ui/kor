import { LitElement, css, html, customElement } from 'lit-element';

@customElement('kor-breadcrumbs')
export class korBreadcrumbs extends LitElement {
  static get styles() {
    return [
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
