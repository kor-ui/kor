import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {'header-1'|'header-2'|'body-1'|'body-2'} size - Defines the size, line height, font family and initial color of the text. Possible values are `header-1`, `header-2`, `body-1` and `body-2`, but custom styles can be set through css.
 * @prop {String} color - If set, overwrites the initial color of the text. Possible values are var(--text-1) (90% neutral color), var(--text-2) (60% neutral color) and var(--text-3) (20% neutral color), but any custom RGB, RGBA, HEX or color variable can be passed to the property as value as well.
 *
 * @slot - Container where plain text (and/or other elements) is written.
 */

export class korText extends LitElement {
  @property({ type: String, reflect: true }) size = 'body-1';
  @property({ type: String, reflect: true }) color:
    | 'header-1'
    | 'header-2'
    | 'body-1'
    | 'body-2'
    | string
    | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == 'color' && this.color) {
      this.style.color = this.color;
    }
  }
}

if (!window.customElements.get('kor-text')) {
  window.customElements.define('kor-text', korText);
}
