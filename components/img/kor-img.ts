import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} size - Lorem ipsum
 */

@customElement('kor-img')
export class korImg extends LitElement {
  @property({ type: String, reflect: true }) src;
  @property({ type: String, reflect: true }) alt;
  @property({ type: String, reflect: true }) width = 'auto';
  @property({ type: String, reflect: true }) height = 'auto';
  @property({ type: String, reflect: true }) fit = 'contain';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          height: max-content;
          width: max-content;
        }
      `,
    ];
  }

  render() {
    return html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
