import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from './shared-styles';

@customElement('kor-template')
export class korTemplate extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';

  static get styles() {
    return [
      sharedStyles,
      css`
        /* css goes here */
      `,
    ];
  }

  render() {
    return html`
      <!-- conditional dom rendering -->
      ${this.label === 'hi'
        ? html`<p>Render some HTML if hi</p>`
        : html`<p>Render some other HTML if not</p> `}
      <!-- class-prop binding (ternary equation) -->
      <div class="${this.label ? 'label' : 'icon'}">
        <!-- content-prop binding -->
        ${this.label}
      </div>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
